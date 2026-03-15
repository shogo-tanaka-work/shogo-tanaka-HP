"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { socialLinks } from "@/data"
import { Mail, Send } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle")
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (status === "ok") {
      const timer = setTimeout(() => setStatus("idle"), 3000)
      return () => clearTimeout(timer)
    }
  }, [status])

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
    } catch {
      setError("送信に失敗しました")
      setStatus("error")
    }
  }

  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-teal-600 tracking-widest uppercase font-mono mb-3">
            CONTACT
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            お問い合わせ
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            お気軽にお問い合わせください。初回のご相談は無料です。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 space-y-6"
          >
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-2">
                お仕事のご相談
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Web開発・AI導入支援・セミナーなど、
                まずはお気軽にお問い合わせください。
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="w-9 h-9 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-teal-600" />
                </div>
                <span>お問い合わせフォームからどうぞ</span>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-foreground mb-3">SNS</p>
              <div className="flex gap-3">
                {socialLinks.map((link) => {
                  const IconComponent = link.icon
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-teal-50 flex items-center justify-center text-muted-foreground hover:text-teal-600 transition-colors"
                      aria-label={link.name}
                    >
                      <IconComponent className="w-4 h-4" />
                    </a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-3"
          >
            <div className="bg-white/80 ring-1 ring-gray-950/5 shadow-sm rounded-2xl p-6">
              <form onSubmit={submit} className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="text-sm font-medium text-foreground mb-1.5 block">
                    お名前
                  </label>
                  <Input
                    id="contact-name"
                    placeholder="田中 太郎"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="bg-gray-50 border-gray-200 focus:border-teal-500 focus:ring-teal-500/20 placeholder:text-muted-foreground/50"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="text-sm font-medium text-foreground mb-1.5 block">
                    メールアドレス
                  </label>
                  <Input
                    id="contact-email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-gray-50 border-gray-200 focus:border-teal-500 focus:ring-teal-500/20 placeholder:text-muted-foreground/50"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="text-sm font-medium text-foreground mb-1.5 block">
                    お問い合わせ内容
                  </label>
                  <Textarea
                    id="contact-message"
                    placeholder="ご相談内容をお書きください"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={5}
                    className="bg-gray-50 border-gray-200 focus:border-teal-500 focus:ring-teal-500/20 placeholder:text-muted-foreground/50 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white border-0 shadow-lg shadow-teal-500/25 py-5"
                >
                  {status === "sending" ? (
                    "送信中..."
                  ) : (
                    <>
                      送信する
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
                {status === "ok" && (
                  <p className="text-sm text-emerald-600 text-center">
                    送信しました。ご連絡ありがとうございます。
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm text-red-500 text-center">{error}</p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
