"use client"

import * as React from "react"
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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function BookingForm() {
    const [loading, setLoading] = React.useState(false)

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setLoading(true)

        const formData = new FormData(e.currentTarget)

        const data = Object.fromEntries(formData.entries())
        console.log("Booking Data:", data)

        // simulasi submit
        setTimeout(() => {
            setLoading(false)
            alert("Booking berhasil dikirim")
        }, 1000)
    }

    return (
        <Card className="max-w-2xl mx-auto">
            <CardHeader>
                <CardTitle>Form Booking Terapi</CardTitle>
            </CardHeader>

            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Nama */}
                    <div className="space-y-2">
                        <Label>Nama</Label>
                        <Input name="nama" placeholder="Nama lengkap" required />
                    </div>

                    {/* No HP */}
                    <div className="space-y-2">
                        <Label>No HP</Label>
                        <Input
                            name="no_hp"
                            placeholder="08xxxxxxxxxx"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                        <Label>Email</Label>
                        <Input
                            type="email"
                            name="email"
                            placeholder="email@example.com"
                            required
                        />
                    </div>

                    {/* Lokasi */}
                    <div className="space-y-2 w-full">
                        <Label>Lokasi</Label>
                        <Select name="lokasi" required>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Pilih lokasi" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="rumah">Rumah Pasien</SelectItem>
                                <SelectItem value="klinik">Klinik</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Terapis */}
                    <div className="space-y-2 w-full">
                        <Label>Terapis</Label>
                        <Select name="terapis" required>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Pilih terapis" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="terapis-a">Terapis A</SelectItem>
                                <SelectItem value="terapis-b">Terapis B</SelectItem>
                                <SelectItem value="terapis-c">Terapis C</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>


                    {/* Tanggal */}
                    <div className="space-y-2">
                        <Label>Tanggal</Label>
                        <Input type="date" name="tanggal" required />
                    </div>

                    {/* Jam */}
                    <div className="space-y-2">
                        <Label>Jam</Label>
                        <Input type="time" name="jam" required />
                    </div>

                    {/* Informasi Pembayaran */}
                    <div className="rounded-lg border bg-muted p-4 space-y-2">
                        <p className="font-semibold">Informasi Pembayaran</p>

                        <div className="text-sm text-muted-foreground space-y-1">
                            <p>
                                <span className="font-medium text-foreground">Bank:</span> BCA
                            </p>
                            <p>
                                <span className="font-medium text-foreground">No. Rekening:</span> 1234567890
                            </p>
                            <p>
                                <span className="font-medium text-foreground">Atas Nama:</span> PT Wellness Sejahtera
                            </p>
                            <p>
                                <span className="font-medium text-foreground">Nominal:</span> Rp 250.000
                            </p>
                        </div>

                        <p className="text-xs text-muted-foreground">
                            Silakan lakukan pembayaran terlebih dahulu, kemudian upload bukti pembayaran di bawah.
                        </p>
                    </div>


                    {/* Bukti Pembayaran */}
                    <div className="space-y-2">
                        <Label>Bukti Pembayaran</Label>
                        <Input type="file" name="bukti_pembayaran" required />
                    </div>

                    {/* Deskripsi */}
                    <div className="space-y-2">
                        <Label>Deskripsi / Keluhan (Opsional)</Label>
                        <Textarea
                            name="deskripsi"
                            placeholder="Tuliskan keluhan atau catatan tambahan"
                        />
                    </div>

                    {/* Submit */}
                    <Button type="submit" className="w-full" disabled={loading}>
                        {loading ? "Mengirim..." : "Booking Sekarang"}
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}
