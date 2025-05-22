import React from 'react';
import { cn } from '@/lib/utils';

interface PredictiveSurfaceProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'floating';
  predictive?: boolean;
}

export const PredictiveSurface: React.FC<PredictiveSurfaceProps> = ({
  children,
  className,
  variant = 'default',
  predictive = true,
  ...props
}) => {
  const baseClasses = "transition-all duration-300 ease-in-out";
  
  const variantClasses = {
    default: "bg-white border border-gray-200 rounded-lg",
    elevated: "bg-white shadow-md border border-gray-100 rounded-lg",
    floating: "bg-white shadow-lg border border-gray-50 rounded-xl"
  };

  const predictiveClasses = predictive
    ? "hover:shadow-lg hover:scale-[1.02] hover:border-blue-200"
    : "";

  return (
    <div
      className={cn(
        baseClasses,
        variantClasses[variant],
        predictiveClasses,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};