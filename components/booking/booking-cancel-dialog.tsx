"use client"

import { Booking } from "./types"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface BookingCancelDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  booking: Booking | null
  onConfirm: () => void
}

export function BookingCancelDialog({
  open,
  onOpenChange,
  booking,
  onConfirm,
}: BookingCancelDialogProps) {
  if (!booking) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Konfirmasi Pembatalan</DialogTitle>
        </DialogHeader>
        <p className="mt-2">Apakah Anda yakin ingin membatalkan booking <strong>{booking.patient}</strong>?</p>
        <DialogFooter className="flex justify-end gap-2 mt-4">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Batal
          </Button>
          <Button variant="destructive" onClick={onConfirm}>
            Batalkan
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
