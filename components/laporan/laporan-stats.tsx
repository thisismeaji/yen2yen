import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { laporanData } from "./data"

export function LaporanStats() {
  const totalPendapatan = laporanData.reduce(
    (sum, item) => sum + item.amount,
    0
  )

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Total Pendapatan</CardTitle>
        </CardHeader>
        <CardContent className="text-2xl font-bold">
          Rp {totalPendapatan.toLocaleString("id-ID")}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Total Transaksi</CardTitle>
        </CardHeader>
        <CardContent className="text-2xl font-bold">
          {laporanData.length}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Periode</CardTitle>
        </CardHeader>
        <CardContent className="text-sm">
          Februari 2025
        </CardContent>
      </Card>
    </div>
  )
}
