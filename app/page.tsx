"use client"
import { AboutSection } from "@/components/sections/about-section"
import { ContactSection } from "@/components/sections/contact-section"
import { PortfolioSection } from "@/components/sections/portfolio-section"
import { ProfileSection } from "@/components/sections/profile-section"
import { SeminarsSection } from "@/components/sections/seminars-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { SocialLinksSection } from "@/components/sections/social-links-section"
import { TeachingSection } from "@/components/sections/teaching-section"

export default function PersonalIntroPage() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "linear-gradient(135deg, #2b2b2b 0%, #1a1a1a 50%, #333333 100%)" }}
    >
      <div className="container mx-auto px-4 py-8 max-w-md">
        <ProfileSection />
        <AboutSection />
        <SocialLinksSection />
        <PortfolioSection />
        <SkillsSection />
        <TeachingSection />
        <SeminarsSection />
        <ContactSection />

        {/* Footer */}
        <div className="text-center mt-8 pt-6 border-t" style={{ borderColor: "#444444" }}>
          <p className="text-xs text-gray-500">© 2025 shogoworks. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
