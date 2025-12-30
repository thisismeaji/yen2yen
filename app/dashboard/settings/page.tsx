import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { verifyToken } from "@/lib/jwt"
import { connectDB } from "@/lib/mongodb"
import { User } from "@/models/User"
import { EditAccount } from "@/components/settings/edit-account"
import { CreateAccount } from "@/components/settings/create-account"

export default async function SettingsPage() {
  const cookieStore = await cookies()
  const token = cookieStore.get("auth_token")?.value

  if (!token) {
    redirect("/login")
  }

  const payload = verifyToken(token)

  await connectDB()

  const user = await User.findById(payload.id).select(
    "name email whatsapp"
  )

  if (!user) {
    redirect("/login")
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">
          Pengaturan Akun
        </h1>
        <p className="text-sm text-muted-foreground">
          Kelola informasi akun dan buat akun baru
        </p>
      </div>

      {/* Content */}
      <div className="grid gap-6 lg:grid-cols-2">
        <EditAccount
          user={{
            name: user.name,
            email: user.email,
            whatsapp: user.whatsapp,
          }}
        />

        <CreateAccount />
      </div>
    </div>
  )


}
