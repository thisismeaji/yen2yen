import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"

import { connectDB } from "@/lib/mongodb"
import { User } from "@/models/User"

export async function POST(req: Request) {
  try {
    const { name, email, password, role } = await req.json()

    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "Data tidak lengkap" },
        { status: 400 }
      )
    }

    await connectDB()

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
      role: role?.toLowerCase() || "staff",
    })

    return NextResponse.json(
      { message: "Akun berhasil dibuat" },
      { status: 201 }
    )
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { message: "Terjadi kesalahan server" },
      { status: 500 }
    )
  }
}
