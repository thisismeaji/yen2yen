"use client"

import { useState, useEffect } from "react"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Booking, PaymentStatus } from "./types"

interface BookingRescheduleSheetProps {
    booking: Booking | null
    open: boolean
    onOpenChange: (open: boolean) => void
    onReschedule: (updatedBooking: Booking) => void
}

export function BookingRescheduleSheet({
    booking,
    open,
    onOpenChange,
    onReschedule,
}: BookingRescheduleSheetProps) {
    const [datetime, setDatetime] = useState("")
    const [therapist, setTherapist] = useState("")
    const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>("Lunas")
    const [description, setDescription] = useState("")

    useEffect(() => {
        if (booking) {
            setDatetime(booking.datetime)
            setTherapist(booking.therapist)
            setPaymentStatus(booking.paymentStatus)
            setDescription(booking.description)
        }
    }, [booking])

    if (!booking) return null

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onReschedule({
            ...booking,
            datetime,
            therapist,
            paymentStatus,
            description,
        })
        onOpenChange(false)
    }

    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent className="sm:max-w-lg">
                <SheetHeader>
                    <SheetTitle>Reschedule Booking</SheetTitle>
                </SheetHeader>

                <form className="mt-6 space-y-5 px-4" onSubmit={handleSubmit}>
                    {/* Terapis */}
                    <div className="space-y-2">
                        <Label>Terapis</Label>
                        <Select value={therapist} onValueChange={setTherapist}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Pilih terapis" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Andi (Bonesetting)">Andi (Bonesetting)</SelectItem>
                                <SelectItem value="Budi (Fisioterapi)">Budi (Fisioterapi)</SelectItem>
                                <SelectItem value="Sari (Terapi Saraf)">Sari (Terapi Saraf)</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Tanggal & Jam */}
                    <div className="space-y-2">
                        <Label>Tanggal & Jam</Label>
                        <Input
                            type="datetime-local"
                            value={datetime}
                            onChange={(e) => setDatetime(e.target.value)}
                        />
                    </div>

                    {/* Status Pembayaran */}
                    <div className="space-y-2">
                        <Label>Status Pembayaran</Label>
                        <Select
                            value={paymentStatus}
                            onValueChange={(value) => setPaymentStatus(value as PaymentStatus)}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Pilih status pembayaran" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Lunas">Lunas</SelectItem>
                                <SelectItem value="Belum Lunas">Belum Lunas</SelectItem>
                                <SelectItem value="DP">DP</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>


                    {/* Deskripsi */}
                    <div className="space-y-2">
                        <Label>Deskripsi / Keluhan</Label>
                        <Textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            rows={4}
                        />
                    </div>

                    {/* Action */}
                    <div className="flex justify-end gap-2 pt-4">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => onOpenChange(false)}
                        >
                            Batal
                        </Button>
                        <Button type="submit">Simpan</Button>
                    </div>
                </form>
            </SheetContent>
        </Sheet>
    )
}
