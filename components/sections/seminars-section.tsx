"use client"

import { Button } from "@/components/ui/button"
import { upcomingSeminars } from "@/data"
import { Calendar, Clock, MapPin, Users } from "lucide-react"
import { motion } from "framer-motion"

export function SeminarsSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-foreground mb-3">Seminars</h2>
          <p className="text-muted-foreground">開催予定のセミナー</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {upcomingSeminars.map((seminar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative glass rounded-2xl p-6 hover:border-teal-500/20 transition-colors overflow-hidden"
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-teal-500/10 to-transparent rounded-bl-full" />

              {/* Status badge */}
              <div className="flex items-start justify-between mb-4 relative z-10">
                <h3 className="font-semibold text-foreground pr-4">{seminar.title}</h3>
                <span
                  className={`flex-shrink-0 px-3 py-1 text-xs rounded-full font-medium ${
                    seminar.status === "残り5席"
                      ? "bg-red-500/10 text-red-400 border border-red-500/20"
                      : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                  }`}
                >
                  {seminar.status}
                </span>
              </div>

              {/* Details */}
              <div className="space-y-2 mb-5 relative z-10">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 text-teal-400" />
                  <span>{seminar.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 text-teal-400" />
                  <span>{seminar.time}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-teal-400" />
                  <span>{seminar.venue}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="w-4 h-4 text-teal-400" />
                  <span>{seminar.capacity}</span>
                </div>
              </div>

              {/* Price & CTA */}
              <div className="flex items-center justify-between relative z-10">
                <span className="text-lg font-bold gradient-text">{seminar.price}</span>
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white border-0 shadow-lg shadow-teal-500/25"
                >
                  詳細・申込み
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
