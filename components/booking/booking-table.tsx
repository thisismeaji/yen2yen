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
import { useState } from "react"
import { Booking } from "./types"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

interface BookingTableProps {
  bookings: Booking[]
  onViewDetail: (booking: Booking) => void
  onReschedule: (booking: Booking) => void
  onCancel: (booking: Booking) => void
  pageSize?: number
}

export function BookingTable({
  bookings,
  onViewDetail,
  onReschedule,
  onCancel,
  pageSize = 10,
}: BookingTableProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(pageSize)

  const totalPages = Math.ceil(bookings.length / rowsPerPage)
  const currentData = bookings.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  )

  const formatDate = (datetime: string) =>
    new Date(datetime).toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })

  const formatTime = (datetime: string) =>
    new Date(datetime).toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })

  const handlePageChange = (page: number) => setCurrentPage(page)

  return (
    <div className="flex flex-col gap-4">
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
            {currentData.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} className="text-center text-muted-foreground">
                  Tidak ada data booking
                </TableCell>
              </TableRow>
            ) : (
              currentData.map((booking) => (
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
                          <Eye className="mr-2 h-4 w-4" /> Detail
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => onReschedule(booking)}>
                          <Pencil className="mr-2 h-4 w-4" /> Reschedule
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="text-destructive"
                          onClick={() => onCancel(booking)}
                        >
                          <XCircle className="mr-2 h-4 w-4" /> Batalkan
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

      {/* Footer */}
      <div className="flex items-center justify-between">
        {/* Kiri: info */}
        <div className="text-sm text-muted-foreground">
          {currentData.length} of {bookings.length} row(s) selected.
        </div>

        {/* Kanan: rows per page + page info + pagination */}
        <div className="flex items-center gap-4 ">
          {/* Rows per page */}
          <div className="flex items-center gap-3 w-full">
            <p className="text-sm text-muted-foreground">Rows per page</p>
            <Select
              value={rowsPerPage.toString()}
              onValueChange={(val) => {
                setRowsPerPage(parseInt(val))
                setCurrentPage(1)
              }}
            >
              <SelectTrigger className="w-[80px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {[5, 10, 20, 50].map((n) => (
                  <SelectItem key={n} value={n.toString()}>
                    {n}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Pagination */}
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    if (currentPage > 1) handlePageChange(currentPage - 1)
                  }}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink
                    href="#"
                    isActive={page === currentPage}
                    onClick={(e) => {
                      e.preventDefault()
                      handlePageChange(page)
                    }}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}

              {totalPages > 5 && <PaginationItem><PaginationEllipsis /></PaginationItem>}

              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    if (currentPage < totalPages) handlePageChange(currentPage + 1)
                  }}
                  className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  )
}
