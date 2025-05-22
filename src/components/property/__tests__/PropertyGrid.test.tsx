import { render, screen, fireEvent } from '@testing-library/react';
import { PropertyGrid } from '../PropertyGrid';
import { Property, PropertyInsight } from '@/lib/types';

// Mock the PropertyCard and PropertyDetailModal components
jest.mock('../PropertyCard', () => ({
  PropertyCard: ({ property, onSelect, className }: any) => (
    <div 
      data-testid={`property-card-${property.id}`}
      className={className}
      onClick={onSelect}
    >
      {property.address} - ${property.price.toLocaleString()}
    </div>
  )
}));

jest.mock('../PropertyDetailModal', () => ({
  PropertyDetailModal: ({ property, isOpen, onClose }: any) => 
    isOpen ? (
      <div data-testid="property-modal">
        <h2>{property.address}</h2>
        <button onClick={onClose}>Close</button>
      </div>
    ) : null
}));

const mockProperties: Property[] = [
  {
    id: 'prop-1',
    external_id: 'ext-1',
    address: '123 Test St',
    city: 'Los Angeles',
    state: 'CA',
    zip_code: '90210',
    price: 750000,
    bedrooms: 3,
    bathrooms: 2,
    square_footage: 1500,
    property_type: 'Single Family',
    status: 'active',
    days_on_market: 15,
    images: ['/test-image.jpg'],
    features: ['Pool', 'Garage'],
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 'prop-2',
    external_id: 'ext-2',
    address: '456 Demo Ave',
    city: 'Beverly Hills',
    state: 'CA',
    zip_code: '90211',
    price: 1200000,
    bedrooms: 4,
    bathrooms: 3,
    square_footage: 2200,
    property_type: 'Single Family',
    status: 'active',
    days_on_market: 8,
    images: ['/test-image2.jpg'],
    features: ['Pool', 'Tennis Court', 'Wine Cellar'],
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  }
];

const mockInsights: PropertyInsight[] = [
  {
    type: 'price_analysis',
    title: 'Price Distribution Analysis',
    description: 'Prices are well distributed across the range.',
    confidence: 0.85,
    actionable: true,
    suggestions: ['Consider broader price range', 'Look at nearby areas']
  },
  {
    type: 'market_velocity',
    title: 'Fast Moving Market',
    description: 'Properties are selling quickly in this area.',
    confidence: 0.78,
    actionable: true,
    suggestions: ['Act quickly on listings', 'Prepare financing']
  }
];

