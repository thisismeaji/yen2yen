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
import { User, Shield } from "lucide-react"
import { toast, Toaster } from "sonner"

type UserData = {
  name: string
  email: string
  whatsapp: string
}

interface EditAccountProps {
  user?: UserData
}

export function EditAccount({ user }: EditAccountProps) {
  const [loading, setLoading] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!formRef.current) return

    setLoading(true)

    const formData = new FormData(formRef.current)
    const password = formData.get("password")

    toast.loading("Menyimpan perubahan...", {
      id: "update-account",
    })

    try {
      const res = await fetch("/api/auth/update-account", {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          whatsapp: formData.get("whatsapp"),
          password: password || undefined,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        toast.error(data.message || "Gagal memperbarui akun", {
          id: "update-account",
        })
        return
      }

      if (password) {
        toast.success("Password berhasil diperbarui", {
          id: "update-account",
          description: "Silakan login ulang jika diminta",
          duration: 3000,
        })
      } else {
        toast.success("Akun berhasil diperbarui", {
          id: "update-account",
          description: "Perubahan data akun berhasil disimpan",
          duration: 3000,
        })
      }

      // kosongkan field password setelah sukses
      formRef.current.reset()
    } catch (error) {
      console.error(error)
      toast.error("Terjadi kesalahan server", {
        id: "update-account",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card>
      <Toaster richColors position="top-right" />

      <CardHeader className="space-y-1">
        <CardTitle className="flex items-center gap-2">
          <User className="h-5 w-5" />
          Data Pengguna
        </CardTitle>
        <CardDescription>
          Informasi akun yang sedang login
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
            <Input
              id="name"
              name="name"
              defaultValue={user?.name ?? ""}
              required
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              defaultValue={user?.email ?? ""}
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
              defaultValue={user?.whatsapp ?? ""}
              required
            />
          </div>

          <Separator />

          {/* Password */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-medium">
              <Shield className="h-4 w-4" />
              Ubah Password (opsional)
            </div>
            <Input
              name="password"
              type="password"
              placeholder="Password baru"
            />
            <p className="text-xs text-muted-foreground">
              Kosongkan jika tidak ingin mengubah password
            </p>
          </div>

          <div className="flex justify-end">
            <Button
              type="submit"
              disabled={loading}
              className="min-w-[160px]"
            >
              {loading ? "Menyimpan..." : "Simpan Perubahan"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
