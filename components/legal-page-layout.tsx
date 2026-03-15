"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { ReactNode } from "react"

interface LegalPageLayoutProps {
  title: string
  lastUpdated: string
  children: ReactNode
}

export function LegalPageLayout({ title, lastUpdated, children }: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Simple header */}
      <header className="glass-strong sticky top-0 z-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 h-16 flex items-center">
          <Link
            href="/"
            className="text-lg font-bold tracking-tight text-foreground hover:opacity-80 transition-opacity"
          >
            shogoworks
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>トップページに戻る</span>
        </Link>

        {/* Title */}
        <h1 className="text-3xl font-bold text-foreground mb-2">{title}</h1>
        <p className="text-sm text-muted-foreground mb-10">最終更新日: {lastUpdated}</p>

        {/* Content */}
        <div className="prose prose-invert prose-sm max-w-none">
          <div className="space-y-8 text-muted-foreground leading-relaxed">{children}</div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-white/5">
          <div className="flex justify-center gap-6 mb-4">
            <Link href="/terms-of-service" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              利用規約
            </Link>
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              プライバシーポリシー
            </Link>
          </div>
          <p className="text-xs text-muted-foreground/50">
            &copy; {new Date().getFullYear()} shogoworks. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}
