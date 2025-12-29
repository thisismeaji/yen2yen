"use client"

import * as React from "react"
import Link from "next/link"
import {
  GalleryVerticalEnd,
  LogOut,
  Settings,
  LayoutDashboard,
  Calendar,
  Users,
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

// ==============================
// Sidebar Menu (Modern & Flat)
// ==============================
const mainMenu = [
  {
    title: "Overview",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Booking",
    url: "/dashboard/booking",
    icon: Calendar,
  },
  {
    title: "Terapis",
    url: "/dashboard/terapis",
    icon: Stethoscope,
  },
  {
    title: "Pembayaran",
    url: "/dashboard/pembayaran",
    icon: CreditCard,
  },
  {
    title: "Laporan",
    url: "/dashboard/laporan",
    icon: BarChart3,
  },
]

export function AppSidebar(
  props: React.ComponentProps<typeof Sidebar>
) {
  return (
    <Sidebar {...props}>
      {/* ===== Header / Brand ===== */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/dashboard">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex size-8 items-center justify-center rounded-lg">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="font-medium">Wellness Therapy</span>
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
                  <Link
                    href={item.url}
                    className="flex items-center gap-2 font-medium"
                  >
                    <item.icon className="size-4" />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      {/* ===== Bottom Menu ===== */}
      <SidebarFooter className="border-t">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link
                href="/dashboard/pengaturan"
                className="flex items-center gap-2"
              >
                <Settings className="size-4" />
                <span>Pengaturan</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton
              className="flex items-center gap-2 text-red-500 hover:text-red-500"
              onClick={() => {
                // TODO: integrasi NextAuth / logout API
                console.log("Logout")
              }}
            >
              <LogOut className="size-4" />
              <span>Keluar</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}
