"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { useLanguage } from "@/components/language-provider"

const translations = {
  en: {
    description:
      "Building the future with AI and Machine Learning. Passionate about designing intelligent systems that drive real-world impact.",
    viewProjects: "View Projects",
    contactMe: "Contact Me",
    roles: [
      "AI Engineer",
      2000,
      "Data Scientist",
      2000,
      "Machine Learning Expert",
      2000,
      "Deep Learning Researcher",
      2000,
    ] as (string | number)[],
  },
  fr: {
    description:
      "Construire l'avenir avec l'IA et le Machine Learning. Passionné par la conception de systèmes intelligents à fort impact réel.",
    viewProjects: "Voir les projets",
    contactMe: "Me contacter",
    roles: [
      "Ingénieur IA",
      2000,
      "Data Scientist",
      2000,
      "Expert Machine Learning",
      2000,
      "Chercheur Deep Learning",
      2000,
    ] as (string | number)[],
  },
}

export function Hero() {
  const { theme } = useTheme()
  const { language } = useLanguage()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const isCyber = mounted && theme === "cyber"
  const t = translations[language]

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 pt-16 overflow-hidden">

      {/* Dark theme: architectural radial glows */}
      {!isCyber && (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_20%_40%,rgba(197,165,90,0.06)_0%,transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_80%_70%,rgba(91,158,201,0.05)_0%,transparent_60%)]" />
        </>
      )}

      {/* Cyber theme: red glow */}
      {isCyber && (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(220,38,38,0.08)_0%,transparent_50%),radial-gradient(circle_at_70%_80%,rgba(239,68,68,0.05)_0%,transparent_50%)]" />
          <div
            className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.03]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, #dc2626 2px, #dc2626 4px)",
            }}
          />
        </>
      )}

      {/* Architectural: large faint section number */}
      {!isCyber && (
        <div className="absolute right-[5%] top-1/2 -translate-y-1/2 text-[20vw] font-black leading-none select-none pointer-events-none text-[rgba(197,165,90,0.025)] tracking-tighter">
          01
        </div>
      )}

      <div className="container mx-auto max-w-7xl z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side — text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className={`inline-flex items-center gap-2.5 px-4 py-1.5 text-xs font-medium tracking-widest uppercase border ${
                isCyber
                  ? "border-red-700/40 text-red-300 bg-red-900/10"
                  : "border-[rgba(197,165,90,0.3)] text-[#c5a55a] bg-[rgba(197,165,90,0.05)]"
              }`}
            >
              <span className={`h-1.5 w-1.5 rounded-full animate-pulse ${isCyber ? "bg-red-500" : "bg-[#c5a55a]"}`} />
              {language === "en" ? "Available for opportunities" : "Disponible pour des opportunités"}
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className={`text-sm font-mono tracking-[0.3em] uppercase mb-2 ${
                isCyber ? "text-red-400/60" : "text-[rgba(197,165,90,0.5)]"
              }`}>
                Mohammed El Kassoiri
              </div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter">
                <span className={isCyber ? "text-red-100" : "text-[#e8eaf5]"}>AI</span>
                <br />
                <span
                  className={
                    isCyber
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300 animate-gradient"
                      : "text-transparent bg-clip-text bg-gradient-to-r from-[#c5a55a] via-[#e2c980] to-[#c5a55a] animate-gradient"
                  }
                >
                  Engineer
                </span>
                <br />
                <span className={`text-4xl md:text-5xl lg:text-6xl font-bold ${
                  isCyber ? "text-red-200/60" : "text-[rgba(232,234,245,0.45)]"
                }`}>
                  & Data Scientist
                </span>
              </h1>
            </motion.div>

            {/* Animated role */}
            <div className={`text-xl md:text-2xl h-10 flex items-center font-mono ${
              isCyber ? "text-red-400" : "text-[#c5a55a]"
            }`}>
              <span className={isCyber ? "text-red-600/50" : "text-[rgba(197,165,90,0.4)]"}>→</span>
              &nbsp;
              <TypeAnimation
                key={language}
                sequence={t.roles}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            <motion.p
              className={`text-base md:text-lg max-w-lg leading-relaxed ${
                isCyber ? "text-red-200/70" : "text-[rgba(232,234,245,0.6)]"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {t.description}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <motion.button
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.97 }}
                className={`group flex items-center gap-3 px-7 py-3.5 font-semibold text-sm tracking-wider uppercase transition-all ${
                  isCyber
                    ? "bg-red-700 hover:bg-red-600 text-white"
                    : "bg-[#c5a55a] hover:bg-[#d4b569] text-[#060910]"
                }`}
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {t.viewProjects}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.97 }}
                className={`group flex items-center gap-3 px-7 py-3.5 border font-semibold text-sm tracking-wider uppercase transition-all ${
                  isCyber
                    ? "border-red-700/60 text-red-400 hover:bg-red-900/20"
                    : "border-[rgba(197,165,90,0.4)] text-[#c5a55a] hover:bg-[rgba(197,165,90,0.05)] hover:border-[rgba(197,165,90,0.7)]"
                }`}
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {t.contactMe}
              </motion.button>
            </motion.div>

            {/* Social links */}
            <motion.div
              className="flex gap-3 pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              {[
                {
                  href: "https://github.com/Mohammed-El-Kassoiri",
                  icon: <Github className="w-4 h-4" />,
                  label: "GitHub",
                },
                {
                  href: "https://linkedin.com/in/Mohammed-El-Kassoiri",
                  icon: <Linkedin className="w-4 h-4" />,
                  label: "LinkedIn",
                },
                {
                  href: "mailto:mohammed.kassoiri@gmail.com",
                  icon: <Mail className="w-4 h-4" />,
                  label: "Email",
                },
              ].map(({ href, icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  whileHover={{ y: -2 }}
                  className={`p-2.5 border text-xs font-medium tracking-wider uppercase flex items-center gap-2 transition-all ${
                    isCyber
                      ? "border-red-800/40 text-red-400/60 hover:text-red-400 hover:border-red-600/60 hover:bg-red-900/10"
                      : "border-[rgba(197,165,90,0.2)] text-[rgba(197,165,90,0.5)] hover:text-[#c5a55a] hover:border-[rgba(197,165,90,0.5)] hover:bg-[rgba(197,165,90,0.05)]"
                  }`}
                >
                  {icon}
                  <span className="hidden sm:inline">{label}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side — code window mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg">
              {/* Glow orb */}
              <motion.div
                className={`absolute inset-0 blur-3xl ${
                  isCyber
                    ? "bg-gradient-to-br from-red-700/20 to-red-900/10"
                    : "bg-gradient-to-br from-[rgba(197,165,90,0.12)] to-[rgba(91,158,201,0.08)]"
                }`}
                animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Code window */}
              <motion.div
                className={`relative backdrop-blur-sm p-0 shadow-2xl border ${
                  isCyber
                    ? "bg-black/90 border-red-900/50"
                    : "bg-[rgba(11,21,37,0.95)] border-[rgba(197,165,90,0.15)]"
                }`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.01 }}
              >
                {/* Window chrome */}
                <div className={`flex items-center justify-between px-4 py-3 border-b ${
                  isCyber ? "border-red-900/40" : "border-[rgba(197,165,90,0.1)]"
                }`}>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                  </div>
                  <span className={`text-xs font-mono ${
                    isCyber ? "text-red-400/40" : "text-[rgba(197,165,90,0.35)]"
                  }`}>
                    engineer.py
                  </span>
                  <div />
                </div>
                <div className="p-6">
                  <pre className={`text-sm font-mono leading-relaxed overflow-x-auto ${
                    isCyber ? "text-red-300/90" : "text-[rgba(232,234,245,0.75)]"
                  }`}>
{`class Engineer:
  name = "Mohammed El Kassoiri"
  skills = {
    "AI":   ["ML", "Deep Learning",
             "Computer Vision", "NLP"],
    "Code": ["Python", "JS", "SQL"],
    "Infra":["PyTorch", "TensorFlow",
             "FastAPI", "GEE"],
  }
  status = "Open to opportunities 🚀"

  def mission(self):
    return "Build AI that matters."`}
                  </pre>
                </div>

                {/* Bottom accent line */}
                <div className={`h-px ${
                  isCyber
                    ? "bg-gradient-to-r from-transparent via-red-600/60 to-transparent"
                    : "bg-gradient-to-r from-transparent via-[rgba(197,165,90,0.4)] to-transparent"
                }`} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className={`flex flex-col items-center gap-2 ${isCyber ? "text-red-500/60" : "text-[rgba(197,165,90,0.4)]"}`}
        >
          <div className={`w-px h-12 ${
            isCyber
              ? "bg-gradient-to-b from-red-600/60 to-transparent"
              : "bg-gradient-to-b from-[rgba(197,165,90,0.6)] to-transparent"
          }`} />
          <span className="text-[10px] tracking-[0.3em] uppercase font-mono">Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  )
}
