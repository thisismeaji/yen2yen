import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const activities = [
  "Booking baru oleh Andi Wijaya",
  "Pembayaran invoice INV-203 diterima",
  "Pasien baru ditambahkan: Rina",
]

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Aktivitas Terbaru</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 text-sm">
        {activities.map((activity, i) => (
          <p key={i} className="text-muted-foreground">
            • {activity}
          </p>
        ))}
      </CardContent>
    </Card>
  )
}