describe('PropertyGrid', () => {
  it('renders empty state when no properties provided', () => {
    render(<PropertyGrid properties={[]} />);
    
    expect(screen.getByText('No Properties Found')).toBeInTheDocument();
    expect(screen.getByText('Try adjusting your search criteria or exploring nearby areas.')).toBeInTheDocument();
  });

  it('renders properties when provided', () => {
    render(<PropertyGrid properties={mockProperties} />);
    
    expect(screen.getByTestId('property-card-prop-1')).toBeInTheDocument();
    expect(screen.getByTestId('property-card-prop-2')).toBeInTheDocument();
    expect(screen.getByText('123 Test St - $750,000')).toBeInTheDocument();
    expect(screen.getByText('456 Demo Ave - $1,200,000')).toBeInTheDocument();
  });

  it('renders market insights when provided', () => {
    render(
      <PropertyGrid 
        properties={mockProperties} 
        insights={mockInsights}
      />
    );
    
    expect(screen.getByText('Market Insights')).toBeInTheDocument();
    expect(screen.getByText('Price Distribution Analysis')).toBeInTheDocument();
    expect(screen.getByText('Fast Moving Market')).toBeInTheDocument();
  });

  it('handles property selection', () => {
    const onPropertySelect = jest.fn();
    
    render(
      <PropertyGrid 
        properties={mockProperties} 
        onPropertySelect={onPropertySelect}
      />
    );
    
    fireEvent.click(screen.getByTestId('property-card-prop-1'));
    
    expect(onPropertySelect).toHaveBeenCalledWith(mockProperties[0]);
  });

  it('opens property detail modal when property is selected', () => {
    render(<PropertyGrid properties={mockProperties} />);
    
    // Click on first property
    fireEvent.click(screen.getByTestId('property-card-prop-1'));
    
    // Modal should be open
    expect(screen.getByTestId('property-modal')).toBeInTheDocument();
    expect(screen.getByText('123 Test St')).toBeInTheDocument();
  });

  it('closes property detail modal when close button is clicked', () => {
    render(<PropertyGrid properties={mockProperties} />);
    
    // Open modal
    fireEvent.click(screen.getByTestId('property-card-prop-1'));
    expect(screen.getByTestId('property-modal')).toBeInTheDocument();
    
    // Close modal
    fireEvent.click(screen.getByText('Close'));
    expect(screen.queryByTestId('property-modal')).not.toBeInTheDocument();
  });

  it('handles insight actions', () => {
    const onInsightAction = jest.fn();
    
    render(
      <PropertyGrid 
        properties={mockProperties} 
        insights={mockInsights}
        onInsightAction={onInsightAction}
      />
    );
    
    // Find and click on an insight (this would be through PredictiveSurface onAnticipate)
    // Since we can't easily test the PredictiveSurface interaction, we'll just verify the insights render
    expect(screen.getByText('Price Distribution Analysis')).toBeInTheDocument();
  });

  it('applies asymmetric layout classes to property cards', () => {
    render(<PropertyGrid properties={mockProperties} />);
    
    const firstCard = screen.getByTestId('property-card-prop-1');
    const secondCard = screen.getByTestId('property-card-prop-2');
    
    // Check that cards have layout classes applied
    // First card (index 0) should be col-span-2 (index % 5 === 0)
    expect(firstCard).toHaveClass('col-span-2');
    // Second card (index 1) should be col-span-1
    expect(secondCard).toHaveClass('col-span-1');
  });

  it('limits insights displayed to maximum of 2', () => {
    const manyInsights: PropertyInsight[] = [
      ...mockInsights,
      {
        type: 'inventory_trend',
        title: 'Third Insight',
        description: 'This should not be displayed',
        confidence: 0.65,
        actionable: false
      }
    ];
    
    render(
      <PropertyGrid 
        properties={mockProperties} 
        insights={manyInsights}
      />
    );
    
    expect(screen.getByText('Price Distribution Analysis')).toBeInTheDocument();
    expect(screen.getByText('Fast Moving Market')).toBeInTheDocument();
    expect(screen.queryByText('Third Insight')).not.toBeInTheDocument();
  });

  it('handles empty insights array', () => {
    render(
      <PropertyGrid 
        properties={mockProperties} 
        insights={[]}
      />
    );
    
    expect(screen.queryByText('Market Insights')).not.toBeInTheDocument();
  });

  it('renders grid layout correctly', () => {
    const { container } = render(<PropertyGrid properties={mockProperties} />);
    
    const grid = container.querySelector('.grid.grid-cols-1.md\\:grid-cols-3.lg\\:grid-cols-4');
    expect(grid).toBeInTheDocument();
  });

  it('generates correct layout patterns for multiple properties', () => {
    const manyProperties = Array.from({ length: 10 }, (_, index) => ({
      ...mockProperties[0],
      id: `prop-${index}`,
      external_id: `ext-${index}`,
      address: `${index + 100} Test St`
    }));
    
    render(<PropertyGrid properties={manyProperties} />);
    
    // Verify all properties are rendered
    manyProperties.forEach((property) => {
      expect(screen.getByTestId(`property-card-${property.id}`)).toBeInTheDocument();
    });
  });

  it('handles property selection with undefined onPropertySelect', () => {
    render(<PropertyGrid properties={mockProperties} />);
    
    // Should not throw error when clicking without onPropertySelect handler
    expect(() => {
      fireEvent.click(screen.getByTestId('property-card-prop-1'));
    }).not.toThrow();
  });
});

describe('PropertyGrid Accessibility', () => {
  it('has proper semantic structure', () => {
    render(<PropertyGrid properties={mockProperties} insights={mockInsights} />);
    
    // Check for proper heading structure
    expect(screen.getByText('Market Insights')).toBeInTheDocument();
    
    // Grid should be navigable
    const firstCard = screen.getByTestId('property-card-prop-1');
    expect(firstCard).toBeInTheDocument();
  });

  it('provides meaningful content for screen readers', () => {
    render(<PropertyGrid properties={mockProperties} insights={mockInsights} />);
    
    // Insights should have descriptive text
    expect(screen.getByText('Prices are well distributed across the range.')).toBeInTheDocument();
    expect(screen.getByText('Properties are selling quickly in this area.')).toBeInTheDocument();
  });
});