import { NextResponse } from 'next/server';
import { getPositions, createPosition } from '@/lib/trading/positions';

export async function GET() {
  try {
    const positions = await getPositions();
    return NextResponse.json(positions);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch positions' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const position = await request.json();
    const newPosition = await createPosition(position);
    return NextResponse.json(newPosition);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create position' },
      { status: 500 }
    );
  }
}