"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react"
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
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 pt-16">
      {/* Subtle background pattern — adapts to theme */}
      <div
        className={
          isCyber
            ? "absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(220,38,38,0.08)_0%,transparent_50%),radial-gradient(circle_at_70%_80%,rgba(239,68,68,0.05)_0%,transparent_50%)]"
            : "absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.07)_0%,transparent_50%),radial-gradient(circle_at_70%_80%,rgba(96,165,250,0.07)_0%,transparent_50%)]"
        }
      />

      {/* Cyber scanline accent */}
      {isCyber && (
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, #dc2626 2px, #dc2626 4px)",
          }}
        />
      )}

      <div className="container mx-auto max-w-7xl z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side — text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-7"
          >
            {/* Greeting badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium border ${
                isCyber
                  ? "bg-red-900/20 border-red-700/40 text-red-300"
                  : "bg-blue-500/10 border-blue-500/30 text-blue-300"
              }`}
            >
              <span className={`h-2 w-2 rounded-full ${isCyber ? "bg-red-500" : "bg-blue-400"} animate-pulse`} />
              {language === "en" ? "Available for opportunities" : "Disponible pour des opportunités"}
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className={isCyber ? "text-red-100" : "text-slate-100"}>Mohammed</span>
              <br />
              <span
                className={
                  isCyber
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300 animate-gradient"
                    : "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 animate-gradient"
                }
              >
                El Kassoiri
              </span>
            </motion.h1>

            <div
              className={`text-2xl md:text-3xl h-16 flex items-center font-semibold ${
                isCyber ? "text-red-400" : "text-blue-400"
              }`}
            >
              {/* key=language forces a remount when language toggles so the
                  new language's sequence starts immediately — intentional. */}
              <TypeAnimation
                key={language}
                sequence={t.roles}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            <motion.p
              className={`text-lg md:text-xl max-w-xl leading-relaxed ${
                isCyber ? "text-red-200/80" : "text-slate-300"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {t.description}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <motion.button
                whileHover={{ y: -3, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`px-8 py-3.5 font-semibold rounded-xl transition-all shadow-lg ${
                  isCyber
                    ? "bg-red-700 hover:bg-red-600 text-white shadow-red-900/50"
                    : "bg-blue-600 hover:bg-blue-500 text-white shadow-blue-500/30"
                }`}
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {t.viewProjects}
              </motion.button>
              <motion.button
                whileHover={{ y: -3, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`px-8 py-3.5 border-2 font-semibold rounded-xl transition-all ${
                  isCyber
                    ? "border-red-600 text-red-400 hover:bg-red-600/10"
                    : "border-blue-500 text-blue-400 hover:bg-blue-500/10"
                }`}
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {t.contactMe}
              </motion.button>
            </motion.div>

            <motion.div
              className="flex gap-5 pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              {[
                {
                  href: "https://github.com/Mohammed-El-Kassoiri",
                  icon: <Github className="w-5 h-5" />,
                  label: "GitHub",
                },
                {
                  href: "https://linkedin.com/in/Mohammed-El-Kassoiri",
                  icon: <Linkedin className="w-5 h-5" />,
                  label: "LinkedIn",
                },
                {
                  href: "mailto:mohammed.kassoiri@gmail.com",
                  icon: <Mail className="w-5 h-5" />,
                  label: "Email",
                },
              ].map(({ href, icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -3 }}
                  className={`p-2.5 rounded-lg border transition-all ${
                    isCyber
                      ? "border-red-800/40 text-red-400/70 hover:text-red-400 hover:border-red-600/60 hover:bg-red-900/20"
                      : "border-slate-700 text-slate-400 hover:text-blue-400 hover:border-blue-500/50 hover:bg-slate-800/50"
                  }`}
                >
                  {icon}
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
              {/* Gradient orb */}
              <motion.div
                className={`absolute inset-0 rounded-full blur-3xl ${
                  isCyber
                    ? "bg-gradient-to-br from-red-700/25 to-red-900/10"
                    : "bg-gradient-to-br from-blue-600/20 to-cyan-400/10"
                }`}
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Code window */}
              <motion.div
                className={`relative backdrop-blur-sm rounded-2xl p-6 shadow-2xl border ${
                  isCyber
                    ? "bg-black/80 border-red-900/50"
                    : "bg-slate-900/70 border-slate-700/60"
                }`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Window chrome */}
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span
                    className={`ml-2 text-xs font-mono ${
                      isCyber ? "text-red-400/50" : "text-slate-500"
                    }`}
                  >
                    engineer.py
                  </span>
                </div>
                <pre
                  className={`text-sm font-mono leading-relaxed overflow-x-auto ${
                    isCyber ? "text-red-300/90" : "text-slate-300"
                  }`}
                >
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
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className={isCyber ? "text-red-500" : "text-blue-400"}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  )
}
