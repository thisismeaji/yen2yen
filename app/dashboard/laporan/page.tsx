"use client"

import { useMemo, useState } from "react"
import { laporanData } from "@/components/laporan/data"
import { LaporanStats } from "@/components/laporan/laporan-stats"
import { LaporanFilters } from "@/components/laporan/laporan-filters"
import { LaporanTable } from "@/components/laporan/laporan-table"

export default function LaporanPage() {
  const [search, setSearch] = useState("")

  const filtered = useMemo(() => {
    return laporanData.filter((item) =>
      item.patient.toLowerCase().includes(search.toLowerCase()) ||
      item.therapist.toLowerCase().includes(search.toLowerCase())
    )
  }, [search])

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold">Laporan</h1>
        <p className="text-sm text-muted-foreground">
          Ringkasan aktivitas dan pendapatan klinik
        </p>
      </div>

      <LaporanStats />
      <LaporanFilters
        search={search}
        onSearchChange={setSearch}
      />
      <LaporanTable data={filtered} />
    </div>
  )
}
