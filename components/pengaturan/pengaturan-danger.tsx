"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function PengaturanDanger() {
  return (
    <Card className="border-destructive">
      <CardHeader>
        <CardTitle className="text-destructive">
          Danger Zone
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <Button variant="destructive">
          Reset Semua Data
        </Button>
      </CardContent>
    </Card>
  )
}
