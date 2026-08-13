"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { FeaturedProjectPFE } from "@/components/featured-project-pfe"
import { Projects } from "@/components/projects"
import { Research } from "@/components/research"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { AIBackground } from "@/components/ai-background"
import { ScrollProgress } from "@/components/scroll-progress"
import { PageLoader } from "@/components/page-loader"
import { CustomCursor } from "@/components/custom-cursor"
import { PortfolioCommandPalette } from "@/components/command-palette"
import { ScrollOrchestrator } from "@/components/scroll-orchestrator"
import { CommandPaletteProvider } from "@/components/command-palette-provider"

export default function Portfolio() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1200)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <CommandPaletteProvider>
      <div className="relative min-h-screen overflow-x-hidden text-slate-100">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <PageLoader loading={loading} />
        <CustomCursor />
        <ScrollProgress />
        <AIBackground />
        <ScrollOrchestrator />
        <Navigation />
        <PortfolioCommandPalette />

        <main id="main-content" className="relative isolate">
          <AnimatePresence mode="wait">
            {!loading && (
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
              >
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
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </CommandPaletteProvider>
  )
}
