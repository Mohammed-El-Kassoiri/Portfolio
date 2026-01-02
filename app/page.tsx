"use client"

import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Research } from "@/components/research"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Fixed at top */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative">
        {/* Hero - Full viewport height */}
        <Hero />
        
        {/* Content Sections - Consistent spacing */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <About />
          <Experience />
          <Projects />
          <Research />
          <Skills />
        </div>
        
        {/* Contact - Full width with background */}
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}
