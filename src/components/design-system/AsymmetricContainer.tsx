import React from 'react';

interface AsymmetricContainerProps {
  predictiveLeft?: React.ReactNode;
  conversationalRight?: React.ReactNode;
  anticipatoryElements?: React.ReactNode;
  className?: string;
}

export const AsymmetricContainer: React.FC<AsymmetricContainerProps> = ({
  predictiveLeft,
  conversationalRight,
  anticipatoryElements,
  className = ""
}) => {
  return (
    <div className={`min-h-screen bg-anticipatory-black flex ${className}`}>
      <aside className="w-asymmetric-third bg-anticipatory-black p-8 relative overflow-hidden">
        {predictiveLeft}
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-intelligent-gray-200 to-transparent opacity-30" />
        <div className="absolute bottom-0 right-4 w-32 h-px bg-predictive-magenta opacity-60" />
      </aside>
      
      <main className="w-asymmetric-two-thirds bg-conversational-white relative overflow-hidden">
        {conversationalRight}
        {anticipatoryElements}
        <div className="absolute top-8 left-0 w-16 h-px bg-predictive-magenta opacity-40" />
      </main>
    </div>
  );
};