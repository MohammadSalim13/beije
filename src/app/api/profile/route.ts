import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const authHeader = req.headers.get('authorization');

  if (authHeader === 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9') {
    return NextResponse.json({
      success: true,
      data: {
        _id: '1b51577d3548e481f8855106b14ea31f',
        profileInfo: {
          firstName: 'beije',
          lastName: 'website',
          birthDate: '1994-10-26',
          email: 'salar@beije.co',
          passwordHash: '8b4bae5ca35b06d99597a4f813d27c9e',
        },
      },
    });
  }

  return NextResponse.json({ success: false, message: 'Not authorized' }, { status: 401 });
}
