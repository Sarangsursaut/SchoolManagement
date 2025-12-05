// src/app/api/health/route.ts
import { connectDB } from '@/src/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectDB();

    return NextResponse.json({
      status: 'ok',
      message: 'API + DB working hello',
    });
  } catch (error) {
    console.error('Health check failed:', error);
    return NextResponse.json(
      { status: 'error', message: 'DB connection failed' },
      { status: 500 },
    );
  }
}
