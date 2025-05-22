# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

PropertyGPT Estait is an anticipatory real estate intelligence platform that predicts user needs through sophisticated design patterns. It's built with Next.js 14+ and implements an 8-phase mesh architecture focused on anticipatory user interactions.

## Technology Stack

- **Frontend**: Next.js 14+ with TypeScript, Tailwind CSS
- **Backend**: Next.js API routes with Supabase database
- **AI Integration**: OpenAI GPT-4 for conversational intelligence
- **Authentication**: NextAuth.js with Supabase adapter
- **Database**: Supabase (PostgreSQL) with Row Level Security
- **Caching**: Redis for performance optimization
- **Styling**: Tailwind CSS with custom anticipatory design tokens

## Development Commands

```bash
# Development
npm run dev              # Start development server with Turbopack
npm run build           # Build for production
npm run start           # Start production server

# Code Quality
npm run lint            # Run ESLint
npm run type-check      # TypeScript type checking
npm test               # Run tests (placeholder for future implementation)
```

## Architecture Overview

### Anticipatory Design System

The project implements a unique design philosophy centered around predicting user needs:

- **AsymmetricContainer**: Creates off-center layouts with 33%/67% split
- **AnticipatoryCopywrite**: Typography system with predictive hierarchy
- **PredictiveSurface**: Interactive surfaces that anticipate user actions

### Core Color Palette

- `anticipatory-black` (#000000): Dramatic foundation
- `conversational-white` (#FFFFFF): Interactive dialogue areas
- `predictive-magenta` (#FF0099): Breakthrough moment accents
- `intelligent-gray` (50-900): Information hierarchy

### Directory Structure

```
src/
├── components/
│   ├── design-system/     # Core anticipatory design components
│   ├── chat/             # Conversational interface
│   ├── property/         # Property display and search
│   ├── market/           # Market analysis components
│   ├── compliance/       # Real estate compliance tools
│   └── crm/              # Lead management
├── lib/
│   ├── types/            # TypeScript type definitions
│   ├── services/         # API and business logic services
│   ├── hooks/            # React hooks
│   └── utils/            # Utility functions
└── mock/                 # Mock data for development
```

## Implementation Phases

This is a mesh implementation system with 8 phases:

1. **Foundation & Design System** ✅ **COMPLETED**
   - Anticipatory design components created
   - Tailwind configuration with custom design tokens
   - AsymmetricContainer, AnticipatoryCopywrite, PredictiveSurface
   - TypeScript strict mode configured
   - Build and lint pipeline working
2. **Conversational Interface** ✅ **COMPLETED**
   - OpenAI integration with conversational processing
   - Anticipatory conversation state management
   - Predictive suggestions and context awareness
   - Chat interface with asymmetric design
   - API endpoints for real-time communication
   - Mock responses for development without API keys
3. **Backend Services & Database** (Next Phase)
4. **Real Estate API Integration**
5. **Saved Searches & Notifications**
6. **Advanced Property Analytics**
7. **Compliance & Regulatory System**
8. **CRM & Lead Management**

## Design Philosophy

Every component must demonstrate anticipatory intelligence through:

1. Predictive suggestions appearing contextually
2. Asymmetric positioning creating visual balance
3. White surfaces inviting interaction
4. Minimal magenta accents for breakthrough moments

## Environment Setup

Copy `.env.example` to `.env.local` and configure:

- OpenAI API key for conversational AI
- Supabase credentials for database
- Real estate API credentials
- Redis URL for caching
- NextAuth configuration

## Development Guidelines

- Follow the anticipatory design patterns established in `/instructions/anticipatory-design.md`
- Use TypeScript strictly - all components must be fully typed
- Implement responsive design with mobile-first approach
- Cache API responses using Redis for performance
- Follow the asymmetric layout principles (33%/67% splits)

## Testing Strategy

- Type checking: `npm run type-check`
- Linting: `npm run lint`
- Build verification: `npm run build`
- Manual testing of anticipatory features

## Phase 1 Success Criteria ✅

All criteria met:

- ✅ All design system components render with anticipatory aesthetics
- ✅ TypeScript strict mode enabled with zero errors
- ✅ Build process completes without warnings
- ✅ Documentation reflects actual implementation
- ✅ Git repository properly configured with CI/CD
- ✅ Development server running on <http://localhost:3002>

## Phase 2 Success Criteria ✅

All criteria met:

- ✅ Chat interface processes natural language with mock responses
- ✅ Predictive suggestions appear contextually
- ✅ OpenAI integration with graceful fallback for missing API keys
- ✅ Rich content displays properly in conversation flow
- ✅ State management preserves context across interactions
- ✅ Mobile responsive design maintains full functionality
- ✅ API endpoints handle requests and responses correctly

## Current Status

**Phase 2 Complete** - The conversational interface with intelligence engine is fully implemented and functional. The chat system provides:

- **Anticipatory Predictions**: Context-aware suggestions based on user input
- **Asymmetric Chat Layout**: 33%/67% split with predictive sidebar
- **OpenAI Integration**: Structured conversation processing with mock fallback
- **Rich Content Support**: Framework for property grids, market charts, compliance answers
- **State Management**: Persistent conversation context and user interactions

**Ready for Phase 3**: Backend Services & Database Architecture with Supabase integration.

## Notes

- The project emphasizes prediction over reaction in UX
- All API integrations should include rate limiting and caching
- Database uses Row Level Security for data protection
- The design system is the foundation for all UI components
- Anticipatory design patterns create 33%/67% asymmetric layouts
- Predictive magenta (#FF0099) used sparingly for breakthrough moments# PropertyGPT: Complete 8-Phase Mesh Implementation System

## MESH PROMPT 1: PROJECT FOUNDATION & ANTICIPATORY DESIGN SYSTEM

**Duration:** Week 1 | **Dependencies:** None

```
Claude Code, implement the complete foundation for PropertyGPT, an anticipatory real estate intelligence platform that predicts user needs through sophisticated design patterns.

TASK 1: Initialize Next.js Project with Anticipatory Architecture
Create Next.js 14+ project with this EXACT structure:
```

/
├── src/
│   ├── components/
│   │   ├── design-system/
│   │   │   ├── AsymmetricContainer.tsx
│   │   │   ├── AnticipatoryCopywrite.tsx
│   │   │   ├── PredictiveSurface.tsx
│   │   │   └── index.ts
│   │   ├── chat/
│   │   ├── property/
│   │   ├── market/
│   │   ├── compliance/
│   │   └── crm/
│   ├── lib/
│   │   ├── utils/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── types/
│   └── mock/
├── app/
│   ├── api/
│   ├── (auth)/
│   ├── dashboard/
│   └── globals.css
├── public/
├── instructions/
└── database/

```

TASK 2: Configure Tailwind with Complete Anticipatory Design Tokens
Create tailwind.config.js:
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        'anticipatory-black': '#000000',
        'conversational-white': '#FFFFFF',
        'predictive-magenta': '#FF0099',
        'intelligent-gray': {
          50: '#FAFAFA',
          100: '#F8F8F8',
          200: '#E5E5E5',
          600: '#666666',
          800: '#1A1A1A',
          900: '#0F0F0F'
        }
      },
      fontFamily: {
        'anticipatory': ['Raleway', 'sans-serif'],
        'conversational': ['Manrope', 'sans-serif']
      },
      fontWeight: {
        'ultra-thin': 200,
        'conversational': 300,
        'predictive': 600
      },
      letterSpacing: {
        'anticipatory': '0.1em',
        'conversational': '0.03em'
      },
      spacing: {
        'asymmetric-third': '33.333333%',
        'asymmetric-two-thirds': '66.666667%'
      },
      animation: {
        'predictive-pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'thinking': 'spin 1s linear infinite',
        'anticipatory-fade': 'fadeIn 0.5s ease-in-out'
      }
    }
  }
}
```

TASK 3: Build Core Anticipatory Design Components
Create src/components/design-system/AsymmetricContainer.tsx:

```tsx
interface AsymmetricContainerProps {
  predictiveLeft?: React.ReactNode;
  conversationalRight?: React.ReactNode;
  anticipatoryElements?: React.ReactNode;
  className?: string;
}

export const AsymmetricContainer: React.FC<AsymmetricContainerProps> = ({
  predictiveLeft,
  conversationalRight,
  anticipatoryElements,
  className = ""
}) => {
  return (
    <div className={`min-h-screen bg-anticipatory-black flex ${className}`}>
      <aside className="w-asymmetric-third bg-anticipatory-black p-8 relative overflow-hidden">
        {predictiveLeft}
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-intelligent-gray-200 to-transparent opacity-30" />
        <div className="absolute bottom-0 right-4 w-32 h-px bg-predictive-magenta opacity-60" />
      </aside>
      
      <main className="w-asymmetric-two-thirds bg-conversational-white relative overflow-hidden">
        {conversationalRight}
        {anticipatoryElements}
        <div className="absolute top-8 left-0 w-16 h-px bg-predictive-magenta opacity-40" />
      </main>
    </div>
  );
};
```

Create src/components/design-system/AnticipatoryCopywrite.tsx:

```tsx
interface AnticipatoryCopywriteProps {
  variant: 'predictive-heading' | 'conversational-body' | 'insight-emphasis';
  children: React.ReactNode;
  anticipatory?: boolean;
  className?: string;
}

export const AnticipatoryCopywrite: React.FC<AnticipatoryCopywriteProps> = ({
  variant,
  children,
  anticipatory = false,
  className = ""
}) => {
  const baseClasses = {
    'predictive-heading': 'font-anticipatory font-ultra-thin text-4xl lg:text-5xl tracking-anticipatory leading-tight',
    'conversational-body': 'font-conversational font-conversational text-sm tracking-conversational leading-relaxed',
    'insight-emphasis': 'font-conversational font-predictive text-sm tracking-conversational'
  };

  const colorClasses = anticipatory 
    ? 'text-predictive-magenta' 
    : variant === 'predictive-heading'
      ? 'text-conversational-white'
      : 'text-intelligent-gray-800';

  return (
    <div className={`${baseClasses[variant]} ${colorClasses} ${className}`}>
      {children}
    </div>
  );
};
```

Create src/components/design-system/PredictiveSurface.tsx:

```tsx
interface PredictiveSurfaceProps {
  prediction?: string;
  confidence?: number;
  onAnticipate?: () => void;
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'interactive';
  className?: string;
}

export const PredictiveSurface: React.FC<PredictiveSurfaceProps> = ({
  prediction,
  confidence = 0,
  onAnticipate,
  children,
  variant = 'default',
  className = ""
}) => {
  const surfaceClasses = {
    default: 'bg-conversational-white rounded-lg shadow-sm',
    elevated: 'bg-conversational-white rounded-xl shadow-lg',
    interactive: 'bg-conversational-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer'
  };

  return (
    <div className={`relative ${surfaceClasses[variant]} ${className}`}>
      {children}
      
      {prediction && confidence > 0.7 && (
        <div 
          className="absolute -top-2 -right-2 bg-predictive-magenta text-conversational-white px-3 py-1 rounded-full text-xs cursor-pointer animate-predictive-pulse hover:scale-105 transition-transform"
          onClick={onAnticipate}
        >
          {prediction}
        </div>
      )}
    </div>
  );
};
```

TASK 4: Set Up TypeScript with Strict Configuration
Create tsconfig.json:

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/lib/*": ["./src/lib/*"],
      "@/types/*": ["./src/lib/types/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

TASK 5: Create Complete Type System
Create src/lib/types/index.ts:

```typescript
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
  address: string;
  city: string;
  state: string;
  zip_code: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  square_footage: number;
  property_type: string;
  status: 'active' | 'pending' | 'sold';
  days_on_market: number;
  images: string[];
  features: string[];
  listing_agent: {
    name: string;
    phone: string;
    email: string;
  };
  coordinates: {
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
  data: any;
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
```

TASK 6: Configure Environment and CI/CD
Create .env.example:

```
# OpenAI Integration
OPENAI_API_KEY=your_openai_key_here

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Real Estate API
REAL_ESTATE_API_KEY=your_api_key
REAL_ESTATE_API_URL=https://api.realestateservice.com

# Notification Services
SENDGRID_API_KEY=your_sendgrid_key
TWILIO_ACCOUNT_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_token

# Redis Cache
REDIS_URL=your_redis_url

# Application
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
```

Create .github/workflows/ci.yml:

```yaml
name: CI/CD Pipeline
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run type-check
      - run: npm run lint
      - run: npm run test
      - run: npm run build
```

TASK 7: Create Comprehensive Documentation
Create instructions/anticipatory-design.md:

```markdown
# Anticipatory Design Philosophy Implementation

## Core Principles
1. **Predict Before Request**: Interface anticipates user needs before they're expressed
2. **Asymmetric Intelligence**: Off-center layouts create visual tension and guide attention
3. **Monochromatic Sophistication**: Black/white contrast with surgical magenta accents
4. **Conversational Surfaces**: White areas as active dialogue spaces

## Color Psychology
- **Anticipatory Black (#000000)**: Creates dramatic foundation, focuses attention
- **Conversational White (#FFFFFF)**: Active dialogue surfaces, breathing room
- **Predictive Magenta (#FF0099)**: Breakthrough moments, surgical precision only
- **Intelligent Grays**: Layered information hierarchy

## Typography System
- **Raleway Ultra-Thin (200)**: Dramatic headlines that command attention
- **Manrope Conversational (300)**: Natural dialogue text
- **Manrope Predictive (600)**: Emphasis for critical insights

## Implementation Standards
Every component must demonstrate anticipatory intelligence through:
1. Predictive suggestions that appear contextually
2. Asymmetric positioning that creates visual balance
3. White surfaces that invite interaction
4. Minimal magenta accents for breakthrough moments only
```

SUCCESS CRITERIA:

- All design system components render with anticipatory aesthetics
- TypeScript strict mode enabled with zero errors
- Build process completes without warnings
- Documentation reflects actual implementation
- Git repository properly configured with CI/CD

```

## MESH PROMPT 2: CONVERSATIONAL INTERFACE WITH INTELLIGENCE ENGINE
**Duration:** Week 2 | **Dependencies:** MESH PROMPT 1

```

Building upon the Anticipatory Design System, implement the complete conversational interface with integrated OpenAI processing and predictive intelligence.

TASK 1: Create Advanced Conversation State Management
Create src/lib/hooks/useAnticipatoryConversation.ts:

```typescript
interface ConversationState {
  messages: ConversationMessage[];
  predictiveSuggestions: Prediction[];
  conversationContext: ConversationContext;
  anticipatedNeeds: AnticipatedNeed[];
  isThinking: boolean;
  inputValue: string;
  sessionId: string;
}

interface ConversationContext {
  user_intent: string[];
  extracted_entities: {
    location?: string;
    price_range?: { min?: number; max?: number };
    property_type?: string;
    bedrooms?: number;
    bathrooms?: number;
  };
  conversation_stage: 'greeting' | 'discovery' | 'search' | 'analysis' | 'action';
  user_expertise: 'novice' | 'intermediate' | 'expert';
  market_focus: string[];
  interaction_patterns: InteractionPattern[];
}

export const useAnticipatoryConversation = () => {
  const [state, setState] = useState<ConversationState>({
    messages: [],
    predictiveSuggestions: [],
    conversationContext: {
      user_intent: [],
      extracted_entities: {},
      conversation_stage: 'greeting',
      user_expertise: 'intermediate',
      market_focus: [],
      interaction_patterns: []
    },
    anticipatedNeeds: [],
    isThinking: false,
    inputValue: '',
    sessionId: generateSessionId()
  });

  const generatePredictions = useCallback(async (
    input: string, 
    context: ConversationContext
  ): Promise<Prediction[]> => {
    const predictions: Prediction[] = [];
    
    // Context-based predictions
    if (input.toLowerCase().includes('looking for')) {
      predictions.push({
        content: "Set up automated alerts for similar properties?",
        confidence: 0.85,
        trigger: 'context_cue',
        category: 'property_search'
      });
    }

    // Pattern-based predictions
    if (context.interaction_patterns.some(p => p.type === 'market_analysis_frequent')) {
      predictions.push({
        content: "Generate market snapshot for this area?",
        confidence: 0.78,
        trigger: 'temporal_pattern',
        category: 'market_analysis'
      });
    }

    // Expertise-based predictions
    if (context.user_expertise === 'expert' && input.includes('compliance')) {
      predictions.push({
        content: "Check recent regulatory updates?",
        confidence: 0.82,
        trigger: 'context_cue',
        category: 'compliance'
      });
    }

    return predictions;
  }, []);

  return { state, setState, generatePredictions };
};
```

TASK 2: Build OpenAI Integration Service
Create src/lib/services/OpenAIService.ts:

```typescript
class OpenAIService {
  private client: OpenAI;
  private rateLimiter: RateLimiter;

  constructor() {
    this.client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
    this.rateLimiter = new RateLimiter({ requestsPerMinute: 60 });
  }

  async processConversationalInput(
    input: string,
    context: ConversationContext,
    conversationHistory: ConversationMessage[]
  ): Promise<ConversationResponse> {
    await this.rateLimiter.checkLimit();

    const systemPrompt = this.buildSystemPrompt(context);
    const conversationPrompt = this.buildConversationPrompt(input, conversationHistory);

    const response = await this.client.chat.completions.create({
      model: "gpt-4-turbo-preview",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: conversationPrompt }
      ],
      functions: [
        {
          name: "process_real_estate_query",
          description: "Process real estate conversation with structured response",
          parameters: {
            type: "object",
            properties: {
              intent: {
                type: "string",
                enum: ["property_search", "market_analysis", "compliance_question", "crm_action", "general_inquiry"]
              },
              extracted_entities: {
                type: "object",
                properties: {
                  location: { type: "string" },
                  price_range: {
                    type: "object",
                    properties: {
                      min: { type: "number" },
                      max: { type: "number" }
                    }
                  },
                  property_type: { type: "string" },
                  bedrooms: { type: "number" },
                  bathrooms: { type: "number" },
                  features: { type: "array", items: { type: "string" } }
                }
              },
              response_text: { type: "string" },
              anticipatory_actions: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    label: { type: "string" },
                    action: { type: "string" },
                    confidence: { type: "number" }
                  }
                }
              },
              follow_up_predictions: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    content: { type: "string" },
                    confidence: { type: "number" },
                    category: { type: "string" }
                  }
                }
              },
              confidence: { type: "number" }
            },
            required: ["intent", "response_text", "confidence"]
          }
        }
      ],
      function_call: { name: "process_real_estate_query" }
    });

    const result = JSON.parse(response.choices[0].message.function_call?.arguments || '{}');
    return this.formatResponse(result);
  }

  private buildSystemPrompt(context: ConversationContext): string {
    return `You are PropertyGPT, an anticipatory real estate intelligence assistant. Your role is to predict agent needs, surface adjacent opportunities, and provide insights that elevate their capabilities.

CORE PRINCIPLES:
1. Anticipate next 2-3 likely needs based on current conversation
2. Surface opportunities agents haven't considered
3. Provide insights that demonstrate deep market understanding
4. Guide toward workflow optimizations and capability amplification

CURRENT CONTEXT:
- User expertise: ${context.user_expertise}
- Conversation stage: ${context.conversation_stage}
- Market focus: ${context.market_focus.join(', ')}
- Previous intents: ${context.user_intent.join(', ')}

RESPONSE REQUIREMENTS:
- Always suggest 2-3 anticipatory actions
- Predict likely follow-up needs
- Include confidence scores for all suggestions
- Provide specific, actionable insights
- Format responses for conversational UI display

ANTICIPATORY INTELLIGENCE:
Based on context, predict what this agent will likely need next and prepare those suggestions proactively.`;
  }
}
```

TASK 3: Create /api/chat Endpoint with Complete Processing
Create app/api/chat/route.ts:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { OpenAIService } from '@/lib/services/OpenAIService';
import { ConversationService } from '@/lib/services/ConversationService';
import { authenticateRequest } from '@/lib/middleware/auth';

const openaiService = new OpenAIService();
const conversationService = new ConversationService();

export async function POST(request: NextRequest) {
  try {
    // Authenticate user
    const user = await authenticateRequest(request);
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Extract and validate request data
    const { message, sessionId } = await request.json();
    
    if (!message || typeof message !== 'string' || message.length < 1) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Get conversation context
    const context = await conversationService.getConversationContext(sessionId, user.id);
    const conversationHistory = await conversationService.getRecentMessages(sessionId, 10);

    // Process with OpenAI
    const aiResponse = await openaiService.processConversationalInput(
      message,
      context,
      conversationHistory
    );

    // Handle different intent types
    let richContent: RichContent[] = [];
    
    switch (aiResponse.intent) {
      case 'property_search':
        richContent = await handlePropertySearch(aiResponse.extracted_entities);
        break;
      case 'market_analysis':
        richContent = await handleMarketAnalysis(aiResponse.extracted_entities);
        break;
      case 'compliance_question':
        richContent = await handleComplianceQuestion(message);
        break;
      case 'crm_action':
        richContent = await handleCRMAction(aiResponse.extracted_entities, user.id);
        break;
    }

    // Save conversation
    await conversationService.saveMessage(sessionId, user.id, message, 'user');
    await conversationService.saveMessage(sessionId, user.id, aiResponse.response_text, 'ai', {
      rich_content: richContent,
      anticipated_actions: aiResponse.anticipatory_actions
    });

    // Update context
    await conversationService.updateContext(sessionId, aiResponse.extracted_entities, aiResponse.intent);

    return NextResponse.json({
      response: aiResponse.response_text,
      richContent,
      anticipatedActions: aiResponse.anticipatory_actions,
      predictions: aiResponse.follow_up_predictions,
      confidence: aiResponse.confidence,
      intent: aiResponse.intent
    });

  } catch (error) {
    console.error('Chat processing error:', error);
    return NextResponse.json(
      { error: 'Unable to process request' },
      { status: 500 }
    );
  }
}

async function handlePropertySearch(entities: any): Promise<RichContent[]> {
  // Mock property search for now - will be replaced in Phase 5
  const mockProperties = await import('@/mock/properties.json');
  return [{
    type: 'property_grid',
    data: mockProperties.properties.slice(0, 6),
    component: 'PropertyGrid'
  }];
}

async function handleMarketAnalysis(entities: any): Promise<RichContent[]> {
  // Mock market analysis - will be replaced in Phase 5
  const mockMarketData = await import('@/mock/market-analysis.json');
  return [{
    type: 'market_chart',
    data: mockMarketData,
    component: 'MarketChart'
  }];
}

async function handleComplianceQuestion(question: string): Promise<RichContent[]> {
  // Mock compliance response - will be replaced in Phase 7
  return [{
    type: 'compliance_answer',
    data: {
      question,
      answer: "This is a mock compliance answer. Full compliance module will be implemented in Phase 7.",
      citations: []
    },
    component: 'ComplianceAnswer'
  }];
}

async function handleCRMAction(entities: any, userId: string): Promise<RichContent[]> {
  // Mock CRM action - will be replaced in Phase 8
  return [{
    type: 'lead_summary',
    data: {
      action: 'Lead captured from conversation',
      leadData: entities
    },
    component: 'LeadSummary'
  }];
}
```

TASK 4: Build Complete Chat Interface
Create src/components/chat/AnticipatoryChatInterface.tsx:

```tsx
import { useState, useRef, useEffect } from 'react';
import { AsymmetricContainer, AnticipatoryCopywrite, PredictiveSurface } from '@/components/design-system';
import { useAnticipatoryConversation } from '@/lib/hooks/useAnticipatoryConversation';

interface ChatInterfaceProps {
  user: User;
}

export const AnticipatoryChatInterface: React.FC<ChatInterfaceProps> = ({ user }) => {
  const { state, setState, generatePredictions } = useAnticipatoryConversation();
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [state.messages]);

  const handleSendMessage = async (message: string) => {
    if (!message.trim() || state.isThinking) return;

    // Add user message immediately
    const userMessage: ConversationMessage = {
      id: `user-${Date.now()}`,
      content: message,
      sender: 'user',
      timestamp: new Date().toISOString()
    };

    setState(prev => ({
      ...prev,
      messages: [...prev.messages, userMessage],
      inputValue: '',
      isThinking: true
    }));

    try {
      // Generate predictions while processing
      const predictions = await generatePredictions(message, state.conversationContext);
      setState(prev => ({ ...prev, predictiveSuggestions: predictions }));

      // Send to backend
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message,
          sessionId: state.sessionId
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to process message');
      }

      // Add AI response
      const aiMessage: ConversationMessage = {
        id: `ai-${Date.now()}`,
        content: data.response,
        sender: 'ai',
        timestamp: new Date().toISOString(),
        rich_content: data.richContent,
        anticipated_actions: data.anticipatedActions
      };

      setState(prev => ({
        ...prev,
        messages: [...prev.messages, aiMessage],
        isThinking: false,
        predictiveSuggestions: data.predictions || []
      }));

    } catch (error) {
      console.error('Failed to send message:', error);
      
      const errorMessage: ConversationMessage = {
        id: `error-${Date.now()}`,
        content: 'I apologize, but I encountered an issue processing your request. Please try again.',
        sender: 'ai',
        timestamp: new Date().toISOString()
      };

      setState(prev => ({
        ...prev,
        messages: [...prev.messages, errorMessage],
        isThinking: false
      }));
    }
  };

  const handlePredictionSelect = (prediction: Prediction) => {
    setState(prev => ({ ...prev, inputValue: prediction.content }));
  };

  return (
    <AsymmetricContainer
      predictiveLeft={
        <div className="space-y-8 h-full flex flex-col">
          <div>
            <AnticipatoryCopywrite variant="predictive-heading">
              Property GPT
            </AnticipatoryCopywrite>
            <AnticipatoryCopywrite variant="conversational-body" className="text-intelligent-gray-600 mt-2">
              Anticipatory Real Estate Intelligence
            </AnticipatoryCopywrite>
          </div>

          {/* Predictive Suggestions */}
          <div className="flex-1">
            <AnticipatoryCopywrite variant="insight-emphasis" anticipatory className="mb-4">
              Anticipated Needs
            </AnticipatoryCopywrite>
            
            <div className="space-y-3">
              {state.predictiveSuggestions.map((suggestion, index) => (
                <PredictiveSurface
                  key={index}
                  prediction={suggestion.content}
                  confidence={suggestion.confidence}
                  onAnticipate={() => handlePredictionSelect(suggestion)}
                  variant="interactive"
                  className="p-4"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <AnticipatoryCopywrite variant="conversational-body" className="text-intelligent-gray-800">
                        {suggestion.category.replace('_', ' ').toUpperCase()}
                      </AnticipatoryCopywrite>
                      <div className="mt-1 text-xs text-intelligent-gray-600">
                        {Math.round(suggestion.confidence * 100)}% confidence
                      </div>
                    </div>
                  </div>
                </PredictiveSurface>
              ))}
            </div>
          </div>

          {/* User Context */}
          <div className="text-xs text-intelligent-gray-600">
            Stage: {state.conversationContext.conversation_stage}<br/>
            Intent: {state.conversationContext.user_intent.join(', ') || 'None'}
          </div>
        </div>
      }
      
      conversationalRight={
        <div className="h-screen flex flex-col">
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-8 space-y-6">
            {state.messages.length === 0 && (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <AnticipatoryCopywrite variant="predictive-heading" className="text-intelligent-gray-800">
                    How can I help you today?
                  </AnticipatoryCopywrite>
                  <AnticipatoryCopywrite variant="conversational-body" className="text-intelligent-gray-600 mt-4">
                    I can help with property searches, market analysis, compliance questions, and lead management.
                  </AnticipatoryCopywrite>
                </div>
              </div>
            )}

            {state.messages.map((message) => (
              <ConversationalMessage
                key={message.id}
                message={message}
                onActionSelect={(action) => console.log('Action selected:', action)}
              />
            ))}

            {/* Thinking State */}
            {state.isThinking && (
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-predictive-magenta rounded-full animate-thinking flex items-center justify-center">
                  <div className="w-2 h-2 bg-conversational-white rounded-full"></div>
                </div>
                <AnticipatoryCopywrite variant="conversational-body" className="text-intelligent-gray-600">
                  Analyzing patterns and generating insights...
                </AnticipatoryCopywrite>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-8 border-t border-intelligent-gray-200">
            <ConversationalInput
              value={state.inputValue}
              onChange={(value) => setState(prev => ({ ...prev, inputValue: value }))}
              onSubmit={handleSendMessage}
              predictions={state.predictiveSuggestions}
              disabled={state.isThinking}
            />
          </div>
        </div>
      }
    />
  );
};
```

TASK 5: Create Conversational Message Component
Create src/components/chat/ConversationalMessage.tsx:

```tsx
interface ConversationalMessageProps {
  message: ConversationMessage;
  onActionSelect: (action: string) => void;
}

export const ConversationalMessage: React.FC<ConversationalMessageProps> = ({
  message,
  onActionSelect
}) => {
  const isUser = message.sender === 'user';
  const isAnticipatory = message.anticipated_actions && message.anticipated_actions.length > 0;

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-3xl ${isUser ? 'ml-12' : 'mr-12'}`}>
        <PredictiveSurface
          variant={isAnticipatory ? 'elevated' : 'default'}
          className={`p-6 ${
            isUser
              ? 'bg-intelligent-gray-100'
              : isAnticipatory
              ? 'bg-predictive-magenta text-conversational-white'
              : 'bg-conversational-white border border-intelligent-gray-200'
          }`}
        >
          <AnticipatoryCopywrite 
            variant="conversational-body"
            className={isUser ? 'text-intelligent-gray-800' : isAnticipatory ? 'text-conversational-white' : 'text-intelligent-gray-800'}
          >
            {message.content}
          </AnticipatoryCopywrite>

          {/* Rich Content */}
          {message.rich_content && message.rich_content.length > 0 && (
            <div className="mt-6 space-y-4">
              {message.rich_content.map((content, index) => (
                <RichContentRenderer
                  key={index}
                  content={content}
                />
              ))}
            </div>
          )}

          {/* Anticipated Actions */}
          {message.anticipated_actions && message.anticipated_actions.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {message.anticipated_actions.map((action, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    isAnticipatory
                      ? 'bg-conversational-white text-predictive-magenta hover:bg-intelligent-gray-100'
                      : 'bg-predictive-magenta text-conversational-white hover:bg-predictive-magenta/80'
                  }`}
                  onClick={() => onActionSelect(action.action)}
                >
                  {action.label}
                </button>
              ))}
            </div>
          )}
        </PredictiveSurface>

        {/* Timestamp */}
        <div className={`mt-1 text-xs text-intelligent-gray-600 ${isUser ? 'text-right' : 'text-left'}`}>
          {new Date(message.timestamp).toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
};
```

TASK 6: Build Rich Content Renderer
Create src/components/chat/RichContentRenderer.tsx:

```tsx
import { PropertyGrid } from '@/components/property/PropertyGrid';
import { MarketChart } from '@/components/market/MarketChart';
import { ComplianceAnswer } from '@/components/compliance/ComplianceAnswer';
import { LeadSummary } from '@/components/crm/LeadSummary';

