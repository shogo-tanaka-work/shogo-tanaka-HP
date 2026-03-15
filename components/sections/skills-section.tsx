"use client"

import { skills } from "@/data"
import { Code2, Database, Server } from "lucide-react"
import { motion } from "framer-motion"

const categoryConfig = [
  {
    key: "frontend" as const,
    title: "Frontend",
    icon: Code2,
    gradient: "from-indigo-500/20 to-blue-500/20",
    badgeColor: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
  },
  {
    key: "backend" as const,
    title: "Backend",
    icon: Database,
    gradient: "from-violet-500/20 to-purple-500/20",
    badgeColor: "bg-violet-500/10 text-violet-300 border-violet-500/20",
  },
  {
    key: "infra" as const,
    title: "Infrastructure",
    icon: Server,
    gradient: "from-blue-500/20 to-cyan-500/20",
    badgeColor: "bg-blue-500/10 text-blue-300 border-blue-500/20",
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-foreground mb-3">Skills</h2>
          <p className="text-muted-foreground">技術スタック・対応可能な領域</p>
        </motion.div>

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
                className="glass rounded-2xl p-6 hover:border-indigo-500/20 transition-colors"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center`}>
                    <IconComponent className="w-5 h-5 text-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground">{cat.title}</h3>
                </div>

                {/* Skill badges */}
                <div className="flex flex-wrap gap-2">
                  {skills[cat.key].map((skill) => (
                    <span
                      key={skill.name}
                      className={`px-3 py-1.5 text-xs rounded-lg border font-medium ${cat.badgeColor} transition-colors hover:bg-opacity-20`}
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
    </section>
  )
}
