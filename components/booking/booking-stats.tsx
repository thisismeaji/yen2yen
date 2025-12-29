import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function BookingStats() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">
            Total Booking Hari Ini
          </CardTitle>
        </CardHeader>
        <CardContent className="text-2xl font-bold">
          12
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm">
            Menunggu Konfirmasi
          </CardTitle>
        </CardHeader>
        <CardContent className="text-2xl font-bold">
          3
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm">
            Booking Selesai
          </CardTitle>
        </CardHeader>
        <CardContent className="text-2xl font-bold">
          8
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm">
            Dibatalkan
          </CardTitle>
        </CardHeader>
        <CardContent className="text-2xl font-bold">
          1
        </CardContent>
      </Card>
    </div>
  )
}