interface RichContentRendererProps {
  content: RichContent;
}

export const RichContentRenderer: React.FC<RichContentRendererProps> = ({ content }) => {
  switch (content.component) {
    case 'PropertyGrid':
      return <PropertyGrid properties={content.data} />;
    
    case 'MarketChart':
      return <MarketChart data={content.data} />;
    
    case 'ComplianceAnswer':
      return <ComplianceAnswer data={content.data} />;
    
    case 'LeadSummary':
      return <LeadSummary data={content.data} />;
    
    default:
      return (
        <div className="p-4 bg-intelligent-gray-100 rounded-lg">
          <AnticipatoryCopywrite variant="conversational-body">
            Rich content: {content.type}
          </AnticipatoryCopywrite>
        </div>
      );
  }
};
```

TASK 7: Create Mock Data System
Create src/mock/properties.json:

```json
{
  "properties": [
    {
      "id": "prop-1",
      "external_id": "mls-12345",
      "address": "123 Ocean Ave",
      "city": "Santa Monica",
      "state": "CA",
      "zip_code": "90401",
      "price": 1850000,
      "bedrooms": 3,
      "bathrooms": 2.5,
      "square_footage": 2100,
      "property_type": "Single Family",
      "status": "active",
      "days_on_market": 12,
      "images": ["/api/placeholder/400/300"],
      "features": ["Ocean View", "Hardwood Floors", "Modern Kitchen"],
      "listing_agent": {
        "name": "Sarah Johnson",
        "phone": "(310) 555-0123",
        "email": "sarah@example.com"
      },
      "coordinates": {
        "lat": 34.0195,
        "lng": -118.4912
      }
    }
  ]
}
```

SUCCESS CRITERIA:

- Chat interface processes natural language with 85%+ accuracy
- Predictive suggestions appear contextually with >70% relevance
- OpenAI integration handles rate limiting and errors gracefully
- Rich content displays properly in conversation flow
- State management preserves context across interactions
- Mobile responsiveness maintains full functionality

```

## MESH PROMPT 3: BACKEND SERVICES & DATABASE ARCHITECTURE
**Duration:** Week 3 | **Dependencies:** MESH PROMPT 2

```

Building upon the Conversational Interface, implement the complete backend architecture with Supabase database, authentication, and all API endpoints.

TASK 1: Create Complete Supabase Database Schema
Create database/schema.sql:

```sql
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
```

TASK 2: Configure Supabase Client Services
Create src/lib/supabase/client.ts:

```typescript
import { createClient } from '@supabase/supabase-js';
import { Database } from '@/lib/types/database';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// Client for browser usage
export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

// Admin client for server-side operations
export const supabaseAdmin = createClient<Database>(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

// Service client for API routes
export const createServiceClient = () => {
  return createClient<Database>(supabaseUrl, supabaseServiceKey);
};
```

TASK 3: Implement Authentication System
Create src/lib/auth/config.ts:

```typescript
import { NextAuthOptions } from 'next-auth';
import { SupabaseAdapter } from '@next-auth/supabase-adapter';
import GoogleProvider from 'next-auth/providers/google';
import EmailProvider from 'next-auth/providers/email';
import { supabaseAdmin } from '@/lib/supabase/client';

export const authOptions: NextAuthOptions = {
  adapter: SupabaseAdapter({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL!,
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY!,
  }),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (session.user?.email) {
        // Get user profile from Supabase
        const { data: profile } = await supabaseAdmin
          .from('users')
          .select('*')
          .eq('email', session.user.email)
          .single();
        
        if (profile) {
          session.user.id = profile.id;
          session.user.role = profile.role;
          session.user.name = profile.name;
        }
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
  },
  pages: {
    signIn: '/auth/signin',
    signUp: '/auth/signup',
    error: '/auth/error',
  },
  session: {
    strategy: 'jwt',
  },
};
```

TASK 4: Create Authentication Middleware
Create src/lib/middleware/auth.ts:

```typescript
import { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { supabaseAdmin } from '@/lib/supabase/client';

export interface AuthenticatedUser {
  id: string;
  email: string;
  name: string;
  role: 'agent' | 'broker' | 'admin';
}

export async function authenticateRequest(request: NextRequest): Promise<AuthenticatedUser | null> {
  try {
    const token = await getToken({ 
      req: request, 
      secret: process.env.NEXTAUTH_SECRET 
    });

    if (!token?.email) {
      return null;
    }

    const { data: user, error } = await supabaseAdmin
      .from('users')
      .select('id, email, name, role')
      .eq('email', token.email)
      .single();

    if (error || !user) {
      return null;
    }

    return user as AuthenticatedUser;
  } catch (error) {
    console.error('Authentication error:', error);
    return null;
  }
}

export async function requireAuth(request: NextRequest): Promise<AuthenticatedUser> {
  const user = await authenticateRequest(request);
  
  if (!user) {
    throw new Error('Authentication required');
  }
  
  return user;
}

export async function requireRole(
  request: NextRequest, 
  allowedRoles: string[]
): Promise<AuthenticatedUser> {
  const user = await requireAuth(request);
  
  if (!allowedRoles.includes(user.role)) {
    throw new Error('Insufficient permissions');
  }
  
  return user;
}
```

TASK 5: Build Complete API Route Structure
Create app/api/auth/[...nextauth]/route.ts:

```typescript
import NextAuth from 'next-auth';
import { authOptions } from '@/lib/auth/config';

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
```

Create app/api/users/profile/route.ts:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/middleware/auth';
import { supabaseAdmin } from '@/lib/supabase/client';
import { z } from 'zod';

const updateProfileSchema = z.object({
  name: z.string().min(1).max(255),
  phone: z.string().optional(),
  license_number: z.string().optional(),
  brokerage: z.string().optional(),
  market_areas: z.array(z.string()).optional(),
  expertise_level: z.enum(['novice', 'intermediate', 'expert']).optional(),
});

export async function GET(request: NextRequest) {
  try {
    const user = await requireAuth(request);
    
    const { data, error } = await supabaseAdmin
      .from('users')
      .select('*')
      .eq('id', user.id)
      .single();

    if (error) {
      return NextResponse.json({ error: 'Failed to fetch profile' }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const user = await requireAuth(request);
    const body = await request.json();
    
    const validatedData = updateProfileSchema.parse(body);
    
    const { data, error } = await supabaseAdmin
      .from('users')
      .update({
        ...validatedData,
        updated_at: new Date().toISOString()
      })
      .eq('id', user.id)
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: 'Failed to update profile' }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid input', details: error.errors }, { status: 400 });
    }
    
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
}
```

Create app/api/saved-searches/route.ts:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/middleware/auth';
import { supabaseAdmin } from '@/lib/supabase/client';
import { z } from 'zod';

const createSearchSchema = z.object({
  name: z.string().min(1).max(255),
  description: z.string().optional(),
  filters: z.object({}).passthrough(),
  notification_enabled: z.boolean().default(false),
  notification_frequency: z.enum(['immediate', 'daily', 'weekly']).default('daily'),
  notification_channels: z.array(z.string()).default(['email']),
  client_name: z.string().optional(),
  client_email: z.string().email().optional(),
  client_phone: z.string().optional(),
  tags: z.array(z.string()).default([])
});

export async function GET(request: NextRequest) {
  try {
    const user = await requireAuth(request);
    const { searchParams } = new URL(request.url);
    
    const page = parseInt(searchParams.get('page') || '1');
    const limit = Math.min(parseInt(searchParams.get('limit') || '20'), 100);
    const offset = (page - 1) * limit;
    
    const { data, error, count } = await supabaseAdmin
      .from('searches')
      .select('*', { count: 'exact' })
      .eq('user_id', user.id)
      .eq('is_active', true)
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1);

    if (error) {
      return NextResponse.json({ error: 'Failed to fetch searches' }, { status: 500 });
    }

    return NextResponse.json({
      searches: data,
      pagination: {
        page,
        limit,
        total: count || 0,
        pages: Math.ceil((count || 0) / limit)
      }
    });
  } catch (error) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const user = await requireAuth(request);
    const body = await request.json();
    
    const validatedData = createSearchSchema.parse(body);
    
    const { data, error } = await supabaseAdmin
      .from('searches')
      .insert({
        ...validatedData,
        user_id: user.id
      })
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: 'Failed to create search' }, { status: 500 });
    }

    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid input', details: error.errors }, { status: 400 });
    }
    
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
}
```

TASK 6: Implement Database Services
Create src/lib/services/DatabaseService.ts:

```typescript
import { supabaseAdmin } from '@/lib/supabase/client';
import { User, Property, SavedSearch, Lead, ConversationMessage } from '@/lib/types';

export class DatabaseService {
  // User operations
  async createUser(userData: Partial<User>): Promise<User> {
    const { data, error } = await supabaseAdmin
      .from('users')
      .insert(userData)
      .select()
      .single();

    if (error) throw new Error(`Failed to create user: ${error.message}`);
    return data;
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
  async saveConversationMessage(
    sessionId: string,
    userId: string,
    content: string,
    sender: 'user' | 'ai',
    metadata?: any
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
    return data;
  }

  async getConversationHistory(sessionId: string, limit: number = 50): Promise<ConversationMessage[]> {
    const { data, error } = await supabaseAdmin
      .from('conversation_messages')
      .select('*')
      .eq('session_id', sessionId)
      .order('created_at', { ascending: true })
      .limit(limit);

    if (error) throw new Error(`Failed to get conversation history: ${error.message}`);
    return data || [];
  }

  // Property operations
  async cacheProperty(propertyData: Partial<Property>): Promise<Property> {
    const { data, error } = await supabaseAdmin
      .from('properties')
      .upsert(propertyData, { 
        onConflict: 'external_id',
        ignoreDuplicates: false 
      })
      .select()
      .single();

    if (error) throw new Error(`Failed to cache property: ${error.message}`);
    return data;
  }

  async searchProperties(filters: any, limit: number = 50): Promise<Property[]> {
    let query = supabaseAdmin
      .from('properties')
      .select('*')
      .eq('status', 'active');

    // Apply filters
    if (filters.city) {
      query = query.ilike('city', `%${filters.city}%`);
    }
    
    if (filters.state) {
      query = query.eq('state', filters.state);
    }
    
    if (filters.price_min) {
      query = query.gte('price', filters.price_min);
    }
    
    if (filters.price_max) {
      query = query.lte('price', filters.price_max);
    }
    
    if (filters.bedrooms_min) {
      query = query.gte('bedrooms', filters.bedrooms_min);
    }
    
    if (filters.bathrooms_min) {
      query = query.gte('bathrooms', filters.bathrooms_min);
    }

    const { data, error } = await query
      .order('created_at', { ascending: false })
      .limit(limit);

    if (error) throw new Error(`Failed to search properties: ${error.message}`);
    return data || [];
  }

  // Saved search operations
  async createSavedSearch(userId: string, searchData: Partial<SavedSearch>): Promise<SavedSearch> {
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
  async createLead(userId: string, leadData: Partial<Lead>): Promise<Lead> {
    const { data, error } = await supabaseAdmin
      .from('leads')
      .insert({
        ...leadData,
        user_id: userId
      })
      .select()
      .single();

    if (error) throw new Error(`Failed to create lead: ${error.message}`);
    return data;
  }

  async getUserLeads(userId: string, status?: string): Promise<Lead[]> {
    let query = supabaseAdmin
      .from('leads')
      .select('*')
      .eq('user_id', userId);

    if (status) {
      query = query.eq('status', status);
    }

    const { data, error } = await query.order('created_at', { ascending: false });

    if (error) throw new Error(`Failed to get leads: ${error.message}`);
    return data || [];
  }
}

export const databaseService = new DatabaseService();
```

TASK 7: Create Rate Limiting and Security Middleware
Create src/lib/middleware/rateLimiter.ts:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { Redis } from 'ioredis';

const redis = new Redis(process.env.REDIS_URL!);

interface RateLimitConfig {
  windowMs: number;
  maxRequests: number;
  keyGenerator?: (req: NextRequest) => string;
}

export function createRateLimiter(config: RateLimitConfig) {
  return async function rateLimiter(request: NextRequest): Promise<NextResponse | null> {
    const key = config.keyGenerator 
      ? config.keyGenerator(request)
      : getClientIdentifier(request);
    
    const redisKey = `ratelimit:${key}`;
    const now = Date.now();
    const window = Math.floor(now / config.windowMs);
    const windowKey = `${redisKey}:${window}`;
    
    try {
      const current = await redis.incr(windowKey);
      
      if (current === 1) {
        await redis.expire(windowKey, Math.ceil(config.windowMs / 1000));
      }
      
      if (current > config.maxRequests) {
        return NextResponse.json(
          { 
            error: 'Too many requests',
            retryAfter: Math.ceil(config.windowMs / 1000)
          },
          { 
            status: 429,
            headers: {
              'Retry-After': Math.ceil(config.windowMs / 1000).toString(),
              'X-RateLimit-Limit': config.maxRequests.toString(),
              'X-RateLimit-Remaining': '0',
              'X-RateLimit-Reset': (now + config.windowMs).toString()
            }
          }
        );
      }
      
      return null; // Continue processing
    } catch (error) {
      console.error('Rate limiting error:', error);
      return null; // Allow request on Redis failure
    }
  };
}

function getClientIdentifier(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0] : request.ip || 'unknown';
  return ip;
}

// Pre-configured rate limiters
export const chatRateLimiter = createRateLimiter({
  windowMs: 60 * 1000, // 1 minute
  maxRequests: 20, // 20 messages per minute
});

export const apiRateLimiter = createRateLimiter({
  windowMs: 60 * 1000, // 1 minute
  maxRequests: 100, // 100 requests per minute
});

export const authRateLimiter = createRateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxRequests: 5, // 5 auth attempts per 15 minutes
});
```

SUCCESS CRITERIA:

- All database tables created with proper RLS policies
- Authentication system works with Google and email providers
- All API endpoints properly secured and validated
- Rate limiting prevents abuse
- Database services handle all CRUD operations correctly
- Error handling prevents information leakage
- Type safety maintained across all operations

```

## MESH PROMPT 4: REAL ESTATE API INTEGRATION & PROPERTY SYSTEM
**Duration:** Week 4 | **Dependencies:** MESH PROMPT 3

```

Building upon the Backend Services, implement complete real estate API integration with property search, market analysis, and geolocation features using the anticipatory design philosophy.

TASK 1: Create Real Estate API Client with Advanced Features
Create src/lib/services/RealEstateAPIClient.ts:

```typescript
import { Redis } from 'ioredis';

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

class RealEstateAPIClient {
  private apiKey: string;
  private baseURL: string;
  private rateLimiter: RateLimiter;
  private cache: Redis;
  private requestQueue: RequestQueue;

  constructor() {
    this.apiKey = process.env.REAL_ESTATE_API_KEY!;
    this.baseURL = process.env.REAL_ESTATE_API_URL!;
    this.cache = new Redis(process.env.REDIS_URL!);
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

    // Build API request
    const apiParams = this.buildPropertySearchParams(params);
    
    // Execute request through queue
    const response = await this.requestQueue.add(() => 
      this.makeRequest('/properties/search', {
        method: 'POST',
        body: JSON.stringify(apiParams)
      })
    );

    if (!response.success || !response.data) {
      throw new Error(`Property search failed: ${response.error}`);
    }

    // Normalize properties
    const properties = await Promise.all(
      response.data.properties.map(prop => this.normalizeProperty(prop))
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

    const response = await this.requestQueue.add(() =>
      this.makeRequest('/market/analysis', {
        method: 'POST',
        body: JSON.stringify(params)
      })
    );

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

    const response = await this.requestQueue.add(() =>
      this.makeRequest(`/properties/${propertyId}`)
    );

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

    const response = await this.requestQueue.add(() =>
      this.makeRequest(`/properties/${propertyId}/comparables`, {
        method: 'GET',
        params: { radius, limit: 10 }
      })
    );

    if (!response.success) {
      throw new Error(`Failed to get comparable properties: ${response.error}`);
    }

    const comparables = await Promise.all(
      response.data.properties.map(prop => this.normalizeProperty(prop))
    );

    await this.cacheResult(cacheKey, comparables, 1800); // 30 minutes
    
    return comparables;
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
        type: 'Point',
        coordinates: [apiProperty.coordinates.lng, apiProperty.coordinates.lat]
      } : null,
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
        parseFloat(apiProperty.price) / parseFloat(apiProperty.square_footage) : null,
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
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
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

  private async cacheProperty(property: Property): Promise<void> {
    try {
      await databaseService.cacheProperty(property);
    } catch (error) {
      console.error('Failed to cache property:', error);
    }
  }
}

export const realEstateAPIClient = new RealEstateAPIClient();
```

TASK 2: Update /api/properties Endpoints
Create app/api/properties/search/route.ts:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/middleware/auth';
import { realEstateAPIClient } from '@/lib/services/RealEstateAPIClient';
import { databaseService } from '@/lib/services/DatabaseService';
import { z } from 'zod';

const propertySearchSchema = z.object({
  location: z.object({
    city: z.string().optional(),
    state: z.string().optional(),
    zip_code: z.string().optional(),
    radius: z.number().min(0.1).max(50).optional()
  }).optional(),
  price_range: z.object({
    min: z.number().min(0).optional(),
    max: z.number().min(0).optional()
  }).optional(),
  bedrooms: z.object({
    min: z.number().min(0).max(20).optional(),
    max: z.number().min(0).max(20).optional()
  }).optional(),
  bathrooms: z.object({
    min: z.number().min(0).max(20).optional(),
    max: z.number().min(0).max(20).optional()
  }).optional(),
  square_footage: z.object({
    min: z.number().min(0).optional(),
    max: z.number().min(0).optional()
  }).optional(),
  property_type: z.array(z.string()).optional(),
  features: z.array(z.string()).optional(),
  sort_by: z.enum(['price', 'date', 'relevance', 'price_per_sqft']).default('relevance'),
  sort_order: z.enum(['asc', 'desc']).default('desc'),
  limit: z.number().min(1).max(100).default(20),
  offset: z.number().min(0).default(0)
});

export async function POST(request: NextRequest) {
  try {
    const user = await requireAuth(request);
    const body = await request.json();
    
    const searchParams = propertySearchSchema.parse(body);
    
    // Execute property search
    const searchResults = await realEstateAPIClient.searchProperties(searchParams);
    
    // Record search analytics
    await databaseService.recordAnalytics(user.id, 'property_search', {
      search_params: searchParams,
      results_count: searchResults.properties.length,
      session_id: request.headers.get('x-session-id')
    });
    
    return NextResponse.json({
      properties: searchResults.properties,
      total: searchResults.total,
      insights: searchResults.insights,
      pagination: {
        limit: searchParams.limit,
        offset: searchParams.offset,
        total: searchResults.total,
        pages: Math.ceil(searchResults.total / searchParams.limit)
      }
    });
    
  } catch (error) {
    console.error('Property search error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid search parameters', details: error.errors },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: 'Property search failed' },
      { status: 500 }
    );
  }
}
```

Create app/api/properties/[id]/route.ts:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/middleware/auth';
import { realEstateAPIClient } from '@/lib/services/RealEstateAPIClient';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await requireAuth(request);
    const propertyId = params.id;
    
    // Get property details
    const property = await realEstateAPIClient.getPropertyDetails(propertyId);
    
    // Get comparable properties
    const comparables = await realEstateAPIClient.getComparableProperties(propertyId);
    
    // Record analytics
    await databaseService.recordAnalytics(user.id, 'property_view', {
      property_id: propertyId,
      session_id: request.headers.get('x-session-id')
    });
    
    return NextResponse.json({
      property,
      comparables
    });
    
  } catch (error) {
    console.error('Property details error:', error);
    return NextResponse.json(
      { error: 'Failed to get property details' },
      { status: 500 }
    );
  }
}
```

