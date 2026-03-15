"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Background decorations */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-br from-yellow-200/30 via-pink-200/20 to-purple-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-to-br from-purple-200/20 via-teal-200/20 to-blue-200/30 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-shrink-0"
          >
            <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-2xl overflow-hidden shadow-lg ring-1 ring-gray-950/5">
              <div className="absolute inset-0 rounded-2xl gradient-border z-10" />
              <Image
                src="/assets/images/0038f.jpg"
                alt="田中 省伍"
                fill
                className="object-cover"
                style={{ objectPosition: "center 25%" }}
                priority
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-sm font-medium text-teal-600 mb-3 tracking-wide uppercase font-mono">
                System Engineer & AI Instructor
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4"
            >
              <span className="text-foreground">田中 省伍</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl sm:text-2xl font-medium mb-6"
            >
              <span className="gradient-text">Web開発 × AI</span>
              <span className="text-muted-foreground"> で、</span>
              <br className="sm:hidden" />
              <span className="text-foreground">ビジネスの課題を解決する</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-muted-foreground leading-relaxed mb-8 max-w-lg mx-auto md:mx-0"
            >
              Webアプリケーション開発とAI技術指導・AI導入支援を専門としています。
              企業・個人向けにAI活用セミナーやレッスンも開催中。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white border-0 shadow-lg shadow-teal-500/25 px-8"
                asChild
              >
                <Link href="/contact">
                  お問い合わせ
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-200 hover:bg-gray-50 text-foreground px-8"
                asChild
              >
                <Link href="/portfolio">実績を見る</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
