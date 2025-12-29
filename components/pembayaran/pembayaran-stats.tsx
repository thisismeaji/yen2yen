import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { payments } from "./data"

export function PembayaranStats() {
  const total = payments.reduce((a, b) => a + b.amount, 0)
  const paid = payments.filter(p => p.status === "paid").length
  const pending = payments.filter(p => p.status === "pending").length

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Total Pendapatan</CardTitle>
        </CardHeader>
        <CardContent className="text-2xl font-bold">
          Rp {total.toLocaleString("id-ID")}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Lunas</CardTitle>
        </CardHeader>
        <CardContent className="text-2xl font-bold">
          {paid}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Menunggu</CardTitle>
        </CardHeader>
        <CardContent className="text-2xl font-bold">
          {pending}
        </CardContent>
      </Card>
    </div>
  )
}
