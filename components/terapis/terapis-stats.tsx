import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { therapists } from "./data"

export function TerapisStats() {
  const active = therapists.filter(t => t.status === "active").length
  const inactive = therapists.filter(t => t.status === "inactive").length

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Terapis Aktif</CardTitle>
        </CardHeader>
        <CardContent className="text-2xl font-bold">
          {active}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Terapis Nonaktif</CardTitle>
        </CardHeader>
        <CardContent className="text-2xl font-bold">
          {inactive}
        </CardContent>
      </Card>
    </div>
  )
}
