import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/middleware/auth';
import { marketAnalysisService } from '@/lib/services/MarketAnalysisService';
import { databaseService } from '@/lib/services/DatabaseService';
import { z } from 'zod';

const marketAnalysisSchema = z.object({
  location: z.string().min(1),
  timeframe: z.enum(['1m', '3m', '6m', '1y', '2y']).default('6m'),
  property_type: z.string().optional(),
  include_forecasts: z.boolean().default(true)
});

export async function POST(request: NextRequest) {
  try {
    const user = await requireAuth(request);
    const body = await request.json();
    
    const params = marketAnalysisSchema.parse(body);
    
    // Generate market analysis
    const analysis = await marketAnalysisService.generateMarketAnalysis(
      params.location,
      params.timeframe
    );
    
    // Record analytics
    await databaseService.recordAnalytics(user.id, 'market_analysis', {
      location: params.location,
      timeframe: params.timeframe,
      session_id: request.headers.get('x-session-id')
    });
    
    return NextResponse.json(analysis);
    
  } catch (error) {
    console.error('Market analysis error:', error);

    if (error instanceof Error && error.message === 'Authentication required') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid parameters', details: error.errors },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: 'Market analysis failed' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    await requireAuth(request);
    const { searchParams } = new URL(request.url);
    
    const location = searchParams.get('location');
    if (!location) {
      return NextResponse.json(
        { error: 'Location parameter is required' },
        { status: 400 }
      );
    }
    
    const timeframe = searchParams.get('timeframe') || '6m';
    
    const analysis = await marketAnalysisService.generateMarketAnalysis(location, timeframe);
    
    return NextResponse.json(analysis);
    
  } catch (error) {
    console.error('Market analysis error:', error);

    if (error instanceof Error && error.message === 'Authentication required') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    return NextResponse.json(
      { error: 'Market analysis failed' },
      { status: 500 }
    );
  }
}