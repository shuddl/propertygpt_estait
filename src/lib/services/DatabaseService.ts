import { supabaseAdmin } from '@/lib/supabase/client';
import { User, Property, Lead, ConversationMessage } from '@/lib/types';
import { Database } from '@/lib/types/database';

type SavedSearch = Database['public']['Tables']['searches']['Row'];

export class DatabaseService {
  // User operations
  async createUser(userData: Database['public']['Tables']['users']['Insert']): Promise<User> {
    const { data, error } = await supabaseAdmin
      .from('users')
      .insert(userData)
      .select()
      .single();

    if (error) throw new Error(`Failed to create user: ${error.message}`);
    return data as User;
  }

  async getUserById(id: string): Promise<User | null> {
    const { data, error } = await supabaseAdmin
      .from('users')
      .select('*')
      .eq('id', id)
      .single();

    if (error) return null;
    return data;
  }

  // Conversation operations
  async createConversationSession(userId: string): Promise<string> {
    const { data, error } = await supabaseAdmin
      .from('conversation_sessions')
      .insert({
        user_id: userId,
        session_data: {},
        context: {}
      })
      .select('id')
      .single();

    if (error) throw new Error(`Failed to create conversation session: ${error.message}`);
    return data.id;
  }

  async saveConversationMessage(
    sessionId: string,
    userId: string,
    content: string,
    sender: 'user' | 'ai',
    metadata?: Record<string, unknown>
  ): Promise<ConversationMessage> {
    const { data, error } = await supabaseAdmin
      .from('conversation_messages')
      .insert({
        session_id: sessionId,
        user_id: userId,
        content,
        sender,
        metadata: metadata || {}
      })
      .select()
      .single();

    if (error) throw new Error(`Failed to save message: ${error.message}`);
    return {
      ...data,
      timestamp: data.created_at
    } as ConversationMessage;
  }

  async getConversationHistory(sessionId: string, limit: number = 50): Promise<ConversationMessage[]> {
    const { data, error } = await supabaseAdmin
      .from('conversation_messages')
      .select('*')
      .eq('session_id', sessionId)
      .order('created_at', { ascending: true })
      .limit(limit);

    if (error) throw new Error(`Failed to get conversation history: ${error.message}`);
    return (data || []).map(msg => ({
      ...msg,
      timestamp: msg.created_at
    })) as ConversationMessage[];
  }

  // Property operations

  async searchProperties(filters: Record<string, unknown>, limit: number = 50): Promise<Property[]> {
    let query = supabaseAdmin
      .from('properties')
      .select('*')
      .eq('status', 'active');

    // Apply filters
    if (filters.city) {
      query = query.ilike('city', `%${filters.city as string}%`);
    }
    
    if (filters.state) {
      query = query.eq('state', filters.state as string);
    }
    
    if (filters.price_min) {
      query = query.gte('price', filters.price_min as number);
    }
    
    if (filters.price_max) {
      query = query.lte('price', filters.price_max as number);
    }
    
    if (filters.bedrooms_min) {
      query = query.gte('bedrooms', filters.bedrooms_min as number);
    }
    
    if (filters.bathrooms_min) {
      query = query.gte('bathrooms', filters.bathrooms_min as number);
    }

    const { data, error } = await query
      .order('created_at', { ascending: false })
      .limit(limit);

    if (error) throw new Error(`Failed to search properties: ${error.message}`);
    return (data || []) as unknown as Property[];
  }

  // Saved search operations
  async createSavedSearch(userId: string, searchData: Database['public']['Tables']['searches']['Insert']): Promise<SavedSearch> {
    const { data, error } = await supabaseAdmin
      .from('searches')
      .insert({
        ...searchData,
        user_id: userId
      })
      .select()
      .single();

    if (error) throw new Error(`Failed to create saved search: ${error.message}`);
    return data;
  }

  async getUserSavedSearches(userId: string): Promise<SavedSearch[]> {
    const { data, error } = await supabaseAdmin
      .from('searches')
      .select('*')
      .eq('user_id', userId)
      .eq('is_active', true)
      .order('created_at', { ascending: false });

    if (error) throw new Error(`Failed to get saved searches: ${error.message}`);
    return data || [];
  }

