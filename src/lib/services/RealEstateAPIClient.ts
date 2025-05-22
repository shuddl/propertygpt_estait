import { Redis } from 'ioredis';
import { DatabaseService } from './DatabaseService';
import { Property, MarketAnalysis, PropertyInsight, PredictiveInsight, MarketSummary, PriceTrend, InventoryAnalysis, NeighborhoodComparison, MarketRecommendation } from '@/lib/types';

interface PropertySearchParams {
  location?: {
    city?: string;
    state?: string;
    zip_code?: string;
    radius?: number;
    coordinates?: { lat: number; lng: number };
  };
  price_range?: { min?: number; max?: number };
  bedrooms?: { min?: number; max?: number };
  bathrooms?: { min?: number; max?: number };
  square_footage?: { min?: number; max?: number };
  property_type?: string[];
  features?: string[];
  status?: string[];
  days_on_market_max?: number;
  sort_by?: 'price' | 'date' | 'relevance' | 'price_per_sqft';
  sort_order?: 'asc' | 'desc';
  limit?: number;
  offset?: number;
}

interface MarketAnalysisParams {
  location: string;
  property_type?: string;
  timeframe?: '1m' | '3m' | '6m' | '1y' | '2y';
  include_forecasts?: boolean;
}

class RateLimiter {
  private requests: { [key: string]: number[] } = {};
  private limits: { requestsPerMinute: number; requestsPerHour: number; requestsPerDay: number };

  constructor(limits: { requestsPerMinute: number; requestsPerHour: number; requestsPerDay: number }) {
    this.limits = limits;
  }

  async checkLimit(key: string = 'default'): Promise<void> {
    const now = Date.now();
    if (!this.requests[key]) this.requests[key] = [];
    
    // Clean old requests
    this.requests[key] = this.requests[key].filter(time => now - time < 86400000); // 24 hours
    
    const recentRequests = this.requests[key];
    const minuteRequests = recentRequests.filter(time => now - time < 60000);
    const hourRequests = recentRequests.filter(time => now - time < 3600000);
    
    if (minuteRequests.length >= this.limits.requestsPerMinute) {
      throw new Error('Rate limit exceeded: too many requests per minute');
    }
    if (hourRequests.length >= this.limits.requestsPerHour) {
      throw new Error('Rate limit exceeded: too many requests per hour');
    }
    if (recentRequests.length >= this.limits.requestsPerDay) {
      throw new Error('Rate limit exceeded: too many requests per day');
    }
    
    this.requests[key].push(now);
  }
}

class RequestQueue {
  private queue: (() => Promise<any>)[] = [];
  private running = 0;
  private maxConcurrent: number;

  constructor(options: { maxConcurrent: number }) {
    this.maxConcurrent = options.maxConcurrent;
  }

  async add<T>(fn: () => Promise<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      this.queue.push(async () => {
        try {
          const result = await fn();
          resolve(result);
        } catch (error) {
          reject(error);
        }
      });
      this.process();
    });
  }

  private async process(): Promise<void> {
    if (this.running >= this.maxConcurrent || this.queue.length === 0) {
      return;
    }

    this.running++;
    const fn = this.queue.shift();
    if (fn) {
      try {
        await fn();
      } finally {
        this.running--;
        this.process();
      }
    }
  }
}

class RealEstateAPIClient {
  private apiKey: string;
  private baseURL: string;
  private rateLimiter: RateLimiter;
  private cache: Redis | null = null;
  private requestQueue: RequestQueue;
  private databaseService: DatabaseService;

  constructor() {
    this.apiKey = process.env.REAL_ESTATE_API_KEY || '';
    this.baseURL = process.env.REAL_ESTATE_API_URL || '';
    this.databaseService = new DatabaseService();
    
    try {
      if (process.env.REDIS_URL) {
        this.cache = new Redis(process.env.REDIS_URL);
      }
    } catch (error) {
      console.warn('Redis cache not available, using in-memory fallback');
    }
    
    this.rateLimiter = new RateLimiter({
      requestsPerMinute: 100,
      requestsPerHour: 5000,
      requestsPerDay: 50000
    });
    this.requestQueue = new RequestQueue({ maxConcurrent: 5 });
  }

