import { useState, useMemo } from 'react';
import { AnticipatoryCopywrite, PredictiveSurface } from '@/components/design-system';
import { Property, PropertyInsight } from '@/lib/types';
import { PropertyCard } from './PropertyCard';
import { PropertyDetailModal } from './PropertyDetailModal';

interface PropertyGridProps {
  properties: Property[];
  insights?: PropertyInsight[];
  onPropertySelect?: (property: Property) => void;
  onInsightAction?: (insight: PropertyInsight) => void;
}

export const PropertyGrid: React.FC<PropertyGridProps> = ({
  properties,
  insights = [],
  onPropertySelect,
  onInsightAction
}) => {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  // Create asymmetric layout patterns
  const layoutPattern = useMemo(() => {
    return properties.map((_, index) => ({
      span: index % 5 === 0 ? 'col-span-2' : 'col-span-1',
      height: index % 7 === 0 ? 'h-80' : index % 3 === 0 ? 'h-72' : 'h-64'
    }));
  }, [properties]);

  if (properties.length === 0) {
    return (
      <div className="w-full">
        <PredictiveSurface className="p-12 text-center">
          <AnticipatoryCopywrite variant="predictive-heading" className="text-intelligent-gray-800 mb-4">
            No Properties Found
          </AnticipatoryCopywrite>
          <AnticipatoryCopywrite variant="conversational-body" className="text-intelligent-gray-600">
            Try adjusting your search criteria or exploring nearby areas.
          </AnticipatoryCopywrite>
        </PredictiveSurface>
      </div>
    );
  }

  return (
    <div className="w-full space-y-8">
      {/* Market Insights Header */}
      {insights.length > 0 && (
        <div className="space-y-4">
          <AnticipatoryCopywrite variant="insight-emphasis" anticipatory>
            Market Insights
          </AnticipatoryCopywrite>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {insights.slice(0, 2).map((insight, index) => (
              <PredictiveSurface
                key={index}
                prediction={insight.suggestions?.[0]}
                confidence={insight.confidence}
                onAnticipate={() => onInsightAction?.(insight)}
                variant="elevated"
                className="p-6"
              >
                <AnticipatoryCopywrite variant="insight-emphasis" className="text-intelligent-gray-800 mb-2">
                  {insight.title}
                </AnticipatoryCopywrite>
                <AnticipatoryCopywrite variant="conversational-body" className="text-intelligent-gray-600">
                  {insight.description}
                </AnticipatoryCopywrite>
              </PredictiveSurface>
            ))}
          </div>
        </div>
      )}

      {/* Properties Grid with Asymmetric Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {properties.map((property, index) => (
          <PropertyCard
            key={property.id}
            property={property}
            className={`${layoutPattern[index]?.span} ${layoutPattern[index]?.height}`}
            onSelect={() => {
              setSelectedProperty(property);
              onPropertySelect?.(property);
            }}
            asymmetricVariant={index % 3}
          />
        ))}
      </div>

      {/* Property Detail Modal */}
      {selectedProperty && (
        <PropertyDetailModal
          property={selectedProperty}
          isOpen={!!selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      )}
    </div>
  );
};