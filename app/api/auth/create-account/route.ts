import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"

import { connectDB } from "@/lib/mongodb"
import { User } from "@/models/User"

export async function POST(req: Request) {
  try {
    const { name, email, password, whatsapp } = await req.json()

    // 🔒 validasi
    if (!name || !email || !password || !whatsapp) {
      return NextResponse.json(
        { message: "Semua data wajib diisi" },
        { status: 400 }
      )
    }

    await connectDB()

    // cek email
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return NextResponse.json(
        { message: "Email sudah terdaftar" },
        { status: 409 }
      )
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    await User.create({
      name,
      email,
      password: hashedPassword,
      whatsapp,
    })

    return NextResponse.json(
      { message: "Akun berhasil dibuat" },
      { status: 201 }
    )
  } catch (error) {
    console.error("CREATE ACCOUNT ERROR:", error)
    return NextResponse.json(
      { message: "Terjadi kesalahan server" },
      { status: 500 }
    )
  }
}
