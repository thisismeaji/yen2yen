"use client"

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

interface BookingCreateSheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function BookingCreateSheet({
  open,
  onOpenChange,
}: BookingCreateSheetProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Tambah Pasien</SheetTitle>
        </SheetHeader>

        <form className="mt-6 space-y-5 px-4">
          {/* Nama */}
          <div className="space-y-2">
            <Label>Nama Pasien</Label>
            <Input placeholder="Nama lengkap pasien" />
          </div>

          {/* No HP */}
          <div className="space-y-2">
            <Label>No HP</Label>
            <Input placeholder="08xxxxxxxxxx" />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label>Email</Label>
            <Input type="email" placeholder="email@contoh.com" />
          </div>

          {/* Lokasi */}
          <div className="space-y-2">
            <Label>Lokasi</Label>
            <Input placeholder="Cabang / alamat terapi" />
          </div>

          {/* Terapis */}
          <div className="space-y-2">
            <Label>Terapis</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Pilih terapis" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="andi">Andi (Bonesetting)</SelectItem>
                <SelectItem value="budi">Budi (Fisioterapi)</SelectItem>
                <SelectItem value="sari">Sari (Terapi Saraf)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Tanggal & Jam */}
          <div className="space-y-2">
            <Label>Tanggal & Jam</Label>
            <Input type="datetime-local" />
          </div>

          {/* Status Pembayaran */}
          <div className="space-y-2">
            <Label>Status Pembayaran</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Pilih status pembayaran" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="lunas">Lunas</SelectItem>
                <SelectItem value="belum">Belum Lunas</SelectItem>
                <SelectItem value="dp">DP</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Deskripsi */}
          <div className="space-y-2">
            <Label>Deskripsi / Keluhan</Label>
            <Textarea
              placeholder="Tuliskan keluhan atau catatan tambahan..."
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
            <Button type="submit">
              Simpan
            </Button>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  )
}
