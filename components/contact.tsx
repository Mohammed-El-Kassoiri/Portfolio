"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useTheme } from "next-themes"
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Mohammed-El-Kassoiri",
    icon: Github,
    label: "github.com/Mohammed-El-Kassoiri",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/Mohammed-El-Kassoiri",
    icon: Linkedin,
    label: "linkedin.com/in/Mohammed-El-Kassoiri",
  },
  {
    name: "Email",
    url: "mailto:mohammed.kassoiri@gmail.com",
    icon: Mail,
    label: "mohammed.kassoiri@gmail.com",
  },
]

const translations = {
  en: {
    subheading: "Let's connect",
    sectionTitle: "Get In Touch",
    description:
      "I'm an AI & Data Engineer open to exciting full-time opportunities in AI, Data Science, and Machine Learning. Let's connect and build something impactful together.",
    cta: "Say Hello",
    copyright: "© 2026 Mohammed El Kassoiri. All rights reserved.",
  },
  fr: {
    subheading: "Restons en contact",
    sectionTitle: "Me Contacter",
    description:
      "Ingénieur IA & Data ouvert à des opportunités passionnantes en IA, Data Science et Machine Learning. Connectons-nous et construisons ensemble quelque chose d'impactant.",
    cta: "Dire Bonjour",
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
      className="relative py-28 px-6 min-h-[80vh] flex items-center"
      ref={ref}
    >
      {/* Section number */}
      {!isCyber && (
        <div className="absolute left-[3%] top-20 text-[15vw] font-black leading-none select-none pointer-events-none text-[rgba(197,165,90,0.025)] tracking-tighter">
          08
        </div>
      )}

      {/* Background glow */}
      {!isCyber && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(197,165,90,0.04)_0%,transparent_70%)] pointer-events-none" />
      )}

      <div className="container mx-auto max-w-5xl z-10 relative w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section header */}
          <div className="mb-16">
            <p className={`text-xs font-mono tracking-[0.3em] uppercase mb-3 ${
              isCyber ? "text-red-400" : "text-[#c5a55a]"
            }`}>
              {`// ${t.subheading.toLowerCase()}`}
            </p>
            <h2 className={`text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6 ${
              isCyber ? "text-red-100" : "text-[#e8eaf5]"
            }`}>
              {t.sectionTitle}
            </h2>
            <div className={`w-16 h-px ${
              isCyber ? "bg-red-600/60" : "bg-[#c5a55a]"
            }`} />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: description + CTA */}
            <div>
              <p className={`text-lg leading-relaxed mb-10 ${
                isCyber ? "text-red-200/70" : "text-[rgba(232,234,245,0.6)]"
              }`}>
                {t.description}
              </p>

              <motion.a
                href="mailto:mohammed.kassoiri@gmail.com"
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3 }}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                className={`group inline-flex items-center gap-4 px-8 py-4 font-bold text-sm tracking-widest uppercase transition-all ${
                  isCyber
                    ? "bg-red-700 hover:bg-red-600 text-white"
                    : "bg-[#c5a55a] hover:bg-[#d4b569] text-[#060910]"
                }`}
              >
                <Mail className="w-4 h-4" />
                {t.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>

            {/* Right: social links */}
            <div className="space-y-3">
              {socialLinks.map((link, index) => {
                const Icon = link.icon
                return (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                    whileHover={{ x: 4 }}
                    className={`group flex items-center gap-4 p-4 border transition-all duration-300 ${
                      isCyber
                        ? "bg-black/40 border-red-900/40 hover:border-red-600/50 hover:bg-red-900/10"
                        : "bg-[rgba(11,21,37,0.6)] border-[rgba(197,165,90,0.1)] hover:border-[rgba(197,165,90,0.35)] hover:bg-[rgba(197,165,90,0.04)]"
                    }`}
                  >
                    <div className={`w-10 h-10 flex items-center justify-center border flex-shrink-0 transition-colors ${
                      isCyber
                        ? "border-red-700/40 bg-red-900/10 text-red-400 group-hover:border-red-500/60"
                        : "border-[rgba(197,165,90,0.2)] bg-[rgba(197,165,90,0.06)] text-[#c5a55a] group-hover:border-[rgba(197,165,90,0.4)]"
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className={`text-xs font-bold uppercase tracking-widest mb-0.5 ${
                        isCyber ? "text-red-300/80" : "text-[#e8eaf5]"
                      }`}>
                        {link.name}
                      </div>
                      <div className={`text-xs font-mono ${
                        isCyber ? "text-red-400/50" : "text-[rgba(197,165,90,0.45)]"
                      }`}>
                        {link.label}
                      </div>
                    </div>
                    <ArrowRight className={`w-4 h-4 ml-auto transition-transform group-hover:translate-x-1 ${
                      isCyber ? "text-red-400/30" : "text-[rgba(197,165,90,0.3)]"
                    }`} />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className={`mt-20 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${
              isCyber ? "border-red-900/30" : "border-[rgba(197,165,90,0.1)]"
            }`}
          >
            <p className={`text-xs font-mono tracking-wider ${
              isCyber ? "text-red-400/40" : "text-[rgba(197,165,90,0.35)]"
            }`}>
              {t.copyright}
            </p>
            <div className={`text-xs font-mono tracking-wider ${
              isCyber ? "text-red-400/30" : "text-[rgba(197,165,90,0.25)]"
            }`}>
              Built with Next.js · TypeScript · Tailwind CSS
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

