"use client"

import * as React from "react"
import { toast, Toaster } from "sonner"
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
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Calendar, Clock, User, Phone, Mail, MapPin } from "lucide-react"

export function BookingForm() {
  const [loading, setLoading] = React.useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = e.currentTarget
    setLoading(true)

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
    } catch (error) {
      console.error(error)
      toast.error("Terjadi kesalahan server")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="mx-auto max-w-3xl rounded-2xl shadow-sm">
      <Toaster richColors position="top-right" />

      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl">Booking Terapi</CardTitle>
        <CardDescription>
          Lengkapi data di bawah untuk menjadwalkan sesi terapi Anda
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Informasi Pasien */}
          <section className="space-y-5">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase">
              Informasi Pasien
            </h3>

            <div className="grid gap-5 sm:grid-cols-2">
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

              <div className="space-y-2 sm:col-span-2">
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
            </div>
          </section>

          {/* Detail Sesi */}
          <section className="space-y-5">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase">
              Detail Sesi
            </h3>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label>Lokasi</Label>
                <Select name="lokasi" required>
                  <SelectTrigger className="w-full">
                    <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
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
            </div>
          </section>

          {/* Catatan */}
          <section className="space-y-2">
            <Label>Keluhan / Catatan Tambahan (Opsional)</Label>
            <Textarea
              name="deskripsi"
              placeholder="Tuliskan keluhan atau catatan tambahan"
              className="min-h-[120px]"
            />
          </section>

          <Button
            type="submit"
            size="lg"
            className="w-full rounded-xl"
            disabled={loading}
          >
            {loading ? "Mengirim Booking..." : "Booking Sekarang"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
