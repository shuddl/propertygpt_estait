// Extended conversation types for Phase 2
import { ConversationMessage, AnticipatedAction, Prediction, User } from './index';

export type { User };

export interface ConversationContext {
  user_intent: string[];
  extracted_entities: {
    location?: string;
    price_range?: { min?: number; max?: number };
    property_type?: string;
    bedrooms?: number;
    bathrooms?: number;
  };
  conversation_stage: 'greeting' | 'discovery' | 'search' | 'analysis' | 'action';
  user_expertise: 'novice' | 'intermediate' | 'expert';
  market_focus: string[];
  interaction_patterns: InteractionPattern[];
}

export interface InteractionPattern {
  type: 'market_analysis_frequent' | 'property_search_repeat' | 'compliance_focus';
  frequency: number;
  last_occurrence: string;
  confidence: number;
}

export interface AnticipatedNeed {
  type: 'property_search' | 'market_analysis' | 'compliance_check' | 'lead_follow_up';
  urgency: 'low' | 'medium' | 'high';
  description: string;
  suggested_action: string;
  confidence: number;
}

export interface ConversationResponse {
  intent: 'property_search' | 'market_analysis' | 'compliance_question' | 'crm_action' | 'general_inquiry';
  response_text: string;
  extracted_entities: Record<string, unknown>;
  anticipatory_actions: AnticipatedAction[];
  follow_up_predictions: Prediction[];
  confidence: number;
  richContent?: {
    type: 'property_grid' | 'market_chart' | 'compliance_answer' | 'lead_summary';
    data: unknown;
  };
}

export interface ConversationState {
  messages: ConversationMessage[];
  predictiveSuggestions: Prediction[];
  conversationContext: ConversationContext;
  anticipatedNeeds: AnticipatedNeed[];
  isThinking: boolean;
  inputValue: string;
  sessionId: string;
}