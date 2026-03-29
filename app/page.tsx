"use client"

import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { FeaturedProjectPFE } from "@/components/featured-project-pfe"
import { Projects } from "@/components/projects"
import { Research } from "@/components/research"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"

export default function Portfolio() {
  return (
    <div className="relative min-h-screen bg-[#060910] cyber:bg-black text-[#e8eaf5] cyber:text-[rgb(255,200,200)] overflow-x-hidden transition-colors duration-300">
      {/* Architectural grid overlay */}
      <div className="fixed inset-0 arch-grid pointer-events-none cyber:hidden" />
      {/* Subtle radial vignette */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(197,165,90,0.04)_0%,transparent_60%),radial-gradient(ellipse_at_bottom-right,rgba(91,158,201,0.04)_0%,transparent_60%)] pointer-events-none cyber:hidden" />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <FeaturedProjectPFE />
        <Projects />
        <Research />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}
