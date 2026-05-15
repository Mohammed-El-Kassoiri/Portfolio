"use client"

import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Research } from "@/components/research"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { AIBackground } from "@/components/ai-background"
import { FeaturedProjectPFE } from "@/components/featured-project-pfe"
import { ScrollProgress } from "@/components/scroll-progress"

export default function Portfolio() {
  return (
    <div className="relative min-h-screen text-slate-100 cyber:text-[rgb(255,200,200)] overflow-x-hidden transition-colors duration-300">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <ScrollProgress />
      <AIBackground />
      <Navigation />
      <main id="main-content">
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
