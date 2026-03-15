"use client"

import { socialLinks, teachingExperience, upcomingSeminars } from "@/data"
import { Briefcase, Calendar, Clock, GraduationCap, MapPin, Sparkles, Users } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
}

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        {/* Page Header */}
        <motion.div {...fadeInUp} className="text-center mb-16">
          <p className="text-sm font-medium text-teal-600 tracking-widest uppercase font-mono mb-3">
            ABOUT
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            田中 省伍
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Web開発 × AI で、ビジネスの課題を解決するフリーランスエンジニア
          </p>
        </motion.div>

        {/* Profile */}
        <motion.div
          {...fadeInUp}
          className="bg-white/80 ring-1 ring-gray-950/5 shadow-sm rounded-3xl p-8 sm:p-10 mb-16"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="relative w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0 shadow-lg ring-1 ring-gray-950/5">
              <div className="absolute inset-0 rounded-2xl gradient-border z-10" />
              <Image
                src="/assets/images/0038f.jpg"
                alt="田中 省伍"
                fill
                className="object-cover"
                style={{ objectPosition: "center 25%" }}
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                System Engineer & AI Instructor
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Webアプリケーション開発とAI技術指導・AI導入支援を専門としています。
                Next.js / React を中心としたモダンなWeb開発から、ChatGPT・Dify等を活用したAI導入支援、
                企業・個人向けのAI活用セミナーまで幅広く対応しています。
              </p>
              <div className="flex gap-3 justify-center md:justify-start">
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
          </div>
        </motion.div>

        {/* Expertise */}
        <motion.div {...fadeInUp} className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-teal-600" />
            </div>
            <div>
              <p className="text-xs font-medium text-teal-600 tracking-widest uppercase font-mono">
                EXPERTISE
              </p>
              <h2 className="text-2xl font-bold text-foreground">専門性</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Web開発",
                description: "Next.js / React を中心に、要件定義から設計・実装・運用まで対応。モダンな技術スタックで高品質なWebアプリケーションを構築。",
              },
              {
                title: "AI導入支援",
                description: "企業のAI活用をサポート。ChatGPT / Dify 等を活用した業務効率化や、AIツールの選定・導入コンサルティング。",
              },
              {
                title: "セミナー・研修",
                description: "企業・個人向けにAI活用セミナーや技術研修を開催。実践的なハンズオン形式で、すぐに業務に活かせるスキルを提供。",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/80 ring-1 ring-gray-950/5 shadow-sm rounded-2xl p-6 transition-colors"
              >
                <h3 className="text-lg font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Teaching Experience */}
        <motion.div {...fadeInUp} className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <p className="text-xs font-medium text-emerald-600 tracking-widest uppercase font-mono">
                EDUCATION
              </p>
              <h2 className="text-2xl font-bold text-foreground">教育活動</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teachingExperience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/80 ring-1 ring-gray-950/5 shadow-sm rounded-2xl p-6 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-foreground">{exp.title}</h3>
                  <span className="px-2.5 py-1 text-xs rounded-full font-medium bg-emerald-50 text-emerald-600 border border-emerald-200 flex-shrink-0 ml-2">
                    {exp.type}
                  </span>
                </div>
                <p className="text-sm text-teal-600 mb-2">{exp.organization}</p>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5" />
                    {exp.students}名
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Current Activities */}
        <motion.div {...fadeInUp} className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-xs font-medium text-blue-600 tracking-widest uppercase font-mono">
                CURRENT ACTIVITIES
              </p>
              <h2 className="text-2xl font-bold text-foreground">現在の活動</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { label: "フリーランスエンジニア", detail: "Webアプリケーション開発・業務システム構築" },
              { label: "AI導入支援コンサルタント", detail: "ChatGPT・AI活用の企業向け導入コンサルティング" },
              { label: "AI活用セミナー講師", detail: "企業・個人向けにAI活用研修を開催" },
              { label: "技術情報の発信", detail: "AI駆動開発・Web技術に関するコンテンツ発信" },
            ].map((activity, index) => (
              <motion.div
                key={activity.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/80 ring-1 ring-gray-950/5 shadow-sm rounded-2xl p-6 transition-colors"
              >
                <h3 className="font-semibold text-foreground mb-2">{activity.label}</h3>
                <p className="text-sm text-muted-foreground">{activity.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Upcoming Seminars */}
        {upcomingSeminars.length > 0 && (
          <motion.div {...fadeInUp}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <p className="text-xs font-medium text-emerald-600 tracking-widest uppercase font-mono">
                  UPCOMING SEMINARS
                </p>
                <h2 className="text-2xl font-bold text-foreground">開催予定のセミナー</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingSeminars.map((seminar, index) => (
                <div
                  key={index}
                  className="relative bg-white/80 ring-1 ring-gray-950/5 shadow-sm rounded-2xl p-6 transition-colors overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-emerald-50 to-transparent rounded-bl-full" />
                  <div className="flex items-start justify-between mb-4 relative z-10">
                    <h3 className="font-semibold text-foreground pr-4">{seminar.title}</h3>
                    <span className="flex-shrink-0 px-3 py-1 text-xs rounded-full font-medium bg-emerald-50 text-emerald-600 border border-emerald-200">
                      {seminar.status}
                    </span>
                  </div>
                  <div className="space-y-2 relative z-10">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 text-emerald-600" />
                      <span>{seminar.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 text-emerald-600" />
                      <span>{seminar.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-emerald-600" />
                      <span>{seminar.venue}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4 text-emerald-600" />
                      <span>{seminar.capacity}</span>
                    </div>
                  </div>
                  <div className="mt-4 relative z-10">
                    <span className="text-lg font-bold gradient-text">{seminar.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
