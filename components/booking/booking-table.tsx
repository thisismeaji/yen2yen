"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreVertical, Eye, Pencil, XCircle } from "lucide-react"
import { Booking } from "./types"

interface BookingTableProps {
  bookings: Booking[]
  onViewDetail: (booking: Booking) => void
  onReschedule: (booking: Booking) => void
  onCancel: (booking: Booking) => void
}

export function BookingTable({
  bookings,
  onViewDetail,
  onReschedule,
  onCancel,
}: BookingTableProps) {
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
    <div className="rounded-xl border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Pasien</TableHead>
            <TableHead>Layanan</TableHead>
            <TableHead>Terapis</TableHead>
            <TableHead>Tanggal</TableHead>
            <TableHead>Jam</TableHead>
            <TableHead>Status Pembayaran</TableHead>
            <TableHead className="text-right">Aksi</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {bookings.length === 0 ? (
            <TableRow>
              <TableCell colSpan={8} className="text-center text-muted-foreground">
                Tidak ada data booking
              </TableCell>
            </TableRow>
          ) : (
            bookings.map((booking) => (
              <TableRow key={booking.id}>
                <TableCell className="font-medium">{booking.id}</TableCell>
                <TableCell>{booking.patient}</TableCell>
                <TableCell>{booking.description}</TableCell>
                <TableCell>{booking.therapist}</TableCell>
                <TableCell>{formatDate(booking.datetime)}</TableCell>
                <TableCell>{formatTime(booking.datetime)}</TableCell>
                <TableCell>
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
                </TableCell>

                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="icon" variant="ghost">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => onViewDetail(booking)}>
                        <Eye className="mr-2 h-4 w-4" />
                        Detail
                      </DropdownMenuItem>

                      <DropdownMenuItem onClick={() => onReschedule(booking)}>
                        <Pencil className="mr-2 h-4 w-4" />
                        Reschedule
                      </DropdownMenuItem>

                      <DropdownMenuItem
                        className="text-destructive"
                        onClick={() => onCancel(booking)}
                      >
                        <XCircle className="mr-2 h-4 w-4" />
                        Batalkan
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  )
}
