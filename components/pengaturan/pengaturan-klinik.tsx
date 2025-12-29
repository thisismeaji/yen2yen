"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function PengaturanKlinik() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Profil Klinik</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <Input placeholder="Nama Klinik" />
        <Input placeholder="Alamat Klinik" />
        <Input placeholder="No Telepon" />
        <Input placeholder="Email Klinik" />

        <Button>Simpan Perubahan</Button>
      </CardContent>
    </Card>
  )
}
