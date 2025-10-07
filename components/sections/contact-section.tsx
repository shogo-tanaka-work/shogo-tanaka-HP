"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<null | "idle" | "sending" | "ok" | "error">("idle")
  const [error, setError] = useState<string | null>(null)

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    setError(null)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setError(data?.error || "送信に失敗しました")
        setStatus("error")
        return
      }
      setStatus("ok")
      setName("")
      setEmail("")
      setMessage("")
    } catch (e) {
      setError("送信に失敗しました")
      setStatus("error")
    }
  }

  return (
    <div className="mb-8">
      <h2 className="text-lg font-bold text-white mb-4 text-center">お問い合わせ</h2>
      <Card
        className="border backdrop-blur-sm"
        style={{ backgroundColor: "rgba(51, 51, 51, 0.6)", borderColor: "rgba(212, 175, 55, 0.2)" }}
      >
        <form onSubmit={submit} className="p-4 space-y-3">
          <Input placeholder="お名前" value={name} onChange={(e) => setName(e.target.value)} required />
          <Input type="email" placeholder="メールアドレス" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <Textarea placeholder="お問い合わせ内容" value={message} onChange={(e) => setMessage(e.target.value)} required rows={5} />
          <div className="flex justify-end">
            <Button type="submit" disabled={status === "sending"}>
              {status === "sending" ? "送信中..." : "送信"}
            </Button>
          </div>
          {status === "ok" && <p className="text-xs text-green-400">送信しました。ご連絡ありがとうございます。</p>}
          {status === "error" && <p className="text-xs text-red-400">{error}</p>}
        </form>
      </Card>
    </div>
  )
}

