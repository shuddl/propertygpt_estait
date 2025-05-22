import { useState } from 'react';
import { AnticipatoryCopywrite, PredictiveSurface } from '@/components/design-system';
import { Property } from '@/lib/types';

interface PropertyCardProps {
  property: Property;
  onSelect: () => void;
  asymmetricVariant?: number;
  className?: string;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  onSelect,
  asymmetricVariant = 0,
  className = ""
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  const isNewListing = property.days_on_market <= 7;
  const isPriceReduced = property.price_change_pct && property.price_change_pct < -0.05;

  return (
    <PredictiveSurface
      variant="interactive"
      className={`group relative overflow-hidden ${className}`}
      onAnticipate={onSelect}
    >
      <div
        className="w-full h-full cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onSelect}
      >
        {/* Property Image */}
        <div className="relative h-3/5 overflow-hidden">
          <img
            src={!imageError && property.images?.[0] ? property.images[0] : '/api/placeholder/400/300'}
            alt={property.address}
            className={`w-full h-full object-cover transition-transform duration-500 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
            onError={() => setImageError(true)}
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-anticipatory-black/60 via-transparent to-transparent" />
          
          {/* Price badge */}
          <div className="absolute top-4 left-4">
            <div className="bg-conversational-white/95 backdrop-blur-sm px-3 py-2 rounded-lg">
              <AnticipatoryCopywrite variant="insight-emphasis">
                ${property.price.toLocaleString()}
              </AnticipatoryCopywrite>
              {property.price_per_sqft && (
                <div className="text-xs text-intelligent-gray-600">
                  ${property.price_per_sqft.toFixed(0)}/sqft
                </div>
              )}
            </div>
          </div>

          {/* Status indicators */}
          <div className="absolute top-4 right-4 space-y-2">
            {isNewListing && (
              <div className="bg-predictive-magenta text-conversational-white px-3 py-1 rounded-full flex items-center space-x-1">
                <div className="w-2 h-2 bg-conversational-white rounded-full animate-predictive-pulse" />
                <span className="text-xs font-predictive">New</span>
              </div>
            )}
            
            {isPriceReduced && (
              <div className="bg-green-500 text-conversational-white px-3 py-1 rounded-full text-xs font-predictive">
                Price ↓
              </div>
            )}
          </div>

          {/* Hover overlay with actions */}
          {isHovered && (
            <div className="absolute inset-0 bg-anticipatory-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="space-y-3">
                <button className="block w-full bg-predictive-magenta text-conversational-white px-6 py-2 rounded-lg text-sm hover:bg-predictive-magenta/80 transition-colors">
                  View Details
                </button>
                <button className="block w-full bg-conversational-white text-intelligent-gray-800 px-6 py-2 rounded-lg text-sm hover:bg-intelligent-gray-100 transition-colors">
                  Save Property
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Property Details */}
        <div className="h-2/5 p-4 space-y-3">
          <div>
            <AnticipatoryCopywrite variant="insight-emphasis" className="text-intelligent-gray-800 line-clamp-1">
              {property.address}
            </AnticipatoryCopywrite>
            <AnticipatoryCopywrite variant="conversational-body" className="text-intelligent-gray-600">
              {property.city}, {property.state} {property.zip_code}
            </AnticipatoryCopywrite>
          </div>

          {/* Property specs */}
          <div className="flex items-center space-x-4 text-intelligent-gray-700">
            <div className="flex items-center space-x-1">
              <span className="text-sm font-predictive">{property.bedrooms}</span>
              <span className="text-xs">bd</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-sm font-predictive">{property.bathrooms}</span>
              <span className="text-xs">ba</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-sm font-predictive">
                {property.square_footage?.toLocaleString()}
              </span>
              <span className="text-xs">sqft</span>
            </div>
          </div>

          {/* Features */}
          {property.features && property.features.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {property.features.slice(0, 2).map((feature, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-intelligent-gray-100 text-intelligent-gray-700 text-xs rounded-full"
                >
                  {feature}
                </span>
              ))}
              {property.features.length > 2 && (
                <span className="px-2 py-1 bg-predictive-magenta text-conversational-white text-xs rounded-full">
                  +{property.features.length - 2}
                </span>
              )}
            </div>
          )}

          {/* Days on market */}
          <div className="flex justify-between items-center text-xs text-intelligent-gray-600">
            <span>DOM: {property.days_on_market} days</span>
            {property.listing_agent?.name && (
              <span className="truncate ml-2">{property.listing_agent.name}</span>
            )}
          </div>
        </div>
      </div>
    </PredictiveSurface>
  );
};