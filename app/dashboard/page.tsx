"use client"

import { useEffect, useState } from "react"
import { toast, Toaster } from "sonner"
import { BookingStats } from "@/components/booking/booking-stats"
import { Booking, PaymentStatus } from "@/components/booking/types"

export default function BookingPage() {
  const [bookings, setBookings] = useState<Booking[]>([])
  const [loading, setLoading] = useState(true)

  /* ================= FETCH BOOKINGS ================= */
  const fetchBookings = async () => {
    try {
      const res = await fetch("/api/booking")
      if (!res.ok) throw new Error()
      const data = await res.json()

      const mapped: Booking[] = data.map((item: any) => ({
        id: item._id,
        patient: item.name,
        phone: item.phone,
        email: item.email,
        location: item.location,
        therapist: item.therapist,
        datetime: `${item.date}T${item.time}`,
        description: item.notes || "-",
        paymentStatus: item.paymentStatus || "Belum Lunas",
      }))

      setBookings(mapped)
    } catch {
      toast.error("Gagal memuat data booking")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchBookings()
  }, [])

  /* ================= COUNTS ================= */
  const counts = {
    all: bookings.length,
    Lunas: bookings.filter(b => b.paymentStatus === "Lunas").length,
    "Belum Lunas": bookings.filter(b => b.paymentStatus === "Belum Lunas").length,
    DP: bookings.filter(b => b.paymentStatus === "DP").length,
  }

  return (
    <div className="flex flex-col gap-6">
      <Toaster richColors position="top-right" />

      {loading ? (
        <p className="text-sm text-muted-foreground">
          Memuat data booking...
        </p>
      ) : (
        <BookingStats
          totalToday={bookings.length}
          pending={counts["Belum Lunas"]}
          completed={counts.Lunas}
          cancelled={0}
        />
      )}
    </div>
  )
}
