"use client"

import { teachingExperience } from "@/data"
import { Clock, ExternalLink, Users } from "lucide-react"
import { motion } from "framer-motion"

export function TeachingSection() {
  const isValidUrl = (url?: string): boolean => {
    if (!url || url.trim() === "" || url === "#") return false
    return true
  }

  return (
    <section id="teaching" className="py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-foreground mb-3">Teaching</h2>
          <p className="text-muted-foreground">講師実績・セミナー開催</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-teal-500/50 via-emerald-500/50 to-transparent hidden sm:block" />

          <div className="space-y-6">
            {teachingExperience.map((experience, index) => {
              const clickable = isValidUrl(experience.url)
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col sm:flex-row ${
                    isEven ? "sm:flex-row" : "sm:flex-row-reverse"
                  } gap-4 sm:gap-8`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 top-6 w-3 h-3 rounded-full bg-teal-500 -translate-x-1.5 hidden sm:block ring-4 ring-background z-10" />

                  {/* Spacer for timeline alignment */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Card */}
                  <div
                    className={`sm:w-1/2 glass rounded-2xl p-5 transition-all duration-300 hover:border-teal-500/20 ${
                      clickable ? "cursor-pointer" : ""
                    }`}
                    onClick={() => {
                      if (clickable) window.open(experience.url, "_blank", "noopener,noreferrer")
                    }}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1 flex items-center gap-2">
                          {experience.title}
                          {clickable && <ExternalLink className="w-3.5 h-3.5 text-muted-foreground" />}
                        </h3>
                        <p className="text-sm text-teal-400">{experience.organization}</p>
                      </div>
                      <span className="px-2.5 py-1 text-xs rounded-full font-medium bg-teal-500/10 text-teal-300 border border-teal-500/20">
                        {experience.type}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                      {experience.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {experience.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5" />
                        {experience.students}名指導
                      </span>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
