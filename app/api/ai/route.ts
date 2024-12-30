import { NextResponse } from 'next/server';
import { processAiQuery } from '@/lib/ai';

export async function POST(request: Request) {
  try {
    const { query } = await request.json();
    
    const response = await processAiQuery(query);
    
    return NextResponse.json({ response });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process AI query' },
      { status: 500 }
    );
  }
}