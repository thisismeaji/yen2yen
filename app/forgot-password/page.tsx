"use client"

import { useState } from "react"
import Link from "next/link"
import { Mail } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    // TODO: panggil API forgot password
    setSubmitted(true)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/40 px-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-2xl">
            Lupa Password
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Masukkan email yang terdaftar untuk menerima link reset password
          </p>
        </CardHeader>

        <CardContent>
          {submitted ? (
            <Alert>
              <AlertDescription>
                Jika email <strong>{email}</strong> terdaftar, kami telah
                mengirimkan link untuk reset password.
              </AlertDescription>
            </Alert>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Email"
                  className="pl-9"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                Kirim Link Reset
              </Button>
            </form>
          )}

          <div className="mt-6 text-center text-sm">
            <Link
              href="/login"
              className="text-primary hover:underline"
            >
              Kembali ke Login
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
