import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { verifyToken } from "@/lib/jwt"
import { connectDB } from "@/lib/mongodb"
import { User } from "@/models/User"

export async function GET() {
  try {
    // ✅ cookies() HARUS di-await
    const cookieStore = await cookies()
    const token = cookieStore.get("auth_token")?.value

    if (!token) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      )
    }

    const payload = verifyToken(token)

    await connectDB()

    const user = await User.findById(payload.id).select(
      "name email whatsapp"
    )

    if (!user) {
      return NextResponse.json(
        { message: "User tidak ditemukan" },
        { status: 404 }
      )
    }

    return NextResponse.json({
      user: {
        id: user._id.toString(),
        name: user.name,
        email: user.email,
        whatsapp: user.whatsapp,
      },
    })
  } catch (error) {
    console.error("AUTH_ME_ERROR:", error)

    return NextResponse.json(
      { message: "Unauthorized" },
      { status: 401 }
    )
  }
}
