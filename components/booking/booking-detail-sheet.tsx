"use client"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { Booking } from "./types"

interface BookingDetailSheetProps {
  booking: Booking | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function BookingDetailSheet({
  booking,
  open,
  onOpenChange,
}: BookingDetailSheetProps) {
  if (!booking) return null

  const formatDate = (datetime: string) => {
    const dateObj = new Date(datetime)
    return dateObj.toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
  }

  const formatTime = (datetime: string) => {
    const dateObj = new Date(datetime)
    return dateObj.toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Detail Booking</SheetTitle>
        </SheetHeader>

        <div className="mt-6 space-y-4 text-sm p-4">
          <div>
            <p className="text-muted-foreground">Pasien</p>
            <p className="font-medium">{booking.patient}</p>
          </div>

          <div>
            <p className="text-muted-foreground">No HP</p>
            <p>{booking.phone}</p>
          </div>

          <div>
            <p className="text-muted-foreground">Email</p>
            <p>{booking.email}</p>
          </div>

          <div>
            <p className="text-muted-foreground">Lokasi</p>
            <p>{booking.location}</p>
          </div>

          <div>
            <p className="text-muted-foreground">Terapis</p>
            <p>{booking.therapist}</p>
          </div>

          <div>
            <p className="text-muted-foreground">Layanan / Keluhan</p>
            <p>{booking.description}</p>
          </div>

          <div className="flex justify-between">
            <div>
              <p className="text-muted-foreground">Tanggal</p>
              <p>{formatDate(booking.datetime)}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Jam</p>
              <p>{formatTime(booking.datetime)}</p>
            </div>
          </div>

          <div>
            <p className="text-muted-foreground mb-1">Status Pembayaran</p>
            <Badge
              variant={
                booking.paymentStatus === "Lunas"
                  ? "default"
                  : booking.paymentStatus === "Belum Lunas"
                  ? "secondary"
                  : "destructive"
              }
            >
              {booking.paymentStatus}
            </Badge>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
