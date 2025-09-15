import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body;

    if (email === 'salar@beije.co' && password === 'beijeApp') {
      return NextResponse.json({
        success: true,
        data: {
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
        },
      });
    }

    return NextResponse.json({ success: false, message: 'wrong password' }, { status: 401 });
  } catch (_) {
    return NextResponse.json({ success: false, message: 'Invalid request' }, { status: 400 });
  }
}
