"use client"

import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react"
import { useMemo } from "react"
import { HeroThreeScene } from "@/components/hero-three-scene"
import { useLanguage } from "@/components/language-provider"

const roles: Record<"en" | "fr", (string | number)[]> = {
  en: [
    "Junior Data Scientist & AI Engineer Building Intelligent Systems",
    2200,
    "Machine Learning • Deep Learning • Computer Vision • NLP",
    2200,
  ],
  fr: [
    "Ingénieur IA & Data Scientist créant des systèmes intelligents",
    2200,
    "Machine Learning • Deep Learning • Vision par ordinateur • NLP",
    2200,
  ],
}

const translations = {
  en: {
    availability: "Available now · Real-time status online",
    description:
      "I design and deploy intelligent AI products with strong engineering discipline, polished UX, and measurable business outcomes.",
    resume: "Resume",
    contact: "Contact",
  },
  fr: {
    availability: "Disponible maintenant · Statut en ligne en temps réel",
    description:
      "Je conçois et déploie des produits d’IA intelligents avec une forte rigueur d’ingénierie, une UX soignée et des résultats métier mesurables.",
    resume: "CV",
    contact: "Contact",
  },
}

const stack = ["Python", "PyTorch", "TensorFlow", "FastAPI", "Next.js", "TypeScript"]

export function Hero() {
  const mouseX = useMotionValue(50)
  const mouseY = useMotionValue(50)
  const { language } = useLanguage()
  const t = translations[language]

  const spotlight = useMotionTemplate`radial-gradient(520px circle at ${mouseX}% ${mouseY}%, rgba(56,189,248,0.14), transparent 60%)`

  const floatingIcons = useMemo(
    () =>
      stack.map((tech, i) => ({
        tech,
        left: `${14 + ((i * 13) % 70)}%`,
        top: `${10 + ((i * 11) % 60)}%`,
        delay: i * 0.1,
      })),
    [],
  )

  return (
    <section
      id="hero"
      className="section-container relative flex min-h-screen items-center overflow-hidden pt-24"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        mouseX.set(((e.clientX - rect.left) / rect.width) * 100)
        mouseY.set(((e.clientY - rect.top) / rect.height) * 100)
      }}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: spotlight }}
      />

      {floatingIcons.map((item) => (
        <motion.span
          key={item.tech}
          className="pointer-events-none absolute hidden rounded-full border border-cyan-400/30 bg-slate-900/70 px-3 py-1 text-[11px] font-semibold text-cyan-200/80 md:inline-flex"
          style={{ left: item.left, top: item.top }}
          animate={{ y: [0, -8, 0] }}
          transition={{
            repeat: Infinity,
            duration: 4.5,
            delay: item.delay,
            ease: "easeInOut",
          }}
        >
          {item.tech}
        </motion.span>
      ))}

      <div className="container mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-7 premium-surface animated-border p-6 md:p-8">
          <motion.span
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-indigo-400/35 bg-indigo-500/10 px-4 py-1.5 text-sm font-semibold text-indigo-300"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-indigo-400" />
            {t.availability}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="display-title max-w-4xl text-balance bg-gradient-to-r from-white via-indigo-300 to-purple-400 bg-clip-text text-transparent"
          >
            MOHAMMED EL KASSOIRI
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="min-h-14 text-lg font-semibold text-cyan-300 md:text-2xl"
          >
            <TypeAnimation sequence={roles[language]} speed={57} repeat={Infinity} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg"
          >
            {t.description}
          </motion.p>

          <div className="flex flex-wrap gap-3 pt-1">
            <motion.a
              data-magnetic
              href="/Mohammed_el_kassoiri.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-500/15 px-5 py-3 text-sm font-semibold text-cyan-100"
            >
              <Download className="h-4 w-4" /> {t.resume}
            </motion.a>
            <motion.a
              data-magnetic
              href="#contact"
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center gap-2 rounded-xl border border-indigo-400/30 bg-indigo-500/15 px-5 py-3 text-sm font-semibold text-indigo-100"
            >
              <Mail className="h-4 w-4" /> {t.contact}
            </motion.a>
            <motion.a
              data-magnetic
              href="https://github.com/Mohammed-El-Kassoiri"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-600 bg-slate-800/70 px-5 py-3 text-sm font-semibold text-slate-200"
            >
              <Github className="h-4 w-4" /> GitHub
            </motion.a>
            <motion.a
              data-magnetic
              href="https://linkedin.com/in/Mohammed-El-Kassoiri"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-600 bg-slate-800/70 px-5 py-3 text-sm font-semibold text-slate-200"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </motion.a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative rounded-3xl border border-slate-700/60 bg-slate-900/35 p-3 shadow-[0_24px_65px_rgba(15,23,42,0.45)] backdrop-blur-md"
        >
          <HeroThreeScene />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cyan-300/80"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
      >
        <ArrowDown className="h-5 w-5" />
      </motion.a>
    </section>
  )
}
