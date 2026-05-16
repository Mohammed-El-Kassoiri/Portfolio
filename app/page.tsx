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
    <div className="relative min-h-screen overflow-x-hidden text-slate-100 transition-colors duration-300 cyber:text-[rgb(255,200,200)]">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <ScrollProgress />
      <AIBackground />
      <Navigation />
      <main id="main-content" className="relative isolate">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60rem_30rem_at_50%_-10%,rgba(96,165,250,0.15),transparent_70%)] cyber:bg-[radial-gradient(60rem_30rem_at_50%_-10%,rgba(239,68,68,0.15),transparent_70%)]"
        />
        <Hero />
        <div className="section-divider">
          <About />
        </div>
        <div className="section-divider">
          <Experience />
        </div>
        <div className="section-divider">
          <FeaturedProjectPFE />
        </div>
        <div className="section-divider">
          <Projects />
        </div>
        <div className="section-divider">
          <Research />
        </div>
        <div className="section-divider">
          <Skills />
        </div>
        <div className="section-divider">
          <Contact />
        </div>
      </main>
    </div>
  )
}