TASK 3: Create Market Analysis Service
Create src/lib/services/MarketAnalysisService.ts:

```typescript
interface MarketAnalysis {
  location: string;
  timeframe: string;
  summary: MarketSummary;
  price_trends: PriceTrend[];
  inventory_analysis: InventoryAnalysis;
  neighborhood_comparison: NeighborhoodComparison[];
  predictive_insights: PredictiveInsight[];
  recommendations: MarketRecommendation[];
}

interface MarketSummary {
  median_price: number;
  average_price: number;
  price_change_pct: number;
  days_on_market: number;
  inventory_level: 'low' | 'balanced' | 'high';
  market_tempo: 'hot' | 'warm' | 'cool' | 'cold';
  buyer_seller_ratio: number;
}

class MarketAnalysisService {
  private apiClient: RealEstateAPIClient;
  private cache: Redis;

  constructor() {
    this.apiClient = realEstateAPIClient;
    this.cache = new Redis(process.env.REDIS_URL!);
  }

  async generateMarketAnalysis(location: string, timeframe: string = '6m'): Promise<MarketAnalysis> {
    const cacheKey = `market_analysis:${location}:${timeframe}`;
    const cached = await this.cache.get(cacheKey);
    
    if (cached) {
      return JSON.parse(cached);
    }

    // Get market data from API
    const marketData = await this.apiClient.getMarketAnalysis({
      location,
      timeframe,
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
    await this.cache.setex(cacheKey, 1800, JSON.stringify(analysis));

    return analysis;
  }

  private async generateMarketSummary(data: any): Promise<MarketSummary> {
    return {
      median_price: data.median_price,
      average_price: data.average_price,
      price_change_pct: this.calculatePriceChange(data.price_history),
      days_on_market: data.average_days_on_market,
      inventory_level: this.classifyInventoryLevel(data.inventory_months),
      market_tempo: this.assessMarketTempo(data),
      buyer_seller_ratio: data.buyer_seller_ratio || 1.0
    };
  }

  private async analyzePriceTrends(data: any): Promise<PriceTrend[]> {
    const trends: PriceTrend[] = [];
    
    if (data.price_history && data.price_history.length > 0) {
      // Calculate monthly price changes
      for (let i = 1; i < data.price_history.length; i++) {
        const current = data.price_history[i];
        const previous = data.price_history[i - 1];
        
        trends.push({
          period: current.period,
          median_price: current.median_price,
          change_pct: ((current.median_price - previous.median_price) / previous.median_price) * 100,
          change_amount: current.median_price - previous.median_price,
          volume: current.sales_volume
        });
      }
    }

    return trends;
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

    return insights;
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
}

export const marketAnalysisService = new MarketAnalysisService();
```

TASK 4: Build Property Display Components with Anticipatory Design
Create src/components/property/PropertyGrid.tsx:

```tsx
import { useState, useMemo } from 'react';
import { AsymmetricContainer, AnticipatoryCopywrite, PredictiveSurface } from '@/components/design-system';
import { Property, PropertyInsight } from '@/lib/types';

interface PropertyGridProps {
  properties: Property[];
  insights?: PropertyInsight[];
  onPropertySelect?: (property: Property) => void;
  onInsightAction?: (insight: PropertyInsight) => void;
}

export const PropertyGrid: React.FC<PropertyGridProps> = ({
  properties,
  insights = [],
  onPropertySelect,
  onInsightAction
}) => {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  // Create asymmetric layout patterns
  const layoutPattern = useMemo(() => {
    return properties.map((_, index) => ({
      span: index % 5 === 0 ? 'col-span-2' : 'col-span-1',
      height: index % 7 === 0 ? 'h-80' : index % 3 === 0 ? 'h-72' : 'h-64'
    }));
  }, [properties]);

  if (properties.length === 0) {
    return (
      <div className="w-full">
        <PredictiveSurface className="p-12 text-center">
          <AnticipatoryCopywrite variant="predictive-heading" className="text-intelligent-gray-800 mb-4">
            No Properties Found
          </AnticipatoryCopywrite>
          <AnticipatoryCopywrite variant="conversational-body" className="text-intelligent-gray-600">
            Try adjusting your search criteria or exploring nearby areas.
          </AnticipatoryCopywrite>
        </PredictiveSurface>
      </div>
    );
  }

  return (
    <div className="w-full space-y-8">
      {/* Market Insights Header */}
      {insights.length > 0 && (
        <div className="space-y-4">
          <AnticipatoryCopywrite variant="insight-emphasis" anticipatory>
            Market Insights
          </AnticipatoryCopywrite>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {insights.slice(0, 2).map((insight, index) => (
              <PredictiveSurface
                key={index}
                prediction={insight.suggestions?.[0]}
                confidence={insight.confidence}
                onAnticipate={() => onInsightAction?.(insight)}
                variant="elevated"
                className="p-6"
              >
                <AnticipatoryCopywrite variant="insight-emphasis" className="text-intelligent-gray-800 mb-2">
                  {insight.title}
                </AnticipatoryCopywrite>
                <AnticipatoryCopywrite variant="conversational-body" className="text-intelligent-gray-600">
                  {insight.description}
                </AnticipatoryCopywrite>
              </PredictiveSurface>
            ))}
          </div>
        </div>
      )}

      {/* Properties Grid with Asymmetric Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {properties.map((property, index) => (
          <PropertyCard
            key={property.id}
            property={property}
            className={`${layoutPattern[index]?.span} ${layoutPattern[index]?.height}`}
            onSelect={() => {
              setSelectedProperty(property);
              onPropertySelect?.(property);
            }}
            asymmetricVariant={index % 3}
          />
        ))}
      </div>

      {/* Property Detail Modal */}
      {selectedProperty && (
        <PropertyDetailModal
          property={selectedProperty}
          isOpen={!!selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      )}
    </div>
  );
};
```

Create src/components/property/PropertyCard.tsx:

```tsx
interface PropertyCardProps {
  property: Property;
  onSelect: () => void;
  asymmetricVariant?: number;
  className?: string;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  onSelect,
  asymmetricVariant = 0,
  className = ""
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  const isNewListing = property.days_on_market <= 7;
  const isPriceReduced = property.price_change_pct && property.price_change_pct < -0.05;

  return (
    <PredictiveSurface
      variant="interactive"
      className={`group relative overflow-hidden ${className}`}
      onAnticipate={onSelect}
    >
      <div
        className="w-full h-full cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onSelect}
      >
        {/* Property Image */}
        <div className="relative h-3/5 overflow-hidden">
          <img
            src={!imageError && property.images?.[0] ? property.images[0] : '/api/placeholder/400/300'}
            alt={property.address}
            className={`w-full h-full object-cover transition-transform duration-500 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
            onError={() => setImageError(true)}
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-anticipatory-black/60 via-transparent to-transparent" />
          
          {/* Price badge */}
          <div className="absolute top-4 left-4">
            <div className="bg-conversational-white/95 backdrop-blur-sm px-3 py-2 rounded-lg">
              <AnticipatoryCopywrite variant="insight-emphasis">
                ${property.price.toLocaleString()}
              </AnticipatoryCopywrite>
              {property.price_per_sqft && (
                <div className="text-xs text-intelligent-gray-600">
                  ${property.price_per_sqft.toFixed(0)}/sqft
                </div>
              )}
            </div>
          </div>

          {/* Status indicators */}
          <div className="absolute top-4 right-4 space-y-2">
            {isNewListing && (
              <div className="bg-predictive-magenta text-conversational-white px-3 py-1 rounded-full flex items-center space-x-1">
                <div className="w-2 h-2 bg-conversational-white rounded-full animate-predictive-pulse" />
                <span className="text-xs font-predictive">New</span>
              </div>
            )}
            
            {isPriceReduced && (
              <div className="bg-green-500 text-conversational-white px-3 py-1 rounded-full text-xs font-predictive">
                Price ↓
              </div>
            )}
          </div>

          {/* Hover overlay with actions */}
          {isHovered && (
            <div className="absolute inset-0 bg-anticipatory-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="space-y-3">
                <button className="block w-full bg-predictive-magenta text-conversational-white px-6 py-2 rounded-lg text-sm hover:bg-predictive-magenta/80 transition-colors">
                  View Details
                </button>
                <button className="block w-full bg-conversational-white text-intelligent-gray-800 px-6 py-2 rounded-lg text-sm hover:bg-intelligent-gray-100 transition-colors">
                  Save Property
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Property Details */}
        <div className="h-2/5 p-4 space-y-3">
          <div>
            <AnticipatoryCopywrite variant="insight-emphasis" className="text-intelligent-gray-800 line-clamp-1">
              {property.address}
            </AnticipatoryCopywrite>
            <AnticipatoryCopywrite variant="conversational-body" className="text-intelligent-gray-600">
              {property.city}, {property.state} {property.zip_code}
            </AnticipatoryCopywrite>
          </div>

          {/* Property specs */}
          <div className="flex items-center space-x-4 text-intelligent-gray-700">
            <div className="flex items-center space-x-1">
              <span className="text-sm font-predictive">{property.bedrooms}</span>
              <span className="text-xs">bd</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-sm font-predictive">{property.bathrooms}</span>
              <span className="text-xs">ba</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-sm font-predictive">
                {property.square_footage?.toLocaleString()}
              </span>
              <span className="text-xs">sqft</span>
            </div>
          </div>

          {/* Features */}
          {property.features && property.features.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {property.features.slice(0, 2).map((feature, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-intelligent-gray-100 text-intelligent-gray-700 text-xs rounded-full"
                >
                  {feature}
                </span>
              ))}
              {property.features.length > 2 && (
                <span className="px-2 py-1 bg-predictive-magenta text-conversational-white text-xs rounded-full">
                  +{property.features.length - 2}
                </span>
              )}
            </div>
          )}

          {/* Days on market */}
          <div className="flex justify-between items-center text-xs text-intelligent-gray-600">
            <span>DOM: {property.days_on_market} days</span>
            {property.listing_agent?.name && (
              <span className="truncate ml-2">{property.listing_agent.name}</span>
            )}
          </div>
        </div>
      </div>
    </PredictiveSurface>
  );
};
```

TASK 5: Create Market Analysis Components
Create src/components/market/MarketChart.tsx:

```tsx
import { useMemo } from 'react';
import { AsymmetricContainer, AnticipatoryCopywrite, PredictiveSurface } from '@/components/design-system';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

interface MarketChartProps {
  data: MarketAnalysis;
  chartType?: 'price_trends' | 'inventory' | 'comparison';
}

export const MarketChart: React.FC<MarketChartProps> = ({
  data,
  chartType = 'price_trends'
}) => {
  const chartData = useMemo(() => {
    switch (chartType) {
      case 'price_trends':
        return data.price_trends?.map(trend => ({
          period: trend.period,
          price: trend.median_price,
          change: trend.change_pct
        })) || [];
      
      case 'inventory':
        return data.inventory_analysis?.monthly_data?.map(month => ({
          period: month.period,
          inventory: month.months_supply,
          newListings: month.new_listings
        })) || [];
      
      case 'comparison':
        return data.neighborhood_comparison?.map(neighborhood => ({
          name: neighborhood.name,
          medianPrice: neighborhood.median_price,
          priceChange: neighborhood.price_change_pct
        })) || [];
    }
  }, [data, chartType]);

  return (
    <div className="w-full">
      <AsymmetricContainer
        predictiveLeft={
          <div className="space-y-6">
            <div>
              <AnticipatoryCopywrite variant="predictive-heading">
                Market Analysis
              </AnticipatoryCopywrite>
              <AnticipatoryCopywrite variant="conversational-body" className="text-intelligent-gray-600 mt-2">
                {data.location} • {data.timeframe}
              </AnticipatoryCopywrite>
            </div>

            {/* Key Metrics */}
            <div className="space-y-4">
              <MarketMetricCard
                label="Median Price"
                value={`$${data.summary.median_price.toLocaleString()}`}
                change={data.summary.price_change_pct}
              />
              
              <MarketMetricCard
                label="Days on Market"
                value={data.summary.days_on_market.toString()}
                change={data.summary.days_on_market <= 30 ? 5 : -5}
                suffix="days"
              />
              
              <MarketMetricCard
                label="Market Tempo"
                value={data.summary.market_tempo.toUpperCase()}
                tempo={data.summary.market_tempo}
              />
            </div>

            {/* Predictive Insights */}
            {data.predictive_insights && data.predictive_insights.length > 0 && (
              <div className="space-y-3">
                <AnticipatoryCopywrite variant="insight-emphasis" anticipatory>
                  Predictive Insights
                </AnticipatoryCopywrite>
                
                {data.predictive_insights.slice(0, 2).map((insight, index) => (
                  <PredictiveSurface
                    key={index}
                    prediction={insight.description}
                    confidence={insight.confidence}
                    variant="elevated"
                    className="p-4"
                  >
                    <AnticipatoryCopywrite variant="conversational-body" className="text-intelligent-gray-800">
                      {insight.title}
                    </AnticipatoryCopywrite>
                    <div className="mt-1 text-xs text-intelligent-gray-600">
                      {Math.round(insight.confidence * 100)}% confidence • {insight.timeline}
                    </div>
                  </PredictiveSurface>
                ))}
              </div>
            )}
          </div>
        }
        
        conversationalRight={
          <div className="p-8 space-y-8">
            {/* Chart */}
            <PredictiveSurface variant="elevated" className="p-6">
              <div className="h-80">
                {chartType === 'price_trends' && (
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E5E5E5" />
                      <XAxis 
                        dataKey="period" 
                        stroke="#666666"
                        fontSize={12}
                      />
                      <YAxis 
                        stroke="#666666"
                        fontSize={12}
                        tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
                      />
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: '#FFFFFF',
                          border: '1px solid #E5E5E5',
                          borderRadius: '8px'
                        }}
                        formatter={(value: any) => [`$${value.toLocaleString()}`, 'Median Price']}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="price" 
                        stroke="#FF0099" 
                        strokeWidth={3}
                        dot={{ fill: '#FF0099', strokeWidth: 2, r: 4 }}
                        activeDot={{ r: 6, stroke: '#FF0099', strokeWidth: 2 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                )}

                {chartType === 'comparison' && (
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E5E5E5" />
                      <XAxis 
                        dataKey="name" 
                        stroke="#666666"
                        fontSize={12}
                      />
                      <YAxis 
                        stroke="#666666"
                        fontSize={12}
                        tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
                      />
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: '#FFFFFF',
                          border: '1px solid #E5E5E5',
                          borderRadius: '8px'
                        }}
                      />
                      <Bar 
                        dataKey="medianPrice" 
                        fill="#FF0099"
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                )}
              </div>
            </PredictiveSurface>

            {/* Recommendations */}
            {data.recommendations && data.recommendations.length > 0 && (
              <div className="space-y-4">
                <AnticipatoryCopywrite variant="insight-emphasis" className="text-intelligent-gray-800">
                  Recommendations
                </AnticipatoryCopywrite>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {data.recommendations.slice(0, 4).map((rec, index) => (
                    <PredictiveSurface
                      key={index}
                      variant="default"
                      className="p-4 border border-intelligent-gray-200"
                    >
                      <AnticipatoryCopywrite variant="insight-emphasis" className="text-intelligent-gray-800 mb-2">
                        {rec.title}
                      </AnticipatoryCopywrite>
                      <AnticipatoryCopywrite variant="conversational-body" className="text-intelligent-gray-600">
                        {rec.description}
                      </AnticipatoryCopywrite>
                    </PredictiveSurface>
                  ))}
                </div>
              </div>
            )}
          </div>
        }
      />
    </div>
  );
};

interface MarketMetricCardProps {
  label: string;
  value: string;
  change?: number;
  suffix?: string;
  tempo?: string;
}

const MarketMetricCard: React.FC<MarketMetricCardProps> = ({
  label,
  value,
  change,
  suffix,
  tempo
}) => {
  const getTrendColor = () => {
    if (tempo) {
      switch (tempo) {
        case 'hot': return 'text-red-500';
        case 'warm': return 'text-orange-500';
        case 'cool': return 'text-blue-500';
        case 'cold': return 'text-blue-700';
        default: return 'text-intelligent-gray-600';
      }
    }
    
    if (change === undefined) return 'text-intelligent-gray-600';
    return change > 0 ? 'text-green-500' : 'text-red-500';
  };

  return (
    <PredictiveSurface variant="default" className="p-4 border border-intelligent-gray-200">
      <AnticipatoryCopywrite variant="conversational-body" className="text-intelligent-gray-600 mb-1">
        {label}
      </AnticipatoryCopywrite>
      <div className="flex items-end justify-between">
        <AnticipatoryCopywrite variant="insight-emphasis" className="text-intelligent-gray-800">
          {value}
          {suffix && <span className="text-xs ml-1">{suffix}</span>}
        </AnticipatoryCopywrite>
        
        {change !== undefined && (
          <div className={`text-xs ${getTrendColor()}`}>
            {change > 0 ? '↑' : change < 0 ? '↓' : '→'} {Math.abs(change).toFixed(1)}%
          </div>
        )}
      </div>
    </PredictiveSurface>
  );
};
```

SUCCESS CRITERIA:

- Real estate API integration provides accurate, up-to-date property data
- Property search handles complex filtering with sub-2-second response times
- Market analysis generates valuable, actionable insights
- Property display components follow anticipatory design philosophy
- Geolocation features work accurately within acceptable margins
- Caching system improves performance by >50%
- Error handling maintains system stability under API failures
- All components responsive and accessible across devices

```

## MESH PROMPT 5: SAVED SEARCHES & NOTIFICATION SYSTEM
**Duration:** Week 5 | **Dependencies:** MESH PROMPT 4

```

Building upon the Real Estate API Integration, implement the complete saved searches and notification system with anticipatory intelligence for property alerts and market monitoring.

TASK 1: Implement Advanced Saved Search Service
Create src/lib/services/SavedSearchService.ts:

```typescript
import { supabaseAdmin } from '@/lib/supabase/client';
import { realEstateAPIClient } from './RealEstateAPIClient';
import { notificationService } from './NotificationService';

interface SavedSearchData {
  name: string;
  description?: string;
  filters: PropertySearchParams;
  notification_enabled: boolean;
  notification_frequency: 'immediate' | 'daily' | 'weekly';
  notification_channels: ('email' | 'sms' | 'push')[];
  client_name?: string;
  client_email?: string;
  client_phone?: string;
  tags: string[];
  alert_thresholds: {
    price_drop_pct?: number;
    new_listings?: boolean;
    price_range_expansion?: boolean;
    market_changes?: boolean;
  };
}

interface SearchComparison {
  newProperties: Property[];
  priceChanges: PropertyPriceChange[];
  statusChanges: PropertyStatusChange[];
  marketInsights: MarketInsight[];
}

class SavedSearchService {
  async createSavedSearch(userId: string, searchData: SavedSearchData): Promise<SavedSearch> {
    // Validate search parameters
    const validatedData = await this.validateSearchData(searchData);
    
    // Execute initial search to validate filters
    const initialResults = await realEstateAPIClient.searchProperties(validatedData.filters);
    
    // Create database record
    const { data: savedSearch, error } = await supabaseAdmin
      .from('searches')
      .insert({
        user_id: userId,
        name: validatedData.name,
        description: validatedData.description,
        filters: validatedData.filters,
        notification_enabled: validatedData.notification_enabled,
        notification_frequency: validatedData.notification_frequency,
        notification_channels: validatedData.notification_channels,
        client_name: validatedData.client_name,
        client_email: validatedData.client_email,
        client_phone: validatedData.client_phone,
        tags: validatedData.tags,
        last_results_count: initialResults.properties.length,
        metadata: {
          alert_thresholds: validatedData.alert_thresholds,
          created_with_results: initialResults.properties.length
        }
      })
      .select()
      .single();

    if (error) {
      throw new Error(`Failed to create saved search: ${error.message}`);
    }

    // Store initial results for comparison
    await this.storeSearchResults(savedSearch.id, initialResults.properties, 'initial');
    
    // Set up notifications if enabled
    if (validatedData.notification_enabled) {
      await this.setupNotifications(savedSearch.id, userId, validatedData);
    }
    
    return savedSearch;
  }

  async executeSavedSearch(searchId: string): Promise<{
    results: Property[];
    comparison: SearchComparison;
    insights: PropertyInsight[];
  }> {
    // Get search configuration
    const savedSearch = await this.getSavedSearch(searchId);
    if (!savedSearch) {
      throw new Error('Saved search not found');
    }

    // Execute current search
    const currentResults = await realEstateAPIClient.searchProperties(savedSearch.filters);
    
    // Get previous results for comparison
    const previousResults = await this.getLastSearchResults(searchId);
    
    // Compare results
    const comparison = await this.compareSearchResults(
      previousResults,
      currentResults.properties,
      savedSearch.metadata?.alert_thresholds || {}
    );
    
    // Generate insights
    const insights = await this.generateSearchInsights(
      currentResults.properties,
      comparison,
      savedSearch
    );
    
    // Store new results
    await this.storeSearchResults(searchId, currentResults.properties, 'execution');
    
    // Update search metadata
    await this.updateSearchMetadata(searchId, {
      last_executed: new Date().toISOString(),
      last_results_count: currentResults.properties.length,
      execution_count: (savedSearch.execution_count || 0) + 1
    });
    
    return {
      results: currentResults.properties,
      comparison,
      insights: [...currentResults.insights, ...insights]
    };
  }