  // Lead operations
  async createLead(userId: string, leadData: Database['public']['Tables']['leads']['Insert']): Promise<Lead> {
    const { data, error } = await supabaseAdmin
      .from('leads')
      .insert({
        ...leadData,
        user_id: userId
      })
      .select()
      .single();

    if (error) throw new Error(`Failed to create lead: ${error.message}`);
    return data as unknown as Lead;
  }

  async getUserLeads(userId: string, status?: string): Promise<Lead[]> {
    let query = supabaseAdmin
      .from('leads')
      .select('*')
      .eq('user_id', userId);

    if (status) {
      query = query.eq('status', status as 'new' | 'contacted' | 'qualified' | 'touring' | 'offer' | 'closed' | 'lost');
    }

    const { data, error } = await query.order('created_at', { ascending: false });

    if (error) throw new Error(`Failed to get leads: ${error.message}`);
    return (data || []) as unknown as Lead[];
  }

  // Compliance operations
  async searchCompliance(query: string, jurisdiction?: string): Promise<unknown[]> {
    let dbQuery = supabaseAdmin
      .from('compliance_qa')
      .select('*')
      .textSearch('search_keywords', query.split(' ').join(' | '));

    if (jurisdiction) {
      dbQuery = dbQuery.eq('jurisdiction', jurisdiction);
    }

    const { data, error } = await dbQuery
      .order('confidence_score', { ascending: false })
      .limit(10);

    if (error) throw new Error(`Failed to search compliance: ${error.message}`);
    return data || [];
  }

  // Analytics operations
  async trackUserEvent(
    userId: string,
    eventType: string,
    eventCategory: string,
    eventData: Record<string, unknown>,
    sessionId?: string,
    request?: Request
  ): Promise<void> {
    const { error } = await supabaseAdmin
      .from('user_analytics')
      .insert({
        user_id: userId,
        event_type: eventType,
        event_category: eventCategory,
        event_data: eventData,
        session_id: sessionId,
        ip_address: request?.headers.get('x-forwarded-for') || null,
        user_agent: request?.headers.get('user-agent') || null
      });

    if (error) {
      console.error('Failed to track user event:', error);
    }
  }

  async recordAnalytics(
    userId: string,
    eventType: string,
    eventData: Record<string, unknown>
  ): Promise<void> {
    await this.trackUserEvent(userId, eventType, 'property', eventData);
  }

  // Property caching operations
  async cacheProperty(property: Property): Promise<void> {
    try {
      const { error } = await supabaseAdmin
        .from('properties')
        .upsert({
          id: property.id,
          external_id: property.external_id,
          mls_number: property.mls_number,
          address: property.address,
          city: property.city,
          state: property.state,
          zip_code: property.zip_code,
          county: property.county,
          neighborhood: property.neighborhood,
          location: property.location,
          price: property.price,
          bedrooms: property.bedrooms,
          bathrooms: property.bathrooms,
          half_baths: property.half_baths,
          square_footage: property.square_footage,
          lot_size: property.lot_size,
          year_built: property.year_built,
          property_type: property.property_type,
          property_subtype: property.property_subtype,
          status: property.status,
          days_on_market: property.days_on_market,
          price_per_sqft: property.price_per_sqft,
          hoa_fees: property.hoa_fees,
          tax_amount: property.tax_amount,
          images: property.images,
          features: property.features,
          description: property.description,
          school_district: property.school_district,
          zoning: property.zoning,
          parking_spaces: property.parking_spaces,
          garage_spaces: property.garage_spaces,
          pool: property.pool,
          waterfront: property.waterfront,
          view_type: property.view_type
        }, {
          onConflict: 'external_id'
        });

      if (error) {
        console.error('Failed to cache property:', error);
      }
    } catch (error) {
      console.error('Error caching property:', error);
    }
  }
}

export const databaseService = new DatabaseService();