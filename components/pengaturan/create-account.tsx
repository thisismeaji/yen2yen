"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { UserPlus } from "lucide-react"

export function CreateAccount() {
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)

    const res = await fetch("/api/auth/create-account", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
        role: formData.get("role"),
      }),
    })

    const data = await res.json()
    setLoading(false)

    alert(data.message)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <UserPlus className="h-5 w-5" />
          Buat Akun Baru
        </CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label>Nama Lengkap</Label>
              <Input name="name" required />
            </div>

            <div className="space-y-2">
              <Label>Email</Label>
              <Input name="email" type="email" required />
            </div>

            <div className="space-y-2">
              <Label>Password</Label>
              <Input name="password" type="password" required />
            </div>

            <div className="space-y-2">
              <Label>Role</Label>
              <Input name="role" placeholder="admin / terapis / staff" />
            </div>
          </div>

          <Separator />

          <div className="flex justify-end">
            <Button disabled={loading}>
              {loading ? "Menyimpan..." : "Buat Akun"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
