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

// Keep existing GET endpoint for backward compatibility
export async function GET(request: NextRequest) {
  try {
    await requireAuth(request);
    const { searchParams } = new URL(request.url);
    
    // Convert GET params to POST format
    const body = {
      location: {
        city: searchParams.get('city') || undefined,
        state: searchParams.get('state') || undefined,
        zip_code: searchParams.get('zip_code') || undefined,
        radius: searchParams.get('radius') ? parseFloat(searchParams.get('radius')!) : undefined
      },
      price_range: {
        min: searchParams.get('price_min') ? parseFloat(searchParams.get('price_min')!) : undefined,
        max: searchParams.get('price_max') ? parseFloat(searchParams.get('price_max')!) : undefined
      },
      bedrooms: {
        min: searchParams.get('bedrooms_min') ? parseInt(searchParams.get('bedrooms_min')!) : undefined
      },
      bathrooms: {
        min: searchParams.get('bathrooms_min') ? parseFloat(searchParams.get('bathrooms_min')!) : undefined
      },
      limit: parseInt(searchParams.get('limit') || '20'),
      offset: parseInt(searchParams.get('offset') || '0')
    };

    const searchResults = await realEstateAPIClient.searchProperties(body);
    
    return NextResponse.json({
      properties: searchResults.properties,
      total: searchResults.total,
      insights: searchResults.insights
    });
    
  } catch (error) {
    console.error('Property search error:', error);
    return NextResponse.json(
      { error: 'Property search failed' },
      { status: 500 }
    );
  }
}