# PropertyGPT - Anticipatory Real Estate Intelligence

PropertyGPT is an advanced AI-powered real estate platform that predicts user needs through sophisticated design patterns and provides intelligent insights for real estate professionals.

## 🚀 Features

- **Anticipatory Design System**: Asymmetric layouts with predictive intelligence
- **Conversational AI Interface**: Natural language property search and analysis
- **Comprehensive Database**: Full real estate data management with Supabase
- **Authentication System**: Secure user management with NextAuth.js
- **Market Analytics**: Real-time market insights and trends
- **Compliance Engine**: Regulatory guidance and compliance checking
- **CRM Integration**: Lead management and client relationship tools
- **Rate Limiting**: Built-in security and abuse prevention

## 🎨 Design Philosophy

PropertyGPT implements anticipatory design principles:

- **Predict Before Request**: Interface anticipates user needs before they're expressed
- **Asymmetric Intelligence**: Off-center layouts create visual tension and guide attention
- **Monochromatic Sophistication**: Black/white contrast with surgical magenta accents
- **Conversational Surfaces**: White areas as active dialogue spaces

## 🛠️ Technology Stack

- **Framework**: Next.js 15+ with App Router
- **Language**: TypeScript with strict mode
- **Styling**: Tailwind CSS with custom design tokens
- **Database**: PostgreSQL with Supabase
- **Authentication**: NextAuth.js with multiple providers
- **AI Integration**: OpenAI GPT-4 for conversational intelligence
- **Testing**: Jest with React Testing Library

## 📦 Project Structure

```
src/
├── components/
│   ├── design-system/     # Core anticipatory design components
│   ├── chat/             # Conversational interface
│   ├── property/         # Property management
│   ├── market/           # Market analysis
│   ├── compliance/       # Regulatory compliance
│   └── crm/             # Customer relationship management
├── lib/
│   ├── types/           # TypeScript definitions
│   ├── services/        # Business logic
│   ├── hooks/           # React hooks
│   └── utils/           # Utility functions
└── app/
    ├── api/             # API routes
    └── (pages)/         # App router pages
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database (Supabase recommended)
- OpenAI API key

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd propertygpt_estait
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in the required environment variables:
   - `SUPABASE_URL` - Your Supabase project URL
   - `SUPABASE_ANON_KEY` - Your Supabase anonymous key
   - `SUPABASE_SERVICE_KEY` - Your Supabase service role key
   - `OPENAI_API_KEY` - Your OpenAI API key
   - `NEXTAUTH_SECRET` - Random secret for NextAuth

4. **Set up the database**
   ```bash
   # Copy the SQL from database/schema.sql to your Supabase SQL editor
   # Or use the Supabase CLI if configured
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open [http://localhost:3000](http://localhost:3000)** to see the application

## 🧪 Testing

Run the test suite to ensure everything is working correctly:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## 🔧 Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
npm test             # Run test suite
```

## 📋 Implementation Phases

- [x] **Phase 1**: Foundation & Anticipatory Design System
- [x] **Phase 2**: Conversational Interface with Intelligence Engine
- [x] **Phase 3**: Backend Services & Database Architecture
- [ ] **Phase 4**: Property Intelligence Engine
- [ ] **Phase 5**: Market Analytics Dashboard
- [ ] **Phase 6**: User Experience & Workflow Optimization
- [ ] **Phase 7**: Compliance & Regulatory Engine
- [ ] **Phase 8**: CRM & Lead Management System

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Self-Hosted

1. Build the application: `npm run build`
2. Start the production server: `npm start`
3. Ensure all environment variables are configured

## 📚 Documentation

- [Anticipatory Design Guide](./instructions/anticipatory-design.md)
- [Deployment Guide](./DEPLOYMENT.md)
- [Development Guide](./CLAUDE.md)

## 🤝 Contributing

1. Follow the anticipatory design principles
2. Maintain TypeScript strict mode
3. Write comprehensive tests
4. Follow existing code patterns
5. Update documentation as needed

## 📄 License

This project is proprietary and confidential.

## 🆘 Support

For development support and questions, refer to the documentation in the `/instructions` directory or create an issue in the project repository.