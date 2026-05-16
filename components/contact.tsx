"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useTheme } from "next-themes"
import { Github, Linkedin, Mail } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { useMounted } from "@/hooks/use-mounted"
import { SectionHeader } from "@/components/section-header"

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
  const mounted = useMounted()
  const isCyber = mounted && theme === "cyber"
  const t = translations[language]

  return (
    <section
      id="contact"
      className="relative section-container min-h-screen flex items-center"
      ref={ref}
    >
      <div className="container mx-auto max-w-4xl z-10 relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section header */}
          <SectionHeader
            eyebrow={t.subheading}
            title={t.sectionTitle}
            isCyber={isCyber}
            className="mb-6"
          />

          <p
            className={`text-xl mb-12 max-w-2xl mx-auto leading-relaxed ${
              isCyber ? "text-red-200/70" : "text-slate-300"
            }`}
          >
            {t.description}
          </p>

          {/* Social links */}
          <div className="flex justify-center gap-5 mb-12">
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
                  whileHover={{ scale: 1.08, y: -2 }}
                  className={`w-16 h-16 glass-surface border rounded-2xl transition-all flex items-center justify-center interactive-lift ${
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
            className={`inline-block px-12 py-4 font-semibold rounded-xl transition-all shadow-lg interactive-lift ${
              isCyber
                ? "bg-red-700 hover:bg-red-600 text-white shadow-red-900/50"
                : "bg-blue-600 hover:bg-blue-500 text-white shadow-blue-500/30"
            }`}
          >
            {t.cta}
          </motion.a>

          {/* Footer */}
          <motion.footer
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
          </motion.footer>
        </motion.div>
      </div>
    </section>
  )
}