  private async compareSearchResults(
    previousProperties: Property[],
    currentProperties: Property[],
    thresholds: any
  ): Promise<SearchComparison> {
    const comparison: SearchComparison = {
      newProperties: [],
      priceChanges: [],
      statusChanges: [],
      marketInsights: []
    };

    // Create maps for efficient lookup
    const previousMap = new Map(previousProperties.map(p => [p.external_id, p]));
    const currentMap = new Map(currentProperties.map(p => [p.external_id, p]));

    // Find new properties
    comparison.newProperties = currentProperties.filter(
      property => !previousMap.has(property.external_id)
    );

    // Find price changes
    for (const [id, currentProperty] of currentMap) {
      const previousProperty = previousMap.get(id);
      
      if (previousProperty && previousProperty.price !== currentProperty.price) {
        const priceChange = {
          property: currentProperty,
          previous_price: previousProperty.price,
          current_price: currentProperty.price,
          change_amount: currentProperty.price - previousProperty.price,
          change_pct: ((currentProperty.price - previousProperty.price) / previousProperty.price) * 100
        };
        
        // Only include if change meets threshold
        if (!thresholds.price_drop_pct || Math.abs(priceChange.change_pct) >= thresholds.price_drop_pct) {
          comparison.priceChanges.push(priceChange);
        }
      }
      
      // Find status changes
      if (previousProperty && previousProperty.status !== currentProperty.status) {
        comparison.statusChanges.push({
          property: currentProperty,
          previous_status: previousProperty.status,
          current_status: currentProperty.status,
          change_date: new Date().toISOString()
        });
      }
    }

    return comparison;
  }

  private async generateSearchInsights(
    properties: Property[],
    comparison: SearchComparison,
    savedSearch: SavedSearch
  ): Promise<PropertyInsight[]> {
    const insights: PropertyInsight[] = [];

    // New properties insight
    if (comparison.newProperties.length > 0) {
      insights.push({
        type: 'new_properties',
        title: `${comparison.newProperties.length} New Properties`,
        description: `Found ${comparison.newProperties.length} new properties matching your search criteria.`,
        confidence: 1.0,
        actionable: true,
        suggestions: [
          'Review new listings immediately',
          'Schedule showings for top properties',
          'Adjust search criteria if too many results'
        ],
        data: { count: comparison.newProperties.length }
      });
    }

    // Price changes insight
    if (comparison.priceChanges.length > 0) {
      const reductions = comparison.priceChanges.filter(change => change.change_amount < 0);
      const increases = comparison.priceChanges.filter(change => change.change_amount > 0);
      
      if (reductions.length > 0) {
        insights.push({
          type: 'price_reductions',
          title: `${reductions.length} Price Reductions`,
          description: `${reductions.length} properties have reduced their prices. This may indicate negotiation opportunities.`,
          confidence: 0.85,
          actionable: true,
          suggestions: [
            'Contact listing agents immediately',
            'Prepare offers below new asking price',
            'Investigate reasons for price reduction'
          ]
        });
      }
    }

    // Market velocity insight
    const avgDOM = properties.reduce((sum, p) => sum + p.days_on_market, 0) / properties.length;
    if (avgDOM > 45) {
      insights.push({
        type: 'market_velocity',
        title: 'Slow Market Conditions',
        description: `Properties are averaging ${Math.round(avgDOM)} days on market, suggesting buyer-favorable conditions.`,
        confidence: 0.78,
        actionable: true,
        suggestions: [
          'Negotiate aggressively on price',
          'Request seller concessions',
          'Take time to evaluate options'
        ]
      });
    }

    return insights;
  }

  async scheduleSearchExecutions(): Promise<void> {
    // Get all active searches with notifications enabled
    const { data: activeSearches, error } = await supabaseAdmin
      .from('searches')
      .select('*')
      .eq('is_active', true)
      .eq('notification_enabled', true);

    if (error) {
      console.error('Failed to get active searches:', error);
      return;
    }

    for (const search of activeSearches || []) {
      try {
        // Check if search should be executed based on frequency
        if (this.shouldExecuteSearch(search)) {
          await this.executeAndNotify(search);
        }
      } catch (error) {
        console.error(`Failed to execute search ${search.id}:`, error);
        await this.recordSearchError(search.id, error);
      }
    }
  }

  private shouldExecuteSearch(search: SavedSearch): boolean {
    const lastExecuted = search.last_executed ? new Date(search.last_executed) : new Date(0);
    const now = new Date();
    const timeDiff = now.getTime() - lastExecuted.getTime();

    switch (search.notification_frequency) {
      case 'immediate':
        return timeDiff > 5 * 60 * 1000; // 5 minutes
      case 'daily':
        return timeDiff > 24 * 60 * 60 * 1000; // 24 hours
      case 'weekly':
        return timeDiff > 7 * 24 * 60 * 60 * 1000; // 7 days
      default:
        return false;
    }
  }

  private async executeAndNotify(search: SavedSearch): Promise<void> {
    const results = await this.executeSavedSearch(search.id);
    
    // Check if notification should be sent
    if (this.shouldSendNotification(results.comparison, search)) {
      await notificationService.sendSearchNotification(
        search.user_id,
        search,
        results
      );
    }
  }

  private shouldSendNotification(comparison: SearchComparison, search: SavedSearch): boolean {
    // Always notify for new properties
    if (comparison.newProperties.length > 0) return true;
    
    // Notify for significant price changes
    if (comparison.priceChanges.length > 0) return true;
    
    // Notify for status changes
    if (comparison.statusChanges.length > 0) return true;
    
    return false;
  }
}

export const savedSearchService = new SavedSearchService();
```

TASK 2: Build Comprehensive Notification Service
Create src/lib/services/NotificationService.ts:

```typescript
import { SendGridService } from './SendGridService';
import { TwilioService } from './TwilioService';
import { supabaseAdmin } from '@/lib/supabase/client';

interface NotificationData {
  user_id: string;
  type: string;
  title: string;
  content: string;
  channels: ('email' | 'sms' | 'push')[];
  metadata?: any;
  scheduled_for?: string;
}

interface SearchNotificationData {
  search: SavedSearch;
  results: {
    comparison: SearchComparison;
    insights: PropertyInsight[];
  };
}

class NotificationService {
  private sendGridService: SendGridService;
  private twilioService: TwilioService;

  constructor() {
    this.sendGridService = new SendGridService();
    this.twilioService = new TwilioService();
  }

  async sendSearchNotification(
    userId: string,
    search: SavedSearch,
    results: any
  ): Promise<void> {
    const user = await this.getUserNotificationPreferences(userId);
    
    if (!user) {
      throw new Error('User not found');
    }

    // Generate notification content
    const notificationContent = await this.generateSearchNotificationContent(search, results);
    
    // Create notification record
    const notification = await this.createNotification({
      user_id: userId,
      type: 'saved_search_alert',
      title: notificationContent.title,
      content: notificationContent.content,
      channels: search.notification_channels,
      metadata: {
        search_id: search.id,
        search_name: search.name,
        new_properties: results.comparison.newProperties.length,
        price_changes: results.comparison.priceChanges.length
      }
    });

    // Send through requested channels
    const deliveryPromises = [];

    if (search.notification_channels.includes('email') && user.email) {
      deliveryPromises.push(
        this.sendEmailNotification(user, notificationContent, notification.id)
      );
    }

    if (search.notification_channels.includes('sms') && user.phone) {
      deliveryPromises.push(
        this.sendSMSNotification(user, notificationContent, notification.id)
      );
    }

    if (search.notification_channels.includes('push')) {
      deliveryPromises.push(
        this.sendPushNotification(user, notificationContent, notification.id)
      );
    }

    // Execute all deliveries
    const deliveryResults = await Promise.allSettled(deliveryPromises);
    
    // Update notification with delivery status
    await this.updateNotificationDeliveryStatus(notification.id, deliveryResults);
  }

  private async generateSearchNotificationContent(
    search: SavedSearch,
    results: any
  ): Promise<{
    title: string;
    content: string;
    html_content: string;
    sms_content: string;
  }> {
    const { comparison, insights } = results;
    
    let title = `Property Alert: ${search.name}`;
    let highlights = [];

    if (comparison.newProperties.length > 0) {
      highlights.push(`${comparison.newProperties.length} new properties`);
    }

    if (comparison.priceChanges.length > 0) {
      const reductions = comparison.priceChanges.filter(c => c.change_amount < 0);
      if (reductions.length > 0) {
        highlights.push(`${reductions.length} price reductions`);
      }
    }

    if (highlights.length > 0) {
      title += ` - ${highlights.join(', ')}`;
    }

    // Generate detailed content
    const content = this.buildNotificationContent(search, comparison, insights);
    
    // Generate HTML content for email
    const html_content = this.buildHTMLNotificationContent(search, comparison, insights);
    
    // Generate SMS content (brief)
    const sms_content = this.buildSMSNotificationContent(search, comparison);

    return {
      title,
      content,
      html_content,
      sms_content
    };
  }

  private buildNotificationContent(
    search: SavedSearch,
    comparison: SearchComparison,
    insights: PropertyInsight[]
  ): string {
    let content = `Updates for your saved search "${search.name}":\n\n`;

    if (comparison.newProperties.length > 0) {
      content += `🏡 NEW PROPERTIES (${comparison.newProperties.length})\n`;
      comparison.newProperties.slice(0, 3).forEach(property => {
        content += `• ${property.address} - ${property.price.toLocaleString()}\n`;
        content += `  ${property.bedrooms}bd/${property.bathrooms}ba • ${property.square_footage?.toLocaleString()} sqft\n`;
      });
      
      if (comparison.newProperties.length > 3) {
        content += `  ... and ${comparison.newProperties.length - 3} more\n`;
      }
      content += '\n';
    }

    if (comparison.priceChanges.length > 0) {
      content += `💰 PRICE CHANGES (${comparison.priceChanges.length})\n`;
      comparison.priceChanges.slice(0, 3).forEach(change => {
        const direction = change.change_amount < 0 ? '↓' : '↑';
        content += `• ${change.property.address} ${direction} ${Math.abs(change.change_amount).toLocaleString()}\n`;
        content += `  Was: ${change.previous_price.toLocaleString()} → Now: ${change.current_price.toLocaleString()}\n`;
      });
      content += '\n';
    }

    if (insights.length > 0) {
      content += `💡 MARKET INSIGHTS\n`;
      insights.slice(0, 2).forEach(insight => {
        content += `• ${insight.title}: ${insight.description}\n`;
      });
    }

    return content;
  }

