import React from 'react';

interface AnticipatoryCopywriteProps {
  variant: 'predictive-heading' | 'conversational-body' | 'insight-emphasis';
  children: React.ReactNode;
  anticipatory?: boolean;
  className?: string;
}

export const AnticipatoryCopywrite: React.FC<AnticipatoryCopywriteProps> = ({
  variant,
  children,
  anticipatory = false,
  className = ""
}) => {
  const baseClasses = {
    'predictive-heading': 'font-anticipatory font-ultra-thin text-4xl lg:text-5xl tracking-anticipatory leading-tight',
    'conversational-body': 'font-conversational font-conversational text-sm tracking-conversational leading-relaxed',
    'insight-emphasis': 'font-conversational font-predictive text-sm tracking-conversational'
  };

  const colorClasses = anticipatory 
    ? 'text-predictive-magenta' 
    : variant === 'predictive-heading'
      ? 'text-conversational-white'
      : 'text-intelligent-gray-800';

  return (
    <div className={`${baseClasses[variant]} ${colorClasses} ${className}`}>
      {children}
    </div>
  );
};