// Build cache fix - rebuild with fresh cache
"use client"

import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { MatrixRain } from "@/components/matrix-rain"
import { DigitalGrid } from "@/components/digital-grid"
import { NeuralNetworkBackground } from "@/components/neural-network-bg"
import { FloatingIcons } from "@/components/floating-icons"

export default function Portfolio() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <MatrixRain />
      <DigitalGrid />
      <NeuralNetworkBackground />
      <FloatingIcons />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}
