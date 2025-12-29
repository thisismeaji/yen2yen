import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Therapist } from "./types"
import { TerapisActions } from "./terapis-actions"

interface TerapisCardProps {
  therapist: Therapist
}

export function TerapisCard({ therapist }: TerapisCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between">
        <div>
          <h3 className="font-semibold">{therapist.name}</h3>
          <p className="text-sm text-muted-foreground">
            {therapist.specialization}
          </p>
        </div>
        <TerapisActions />
      </CardHeader>

      <CardContent className="space-y-2 text-sm">
        <div>
          <span className="text-muted-foreground">No HP</span>
          <p>{therapist.phone}</p>
        </div>

        <div>
          <span className="text-muted-foreground">Pengalaman</span>
          <p>{therapist.experience} tahun</p>
        </div>

        <Badge
          variant={therapist.status === "active" ? "default" : "secondary"}
        >
          {therapist.status === "active" ? "Aktif" : "Nonaktif"}
        </Badge>
      </CardContent>
    </Card>
  )
}
