import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/middleware/auth';
import { realEstateAPIClient } from '@/lib/services/RealEstateAPIClient';
import { databaseService } from '@/lib/services/DatabaseService';

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

    if (error instanceof Error && error.message === 'Authentication required') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    return NextResponse.json(
      { error: 'Failed to get property details' },
      { status: 500 }
    );
  }
}