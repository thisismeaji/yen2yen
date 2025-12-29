"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function PengaturanAkun() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Akun Admin</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <Input placeholder="Nama Admin" />
        <Input placeholder="Email" />
        <Input type="password" placeholder="Password Baru" />

        <Button>Simpan Akun</Button>
      </CardContent>
    </Card>
  )
}
