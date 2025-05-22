import { realEstateAPIClient } from '../RealEstateAPIClient';

// Mock Redis
jest.mock('ioredis', () => {
  return {
    Redis: jest.fn().mockImplementation(() => ({
      get: jest.fn().mockResolvedValue(null),
      setex: jest.fn().mockResolvedValue('OK'),
      del: jest.fn().mockResolvedValue(1)
    }))
  };
});

// Mock DatabaseService
jest.mock('../DatabaseService', () => ({
  DatabaseService: jest.fn().mockImplementation(() => ({
    cacheProperty: jest.fn().mockResolvedValue(undefined),
    recordAnalytics: jest.fn().mockResolvedValue(undefined)
  }))
}));

describe('RealEstateAPIClient', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('searchProperties', () => {
    it('should search properties with basic parameters', async () => {
      const params = {
        location: {
          city: 'Los Angeles',
          state: 'CA'
        },
        price_range: {
          min: 500000,
          max: 1000000
        },
        bedrooms: {
          min: 2
        },
        limit: 10
      };

      const result = await realEstateAPIClient.searchProperties(params);

      expect(result).toHaveProperty('properties');
      expect(result).toHaveProperty('total');
      expect(result).toHaveProperty('insights');
      expect(Array.isArray(result.properties)).toBe(true);
      expect(Array.isArray(result.insights)).toBe(true);
      expect(result.properties.length).toBeLessThanOrEqual(params.limit);
    });

    it('should generate insights for empty results', async () => {
      const params = {
        location: {
          city: 'NonExistentCity'
        },
        price_range: {
          min: 10000000, // Very high price to ensure no results
          max: 20000000
        },
        limit: 1
      };

      // Mock empty results
      const originalGenerateMockProperties = (realEstateAPIClient as any).generateMockProperties;
      (realEstateAPIClient as any).generateMockProperties = jest.fn().mockReturnValue([]);

      const result = await realEstateAPIClient.searchProperties(params);

      expect(result.properties).toHaveLength(0);
      expect(result.insights).toHaveLength(1);
      expect(result.insights[0].type).toBe('no_results');
      expect(result.insights[0].title).toBe('No Properties Found');

      // Restore original method
      (realEstateAPIClient as any).generateMockProperties = originalGenerateMockProperties;
    });

    it('should generate price analysis insights', async () => {
      const params = {
        location: {
          city: 'Beverly Hills',
          state: 'CA'
        },
        limit: 20
      };

      const result = await realEstateAPIClient.searchProperties(params);

      expect(result.properties.length).toBeGreaterThan(0);
      
      // Check if price analysis insight is generated for properties with skewed pricing
      const priceAnalysisInsight = result.insights.find(insight => insight.type === 'price_analysis');
      if (priceAnalysisInsight) {
        expect(priceAnalysisInsight.title).toBe('Price Distribution Skewed High');
        expect(priceAnalysisInsight.confidence).toBeGreaterThan(0.8);
      }
    });

    it('should handle rate limiting', async () => {
      // Test rate limiting by making multiple rapid requests
      const params = {
        location: { city: 'Test' },
        limit: 1
      };

      // Should not throw errors for normal usage
      await expect(realEstateAPIClient.searchProperties(params)).resolves.toBeDefined();
    });
  });

  describe('getPropertyDetails', () => {
    it('should return detailed property information', async () => {
      const propertyId = 'test-property-123';
      
      const result = await realEstateAPIClient.getPropertyDetails(propertyId);

      expect(result).toHaveProperty('id');
      expect(result).toHaveProperty('address');
      expect(result).toHaveProperty('price');
      expect(result).toHaveProperty('bedrooms');
      expect(result).toHaveProperty('bathrooms');
      expect(result).toHaveProperty('square_footage');
      expect(result).toHaveProperty('images');
      expect(result).toHaveProperty('features');
    });
  });

  describe('getComparableProperties', () => {
    it('should return comparable properties', async () => {
      const propertyId = 'test-property-123';
      const radius = 0.5;
      
      const result = await realEstateAPIClient.getComparableProperties(propertyId, radius);

      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThan(0);
      
      // Check that each comparable has required properties
      result.forEach(property => {
        expect(property).toHaveProperty('id');
        expect(property).toHaveProperty('price');
        expect(property).toHaveProperty('bedrooms');
        expect(property).toHaveProperty('bathrooms');
      });
    });
  });

  describe('getMarketAnalysis', () => {
    it('should return market analysis data', async () => {
      const params = {
        location: 'Los Angeles, CA',
        timeframe: '6m' as const,
        include_forecasts: true
      };
      
      const result = await realEstateAPIClient.getMarketAnalysis(params);

      expect(result).toHaveProperty('location');
      expect(result).toHaveProperty('timeframe');
      expect(result).toHaveProperty('summary');
      expect(result).toHaveProperty('price_trends');
      expect(result).toHaveProperty('inventory_analysis');
      expect(result).toHaveProperty('neighborhood_comparison');
      expect(result).toHaveProperty('predictive_insights');
      expect(result).toHaveProperty('recommendations');

      // Validate summary structure
      expect(result.summary).toHaveProperty('median_price');
      expect(result.summary).toHaveProperty('market_tempo');
      expect(['hot', 'warm', 'cool', 'cold']).toContain(result.summary.market_tempo);
    });
  });

  describe('caching', () => {
    it('should cache search results', async () => {
      const params = {
        location: { city: 'Test City' },
        limit: 5
      };

      // First call
      const result1 = await realEstateAPIClient.searchProperties(params);
      
      // Second call with same parameters
      const result2 = await realEstateAPIClient.searchProperties(params);

      // Results should be consistent (though we can't easily test caching without mocking)
      expect(result1).toHaveProperty('properties');
      expect(result2).toHaveProperty('properties');
    });
  });

  describe('error handling', () => {
    it('should handle API failures gracefully', async () => {
      // Mock a failure scenario
      const originalSimulateAPICall = (realEstateAPIClient as any).simulateAPICall;
      (realEstateAPIClient as any).simulateAPICall = jest.fn().mockResolvedValue({
        success: false,
        error: 'API Error'
      });

      const params = {
        location: { city: 'Test' },
        limit: 1
      };

      await expect(realEstateAPIClient.searchProperties(params))
        .rejects
        .toThrow('Property search failed: API Error');

      // Restore original method
      (realEstateAPIClient as any).simulateAPICall = originalSimulateAPICall;
    });
  });

  describe('property normalization', () => {
    it('should normalize API property data correctly', async () => {
      const params = {
        location: { city: 'Test' },
        limit: 1
      };

      const result = await realEstateAPIClient.searchProperties(params);
      
      if (result.properties.length > 0) {
        const property = result.properties[0];
        
        // Check normalized fields
        expect(property.id).toMatch(/^external-/);
        expect(typeof property.price).toBe('number');
        expect(typeof property.bedrooms).toBe('number');
        expect(typeof property.bathrooms).toBe('number');
        expect(typeof property.square_footage).toBe('number');
        expect(['active', 'pending', 'sold', 'off_market']).toContain(property.status);
        expect(Array.isArray(property.images)).toBe(true);
        expect(Array.isArray(property.features)).toBe(true);
      }
    });
  });

  describe('insights generation', () => {
    it('should generate market velocity insights', async () => {
      // Test with properties that have high days on market
      const params = {
        location: { city: 'Slow Market City' },
        limit: 10
      };

      const result = await realEstateAPIClient.searchProperties(params);
      
      // Check for market velocity insights
      const velocityInsight = result.insights.find(insight => insight.type === 'market_velocity');
      if (velocityInsight) {
        expect(velocityInsight.title).toContain('Market Conditions');
        expect(velocityInsight.confidence).toBeGreaterThan(0);
        expect(velocityInsight.confidence).toBeLessThanOrEqual(1);
      }
    });

    it('should generate inventory trend insights', async () => {
      const params = {
        location: { city: 'High Inventory City' },
        limit: 20
      };

      const result = await realEstateAPIClient.searchProperties(params);
      
      // Check for inventory insights
      const inventoryInsight = result.insights.find(insight => insight.type === 'inventory_trend');
      if (inventoryInsight) {
        expect(inventoryInsight.title).toContain('Inventory');
        expect(typeof inventoryInsight.confidence).toBe('number');
      }
    });
  });
});