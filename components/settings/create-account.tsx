"use client"

import { useState, useRef } from "react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { UserPlus } from "lucide-react"
import { toast, Toaster } from "sonner"

export function CreateAccount() {
  const [loading, setLoading] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!formRef.current) return

    setLoading(true)
    const formData = new FormData(formRef.current)

    try {
      const res = await fetch("/api/auth/create-account", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          password: formData.get("password"),
          whatsapp: formData.get("whatsapp"),
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        toast.error(data.message || "Gagal membuat akun")
        return
      }

      toast.success("Akun berhasil dibuat", {
        description: `${formData.get("name")} berhasil didaftarkan`,
      })

      formRef.current.reset()
    } catch (error) {
      console.error(error)
      toast.error("Terjadi kesalahan server")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card>
      <Toaster richColors position="top-right" />

      <CardHeader className="space-y-1">
        <CardTitle className="flex items-center gap-2">
          <UserPlus className="h-5 w-5" />
          Buat Akun Baru
        </CardTitle>
        <CardDescription>
          Tambahkan akun baru untuk mengakses sistem
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          {/* Nama */}
          <div className="space-y-2">
            <Label htmlFor="name">Nama Lengkap</Label>
            <Input id="name" name="name" required />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              required
            />
          </div>

          {/* WhatsApp */}
          <div className="space-y-2">
            <Label htmlFor="whatsapp">No WhatsApp</Label>
            <Input
              id="whatsapp"
              name="whatsapp"
              type="tel"
              placeholder="0812xxxxxxx"
              required
            />
          </div>

          <Separator />

          <div className="flex justify-end">
            <Button
              type="submit"
              disabled={loading}
              className="min-w-[140px]"
            >
              {loading ? "Menyimpan..." : "Buat Akun"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
