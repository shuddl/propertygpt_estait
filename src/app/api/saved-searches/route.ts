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
  } catch {
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