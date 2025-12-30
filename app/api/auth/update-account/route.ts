import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import bcrypt from "bcryptjs"
import { verifyToken } from "@/lib/jwt"
import { connectDB } from "@/lib/mongodb"
import { User } from "@/models/User"

export async function PUT(req: Request) {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get("auth_token")?.value

    if (!token) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      )
    }

    const payload = verifyToken(token)
    const body = await req.json()

    const { name, email, whatsapp, password } = body

    await connectDB()

    const user = await User.findById(payload.id)
    if (!user) {
      return NextResponse.json(
        { message: "User tidak ditemukan" },
        { status: 404 }
      )
    }

    // update data biasa
    user.name = name
    user.email = email
    user.whatsapp = whatsapp

    // 🔥 PENTING: hanya hash jika password diisi
    if (password && password.trim() !== "") {
      const hashedPassword = await bcrypt.hash(password, 10)
      user.password = hashedPassword
    }

    await user.save()

    return NextResponse.json({ message: "Berhasil diperbarui" })
  } catch (error) {
    console.error("UPDATE ACCOUNT ERROR:", error)
    return NextResponse.json(
      { message: "Terjadi kesalahan server" },
      { status: 500 }
    )
  }
}
