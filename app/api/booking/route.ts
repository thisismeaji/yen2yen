import { NextResponse } from "next/server"
import { connectDB } from "@/lib/mongodb"
import { Booking } from "@/models/Booking"

/* ================= POST ================= */
export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, phone, email, location, therapist, date, time, notes } = body

    if (!name || !phone || !email || !location || !therapist || !date || !time) {
      return NextResponse.json(
        { message: "Data booking tidak lengkap" },
        { status: 400 }
      )
    }

    await connectDB()

    const booking = await Booking.create({
      name,
      phone,
      email,
      location,
      therapist,
      date,
      time,
      notes,
    })

    return NextResponse.json({ booking }, { status: 201 })
  } catch (error) {
    console.error("BOOKING_POST_ERROR:", error)
    return NextResponse.json(
      { message: "Terjadi kesalahan server" },
      { status: 500 }
    )
  }
}

/* ================= GET ================= */
export async function GET() {
  try {
    await connectDB()
    const bookings = await Booking.find().sort({ createdAt: -1 })
    return NextResponse.json(bookings)
  } catch (error) {
    console.error("BOOKING_GET_ERROR:", error)
    return NextResponse.json(
      { message: "Gagal mengambil data booking" },
      { status: 500 }
    )
  }
}
