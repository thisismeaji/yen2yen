"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export function PengaturanPreferensi() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Preferensi Sistem</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <Label>Notifikasi Email</Label>
          <Switch />
        </div>

        <div className="flex items-center justify-between">
          <Label>Pengingat Booking</Label>
          <Switch />
        </div>

        <div className="flex items-center justify-between">
          <Label>Mode Gelap</Label>
          <Switch />
        </div>
      </CardContent>
    </Card>
  )
}
