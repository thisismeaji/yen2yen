import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { verifyToken, JwtPayload } from "@/lib/jwt"

/**
 * Helper reusable untuk protected API
 */
export async function getAuthUser(): Promise<JwtPayload> {
  const cookieStore = await cookies()
  const token = cookieStore.get("auth_token")?.value

  if (!token) throw new Error("Unauthorized")

  return verifyToken(token)
}

/**
 * GET /api/auth/me
 */
export async function GET() {
  try {
    const user = await getAuthUser()
    return NextResponse.json({ user })
  } catch (error) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
  }
}
