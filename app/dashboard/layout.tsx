"use client"

import * as React from "react"
import { AppSidebar } from "@/components/app-sidebar"

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { ChevronRight } from "lucide-react"
import { usePathname } from "next/navigation"
import Link from "next/link"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  // Split pathname menjadi array, misal /dashboard/booking -> ["dashboard", "booking"]
  const paths = pathname.split("/").filter(Boolean)

  // Ubah setiap path menjadi label (capitalize)
  const breadcrumbItems = paths.map((p) => p.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase()))

  // Build link untuk tiap item breadcrumb
  const breadcrumbLinks = paths.map((_, i) => "/" + paths.slice(0, i + 1).join("/"))

  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset>
        {/* ===== Top Bar ===== */}
        <header className="flex h-16 items-center gap-2 border-b px-4">
          <SidebarTrigger />
          <Separator orientation="vertical" className="h-4" />

          {/* Breadcrumb */}
          <nav className="flex items-center gap-1 text-sm text-muted-foreground">
            {breadcrumbItems.length === 0 ? (
              <span>Wellness Therapy</span>
            ) : (
              breadcrumbItems.map((item, index) => (
                <React.Fragment key={index}>
                  <Link href={breadcrumbLinks[index]} className="hover:underline">
                    {item}
                  </Link>
                  {index < breadcrumbItems.length - 1 && (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </React.Fragment>
              ))
            )}
          </nav>
        </header>

        {/* ===== Content ===== */}
        <main className="flex flex-1 flex-col p-4">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
