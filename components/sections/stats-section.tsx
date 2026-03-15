"use client"

import { stats } from "@/data"
import { motion } from "framer-motion"

export function StatsSection() {
  return (
    <section id="stats" className="py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/80 ring-1 ring-gray-950/5 shadow-sm rounded-3xl p-6 text-center transition-colors group"
            >
              <p className="text-3xl sm:text-4xl font-bold gradient-text mb-1">
                {stat.value}
              </p>
              <p className="text-sm font-medium text-foreground mb-1">
                {stat.label}
              </p>
              <p className="text-xs text-muted-foreground hidden sm:block">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