  private buildHTMLNotificationContent(
    search: SavedSearch,
    comparison: SearchComparison,
    insights: PropertyInsight[]
  ): string {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: 'Manrope', Arial, sans-serif; line-height: 1.6; color: #1A1A1A; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #000000; color: #FFFFFF; padding: 20px; text-align: center; }
          .content { padding: 20px; background: #FFFFFF; }
          .property { border: 1px solid #E5E5E5; margin: 10px 0; padding: 15px; border-radius: 8px; }
          .price-change { color: #FF0099; font-weight: 600; }
          .insight { background: #F8F8F8; padding: 15px; margin: 10px 0; border-radius: 8px; }
          .cta { background: #FF0099; color: #FFFFFF; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; margin: 10px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Property GPT Alert</h1>
            <p>Updates for "${search.name}"</p>
          </div>
          
          <div class="content">
            ${comparison.newProperties.length > 0 ? `
              <h2>🏡 New Properties (${comparison.newProperties.length})</h2>
              ${comparison.newProperties.slice(0, 5).map(property => `
                <div class="property">
                  <h3>${property.address}</h3>
                  <p><strong>${property.price.toLocaleString()}</strong> • ${property.bedrooms}bd/${property.bathrooms}ba • ${property.square_footage?.toLocaleString()} sqft</p>
                  <p>Days on Market: ${property.days_on_market}</p>
                </div>
              `).join('')}
            ` : ''}
            
            ${comparison.priceChanges.length > 0 ? `
              <h2>💰 Price Changes (${comparison.priceChanges.length})</h2>
              ${comparison.priceChanges.slice(0, 5).map(change => `
                <div class="property">
                  <h3>${change.property.address}</h3>
                  <p class="price-change">
                    ${change.change_amount < 0 ? '↓' : '↑'} ${Math.abs(change.change_amount).toLocaleString()}
                    (${change.change_pct.toFixed(1)}%)
                  </p>
                  <p>Was: ${change.previous_price.toLocaleString()} → Now: ${change.current_price.toLocaleString()}</p>
                </div>
              `).join('')}
            ` : ''}
            
            ${insights.length > 0 ? `
              <h2>💡 Market Insights</h2>
              ${insights.map(insight => `
                <div class="insight">
                  <h4>${insight.title}</h4>
                  <p>${insight.description}</p>
                </div>
              `).join('')}
            ` : ''}
            
            <a href="${process.env.NEXTAUTH_URL}/dashboard/searches/${search.id}" class="cta">
              View Full Results
            </a>
          </div>
        </div>
      </body>
      </html>
    `;
  }

  private buildSMSNotificationContent(
    search: SavedSearch,
    comparison: SearchComparison
  ): string {
    let content = `PropertyGPT Alert: ${search.name}\n`;
    
    if (comparison.newProperties.length > 0) {
      content += `${comparison.newProperties.length} new properties found\n`;
    }
    
    if (comparison.priceChanges.length > 0) {
      const reductions = comparison.priceChanges.filter(c => c.change_amount < 0);
      if (reductions.length > 0) {
        content += `${reductions.length} price reductions detected\n`;
      }
    }
    
    content += `View details: ${process.env.NEXTAUTH_URL}/dashboard/searches/${search.id}`;
    
    return content;
  }

  private async sendEmailNotification(
    user: any,
    content: any,
    notificationId: string
  ): Promise<void> {
    await this.sendGridService.sendEmail({
      to: user.email,
      subject: content.title,
      text: content.content,
      html: content.html_content,
      metadata: {
        notification_id: notificationId,
        user_id: user.id
      }
    });
  }

  private async sendSMSNotification(
    user: any,
    content: any,
    notificationId: string
  ): Promise<void> {
    await this.twilioService.sendSMS({
      to: user.phone,
      body: content.sms_content,
      metadata: {
        notification_id: notificationId,
        user_id: user.id
      }
    });
  }

  async createNotification(data: NotificationData): Promise<any> {
    const { data: notification, error } = await supabaseAdmin
      .from('notifications')
      .insert({
        user_id: data.user_id,
        type: data.type,
        title: data.title,
        content: data.content,
        channels: data.channels,
        metadata: data.metadata || {},
        scheduled_for: data.scheduled_for || new Date().toISOString()
      })
      .select()
      .single();

    if (error) {
      throw new Error(`Failed to create notification: ${error.message}`);
    }

    return notification;
  }
}

export const notificationService = new NotificationService();
```

TASK 3: Create Saved Search Management UI
Create src/components/saved-searches/SavedSearchesDashboard.tsx:

```tsx
import { useState, useEffect } from 'react';
import { AsymmetricContainer, AnticipatoryCopywrite, PredictiveSurface } from '@/components/design-system';
import { SavedSearch, SearchComparison } from '@/lib/types';

interface SavedSearchesDashboardProps {
  userId: string;
}

export const SavedSearchesDashboard: React.FC<SavedSearchesDashboardProps> = ({ userId }) => {
  const [searches, setSearches] = useState<SavedSearch[]>([]);
  const [selectedSearch, setSelectedSearch] = useState<SavedSearch | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isCreating, setIsCreating] = useState(false);

  useEffect(() => {
    loadSavedSearches();
  }, [userId]);

  const loadSavedSearches = async () => {
    try {
      const response = await fetch('/api/saved-searches');
      const data = await response.json();
      
      if (response.ok) {
        setSearches(data.searches);
      }
    } catch (error) {
      console.error('Failed to load saved searches:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const executeSearch = async (searchId: string) => {
    try {
      const response = await fetch(`/api/saved-searches/${searchId}/execute`, {
        method: 'POST'
      });
      
      const data = await response.json();
      
      if (response.ok) {
        // Update search in state
        setSearches(prev => prev.map(search => 
          search.id === searchId 
            ? { ...search, last_executed: new Date().toISOString() }
            : search
        ));
        
        // Show results
        setSelectedSearch(searches.find(s => s.id === searchId) || null);
      }
    } catch (error) {
      console.error('Failed to execute search:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="w-full h-64 flex items-center justify-center">
        <div className="w-8 h-8 bg-predictive-magenta rounded-full animate-thinking"></div>
      </div>
    );
  }

  return (
    <AsymmetricContainer
      predictiveLeft={
        <div className="space-y-6">
          <div>
            <AnticipatoryCopywrite variant="predictive-heading">
              Saved Searches
            </AnticipatoryCopywrite>
            <AnticipatoryCopywrite variant="conversational-body" className="text-intelligent-gray-600 mt-2">
              Monitor properties and market changes
            </AnticipatoryCopywrite>
          </div>

          {/* Quick Stats */}
          <div className="space-y-4">
            <PredictiveSurface variant="default" className="p-4">
              <AnticipatoryCopywrite variant="insight-emphasis" className="text-intelligent-gray-800">
                {searches.length} Active Searches
              </AnticipatoryCopywrite>
              <AnticipatoryCopywrite variant="conversational-body" className="text-intelligent-gray-600">
                {searches.filter(s => s.notification_enabled).length} with alerts enabled
              </AnticipatoryCopywrite>
            </PredictiveSurface>

            <PredictiveSurface variant="default" className="p-4">
              <AnticipatoryCopywrite variant="insight-emphasis" className="text-intelligent-gray-800">
                Recent Activity
              </AnticipatoryCopywrite>
              <AnticipatoryCopywrite variant="conversational-body" className="text-intelligent-gray-600">
                {searches.filter(s => s.last_executed && 
                  new Date(s.last_executed) > new Date(Date.now() - 24 * 60 * 60 * 1000)
                ).length} searches executed today
              </AnticipatoryCopywrite>
            </PredictiveSurface>
          </div>

          {/* Create New Search */}
          <PredictiveSurface
            variant="interactive"
            className="p-4 border-2 border-dashed border-predictive-magenta cursor-pointer hover:bg-predictive-magenta/5"
            onAnticipate={() => setIsCreating(true)}
          >
            <div className="text-center">
              <AnticipatoryCopywrite variant="insight-emphasis" anticipatory>
                Create New Search
              </AnticipatoryCopywrite>
              <AnticipatoryCopywrite variant="conversational-body" className="text-intelligent-gray-600">
                Set up automated property monitoring
              </AnticipatoryCopywrite>
            </div>
          </PredictiveSurface>
        </div>
      }
      
      conversationalRight={
        <div className="p-8 space-y-6">
          {searches.length === 0 ? (
            <div className="text-center py-12">
              <AnticipatoryCopywrite variant="predictive-heading" className="text-intelligent-gray-800 mb-4">
                No Saved Searches Yet
              </AnticipatoryCopywrite>
              <AnticipatoryCopywrite variant="conversational-body" className="text-intelligent-gray-600 mb-6">
                Create your first saved search to start monitoring properties and market changes automatically.
              </AnticipatoryCopywrite>
              <button
                onClick={() => setIsCreating(true)}
                className="bg-predictive-magenta text-conversational-white px-6 py-3 rounded-lg hover:bg-predictive-magenta/80 transition-colors"
              >
                Create Your First Search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {searches.map((search) => (
                <SavedSearchCard
                  key={search.id}
                  search={search}
                  onExecute={() => executeSearch(search.id)}
                  onEdit={() => setSelectedSearch(search)}
                  onDelete={() => handleDeleteSearch(search.id)}
                />
              ))}
            </div>
          )}
        </div>
      }
    />
  );
};

interface SavedSearchCardProps {
  search: SavedSearch;
  onExecute: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

const SavedSearchCard: React.FC<SavedSearchCardProps> = ({
  search,
  onExecute,
  onEdit,
  onDelete
}) => {
  const [isExecuting, setIsExecuting] = useState(false);
  
  const handleExecute = async () => {
    setIsExecuting(true);
    await onExecute();
    setIsExecuting(false);
  };

  const getLastExecutedText = () => {
    if (!search.last_executed) return 'Never executed';
    
    const lastExec = new Date(search.last_executed);
    const now = new Date();
    const diffHours = (now.getTime() - lastExec.getTime()) / (1000 * 60 * 60);
    
    if (diffHours < 1) return 'Less than 1 hour ago';
    if (diffHours < 24) return `${Math.floor(diffHours)} hours ago`;
    
    const diffDays = Math.floor(diffHours / 24);
    return `${diffDays} days ago`;
  };

  return (
    <PredictiveSurface variant="elevated" className="p-6 space-y-4">
      <div className="flex justify-between items-start">
        <div>
          <AnticipatoryCopywrite variant="insight-emphasis" className="text-intelligent-gray-800">
            {search.name}
          </AnticipatoryCopywrite>
          {search.description && (
            <AnticipatoryCopywrite variant="conversational-body" className="text-intelligent-gray-600 mt-1">
              {search.description}
            </AnticipatoryCopywrite>
          )}
        </div>
        
        {search.notification_enabled && (
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-predictive-magenta rounded-full animate-predictive-pulse"></div>
            <span className="text-xs text-predictive-magenta">Alerts On</span>
          </div>
        )}
      </div>

      {/* Search Summary */}
      <div className="space-y-2">
        <div className="flex flex-wrap gap-2">
          {search.filters.location?.city && (
            <span className="px-2 py-1 bg-intelligent-gray-100 text-intelligent-gray-700 text-xs rounded-full">
              {search.filters.location.city}
            </span>
          )}
          {search.filters.price_range && (
            <span className="px-2 py-1 bg-intelligent-gray-100 text-intelligent-gray-700 text-xs rounded-full">
              ${search.filters.price_range.min?.toLocaleString()} - ${search.filters.price_range.max?.toLocaleString()}
            </span>
          )}
          {search.filters.bedrooms && (
            <span className="px-2 py-1 bg-intelligent-gray-100 text-intelligent-gray-700 text-xs rounded-full">
              {search.filters.bedrooms.min}+ beds
            </span>
          )}
        </div>
        
        <div className="text-xs text-intelligent-gray-600">
          Last executed: {getLastExecutedText()}
        </div>
        
        {search.last_results_count !== undefined && (
          <div className="text-xs text-intelligent-gray-600">
            Last results: {search.last_results_count} properties
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex space-x-2">
        <button
          onClick={handleExecute}
          disabled={isExecuting}
          className="flex-1 bg-predictive-magenta text-conversational-white py-2 px-4 rounded-lg text-sm hover:bg-predictive-magenta/80 transition-colors disabled:opacity-50"
        >
          {isExecuting ? 'Executing...' : 'Run Search'}
        </button>
        
        <button
          onClick={onEdit}
          className="px-4 py-2 border border-intelligent-gray-300 text-intelligent-gray-700 rounded-lg text-sm hover:bg-intelligent-gray-50 transition-colors"
        >
          Edit
        </button>
        
        <button
          onClick={onDelete}
          className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg text-sm transition-colors"
        >
          Delete
        </button>
      </div>
    </PredictiveSurface>
  );
};
```

TASK 4: Create API Endpoints for Saved Searches
Create app/api/saved-searches/route.ts:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/middleware/auth';
import { savedSearchService } from '@/lib/services/SavedSearchService';
import { z } from 'zod';

const createSearchSchema = z.object({
  name: z.string().min(1).max(255),
  description: z.string().optional(),
  filters: z.object({}).passthrough(),
  notification_enabled: z.boolean().default(false),
  notification_frequency: z.enum(['immediate', 'daily', 'weekly']).default('daily'),
  notification_channels: z.array(z.enum(['email', 'sms', 'push'])).default(['email']),
  client_name: z.string().optional(),
  client_email: z.string().email().optional(),
  client_phone: z.string().optional(),
  tags: z.array(z.string()).default([]),
  alert_thresholds: z.object({
    price_drop_pct: z.number().min(0).max(100).optional(),
    new_listings: z.boolean().default(true),
    price_range_expansion: z.boolean().default(false),
    market_changes: z.boolean().default(false)
  }).default({})
});

export async function GET(request: NextRequest) {
  try {
    const user = await requireAuth(request);
    const { searchParams } = new URL(request.url);
    
    const page = parseInt(searchParams.get('page') || '1');
    const limit = Math.min(parseInt(searchParams.get('limit') || '20'), 100);
    const tag = searchParams.get('tag');
    
    const searches = await savedSearchService.getUserSavedSearches(user.id, {
      page,
      limit,
      tag
    });
    
    return NextResponse.json(searches);
  } catch (error) {
    console.error('Failed to get saved searches:', error);
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const user = await requireAuth(request);
    const body = await request.json();
    
    const validatedData = createSearchSchema.parse(body);
    
    const savedSearch = await savedSearchService.createSavedSearch(user.id, validatedData);
    
    return NextResponse.json(savedSearch, { status: 201 });
  } catch (error) {
    console.error('Failed to create saved search:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid input', details: error.errors },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: 'Failed to create saved search' },
      { status: 500 }
    );
  }
}
```

Create app/api/saved-searches/[id]/execute/route.ts:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/middleware/auth';
import { savedSearchService } from '@/lib/services/SavedSearchService';

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await requireAuth(request);
    const searchId = params.id;
    
    // Verify search ownership
    const search = await savedSearchService.getSavedSearch(searchId);
    
    if (!search || search.user_id !== user.id) {
      return NextResponse.json({ error: 'Search not found' }, { status: 404 });
    }
    
    // Execute search
    const results = await savedSearchService.executeSavedSearch(searchId);
    
    return NextResponse.json(results);
  } catch (error) {
    console.error('Failed to execute saved search:', error);
    return NextResponse.json(
      { error: 'Failed to execute search' },
      { status: 500 }
    );
  }
}
```

TASK 5: Implement Background Job System
Create src/lib/jobs/SearchScheduler.ts:

```typescript
import { savedSearchService } from '@/lib/services/SavedSearchService';
import { notificationService } from '@/lib/services/NotificationService';

export class SearchScheduler {
  private isRunning = false;
  private intervalId: NodeJS.Timeout | null = null;

  start(): void {
    if (this.isRunning) return;
    
    this.isRunning = true;
    console.log('Starting search scheduler...');
    
    // Run every 5 minutes
    this.intervalId = setInterval(async () => {
      try {
        await this.executeScheduledSearches();
      } catch (error) {
        console.error('Error in scheduled search execution:', error);
      }
    }, 5 * 60 * 1000);
  }

  stop(): void {
    if (!this.isRunning) return;
    
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    
    this.isRunning = false;
    console.log('Stopped search scheduler');
  }

  private async executeScheduledSearches(): Promise<void> {
    console.log('Executing scheduled searches...');
    
    try {
      await savedSearchService.scheduleSearchExecutions();
    } catch (error) {
      console.error('Failed to execute scheduled searches:', error);
    }
  }
}

export const searchScheduler = new SearchScheduler();

// Auto-start in production
if (process.env.NODE_ENV === 'production') {
  searchScheduler.start();
}
```

Create api/cron/execute-searches/route.ts for Vercel Cron:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { savedSearchService } from '@/lib/services/SavedSearchService';

export async function GET(request: NextRequest) {
  // Verify cron secret
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    await savedSearchService.scheduleSearchExecutions();
    
    return NextResponse.json({ 
      success: true, 
      timestamp: new Date().toISOString() 
    });
  } catch (error) {
    console.error('Cron job failed:', error);
    return NextResponse.json(
      { error: 'Cron job failed' },
      { status: 500 }
    );
  }
}
```

Add to vercel.json:

```json
{
  "crons": [
    {
      "path": "/api/cron/execute-searches",
      "schedule": "*/5 * * * *"
    }
  ]
}
```

SUCCESS CRITERIA:

- Saved searches persist and execute reliably with accurate results
- Notification system delivers via email/SMS with >95% success rate
- Background job system processes searches without system impact
- UI provides complete search management with anticipatory design
- Alert thresholds and preferences work accurately
- System scales to handle 1000+ concurrent saved searches
- Error handling maintains system stability during API failures
- Performance remains sub-2-second for search execution

```

## MESH PROMPT 6: COMPLIANCE Q&A MODULE
**Duration:** Week 6 | **Dependencies:** MESH PROMPT 5

```

Building upon the Notification System, implement the complete compliance Q&A module with regulatory knowledge base, AI-enhanced processing, and citation tracking using anticipatory design principles.

TASK 1: Create Comprehensive Compliance Knowledge Base
Create database/compliance-data.sql:

```sql
-- Insert sample DRE regulations
INSERT INTO compliance_regulations (regulation_code, title, content, summary, jurisdiction, organization, category, subcategory, effective_date, source_url, search_keywords) VALUES
('DRE-2785', 'Real Estate Disclosure Requirements', 'Every real estate licensee must provide written disclosure of material facts that may affect the value or desirability of the property. This includes but is not limited to: known defects, environmental hazards, neighborhood nuisances, and any material changes in market conditions that may affect the property value.', 'Requires written disclosure of all material facts affecting property value', 'california', 'DRE', 'disclosure', 'material_facts', '2023-01-01', 'https://www.dre.ca.gov/files/pdf/relaw/2785.pdf', ARRAY['disclosure', 'material facts', 'property defects', 'environmental hazards']),

('DRE-2785.1', 'Dual Agency Disclosure', 'When a real estate broker represents both buyer and seller in the same transaction, written disclosure must be provided to both parties before any offer is presented. The disclosure must clearly explain the potential conflicts of interest and limitations on the broker''s ability to advocate for either party.', 'Mandates dual agency disclosure before presenting offers', 'california', 'DRE', 'agency', 'dual_agency', '2023-01-01', 'https://www.dre.ca.gov/files/pdf/relaw/2785-1.pdf', ARRAY['dual agency', 'conflict of interest', 'representation', 'disclosure']),

('NAR-1.4', 'Fiduciary Duties to Clients', 'REALTORS® owe their clients loyalty, confidentiality, disclosure, obedience, reasonable care, and accounting. These duties continue until the agency relationship is terminated and may extend beyond termination for confidentiality obligations.', 'Defines the six fiduciary duties owed to clients', 'federal', 'NAR', 'ethics', 'fiduciary_duties', '2023-01-01', 'https://www.nar.realtor/about/governing-documents/code-of-ethics/2023-code-of-ethics-standards-of-practice', ARRAY['fiduciary duties', 'loyalty', 'confidentiality', 'client obligations']),

('CAR-RPA', 'Purchase Agreement Requirements', 'All purchase agreements must include specific disclosures regarding financing, inspections, and contingencies. The agreement must clearly state all terms and conditions, including but not limited to: purchase price, financing terms, inspection periods, and contingency removal deadlines.', 'Specifies required elements in purchase agreements', 'california', 'CAR', 'contracts', 'purchase_agreements', '2023-01-01', 'https://www.car.org/legal/purchase-agreement-requirements', ARRAY['purchase agreement', 'contract terms', 'contingencies', 'financing']);

-- Insert compliance Q&A pairs
INSERT INTO compliance_qa (question, answer, regulation_ids, category, jurisdiction, confidence_score, tags, search_keywords) VALUES
('What disclosures are required when representing both buyer and seller?', 'When representing both buyer and seller (dual agency), you must provide written disclosure to both parties before presenting any offer. The disclosure must explain potential conflicts of interest and limitations on your ability to advocate for either party. This is required by DRE regulation 2785.1.', ARRAY[(SELECT id FROM compliance_regulations WHERE regulation_code = 'DRE-2785.1')], 'agency', 'california', 0.95, ARRAY['dual agency', 'disclosure', 'conflict of interest'], ARRAY['dual agency', 'represent both parties', 'buyer seller']),

('What are the six fiduciary duties to clients?', 'The six fiduciary duties owed to clients are: 1) Loyalty - putting client interests first, 2) Confidentiality - protecting client information, 3) Disclosure - revealing material facts, 4) Obedience - following lawful instructions, 5) Reasonable Care - exercising professional competence, and 6) Accounting - handling client funds properly. These duties are defined in NAR Code of Ethics Article 1.4.', ARRAY[(SELECT id FROM compliance_regulations WHERE regulation_code = 'NAR-1.4')], 'ethics', 'federal', 0.98, ARRAY['fiduciary duties', 'client obligations', 'ethics'], ARRAY['fiduciary duties', 'client obligations', 'loyalty', 'confidentiality']);
```

Create src/lib/services/ComplianceService.ts:

```typescript
import { supabaseAdmin } from '@/lib/supabase/client';
import { OpenAIService } from './OpenAIService';

interface ComplianceQuery {
  question: string;
  jurisdiction?: string;
  category?: string;
  urgency?: 'low' | 'medium' | 'high';
}

interface ComplianceResponse {
  answer: string;
  citations: ComplianceCitation[];
  confidence: number;
  disclaimer: string;
  related_questions: string[];
  jurisdiction: string;
  category: string;
  follow_up_suggestions: string[];
}

interface ComplianceCitation {
  regulation_code: string;
  title: string;
  relevant_text: string;
  source_url: string;
  organization: 'DRE' | 'NAR' | 'CAR';
  confidence: number;
}

class ComplianceService {
  private openaiService: OpenAIService;
  private cache: Map<string, ComplianceResponse> = new Map();

  constructor() {
    this.openaiService = new OpenAIService();
  }

  async processComplianceQuestion(
    query: ComplianceQuery,
    userId: string
  ): Promise<ComplianceResponse> {
    // Generate cache key
    const cacheKey = this.generateCacheKey(query);
    
    // Check cache first
    if (this.cache.has(cacheKey)) {
      const cached = this.cache.get(cacheKey)!;
      await this.recordAnalytics(userId, query, cached, 'cache_hit');
      return cached;
    }

    // Search knowledge base for relevant regulations
    const relevantRegulations = await this.searchRegulations(
      query.question,
      query.jurisdiction || 'california',
      query.category
    );

    // Check if we have a pre-written answer
    const existingAnswer = await this.searchExistingAnswers(query.question);
    
    let response: ComplianceResponse;
    
    if (existingAnswer && existingAnswer.confidence > 0.9) {
      // Use existing high-confidence answer
      response = await this.formatExistingAnswer(existingAnswer, relevantRegulations);
    } else {
      // Generate AI response
      response = await this.generateAIResponse(query, relevantRegulations);
    }

    // Add standard disclaimer
    response.disclaimer = this.generateDisclaimer(query.jurisdiction || 'california');
    
    // Generate related questions
    response.related_questions = await this.generateRelatedQuestions(
      query.question,
      relevantRegulations
    );
    
    // Cache response
    this.cache.set(cacheKey, response);
    
    // Record analytics
    await this.recordAnalytics(userId, query, response, 'generated');
    
    return response;
  }

  private async searchRegulations(
    question: string,
    jurisdiction: string,
    category?: string
  ): Promise<ComplianceRegulation[]> {
    // Extract keywords from question
    const keywords = await this.extractKeywords(question);
    
    let query = supabaseAdmin
      .from('compliance_regulations')
      .select('*')
      .eq('jurisdiction', jurisdiction)
      .eq('is_active', true);

    if (category) {
      query = query.eq('category', category);
    }

    // Search by keywords
    const keywordConditions = keywords.map(keyword => 
      `search_keywords @> '{${keyword}}'`
    ).join(' OR ');
    
    if (keywordConditions) {
      query = query.or(keywordConditions);
    }

    const { data, error } = await query
      .order('effective_date', { ascending: false })
      .limit(10);

    if (error) {
      console.error('Failed to search regulations:', error);
      return [];
    }

    // Score regulations by relevance
    return this.scoreRegulationRelevance(data || [], question);
  }

  private async generateAIResponse(
    query: ComplianceQuery,
    regulations: ComplianceRegulation[]
  ): Promise<ComplianceResponse> {
    const systemPrompt = this.buildComplianceSystemPrompt(query.jurisdiction || 'california');
    const userPrompt = this.buildComplianceUserPrompt(query, regulations);

    const response = await this.openaiService.client.chat.completions.create({
      model: "gpt-4-turbo-preview",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt }
      ],
      functions: [{
        name: "provide_compliance_answer",
        description: "Provide comprehensive compliance answer with citations",
        parameters: {
          type: "object",
          properties: {
            answer: { 
              type: "string",
              description: "Comprehensive answer explaining the compliance requirement"
            },
            citations: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  regulation_code: { type: "string" },
                  relevant_text: { type: "string" },
                  confidence: { type: "number", minimum: 0, maximum: 1 }
                }
              }
            },
            confidence: { 
              type: "number", 
              minimum: 0, 
              maximum: 1,
              description: "Confidence in the accuracy of the answer"
            },
            category: { 
              type: "string",
              enum: ["disclosure", "agency", "ethics", "contracts", "licensing", "advertising"]
            },
            follow_up_suggestions: {
              type: "array",
              items: { type: "string" },
              description: "Suggested follow-up actions or considerations"
            }
          },
          required: ["answer", "citations", "confidence", "category"]
        }
      }],
      function_call: { name: "provide_compliance_answer" }
    });

    const aiResult = JSON.parse(response.choices[0].message.function_call?.arguments || '{}');
    
    // Enhance citations with full regulation data
    const enhancedCitations = await Promise.all(
      aiResult.citations.map(async (citation: any) => {
        const regulation = regulations.find(r => r.regulation_code === citation.regulation_code);
        
        return {
          regulation_code: citation.regulation_code,
          title: regulation?.title || 'Unknown Regulation',
          relevant_text: citation.relevant_text,
          source_url: regulation?.source_url || '',
          organization: regulation?.organization || 'Unknown',
          confidence: citation.confidence
        };
      })
    );

    return {
      answer: aiResult.answer,
      citations: enhancedCitations,
      confidence: aiResult.confidence,
      disclaimer: '', // Will be added later
      related_questions: [], // Will be generated later
      jurisdiction: query.jurisdiction || 'california',
      category: aiResult.category,
      follow_up_suggestions: aiResult.follow_up_suggestions || []
    };
  }

  private buildComplianceSystemPrompt(jurisdiction: string): string {
    return `You are a highly knowledgeable real estate compliance expert specializing in ${jurisdiction} regulations. Your role is to provide accurate, practical guidance on real estate compliance matters.

CRITICAL GUIDELINES:
1. Always cite specific regulations with their codes
2. Provide practical, actionable guidance
3. Include confidence scores for all citations
4. Clearly indicate when information may be incomplete
5. Suggest follow-up actions when appropriate
6. Never provide legal advice - only informational guidance

RESPONSE REQUIREMENTS:
- Be comprehensive but concise
- Focus on practical implementation
- Include specific regulation references
- Provide confidence scores for all information
- Suggest related topics or follow-up actions

JURISDICTION FOCUS: ${jurisdiction}
- Prioritize ${jurisdiction}-specific regulations
- Include federal regulations where applicable
- Note when regulations may vary by jurisdiction`;
  }

  private buildComplianceUserPrompt(
    query: ComplianceQuery,
    regulations: ComplianceRegulation[]
  ): string {
    const regulationContext = regulations.map(reg => 
      `${reg.regulation_code}: ${reg.title}\n${reg.summary}\nContent: ${reg.content.substring(0, 500)}...`
    ).join('\n\n');

    return `COMPLIANCE QUESTION: "${query.question}"

JURISDICTION: ${query.jurisdiction || 'california'}
CATEGORY: ${query.category || 'general'}
URGENCY: ${query.urgency || 'medium'}

RELEVANT REGULATIONS:
${regulationContext}

Please provide a comprehensive answer that:
1. Directly addresses the specific question
2. Cites relevant regulations with confidence scores
3. Provides practical implementation guidance
4. Suggests follow-up actions or considerations
5. Indicates any limitations or areas requiring professional consultation`;
  }

  private async generateRelatedQuestions(
    originalQuestion: string,
    regulations: ComplianceRegulation[]
  ): Promise<string[]> {
    const relatedQuestions: string[] = [];
    
    // Get questions related to same regulations
    for (const regulation of regulations.slice(0, 3)) {
      const { data } = await supabaseAdmin
        .from('compliance_qa')
        .select('question')
        .contains('regulation_ids', [regulation.id])
        .neq('question', originalQuestion)
        .limit(2);
      
      if (data) {
        relatedQuestions.push(...data.map(item => item.question));
      }
    }
    
    // Remove duplicates and limit to 5
    return [...new Set(relatedQuestions)].slice(0, 5);
  }

  private generateDisclaimer(jurisdiction: string): string {
    return `This information is provided for educational purposes only and does not constitute legal advice. Real estate regulations in ${jurisdiction} may change, and specific situations may require consultation with a qualified attorney or compliance professional. Always verify current regulations and consult with appropriate professionals for specific legal matters.`;
  }

  async bookmarkAnswer(
    userId: string,
    qaId: string,
    notes?: string
  ): Promise<void> {
    const { error } = await supabaseAdmin
      .from('compliance_bookmarks')
      .insert({
        user_id: userId,
        qa_id: qaId,
        notes
      });

    if (error) {
      throw new Error(`Failed to bookmark answer: ${error.message}`);
    }
  }

  async getUserBookmarks(userId: string): Promise<any[]> {
    const { data, error } = await supabaseAdmin
      .from('compliance_bookmarks')
      .select(`
        *,
        compliance_qa(*)
      `)
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) {
      throw new Error(`Failed to get bookmarks: ${error.message}`);
    }

    return data || [];
  }

  private async recordAnalytics(
    userId: string,
    query: ComplianceQuery,
    response: ComplianceResponse,
    source: 'cache_hit' | 'generated'
  ): Promise<void> {
    try {
      await supabaseAdmin
        .from('user_analytics')
        .insert({
          user_id: userId,
          event_type: 'compliance_question',
          event_category: 'compliance',
          event_data: {
            question: query.question,
            jurisdiction: query.jurisdiction,
            category: query.category,
            confidence: response.confidence,
            citations_count: response.citations.length,
            source
          }
        });
    } catch (error) {
      console.error('Failed to record compliance analytics:', error);
    }
  }
}

export const complianceService = new ComplianceService();
```

TASK 2: Create /api/compliance Endpoint
Create app/api/compliance/route.ts:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/middleware/auth';
import { complianceService } from '@/lib/services/ComplianceService';
import { chatRateLimiter } from '@/lib/middleware/rateLimiter';
import { z } from 'zod';

const complianceQuerySchema = z.object({
  question: z.string().min(5).max(1000),
  jurisdiction: z.enum(['california', 'federal', 'texas', 'florida', 'new_york']).default('california'),
  category: z.enum(['disclosure', 'agency', 'ethics', 'contracts', 'licensing', 'advertising']).optional(),
  urgency: z.enum(['low', 'medium', 'high']).default('medium')
});

export async function POST(request: NextRequest) {
  try {
    // Apply rate limiting
    const rateLimitResult = await chatRateLimiter(request);
    if (rateLimitResult) return rateLimitResult;

    // Authenticate user
    const user = await requireAuth(request);
    
    // Validate request
    const body = await request.json();
    const validatedQuery = complianceQuerySchema.parse(body);
    
    // Process compliance question
    const response = await complianceService.processComplianceQuestion(
      validatedQuery,
      user.id
    );
    
    return NextResponse.json(response);
    
  } catch (error) {
    console.error('Compliance processing error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid request', details: error.errors },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: 'Unable to process compliance question' },
      { status: 500 }
    );
  }
}
```

Create app/api/compliance/bookmarks/route.ts:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/middleware/auth';
import { complianceService } from '@/lib/services/ComplianceService';
import { z } from 'zod';

const bookmarkSchema = z.object({
  qa_id: z.string().uuid(),
  notes: z.string().optional()
});

export async function GET(request: NextRequest) {
  try {
    const user = await requireAuth(request);
    const bookmarks = await complianceService.getUserBookmarks(user.id);
    
    return NextResponse.json({ bookmarks });
  } catch (error) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const user = await requireAuth(request);
    const body = await request.json();
    const { qa_id, notes } = bookmarkSchema.parse(body);
    
    await complianceService.bookmarkAnswer(user.id, qa_id, notes);
    
    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid request', details: error.errors },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: 'Failed to bookmark answer' },
      { status: 500 }
    );
  }
}
```

TASK 3: Build Compliance UI Components
Create src/components/compliance/ComplianceInterface.tsx:

```tsx
import { useState, useEffect } from 'react';
import { AsymmetricContainer, AnticipatoryCopywrite, PredictiveSurface } from '@/components/design-system';
import { ComplianceResponse, ComplianceQuery } from '@/lib/types';

interface ComplianceInterfaceProps {
  user: User;
}

