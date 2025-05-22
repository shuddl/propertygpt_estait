import { Redis } from 'ioredis';
import { realEstateAPIClient } from './RealEstateAPIClient';
import { MarketAnalysis, MarketSummary, PriceTrend, InventoryAnalysis, NeighborhoodComparison, PredictiveInsight, MarketRecommendation } from '@/lib/types';

class MarketAnalysisService {
  private apiClient: typeof realEstateAPIClient;
  private cache: Redis | null = null;

  constructor() {
    this.apiClient = realEstateAPIClient;
    
    try {
      if (process.env.REDIS_URL) {
        this.cache = new Redis(process.env.REDIS_URL);
      }
    } catch (error) {
      console.warn('Redis cache not available for MarketAnalysisService');
    }
  }

  async generateMarketAnalysis(location: string, timeframe: string = '6m'): Promise<MarketAnalysis> {
    const cacheKey = `market_analysis:${location}:${timeframe}`;
    
    if (this.cache) {
      try {
        const cached = await this.cache.get(cacheKey);
        if (cached) {
          return JSON.parse(cached);
        }
      } catch (error) {
        console.warn('Cache read error:', error);
      }
    }

    // Get market data from API
    const marketData = await this.apiClient.getMarketAnalysis({
      location,
      timeframe: timeframe as '1m' | '3m' | '6m' | '1y' | '2y',
      include_forecasts: true
    });

    // Enhance with our analysis
    const analysis: MarketAnalysis = {
      location,
      timeframe,
      summary: await this.generateMarketSummary(marketData),
      price_trends: await this.analyzePriceTrends(marketData),
      inventory_analysis: await this.analyzeInventory(marketData),
      neighborhood_comparison: await this.compareNeighborhoods(location, marketData),
      predictive_insights: await this.generatePredictiveInsights(marketData),
      recommendations: await this.generateRecommendations(marketData)
    };

    // Cache for 30 minutes
    if (this.cache) {
      try {
        await this.cache.setex(cacheKey, 1800, JSON.stringify(analysis));
      } catch (error) {
        console.warn('Cache write error:', error);
      }
    }

    return analysis;
  }

  private async generateMarketSummary(data: any): Promise<MarketSummary> {
    return {
      median_price: data.summary?.median_price || data.median_price,
      average_price: data.summary?.average_price || data.average_price,
      price_change_pct: this.calculatePriceChange(data.price_history || data.price_trends),
      days_on_market: data.summary?.days_on_market || data.average_days_on_market,
      inventory_level: this.classifyInventoryLevel(data.inventory_months || 3),
      market_tempo: this.assessMarketTempo(data),
      buyer_seller_ratio: data.buyer_seller_ratio || 1.0
    };
  }

  private async analyzePriceTrends(data: any): Promise<PriceTrend[]> {
    const trends: PriceTrend[] = [];
    const priceHistory = data.price_history || data.price_trends || [];
    
    if (priceHistory && priceHistory.length > 0) {
      // Calculate monthly price changes
      for (let i = 1; i < priceHistory.length; i++) {
        const current = priceHistory[i];
        const previous = priceHistory[i - 1];
        
        const currentPrice = current.median_price || current.price;
        const previousPrice = previous.median_price || previous.price;
        
        trends.push({
          period: current.period,
          median_price: currentPrice,
          change_pct: previousPrice ? ((currentPrice - previousPrice) / previousPrice) * 100 : 0,
          change_amount: currentPrice - previousPrice,
          volume: current.sales_volume || current.volume || 0
        });
      }
    }

    return trends;
  }

  private async analyzeInventory(data: any): Promise<InventoryAnalysis> {
    const inventoryMonths = data.inventory_months || 3;
    const trend = this.calculateInventoryTrend(data.inventory_trend || []);
    
    return {
      months_supply: inventoryMonths,
      trend: trend > 0.1 ? 'increasing' : trend < -0.1 ? 'decreasing' : 'stable',
      monthly_data: data.inventory_trend || []
    };
  }

  private async compareNeighborhoods(
    location: string, 
    data: any
  ): Promise<NeighborhoodComparison[]> {
    // Use existing neighborhood comparison from data, or generate mock data
    if (data.neighborhood_comparison) {
      return data.neighborhood_comparison;
    }
    
    // Generate mock neighborhood comparisons
    const basePrice = data.median_price || 750000;
    const neighborhoods = [
      'Downtown',
      'Westside',
      'Hollywood',
      'Beverly Hills',
      'Santa Monica'
    ];
    
    return neighborhoods.map(name => ({
      name,
      median_price: basePrice + (Math.random() - 0.5) * 300000,
      price_change_pct: (Math.random() - 0.5) * 0.2, // ±10%
      days_on_market: 30 + Math.floor(Math.random() * 40)
    }));
  }

