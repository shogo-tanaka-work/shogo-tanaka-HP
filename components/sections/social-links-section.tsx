"use client"

import { Button } from "@/components/ui/button"
import { socialLinks } from "@/data"

export function SocialLinksSection() {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-bold text-white mb-4 text-center">SNS</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-[180px] sm:max-w-[200px] md:max-w-[420px] mx-auto">
        {socialLinks.map((link, index) => {
          const IconComponent = link.icon
          return (
            <Button
              key={index}
              variant="ghost"
              size="sm"
              className="w-full aspect-square p-0 transition-all duration-200 hover:scale-105 rounded-xl flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)",
                color: "#2b2b2b",
                boxShadow: "0 4px 15px rgba(212, 175, 55, 0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(212, 175, 55, 0.4)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 4px 15px rgba(212, 175, 55, 0.3)"
              }}
              asChild
            >
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full h-full"
              >
                <IconComponent className="w-6 h-6" />
              </a>
            </Button>
          )
        })}
      </div>
    </div>
  )
}