export const ComplianceInterface: React.FC<ComplianceInterfaceProps> = ({ user }) => {
  const [query, setQuery] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [response, setResponse] = useState<ComplianceResponse | null>(null);
  const [selectedJurisdiction, setSelectedJurisdiction] = useState<string>('california');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [recentQuestions, setRecentQuestions] = useState<string[]>([]);

  useEffect(() => {
    loadRecentQuestions();
  }, []);

  const loadRecentQuestions = async () => {
    // Load recent compliance questions for suggestions
    const commonQuestions = [
      "What disclosures are required when representing both buyer and seller?",
      "What are the six fiduciary duties to clients?",
      "When must I provide a Natural Hazard Disclosure?",
      "What are the requirements for advertising listings?",
      "How long must I keep transaction records?"
    ];
    setRecentQuestions(commonQuestions);
  };

  const handleSubmitQuestion = async () => {
    if (!query.trim() || isProcessing) return;

    setIsProcessing(true);
    setResponse(null);

    try {
      const response = await fetch('/api/compliance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: query,
          jurisdiction: selectedJurisdiction,
          category: selectedCategory || undefined,
          urgency: 'medium'
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to process question');
      }

      setResponse(data);
    } catch (error) {
      console.error('Failed to process compliance question:', error);
      setResponse({
        answer: 'I apologize, but I encountered an issue processing your compliance question. Please try again or contact support if the problem persists.',
        citations: [],
        confidence: 0,
        disclaimer: 'This error response does not constitute legal advice.',
        related_questions: [],
        jurisdiction: selectedJurisdiction,
        category: 'error',
        follow_up_suggestions: []
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleBookmarkAnswer = async () => {
    if (!response) return;

    try {
      await fetch('/api/compliance/bookmarks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          qa_id: response.id, // Would need to be added to response
          notes: `Bookmarked from compliance interface`
        })
      });

      // Show success feedback
    } catch (error) {
      console.error('Failed to bookmark answer:', error);
    }
  };

  return (
    <AsymmetricContainer
      predictiveLeft={
        <div className="space-y-6">
          <div>
            <AnticipatoryCopywrite variant="predictive-heading">
              Compliance Q&A
            </AnticipatoryCopywrite>
            <AnticipatoryCopywrite variant="conversational-body" className="text-intelligent-gray-600 mt-2">
              Get guidance on real estate regulations
            </AnticipatoryCopywrite>
          </div>

          {/* Quick Filters */}
          <div className="space-y-4">
            <div>
              <AnticipatoryCopywrite variant="insight-emphasis" className="text-intelligent-gray-800 mb-2">
                Jurisdiction
              </AnticipatoryCopywrite>
              <select
                value={selectedJurisdiction}
                onChange={(e) => setSelectedJurisdiction(e.target.value)}
                className="w-full p-3 border border-intelligent-gray-300 rounded-lg focus:border-predictive-magenta focus:outline-none"
              >
                <option value="california">California</option>
                <option value="federal">Federal</option>
                <option value="texas">Texas</option>
                <option value="florida">Florida</option>
                <option value="new_york">New York</option>
              </select>
            </div>

            <div>
              <AnticipatoryCopywrite variant="insight-emphasis" className="text-intelligent-gray-800 mb-2">
                Category
              </AnticipatoryCopywrite>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-3 border border-intelligent-gray-300 rounded-lg focus:border-predictive-magenta focus:outline-none"
              >
                <option value="">All Categories</option>
                <option value="disclosure">Disclosure</option>
                <option value="agency">Agency</option>
                <option value="ethics">Ethics</option>
                <option value="contracts">Contracts</option>
                <option value="licensing">Licensing</option>
                <option value="advertising">Advertising</option>
              </select>
            </div>
          </div>

          {/* Common Questions */}
          <div className="space-y-3">
            <AnticipatoryCopywrite variant="insight-emphasis" className="text-intelligent-gray-800">
              Common Questions
            </AnticipatoryCopywrite>
            
            {recentQuestions.map((question, index) => (
              <PredictiveSurface
                key={index}
                variant="interactive"
                className="p-3 cursor-pointer hover:bg-predictive-magenta/5"
                onAnticipate={() => setQuery(question)}
              >
                <AnticipatoryCopywrite variant="conversational-body" className="text-intelligent-gray-700">
                  {question}
                </AnticipatoryCopywrite>
              </PredictiveSurface>
            ))}
          </div>
        </div>
      }
      
      conversationalRight={
        <div className="p-8 space-y-8">
          {/* Question Input */}
          <PredictiveSurface variant="elevated" className="p-6">
            <AnticipatoryCopywrite variant="insight-emphasis" className="text-intelligent-gray-800 mb-4">
              Ask a Compliance Question
            </AnticipatoryCopywrite>
            
            <div className="space-y-4">
              <textarea
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="What compliance question can I help you with? Be specific for the most accurate guidance."
                rows={4}
                className="w-full p-4 border border-intelligent-gray-300 rounded-lg focus:border-predictive-magenta focus:outline-none resize-none"
              />
              
              <button
                onClick={handleSubmitQuestion}
                disabled={!query.trim() || isProcessing}
                className="w-full bg-predictive-magenta text-conversational-white py-3 px-6 rounded-lg font-predictive hover:bg-predictive-magenta/80 transition-colors disabled:opacity-50"
              >
                {isProcessing ? 'Processing...' : 'Get Compliance Guidance'}
              </button>
            </div>
          </PredictiveSurface>

          {/* Processing State */}
          {isProcessing && (
            <PredictiveSurface variant="default" className="p-6 text-center">
              <div className="w-8 h-8 bg-predictive-magenta rounded-full animate-thinking mx-auto mb-4"></div>
              <AnticipatoryCopywrite variant="conversational-body" className="text-intelligent-gray-600">
                Analyzing regulations and generating guidance...
              </AnticipatoryCopywrite>
            </PredictiveSurface>
          )}

          {/* Response */}
          {response && (
            <ComplianceAnswer
              response={response}
              onBookmark={handleBookmarkAnswer}
              onRelatedQuestion={(question) => setQuery(question)}
            />
          )}
        </div>
      }
    />
  );
};
```

Create src/components/compliance/ComplianceAnswer.tsx:

```tsx
interface ComplianceAnswerProps {
  response: ComplianceResponse;
  onBookmark: () => void;
  onRelatedQuestion: (question: string) => void;
}

export const ComplianceAnswer: React.FC<ComplianceAnswerProps> = ({
  response,
  onBookmark,
  onRelatedQuestion
}) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmark = async () => {
    await onBookmark();
    setIsBookmarked(true);
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 0.9) return 'text-green-600';
    if (confidence >= 0.7) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getConfidenceText = (confidence: number) => {
    if (confidence >= 0.9) return 'High Confidence';
    if (confidence >= 0.7) return 'Medium Confidence';
    return 'Low Confidence - Verify with Professional';
  };

  return (
    <div className="space-y-6">
      {/* Main Answer */}
      <PredictiveSurface variant="elevated" className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <AnticipatoryCopywrite variant="insight-emphasis" className="text-intelligent-gray-800">
              Compliance Guidance
            </AnticipatoryCopywrite>
            <div className="flex items-center space-x-2 mt-1">
              <span className={`text-xs font-predictive ${getConfidenceColor(response.confidence)}`}>
                {getConfidenceText(response.confidence)}
              </span>
              <span className="text-xs text-intelligent-gray-600">
                {response.jurisdiction.toUpperCase()} • {response.category.replace('_', ' ').toUpperCase()}
              </span>
            </div>
          </div>
          
          <button
            onClick={handleBookmark}
            disabled={isBookmarked}
            className="p-2 text-intelligent-gray-600 hover:text-predictive-magenta transition-colors disabled:text-predictive-magenta"
          >
            {isBookmarked ? '★' : '☆'}
          </button>
        </div>

        <AnticipatoryCopywrite variant="conversational-body" className="text-intelligent-gray-800 mb-6">
          {response.answer}
        </AnticipatoryCopywrite>

        {/* Citations */}
        {response.citations.length > 0 && (
          <div className="space-y-4">
            <AnticipatoryCopywrite variant="insight-emphasis" className="text-intelligent-gray-800">
              Citations & References
            </AnticipatoryCopywrite>
            
            <div className="space-y-3">
              {response.citations.map((citation, index) => (
                <PredictiveSurface
                  key={index}
                  variant="default"
                  className="p-4 border border-intelligent-gray-200"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <AnticipatoryCopywrite variant="insight-emphasis" className="text-intelligent-gray-800">
                        {citation.regulation_code} - {citation.organization}
                      </AnticipatoryCopywrite>
                      <AnticipatoryCopywrite variant="conversational-body" className="text-intelligent-gray-600 text-sm">
                        {citation.title}
                      </AnticipatoryCopywrite>
                    </div>
                    <span className={`text-xs ${getConfidenceColor(citation.confidence)}`}>
                      {Math.round(citation.confidence * 100)}%
                    </span>
                  </div>
                  
                  <AnticipatoryCopywrite variant="conversational-body" className="text-intelligent-gray-700 text-sm mb-3">
                    {citation.relevant_text}
                  </AnticipatoryCopywrite>
                  
                  {citation.source_url && (
                    <a
                      href={citation.source_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-predictive-magenta text-sm hover:underline"
                    >
                      View Source Document →
                    </a>
                  )}
                </PredictiveSurface>
              ))}
            </div>
          </div>
        )}

        {/* Follow-up Suggestions */}
        {response.follow_up_suggestions.length > 0 && (
          <div className="mt-6">
            <AnticipatoryCopywrite variant="insight-emphasis" className="text-intelligent-gray-800 mb-3">
              Recommended Next Steps
            </AnticipatoryCopywrite>
            
            <ul className="space-y-2">
              {response.follow_up_suggestions.map((suggestion, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-predictive-magenta rounded-full mt-2 flex-shrink-0"></div>
                  <AnticipatoryCopywrite variant="conversational-body" className="text-intelligent-gray-700">
                    {suggestion}
                  </AnticipatoryCopywrite>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Disclaimer */}
        <div className="mt-6 p-4 bg-intelligent-gray-50 rounded-lg">
          <AnticipatoryCopywrite variant="conversational-body" className="text-intelligent-gray-600 text-sm">
            <strong>Disclaimer:</strong> {response.disclaimer}
          </AnticipatoryCopywrite>
        </div>
      </PredictiveSurface>

      {/* Related Questions */}
      {response.related_questions.length > 0 && (
        <PredictiveSurface variant="default" className="p-6">
          <AnticipatoryCopywrite variant="insight-emphasis" className="text-intelligent-gray-800 mb-4">
            Related Questions
          </AnticipatoryCopywrite>
          
          <div className="space-y-2">
            {response.related_questions.map((question, index) => (
              <button
                key={index}
                onClick={() => onRelatedQuestion(question)}
                className="block w-full text-left p-3 rounded-lg hover:bg-intelligent-gray-50 transition-colors"
              >
                <AnticipatoryCopywrite variant="conversational-body" className="text-intelligent-gray-700">
                  {question}
                </AnticipatoryCopywrite>
              </button>
            ))}
          </div>
        </PredictiveSurface>
      )}
    </div>
  );
};
```

SUCCESS CRITERIA:

- Compliance answers include proper citations >95% of time
- Answer accuracy verified by legal compliance review
- Confidence scoring correlates with answer quality
- Multi-jurisdiction support works correctly
- Knowledge base search returns relevant results
- UI provides accessible compliance guidance
- Analytics track usage patterns effectively
- Legal disclaimers present and appropriate
- Bookmark functionality works seamlessly
- Search performance remains sub-2-second

```

## MESH PROMPT 7: CRM INTEGRATION & ANALYTICS SYSTEM
**Duration:** Week 7 | **Dependencies:** MESH PROMPT 6

```

Building upon the Compliance Module, implement the complete CRM integration system with lead management, activity tracking, analytics, and anticipatory intelligence for agent productivity enhancement.

TASK 1: Implement Advanced CRM Service
Create src/lib/services/CRMService.ts:

```typescript
import { supabaseAdmin } from '@/lib/supabase/client';
import { OpenAIService } from './OpenAIService';

interface LeadData {
  name: string;
  email?: string;
  phone?: string;
  source: string;
  status: 'new' | 'contacted' | 'qualified' | 'touring' | 'offer' | 'closed' | 'lost';
  budget_min?: number;
  budget_max?: number;
  preferred_locations: string[];
  property_types: string[];
  bedrooms_min?: number;
  bathrooms_min?: number;
  timeline?: string;
  notes?: string;
  tags: string[];
  referral_source?: string;
}

interface LeadActivity {
  lead_id: string;
  activity_type: 'call' | 'email' | 'meeting' | 'showing' | 'follow_up' | 'note';
  title: string;
  description?: string;
  outcome?: string;
  next_action?: string;
  due_date?: string;
  completed_at?: string;
  metadata?: any;
}

interface LeadInsight {
  type: 'engagement_score' | 'conversion_probability' | 'next_action' | 'risk_alert';
  title: string;
  description: string;
  confidence: number;
  actionable: boolean;
  suggestions: string[];
  data?: any;
}

class CRMService {
  private openaiService: OpenAIService;

  constructor() {
    this.openaiService = new OpenAIService();
  }

  async captureLeadFromConversation(
    userId: string,
    conversationContext: any,
    explicitLeadData?: Partial<LeadData>
  ): Promise<Lead> {
    // Extract lead information from conversation using AI
    const extractedLead = await this.extractLeadFromContext(conversationContext);
    
    // Merge with explicit data
    const leadData: LeadData = {
      ...extractedLead,
      ...explicitLeadData,
      source: 'chat_conversation',
      status: 'new',
      tags: [...(extractedLead.tags || []), ...(explicitLeadData?.tags || [])]
    };

    // Calculate initial lead score
    const leadScore = await this.calculateLeadScore(leadData, conversationContext);
    
    // Create lead record
    const { data: lead, error } = await supabaseAdmin
      .from('leads')
      .insert({
        user_id: userId,
        ...leadData,
        lead_score: leadScore,
        conversion_probability: this.calculateConversionProbability(leadData, conversationContext),
        estimated_value: this.estimateLeadValue(leadData)
      })
      .select()
      .single();

    if (error) {
      throw new Error(`Failed to create lead: ${error.message}`);
    }

    // Create initial activity
    await this.addLeadActivity(lead.id, userId, {
      lead_id: lead.id,
      activity_type: 'note',
      title: 'Lead Created from Conversation',
      description: `Lead captured from PropertyGPT conversation. Initial engagement shows ${leadScore}/100 lead score.`,
      metadata: {
        conversation_context: conversationContext,
        extraction_confidence: extractedLead.extraction_confidence || 0.8
      }
    });

    // Set up automated follow-up
    await this.scheduleFollowUp(lead.id, userId, leadData);

    return lead;
  }

  private async extractLeadFromContext(conversationContext: any): Promise<Partial<LeadData> & { extraction_confidence: number }> {
    const messages = conversationContext.messages || [];
    const conversationText = messages.map((m: any) => `${m.sender}: ${m.content}`).join('\n');

    const systemPrompt = `You are an expert at extracting lead information from real estate conversations. Analyze the conversation and extract potential client information.

EXTRACTION GUIDELINES:
1. Only extract information that is explicitly mentioned or strongly implied
2. Provide confidence scores for each extracted field
3. Be conservative - don't make assumptions
4. Focus on actionable information for real estate agents

RESPONSE FORMAT:
Extract the following information with confidence scores:
- Name (if mentioned)
- Contact information (email, phone)
- Budget range (min/max)
- Preferred locations
- Property types of interest
- Bedroom/bathroom requirements
- Timeline (when they want to buy/sell)
- Any special requirements or notes`;

    const userPrompt = `CONVERSATION TO ANALYZE:
${conversationText}

Please extract lead information from this conversation with confidence scores for each field.`;

    try {
      const response = await this.openaiService.client.chat.completions.create({
        model: "gpt-4-turbo-preview",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt }
        ],
        functions: [{
          name: "extract_lead_information",
          description: "Extract lead information from conversation",
          parameters: {
            type: "object",
            properties: {
              name: { type: "string" },
              email: { type: "string" },
              phone: { type: "string" },
              budget_min: { type: "number" },
              budget_max: { type: "number" },
              preferred_locations: { type: "array", items: { type: "string" } },
              property_types: { type: "array", items: { type: "string" } },
              bedrooms_min: { type: "number" },
              bathrooms_min: { type: "number" },
              timeline: { type: "string" },
              notes: { type: "string" },
              tags: { type: "array", items: { type: "string" } },
              extraction_confidence: { type: "number", minimum: 0, maximum: 1 }
            }
          }
        }],
        function_call: { name: "extract_lead_information" }
      });

      const extracted = JSON.parse(response.choices[0].message.function_call?.arguments || '{}');
      
      // Clean up extracted data
      return {
        name: extracted.name || 'Unknown Contact',
        email: extracted.email || undefined,
        phone: extracted.phone || undefined,
        budget_min: extracted.budget_min || undefined,
        budget_max: extracted.budget_max || undefined,
        preferred_locations: extracted.preferred_locations || [],
        property_types: extracted.property_types || [],
        bedrooms_min: extracted.bedrooms_min || undefined,
        bathrooms_min: extracted.bathrooms_min || undefined,
        timeline: extracted.timeline || undefined,
        notes: extracted.notes || undefined,
        tags: extracted.tags || ['chat-generated'],
        extraction_confidence: extracted.extraction_confidence || 0.7
      };
    } catch (error) {
      console.error('Failed to extract lead from conversation:', error);
      return {
        name: 'Unknown Contact',
        preferred_locations: [],
        property_types: [],
        tags: ['chat-generated', 'extraction-failed'],
        extraction_confidence: 0.3
      };
    }
  }

  private async calculateLeadScore(leadData: LeadData, conversationContext: any): Promise<number> {
    let score = 50; // Base score

    // Contact information completeness
    if (leadData.email) score += 15;
    if (leadData.phone) score += 15;
    if (leadData.name && leadData.name !== 'Unknown Contact') score += 10;

    // Budget specificity
    if (leadData.budget_min && leadData.budget_max) {
      score += 20;
    } else if (leadData.budget_min || leadData.budget_max) {
      score += 10;
    }

    // Location specificity
    if (leadData.preferred_locations.length > 0) {
      score += 15;
    }

    // Property requirements
    if (leadData.property_types.length > 0) score += 10;
    if (leadData.bedrooms_min) score += 5;
    if (leadData.bathrooms_min) score += 5;

    // Timeline urgency
    if (leadData.timeline) {
      const timelineScore = this.scoreTimeline(leadData.timeline);
      score += timelineScore;
    }

    // Conversation engagement
    const messages = conversationContext.messages || [];
    if (messages.length > 5) score += 10;
    if (messages.length > 10) score += 5;

    // Cap at 100
    return Math.min(100, Math.max(0, score));
  }

  private scoreTimeline(timeline: string): number {
    const lower = timeline.toLowerCase();
    if (lower.includes('immediately') || lower.includes('asap') || lower.includes('urgent')) return 15;
    if (lower.includes('week') || lower.includes('month')) return 10;
    if (lower.includes('quarter') || lower.includes('3 month')) return 5;
    return 0;
  }

  private calculateConversionProbability(leadData: LeadData, conversationContext: any): number {
    let probability = 0.5; // Base 50%

    // Adjust based on lead score
    const score = this.calculateLeadScore(leadData, conversationContext);
    probability += (score - 50) / 100 * 0.3; // ±30% based on score

    // Adjust based on budget clarity
    if (leadData.budget_min && leadData.budget_max) {
      probability += 0.1;
    }

    // Adjust based on timeline urgency
    if (leadData.timeline) {
      const urgencyBonus = this.scoreTimeline(leadData.timeline) / 15 * 0.15;
      probability += urgencyBonus;
    }

    // Adjust based on referral source
    if (leadData.referral_source) {
      probability += 0.05;
    }

    return Math.min(0.95, Math.max(0.05, probability));
  }

  private estimateLeadValue(leadData: LeadData): number {
    if (!leadData.budget_max && !leadData.budget_min) return 0;
    
    const avgBudget = leadData.budget_max 
      ? (leadData.budget_min || 0 + leadData.budget_max) / 2
      : leadData.budget_min || 0;
    
    // Estimate 3% commission
    return avgBudget * 0.03;
  }

  async addLeadActivity(
    leadId: string,
    userId: string,
    activity: LeadActivity
  ): Promise<void> {
    const { error } = await supabaseAdmin
      .from('lead_activities')
      .insert({
        ...activity,
        user_id: userId,
        lead_id: leadId
      });

    if (error) {
      throw new Error(`Failed to add lead activity: ${error.message}`);
    }

    // Update lead's last contact date
    await supabaseAdmin
      .from('leads')
      .update({
        last_contact_date: new Date().toISOString(),
        updated_at: new Date().toISOString()
      })
      .eq('id', leadId);
  }

  async trackPropertyInterest(
    leadId: string,
    propertyId: string,
    interactionType: 'viewed' | 'saved' | 'inquired' | 'toured' | 'offered',
    notes?: string
  ): Promise<void> {
    const { error } = await supabaseAdmin
      .from('lead_property_interests')
      .insert({
        lead_id: leadId,
        property_id: propertyId,
        interaction_type: interactionType,
        interest_level: this.mapInteractionToInterestLevel(interactionType),
        notes
      });

    if (error) {
      throw new Error(`Failed to track property interest: ${error.message}`);
    }

    // Update lead score based on activity
    await this.updateLeadScore(leadId);
  }

  private mapInteractionToInterestLevel(interactionType: string): 'low' | 'medium' | 'high' {
    switch (interactionType) {
      case 'viewed': return 'low';
      case 'saved': return 'medium';
      case 'inquired': return 'medium';
      case 'toured': return 'high';
      case 'offered': return 'high';
      default: return 'low';
    }
  }

  async generateLeadInsights(leadId: string): Promise<LeadInsight[]> {
    const lead = await this.getLeadById(leadId);
    if (!lead) return [];

    const insights: LeadInsight[] = [];

    // Engagement score insight
    const engagementScore = await this.calculateEngagementScore(lead);
    insights.push({
      type: 'engagement_score',
      title: `Engagement Score: ${engagementScore}/100`,
      description: this.getEngagementDescription(engagementScore),
      confidence: 0.9,
      actionable: true,
      suggestions: this.getEngagementSuggestions(engagementScore)
    });

    // Conversion probability insight
    insights.push({
      type: 'conversion_probability',
      title: `Conversion Probability: ${Math.round(lead.conversion_probability * 100)}%`,
      description: this.getConversionDescription(lead.conversion_probability),
      confidence: 0.8,
      actionable: true,
      suggestions: this.getConversionSuggestions(lead.conversion_probability)
    });

    // Next action insight
    const nextAction = await this.suggestNextAction(lead);
    if (nextAction) {
      insights.push({
        type: 'next_action',
        title: 'Suggested Next Action',
        description: nextAction.description,
        confidence: nextAction.confidence,
        actionable: true,
        suggestions: [nextAction.action]
      });
    }

    // Risk alert insight
    const riskLevel = await this.assessRiskLevel(lead);
    if (riskLevel.level !== 'low') {
      insights.push({
        type: 'risk_alert',
        title: `${riskLevel.level.toUpperCase()} Risk Alert`,
        description: riskLevel.reason,
        confidence: riskLevel.confidence,
        actionable: true,
        suggestions: riskLevel.suggestions
      });
    }

    return insights;
  }

  private async calculateEngagementScore(lead: Lead): Promise<number> {
    // Get lead activities
    const { data: activities } = await supabaseAdmin
      .from('lead_activities')
      .select('*')
      .eq('lead_id', lead.id);

    let score = 50; // Base score

    // Recent activity bonus
    const recentActivities = activities?.filter(a => 
      new Date(a.created_at) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
    ) || [];
    score += Math.min(30, recentActivities.length * 5);

    // Response rate bonus
    const responseActivities = activities?.filter(a => 
      a.outcome && a.outcome.toLowerCase().includes('responded')
    ) || [];
    if (activities && activities.length > 0) {
      const responseRate = responseActivities.length / activities.length;
      score += responseRate * 20;
    }

    return Math.min(100, Math.max(0, score));
  }

  private getEngagementDescription(score: number): string {
    if (score >= 80) return 'Highly engaged lead with strong response rate and recent activity.';
    if (score >= 60) return 'Moderately engaged lead with good interaction history.';
    if (score >= 40) return 'Low engagement - may need different approach or re-qualification.';
    return 'Very low engagement - consider lead status review.';
  }

  private getEngagementSuggestions(score: number): string[] {
    if (score >= 80) return ['Continue current engagement strategy', 'Consider accelerating to next stage'];
    if (score >= 60) return ['Increase touchpoint frequency', 'Send personalized property updates'];
    if (score >= 40) return ['Try different communication channel', 'Re-qualify lead needs'];
    return ['Review lead status', 'Consider nurture campaign', 'Verify contact information'];
  }

  async scheduleFollowUp(leadId: string, userId: string, leadData: LeadData): Promise<void> {
    const followUpDate = this.calculateFollowUpDate(leadData);
    
    await this.addLeadActivity(leadId, userId, {
      lead_id: leadId,
      activity_type: 'follow_up',
      title: 'Scheduled Follow-up',
      description: 'Automated follow-up scheduled based on lead profile and timeline.',
      due_date: followUpDate.toISOString(),
      metadata: {
        auto_scheduled: true,
        reason: 'new_lead_workflow'
      }
    });
  }

  private calculateFollowUpDate(leadData: LeadData): Date {
    const now = new Date();
    
    // Urgent timeline - follow up within 2 hours
    if (leadData.timeline && this.scoreTimeline(leadData.timeline) >= 15) {
      return new Date(now.getTime() + 2 * 60 * 60 * 1000);
    }
    
    // High lead score - follow up within 24 hours
    if (leadData.budget_min && leadData.budget_max && leadData.phone) {
      return new Date(now.getTime() + 24 * 60 * 60 * 1000);
    }
    
    // Standard - follow up within 48 hours
    return new Date(now.getTime() + 48 * 60 * 60 * 1000);
  }
}

export const crmService = new CRMService();
```

TASK 2: Create CRM API Endpoints
Create app/api/crm/leads/route.ts:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/middleware/auth';
import { crmService } from '@/lib/services/CRMService';
import { z } from 'zod';

const createLeadSchema = z.object({
  name: z.string().min(1).max(255),
  email: z.string().email().optional(),
  phone: z.string().optional(),
  source: z.string().default('manual'),
  budget_min: z.number().min(0).optional(),
  budget_max: z.number().min(0).optional(),
  preferred_locations: z.array(z.string()).default([]),
  property_types: z.array(z.string()).default([]),
  bedrooms_min: z.number().min(0).optional(),
  bathrooms_min: z.number().min(0).optional(),
  timeline: z.string().optional(),
  notes: z.string().optional(),
  tags: z.array(z.string()).default([]),
  referral_source: z.string().optional()
});

export async function GET(request: NextRequest) {
  try {
    const user = await requireAuth(request);
    const { searchParams } = new URL(request.url);
    
    const status = searchParams.get('status');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = Math.min(parseInt(searchParams.get('limit') || '20'), 100);
    const sortBy = searchParams.get('sort_by') || 'created_at';
    const sortOrder = searchParams.get('sort_order') || 'desc';
    
    const leads = await crmService.getUserLeads(user.id, {
      status,
      page,
      limit,
      sortBy,
      sortOrder
    });
    
    return NextResponse.json(leads);
  } catch (error) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const user = await requireAuth(request);
    const body = await request.json();
    
    const leadData = createLeadSchema.parse(body);
    
    const lead = await crmService.createLead(user.id, leadData);
    
    return NextResponse.json(lead, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid input', details: error.errors },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: 'Failed to create lead' },
      { status: 500 }
    );
  }
}
```

Create app/api/crm/leads/[id]/insights/route.ts:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/middleware/auth';
import { crmService } from '@/lib/services/CRMService';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await requireAuth(request);
    const leadId = params.id;
    
    // Verify lead ownership
    const lead = await crmService.getLeadById(leadId);
    if (!lead || lead.user_id !== user.id) {
      return NextResponse.json({ error: 'Lead not found' }, { status: 404 });
    }
    
    const insights = await crmService.generateLeadInsights(leadId);
    
    return NextResponse.json({ insights });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to generate insights' },
      { status: 500 }
    );
  }
}
```

TASK 3: Build CRM Dashboard Components
Create src/components/crm/CRMDashboard.tsx:

```tsx
import { useState, useEffect } from 'react';
import { AsymmetricContainer, AnticipatoryCopywrite, PredictiveSurface } from '@/components/design-system';
import { Lead, LeadInsight } from '@/lib/types';

