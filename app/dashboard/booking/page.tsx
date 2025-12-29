"use client"

import { useMemo, useState } from "react"
import { bookings as rawBookings } from "@/components/booking/data"
import { Booking, PaymentStatus } from "@/components/booking/types"

import { BookingStats } from "@/components/booking/booking-stats"
import { BookingFilters } from "@/components/booking/booking-filters"
import { BookingTable } from "@/components/booking/booking-table"
import { BookingDetailSheet } from "@/components/booking/booking-detail-sheet"
import { BookingCreateSheet } from "@/components/booking/booking-create-sheet"
import { BookingRescheduleSheet } from "@/components/booking/booking-reschedule-sheet"
import { BookingCancelDialog } from "@/components/booking/booking-cancel-dialog"

export default function BookingPage() {
  const [status, setStatus] = useState<PaymentStatus | "all">("all")
  const [search, setSearch] = useState("")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")
  const [sortBy, setSortBy] = useState<"date" | "time" | "id">("date")

  const [createOpen, setCreateOpen] = useState(false)
  const [detailOpen, setDetailOpen] = useState(false)
  const [rescheduleOpen, setRescheduleOpen] = useState(false)
  const [cancelOpen, setCancelOpen] = useState(false)

  const [bookings, setBookings] = useState<Booking[]>(rawBookings)
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null)
  const [bookingToCancel, setBookingToCancel] = useState<Booking | null>(null)

  const filteredBookings = useMemo(() => {
    return bookings
      .filter(b => status === "all" || b.paymentStatus === status)
      .filter(b => b.patient.toLowerCase().includes(search.toLowerCase()))
      .sort((a, b) => {
        let valA: number
        let valB: number

        if (sortBy === "date") {
          valA = new Date(a.datetime).getTime()
          valB = new Date(b.datetime).getTime()
        } else if (sortBy === "time") {
          valA = new Date(a.datetime).getHours() * 60 + new Date(a.datetime).getMinutes()
          valB = new Date(b.datetime).getHours() * 60 + new Date(b.datetime).getMinutes()
        } else {
          valA = parseInt(a.id)
          valB = parseInt(b.id)
        }

        return sortOrder === "asc" ? valA - valB : valB - valA
      })
  }, [bookings, status, search, sortOrder, sortBy])

  const counts = useMemo(() => ({
    all: bookings.length,
    Lunas: bookings.filter(b => b.paymentStatus === "Lunas").length,
    "Belum Lunas": bookings.filter(b => b.paymentStatus === "Belum Lunas").length,
    DP: bookings.filter(b => b.paymentStatus === "DP").length,
  }), [bookings])

  const handleReschedule = (updatedBooking: Booking) => {
    setBookings(prev => prev.map(b => b.id === updatedBooking.id ? updatedBooking : b))
  }

  const handleCancel = (booking: Booking) => {
    setBookingToCancel(booking)
    setCancelOpen(true)
  }

  const confirmCancel = () => {
    if (!bookingToCancel) return
    setBookings(prev => prev.filter(b => b.id !== bookingToCancel.id))
    setCancelOpen(false)
    setBookingToCancel(null)
  }

  return (
    <div className="flex flex-col gap-6">
      <BookingStats />

      <BookingFilters
        status={status}
        search={search}
        onStatusChange={setStatus}
        onSearchChange={setSearch}
        onAddPatient={() => setCreateOpen(true)}
        counts={counts}
        sortBy={sortBy}
        sortOrder={sortOrder}
        onSortByChange={setSortBy}
        onSortOrderChange={setSortOrder}
      />

      <BookingTable
        bookings={filteredBookings}
        onViewDetail={(b) => { setSelectedBooking(b); setDetailOpen(true) }}
        onReschedule={(b) => { setSelectedBooking(b); setRescheduleOpen(true) }}
        onCancel={handleCancel}
      />

      <BookingDetailSheet
        open={detailOpen}
        onOpenChange={setDetailOpen}
        booking={selectedBooking}
      />

      <BookingCreateSheet
        open={createOpen}
        onOpenChange={setCreateOpen}
      />

      <BookingRescheduleSheet
        booking={selectedBooking}
        open={rescheduleOpen}
        onOpenChange={setRescheduleOpen}
        onReschedule={handleReschedule}
      />

      <BookingCancelDialog
        open={cancelOpen}
        onOpenChange={setCancelOpen}
        booking={bookingToCancel}
        onConfirm={confirmCancel}
      />
    </div>
  )
}
