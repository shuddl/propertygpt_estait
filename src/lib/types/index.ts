// Core Application Types
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'agent' | 'broker' | 'admin';
  created_at: string;
  updated_at: string;
}

export interface Property {
  id: string;
  external_id: string;
  mls_number?: string;
  address: string;
  city: string;
  state: string;
  zip_code: string;
  county?: string;
  neighborhood?: string;
  location?: {
    type: 'Point';
    coordinates: [number, number]; // [lng, lat]
  };
  price: number;
  bedrooms: number;
  bathrooms: number;
  half_baths?: number;
  square_footage: number;
  lot_size?: number;
  year_built?: number;
  property_type: string;
  property_subtype?: string;
  status: 'active' | 'pending' | 'sold' | 'off_market';
  days_on_market: number;
  price_per_sqft?: number;
  price_change_pct?: number;
  hoa_fees?: number;
  tax_amount?: number;
  images: string[];
  features: string[];
  description?: string;
  listing_agent?: {
    name: string;
    phone: string;
    email: string;
  } | null;
  school_district?: string;
  zoning?: string;
  parking_spaces?: number;
  garage_spaces?: number;
  pool?: boolean;
  waterfront?: boolean;
  view_type?: string[];
  coordinates?: {
    lat: number;
    lng: number;
  };
  created_at: string;
  updated_at: string;
}

export interface ConversationMessage {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: string;
  rich_content?: RichContent[];
  anticipated_actions?: AnticipatedAction[];
}

export interface RichContent {
  type: 'property_grid' | 'market_chart' | 'compliance_answer' | 'lead_summary';
  data: Record<string, unknown>;
  component: string;
}

export interface AnticipatedAction {
  label: string;
  action: string;
  confidence: number;
  handler: () => void;
}

export interface Prediction {
  content: string;
  confidence: number;
  trigger: 'typing_pattern' | 'context_cue' | 'temporal_pattern';
  category: 'property_search' | 'market_analysis' | 'compliance' | 'crm';
}

export interface SearchFilters {
  location?: {
    city?: string;
    state?: string;
    zip_code?: string;
    radius?: number;
  };
  price_range?: {
    min?: number;
    max?: number;
  };
  bedrooms?: {
    min?: number;
    max?: number;
  };
  bathrooms?: {
    min?: number;
    max?: number;
  };
  square_footage?: {
    min?: number;
    max?: number;
  };
  property_type?: string;
  features?: string[];
}

export interface SavedSearch {
  id: string;
  user_id: string;
  name: string;
  filters: SearchFilters;
  notification_enabled: boolean;
  notification_frequency: 'immediate' | 'daily' | 'weekly';
  created_at: string;
}

export interface Lead {
  id: string;
  user_id: string;
  name: string;
  email?: string;
  phone?: string;
  preferences: SearchFilters;
  source: string;
  status: 'new' | 'contacted' | 'qualified' | 'touring' | 'offer' | 'closed' | 'lost';
  lead_score: number;
  created_at: string;
  updated_at: string;
}

export interface ComplianceQuestion {
  id: string;
  question: string;
  answer: string;
  citations: ComplianceCitation[];
  category: string;
  jurisdiction: string;
  confidence: number;
  created_at: string;
}

export interface ComplianceCitation {
  regulation_code: string;
  title: string;
  relevant_text: string;
  source_url: string;
  organization: 'DRE' | 'NAR' | 'CAR';
}

// Market Analysis Types
export interface MarketAnalysis {
  location: string;
  timeframe: string;
  summary: MarketSummary;
  price_trends: PriceTrend[];
  inventory_analysis: InventoryAnalysis;
  neighborhood_comparison: NeighborhoodComparison[];
  predictive_insights: PredictiveInsight[];
  recommendations: MarketRecommendation[];
}

export interface MarketSummary {
  median_price: number;
  average_price: number;
  price_change_pct: number;
  days_on_market: number;
  inventory_level: 'low' | 'balanced' | 'high';
  market_tempo: 'hot' | 'warm' | 'cool' | 'cold';
  buyer_seller_ratio: number;
}

export interface PriceTrend {
  period: string;
  median_price: number;
  change_pct: number;
  change_amount: number;
  volume: number;
}

export interface InventoryAnalysis {
  months_supply: number;
  trend: 'increasing' | 'stable' | 'decreasing';
  monthly_data: {
    period: string;
    months_supply: number;
    new_listings: number;
  }[];
}

export interface NeighborhoodComparison {
  name: string;
  median_price: number;
  price_change_pct: number;
  days_on_market: number;
}

export interface PredictiveInsight {
  type: 'price_forecast' | 'inventory_forecast' | 'market_tempo';
  title: string;
  description: string;
  confidence: number;
  impact: 'low' | 'medium' | 'high';
  timeline: '1_month' | '2_months' | '3_months' | '6_months';
}

export interface MarketRecommendation {
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  category: 'timing' | 'strategy' | 'pricing';
}

// Property Insights
export interface PropertyInsight {
  type: 'no_results' | 'price_analysis' | 'market_velocity' | 'inventory_trend';
  title: string;
  description: string;
  confidence: number;
  actionable: boolean;
  suggestions?: string[];
  data?: Record<string, unknown>;
}