# PropertyGPT - Deployment Guide

## Phase 3: Backend Services & Database Architecture - COMPLETED ✅

This guide covers the deployment of the complete backend infrastructure implemented in Phase 3.

## Prerequisites

1. **Supabase Project**
   - Create a new Supabase project at https://supabase.com
   - Note your project URL and API keys

2. **Google OAuth (Optional)**
   - Set up Google OAuth credentials at https://console.developers.google.com
   - Configure authorized redirect URIs

3. **Email Provider (Optional)**
   - Configure SMTP settings for email authentication

## Database Setup

1. **Run the Schema Migration**
   ```bash
   # Copy the SQL from database/schema.sql to your Supabase SQL editor
   # Or use the Supabase CLI:
   supabase db push
   ```

2. **Enable PostGIS Extension**
   - In Supabase Dashboard → Database → Extensions
   - Enable the `postgis` extension

## Environment Configuration

1. **Copy Environment Template**
   ```bash
   cp .env.example .env.local
   ```

2. **Configure Required Variables**
   ```env
   # Required for basic functionality
   SUPABASE_URL=https://your-project.supabase.co
   SUPABASE_ANON_KEY=your-anon-key
   SUPABASE_SERVICE_KEY=your-service-key
   NEXTAUTH_SECRET=your-random-secret-string
   OPENAI_API_KEY=your-openai-key
   ```

3. **Configure Optional Variables**
   ```env
   # For Google OAuth
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   
   # For email authentication
   EMAIL_SERVER_HOST=smtp.gmail.com
   EMAIL_SERVER_PORT=587
   EMAIL_SERVER_USER=your-email@gmail.com
   EMAIL_SERVER_PASSWORD=your-app-password
   EMAIL_FROM=noreply@yourdomain.com
   
   # For production rate limiting
   REDIS_URL=redis://localhost:6379
   ```

## Local Development

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Build and Test**
   ```bash
   npm run build
   npm start
   ```

## Production Deployment

### Vercel Deployment

1. **Configure Environment Variables**
   - Add all required variables to Vercel dashboard
   - Ensure NEXTAUTH_URL matches your production domain

2. **Deploy**
   ```bash
   vercel --prod
   ```

### Other Platforms

- Ensure all environment variables are configured
- Build the application: `npm run build`
- Start the production server: `npm start`

## API Endpoints

The following API endpoints are available:

### Authentication
- `POST /api/auth/signin` - Sign in
- `POST /api/auth/signout` - Sign out
- `GET /api/auth/session` - Get current session

### User Management
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile

### Property Management
- `GET /api/properties/search` - Search properties
- Advanced filtering by price, location, features

### Lead Management
- `GET /api/leads` - Get user leads
- `POST /api/leads` - Create new lead

### Saved Searches
- `GET /api/saved-searches` - Get saved searches
- `POST /api/saved-searches` - Save new search

### Compliance
- `GET /api/compliance/search` - Search regulations

### Chat Interface
- `POST /api/chat` - Conversational AI interface

## Security Features

- **Authentication**: NextAuth.js with multiple providers
- **Authorization**: Row Level Security (RLS) policies
- **Rate Limiting**: Built-in rate limiting for all endpoints
- **Input Validation**: Zod schema validation
- **CORS**: Properly configured for security

## Database Schema

The database includes the following tables:
- `users` - User profiles and preferences
- `properties` - Property listings and details
- `leads` - CRM lead management
- `saved_searches` - User search preferences
- `conversation_messages` - Chat history
- `compliance_qa` - Regulatory compliance data
- `user_events` - Analytics and tracking
- `property_features` - Property amenities
- `market_data` - Real estate market analytics

## Performance Optimizations

- **Database Indexes**: Optimized for common queries
- **Rate Limiting**: Prevents abuse and ensures fair usage
- **Type Safety**: Full TypeScript implementation
- **Caching**: Redis support for production environments

## Troubleshooting

1. **Build Errors**
   - Ensure all environment variables are set
   - Check Supabase connection settings

2. **Authentication Issues**
   - Verify NextAuth configuration
   - Check OAuth provider settings

3. **Database Connection**
   - Confirm Supabase URL and keys
   - Verify RLS policies are correctly configured

## Support

For technical support or questions about the implementation, refer to the code documentation or create an issue in the project repository.