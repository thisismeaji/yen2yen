import { therapists } from "@/components/terapis/data"
import { TerapisCard } from "@/components/terapis/terapis-card"
import { TerapisStats } from "@/components/terapis/terapis-stats"

export default function TerapisPage() {
  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold">Terapis</h1>
        <p className="text-sm text-muted-foreground">
          Kelola data dan status terapis
        </p>
      </div>

      {/* Stats */}
      <TerapisStats />

      {/* Terapis Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {therapists.map((therapist) => (
          <TerapisCard
            key={therapist.id}
            therapist={therapist}
          />
        ))}
      </div>
    </div>
  )
}
