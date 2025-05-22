import { ConversationContext } from '@/lib/types/conversation';
import { ConversationMessage, RichContent, AnticipatedAction } from '@/lib/types';

export class ConversationService {
  async getConversationContext(): Promise<ConversationContext> {
    // Mock implementation for Phase 2 - will be replaced with Supabase in Phase 3
    return {
      user_intent: [],
      extracted_entities: {},
      conversation_stage: 'discovery',
      user_expertise: 'intermediate',
      market_focus: [],
      interaction_patterns: []
    };
  }

  async getRecentMessages(): Promise<ConversationMessage[]> {
    // Mock implementation for Phase 2 - will be replaced with Supabase in Phase 3
    return [];
  }

  async saveMessage(
    sessionId: string,
    userId: string,
    content: string,
    sender: 'user' | 'ai',
    metadata?: Record<string, unknown>
  ): Promise<ConversationMessage> {
    // Mock implementation for Phase 2 - will be replaced with Supabase in Phase 3
    const message: ConversationMessage = {
      id: `${sender}-${Date.now()}`,
      content,
      sender,
      timestamp: new Date().toISOString(),
      rich_content: metadata?.rich_content as RichContent[],
      anticipated_actions: metadata?.anticipated_actions as AnticipatedAction[]
    };
    
    console.log('Saving message:', message);
    return message;
  }

  async updateContext(
    sessionId: string,
    extractedEntities: Record<string, unknown>,
    intent: string
  ): Promise<void> {
    // Mock implementation for Phase 2 - will be replaced with Supabase in Phase 3
    console.log('Updating context:', { sessionId, extractedEntities, intent });
  }
}

export const conversationService = new ConversationService();