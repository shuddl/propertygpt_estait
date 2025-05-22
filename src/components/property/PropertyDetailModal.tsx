import { AnticipatoryCopywrite, PredictiveSurface } from '@/components/design-system';
import { Property } from '@/lib/types';

interface PropertyDetailModalProps {
  property: Property;
  isOpen: boolean;
  onClose: () => void;
}

export const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({
  property,
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-anticipatory-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-conversational-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <AnticipatoryCopywrite variant="predictive-heading" className="text-intelligent-gray-800">
                {property.address}
              </AnticipatoryCopywrite>
              <AnticipatoryCopywrite variant="conversational-body" className="text-intelligent-gray-600 mt-2">
                {property.city}, {property.state} {property.zip_code}
              </AnticipatoryCopywrite>
            </div>
            <button
              onClick={onClose}
              className="text-intelligent-gray-600 hover:text-intelligent-gray-800 text-xl"
            >
              ×
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              {property.images && property.images[0] && (
                <img
                  src={property.images[0]}
                  alt={property.address}
                  className="w-full h-64 object-cover rounded-lg"
                />
              )}
            </div>
            
            <div className="space-y-4">
              <PredictiveSurface className="p-4">
                <AnticipatoryCopywrite variant="insight-emphasis" className="text-intelligent-gray-800 mb-2">
                  ${property.price.toLocaleString()}
                </AnticipatoryCopywrite>
                {property.price_per_sqft && (
                  <AnticipatoryCopywrite variant="conversational-body" className="text-intelligent-gray-600">
                    ${property.price_per_sqft.toFixed(0)} per sqft
                  </AnticipatoryCopywrite>
                )}
              </PredictiveSurface>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <AnticipatoryCopywrite variant="insight-emphasis" className="text-intelligent-gray-800">
                    {property.bedrooms}
                  </AnticipatoryCopywrite>
                  <AnticipatoryCopywrite variant="conversational-body" className="text-intelligent-gray-600">
                    Bedrooms
                  </AnticipatoryCopywrite>
                </div>
                <div className="text-center">
                  <AnticipatoryCopywrite variant="insight-emphasis" className="text-intelligent-gray-800">
                    {property.bathrooms}
                  </AnticipatoryCopywrite>
                  <AnticipatoryCopywrite variant="conversational-body" className="text-intelligent-gray-600">
                    Bathrooms
                  </AnticipatoryCopywrite>
                </div>
                <div className="text-center">
                  <AnticipatoryCopywrite variant="insight-emphasis" className="text-intelligent-gray-800">
                    {property.square_footage?.toLocaleString()}
                  </AnticipatoryCopywrite>
                  <AnticipatoryCopywrite variant="conversational-body" className="text-intelligent-gray-600">
                    Sq Ft
                  </AnticipatoryCopywrite>
                </div>
              </div>

              {property.features && property.features.length > 0 && (
                <div>
                  <AnticipatoryCopywrite variant="insight-emphasis" className="text-intelligent-gray-800 mb-2">
                    Features
                  </AnticipatoryCopywrite>
                  <div className="flex flex-wrap gap-2">
                    {property.features.map((feature, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-intelligent-gray-100 text-intelligent-gray-700 text-sm rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {property.description && (
            <div className="mt-6">
              <AnticipatoryCopywrite variant="insight-emphasis" className="text-intelligent-gray-800 mb-2">
                Description
              </AnticipatoryCopywrite>
              <AnticipatoryCopywrite variant="conversational-body" className="text-intelligent-gray-600">
                {property.description}
              </AnticipatoryCopywrite>
            </div>
          )}

          <div className="mt-6 flex space-x-4">
            <button className="bg-predictive-magenta text-conversational-white px-6 py-3 rounded-lg hover:bg-predictive-magenta/80 transition-colors">
              Schedule Tour
            </button>
            <button className="bg-intelligent-gray-200 text-intelligent-gray-800 px-6 py-3 rounded-lg hover:bg-intelligent-gray-300 transition-colors">
              Save Property
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};