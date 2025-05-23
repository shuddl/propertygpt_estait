import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/middleware/auth';
import { supabaseAdmin } from '@/lib/supabase/client';
import { z } from 'zod';

const searchComplianceSchema = z.object({
  query: z.string().min(1).max(500),
  jurisdiction: z.string().optional(),
  category: z.string().optional(),
  limit: z.number().min(1).max(50).default(10)
});

export async function GET(request: NextRequest) {
  try {
    const user = await requireAuth(request);
    const { searchParams } = new URL(request.url);
    
    const searchData = {
      query: searchParams.get('query') || '',
      jurisdiction: searchParams.get('jurisdiction'),
      category: searchParams.get('category'),
      limit: parseInt(searchParams.get('limit') || '10')
    };

    const validatedData = searchComplianceSchema.parse(searchData);
    
    let query = supabaseAdmin
      .from('compliance_qa')
      .select(`
        *,
        compliance_regulations!inner(
          regulation_code,
          title,
          organization,
          source_url
        )
      `)
      .textSearch('search_keywords', validatedData.query.split(' ').join(' | '));

    if (validatedData.jurisdiction) {
      query = query.eq('jurisdiction', validatedData.jurisdiction);
    }

    if (validatedData.category) {
      query = query.eq('category', validatedData.category);
    }

    const { data, error } = await query
      .order('confidence_score', { ascending: false })
      .limit(validatedData.limit);

    if (error) {
      return NextResponse.json({ error: 'Failed to search compliance' }, { status: 500 });
    }

    // Track search analytics
    try {
      await supabaseAdmin
        .from('user_analytics')
        .insert({
          user_id: user.id,
          event_type: 'compliance_search',
          event_category: 'search',
          event_data: {
            query: validatedData.query,
            jurisdiction: validatedData.jurisdiction,
            category: validatedData.category,
            results_count: data?.length || 0
          }
        });
    } catch (analyticsError) {
      console.error('Failed to track compliance search:', analyticsError);
    }

    return NextResponse.json({
      results: data || [],
      query: validatedData.query,
      total: data?.length || 0
    });
  } catch (error) {
    if (error instanceof Error && error.message === 'Authentication required') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid search parameters', details: error.errors }, { status: 400 });
    }

    return NextResponse.json({ error: 'Failed to search compliance' }, { status: 500 });
  }
}