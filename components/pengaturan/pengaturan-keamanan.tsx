"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function PengaturanKeamanan() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Keamanan</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <Button variant="outline">Logout Semua Perangkat</Button>
        <Button variant="outline">Ganti Password</Button>
      </CardContent>
    </Card>
  )
}
