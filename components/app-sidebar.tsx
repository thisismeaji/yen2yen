"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  GalleryVerticalEnd,
  LogOut,
  Settings,
  LayoutDashboard,
  Calendar,
  Stethoscope,
  CreditCard,
  BarChart3,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

// ==============================
// Main Menu
// ==============================
const mainMenu = [
  { title: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { title: "Booking", href: "/dashboard/booking", icon: Calendar },
  { title: "Terapis", href: "/dashboard/terapis", icon: Stethoscope },
  { title: "Pembayaran", href: "/dashboard/pembayaran", icon: CreditCard },
  { title: "Laporan", href: "/dashboard/laporan", icon: BarChart3 },
]

export function AppSidebar(
  props: React.ComponentProps<typeof Sidebar>
) {
  const router = useRouter()

  async function handleLogout() {
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
      })

      router.push("/login")
      router.refresh()
    } catch (error) {
      console.error("Logout gagal:", error)
    }
  }

  return (
    <Sidebar {...props}>
      {/* ===== Header ===== */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/dashboard">
                <div className="flex size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="font-semibold">Wellness Therapy</span>
                  <span className="text-xs text-muted-foreground">
                    Bonesetting System
                  </span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* ===== Main Menu ===== */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {mainMenu.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <Link href={item.href} className="flex items-center gap-2">
                    <item.icon className="size-4" />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      {/* ===== Footer ===== */}
      <SidebarFooter className="border-t">
        <SidebarMenu>
          {/* Pengaturan */}
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/dashboard/pengaturan" className="flex gap-2">
                <Settings className="size-4" />
                <span>Pengaturan</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          {/* Logout with Confirmation */}
          <SidebarMenuItem>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <SidebarMenuButton className="flex gap-2 text-red-500 hover:text-red-500">
                  <LogOut className="size-4" />
                  <span>Keluar</span>
                </SidebarMenuButton>
              </AlertDialogTrigger>

              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Keluar dari akun?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Anda akan keluar dari sistem dan perlu login kembali
                    untuk mengakses dashboard.
                  </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter>
                  <AlertDialogCancel>Batal</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={handleLogout}
                    className="bg-red-500 hover:bg-red-600"
                  >
                    Ya, Keluar
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}
