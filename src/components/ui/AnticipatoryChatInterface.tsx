import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { PredictiveSurface } from './PredictiveSurface';
import { useAnticipatoryConversation } from '@/lib/hooks/useAnticipatoryConversation';

interface AnticipatoryChatInterfaceProps {
  onMessageSent?: (message: string) => void;
}

export const AnticipatoryChatInterface: React.FC<AnticipatoryChatInterfaceProps> = ({
  onMessageSent
}) => {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const {
    messages,
    predictions,
    sendMessage,
    handlePredictionClick,
    isProcessing
  } = useAnticipatoryConversation();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const messageText = input.trim();
    setInput('');
    setIsLoading(true);
    
    try {
      await sendMessage(messageText);
      onMessageSent?.(messageText);
    } catch (error) {
      console.error('Failed to send message:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePredictionSelect = async (prediction: string) => {
    setInput(prediction);
    await handlePredictionClick(prediction);
    textareaRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };


  return (
    <PredictiveSurface className="flex flex-col h-full max-h-[800px]">
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.sender === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-900'
              }`}
            >
              <div className="whitespace-pre-wrap">{message.content}</div>
              
              {/* Rich Content */}
              {message.rich_content && message.rich_content.length > 0 && (
                <div className="mt-3">
                  {message.rich_content.map((content, index) => (
                    <div key={index} className="mb-2">
                      {/* TODO: Render rich content based on type */}
                      <div className="text-sm text-gray-600">
                        Rich content: {content.type}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Timestamp */}
              <div
                className={`text-xs mt-2 ${
                  message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                }`}
              >
                {new Date(message.timestamp).toLocaleTimeString()}
              </div>
            </div>
          </div>
        ))}
        
        {/* Loading indicator */}
        {(isLoading || isProcessing) && (
          <div className="flex justify-start">
            <div className="bg-gray-100 rounded-lg p-3 flex items-center gap-2">
              <Sparkles className="h-4 w-4 animate-spin text-blue-600" />
              <span className="text-gray-600">Thinking...</span>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Predictive Suggestions */}
      {predictions.length > 0 && !isLoading && (
        <div className="px-4 py-2 border-t bg-gray-50">
          <div className="text-sm text-gray-600 mb-2">Suggested responses:</div>
          <div className="flex flex-wrap gap-2">
            {predictions.map((prediction, index) => (
              <Badge
                key={index}
                variant="outline"
                className="cursor-pointer hover:bg-blue-50 hover:border-blue-300 transition-colors"
                onClick={() => handlePredictionSelect(prediction.content)}
              >
                {prediction.content}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {/* Input Area */}
      <Card className="m-4 mt-0">
        <CardContent className="p-4">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about properties, market trends, compliance, or leads..."
              className="flex-1 min-h-[40px] max-h-[120px] resize-none"
              disabled={isLoading}
            />
            <Button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="self-end"
            >
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </CardContent>
      </Card>
    </PredictiveSurface>
  );
};