"use client"

import { ContactSection } from "@/components/sections/contact-section"
import { CTASection } from "@/components/sections/cta-section"
import { FooterSection } from "@/components/sections/footer-section"
import { HeroSection } from "@/components/sections/hero-section"
import { Navbar } from "@/components/sections/navbar"
import { PortfolioSection } from "@/components/sections/portfolio-section"
import { SeminarsSection } from "@/components/sections/seminars-section"
import { ServicesSection } from "@/components/sections/services-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { StatsSection } from "@/components/sections/stats-section"
import { TeachingSection } from "@/components/sections/teaching-section"

export default function PersonalIntroPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <PortfolioSection />
        <SkillsSection />
        <TeachingSection />
        <SeminarsSection />
        <CTASection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  )
}
