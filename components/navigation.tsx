"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Moon, Zap } from "lucide-react"
import { useTheme } from "next-themes"
import { useLanguage } from "@/components/language-provider"
import { cn } from "@/lib/utils"

/** Section IDs are language-independent — kept as a stable constant. */
const NAV_IDS = [
  "hero",
  "about",
  "experience",
  "pfe",
  "projects",
  "research",
  "skills",
  "contact",
] as const

const navLabels = {
  en: {
    home: "Home",
    about: "About",
    experience: "Experience",
    pfe: "PFE",
    projects: "Projects",
    research: "Research",
    skills: "Skills",
    contact: "Contact",
    resume: "Resume",
    switchToCyber: "Switch to cyber theme",
    switchToDark: "Switch to dark theme",
  },
  fr: {
    home: "Accueil",
    about: "À propos",
    experience: "Expérience",
    pfe: "PFE",
    projects: "Projets",
    research: "Recherche",
    skills: "Compétences",
    contact: "Contact",
    resume: "CV",
    switchToCyber: "Passer au thème cyber",
    switchToDark: "Passer au thème sombre",
  },
}

const themeOrder = ["dark", "cyber"] as const
type Theme = (typeof themeOrder)[number]

function nextTheme(current: string | undefined): Theme {
  const idx = themeOrder.indexOf((current ?? "dark") as Theme)
  return themeOrder[(idx + 1) % themeOrder.length]
}

function ThemeIcon({ theme }: { theme: string | undefined }) {
  if (theme === "cyber") return <Moon className="w-4 h-4" />
  return <Zap className="w-4 h-4" />
}

export function Navigation() {
  const [activeSection, setActiveSection] = useState("hero")
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const { language, toggleLanguage } = useLanguage()

  const t = navLabels[language]

  const navItems = [
    { id: "hero", label: t.home },
    { id: "about", label: t.about },
    { id: "experience", label: t.experience },
    { id: "pfe", label: t.pfe },
    { id: "projects", label: t.projects },
    { id: "research", label: t.research },
    { id: "skills", label: t.skills },
    { id: "contact", label: t.contact },
  ]

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = NAV_IDS.map((id) => document.getElementById(id))
      const scrollPosition = window.scrollY + 200

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(NAV_IDS[i])
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const isCyber = mounted && theme === "cyber"
  const themeLabel = isCyber ? t.switchToDark : t.switchToCyber

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? isCyber
            ? "bg-black/95 backdrop-blur-xl border-b border-red-900/40"
            : "bg-[#060910]/95 backdrop-blur-xl border-b border-[rgba(197,165,90,0.15)]"
          : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo mark */}
          <motion.button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.02 }}
          >
            <div className={cn(
              "w-8 h-8 border flex items-center justify-center text-xs font-bold tracking-wider transition-all",
              isCyber
                ? "border-red-600/60 text-red-400 group-hover:bg-red-600/10"
                : "border-[rgba(197,165,90,0.5)] text-[#c5a55a] group-hover:bg-[rgba(197,165,90,0.08)]"
            )}>
              MK
            </div>
            <span className={cn(
              "hidden sm:block text-xs tracking-[0.2em] uppercase font-medium transition-colors",
              isCyber ? "text-red-400/60" : "text-[rgba(197,165,90,0.5)]"
            )}>
              Portfolio
            </span>
          </motion.button>

          {/* Nav links */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "px-3 py-2 text-xs font-medium tracking-wider uppercase transition-all duration-300 relative",
                  activeSection === item.id
                    ? isCyber ? "text-red-400" : "text-[#c5a55a]"
                    : isCyber
                    ? "text-red-200/50 hover:text-red-400"
                    : "text-[rgba(232,234,245,0.5)] hover:text-[#e8eaf5]",
                )}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className={cn(
                      "absolute bottom-0 left-0 right-0 h-px",
                      isCyber ? "bg-red-500" : "bg-[#c5a55a]",
                    )}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            {mounted && (
              <motion.button
                onClick={toggleLanguage}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={language === "en" ? "Switch to French" : "Switch to English"}
                title={language === "en" ? "Switch to French" : "Switch to English"}
                className={cn(
                  "px-2.5 py-1 text-xs font-bold tracking-widest border transition-all duration-300",
                  isCyber
                    ? "border-red-700/50 text-red-400 hover:bg-red-900/30"
                    : "border-[rgba(197,165,90,0.3)] text-[rgba(197,165,90,0.7)] hover:text-[#c5a55a] hover:border-[rgba(197,165,90,0.6)] hover:bg-[rgba(197,165,90,0.05)]",
                )}
              >
                {language === "en" ? "FR" : "EN"}
              </motion.button>
            )}

            {mounted && (
              <motion.button
                onClick={() => setTheme(nextTheme(theme))}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={themeLabel}
                title={themeLabel}
                className={cn(
                  "p-2 border transition-all duration-300",
                  isCyber
                    ? "border-red-700/50 text-red-400 hover:bg-red-900/30"
                    : "border-[rgba(197,165,90,0.3)] text-[rgba(197,165,90,0.7)] hover:text-[#c5a55a] hover:border-[rgba(197,165,90,0.6)] hover:bg-[rgba(197,165,90,0.05)]",
                )}
              >
                <ThemeIcon theme={theme} />
              </motion.button>
            )}

            <motion.a
              href="/Mohammed_el_kassoiri.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={cn(
                "px-4 py-1.5 text-xs font-bold tracking-widest uppercase border transition-all duration-300",
                isCyber
                  ? "border-red-600 text-red-400 hover:bg-red-600/10"
                  : "border-[#c5a55a] text-[#c5a55a] hover:bg-[rgba(197,165,90,0.1)]",
              )}
            >
              {mounted ? t.resume : "Resume"}
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

