"use client"

import { skills } from "@/data"
import { Code2, Database, Server } from "lucide-react"
import { motion } from "framer-motion"

const categoryConfig = [
  {
    key: "frontend" as const,
    title: "Frontend",
    description: "フロントエンド開発",
    icon: Code2,
    gradient: "bg-teal-50",
    iconColor: "text-teal-600",
    badgeColor: "bg-teal-50 text-teal-600 border-teal-200",
    count: "6 technologies",
  },
  {
    key: "backend" as const,
    title: "Backend",
    description: "バックエンド開発",
    icon: Database,
    gradient: "bg-emerald-50",
    iconColor: "text-emerald-600",
    badgeColor: "bg-emerald-50 text-emerald-600 border-emerald-200",
    count: "8 technologies",
  },
  {
    key: "infra" as const,
    title: "Infrastructure",
    description: "インフラ・クラウド",
    icon: Server,
    gradient: "bg-blue-50",
    iconColor: "text-blue-600",
    badgeColor: "bg-blue-50 text-blue-600 border-blue-200",
    count: "8 technologies",
  },
]

export default function SkillsPage() {
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
            TECH STACK
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Skills
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            技術スタック・対応可能な領域
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categoryConfig.map((cat, index) => {
            const IconComponent = cat.icon
            return (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/80 ring-1 ring-gray-950/5 shadow-sm rounded-2xl p-6 transition-colors"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-10 h-10 rounded-xl ${cat.gradient} flex items-center justify-center`}>
                    <IconComponent className={`w-5 h-5 ${cat.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{cat.title}</h3>
                    <p className="text-xs text-muted-foreground">{cat.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-5">
                  {skills[cat.key].map((skill) => (
                    <span
                      key={skill.name}
                      className={`px-3 py-1.5 text-xs rounded-lg border font-medium ${cat.badgeColor} transition-colors`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
