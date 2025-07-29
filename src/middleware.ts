import { NextResponse, type NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || 'your-super-secret-key-that-is-at-least-32-bytes-long');

async function verifyJWT(token: string) {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return payload;
  } catch (error) {
    return null;
  }
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const sessionCookie = request.cookies.get('session');

  // If trying to access login page with a valid session, redirect to dashboard
  if (pathname === '/admin/login') {
    if (sessionCookie) {
        const sessionPayload = await verifyJWT(sessionCookie.value);
        if (sessionPayload) {
            return NextResponse.redirect(new URL('/admin/dashboard', request.url));
        }
    }
    return NextResponse.next();
  }
  
  // For all other admin pages, protect them
  if (pathname.startsWith('/admin')) {
    if (!sessionCookie) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    const sessionPayload = await verifyJWT(sessionCookie.value);

    if (!sessionPayload) {
      const response = NextResponse.redirect(new URL('/admin/login', request.url));
      response.cookies.delete('session');
      return response;
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
