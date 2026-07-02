import { NextResponse } from 'next/server'
import { jwtVerify } from 'jose' // Edge-compatible; jsonwebtoken doesn't work in middleware

export async function middleware(req) {
  const token = req.cookies.get('admin_token')?.value

  if (!token) {
    return NextResponse.redirect(new URL('/admin/login', req.url))
  }

  try {
    await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET))
    return NextResponse.next()
  } catch {
    return NextResponse.redirect(new URL('/admin/login', req.url))
  }
}

export const config = {
  matcher: ['/admin/:path*'] // protects every admin page except login itself — see note below
}