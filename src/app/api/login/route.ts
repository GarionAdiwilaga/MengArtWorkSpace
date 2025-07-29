import { NextResponse } from 'next/server';
import { SignJWT } from 'jose';
import { cookies } from 'next/headers';

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || 'your-super-secret-key-that-is-at-least-32-bytes-long');

export async function POST(request: Request) {
  const { email, password } = await request.json();

  if (email === 'admin@example.com' && password === 'password') {
    const expires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours
    const session = await new SignJWT({ email, isAdmin: true })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('24h')
      .sign(JWT_SECRET);

    cookies().set('session', session, { expires, httpOnly: true });

    return NextResponse.json({ message: 'Login successful' });
  } else {
    return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
  }
}
