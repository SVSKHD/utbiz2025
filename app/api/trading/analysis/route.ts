import { NextResponse } from 'next/server';
import { analyzeTrade } from '@/lib/trading/analysis';

export async function POST(request: Request) {
  try {
    const { symbol, timeframe } = await request.json();
    
    const analysis = await analyzeTrade({ symbol, timeframe });
    
    return NextResponse.json(analysis);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to analyze trade' },
      { status: 500 }
    );
  }
}