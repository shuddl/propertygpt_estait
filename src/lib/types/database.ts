export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          email: string;
          name: string;
          role: 'agent' | 'broker' | 'admin';
          avatar_url: string | null;
          phone: string | null;
          license_number: string | null;
          brokerage: string | null;
          market_areas: string[] | null;
          expertise_level: 'novice' | 'intermediate' | 'expert';
          preferences: Record<string, unknown>;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          email: string;
          name: string;
          role?: 'agent' | 'broker' | 'admin';
          avatar_url?: string | null;
          phone?: string | null;
          license_number?: string | null;
          brokerage?: string | null;
          market_areas?: string[] | null;
          expertise_level?: 'novice' | 'intermediate' | 'expert';
          preferences?: Record<string, unknown>;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          name?: string;
          role?: 'agent' | 'broker' | 'admin';
          avatar_url?: string | null;
          phone?: string | null;
          license_number?: string | null;
          brokerage?: string | null;
          market_areas?: string[] | null;
          expertise_level?: 'novice' | 'intermediate' | 'expert';
          preferences?: Record<string, unknown>;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      conversation_sessions: {
        Row: {
          id: string;
          user_id: string;
          session_data: Record<string, unknown>;
          context: Record<string, unknown>;
          last_activity: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          session_data?: Record<string, unknown>;
          context?: Record<string, unknown>;
          last_activity?: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          session_data?: Record<string, unknown>;
          context?: Record<string, unknown>;
          last_activity?: string;
          created_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "conversation_sessions_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      conversation_messages: {
        Row: {
          id: string;
          session_id: string;
          user_id: string;
          content: string;
          sender: 'user' | 'ai';
          metadata: Record<string, unknown>;
          created_at: string;
        };
        Insert: {
          id?: string;
          session_id: string;
          user_id: string;
          content: string;
          sender: 'user' | 'ai';
          metadata?: Record<string, unknown>;
          created_at?: string;
        };
        Update: {
          id?: string;
          session_id?: string;
          user_id?: string;
          content?: string;
          sender?: 'user' | 'ai';
          metadata?: Record<string, unknown>;
          created_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "conversation_messages_session_id_fkey";
            columns: ["session_id"];
            referencedRelation: "conversation_sessions";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "conversation_messages_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      properties: {
        Row: {
          id: string;
          external_id: string;
          mls_number: string | null;
          address: string;
          city: string;
          state: string;
          zip_code: string;
          county: string | null;
          neighborhood: string | null;
          location: unknown | null;
          price: number;
          bedrooms: number | null;
          bathrooms: number | null;
          half_baths: number | null;
          square_footage: number | null;
          lot_size: number | null;
          year_built: number | null;
          property_type: string;
          property_subtype: string | null;
          status: 'active' | 'pending' | 'sold' | 'off_market' | 'expired';
          days_on_market: number;
          price_per_sqft: number | null;
          hoa_fees: number | null;
          tax_amount: number | null;
          images: string[] | null;
          features: string[] | null;
          description: string | null;
          listing_agent: Record<string, unknown> | null;
          co_listing_agent: Record<string, unknown> | null;
          showing_instructions: string | null;
          remarks: string | null;
          school_district: string | null;
          zoning: string | null;
          parking_spaces: number | null;
          garage_spaces: number | null;
          pool: boolean;
          waterfront: boolean;
          view_type: string[] | null;
          heating_type: string | null;
          cooling_type: string | null;
          flooring_types: string[] | null;
          appliances: string[] | null;
          last_sold_date: string | null;
          last_sold_price: number | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          external_id: string;
          mls_number?: string | null;
          address: string;
          city: string;
          state: string;
          zip_code: string;
          county?: string | null;
          neighborhood?: string | null;
          location?: unknown | null;
          price: number;
          bedrooms?: number | null;
          bathrooms?: number | null;
          half_baths?: number | null;
          square_footage?: number | null;
          lot_size?: number | null;
          year_built?: number | null;
          property_type: string;
          property_subtype?: string | null;
          status: 'active' | 'pending' | 'sold' | 'off_market' | 'expired';
          days_on_market?: number;
          price_per_sqft?: number | null;
          hoa_fees?: number | null;
          tax_amount?: number | null;
          images?: string[] | null;
          features?: string[] | null;
          description?: string | null;
          listing_agent?: Record<string, unknown> | null;
          co_listing_agent?: Record<string, unknown> | null;
          showing_instructions?: string | null;
          remarks?: string | null;
          school_district?: string | null;
          zoning?: string | null;
          parking_spaces?: number | null;
          garage_spaces?: number | null;
          pool?: boolean;
          waterfront?: boolean;
          view_type?: string[] | null;
          heating_type?: string | null;
          cooling_type?: string | null;
          flooring_types?: string[] | null;
          appliances?: string[] | null;
          last_sold_date?: string | null;
          last_sold_price?: number | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          external_id?: string;
          mls_number?: string | null;
          address?: string;
          city?: string;
          state?: string;
          zip_code?: string;
          county?: string | null;
          neighborhood?: string | null;
          location?: unknown | null;
          price?: number;
          bedrooms?: number | null;
          bathrooms?: number | null;
          half_baths?: number | null;
          square_footage?: number | null;
          lot_size?: number | null;
          year_built?: number | null;
          property_type?: string;
          property_subtype?: string | null;
          status?: 'active' | 'pending' | 'sold' | 'off_market' | 'expired';
          days_on_market?: number;
          price_per_sqft?: number | null;
          hoa_fees?: number | null;
          tax_amount?: number | null;
          images?: string[] | null;
          features?: string[] | null;
          description?: string | null;
          listing_agent?: Record<string, unknown> | null;
          co_listing_agent?: Record<string, unknown> | null;
          showing_instructions?: string | null;
          remarks?: string | null;
          school_district?: string | null;
          zoning?: string | null;
          parking_spaces?: number | null;
          garage_spaces?: number | null;
          pool?: boolean;
          waterfront?: boolean;
          view_type?: string[] | null;
          heating_type?: string | null;
          cooling_type?: string | null;
          flooring_types?: string[] | null;
          appliances?: string[] | null;
          last_sold_date?: string | null;
          last_sold_price?: number | null;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      searches: {
        Row: {
          id: string;
          user_id: string;
          name: string;
          description: string | null;
          filters: Record<string, unknown>;
          notification_enabled: boolean;
          notification_frequency: 'immediate' | 'daily' | 'weekly';
          notification_channels: string[];
          last_executed: string | null;
          last_results_count: number;
          is_active: boolean;
          client_name: string | null;
          client_email: string | null;
          client_phone: string | null;
          tags: string[] | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          name: string;
          description?: string | null;
          filters: Record<string, unknown>;
          notification_enabled?: boolean;
          notification_frequency?: 'immediate' | 'daily' | 'weekly';
          notification_channels?: string[];
          last_executed?: string | null;
          last_results_count?: number;
          is_active?: boolean;
          client_name?: string | null;
          client_email?: string | null;
          client_phone?: string | null;
          tags?: string[] | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          name?: string;
          description?: string | null;
          filters?: Record<string, unknown>;
          notification_enabled?: boolean;
          notification_frequency?: 'immediate' | 'daily' | 'weekly';
          notification_channels?: string[];
          last_executed?: string | null;
          last_results_count?: number;
          is_active?: boolean;
          client_name?: string | null;
          client_email?: string | null;
          client_phone?: string | null;
          tags?: string[] | null;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "searches_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      leads: {
        Row: {
          id: string;
          user_id: string;
          name: string;
          email: string | null;
          phone: string | null;
          source: string;
          status: 'new' | 'contacted' | 'qualified' | 'touring' | 'offer' | 'closed' | 'lost';
          lead_score: number;
          budget_min: number | null;
          budget_max: number | null;
          preferred_locations: string[] | null;
          property_types: string[] | null;
          bedrooms_min: number | null;
          bathrooms_min: number | null;
          timeline: string | null;
          notes: string | null;
          tags: string[] | null;
          last_contact_date: string | null;
          next_follow_up: string | null;
          conversion_probability: number;
          estimated_value: number | null;
          referral_source: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          name: string;
          email?: string | null;
          phone?: string | null;
          source?: string;
          status?: 'new' | 'contacted' | 'qualified' | 'touring' | 'offer' | 'closed' | 'lost';
          lead_score?: number;
          budget_min?: number | null;
          budget_max?: number | null;
          preferred_locations?: string[] | null;
          property_types?: string[] | null;
          bedrooms_min?: number | null;
          bathrooms_min?: number | null;
          timeline?: string | null;
          notes?: string | null;
          tags?: string[] | null;
          last_contact_date?: string | null;
          next_follow_up?: string | null;
          conversion_probability?: number;
          estimated_value?: number | null;
          referral_source?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          name?: string;
          email?: string | null;
          phone?: string | null;
          source?: string;
          status?: 'new' | 'contacted' | 'qualified' | 'touring' | 'offer' | 'closed' | 'lost';
          lead_score?: number;
          budget_min?: number | null;
          budget_max?: number | null;
          preferred_locations?: string[] | null;
          property_types?: string[] | null;
          bedrooms_min?: number | null;
          bathrooms_min?: number | null;
          timeline?: string | null;
          notes?: string | null;
          tags?: string[] | null;
          last_contact_date?: string | null;
          next_follow_up?: string | null;
          conversion_probability?: number;
          estimated_value?: number | null;
          referral_source?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "leads_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      compliance_regulations: {
        Row: {
          id: string;
          regulation_code: string;
          title: string;
          content: string;
          summary: string | null;
          jurisdiction: string;
          organization: string;
          category: string;
          subcategory: string | null;
          effective_date: string | null;
          expiration_date: string | null;
          last_updated: string;
          is_active: boolean;
          source_url: string | null;
          search_keywords: string[] | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          regulation_code: string;
          title: string;
          content: string;
          summary?: string | null;
          jurisdiction: string;
          organization: string;
          category: string;
          subcategory?: string | null;
          effective_date?: string | null;
          expiration_date?: string | null;
          last_updated?: string;
          is_active?: boolean;
          source_url?: string | null;
          search_keywords?: string[] | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          regulation_code?: string;
          title?: string;
          content?: string;
          summary?: string | null;
          jurisdiction?: string;
          organization?: string;
          category?: string;
          subcategory?: string | null;
          effective_date?: string | null;
          expiration_date?: string | null;
          last_updated?: string;
          is_active?: boolean;
          source_url?: string | null;
          search_keywords?: string[] | null;
          created_at?: string;
        };
        Relationships: [];
      };
      compliance_qa: {
        Row: {
          id: string;
          question: string;
          answer: string;
          regulation_ids: string[];
          category: string;
          subcategory: string | null;
          jurisdiction: string;
          confidence_score: number;
          tags: string[] | null;
          search_keywords: string[] | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          question: string;
          answer: string;
          regulation_ids: string[];
          category: string;
          subcategory?: string | null;
          jurisdiction: string;
          confidence_score?: number;
          tags?: string[] | null;
          search_keywords?: string[] | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          question?: string;
          answer?: string;
          regulation_ids?: string[];
          category?: string;
          subcategory?: string | null;
          jurisdiction?: string;
          confidence_score?: number;
          tags?: string[] | null;
          search_keywords?: string[] | null;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      user_analytics: {
        Row: {
          id: string;
          user_id: string;
          event_type: string;
          event_category: string | null;
          event_data: Record<string, unknown>;
          session_id: string | null;
          ip_address: string | null;
          user_agent: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          event_type: string;
          event_category?: string | null;
          event_data?: Record<string, unknown>;
          session_id?: string | null;
          ip_address?: string | null;
          user_agent?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          event_type?: string;
          event_category?: string | null;
          event_data?: Record<string, unknown>;
          session_id?: string | null;
          ip_address?: string | null;
          user_agent?: string | null;
          created_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "user_analytics_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};