  async searchProperties(params: PropertySearchParams): Promise<{
    properties: Property[];
    total: number;
    insights: PropertyInsight[];
  }> {
    // Generate cache key
    const cacheKey = this.generateCacheKey('property_search', params);
    
    // Check cache first
    const cached = await this.getCachedResult(cacheKey);
    if (cached) return cached;

    // Rate limit check
    await this.rateLimiter.checkLimit();

    // For demo purposes, simulate API call with enhanced mock data
    const response = await this.simulateAPICall(params);

    if (!response.success || !response.data) {
      throw new Error(`Property search failed: ${response.error}`);
    }

    // Normalize properties
    const properties = await Promise.all(
      response.data.properties.map((prop: any) => this.normalizeProperty(prop))
    );

    // Generate insights
    const insights = await this.generatePropertyInsights(properties, params);

    // Cache results
    const result = {
      properties,
      total: response.data.total || properties.length,
      insights
    };

    await this.cacheResult(cacheKey, result, 300); // 5 minutes
    
    // Cache individual properties
    await Promise.all(properties.map(prop => this.cacheProperty(prop)));

    return result;
  }

  async getMarketAnalysis(params: MarketAnalysisParams): Promise<MarketAnalysis> {
    const cacheKey = this.generateCacheKey('market_analysis', params);
    const cached = await this.getCachedResult(cacheKey);
    if (cached) return cached;

    await this.rateLimiter.checkLimit();

    // Simulate enhanced market analysis API call
    const response = await this.simulateMarketAnalysisAPI(params);

    if (!response.success) {
      throw new Error(`Market analysis failed: ${response.error}`);
    }

    const analysis = await this.normalizeMarketAnalysis(response.data);
    
    // Add predictive insights
    analysis.predictive_insights = await this.generateMarketPredictions(analysis);
    
    await this.cacheResult(cacheKey, analysis, 1800); // 30 minutes
    
    return analysis;
  }

  async getPropertyDetails(propertyId: string): Promise<Property> {
    const cacheKey = `property_detail:${propertyId}`;
    const cached = await this.getCachedResult(cacheKey);
    if (cached) return cached;

    await this.rateLimiter.checkLimit();

    // Simulate property details API call
    const response = await this.simulatePropertyDetailsAPI(propertyId);

    if (!response.success) {
      throw new Error(`Failed to get property details: ${response.error}`);
    }

    const property = await this.normalizeProperty(response.data);
    await this.cacheResult(cacheKey, property, 600); // 10 minutes
    await this.cacheProperty(property);

    return property;
  }

  async getComparableProperties(
    propertyId: string,
    radius: number = 0.5
  ): Promise<Property[]> {
    const cacheKey = `comparables:${propertyId}:${radius}`;
    const cached = await this.getCachedResult(cacheKey);
    if (cached) return cached;

    await this.rateLimiter.checkLimit();

    // Simulate comparables API call
    const response = await this.simulateComparablesAPI(propertyId, radius);

    if (!response.success) {
      throw new Error(`Failed to get comparable properties: ${response.error}`);
    }

    const comparables = await Promise.all(
      response.data.properties.map((prop: any) => this.normalizeProperty(prop))
    );

    await this.cacheResult(cacheKey, comparables, 1800); // 30 minutes
    
    return comparables;
  }

  private async simulateAPICall(params: PropertySearchParams): Promise<any> {
    // Simulate API latency
    await new Promise(resolve => setTimeout(resolve, Math.random() * 500 + 200));
    
    // Generate realistic mock properties based on search params
    const properties = this.generateMockProperties(params);
    
    return {
      success: true,
      data: {
        properties,
        total: properties.length + Math.floor(Math.random() * 100)
      }
    };
  }

  private async simulateMarketAnalysisAPI(params: MarketAnalysisParams): Promise<any> {
    await new Promise(resolve => setTimeout(resolve, Math.random() * 800 + 300));
    
    return {
      success: true,
      data: this.generateMockMarketData(params)
    };
  }

