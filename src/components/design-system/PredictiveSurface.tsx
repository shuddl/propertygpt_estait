import React from 'react';

interface PredictiveSurfaceProps {
  prediction?: string;
  confidence?: number;
  onAnticipate?: () => void;
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'interactive';
  className?: string;
}

export const PredictiveSurface: React.FC<PredictiveSurfaceProps> = ({
  prediction,
  confidence = 0,
  onAnticipate,
  children,
  variant = 'default',
  className = ""
}) => {
  const surfaceClasses = {
    default: 'bg-conversational-white rounded-lg shadow-sm',
    elevated: 'bg-conversational-white rounded-xl shadow-lg',
    interactive: 'bg-conversational-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer'
  };

  return (
    <div className={`relative ${surfaceClasses[variant]} ${className}`}>
      {children}
      
      {prediction && confidence > 0.7 && (
        <div 
          className="absolute -top-2 -right-2 bg-predictive-magenta text-conversational-white px-3 py-1 rounded-full text-xs cursor-pointer animate-predictive-pulse hover:scale-105 transition-transform"
          onClick={onAnticipate}
        >
          {prediction}
        </div>
      )}
    </div>
  );
};