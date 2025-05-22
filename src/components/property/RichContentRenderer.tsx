import React from 'react';
import { ConversationResponse } from '@/lib/types/conversation';
import { Property } from '@/lib/types';
import { PropertyGrid } from './PropertyGrid';
import { MarketChart } from './MarketChart';
import { ComplianceAnswer } from './ComplianceAnswer';
import { LeadSummary } from './LeadSummary';

interface RichContentRendererProps {
  response: ConversationResponse;
  onInteraction?: (type: string, data: unknown) => void;
}

export const RichContentRenderer: React.FC<RichContentRendererProps> = ({ 
  response, 
  onInteraction 
}) => {
  if (!response.richContent) {
    return null;
  }

  const { type, data } = response.richContent;

  switch (type) {
    case 'property_grid':
      return (
        <PropertyGrid 
          properties={(data as { properties: Property[] }).properties}
        />
      );

    case 'market_chart':
      return (
        <MarketChart 
          data={data as never}
          onInteraction={onInteraction}
        />
      );

    case 'compliance_answer':
      return (
        <ComplianceAnswer 
          data={data as never}
          onInteraction={onInteraction}
        />
      );

    case 'lead_summary':
      return (
        <LeadSummary 
          data={data as never}
          onInteraction={onInteraction}
        />
      );

    default:
      console.warn(`Unknown rich content type: ${type}`);
      return null;
  }
};