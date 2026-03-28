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
    <div className="relative min-h-screen bg-white dark:bg-gradient-to-b dark:from-slate-900 dark:via-blue-950 dark:to-slate-900 cyber:bg-black text-slate-900 dark:text-slate-100 cyber:text-[rgb(255,200,200)] overflow-x-hidden transition-colors duration-300">
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
