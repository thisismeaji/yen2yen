import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import DashboardClientLayout from "./dashboard-client"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = await cookies()
  const token = cookieStore.get("auth_token")?.value

  if (!token) {
    redirect("/login")
  }

  return <DashboardClientLayout>{children}</DashboardClientLayout>
}
