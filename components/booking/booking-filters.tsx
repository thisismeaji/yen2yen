"use client"

import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { PaymentStatus } from "./types"
import { BookingSortSelector } from "./BookingSortSelector"

interface BookingFiltersProps {
  status: PaymentStatus | "all"
  search: string
  onStatusChange: (value: PaymentStatus | "all") => void
  onSearchChange: (value: string) => void
  onAddPatient: () => void
  counts: {
    all: number
    Lunas: number
    "Belum Lunas": number
    DP: number
  }
  sortBy: "date" | "time" | "id"
  sortOrder: "asc" | "desc"
  onSortByChange: (value: "date" | "time" | "id") => void
  onSortOrderChange: (value: "asc" | "desc") => void
}

export function BookingFilters({
  status,
  search,
  onStatusChange,
  onSearchChange,
  onAddPatient,
  counts,
  sortBy,
  sortOrder,
  onSortByChange,
  onSortOrderChange,
}: BookingFiltersProps) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between w-full">
      {/* Kiri: Tabs + Search */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Tabs
          value={status}
          onValueChange={(v) => onStatusChange(v as PaymentStatus | "all")}
        >
          <TabsList>
            <TabsTrigger value="all">Semua ({counts.all})</TabsTrigger>
            <TabsTrigger value="Lunas">Lunas ({counts.Lunas})</TabsTrigger>
            <TabsTrigger value="Belum Lunas">
              Belum Lunas ({counts["Belum Lunas"]})
            </TabsTrigger>
            <TabsTrigger value="DP">DP ({counts.DP})</TabsTrigger>
          </TabsList>
        </Tabs>

        <Input
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Cari nama pasien..."
          className="sm:w-[240px]"
        />
      </div>

      {/* Kanan: Sort + Tambah Pasien */}
      <div className="flex items-center gap-2">
        <BookingSortSelector
          sortBy={sortBy}
          sortOrder={sortOrder}
          onSortByChange={onSortByChange}
          onSortOrderChange={onSortOrderChange}
        />
        <Button size="sm" onClick={onAddPatient}>
          <Plus className="mr-2 h-4 w-4" />
          Tambah Pasien
        </Button>
      </div>
    </div>
  )
}
