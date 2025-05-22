import {
  User,
  Property,
  ConversationMessage,
  RichContent,
  AnticipatedAction,
  Prediction,
  SearchFilters,
  Lead,
  ComplianceQuestion,
  ComplianceCitation
} from '../index'

describe('Type Definitions', () => {
  describe('User type', () => {
    it('should have correct structure', () => {
      const user: User = {
        id: 'user-1',
        email: 'test@example.com',
        name: 'Test User',
        role: 'agent',
        created_at: '2024-01-01T00:00:00Z',
        updated_at: '2024-01-01T00:00:00Z'
      }

      expect(user.id).toBe('user-1')
      expect(user.role).toBe('agent')
      expect(['agent', 'broker', 'admin']).toContain(user.role)
    })
  })

  describe('Property type', () => {
    it('should have correct structure', () => {
      const property: Property = {
        id: 'prop-1',
        external_id: 'mls-123',
        address: '123 Main St',
        city: 'Test City',
        state: 'CA',
        zip_code: '90210',
        price: 500000,
        bedrooms: 3,
        bathrooms: 2,
        square_footage: 1500,
        property_type: 'Single Family',
        status: 'active',
        days_on_market: 30,
        images: ['image1.jpg'],
        features: ['Hardwood Floors'],
        listing_agent: {
          name: 'Agent Name',
          phone: '555-0123',
          email: 'agent@example.com'
        },
        coordinates: {
          lat: 34.0522,
          lng: -118.2437
        },
        created_at: '2024-01-01T00:00:00Z',
        updated_at: '2024-01-01T00:00:00Z'
      }

      expect(property.price).toBe(500000)
      expect(['active', 'pending', 'sold']).toContain(property.status)
      expect(typeof property.coordinates?.lat).toBe('number')
    })
  })

  describe('ConversationMessage type', () => {
    it('should have correct structure', () => {
      const message: ConversationMessage = {
        id: 'msg-1',
        content: 'Hello',
        sender: 'user',
        timestamp: '2024-01-01T00:00:00Z'
      }

      expect(['user', 'ai']).toContain(message.sender)
      expect(message.content).toBe('Hello')
    })

    it('should support optional rich content and actions', () => {
      const richContent: RichContent = {
        type: 'property_grid',
        data: {},
        component: 'PropertyGrid'
      }

      const anticipatedAction: AnticipatedAction = {
        label: 'View Details',
        action: 'view_property',
        confidence: 0.8,
        handler: () => {}
      }

      const message: ConversationMessage = {
        id: 'msg-1',
        content: 'Properties found',
        sender: 'ai',
        timestamp: '2024-01-01T00:00:00Z',
        rich_content: [richContent],
        anticipated_actions: [anticipatedAction]
      }

      expect(message.rich_content).toHaveLength(1)
      expect(message.anticipated_actions).toHaveLength(1)
    })
  })

  describe('Prediction type', () => {
    it('should have correct structure', () => {
      const prediction: Prediction = {
        content: 'You might want to search for properties',
        confidence: 0.85,
        trigger: 'typing_pattern',
        category: 'property_search'
      }

      expect(prediction.confidence).toBeGreaterThan(0)
      expect(prediction.confidence).toBeLessThanOrEqual(1)
      expect(['typing_pattern', 'context_cue', 'temporal_pattern']).toContain(prediction.trigger)
      expect(['property_search', 'market_analysis', 'compliance', 'crm']).toContain(prediction.category)
    })
  })

  describe('SearchFilters type', () => {
    it('should support all filter options', () => {
      const filters: SearchFilters = {
        location: {
          city: 'Los Angeles',
          state: 'CA',
          zip_code: '90210',
          radius: 10
        },
        price_range: {
          min: 300000,
          max: 800000
        },
        bedrooms: {
          min: 2,
          max: 4
        },
        bathrooms: {
          min: 1,
          max: 3
        },
        square_footage: {
          min: 1000,
          max: 3000
        },
        property_type: 'Single Family',
        features: ['Pool', 'Garage']
      }

      expect(filters.location?.city).toBe('Los Angeles')
      expect(filters.price_range?.min).toBe(300000)
      expect(filters.features).toContain('Pool')
    })
  })

  describe('Lead type', () => {
    it('should have correct structure', () => {
      const lead: Lead = {
        id: 'lead-1',
        user_id: 'user-1',
        name: 'John Doe',
        email: 'john@example.com',
        phone: '555-0123',
        preferences: {},
        source: 'website',
        status: 'new',
        lead_score: 85,
        created_at: '2024-01-01T00:00:00Z',
        updated_at: '2024-01-01T00:00:00Z'
      }

      expect(lead.lead_score).toBeGreaterThanOrEqual(0)
      expect(['new', 'contacted', 'qualified', 'touring', 'offer', 'closed', 'lost']).toContain(lead.status)
    })
  })

  describe('ComplianceQuestion type', () => {
    it('should have correct structure', () => {
      const citation: ComplianceCitation = {
        regulation_code: 'DRE-123',
        title: 'Disclosure Requirements',
        relevant_text: 'Sample text',
        source_url: 'https://example.com',
        organization: 'DRE'
      }

      const question: ComplianceQuestion = {
        id: 'comp-1',
        question: 'What are disclosure requirements?',
        answer: 'You must disclose...',
        citations: [citation],
        category: 'disclosure',
        jurisdiction: 'CA',
        confidence: 0.9,
        created_at: '2024-01-01T00:00:00Z'
      }

      expect(question.confidence).toBeGreaterThan(0)
      expect(['DRE', 'NAR', 'CAR']).toContain(citation.organization)
    })
  })
})