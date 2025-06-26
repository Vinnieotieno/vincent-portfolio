import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    host: process.env.EMAIL_SERVER_HOST,
    port: process.env.EMAIL_SERVER_PORT,
    user: process.env.EMAIL_SERVER_USER ? "***configured***" : "not configured",
    password: process.env.EMAIL_SERVER_PASSWORD ? "***configured***" : "not configured",
    from: process.env.EMAIL_FROM,
    secure: process.env.EMAIL_SERVER_SECURE,
  })
} 