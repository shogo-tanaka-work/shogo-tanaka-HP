"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { webApps } from "@/data"

export function PortfolioSection() {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-bold text-white mb-4 text-center">制作実績</h2>
      <div className="space-y-4">
        {webApps.map((app, index) => (
          <Card
            key={index}
            className="border transition-all duration-300 hover:shadow-lg backdrop-blur-sm overflow-hidden"
            style={{
              backgroundColor: "rgba(51, 51, 51, 0.6)",
              borderColor: "rgba(212, 175, 55, 0.2)",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.4)"
              e.currentTarget.style.boxShadow = "0 8px 25px rgba(212, 175, 55, 0.1)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.2)"
              e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.3)"
            }}
          >
            <div className="relative w-full h-32">
              <Image
                src={app.image || "/placeholder.svg?height=128&width=400&query=web application screenshot"}
                alt={app.title}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-white text-sm mb-2">{app.title}</h3>
              <p className="text-gray-400 text-xs mb-3 leading-relaxed">{app.description}</p>
              <div className="flex flex-wrap gap-1">
                {app.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 text-xs rounded-full border font-medium"
                    style={{
                      backgroundColor: "rgba(212, 175, 55, 0.1)",
                      color: "#D4AF37",
                      borderColor: "rgba(212, 175, 55, 0.2)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