  private async simulatePropertyDetailsAPI(propertyId: string): Promise<any> {
    await new Promise(resolve => setTimeout(resolve, Math.random() * 300 + 100));
    
    return {
      success: true,
      data: this.generateDetailedMockProperty(propertyId)
    };
  }

  private async simulateComparablesAPI(propertyId: string, radius: number): Promise<any> {
    await new Promise(resolve => setTimeout(resolve, Math.random() * 400 + 200));
    
    return {
      success: true,
      data: {
        properties: this.generateMockComparables(propertyId, radius)
      }
    };
  }

  private generateMockProperties(params: PropertySearchParams): any[] {
    const count = Math.min(params.limit || 20, 50);
    const properties = [];
    
    for (let i = 0; i < count; i++) {
      const basePrice = (params.price_range?.min || 300000) + Math.random() * 500000;
      const bedrooms = Math.max(params.bedrooms?.min || 2, Math.floor(Math.random() * 4) + 1);
      const bathrooms = Math.max(params.bathrooms?.min || 1, Math.floor(Math.random() * 3) + 1);
      const sqft = Math.max(params.square_footage?.min || 1000, Math.floor(Math.random() * 2000) + 800);
      
      properties.push({
        id: `mock-${i + 1}`,
        mls_number: `MLS${Math.floor(Math.random() * 1000000)}`,
        address: {
          full: `${Math.floor(Math.random() * 9999) + 1} ${['Main St', 'Oak Ave', 'Elm Dr', 'Park Blvd'][Math.floor(Math.random() * 4)]}`,
          city: params.location?.city || 'Los Angeles',
          state: params.location?.state || 'CA',
          zip_code: params.location?.zip_code || `${90000 + Math.floor(Math.random() * 400)}`
        },
        coordinates: {
          lat: 34.0522 + (Math.random() - 0.5) * 0.1,
          lng: -118.2437 + (Math.random() - 0.5) * 0.1
        },
        price: Math.floor(basePrice),
        bedrooms,
        bathrooms,
        square_footage: sqft,
        lot_size: Math.random() * 0.5 + 0.1,
        year_built: Math.floor(Math.random() * 50) + 1970,
        property_type: params.property_type?.[0] || ['Single Family', 'Condo', 'Townhouse'][Math.floor(Math.random() * 3)],
        status: ['active', 'pending', 'sold'][Math.floor(Math.random() * 3)],
        days_on_market: Math.floor(Math.random() * 120),
        images: [`/api/placeholder/400/300`],
        features: ['Pool', 'Garage', 'Hardwood Floors', 'Updated Kitchen', 'Fireplace'].slice(0, Math.floor(Math.random() * 3) + 1),
        listing_agent: {
          name: ['Sarah Johnson', 'Mike Chen', 'Lisa Rodriguez', 'David Kim'][Math.floor(Math.random() * 4)],
          phone: '(555) 123-4567',
          email: 'agent@example.com'
        }
      });
    }
    
    return properties;
  }

  private generateDetailedMockProperty(propertyId: string): any {
    return {
      id: propertyId,
      mls_number: `MLS${Math.floor(Math.random() * 1000000)}`,
      address: {
        full: '123 Luxury Lane',
        city: 'Beverly Hills',
        state: 'CA',
        zip_code: '90210'
      },
      coordinates: { lat: 34.0696, lng: -118.4054 },
      price: 1250000,
      bedrooms: 4,
      bathrooms: 3.5,
      square_footage: 2800,
      lot_size: 0.25,
      year_built: 2018,
      property_type: 'Single Family',
      status: 'active',
      days_on_market: 15,
      images: ['/api/placeholder/800/600', '/api/placeholder/600/400'],
      features: ['Pool', 'Smart Home', 'Solar Panels', 'Wine Cellar', 'Home Theater'],
      description: 'Stunning modern home with luxury finishes throughout.',
      listing_agent: {
        name: 'Sarah Johnson',
        phone: '(555) 123-4567',
        email: 'sarah@luxuryrealty.com'
      }
    };
  }

