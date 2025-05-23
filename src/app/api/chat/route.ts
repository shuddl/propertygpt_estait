import { NextRequest, NextResponse } from 'next/server';
import { openaiService } from '@/lib/services/OpenAIService';
import { conversationService } from '@/lib/services/ConversationService';
import { z } from 'zod';
import { RichContent } from '@/lib/types';

// Updated authentication for Phase 3
import { requireAuth } from '@/lib/middleware/auth';
import { chatRateLimiter } from '@/lib/middleware/rateLimiter';

const chatRequestSchema = z.object({
  message: z.string().min(1).max(1000),
  sessionId: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    // Apply rate limiting
    const rateLimitResult = await chatRateLimiter(request);
    if (rateLimitResult) return rateLimitResult;

    // Authenticate user
    const user = await requireAuth(request);

    // Extract and validate request data
    const body = await request.json();
    const { message, sessionId } = chatRequestSchema.parse(body);
    
    if (!message || typeof message !== 'string' || message.length < 1) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Get conversation context
    const context = await conversationService.getConversationContext();
    const conversationHistory = await conversationService.getRecentMessages();

    // Process with OpenAI
    const aiResponse = await openaiService.processConversationalInput(
      message,
      context,
      conversationHistory
    );

    // Handle different intent types
    let richContent: RichContent[] = [];
    
    switch (aiResponse.intent) {
      case 'property_search':
        richContent = await handlePropertySearch(aiResponse.extracted_entities);
        break;
      case 'market_analysis':
        richContent = await handleMarketAnalysis(aiResponse.extracted_entities);
        break;
      case 'compliance_question':
        richContent = await handleComplianceQuestion(message);
        break;
      case 'crm_action':
        richContent = await handleCRMAction(aiResponse.extracted_entities, user.id);
        break;
    }

    // Save conversation
    await conversationService.saveMessage(sessionId || 'default', user.id, message, 'user');
    await conversationService.saveMessage(sessionId || 'default', user.id, aiResponse.response_text, 'ai', {
      rich_content: richContent,
      anticipated_actions: aiResponse.anticipatory_actions
    });

    // Update context
    await conversationService.updateContext(sessionId || 'default', aiResponse.extracted_entities, aiResponse.intent);

    return NextResponse.json({
      response: aiResponse.response_text,
      richContent,
      anticipatedActions: aiResponse.anticipatory_actions,
      predictions: aiResponse.follow_up_predictions,
      confidence: aiResponse.confidence,
      intent: aiResponse.intent
    });

  } catch (error) {
    console.error('Chat processing error:', error);

    if (error instanceof Error && error.message === 'Authentication required') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid input', details: error.errors },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: 'Unable to process request' },
      { status: 500 }
    );
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function handlePropertySearch(_entities: Record<string, unknown>): Promise<RichContent[]> {
  // Mock property search for now - will be replaced in Phase 5
  const mockProperties = (await import('@/mock/properties.json')).properties;
  return [{
    type: 'property_grid',
    data: { properties: mockProperties.slice(0, 6) },
    component: 'PropertyGrid'
  }];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function handleMarketAnalysis(_entities: Record<string, unknown>): Promise<RichContent[]> {
  // Mock market analysis - will be replaced in Phase 5
  const mockMarketData = await import('@/mock/market-analysis.json');
  return [{
    type: 'market_chart',
    data: mockMarketData,
    component: 'MarketChart'
  }];
}

async function handleComplianceQuestion(question: string): Promise<RichContent[]> {
  // Mock compliance response - will be replaced in Phase 7
  return [{
    type: 'compliance_answer',
    data: {
      question,
      answer: "This is a mock compliance answer. Full compliance module will be implemented in Phase 7.",
      citations: []
    },
    component: 'ComplianceAnswer'
  }];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function handleCRMAction(entities: Record<string, unknown>, _userId: string): Promise<RichContent[]> {
  // Mock CRM action - will be replaced in Phase 8
  return [{
    type: 'lead_summary',
    data: {
      action: 'Lead captured from conversation',
      leadData: entities
    },
    component: 'LeadSummary'
  }];
}