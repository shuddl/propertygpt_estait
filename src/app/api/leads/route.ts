import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/middleware/auth';
import { supabaseAdmin } from '@/lib/supabase/client';
import { z } from 'zod';

const createLeadSchema = z.object({
  name: z.string().min(1).max(255),
  email: z.string().email().optional(),
  phone: z.string().optional(),
  source: z.string().default('chat'),
  status: z.enum(['new', 'contacted', 'qualified', 'touring', 'offer', 'closed', 'lost']).default('new'),
  lead_score: z.number().min(0).max(100).default(50),
  budget_min: z.number().optional(),
  budget_max: z.number().optional(),
  preferred_locations: z.array(z.string()).optional(),
  property_types: z.array(z.string()).optional(),
  bedrooms_min: z.number().optional(),
  bathrooms_min: z.number().optional(),
  timeline: z.string().optional(),
  notes: z.string().optional(),
  tags: z.array(z.string()).default([]),
  referral_source: z.string().optional(),
});

export async function GET(request: NextRequest) {
  try {
    const user = await requireAuth(request);
    const { searchParams } = new URL(request.url);
    
    const page = parseInt(searchParams.get('page') || '1');
    const limit = Math.min(parseInt(searchParams.get('limit') || '20'), 100);
    const offset = (page - 1) * limit;
    const status = searchParams.get('status');
    
    let query = supabaseAdmin
      .from('leads')
      .select('*', { count: 'exact' })
      .eq('user_id', user.id);

    if (status) {
      query = query.eq('status', status as 'new' | 'contacted' | 'qualified' | 'touring' | 'offer' | 'closed' | 'lost');
    }

    const { data, error, count } = await query
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1);

    if (error) {
      return NextResponse.json({ error: 'Failed to fetch leads' }, { status: 500 });
    }

    return NextResponse.json({
      leads: data,
      pagination: {
        page,
        limit,
        total: count || 0,
        pages: Math.ceil((count || 0) / limit)
      }
    });
  } catch {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const user = await requireAuth(request);
    const body = await request.json();
    
    const validatedData = createLeadSchema.parse(body);
    
    const { data, error } = await supabaseAdmin
      .from('leads')
      .insert({
        ...validatedData,
        user_id: user.id
      })
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: 'Failed to create lead' }, { status: 500 });
    }

    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid input', details: error.errors }, { status: 400 });
    }
    
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
}