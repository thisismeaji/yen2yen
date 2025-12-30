"use client"

import * as React from "react"
import { toast, Toaster } from "sonner"
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
import { User, Phone, Mail, MapPin, Calendar, Clock } from "lucide-react"

interface BookingCreateSheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onCreated?: () => void | Promise<void>
}

export function BookingCreateSheet({
  open,
  onOpenChange,
  onCreated,
}: BookingCreateSheetProps) {
  const [loading, setLoading] = React.useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    const payload = {
      name: formData.get("nama"),
      phone: formData.get("no_hp"),
      email: formData.get("email"),
      location: formData.get("lokasi"),
      therapist: formData.get("terapis"),
      date: formData.get("tanggal"),
      time: formData.get("jam"),
      notes: formData.get("deskripsi"),
    }

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (!res.ok) {
        toast.error(data.message || "Gagal mengirim booking")
        return
      }

      toast.success("Booking berhasil dikirim 🎉")
      form.reset()
      if (onCreated) await onCreated()
      onOpenChange(false)
    } catch (err) {
      console.error(err)
      toast.error("Terjadi kesalahan server")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="sm:max-w-lg">
        <Toaster richColors position="top-right" />

        <SheetHeader>
          <SheetTitle>Tambah Pasien</SheetTitle>
        </SheetHeader>

        <form onSubmit={handleSubmit} className="space-y-5 p-4">
          <div className="space-y-2">
            <Label>Nama Lengkap</Label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                name="nama"
                placeholder="Nama lengkap"
                className="pl-9"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>No HP</Label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                name="no_hp"
                placeholder="08xxxxxxxxxx"
                className="pl-9"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                type="email"
                name="email"
                placeholder="email@example.com"
                className="pl-9"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Lokasi</Label>
            <Select name="lokasi" required>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Pilih lokasi" />
              </SelectTrigger>
              <SelectContent className="w-full">
                <SelectItem value="rumah">Rumah Pasien</SelectItem>
                <SelectItem value="klinik">Klinik</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Terapis</Label>
            <Select name="terapis" required>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Pilih terapis" />
              </SelectTrigger>
              <SelectContent className="w-full">
                <SelectItem value="terapis-a">Terapis A</SelectItem>
                <SelectItem value="terapis-b">Terapis B</SelectItem>
                <SelectItem value="terapis-c">Terapis C</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Tanggal</Label>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input type="date" name="tanggal" className="pl-9" required />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Jam</Label>
            <div className="relative">
              <Clock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input type="time" name="jam" className="pl-9" required />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Keluhan / Catatan Tambahan (Opsional)</Label>
            <Textarea
              name="deskripsi"
              placeholder="Tuliskan keluhan atau catatan tambahan"
              className="min-h-[120px]"
            />
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Batal
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? "Mengirim Booking..." : "Booking Sekarang"}
            </Button>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  )
}