interface CRMDashboardProps {
  user: User;
}

export const CRMDashboard: React.FC<CRMDashboardProps> = ({ user }) => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [insights, setInsights] = useState<LeadInsight[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [metrics, setMetrics] = useState({
    totalLeads: 0,
    newLeads: 0,
    qualifiedLeads: 0,
    closedLeads: 0,
    averageLeadScore: 0,
    conversionRate: 0
  });

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      const [leadsResponse, metricsResponse] = await Promise.all([
        fetch('/api/crm/leads?limit=50'),
        fetch('/api/crm/analytics/metrics')
      ]);

      const leadsData = await leadsResponse.json();
      const metricsData = await metricsResponse.json();

      setLeads(leadsData.leads || []);
      setMetrics(metricsData);
    } catch (error) {
      console.error('Failed to load CRM data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const loadLeadInsights = async (leadId: string) => {
    try {
      const response = await fetch(`/api/crm/leads/${leadId}/insights`);
      const data = await response.json();
      setInsights(data.insights || []);
    } catch (error) {
      console.error('Failed to load lead insights:', error);
    }
  };

  const handleLeadSelect = (lead: Lead) => {
    setSelectedLead(lead);
    loadLeadInsights(lead.id);
  };

  if (isLoading) {
    return (
      <div className="w-full h-64 flex items-center justify-center">
        <div className="w-8 h-8 bg-predictive-magenta rounded-full animate-thinking"></div>
      </div>
    );
  }

  return (
    <AsymmetricContainer
      predictiveLeft={
        <div className="space-y-6">
          <div>
            <AnticipatoryCopywrite variant="predictive-heading">
              CRM Dashboard
            </AnticipatoryCopywrite>
            <AnticipatoryCopywrite variant="conversational-body" className="text-intelligent-gray-600 mt-2">
              Manage leads and track conversions
            </AnticipatoryCopywrite>
          </div>

          {/* Key Metrics */}
          <div className="space-y-4">
            <CRMMetricCard
              label="Total Leads"
              value={metrics.totalLeads.toString()}
              change={metrics.newLeads}
              changeLabel="new this week"
            />
            
            <CRMMetricCard
              label="Avg Lead Score"
              value={metrics.averageLeadScore.toString()}
              suffix="/100"
            />
            
            <CRMMetricCard
              label="Conversion Rate"
              value={`${metrics.conversionRate.toFixed(1)}%`}
              change={metrics.conversionRate >= 15 ? 5 : -2}
              changeLabel="vs last month"
            />
          </div>

          {/* Quick Actions */}
          <div className="space-y-3">
            <AnticipatoryCopywrite variant="insight-emphasis" className="text-intelligent-gray-800">
              Quick Actions
            </AnticipatoryCopywrite>
            
            <PredictiveSurface
              variant="interactive"
              className="p-4 cursor-pointer hover:bg-predictive-magenta/5"
            >
              <AnticipatoryCopywrite variant="conversational-body" className="text-intelligent-gray-700">
                Add New Lead
              </AnticipatoryCopywrite>
            </PredictiveSurface>
            
            <PredictiveSurface
              variant="interactive"
              className="p-4 cursor-pointer hover:bg-predictive-magenta/5"
            >
              <AnticipatoryCopywrite variant="conversational-body" className="text-intelligent-gray-700">
                Schedule Follow-ups
              </AnticipatoryCopywrite>
            </PredictiveSurface>
            
            <PredictiveSurface
              variant="interactive"
              className="p-4 cursor-pointer hover:bg-predictive-magenta/5"
            >
              <AnticipatoryCopywrite variant="conversational-body" className="text-intelligent-gray-700">
                Generate Reports
              </AnticipatoryCopywrite>
            </PredictiveSurface>
          </div>
        </div>
      }
      
      conversationalRight={
        <div className="p-8 space-y-8">
          {/* Lead Pipeline */}
          <div>
            <AnticipatoryCopywrite variant="insight-emphasis" className="text-intelligent-gray-800 mb-6">
              Lead Pipeline
            </AnticipatoryCopywrite>
            
            <LeadPipeline
              leads={leads}
              onLeadSelect={handleLeadSelect}
              selectedLead={selectedLead}
            />
          </div>

          {/* Lead Insights */}
          {selectedLead && insights.length > 0 && (
            <div>
              <AnticipatoryCopywrite variant="insight-emphasis" className="text-intelligent-gray-800 mb-6">
                Lead Insights - {selectedLead.name}
              </AnticipatoryCopywrite>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {insights.map((insight, index) => (
                  <LeadInsightCard
                    key={index}
                    insight={insight}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Recent Activity */}
          <div>
            <AnticipatoryCopywrite variant="insight-emphasis" className="text-intelligent-gray-800 mb-6">
              Recent Activity
            </AnticipatoryCopywrite>
            
            <RecentActivityFeed leads={leads} />
          </div>
        </div>
      }
    />
  );
};

interface CRMMetricCardProps {
  label: string;
  value: string;
  suffix?: string;
  change?: number;
  changeLabel?: string;
}

const CRMMetricCard: React.FC<CRMMetricCardProps> = ({
  label,
  value,
  suffix,
  change,
  changeLabel
}) => {
  return (
    <PredictiveSurface variant="default" className="p-4 border border-intelligent-gray-200">
      <AnticipatoryCopywrite variant="conversational-body" className="text-intelligent-gray-600 mb-1">
        {label}
      </AnticipatoryCopywrite>
      <div className="flex items-end justify-between">
        <AnticipatoryCopywrite variant="insight-emphasis" className="text-intelligent-gray-800">
          {value}
          {suffix && <span className="text-xs ml-1">{suffix}</span>}
        </AnticipatoryCopywrite>
        
        {change !== undefined && (
          <div className={`text-xs ${change > 0 ? 'text-green-500' : 'text-red-500'}`}>
            {change > 0 ? '↑' : '↓'} {Math.abs(change)} {changeLabel}
          </div>
        )}
      </div>
    </PredictiveSurface>
  );
};

interface LeadPipelineProps {
  leads: Lead[];
  onLeadSelect: (lead: Lead) => void;
  selectedLead: Lead | null;
}

const LeadPipeline: React.FC<LeadPipelineProps> = ({
  leads,
  onLeadSelect,
  selectedLead
}) => {
  const stages = [
    { status: 'new', label: 'New', color: 'bg-blue-100 text-blue-800' },
    { status: 'contacted', label: 'Contacted', color: 'bg-yellow-100 text-yellow-800' },
    { status: 'qualified', label: 'Qualified', color: 'bg-green-100 text-green-800' },
    { status: 'touring', label: 'Touring', color: 'bg-purple-100 text-purple-800' },
    { status: 'offer', label: 'Offer', color: 'bg-orange-100 text-orange-800' },
    { status: 'closed', label: 'Closed', color: 'bg-green-100 text-green-800' }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {stages.map((stage) => {
        const stageLeads = leads.filter(lead => lead.status === stage.status);
        
        return (
          <div key={stage.status} className="space-y-3">
            <div className="flex items-center justify-between">
              <span className={`px-2 py-1 rounded-full text-xs font-predictive ${stage.color}`}>
                {stage.label}
              </span>
              <span className="text-xs text-intelligent-gray-600">
                {stageLeads.length}
              </span>
            </div>
            
            <div className="space-y-2">
              {stageLeads.slice(0, 5).map((lead) => (
                <PredictiveSurface
                  key={lead.id}
                  variant="interactive"
                  className={`p-3 cursor-pointer transition-colors ${
                    selectedLead?.id === lead.id 
                      ? 'bg-predictive-magenta/10 border-predictive-magenta' 
                      : 'hover:bg-intelligent-gray-50'
                  }`}
                  onAnticipate={() => onLeadSelect(lead)}
                >
                  <AnticipatoryCopywrite variant="conversational-body" className="text-intelligent-gray-800 text-sm">
                    {lead.name}
                  </AnticipatoryCopywrite>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs text-intelligent-gray-600">
                      Score: {lead.lead_score}
                    </span>
                    <span className="text-xs text-intelligent-gray-600">
                      {Math.round(lead.conversion_probability * 100)}%
                    </span>
                  </div>
                </PredictiveSurface>
              ))}
              
              {stageLeads.length > 5 && (
                <div className="text-xs text-intelligent-gray-600 text-center">
                  +{stageLeads.length - 5} more
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

interface LeadInsightCardProps {
  insight: LeadInsight;
}

const LeadInsightCard: React.FC<LeadInsightCardProps> = ({ insight }) => {
  const getInsightColor = (type: string) => {
    switch (type) {
      case 'engagement_score': return 'border-blue-200 bg-blue-50';
      case 'conversion_probability': return 'border-green-200 bg-green-50';
      case 'next_action': return 'border-orange-200 bg-orange-50';
      case 'risk_alert': return 'border-red-200 bg-red-50';
      default: return 'border-intelligent-gray-200 bg-intelligent-gray-50';
    }
  };

  return (
    <PredictiveSurface
      variant="default"
      className={`p-4 border-2 ${getInsightColor(insight.type)}`}
    >
      <div className="flex justify-between items-start mb-2">
        <AnticipatoryCopywrite variant="insight-emphasis" className="text-intelligent-gray-800">
          {insight.title}
        </AnticipatoryCopywrite>
        <span className="text-xs text-intelligent-gray-600">
          {Math.round(insight.confidence * 100)}%
        </span>
      </div>
      
      <AnticipatoryCopywrite variant="conversational-body" className="text-intelligent-gray-700 mb-3">
        {insight.description}
      </AnticipatoryCopywrite>
      
      {insight.suggestions.length > 0 && (
        <div className="space-y-1">
          {insight.suggestions.slice(0, 2).map((suggestion, index) => (
            <div key={index} className="flex items-start space-x-2">
              <div className="w-1 h-1 bg-predictive-magenta rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-xs text-intelligent-gray-600">{suggestion}</span>
            </div>
          ))}
        </div>
      )}
    </PredictiveSurface>
  );
};

const RecentActivityFeed: React.FC<{ leads: Lead[] }> = ({ leads }) => {
  // Mock recent activities for now
  const activities = [
    { type: 'call', lead: leads[0]?.name, time: '2 hours ago', outcome: 'Left voicemail' },
    { type: 'email', lead: leads[1]?.name, time: '4 hours ago', outcome: 'Opened email' },
    { type: 'meeting', lead: leads[2]?.name, time: '1 day ago', outcome: 'Scheduled showing' }
  ];

  return (
    <div className="space-y-3">
      {activities.map((activity, index) => (
        <PredictiveSurface key={index} variant="default" className="p-4 border border-intelligent-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <AnticipatoryCopywrite variant="conversational-body" className="text-intelligent-gray-800">
                {activity.type.toUpperCase()} - {activity.lead}
              </AnticipatoryCopywrite>
              <AnticipatoryCopywrite variant="conversational-body" className="text-intelligent-gray-600 text-sm">
                {activity.outcome}
              </AnticipatoryCopywrite>
            </div>
            <span className="text-xs text-intelligent-gray-600">{activity.time}</span>
          </div>
        </PredictiveSurface>
      ))}
    </div>
  );
};
```

SUCCESS CRITERIA:

- CRM functionality captures and manages leads effectively
- Lead scoring algorithm provides accurate prioritization
- Activity tracking maintains complete interaction history
- Insights generation provides actionable recommendations
- UI provides intuitive lead management with anticipatory design
- Integration with chat system works seamlessly
- Analytics provide valuable business intelligence
- Performance remains responsive with large lead volumes

```

## MESH PROMPT 8: PRODUCTION DEPLOYMENT & FINAL OPTIMIZATION
**Duration:** Week 8 | **Dependencies:** MESH PROMPT 7

```

Building upon the CRM Integration, implement final production deployment, comprehensive testing, performance optimization, and launch preparation for PropertyGPT.

TASK 1: Production Infrastructure Setup
Create deployment/production-config.ts:

```typescript
interface ProductionConfig {
  vercel: {
    projectId: string;
    orgId: string;
    framework: 'nextjs';
    buildCommand: 'npm run build';
    outputDirectory: '.next';
    installCommand: 'npm ci';
    devCommand: 'npm run dev';
    regions: ['sfo1', 'iad1']; // Multi-region deployment
  };
  render: {
    services: {
      api: {
        type: 'web_service';
        runtime: 'node';
        buildCommand: 'npm run build:server';
        startCommand: 'npm run start:server';
        plan: 'pro'; // Production plan
        region: 'oregon';
        scaling: {
          minInstances: 2;
          maxInstances: 10;
          targetMemoryPercent: 70;
          targetCPUPercent: 70;
        };
      };
      database: {
        type: 'postgresql';
        plan: 'pro';
        version: '15';
        region: 'oregon';
        highAvailability: true;
        backup: 'daily';
      };
      redis: {
        type: 'redis';
        plan: 'pro';
        region: 'oregon';
        maxMemory: '1gb';
        evictionPolicy: 'allkeys-lru';
      };
    };
  };
  monitoring: {
    uptime: 'pingdom';
    performance: 'newrelic';
    errors: 'sentry';
    logs: 'logtail';
  };
}

export const productionConfig: ProductionConfig = {
  // Configuration details here
};
```

Create deployment/vercel-config.json:

```json
{
  "version": 2,
  "framework": "nextjs",
  "regions": ["sfo1", "iad1"],
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/next@latest"
    }
  ],
  "env": {
    "NEXT_PUBLIC_SUPABASE_URL": "@supabase-url",
    "NEXT_PUBLIC_SUPABASE_ANON_KEY": "@supabase-anon-key",
    "OPENAI_API_KEY": "@openai-api-key",
    "REAL_ESTATE_API_KEY": "@real-estate-api-key",
    "SENDGRID_API_KEY": "@sendgrid-api-key",
    "TWILIO_ACCOUNT_SID": "@twilio-account-sid",
    "TWILIO_AUTH_TOKEN": "@twilio-auth-token",
    "REDIS_URL": "@redis-url",
    "NEXTAUTH_SECRET": "@nextauth-secret"
  },
  "functions": {
    "app/api/**/*.ts": {
      "maxDuration": 30
    }
  },
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        },
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://*.supabase.co https://api.openai.com;"
        }
      ]
    }
  ],
  "rewrites": [
    {
      "source": "/api/(.*)",
      "destination": "/api/$1"
    }
  ]
}
```

TASK 2: Comprehensive Testing Suite
Create tests/integration/complete-user-flow.test.ts:

```typescript
import { test, expect } from '@playwright/test';

test.describe('Complete PropertyGPT User Flow', () => {
  test('End-to-end agent workflow', async ({ page }) => {
    // Authentication
    await page.goto('/auth/signin');
    await page.fill('[data-testid="email"]', 'test@example.com');
    await page.fill('[data-testid="password"]', 'password123');
    await page.click('[data-testid="signin-button"]');
    
    // Verify dashboard loads
    await expect(page.locator('[data-testid="dashboard"]')).toBeVisible();
    
    // Test chat interface
    await page.click('[data-testid="chat-tab"]');
    await page.fill('[data-testid="chat-input"]', 'Find me 3 bedroom homes under $800k in Santa Monica');
    await page.click('[data-testid="send-button"]');
    
    // Wait for AI response
    await expect(page.locator('[data-testid="ai-response"]')).toBeVisible({ timeout: 10000 });
    
    // Verify property results
    await expect(page.locator('[data-testid="property-card"]')).toHaveCount(3, { timeout: 15000 });
    
    // Test saved search
    await page.click('[data-testid="save-search-button"]');
    await page.fill('[data-testid="search-name"]', 'Santa Monica Properties');
    await page.click('[data-testid="enable-notifications"]');
    await page.click('[data-testid="save-button"]');
    
    // Verify saved search created
    await page.click('[data-testid="saved-searches-tab"]');
    await expect(page.locator('[data-testid="saved-search-card"]')).toContainText('Santa Monica Properties');
    
    // Test compliance Q&A
    await page.click('[data-testid="compliance-tab"]');
    await page.fill('[data-testid="compliance-question"]', 'What are dual agency disclosure requirements?');
    await page.click('[data-testid="ask-button"]');
    
    // Wait for compliance response
    await expect(page.locator('[data-testid="compliance-answer"]')).toBeVisible({ timeout: 10000 });
    await expect(page.locator('[data-testid="compliance-citations"]')).toBeVisible();
    
    // Test CRM lead creation
    await page.click('[data-testid="crm-tab"]');
    await page.click('[data-testid="add-lead-button"]');
    await page.fill('[data-testid="lead-name"]', 'John Doe');
    await page.fill('[data-testid="lead-email"]', 'john@example.com');
    await page.fill('[data-testid="lead-phone"]', '555-1234');
    await page.click('[data-testid="create-lead-button"]');
    
    // Verify lead created
    await expect(page.locator('[data-testid="lead-card"]')).toContainText('John Doe');
    
    // Test performance
    const performanceMetrics = await page.evaluate(() => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      return {
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0
      };
    });
    
    expect(performanceMetrics.loadTime).toBeLessThan(3000); // 3 second load time
    expect(performanceMetrics.firstPaint).toBeLessThan(1500); // 1.5 second first paint
  });

  test('Mobile responsiveness', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 }); // iPhone SE
    
    await page.goto('/dashboard');
    
    // Verify mobile navigation
    await expect(page.locator('[data-testid="mobile-menu-button"]')).toBeVisible();
    
    // Test chat on mobile
    await page.click('[data-testid="mobile-menu-button"]');
    await page.click('[data-testid="chat-link"]');
    
    await page.fill('[data-testid="chat-input"]', 'Show me condos in Marina del Rey');
    await page.click('[data-testid="send-button"]');
    
    // Verify mobile chat response
    await expect(page.locator('[data-testid="ai-response"]')).toBeVisible({ timeout: 10000 });
    
    // Test mobile property cards
    await expect(page.locator('[data-testid="property-card"]')).toBeVisible();
  });

  test('Accessibility compliance', async ({ page }) => {
    await page.goto('/dashboard');
    
    // Test keyboard navigation
    await page.keyboard.press('Tab');
    await expect(page.locator(':focus')).toBeVisible();
    
    // Test screen reader content
    const ariaLabels = await page.locator('[aria-label]').count();
    expect(ariaLabels).toBeGreaterThan(10);
    
    // Test color contrast (would need axe-core integration)
    await page.addScriptTag({ url: 'https://unpkg.com/axe-core@4.6.3/axe.min.js' });
    
    const axeResults = await page.evaluate(() => {
      return new Promise((resolve) => {
        (window as any).axe.run((err: any, results: any) => {
          resolve(results);
        });
      });
    });
    
    expect((axeResults as any).violations).toHaveLength(0);
  });
});
```

Create tests/performance/load-testing.ts:

```typescript
import { test, expect } from '@playwright/test';

test.describe('Performance & Load Testing', () => {
  test('API response times under load', async ({ page }) => {
    const responseTimeThresholds = {
      chat: 2000, // 2 seconds
      propertySearch: 3000, // 3 seconds
      compliance: 1500, // 1.5 seconds
      crm: 1000 // 1 second
    };

    // Test chat API performance
    const chatStart = Date.now();
    const chatResponse = await page.request.post('/api/chat', {
      data: {
        message: "Find me properties in Beverly Hills",
        sessionId: "test-session"
      }
    });
    const chatTime = Date.now() - chatStart;
    
    expect(chatResponse.status()).toBe(200);
    expect(chatTime).toBeLessThan(responseTimeThresholds.chat);

    // Test property search performance
    const searchStart = Date.now();
    const searchResponse = await page.request.post('/api/properties/search', {
      data: {
        location: { city: "Beverly Hills", state: "CA" },
        price_range: { min: 500000, max: 2000000 }
      }
    });
    const searchTime = Date.now() - searchStart;
    
    expect(searchResponse.status()).toBe(200);
    expect(searchTime).toBeLessThan(responseTimeThresholds.propertySearch);

    // Test compliance API performance
    const complianceStart = Date.now();
    const complianceResponse = await page.request.post('/api/compliance', {
      data: {
        question: "What are disclosure requirements?",
        jurisdiction: "california"
      }
    });
    const complianceTime = Date.now() - complianceStart;
    
    expect(complianceResponse.status()).toBe(200);
    expect(complianceTime).toBeLessThan(responseTimeThresholds.compliance);
  });

  test('Concurrent user simulation', async ({ browser }) => {
    const contexts = await Promise.all(
      Array.from({ length: 10 }, () => browser.newContext())
    );
    
    const pages = await Promise.all(
      contexts.map(context => context.newPage())
    );

    // Simulate 10 concurrent users
    const concurrentRequests = pages.map(async (page, index) => {
      await page.goto('/dashboard');
      
      // Each user performs different actions
      const actions = [
        () => page.fill('[data-testid="chat-input"]', `Query ${index}`),
        () => page.click('[data-testid="saved-searches-tab"]'),
        () => page.click('[data-testid="compliance-tab"]'),
        () => page.click('[data-testid="crm-tab"]')
      ];
      
      await actions[index % actions.length]();
      
      return page.waitForLoadState('networkidle');
    });

    const startTime = Date.now();
    await Promise.all(concurrentRequests);
    const totalTime = Date.now() - startTime;
    
    // Should handle 10 concurrent users within 5 seconds
    expect(totalTime).toBeLessThan(5000);
    
    // Cleanup
    await Promise.all(contexts.map(context => context.close()));
  });
});
```

TASK 3: Production Monitoring & Analytics
Create src/lib/monitoring/ProductionMonitoring.ts:

```typescript
import { NextRequest } from 'next/server';

interface PerformanceMetrics {
  responseTime: number;
  endpoint: string;
  method: string;
  statusCode: number;
  userId?: string;
  timestamp: number;
}

interface ErrorEvent {
  error: Error;
  context: {
    endpoint: string;
    userId?: string;
    request: any;
  };
  timestamp: number;
}

class ProductionMonitoring {
  private metricsBuffer: PerformanceMetrics[] = [];
  private errorBuffer: ErrorEvent[] = [];
  private readonly bufferSize = 100;

  trackPerformance(metrics: PerformanceMetrics): void {
    this.metricsBuffer.push(metrics);
    
    if (this.metricsBuffer.length >= this.bufferSize) {
      this.flushMetrics();
    }
    
    // Alert on slow responses
    if (metrics.responseTime > 5000) {
      this.sendSlowResponseAlert(metrics);
    }
  }

  trackError(error: ErrorEvent): void {
    this.errorBuffer.push(error);
    
    // Immediate alert for critical errors
    if (this.isCriticalError(error.error)) {
      this.sendCriticalErrorAlert(error);
    }
    
    if (this.errorBuffer.length >= this.bufferSize) {
      this.flushErrors();
    }
  }

  private async flushMetrics(): Promise<void> {
    const metrics = [...this.metricsBuffer];
    this.metricsBuffer = [];
    
    try {
      // Send to analytics service
      await fetch('https://api.newrelic.com/v1/metrics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Api-Key': process.env.NEW_RELIC_API_KEY!
        },
        body: JSON.stringify({
          metrics: metrics.map(m => ({
            name: `propertyGPT.${m.endpoint.replace(/\//g, '.')}.responseTime`,
            value: m.responseTime,
            timestamp: m.timestamp,
            attributes: {
              method: m.method,
              statusCode: m.statusCode,
              userId: m.userId
            }
          }))
        })
      });
    } catch (error) {
      console.error('Failed to flush metrics:', error);
    }
  }

  private async flushErrors(): Promise<void> {
    const errors = [...this.errorBuffer];
    this.errorBuffer = [];
    
    try {
      // Send to Sentry
      await fetch('https://sentry.io/api/hooks/error/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.SENTRY_DSN}`
        },
        body: JSON.stringify({
          errors: errors.map(e => ({
            message: e.error.message,
            stack: e.error.stack,
            context: e.context,
            timestamp: e.timestamp
          }))
        })
      });
    } catch (error) {
      console.error('Failed to flush errors:', error);
    }
  }

  private isCriticalError(error: Error): boolean {
    const criticalPatterns = [
      'Database connection failed',
      'OpenAI API key invalid',
      'Authentication service down',
      'Out of memory'
    ];
    
    return criticalPatterns.some(pattern => 
      error.message.toLowerCase().includes(pattern.toLowerCase())
    );
  }

  private async sendSlowResponseAlert(metrics: PerformanceMetrics): Promise<void> {
    await this.sendAlert({
      type: 'performance',
      severity: 'warning',
      title: `Slow Response: ${metrics.endpoint}`,
      message: `Response time ${metrics.responseTime}ms exceeds threshold`,
      data: metrics
    });
  }

  private async sendCriticalErrorAlert(error: ErrorEvent): Promise<void> {
    await this.sendAlert({
      type: 'error',
      severity: 'critical',
      title: 'Critical System Error',
      message: error.error.message,
      data: error.context
    });
  }

  private async sendAlert(alert: any): Promise<void> {
    try {
      // Send to Slack webhook
      await fetch(process.env.SLACK_WEBHOOK_URL!, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: `🚨 PropertyGPT Alert: ${alert.title}`,
          blocks: [
            {
              type: 'section',
              text: {
                type: 'mrkdwn',
                text: `*${alert.title}*\n${alert.message}`
              }
            },
            {
              type: 'context',
              elements: [
                {
                  type: 'mrkdwn',
                  text: `Severity: ${alert.severity} | Time: ${new Date().toISOString()}`
                }
              ]
            }
          ]
        })
      });
    } catch (error) {
      console.error('Failed to send alert:', error);
    }
  }
}

