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
  } catch {
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