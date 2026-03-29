"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useTheme } from "next-themes"
import { Github, Linkedin, Mail } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Mohammed-El-Kassoiri",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/Mohammed-El-Kassoiri",
    icon: Linkedin,
  },
  {
    name: "Email",
    url: "mailto:mohammed.kassoiri@gmail.com",
    icon: Mail,
  },
]

const translations = {
  en: {
    subheading: "Let's connect",
    sectionTitle: "Get In Touch",
    description:
      "I'm an AI & Data Engineer open to exciting full-time opportunities in AI, Data Science, and Machine Learning. Let's connect and build something impactful together.",
    cta: "Say Hello 👋",
    copyright: "© 2026 Mohammed El Kassoiri. All rights reserved.",
  },
  fr: {
    subheading: "Restons en contact",
    sectionTitle: "Me Contacter",
    description:
      "Ingénieur IA & Data ouvert à des opportunités passionnantes en IA, Data Science et Machine Learning. Connectons-nous et construisons ensemble quelque chose d'impactant.",
    cta: "Dire Bonjour 👋",
    copyright: "© 2026 Mohammed El Kassoiri. Tous droits réservés.",
  },
}

export function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const { theme } = useTheme()
  const { language } = useLanguage()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const isCyber = mounted && theme === "cyber"
  const t = translations[language]

  return (
    <section
      id="contact"
      className="relative py-24 px-6 min-h-screen flex items-center"
      ref={ref}
    >
      <div className="container mx-auto max-w-4xl z-10 relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section header */}
          <p
            className={`text-sm font-semibold tracking-widest uppercase mb-4 ${
              isCyber ? "text-red-400" : "text-blue-400"
            }`}
          >
            {t.subheading}
          </p>

          <h2
            className={`text-4xl md:text-5xl font-extrabold tracking-tight mb-6 ${
              isCyber ? "text-red-100" : "text-slate-100"
            }`}
          >
            {t.sectionTitle}
          </h2>

          <p
            className={`text-xl mb-14 max-w-2xl mx-auto leading-relaxed ${
              isCyber ? "text-red-200/70" : "text-slate-300"
            }`}
          >
            {t.description}
          </p>

          {/* Social links */}
          <div className="flex justify-center gap-5 mb-14">
            {socialLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ scale: 1.12, y: -3 }}
                  className={`w-16 h-16 backdrop-blur-sm border rounded-2xl transition-all flex items-center justify-center ${
                    isCyber
                      ? "bg-black/60 border-red-900/40 hover:border-red-600/60 text-red-400/60 hover:text-red-400"
                      : "bg-slate-800/50 border-slate-700/60 hover:border-blue-500/50 text-slate-400 hover:text-blue-400"
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              )
            })}
          </div>

          {/* Primary CTA */}
          <motion.a
            href="mailto:mohammed.kassoiri@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className={`inline-block px-12 py-4 font-semibold rounded-xl transition-all shadow-lg ${
              isCyber
                ? "bg-red-700 hover:bg-red-600 text-white shadow-red-900/50"
                : "bg-blue-600 hover:bg-blue-500 text-white shadow-blue-500/30"
            }`}
          >
            {t.cta}
          </motion.a>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={`mt-20 pt-8 border-t ${
              isCyber ? "border-red-900/40" : "border-slate-700/50"
            }`}
          >
            <p
              className={`text-sm ${
                isCyber ? "text-red-400/50" : "text-slate-500"
              }`}
            >
              {t.copyright}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
