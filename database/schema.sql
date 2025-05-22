-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "postgis";

-- Users table with RLS
CREATE TABLE users (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  role VARCHAR(50) DEFAULT 'agent' CHECK (role IN ('agent', 'broker', 'admin')),
  avatar_url TEXT,
  phone VARCHAR(50),
  license_number VARCHAR(100),
  brokerage VARCHAR(255),
  market_areas TEXT[],
  expertise_level VARCHAR(50) DEFAULT 'intermediate' CHECK (expertise_level IN ('novice', 'intermediate', 'expert')),
  preferences JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Conversation sessions
CREATE TABLE conversation_sessions (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  session_data JSONB DEFAULT '{}',
  context JSONB DEFAULT '{}',
  last_activity TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Conversation messages
CREATE TABLE conversation_messages (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  session_id UUID REFERENCES conversation_sessions(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  sender VARCHAR(10) NOT NULL CHECK (sender IN ('user', 'ai')),
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Properties cache table
CREATE TABLE properties (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  external_id VARCHAR(255) UNIQUE NOT NULL,
  mls_number VARCHAR(100),
  address VARCHAR(500) NOT NULL,
  city VARCHAR(100) NOT NULL,
  state VARCHAR(50) NOT NULL,
  zip_code VARCHAR(20) NOT NULL,
  county VARCHAR(100),
  neighborhood VARCHAR(100),
  location POINT,
  price DECIMAL(12,2) NOT NULL,
  bedrooms INTEGER,
  bathrooms DECIMAL(3,1),
  half_baths INTEGER,
  square_footage INTEGER,
  lot_size DECIMAL(10,2),
  year_built INTEGER,
  property_type VARCHAR(100) NOT NULL,
  property_subtype VARCHAR(100),
  status VARCHAR(50) NOT NULL CHECK (status IN ('active', 'pending', 'sold', 'off_market', 'expired')),
  days_on_market INTEGER DEFAULT 0,
  price_per_sqft DECIMAL(8,2),
  hoa_fees DECIMAL(8,2),
  tax_amount DECIMAL(10,2),
  images TEXT[],
  features TEXT[],
  description TEXT,
  listing_agent JSONB,
  co_listing_agent JSONB,
  showing_instructions TEXT,
  remarks TEXT,
  school_district VARCHAR(100),
  zoning VARCHAR(50),
  parking_spaces INTEGER,
  garage_spaces INTEGER,
  pool BOOLEAN DEFAULT false,
  waterfront BOOLEAN DEFAULT false,
  view_type TEXT[],
  heating_type VARCHAR(100),
  cooling_type VARCHAR(100),
  flooring_types TEXT[],
  appliances TEXT[],
  last_sold_date DATE,
  last_sold_price DECIMAL(12,2),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Saved searches
CREATE TABLE searches (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  filters JSONB NOT NULL,
  notification_enabled BOOLEAN DEFAULT false,
  notification_frequency VARCHAR(50) DEFAULT 'daily' CHECK (notification_frequency IN ('immediate', 'daily', 'weekly')),
  notification_channels TEXT[] DEFAULT '{"email"}',
  last_executed TIMESTAMP WITH TIME ZONE,
  last_results_count INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  client_name VARCHAR(255),
  client_email VARCHAR(255),
  client_phone VARCHAR(50),
  tags TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Saved search results history
CREATE TABLE search_results (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  search_id UUID REFERENCES searches(id) ON DELETE CASCADE,
  property_id UUID REFERENCES properties(id) ON DELETE CASCADE,
  result_type VARCHAR(50) DEFAULT 'new' CHECK (result_type IN ('new', 'price_change', 'status_change', 'back_on_market')),
  previous_value JSONB,
  current_value JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Notifications
CREATE TABLE notifications (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  search_id UUID REFERENCES searches(id) ON DELETE CASCADE,
  type VARCHAR(100) NOT NULL,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  channels TEXT[] NOT NULL,
  metadata JSONB DEFAULT '{}',
  scheduled_for TIMESTAMP WITH TIME ZONE,
  sent_at TIMESTAMP WITH TIME ZONE,
  delivery_status JSONB DEFAULT '{}',
  is_read BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- CRM Leads
CREATE TABLE leads (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255),
  phone VARCHAR(50),
  source VARCHAR(100) DEFAULT 'chat',
  status VARCHAR(50) DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'touring', 'offer', 'closed', 'lost')),
  lead_score INTEGER DEFAULT 50 CHECK (lead_score >= 0 AND lead_score <= 100),
  budget_min DECIMAL(12,2),
  budget_max DECIMAL(12,2),
  preferred_locations TEXT[],
  property_types TEXT[],
  bedrooms_min INTEGER,
  bathrooms_min DECIMAL(3,1),
  timeline VARCHAR(100),
  notes TEXT,
  tags TEXT[],
  last_contact_date TIMESTAMP WITH TIME ZONE,
  next_follow_up TIMESTAMP WITH TIME ZONE,
  conversion_probability DECIMAL(3,2) DEFAULT 0.5,
  estimated_value DECIMAL(12,2),
  referral_source VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Lead activities
CREATE TABLE lead_activities (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  lead_id UUID REFERENCES leads(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  activity_type VARCHAR(100) NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  outcome VARCHAR(100),
  next_action VARCHAR(255),
  due_date TIMESTAMP WITH TIME ZONE,
  completed_at TIMESTAMP WITH TIME ZONE,
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Lead property interests
CREATE TABLE lead_property_interests (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  lead_id UUID REFERENCES leads(id) ON DELETE CASCADE,
  property_id UUID REFERENCES properties(id) ON DELETE CASCADE,
  interest_level VARCHAR(50) DEFAULT 'medium' CHECK (interest_level IN ('low', 'medium', 'high')),
  interaction_type VARCHAR(100) NOT NULL CHECK (interaction_type IN ('viewed', 'saved', 'inquired', 'toured', 'offered')),
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Compliance regulations
CREATE TABLE compliance_regulations (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  regulation_code VARCHAR(50) NOT NULL,
  title VARCHAR(500) NOT NULL,
  content TEXT NOT NULL,
  summary TEXT,
  jurisdiction VARCHAR(100) NOT NULL,
  organization VARCHAR(100) NOT NULL,
  category VARCHAR(100) NOT NULL,
  subcategory VARCHAR(100),
  effective_date DATE,
  expiration_date DATE,
  last_updated DATE DEFAULT CURRENT_DATE,
  is_active BOOLEAN DEFAULT true,
  source_url TEXT,
  search_keywords TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Compliance Q&A
CREATE TABLE compliance_qa (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  regulation_ids UUID[] NOT NULL,
  category VARCHAR(100) NOT NULL,
  subcategory VARCHAR(100),
  jurisdiction VARCHAR(100) NOT NULL,
  confidence_score DECIMAL(3,2) DEFAULT 0.95,
  tags TEXT[],
  search_keywords TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- User compliance bookmarks
CREATE TABLE compliance_bookmarks (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  qa_id UUID REFERENCES compliance_qa(id) ON DELETE CASCADE,
  regulation_id UUID REFERENCES compliance_regulations(id) ON DELETE CASCADE,
  notes TEXT,
  tags TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Analytics and usage tracking
CREATE TABLE user_analytics (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  event_type VARCHAR(100) NOT NULL,
  event_category VARCHAR(100),
  event_data JSONB DEFAULT '{}',
  session_id UUID,
  ip_address INET,
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for performance
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role ON users(role);
CREATE INDEX idx_conversation_sessions_user ON conversation_sessions(user_id);
CREATE INDEX idx_conversation_messages_session ON conversation_messages(session_id);
CREATE INDEX idx_properties_location ON properties USING GIST(location);
CREATE INDEX idx_properties_price ON properties(price);
CREATE INDEX idx_properties_status ON properties(status);
CREATE INDEX idx_properties_city_state ON properties(city, state);
CREATE INDEX idx_searches_user ON searches(user_id);
CREATE INDEX idx_search_results_search ON search_results(search_id);
CREATE INDEX idx_notifications_user ON notifications(user_id);
CREATE INDEX idx_leads_user ON leads(user_id);
CREATE INDEX idx_leads_status ON leads(status);
CREATE INDEX idx_lead_activities_lead ON lead_activities(lead_id);
CREATE INDEX idx_compliance_regulations_jurisdiction ON compliance_regulations(jurisdiction);
CREATE INDEX idx_compliance_qa_category ON compliance_qa(category);
CREATE INDEX idx_user_analytics_user ON user_analytics(user_id);
CREATE INDEX idx_user_analytics_event ON user_analytics(event_type);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE conversation_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE conversation_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE searches ENABLE ROW LEVEL SECURITY;
ALTER TABLE search_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE lead_activities ENABLE ROW LEVEL SECURITY;
ALTER TABLE lead_property_interests ENABLE ROW LEVEL SECURITY;
ALTER TABLE compliance_bookmarks ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_analytics ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Users can view own profile" ON users FOR ALL USING (auth.uid() = id);
CREATE POLICY "Users can manage own conversations" ON conversation_sessions FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can manage own messages" ON conversation_messages FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can view all properties" ON properties FOR SELECT USING (true);
CREATE POLICY "Users can manage own searches" ON searches FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can view related search results" ON search_results FOR SELECT USING (
  EXISTS (SELECT 1 FROM searches WHERE searches.id = search_results.search_id AND searches.user_id = auth.uid())
);
CREATE POLICY "Users can manage own notifications" ON notifications FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can manage own leads" ON leads FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can manage own lead activities" ON lead_activities FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can manage own lead interests" ON lead_property_interests FOR ALL USING (
  EXISTS (SELECT 1 FROM leads WHERE leads.id = lead_property_interests.lead_id AND leads.user_id = auth.uid())
);
CREATE POLICY "Users can view all compliance content" ON compliance_regulations FOR SELECT USING (true);
CREATE POLICY "Users can view all compliance Q&A" ON compliance_qa FOR SELECT USING (true);
CREATE POLICY "Users can manage own bookmarks" ON compliance_bookmarks FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can manage own analytics" ON user_analytics FOR ALL USING (auth.uid() = user_id);