'use client';

import { useState, useCallback } from 'react';
import { ConversationState, ConversationContext } from '@/lib/types/conversation';
import { Prediction, ConversationMessage } from '@/lib/types';

function generateSessionId(): string {
  return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

export const useAnticipatoryConversation = () => {
  const [state, setState] = useState<ConversationState>({
    messages: [],
    predictiveSuggestions: [],
    conversationContext: {
      user_intent: [],
      extracted_entities: {},
      conversation_stage: 'greeting',
      user_expertise: 'intermediate',
      market_focus: [],
      interaction_patterns: []
    },
    anticipatedNeeds: [],
    isThinking: false,
    inputValue: '',
    sessionId: generateSessionId()
  });

  const generatePredictions = useCallback(async (
    input: string, 
    context: ConversationContext
  ): Promise<Prediction[]> => {
    const predictions: Prediction[] = [];
    
    // Context-based predictions
    if (input.toLowerCase().includes('looking for')) {
      predictions.push({
        content: "Set up automated alerts for similar properties?",
        confidence: 0.85,
        trigger: 'context_cue',
        category: 'property_search'
      });
    }

    // Pattern-based predictions
    if (context.interaction_patterns.some(p => p.type === 'market_analysis_frequent')) {
      predictions.push({
        content: "Generate market snapshot for this area?",
        confidence: 0.78,
        trigger: 'temporal_pattern',
        category: 'market_analysis'
      });
    }

    // Expertise-based predictions
    if (context.user_expertise === 'expert' && input.includes('compliance')) {
      predictions.push({
        content: "Check recent regulatory updates?",
        confidence: 0.82,
        trigger: 'context_cue',
        category: 'compliance'
      });
    }

    return predictions;
  }, []);

  const updateContext = useCallback((updates: Partial<ConversationContext>) => {
    setState(prev => ({
      ...prev,
      conversationContext: {
        ...prev.conversationContext,
        ...updates
      }
    }));
  }, []);

  const addMessage = useCallback((message: ConversationMessage) => {
    setState(prev => ({
      ...prev,
      messages: [...prev.messages, message]
    }));
  }, []);

  const setThinking = useCallback((thinking: boolean) => {
    setState(prev => ({
      ...prev,
      isThinking: thinking
    }));
  }, []);

  const updateInputValue = useCallback((value: string) => {
    setState(prev => ({
      ...prev,
      inputValue: value
    }));
  }, []);

  const updatePredictions = useCallback((predictions: Prediction[]) => {
    setState(prev => ({
      ...prev,
      predictiveSuggestions: predictions
    }));
  }, []);

  return { 
    state, 
    setState, 
    generatePredictions,
    updateContext,
    addMessage,
    setThinking,
    updateInputValue,
    updatePredictions,
    messages: state.messages,
    predictions: state.predictiveSuggestions,
    sendMessage: async (message: string) => {
      // Mock implementation for now
      console.log('Sending message:', message);
    },
    handlePredictionClick: async (prediction: string) => {
      // Mock implementation for now
      console.log('Prediction clicked:', prediction);
    },
    isProcessing: state.isThinking
  };
};