"use client"

import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PaymentStatus } from "./types"

interface Props {
  status: "all" | PaymentStatus
  search: string
  onStatusChange: (v: "all" | PaymentStatus) => void
  onSearchChange: (v: string) => void
}

export function PembayaranFilters({
  status,
  search,
  onStatusChange,
  onSearchChange,
}: Props) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <Tabs value={status} onValueChange={(v) => onStatusChange(v as any)}>
        <TabsList>
          <TabsTrigger value="all">Semua</TabsTrigger>
          <TabsTrigger value="paid">Lunas</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="failed">Gagal</TabsTrigger>
        </TabsList>
      </Tabs>

      <Input
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Cari nama pasien / invoice..."
        className="md:w-[260px]"
      />
    </div>
  )
}
