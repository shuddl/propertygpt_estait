'use client';

import React, { useRef, useEffect } from 'react';
import { AsymmetricContainer, AnticipatoryCopywrite, PredictiveSurface } from '@/components/design-system';
import { ConversationalInput } from './ConversationalInput';
import { ConversationalMessage } from './ConversationalMessage';
import { useAnticipatoryConversation } from '@/lib/hooks/useAnticipatoryConversation';
import { ConversationMessage, Prediction } from '@/lib/types';
import { Brain, TrendingUp, FileText } from 'lucide-react';

interface ChatInterfaceProps {
  user?: {
    id: string;
    name: string;
    email: string;
  };
}

export const AnticipatoryChatInterface: React.FC<ChatInterfaceProps> = ({ 
  user = { id: 'demo-user', name: 'Demo User', email: 'demo@propertygpt.com' }
}) => {
  const { 
    state, 
    generatePredictions, 
    addMessage, 
    setThinking, 
    updateInputValue, 
    updatePredictions 
  } = useAnticipatoryConversation();
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [state.messages]);

  const handleSendMessage = async (message: string) => {
    if (!message.trim() || state.isThinking) return;

    // Add user message immediately
    const userMessage: ConversationMessage = {
      id: `user-${Date.now()}`,
      content: message,
      sender: 'user',
      timestamp: new Date().toISOString()
    };

    addMessage(userMessage);
    updateInputValue('');
    setThinking(true);

    try {
      // Generate predictions while processing
      const predictions = await generatePredictions(message, state.conversationContext);
      updatePredictions(predictions);

      // Send to backend
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message,
          sessionId: state.sessionId
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to process message');
      }

      // Add AI response
      const aiMessage: ConversationMessage = {
        id: `ai-${Date.now()}`,
        content: data.response,
        sender: 'ai',
        timestamp: new Date().toISOString(),
        rich_content: data.richContent,
        anticipated_actions: data.anticipatedActions
      };

      addMessage(aiMessage);
      updatePredictions(data.predictions || []);

    } catch (error) {
      console.error('Failed to send message:', error);
      
      const errorMessage: ConversationMessage = {
        id: `error-${Date.now()}`,
        content: 'I apologize, but I encountered an issue processing your request. Please try again.',
        sender: 'ai',
        timestamp: new Date().toISOString()
      };

      addMessage(errorMessage);
    } finally {
      setThinking(false);
    }
  };

  const handlePredictionSelect = (prediction: Prediction) => {
    updateInputValue(prediction.content);
  };

  const handleActionSelect = (action: string) => {
    console.log('Action selected:', action);
    // Handle anticipated action selection
    updateInputValue(action);
  };

  return (
    <AsymmetricContainer
      predictiveLeft={
        <div className="space-y-8 h-full flex flex-col">
          <div>
            <AnticipatoryCopywrite variant="predictive-heading">
              PropertyGPT
            </AnticipatoryCopywrite>
            <AnticipatoryCopywrite variant="conversational-body" className="text-intelligent-gray-600 mt-2">
              Anticipatory Real Estate Intelligence
            </AnticipatoryCopywrite>
          </div>

          {/* Predictive Suggestions */}
          <div className="flex-1">
            <AnticipatoryCopywrite variant="insight-emphasis" anticipatory className="mb-4">
              Anticipated Needs
            </AnticipatoryCopywrite>
            
            <div className="space-y-3">
              {state.predictiveSuggestions.length === 0 ? (
                <div className="space-y-3">
                  {/* Default suggestions when no predictions */}
                  <PredictiveSurface
                    prediction="Search Properties"
                    confidence={0.9}
                    onAnticipate={() => updateInputValue("I'm looking for properties in Santa Monica")}
                    variant="interactive"
                    className="p-4"
                  >
                    <div className="flex items-center gap-3">
                      <Brain className="w-5 h-5 text-predictive-magenta" />
                      <div>
                        <AnticipatoryCopywrite variant="conversational-body" className="text-intelligent-gray-800">
                          PROPERTY SEARCH
                        </AnticipatoryCopywrite>
                        <div className="mt-1 text-xs text-intelligent-gray-600">
                          Find properties with AI assistance
                        </div>
                      </div>
                    </div>
                  </PredictiveSurface>

                  <PredictiveSurface
                    prediction="Market Analysis"
                    confidence={0.85}
                    onAnticipate={() => updateInputValue("Show me market trends for Beverly Hills")}
                    variant="interactive"
                    className="p-4"
                  >
                    <div className="flex items-center gap-3">
                      <TrendingUp className="w-5 h-5 text-predictive-magenta" />
                      <div>
                        <AnticipatoryCopywrite variant="conversational-body" className="text-intelligent-gray-800">
                          MARKET ANALYSIS
                        </AnticipatoryCopywrite>
                        <div className="mt-1 text-xs text-intelligent-gray-600">
                          Get market insights and trends
                        </div>
                      </div>
                    </div>
                  </PredictiveSurface>

                  <PredictiveSurface
                    prediction="Compliance Help"
                    confidence={0.8}
                    onAnticipate={() => updateInputValue("What are the disclosure requirements for California?")}
                    variant="interactive"
                    className="p-4"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-predictive-magenta" />
                      <div>
                        <AnticipatoryCopywrite variant="conversational-body" className="text-intelligent-gray-800">
                          COMPLIANCE
                        </AnticipatoryCopywrite>
                        <div className="mt-1 text-xs text-intelligent-gray-600">
                          Get regulatory guidance
                        </div>
                      </div>
                    </div>
                  </PredictiveSurface>
                </div>
              ) : (
                state.predictiveSuggestions.map((suggestion, index) => (
                  <PredictiveSurface
                    key={index}
                    prediction={suggestion.content}
                    confidence={suggestion.confidence}
                    onAnticipate={() => handlePredictionSelect(suggestion)}
                    variant="interactive"
                    className="p-4"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <AnticipatoryCopywrite variant="conversational-body" className="text-intelligent-gray-800">
                          {suggestion.category.replace('_', ' ').toUpperCase()}
                        </AnticipatoryCopywrite>
                        <div className="mt-1 text-xs text-intelligent-gray-600">
                          {Math.round(suggestion.confidence * 100)}% confidence
                        </div>
                      </div>
                    </div>
                  </PredictiveSurface>
                ))
              )}
            </div>
          </div>

          {/* User Context */}
          <div className="text-xs text-intelligent-gray-600 space-y-1">
            <div>Stage: {state.conversationContext.conversation_stage}</div>
            <div>Intent: {state.conversationContext.user_intent.join(', ') || 'None'}</div>
            <div>User: {user.name}</div>
          </div>
        </div>
      }
      
      conversationalRight={
        <div className="h-screen flex flex-col">
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-8 space-y-6">
            {state.messages.length === 0 && (
              <div className="flex items-center justify-center h-full">
                <div className="text-center max-w-2xl">
                  <AnticipatoryCopywrite variant="predictive-heading" className="text-intelligent-gray-800 mb-6">
                    How can I help you today?
                  </AnticipatoryCopywrite>
                  <AnticipatoryCopywrite variant="conversational-body" className="text-intelligent-gray-600 mb-8">
                    I can help with property searches, market analysis, compliance questions, and lead management.
                    Try asking me about properties in a specific area or market trends.
                  </AnticipatoryCopywrite>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <PredictiveSurface variant="interactive" className="p-4 text-left">
                      <AnticipatoryCopywrite variant="insight-emphasis" className="text-intelligent-gray-800 mb-2">
                        Property Search
                      </AnticipatoryCopywrite>
                      <AnticipatoryCopywrite variant="conversational-body" className="text-intelligent-gray-600">
                        &quot;Find 3-bedroom homes under $2M in Santa Monica&quot;
                      </AnticipatoryCopywrite>
                    </PredictiveSurface>

                    <PredictiveSurface variant="interactive" className="p-4 text-left">
                      <AnticipatoryCopywrite variant="insight-emphasis" className="text-intelligent-gray-800 mb-2">
                        Market Analysis
                      </AnticipatoryCopywrite>
                      <AnticipatoryCopywrite variant="conversational-body" className="text-intelligent-gray-600">
                        &quot;What are the price trends in Beverly Hills?&quot;
                      </AnticipatoryCopywrite>
                    </PredictiveSurface>
                  </div>
                </div>
              </div>
            )}

            {state.messages.map((message) => (
              <ConversationalMessage
                key={message.id}
                message={message}
                onActionSelect={handleActionSelect}
              />
            ))}

            {/* Thinking State */}
            {state.isThinking && (
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-predictive-magenta rounded-full animate-pulse flex items-center justify-center">
                  <Brain className="w-5 h-5 text-conversational-white animate-pulse" />
                </div>
                <div>
                  <AnticipatoryCopywrite variant="conversational-body" className="text-intelligent-gray-600">
                    Analyzing patterns and generating insights...
                  </AnticipatoryCopywrite>
                  <div className="flex space-x-1 mt-1">
                    <div className="w-2 h-2 bg-predictive-magenta rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-predictive-magenta rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-predictive-magenta rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-8 border-t border-intelligent-gray-200 bg-conversational-white">
            <ConversationalInput
              value={state.inputValue}
              onChange={updateInputValue}
              onSubmit={handleSendMessage}
              predictions={state.predictiveSuggestions}
              disabled={state.isThinking}
            />
          </div>
        </div>
      }
    />
  );
};