  private generateMockComparables(propertyId: string, radius: number): any[] {
    return Array.from({ length: 5 }, (_, i) => ({
      id: `comp-${i + 1}`,
      address: { full: `${i + 100} Comparable St`, city: 'Beverly Hills', state: 'CA' },
      price: 1200000 + (Math.random() - 0.5) * 200000,
      bedrooms: 3 + Math.floor(Math.random() * 2),
      bathrooms: 2.5 + Math.random(),
      square_footage: 2600 + Math.floor(Math.random() * 400),
      days_on_market: Math.floor(Math.random() * 60),
      status: 'active',
      property_type: 'Single Family',
      images: ['/api/placeholder/400/300'],
      features: ['Pool', 'Garage']
    }));
  }

  private generateMockMarketData(params: MarketAnalysisParams): any {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
    const basePrice = 750000;
    
    return {
      location: params.location,
      timeframe: params.timeframe,
      median_price: basePrice,
      average_price: basePrice * 1.1,
      price_change_pct: (Math.random() - 0.5) * 0.2, // ±10%
      average_days_on_market: 45 + Math.floor(Math.random() * 30),
      inventory_months: 2 + Math.random() * 4,
      buyer_seller_ratio: 0.8 + Math.random() * 0.4,
      price_history: months.map((month, i) => ({
        period: month,
        median_price: basePrice + (Math.random() - 0.5) * 100000,
        sales_volume: 150 + Math.floor(Math.random() * 100)
      })),
      inventory_trend: months.map(month => ({
        period: month,
        months_supply: 2 + Math.random() * 3,
        new_listings: 200 + Math.floor(Math.random() * 100)
      }))
    };
  }

