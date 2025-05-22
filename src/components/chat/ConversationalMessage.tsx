import React from 'react';
import { AnticipatoryCopywrite, PredictiveSurface } from '@/components/design-system';
import { ConversationMessage } from '@/lib/types';
import { User, Bot } from 'lucide-react';

interface ConversationalMessageProps {
  message: ConversationMessage;
  onActionSelect: (action: string) => void;
}

export const ConversationalMessage: React.FC<ConversationalMessageProps> = ({
  message,
  onActionSelect
}) => {
  const isUser = message.sender === 'user';
  const isAnticipatory = message.anticipated_actions && message.anticipated_actions.length > 0;

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-6`}>
      <div className={`max-w-3xl ${isUser ? 'ml-12' : 'mr-12'} flex gap-3`}>
        {/* Avatar */}
        {!isUser && (
          <div className="flex-shrink-0 w-10 h-10 bg-predictive-magenta rounded-full flex items-center justify-center">
            <Bot className="w-5 h-5 text-conversational-white" />
          </div>
        )}
        
        <div className="flex-1">
          <PredictiveSurface
            variant={isAnticipatory ? 'elevated' : 'default'}
            className={`p-6 ${
              isUser
                ? 'bg-intelligent-gray-100 border border-intelligent-gray-200'
                : isAnticipatory
                ? 'bg-gradient-to-r from-predictive-magenta to-predictive-magenta/80 text-conversational-white'
                : 'bg-conversational-white border border-intelligent-gray-200'
            }`}
          >
            <AnticipatoryCopywrite 
              variant="conversational-body"
              className={
                isUser 
                  ? 'text-intelligent-gray-800' 
                  : isAnticipatory 
                  ? 'text-conversational-white' 
                  : 'text-intelligent-gray-800'
              }
            >
              {message.content}
            </AnticipatoryCopywrite>

            {/* Rich Content */}
            {message.rich_content && message.rich_content.length > 0 && (
              <div className="mt-6 space-y-4">
                {message.rich_content.map((content, index) => (
                  <div key={index} className="bg-conversational-white/10 rounded-lg p-4">
                    <AnticipatoryCopywrite variant="conversational-body" className="text-conversational-white">
                      Rich content: {content.type}
                    </AnticipatoryCopywrite>
                    <div className="mt-2 text-sm opacity-80">
                      Component: {content.component}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Anticipated Actions */}
            {message.anticipated_actions && message.anticipated_actions.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {message.anticipated_actions.map((action, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm transition-all duration-200 ${
                      isAnticipatory
                        ? 'bg-conversational-white text-predictive-magenta hover:bg-intelligent-gray-100 hover:scale-105'
                        : 'bg-predictive-magenta text-conversational-white hover:bg-predictive-magenta/80 hover:scale-105'
                    }`}
                    onClick={() => onActionSelect(action.action)}
                  >
                    {action.label}
                    <span className="ml-2 text-xs opacity-70">
                      {Math.round(action.confidence * 100)}%
                    </span>
                  </button>
                ))}
              </div>
            )}
          </PredictiveSurface>

          {/* Timestamp */}
          <div className={`mt-2 text-xs text-intelligent-gray-600 ${isUser ? 'text-right' : 'text-left'}`}>
            {new Date(message.timestamp).toLocaleTimeString()}
          </div>
        </div>

        {/* User Avatar */}
        {isUser && (
          <div className="flex-shrink-0 w-10 h-10 bg-intelligent-gray-800 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-conversational-white" />
          </div>
        )}
      </div>
    </div>
  );
};