import OpenAI from 'openai';
import { ConversationContext, ConversationResponse } from '@/lib/types/conversation';
import { ConversationMessage, AnticipatedAction, Prediction } from '@/lib/types';

class RateLimiter {
  private requests: number[] = [];
  private maxRequests: number;
  private windowMs: number;

  constructor({ requestsPerMinute }: { requestsPerMinute: number }) {
    this.maxRequests = requestsPerMinute;
    this.windowMs = 60 * 1000; // 1 minute
  }

  async checkLimit(): Promise<void> {
    const now = Date.now();
    // Remove requests outside the current window
    this.requests = this.requests.filter(time => now - time < this.windowMs);
    
    if (this.requests.length >= this.maxRequests) {
      const oldestRequest = this.requests[0];
      const waitTime = this.windowMs - (now - oldestRequest);
      await new Promise(resolve => setTimeout(resolve, waitTime));
      return this.checkLimit();
    }
    
    this.requests.push(now);
  }
}

export class OpenAIService {
  private client: OpenAI;
  private rateLimiter: RateLimiter;

  constructor() {
    const apiKey = process.env.OPENAI_API_KEY || 'demo-key-for-build';
    this.client = new OpenAI({
      apiKey: apiKey,
    });
    this.rateLimiter = new RateLimiter({ requestsPerMinute: 60 });
  }

  async processConversationalInput(
    input: string,
    context: ConversationContext,
    conversationHistory: ConversationMessage[]
  ): Promise<ConversationResponse> {
    // Check if we have a valid API key
    if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY === 'demo-key-for-build') {
      return this.getMockResponse(input);
    }

    await this.rateLimiter.checkLimit();

    const systemPrompt = this.buildSystemPrompt(context);
    const conversationPrompt = this.buildConversationPrompt(input, conversationHistory);

    try {
      const response = await this.client.chat.completions.create({
        model: "gpt-4-turbo-preview",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: conversationPrompt }
        ],
        functions: [
          {
            name: "process_real_estate_query",
            description: "Process real estate conversation with structured response",
            parameters: {
              type: "object",
              properties: {
                intent: {
                  type: "string",
                  enum: ["property_search", "market_analysis", "compliance_question", "crm_action", "general_inquiry"]
                },
                extracted_entities: {
                  type: "object",
                  properties: {
                    location: { type: "string" },
                    price_range: {
                      type: "object",
                      properties: {
                        min: { type: "number" },
                        max: { type: "number" }
                      }
                    },
                    property_type: { type: "string" },
                    bedrooms: { type: "number" },
                    bathrooms: { type: "number" },
                    features: { type: "array", items: { type: "string" } }
                  }
                },
                response_text: { type: "string" },
                anticipatory_actions: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      label: { type: "string" },
                      action: { type: "string" },
                      confidence: { type: "number" }
                    }
                  }
                },
                follow_up_predictions: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      content: { type: "string" },
                      confidence: { type: "number" },
                      category: { type: "string" }
                    }
                  }
                },
                confidence: { type: "number" }
              },
              required: ["intent", "response_text", "confidence"]
            }
          }
        ],
        function_call: { name: "process_real_estate_query" }
      });

      const functionCall = response.choices[0].message.function_call;
      if (!functionCall?.arguments) {
        throw new Error('No function call response received');
      }

      const result = JSON.parse(functionCall.arguments);
      return this.formatResponse(result);
    } catch (error) {
      console.error('OpenAI processing error:', error);
      // Return fallback response
      return {
        intent: 'general_inquiry',
        response_text: "I'm here to help with your real estate needs. Could you please rephrase your question?",
        extracted_entities: {},
        anticipatory_actions: [],
        follow_up_predictions: [],
        confidence: 0.5
      };
    }
  }

  private buildSystemPrompt(context: ConversationContext): string {
    return `You are PropertyGPT, an anticipatory real estate intelligence assistant. Your role is to predict agent needs, surface adjacent opportunities, and provide insights that elevate their capabilities.

CORE PRINCIPLES:
1. Anticipate next 2-3 likely needs based on current conversation
2. Surface opportunities agents haven't considered
3. Provide insights that demonstrate deep market understanding
4. Guide toward workflow optimizations and capability amplification

CURRENT CONTEXT:
- User expertise: ${context.user_expertise}
- Conversation stage: ${context.conversation_stage}
- Market focus: ${context.market_focus.join(', ')}
- Previous intents: ${context.user_intent.join(', ')}

RESPONSE REQUIREMENTS:
- Always suggest 2-3 anticipatory actions
- Predict likely follow-up needs
- Include confidence scores for all suggestions
- Provide specific, actionable insights
- Format responses for conversational UI display

ANTICIPATORY INTELLIGENCE:
Based on context, predict what this agent will likely need next and prepare those suggestions proactively.`;
  }

  private buildConversationPrompt(input: string, history: ConversationMessage[]): string {
    const historyText = history
      .slice(-5) // Last 5 messages for context
      .map(msg => `${msg.sender}: ${msg.content}`)
      .join('\n');
    
    return `Recent conversation:\n${historyText}\n\nUser: ${input}`;
  }

  private formatResponse(result: Record<string, unknown>): ConversationResponse {
    const intent = result.intent as string;
    const validIntents = ['property_search', 'market_analysis', 'compliance_question', 'crm_action', 'general_inquiry'];
    
    return {
      intent: (validIntents.includes(intent) ? intent : 'general_inquiry') as ConversationResponse['intent'],
      response_text: (result.response_text as string) || '',
      extracted_entities: (result.extracted_entities as Record<string, unknown>) || {},
      anticipatory_actions: (result.anticipatory_actions as AnticipatedAction[]) || [],
      follow_up_predictions: (result.follow_up_predictions as Prediction[]) || [],
      confidence: (result.confidence as number) || 0.5
    };
  }

  private getMockResponse(input: string): ConversationResponse {
    // Determine intent based on input keywords
    let intent: ConversationResponse['intent'] = 'general_inquiry';
    let response_text = "Thank you for your question. I'm here to help with your real estate needs.";
    
    if (input.toLowerCase().includes('search') || input.toLowerCase().includes('property') || input.toLowerCase().includes('home')) {
      intent = 'property_search';
      response_text = "I'd be happy to help you search for properties! Here are some options based on your criteria.";
    } else if (input.toLowerCase().includes('market') || input.toLowerCase().includes('trend') || input.toLowerCase().includes('price')) {
      intent = 'market_analysis';
      response_text = "Let me provide you with current market analysis and trends for the area you're interested in.";
    } else if (input.toLowerCase().includes('compliance') || input.toLowerCase().includes('regulation') || input.toLowerCase().includes('law')) {
      intent = 'compliance_question';
      response_text = "I can help you with compliance and regulatory questions. Here's what you need to know.";
    }

    return {
      intent,
      response_text,
      extracted_entities: {},
      anticipatory_actions: [
        {
          label: "View More Details",
          action: "view_details",
          confidence: 0.8,
          handler: () => {}
        },
        {
          label: "Save This Search",
          action: "save_search", 
          confidence: 0.7,
          handler: () => {}
        }
      ],
      follow_up_predictions: [
        {
          content: "Would you like to see similar properties?",
          confidence: 0.75,
          trigger: 'context_cue',
          category: 'property_search'
        }
      ],
      confidence: 0.8
    };
  }
}

export const openaiService = new OpenAIService();