  private async normalizeProperty(apiProperty: any): Promise<Property> {
    return {
      id: `external-${apiProperty.id}`,
      external_id: apiProperty.id.toString(),
      mls_number: apiProperty.mls_number,
      address: apiProperty.address?.full || apiProperty.address,
      city: apiProperty.address?.city,
      state: apiProperty.address?.state,
      zip_code: apiProperty.address?.zip_code,
      county: apiProperty.address?.county,
      neighborhood: apiProperty.neighborhood,
      location: apiProperty.coordinates ? {
        type: 'Point' as const,
        coordinates: [apiProperty.coordinates.lng, apiProperty.coordinates.lat] as [number, number]
      } : undefined,
      price: parseFloat(apiProperty.price || 0),
      bedrooms: parseInt(apiProperty.bedrooms || 0),
      bathrooms: parseFloat(apiProperty.bathrooms || 0),
      half_baths: parseInt(apiProperty.half_baths || 0),
      square_footage: parseInt(apiProperty.square_footage || 0),
      lot_size: parseFloat(apiProperty.lot_size || 0),
      year_built: parseInt(apiProperty.year_built || 0),
      property_type: apiProperty.property_type,
      property_subtype: apiProperty.property_subtype,
      status: this.normalizeStatus(apiProperty.status),
      days_on_market: parseInt(apiProperty.days_on_market || 0),
      price_per_sqft: apiProperty.square_footage ? 
        parseFloat(apiProperty.price) / parseFloat(apiProperty.square_footage) : undefined,
      hoa_fees: parseFloat(apiProperty.hoa_fees || 0),
      tax_amount: parseFloat(apiProperty.tax_amount || 0),
      images: apiProperty.images || [],
      features: apiProperty.features || [],
      description: apiProperty.description,
      listing_agent: apiProperty.listing_agent ? {
        name: apiProperty.listing_agent.name,
        phone: apiProperty.listing_agent.phone,
        email: apiProperty.listing_agent.email
      } : null,
      school_district: apiProperty.school_district,
      zoning: apiProperty.zoning,
      parking_spaces: parseInt(apiProperty.parking_spaces || 0),
      garage_spaces: parseInt(apiProperty.garage_spaces || 0),
      pool: Boolean(apiProperty.pool),
      waterfront: Boolean(apiProperty.waterfront),
      view_type: apiProperty.view_type || [],
      price_change_pct: (Math.random() - 0.5) * 0.2, // Simulate price changes
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
  }

  private async normalizeMarketAnalysis(data: any): Promise<MarketAnalysis> {
    return {
      location: data.location,
      timeframe: data.timeframe,
      summary: {
        median_price: data.median_price,
        average_price: data.average_price,
        price_change_pct: data.price_change_pct,
        days_on_market: data.average_days_on_market,
        inventory_level: this.classifyInventoryLevel(data.inventory_months),
        market_tempo: this.assessMarketTempo(data),
        buyer_seller_ratio: data.buyer_seller_ratio
      },
      price_trends: data.price_history?.map((item: any) => ({
        period: item.period,
        median_price: item.median_price,
        change_pct: 0, // Calculate from previous period
        change_amount: 0,
        volume: item.sales_volume
      })) || [],
      inventory_analysis: {
        months_supply: data.inventory_months,
        trend: 'stable',
        monthly_data: data.inventory_trend || []
      },
      neighborhood_comparison: [
        {
          name: 'Beverly Hills',
          median_price: data.median_price * 1.2,
          price_change_pct: 0.08,
          days_on_market: 35
        },
        {
          name: 'Santa Monica',
          median_price: data.median_price * 0.9,
          price_change_pct: 0.05,
          days_on_market: 42
        }
      ],
      predictive_insights: [],
      recommendations: [
        {
          title: 'Market Timing',
          description: 'Current market conditions favor buyers with increased inventory.',
          priority: 'high',
          category: 'timing'
        },
        {
          title: 'Price Negotiation',
          description: 'Properties staying on market longer suggest room for negotiation.',
          priority: 'medium',
          category: 'strategy'
        }
      ]
    };
  }

  private async generatePropertyInsights(
    properties: Property[],
    searchParams: PropertySearchParams
  ): Promise<PropertyInsight[]> {
    const insights: PropertyInsight[] = [];

    if (properties.length === 0) {
      insights.push({
        type: 'no_results',
        title: 'No Properties Found',
        description: 'Consider expanding your search criteria or exploring nearby areas.',
        confidence: 1.0,
        actionable: true,
        suggestions: [
          'Increase price range by 10-15%',
          'Expand search radius',
          'Consider different property types'
        ]
      });
      return insights;
    }

    // Price analysis
    const prices = properties.map(p => p.price).filter(p => p > 0);
    if (prices.length > 0) {
      const avgPrice = prices.reduce((sum, price) => sum + price, 0) / prices.length;
      const medianPrice = prices.sort((a, b) => a - b)[Math.floor(prices.length / 2)];
      
      if (avgPrice > medianPrice * 1.2) {
        insights.push({
          type: 'price_analysis',
          title: 'Price Distribution Skewed High',
          description: `Average price ($${avgPrice.toLocaleString()}) is significantly higher than median ($${medianPrice.toLocaleString()}). Consider filtering out luxury properties.`,
          confidence: 0.85,
          actionable: true,
          data: { avgPrice, medianPrice }
        });
      }
    }

    // Days on market analysis
    const domValues = properties.map(p => p.days_on_market).filter(d => d > 0);
    if (domValues.length > 0) {
      const avgDOM = domValues.reduce((sum, dom) => sum + dom, 0) / domValues.length;
      
      if (avgDOM > 60) {
        insights.push({
          type: 'market_velocity',
          title: 'Slow Market Conditions',
          description: `Properties are averaging ${Math.round(avgDOM)} days on market. This suggests negotiation opportunities.`,
          confidence: 0.78,
          actionable: true,
          suggestions: [
            'Properties may be priced above market value',
            'Sellers may be more willing to negotiate',
            'Consider making offers below asking price'
          ]
        });
      }
    }

    // Inventory analysis
    const recentListings = properties.filter(p => p.days_on_market <= 14);
    if (recentListings.length / properties.length > 0.4) {
      insights.push({
        type: 'inventory_trend',
        title: 'High New Inventory',
        description: `${Math.round((recentListings.length / properties.length) * 100)}% of properties are newly listed (≤14 days). Market may be shifting toward buyers.`,
        confidence: 0.72,
        actionable: true
      });
    }

    return insights;
  }

  private async generateMarketPredictions(analysis: MarketAnalysis): Promise<PredictiveInsight[]> {
    const insights: PredictiveInsight[] = [];

    // Price prediction based on trends
    if (analysis.price_trends && analysis.price_trends.length >= 2) {
      const recentTrends = analysis.price_trends.slice(-3);
      const trendDirection = this.calculateTrendDirection(recentTrends);
      
      if (Math.abs(trendDirection) > 0.02) { // >2% trend
        insights.push({
          type: 'price_forecast',
          title: trendDirection > 0 ? 'Upward Price Pressure' : 'Downward Price Pressure',
          description: `Based on recent trends, prices may ${trendDirection > 0 ? 'increase' : 'decrease'} by ${Math.abs(trendDirection * 100).toFixed(1)}% over the next 3 months.`,
          confidence: 0.75,
          impact: 'high',
          timeline: '3_months'
        });
      }
    }

    // Market tempo predictions
    if (analysis.summary.market_tempo === 'hot' && analysis.summary.days_on_market < 20) {
      insights.push({
        type: 'market_tempo',
        title: 'Competitive Market Conditions',
        description: 'Hot market with properties moving quickly. Be prepared to act fast and consider offers above asking price.',
        confidence: 0.82,
        impact: 'high',
        timeline: '1_month'
      });
    }

    return insights;
  }

  private calculateTrendDirection(trends: PriceTrend[]): number {
    if (trends.length < 2) return 0;
    
    const changes = trends.map(t => t.change_pct || 0);
    return changes.reduce((sum, change) => sum + change, 0) / changes.length / 100;
  }

  private normalizeStatus(status: string | undefined): 'active' | 'pending' | 'sold' | 'off_market' {
    if (!status) return 'active';
    
    const statusMap: { [key: string]: 'active' | 'pending' | 'sold' | 'off_market' } = {
      'active': 'active',
      'for_sale': 'active',
      'pending': 'pending',
      'under_contract': 'pending',
      'sold': 'sold',
      'closed': 'sold',
      'off_market': 'off_market',
      'withdrawn': 'off_market'
    };
    
    return statusMap[status.toLowerCase()] || 'active';
  }

  private classifyInventoryLevel(inventoryMonths: number): 'low' | 'balanced' | 'high' {
    if (inventoryMonths < 3) return 'low';
    if (inventoryMonths > 6) return 'high';
    return 'balanced';
  }

  private assessMarketTempo(data: any): 'hot' | 'warm' | 'cool' | 'cold' {
    const dom = data.average_days_on_market;
    const inventoryMonths = data.inventory_months;
    
    if (dom < 20 && inventoryMonths < 2) return 'hot';
    if (dom < 35 && inventoryMonths < 4) return 'warm';
    if (dom < 60 && inventoryMonths < 8) return 'cool';
    return 'cold';
  }

  private generateCacheKey(prefix: string, params: any): string {
    const paramString = JSON.stringify(params);
    return `${prefix}:${Buffer.from(paramString).toString('base64').slice(0, 32)}`;
  }

  private async getCachedResult(key: string): Promise<any> {
    if (!this.cache) return null;
    
    try {
      const cached = await this.cache.get(key);
      return cached ? JSON.parse(cached) : null;
    } catch (error) {
      console.warn('Cache read error:', error);
      return null;
    }
  }

  private async cacheResult(key: string, data: any, ttl: number): Promise<void> {
    if (!this.cache) return;
    
    try {
      await this.cache.setex(key, ttl, JSON.stringify(data));
    } catch (error) {
      console.warn('Cache write error:', error);
    }
  }

  private async cacheProperty(property: Property): Promise<void> {
    try {
      await this.databaseService.cacheProperty(property);
    } catch (error) {
      console.error('Failed to cache property:', error);
    }
  }
}

export const realEstateAPIClient = new RealEstateAPIClient();