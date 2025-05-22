'use client';

import React, { useState, KeyboardEvent } from 'react';
import { AnticipatoryCopywrite, PredictiveSurface } from '@/components/design-system';
import { Prediction } from '@/lib/types';
import { Send, Sparkles } from 'lucide-react';

interface ConversationalInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (message: string) => void;
  predictions?: Prediction[];
  disabled?: boolean;
  placeholder?: string;
}

export const ConversationalInput: React.FC<ConversationalInputProps> = ({
  value,
  onChange,
  onSubmit,
  predictions = [],
  disabled = false,
  placeholder = "Ask about properties, market trends, compliance..."
}) => {
  const [showPredictions, setShowPredictions] = useState(false);

  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    if (value.trim() && !disabled) {
      onSubmit(value.trim());
    }
  };

  const handlePredictionClick = (prediction: Prediction) => {
    onChange(prediction.content);
    setShowPredictions(false);
  };

  return (
    <div className="space-y-4">
      {/* Prediction Suggestions */}
      {showPredictions && predictions.length > 0 && (
        <div className="space-y-2">
          <AnticipatoryCopywrite variant="conversational-body" className="text-intelligent-gray-600 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-predictive-magenta" />
            Suggested questions
          </AnticipatoryCopywrite>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {predictions.slice(0, 4).map((prediction, index) => (
              <div
                key={index}
                className="p-3 border border-intelligent-gray-200 hover:border-predictive-magenta transition-colors rounded-lg cursor-pointer"
                onClick={() => handlePredictionClick(prediction)}
              >
                <AnticipatoryCopywrite variant="conversational-body" className="text-intelligent-gray-800">
                  {prediction.content}
                </AnticipatoryCopywrite>
                <div className="mt-1 text-xs text-intelligent-gray-600">
                  {Math.round(prediction.confidence * 100)}% confidence
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Input Area */}
      <PredictiveSurface variant="elevated" className="p-4">
        <div className="flex items-end gap-4">
          <div className="flex-1">
            <textarea
              value={value}
              onChange={(e) => onChange(e.target.value)}
              onKeyPress={handleKeyPress}
              onFocus={() => setShowPredictions(true)}
              onBlur={() => setTimeout(() => setShowPredictions(false), 200)}
              placeholder={placeholder}
              disabled={disabled}
              rows={3}
              className="w-full resize-none border-none outline-none bg-transparent text-intelligent-gray-800 placeholder-intelligent-gray-600 font-conversational tracking-conversational leading-relaxed"
            />
          </div>
          
          <button
            onClick={handleSubmit}
            disabled={!value.trim() || disabled}
            className={`p-3 rounded-lg transition-all duration-200 ${
              value.trim() && !disabled
                ? 'bg-predictive-magenta text-conversational-white hover:bg-predictive-magenta/90 hover:scale-105'
                : 'bg-intelligent-gray-200 text-intelligent-gray-600 cursor-not-allowed'
            }`}
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
        
        {/* Character count and tips */}
        <div className="mt-2 flex justify-between items-center text-xs text-intelligent-gray-600">
          <span>
            {value.length}/1000 characters
          </span>
          <span>
            Press Enter to send, Shift+Enter for new line
          </span>
        </div>
      </PredictiveSurface>
    </div>
  );
};