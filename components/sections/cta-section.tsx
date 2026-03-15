"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function CTASection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl p-8 sm:p-12 text-center"
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-50" />
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-yellow-200/40 via-pink-200/30 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-br from-purple-200/30 via-teal-200/20 to-transparent rounded-full blur-3xl" />

          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              プロジェクトについて
              <br className="sm:hidden" />
              <span className="gradient-text">ご相談ください</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Web開発・AI導入・セミナーなど、お気軽にお問い合わせください。
              初回のご相談は無料です。
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white border-0 shadow-lg shadow-teal-500/25 px-8"
              asChild
            >
              <Link href="/contact">
                お問い合わせはこちら
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
