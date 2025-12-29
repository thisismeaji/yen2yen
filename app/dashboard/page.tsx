import { CalendarDays, Users, Wallet } from "lucide-react"
import { StatCard } from "@/components/overview/stat-card"
import { TodaySchedule } from "@/components/overview/today-schedule"
import { RecentActivity } from "@/components/overview/recent-activity"

export default async function DashboardPage() {
  // ⬇️ nanti bisa diganti fetch dari DB / API
  const stats = {
    bookingToday: 12,
    activePatients: 58,
    revenueToday: "Rp 3.500.000",
  }

  return (
    <div className="flex flex-col gap-6">
      {/* ===== Header ===== */}
      <div>
        <h1 className="text-2xl font-semibold">
          Dashboard
        </h1>
        <p className="text-sm text-muted-foreground">
          Ringkasan aktivitas wellness therapy hari ini
        </p>
      </div>

      {/* ===== Stats ===== */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard
          title="Booking Hari Ini"
          value={stats.bookingToday.toString()}
          description="+3 dibanding kemarin"
          icon={CalendarDays}
        />
        <StatCard
          title="Pasien Aktif"
          value={stats.activePatients.toString()}
          description="Bulan berjalan"
          icon={Users}
        />
        <StatCard
          title="Pendapatan Hari Ini"
          value={stats.revenueToday}
          description="10 transaksi"
          icon={Wallet}
        />
      </div>

      {/* ===== Content Grid ===== */}
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <TodaySchedule />
        </div>
        <RecentActivity />
      </div>
    </div>
  )
}
