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
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
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
        <div className="prose prose-sm max-w-none">
          <div className="space-y-8 text-muted-foreground leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  )
}