  private async generatePredictiveInsights(data: any): Promise<PredictiveInsight[]> {
    const insights: PredictiveInsight[] = [];

    // Price prediction based on trends
    const recentTrends = data.price_history?.slice(-3) || [];
    if (recentTrends.length >= 2) {
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

    // Inventory predictions
    if (data.inventory_trend) {
      const inventoryChange = this.calculateInventoryTrend(data.inventory_trend);
      
      if (Math.abs(inventoryChange) > 0.15) { // >15% change
        insights.push({
          type: 'inventory_forecast',
          title: inventoryChange > 0 ? 'Increasing Inventory' : 'Decreasing Inventory',
          description: `Inventory levels are trending ${inventoryChange > 0 ? 'up' : 'down'}, which typically ${inventoryChange > 0 ? 'favors buyers' : 'favors sellers'}.`,
          confidence: 0.68,
          impact: 'medium',
          timeline: '2_months'
        });
      }
    }

    // Market tempo insights
    const marketTempo = this.assessMarketTempo(data);
    if (marketTempo === 'hot') {
      insights.push({
        type: 'market_tempo',
        title: 'Competitive Market Alert',
        description: 'Market is moving quickly with high demand. Consider acting fast on desirable properties.',
        confidence: 0.82,
        impact: 'high',
        timeline: '1_month'
      });
    }

    return insights;
  }

  private async generateRecommendations(data: any): Promise<MarketRecommendation[]> {
    const recommendations: MarketRecommendation[] = [];
    
    const marketTempo = this.assessMarketTempo(data);
    const inventoryLevel = this.classifyInventoryLevel(data.inventory_months || 3);
    
    // Timing recommendations
    if (marketTempo === 'hot' && inventoryLevel === 'low') {
      recommendations.push({
        title: 'Act Quickly',
        description: 'Hot market with low inventory. Be prepared to make competitive offers.',
        priority: 'high',
        category: 'timing'
      });
    } else if (marketTempo === 'cool' && inventoryLevel === 'high') {
      recommendations.push({
        title: 'Buyer\'s Market',
        description: 'Take your time and negotiate. Multiple options available.',
        priority: 'medium',
        category: 'strategy'
      });
    }
    
    // Price recommendations
    const priceChange = this.calculatePriceChange(data.price_history || []);
    if (priceChange > 0.05) {
      recommendations.push({
        title: 'Rising Prices',
        description: 'Prices have increased recently. Consider buying sooner rather than later.',
        priority: 'high',
        category: 'pricing'
      });
    } else if (priceChange < -0.05) {
      recommendations.push({
        title: 'Price Opportunity',
        description: 'Prices have declined. Good opportunity for value-conscious buyers.',
        priority: 'medium',
        category: 'pricing'
      });
    }
    
    return recommendations;
  }

  private calculatePriceChange(priceHistory: any[]): number {
    if (!priceHistory || priceHistory.length < 2) return 0;
    
    const latest = priceHistory[priceHistory.length - 1];
    const earliest = priceHistory[0];
    
    const latestPrice = latest.median_price || latest.price;
    const earliestPrice = earliest.median_price || earliest.price;
    
    if (!latestPrice || !earliestPrice) return 0;
    
    return (latestPrice - earliestPrice) / earliestPrice;
  }

  private calculateInventoryTrend(inventoryData: any[]): number {
    if (!inventoryData || inventoryData.length < 2) return 0;
    
    const latest = inventoryData[inventoryData.length - 1];
    const previous = inventoryData[inventoryData.length - 2];
    
    const latestSupply = latest.months_supply || 0;
    const previousSupply = previous.months_supply || 0;
    
    if (previousSupply === 0) return 0;
    
    return (latestSupply - previousSupply) / previousSupply;
  }

  private calculateTrendDirection(trends: any[]): number {
    if (trends.length < 2) return 0;
    
    const changes = trends.map(t => {
      const change = t.change_pct || 0;
      return typeof change === 'number' ? change : 0;
    });
    
    return changes.reduce((sum, change) => sum + change, 0) / changes.length / 100;
  }

  private classifyInventoryLevel(inventoryMonths: number): 'low' | 'balanced' | 'high' {
    if (inventoryMonths < 3) return 'low';
    if (inventoryMonths > 6) return 'high';
    return 'balanced';
  }

  private assessMarketTempo(data: any): 'hot' | 'warm' | 'cool' | 'cold' {
    const dom = data.average_days_on_market || data.summary?.days_on_market || 45;
    const inventoryMonths = data.inventory_months || 3;
    
    if (dom < 20 && inventoryMonths < 2) return 'hot';
    if (dom < 35 && inventoryMonths < 4) return 'warm';
    if (dom < 60 && inventoryMonths < 8) return 'cool';
    return 'cold';
  }
}

export const marketAnalysisService = new MarketAnalysisService();