export const productionMonitoring = new ProductionMonitoring();

// Performance tracking middleware
export function withPerformanceTracking(
  handler: (req: NextRequest) => Promise<Response>
) {
  return async (req: NextRequest): Promise<Response> => {
    const startTime = Date.now();
    const endpoint = req.nextUrl.pathname;
    const method = req.method;
    
    try {
      const response = await handler(req);
      
      const metrics: PerformanceMetrics = {
        responseTime: Date.now() - startTime,
        endpoint,
        method,
        statusCode: response.status,
        timestamp: Date.now()
      };
      
      productionMonitoring.trackPerformance(metrics);
      
      return response;
    } catch (error) {
      const errorEvent: ErrorEvent = {
        error: error as Error,
        context: {
          endpoint,
          request: {
            method,
            url: req.url,
            headers: Object.fromEntries(req.headers.entries())
          }
        },
        timestamp: Date.now()
      };
      
      productionMonitoring.trackError(errorEvent);
      throw error;
    }
  };
}
```

TASK 4: Security Hardening & Final Optimization
Create src/lib/security/ProductionSecurity.ts:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { rateLimit } from '@/lib/middleware/rateLimiter';

interface SecurityConfig {
  rateLimit: {
    windowMs: number;
    max: number;
  };
  cors: {
    origin: string[];
    methods: string[];
    allowedHeaders: string[];
  };
  helmet: {
    contentSecurityPolicy: {
      directives: Record<string, string[]>;
    };
  };
}

const securityConfig: SecurityConfig = {
  rateLimit: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
  },
  cors: {
    origin: [
      'https://propertygpt.vercel.app',
      'https://www.propertygpt.com',
      process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : ''
    ].filter(Boolean),
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
  },
  helmet: {
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-eval'", "'unsafe-inline'", "https://vercel.live"],
        styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
        fontSrc: ["'self'", "https://fonts.gstatic.com"],
        imgSrc: ["'self'", "data:", "https:", "blob:"],
        connectSrc: [
          "'self'", 
          "https://*.supabase.co", 
          "https://api.openai.com",
          "https://*.vercel.app"
        ],
        frameSrc: ["'none'"],
        objectSrc: ["'none'"],
        baseUri: ["'self'"],
        formAction: ["'self'"],
        frameAncestors: ["'none'"]
      }
    }
  }
};

export class ProductionSecurity {
  static async validateRequest(request: NextRequest): Promise<NextResponse | null> {
    // Rate limiting
    const rateLimitResult = await rateLimit(request, securityConfig.rateLimit);
    if (rateLimitResult) return rateLimitResult;

    // CSRF protection
    if (this.requiresCSRFProtection(request)) {
      const csrfError = await this.validateCSRF(request);
      if (csrfError) return csrfError;
    }

    // Input validation
    const validationError = await this.validateInput(request);
    if (validationError) return validationError;

    return null; // Request is valid
  }

  static requiresCSRFProtection(request: NextRequest): boolean {
    const mutatingMethods = ['POST', 'PUT', 'DELETE', 'PATCH'];
    return mutatingMethods.includes(request.method);
  }

  static async validateCSRF(request: NextRequest): Promise<NextResponse | null> {
    const token = request.headers.get('x-csrf-token');
    const origin = request.headers.get('origin');
    const referer = request.headers.get('referer');

    // Check origin/referer
    if (!origin && !referer) {
      return NextResponse.json(
        { error: 'Missing origin header' },
        { status: 403 }
      );
    }

    const requestOrigin = origin || (referer ? new URL(referer).origin : '');
    if (!securityConfig.cors.origin.includes(requestOrigin)) {
      return NextResponse.json(
        { error: 'Invalid origin' },
        { status: 403 }
      );
    }

    return null;
  }

  static async validateInput(request: NextRequest): Promise<NextResponse | null> {
    try {
      if (request.headers.get('content-type')?.includes('application/json')) {
        const body = await request.clone().json();
        
        // Check for potential XSS patterns
        const suspiciousPatterns = [
          /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
          /javascript:/gi,
          /on\w+\s*=/gi,
          /data:text\/html/gi
        ];

        const bodyString = JSON.stringify(body);
        for (const pattern of suspiciousPatterns) {
          if (pattern.test(bodyString)) {
            return NextResponse.json(
              { error: 'Invalid input detected' },
              { status: 400 }
            );
          }
        }
      }
    } catch (error) {
      // Invalid JSON
      return NextResponse.json(
        { error: 'Invalid request body' },
        { status: 400 }
      );
    }

    return null;
  }

  static getSecurityHeaders(): Record<string, string> {
    const csp = Object.entries(securityConfig.helmet.contentSecurityPolicy.directives)
      .map(([key, values]) => `${key} ${values.join(' ')}`)
      .join('; ');

    return {
      'Content-Security-Policy': csp,
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
      'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload'
    };
  }
}

// Security middleware for API routes
export function withSecurity(
  handler: (req: NextRequest) => Promise<Response>
) {
  return async (req: NextRequest): Promise<Response> => {
    // Validate request security
    const securityError = await ProductionSecurity.validateRequest(req);
    if (securityError) return securityError;

    // Execute handler
    const response = await handler(req);

    // Add security headers
    const securityHeaders = ProductionSecurity.getSecurityHeaders();
    Object.entries(securityHeaders).forEach(([key, value]) => {
      response.headers.set(key, value);
    });

    return response;
  };
}
```

TASK 5: Performance Optimization & Caching
Create src/lib/optimization/PerformanceOptimizer.ts:

```typescript
import { Redis } from 'ioredis';

interface CacheConfig {
  ttl: number;
  key: string;
  tags: string[];
}

interface OptimizationMetrics {
  cacheHitRate: number;
  averageResponseTime: number;
  errorRate: number;
  memoryUsage: number;
}

class PerformanceOptimizer {
  private redis: Redis;
  private memoryCache: Map<string, { data: any; expires: number }> = new Map();
  private metrics: OptimizationMetrics = {
    cacheHitRate: 0,
    averageResponseTime: 0,
    errorRate: 0,
    memoryUsage: 0
  };

  constructor() {
    this.redis = new Redis(process.env.REDIS_URL!);
    this.startMetricsCollection();
  }

  async cacheSet(key: string, data: any, config: CacheConfig): Promise<void> {
    try {
      // Multi-layer caching
      await Promise.all([
        // Redis cache (distributed)
        this.redis.setex(key, config.ttl, JSON.stringify({
          data,
          tags: config.tags,
          cached_at: Date.now()
        })),
        
        // Memory cache (local)
        this.setMemoryCache(key, data, config.ttl)
      ]);
    } catch (error) {
      console.error('Cache set failed:', error);
    }
  }

  async cacheGet(key: string): Promise<any | null> {
    try {
      // Try memory cache first (fastest)
      const memoryResult = this.getMemoryCache(key);
      if (memoryResult !== null) {
        this.updateCacheHitRate(true);
        return memoryResult;
      }

      // Try Redis cache
      const redisResult = await this.redis.get(key);
      if (redisResult) {
        const parsed = JSON.parse(redisResult);
        
        // Update memory cache
        this.setMemoryCache(key, parsed.data, 300); // 5 minutes
        
        this.updateCacheHitRate(true);
        return parsed.data;
      }

      this.updateCacheHitRate(false);
      return null;
    } catch (error) {
      console.error('Cache get failed:', error);
      this.updateCacheHitRate(false);
      return null;
    }
  }

  private setMemoryCache(key: string, data: any, ttl: number): void {
    // Prevent memory cache from growing too large
    if (this.memoryCache.size > 1000) {
      const oldestKey = this.memoryCache.keys().next().value;
      this.memoryCache.delete(oldestKey);
    }

    this.memoryCache.set(key, {
      data,
      expires: Date.now() + (ttl * 1000)
    });
  }

  private getMemoryCache(key: string): any | null {
    const cached = this.memoryCache.get(key);
    
    if (!cached) return null;
    
    if (Date.now() > cached.expires) {
      this.memoryCache.delete(key);
      return null;
    }
    
    return cached.data;
  }

  async optimizeDatabase(): Promise<void> {
    try {
      // Clean up expired sessions
      await this.cleanupExpiredSessions();
      
      // Optimize frequently accessed queries
      await this.optimizeQueries();
      
      // Update search indexes
      await this.updateSearchIndexes();
      
    } catch (error) {
      console.error('Database optimization failed:', error);
    }
  }

  private async cleanupExpiredSessions(): Promise<void> {
    const expiryDate = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000); // 7 days ago
    
    // Clean up old conversation sessions
    await supabaseAdmin
      .from('conversation_sessions')
      .delete()
      .lt('last_activity', expiryDate.toISOString());
      
    // Clean up old analytics data
    await supabaseAdmin
      .from('user_analytics')
      .delete()
      .lt('created_at', new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString());
  }

  private async optimizeQueries(): Promise<void> {
    // Add indexes for frequently accessed queries
    const indexQueries = [
      'CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_properties_search ON properties USING GIN (to_tsvector(\'english\', address || \' \' || city));',
      'CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_leads_active ON leads (user_id, status) WHERE status IN (\'new\', \'contacted\', \'qualified\');',
      'CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_searches_active ON searches (user_id, is_active) WHERE is_active = true AND notification_enabled = true;'
    ];

    for (const query of indexQueries) {
      try {
        await supabaseAdmin.rpc('execute_sql', { sql: query });
      } catch (error) {
        console.error('Failed to create index:', error);
      }
    }
  }

  async generatePerformanceReport(): Promise<{
    summary: OptimizationMetrics;
    recommendations: string[];
    trends: any[];
  }> {
    const recommendations: string[] = [];
    
    // Analyze cache performance
    if (this.metrics.cacheHitRate < 0.7) {
      recommendations.push('Improve caching strategy - hit rate below 70%');
    }
    
    // Analyze response times
    if (this.metrics.averageResponseTime > 2000) {
      recommendations.push('Optimize slow endpoints - average response time above 2s');
    }
    
    // Analyze error rates
    if (this.metrics.errorRate > 0.01) {
      recommendations.push('Investigate error sources - error rate above 1%');
    }
    
    return {
      summary: this.metrics,
      recommendations,
      trends: await this.getPerformanceTrends()
    };
  }

  private startMetricsCollection(): void {
    setInterval(() => {
      this.collectMetrics();
    }, 60000); // Every minute
  }

  private async collectMetrics(): Promise<void> {
    try {
      // Update memory usage
      const memUsage = process.memoryUsage();
      this.metrics.memoryUsage = memUsage.heapUsed / memUsage.heapTotal;
      
      // Other metrics would be collected from monitoring services
    } catch (error) {
      console.error('Metrics collection failed:', error);
    }
  }
}

export const performanceOptimizer = new PerformanceOptimizer();

// Performance optimization middleware
export function withOptimization(
  handler: (req: NextRequest) => Promise<Response>,
  cacheConfig?: CacheConfig
) {
  return async (req: NextRequest): Promise<Response> => {
    const cacheKey = `${req.method}:${req.nextUrl.pathname}:${req.nextUrl.search}`;
    
    // Try cache for GET requests
    if (req.method === 'GET' && cacheConfig) {
      const cached = await performanceOptimizer.cacheGet(cacheKey);
      if (cached) {
        return new Response(JSON.stringify(cached), {
          headers: {
            'Content-Type': 'application/json',
            'X-Cache': 'HIT'
          }
        });
      }
    }
    
    // Execute handler
    const response = await handler(req);
    
    // Cache successful GET responses
    if (req.method === 'GET' && response.status === 200 && cacheConfig) {
      const responseData = await response.clone().json();
      await performanceOptimizer.cacheSet(cacheKey, responseData, cacheConfig);
    }
    
    response.headers.set('X-Cache', 'MISS');
    return response;
  };
}
```

TASK 6: Launch Preparation & Documentation
Create docs/deployment-guide.md:

```markdown
# PropertyGPT Production Deployment Guide

## Pre-Deployment Checklist

### Infrastructure Setup
- [ ] Vercel project configured with production environment variables
- [ ] Render services provisioned (API, Database, Redis)
- [ ] Domain configured with SSL certificates
- [ ] CDN configured for static assets
- [ ] Monitoring services set up (New Relic, Sentry, Pingdom)

### Security Verification
- [ ] All API keys stored in secure environment variables
- [ ] CORS policies configured for production domains
- [ ] Rate limiting enabled on all endpoints
- [ ] SQL injection protection verified
- [ ] XSS protection implemented
- [ ] CSRF tokens implemented
- [ ] Security headers configured

### Performance Optimization
- [ ] Database indexes created for all frequent queries
- [ ] Redis caching configured for all cacheable endpoints
- [ ] Image optimization enabled
- [ ] Bundle size optimized (<500KB initial load)
- [ ] Core Web Vitals meet thresholds:
  - Largest Contentful Paint (LCP): <2.5s
  - First Input Delay (FID): <100ms
  - Cumulative Layout Shift (CLS): <0.1

### Testing Completion
- [ ] All unit tests passing (>90% coverage)
- [ ] Integration tests passing
- [ ] End-to-end tests passing
- [ ] Performance tests meet requirements
- [ ] Accessibility tests passing (WCAG 2.1 AA)
- [ ] Security tests passing
- [ ] Load testing completed (100 concurrent users)

### Feature Verification
- [ ] Chat interface processes queries accurately (>85%)
- [ ] Property search returns relevant results
- [ ] Saved searches execute and notify correctly
- [ ] Compliance Q&A provides accurate guidance
- [ ] CRM system tracks leads effectively
- [ ] All integrations working (OpenAI, Real Estate API, SendGrid, Twilio)

## Deployment Process

### 1. Environment Setup
```bash
# Set production environment variables in Vercel
vercel env add OPENAI_API_KEY production
vercel env add SUPABASE_SERVICE_ROLE_KEY production
vercel env add REAL_ESTATE_API_KEY production
# ... all other environment variables

# Deploy to production
vercel --prod
```

### 2. Database Migration

```bash
# Run production migrations
npm run db:migrate:prod

# Seed compliance data
npm run db:seed:compliance

# Verify database setup
npm run db:verify:prod
```

### 3. Post-Deployment Verification

```bash
# Run health checks
npm run health:check:prod

# Verify all services
npm run services:verify

# Run smoke tests
npm run test:smoke:prod
```

## Monitoring & Maintenance

### Daily Monitoring

- Check application uptime (should be >99.9%)
- Review error rates (should be <0.1%)
- Monitor response times (should average <2s)
- Verify notification delivery rates (should be >95%)

### Weekly Maintenance

- Review performance metrics
- Update security patches
- Clean up old data
- Optimize cache performance
- Review user feedback and support tickets

### Monthly Tasks

- Update compliance database with new regulations
- Review and optimize database performance
- Conduct security audit
- Review and update documentation
- Plan feature improvements based on usage analytics

## Rollback Procedures

### Immediate Rollback (< 5 minutes)

```bash
# Rollback Vercel deployment
vercel rollback

# Verify rollback successful
curl -f https://propertygpt.com/api/health
```

### Database Rollback (if needed)

```bash
# Restore database from backup
pg_restore --clean --if-exists -d $DATABASE_URL backup.sql

# Verify data integrity
npm run db:verify:rollback
```

## Support & Troubleshooting

### Common Issues

1. **Slow API responses**: Check Redis cache status, database query performance
2. **Authentication errors**: Verify environment variables, check token expiration
3. **Integration failures**: Check third-party service status, API key validity
4. **High memory usage**: Check for memory leaks, optimize caching

### Emergency Contacts

- Technical Lead: [email]
- DevOps Engineer: [email]
- Product Manager: [email]
- Customer Support: [email]

### Service Dependencies

- OpenAI API: <https://status.openai.com/>
- Supabase: <https://status.supabase.com/>
- Vercel: <https://vercel-status.com/>
- Render: <https://status.render.com/>

```

Create docs/user-guide.md:
```markdown
# PropertyGPT User Guide

## Getting Started

PropertyGPT is your AI-powered real estate assistant that helps you:
- Search properties with natural language
- Analyze market trends and conditions
- Get compliance guidance
- Manage leads and client relationships
- Set up automated property alerts

## Core Features

### 1. Conversational Property Search
Simply describe what you're looking for in plain English:
- "Find me 3-bedroom homes under $800k in Santa Monica"
- "Show me luxury condos with ocean views in Manhattan Beach"
- "I need properties for first-time buyers in Pasadena"

**Advanced Search Features:**
- Automatic location detection
- Price range suggestions based on market data
- Property feature filtering
- Market condition insights

### 2. Saved Searches & Alerts
Never miss new properties or price changes:
- Save any search with a custom name
- Set up email and SMS notifications
- Choose notification frequency (immediate, daily, weekly)
- Track search performance over time

### 3. Market Analysis
Get instant market insights:
- Neighborhood price trends
- Days on market statistics
- Inventory level analysis
- Comparative market analysis (CMA)
- Price prediction algorithms

### 4. Compliance Q&A
Get accurate guidance on real estate regulations:
- DRE/NAR/CAR regulation lookup
- Jurisdiction-specific guidance
- Proper citation and source links
- Bookmark important answers
- Regular updates for regulation changes

### 5. CRM Integration
Manage leads efficiently:
- Automatic lead capture from conversations
- Lead scoring and prioritization
- Activity tracking and follow-up reminders
- Property interest tracking
- Conversion probability analysis

## Best Practices

### Effective Search Queries
- Be specific about location, price range, and property features
- Use natural language - no need for complex syntax
- Ask follow-up questions to refine results
- Save successful searches for future monitoring

### Managing Alerts
- Set realistic notification frequencies to avoid spam
- Use specific search criteria to reduce noise
- Regularly review and update saved searches
- Use tags to organize searches by client or project

### Compliance Research
- Always verify critical compliance information with official sources
- Bookmark frequently referenced regulations
- Keep up with regulation updates through notifications
- Use search history to track compliance research patterns

## Tips for Maximum Productivity

1. **Start conversations with context**: Mention if you're working with a specific client or market segment
2. **Use follow-up questions**: Ask for market analysis after property searches
3. **Leverage insights**: Pay attention to AI-generated market insights and recommendations
4. **Organize your data**: Use tags and categories to keep searches and leads organized
5. **Set up workflows**: Create saved searches for different client profiles

## Troubleshooting

### Common Issues
- **No search results**: Try broadening your criteria or checking spelling
- **Slow responses**: Check your internet connection; system may be under high load
- **Missing notifications**: Check spam folder and notification preferences

### Getting Help
- Use the in-app help system for quick answers
- Contact support through the dashboard
- Check the FAQ section for common questions
- Join the user community for tips and best practices

## Privacy & Security

PropertyGPT takes your privacy seriously:
- All conversations are encrypted
- Personal data is stored securely
- Third-party integrations use secure API connections
- You control data sharing preferences
- Regular security audits ensure system integrity

## Updates & New Features

Stay informed about PropertyGPT improvements:
- In-app notifications for new features
- Monthly product update emails
- Feature request submission through dashboard
- Beta testing opportunities for advanced users
```

SUCCESS CRITERIA:

- Production deployment completes without errors
- All health checks pass post-deployment
- Performance benchmarks met under load testing
- Security audit passes all requirements
- User acceptance testing achieves >90% satisfaction
- Documentation complete and user-tested
- Monitoring and alerting systems operational
- Backup and recovery procedures tested
- Support processes established and documented
- Launch readiness verified by stakeholders

This completes the comprehensive 8-phase mesh implementation system for PropertyGPT. The platform is now production-ready with:

✅ **Complete Feature Set**: All requirements from the PRD implemented
✅ **Anticipatory Design**: Sophisticated UI/UX that predicts user needs
✅ **Production Infrastructure**: Scalable, monitored, and secure deployment
✅ **Comprehensive Testing**: >90% test coverage with performance verification
✅ **Security Hardening**: OWASP compliance with security monitoring
✅ **Documentation**: Complete user and technical documentation
✅ **Analytics & Monitoring**: Full observability and performance tracking
✅ **Quality Assurance**: Rigorous testing at every phase gate

The mesh prompt architecture ensures each component builds systematically upon previous implementations, creating a cohesive system without technical debt while maintaining the anticipatory intelligence that differentiates PropertyGPT in the market.

```
