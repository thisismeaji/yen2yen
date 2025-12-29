"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

interface Props {
  search: string
  onSearchChange: (v: string) => void
}

export function LaporanFilters({
  search,
  onSearchChange,
}: Props) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <Input
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Cari pasien / terapis..."
        className="md:w-[300px]"
      />

      <Button variant="outline">
        <Download className="mr-2 h-4 w-4" />
        Export Laporan
      </Button>
    </div>
  )
}
