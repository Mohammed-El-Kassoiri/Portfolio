"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Moon, Zap, Menu } from "lucide-react"
import { useTheme } from "next-themes"
import { useLanguage } from "@/components/language-provider"
import { cn } from "@/lib/utils"
import { useMounted } from "@/hooks/use-mounted"
import { useCommandPalette } from "@/components/command-palette-provider"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

/** Section IDs are language-independent — kept as a stable constant. */
const NAV_IDS = [
  "hero",
  "about",
  "experience",
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
    projects: "Projects",
    research: "Research",
    skills: "Skills",
    contact: "Contact",
    switchToCyber: "Switch to cyber theme",
    switchToDark: "Switch to dark theme",
  },
  fr: {
    home: "Accueil",
    about: "À propos",
    experience: "Expérience",
    projects: "Projets",
    research: "Recherche",
    skills: "Compétences",
    contact: "Contact",
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
  if (theme === "cyber") return <Moon className="w-5 h-5" />
  return <Zap className="w-5 h-5" />
}

export function Navigation() {
  const [activeSection, setActiveSection] = useState("hero")
  const [scrolled, setScrolled] = useState(false)
  const [openMobileMenu, setOpenMobileMenu] = useState(false)
  const mounted = useMounted()
  const { theme, setTheme } = useTheme()
  const { language, toggleLanguage } = useLanguage()
  const { openPalette } = useCommandPalette()

  const t = navLabels[language]

  const navItems = [
    { id: "hero", label: t.home },
    { id: "about", label: t.about },
    { id: "experience", label: t.experience },
    { id: "projects", label: t.projects },
    { id: "research", label: t.research },
    { id: "skills", label: t.skills },
    { id: "contact", label: t.contact },
  ]

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
    // NAV_IDS is a module-level constant; setState setters from useState are stable
  }, [])

  const isCyber = mounted && theme === "cyber"
  const themeLabel = isCyber ? t.switchToDark : t.switchToCyber

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      aria-label="Main navigation"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? isCyber
            ? "bg-black/85 backdrop-blur-xl border-b border-red-900/50 shadow-[0_8px_28px_rgba(127,29,29,0.2)]"
            : "bg-slate-900/80 backdrop-blur-xl border-b border-slate-700/60 shadow-[0_8px_28px_rgba(15,23,42,0.35)]"
          : "bg-transparent",
      )}
    >
      <div className="container mx-auto container-padding max-w-7xl">
        <div className="flex items-center justify-between h-16">
          <motion.div
            className="text-xl font-bold tracking-tight"
            whileHover={{ scale: 1.05 }}
          >
            <span className={isCyber ? "text-red-500 cyber-glow" : "text-blue-400"}>
              MK
            </span>
          </motion.div>

          <div className="hidden md:flex items-center gap-1.5">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={activeSection === item.id ? "page" : undefined}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-all duration-300 relative rounded-lg interactive-lift",
                  activeSection === item.id
                    ? isCyber
                      ? "text-red-400"
                      : "text-blue-400"
                    : isCyber
                      ? "text-red-200/70 hover:text-red-400 hover:bg-red-900/20"
                      : "text-slate-300 hover:text-blue-400 hover:bg-slate-800/50",
                )}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className={cn(
                      "absolute bottom-0 left-0 right-0 h-0.5",
                      isCyber ? "bg-red-500" : "bg-blue-500",
                    )}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2.5">
            <Sheet open={openMobileMenu} onOpenChange={setOpenMobileMenu}>
              <SheetTrigger asChild>
                <button
                  className={cn(
                    "md:hidden p-2 rounded-lg transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2",
                    isCyber
                      ? "text-red-300 hover:text-red-200 hover:bg-red-900/30"
                      : "text-slate-300 hover:text-blue-400 hover:bg-slate-800/50",
                  )}
                  aria-label={language === "en" ? "Open menu" : "Ouvrir le menu"}
                >
                  <Menu className="w-5 h-5" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className={cn(
                  "w-[85vw] border-r",
                  isCyber
                    ? "bg-black text-red-100 border-red-900/50"
                    : "bg-slate-900 text-slate-100 border-slate-700/60",
                )}
              >
                <SheetHeader>
                  <SheetTitle className={isCyber ? "text-red-100" : "text-slate-100"}>
                    Navigation
                  </SheetTitle>
                  <SheetDescription
                    className={isCyber ? "text-red-300/70" : "text-slate-400"}
                  >
                    {language === "en" ? "Jump to a section" : "Aller à une section"}
                  </SheetDescription>
                </SheetHeader>
                <div className="px-4 pb-4 space-y-2">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.id}>
                      <a
                        href={`#${item.id}`}
                        aria-current={activeSection === item.id ? "page" : undefined}
                        className={cn(
                          "flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold transition-all",
                          activeSection === item.id
                            ? isCyber
                              ? "bg-red-900/30 text-red-300"
                              : "bg-blue-500/15 text-blue-300"
                            : isCyber
                              ? "text-red-200/80 hover:bg-red-900/20"
                              : "text-slate-300 hover:bg-slate-800/50",
                        )}
                      >
                        {item.label}
                      </a>
                    </SheetClose>
                  ))}
                  {mounted && (
                    <button
                      onClick={() => setTheme(nextTheme(theme))}
                      className={cn(
                        "mt-4 w-full inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-sm font-semibold transition-all",
                        isCyber
                          ? "bg-red-900/30 text-red-300 hover:bg-red-900/40"
                          : "bg-blue-500/15 text-blue-300 hover:bg-blue-500/25",
                      )}
                    >
                      <ThemeIcon theme={theme} />
                      {themeLabel}
                    </button>
                  )}
                </div>
              </SheetContent>
            </Sheet>
            <button
              onClick={openPalette}
              className={cn(
                "hidden lg:inline-flex px-2.5 py-1.5 text-[11px] font-semibold rounded-lg border transition-all",
                isCyber
                  ? "border-red-700/50 text-red-300 hover:bg-red-900/30"
                  : "border-slate-600 text-slate-300 hover:bg-slate-800/50",
              )}
              aria-label="Open command palette"
            >
              Cmd/Ctrl+K
            </button>

            {/* EN / FR language toggle */}
            {mounted && (
              <motion.button
                onClick={toggleLanguage}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={
                  language === "en" ? "Switch to French" : "Switch to English"
                }
                title={language === "en" ? "Switch to French" : "Switch to English"}
                className={cn(
                  "px-3 py-1.5 text-xs font-bold rounded-lg border transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 tracking-wider",
                  isCyber
                    ? "border-red-700/50 text-red-400 hover:bg-red-900/30 focus-visible:outline-red-500"
                    : "border-slate-600 text-slate-300 hover:text-blue-400 hover:border-blue-500/50 hover:bg-slate-800/50 focus-visible:outline-blue-500",
                )}
              >
                {language === "en" ? "FR" : "EN"}
              </motion.button>
            )}

            {/* Theme toggle — cycles dark ↔ cyber */}
            {mounted && (
              <motion.button
                onClick={() => setTheme(nextTheme(theme))}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={themeLabel}
                title={themeLabel}
                className={cn(
                  "p-2 rounded-lg transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2",
                  isCyber
                    ? "text-red-400 hover:text-red-300 hover:bg-red-900/30 focus-visible:outline-red-500"
                    : "text-slate-300 hover:text-blue-400 hover:bg-slate-800/50 focus-visible:outline-blue-500",
                )}
              >
                <ThemeIcon theme={theme} />
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
