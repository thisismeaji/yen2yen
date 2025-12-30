import { PengaturanAkun } from "@/components/pengaturan/pengaturan-akun"
import { PengaturanPreferensi } from "@/components/pengaturan/pengaturan-preferensi"
import { PengaturanKeamanan } from "@/components/pengaturan/pengaturan-keamanan"
import { PengaturanDanger } from "@/components/pengaturan/pengaturan-danger"
import { CreateAccount } from "@/components/pengaturan/create-account"

export default function PengaturanPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold">Pengaturan</h1>
        <p className="text-sm text-muted-foreground">
          Kelola konfigurasi sistem dan akun
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <PengaturanAkun />
        <PengaturanPreferensi />
        <PengaturanKeamanan />
        <CreateAccount />
      </div>

      <PengaturanDanger />
    </div>
  )
}
