"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "research", label: "Research" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState("hero")
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = navItems.map((item) => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 200

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id)
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
      setMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-200" : "bg-white",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="text-xl font-semibold text-gray-900"
            whileHover={{ scale: 1.02 }}
          >
            MK
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "px-4 py-2 text-sm transition-all duration-200 relative",
                  activeSection === item.id 
                    ? "text-blue-600 font-medium" 
                    : "text-gray-600 hover:text-gray-900",
                )}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Resume Button */}
          <a
            href="/Mohammed_el_kassoiri.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex px-4 py-2 text-sm font-medium border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200"
          >
            Resume
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden py-4 border-t border-gray-200"
            >
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={cn(
                      "px-4 py-2 text-left text-sm transition-colors",
                      activeSection === item.id 
                        ? "text-blue-600 font-medium bg-blue-50" 
                        : "text-gray-600 hover:bg-gray-50",
                    )}
                  >
                    {item.label}
                  </button>
                ))}
                <a
                  href="/Mohammed_el_kassoiri.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-4 mt-2 px-4 py-2 text-sm font-medium text-center border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
