"use client"

import { webApps } from "@/data"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export function PortfolioSection() {
  const isValidUrl = (url: string): boolean => {
    if (!url || url.trim() === "" || url === "#") return false
    return true
  }

  const handleCardClick = (url: string) => {
    if (isValidUrl(url)) {
      window.open(url, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <section id="portfolio" className="py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-foreground mb-3">Portfolio</h2>
          <p className="text-muted-foreground">制作したWebアプリケーション・プロジェクト</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {webApps.map((app, index) => {
            const isClickable = isValidUrl(app.url)
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`glass rounded-2xl overflow-hidden group transition-all duration-300 hover:border-indigo-500/20 ${
                  isClickable ? "cursor-pointer" : "cursor-default"
                }`}
                onClick={() => handleCardClick(app.url)}
              >
                {/* Image */}
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={app.image || "/assets/images/placeholders/placeholder.svg?height=192&width=400"}
                    alt={app.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {isClickable && (
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-semibold text-foreground mb-2">{app.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {app.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {app.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
