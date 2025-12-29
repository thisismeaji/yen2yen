"use client"

import { useMemo, useState } from "react"
import { payments as rawPayments } from "@/components/pembayaran/data"
import { PembayaranStats } from "@/components/pembayaran/pembayaran-stats"
import { PembayaranFilters } from "@/components/pembayaran/pembayaran-filters"
import { PembayaranTable } from "@/components/pembayaran/pembayaran-table"
import { PaymentStatus } from "@/components/pembayaran/types"

export default function PembayaranPage() {
  const [status, setStatus] = useState<"all" | PaymentStatus>("all")
  const [search, setSearch] = useState("")

  const filtered = useMemo(() => {
    return rawPayments.filter((p) => {
      const matchStatus =
        status === "all" || p.status === status

      const matchSearch =
        p.patient.toLowerCase().includes(search.toLowerCase()) ||
        p.invoice.toLowerCase().includes(search.toLowerCase())

      return matchStatus && matchSearch
    })
  }, [status, search])

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold">Pembayaran</h1>
        <p className="text-sm text-muted-foreground">
          Kelola transaksi dan pembayaran pasien
        </p>
      </div>

      <PembayaranStats />
      <PembayaranFilters
        status={status}
        search={search}
        onStatusChange={setStatus}
        onSearchChange={setSearch}
      />
      <PembayaranTable payments={filtered} />
    </div>
  )
}
