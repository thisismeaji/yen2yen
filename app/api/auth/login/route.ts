import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"

import { connectDB } from "@/lib/mongodb"
import { User } from "@/models/User"
import { signToken } from "@/lib/jwt"

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json()

    if (!email || !password) {
      return NextResponse.json(
        { message: "Email dan password wajib diisi" },
        { status: 400 }
      )
    }

    await connectDB()

    const user = await User.findOne({ email })
    if (!user) {
      return NextResponse.json(
        { message: "Email atau password salah" },
        { status: 401 }
      )
    }

    const isValidPassword = await bcrypt.compare(password, user.password)
    if (!isValidPassword) {
      return NextResponse.json(
        { message: "Email atau password salah" },
        { status: 401 }
      )
    }

    // ✅ JWT TANPA ROLE
    const token = signToken({
      id: user._id.toString(),
      email: user.email,
    })

    const response = NextResponse.json({
      message: "Login berhasil",
      user: {
        id: user._id.toString(),
        name: user.name,
        email: user.email,
        whatsapp: user.whatsapp,
      },
    })

    response.cookies.set("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 hari
    })

    return response
  } catch (error) {
    console.error("LOGIN ERROR:", error)
    return NextResponse.json(
      { message: "Terjadi kesalahan server" },
      { status: 500 }
    )
  }
}
