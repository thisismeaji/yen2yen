import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const schedule = [
  {
    time: "09:00",
    patient: "Budi Santoso",
    therapy: "Tulang Belakang",
    status: "confirmed",
  },
  {
    time: "11:00",
    patient: "Siti Rahma",
    therapy: "Terapi Bahu",
    status: "pending",
  },
]

export function TodaySchedule() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Jadwal Hari Ini</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {schedule.map((item) => (
          <div
            key={item.time}
            className="flex items-center justify-between"
          >
            <div>
              <p className="font-medium">
                {item.time} — {item.patient}
              </p>
              <p className="text-sm text-muted-foreground">
                {item.therapy}
              </p>
            </div>

            <Badge
              variant={
                item.status === "confirmed"
                  ? "default"
                  : "secondary"
              }
            >
              {item.status}
            </Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
