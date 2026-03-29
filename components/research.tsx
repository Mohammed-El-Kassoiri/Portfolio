"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useTheme } from "next-themes"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { FileText } from "lucide-react"
import { researchPapers } from "@/lib/research-data"
import { useLanguage } from "@/components/language-provider"

const translations = {
  en: {
    subheading: "Publications",
    sectionTitle: "Research & Publications",
    readMore: "Read full paper →",
  },
  fr: {
    subheading: "Publications",
    sectionTitle: "Recherche & Publications",
    readMore: "Lire l'article complet →",
  },
}

export function Research() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const { theme } = useTheme()
  const { language } = useLanguage()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const isCyber = mounted && theme === "cyber"
  const t = translations[language]

  return (
    <section id="research" className="relative py-24 px-6" ref={ref}>
      <div className="container mx-auto max-w-7xl z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section header */}
          <div className="mb-14">
            <p
              className={`text-sm font-semibold tracking-widest uppercase mb-3 ${
                isCyber ? "text-red-400" : "text-blue-400"
              }`}
            >
              {t.subheading}
            </p>
            <h2
              className={`text-4xl md:text-5xl font-extrabold tracking-tight ${
                isCyber ? "text-red-100" : "text-slate-100"
              }`}
            >
              {t.sectionTitle}
            </h2>
          </div>

          <div className="space-y-6">
            {researchPapers.map((paper, index) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -4 }}
              >
                <Link href={`/research/${paper.id}`}>
                  <Card
                    className={`backdrop-blur-sm border transition-all duration-300 p-6 md:p-8 relative overflow-hidden group cursor-pointer ${
                      isCyber
                        ? "bg-black/60 border-red-900/40 hover:border-red-600/60"
                        : "bg-slate-800/50 border-slate-700/60 hover:border-blue-500/50"
                    }`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${paper.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    />

                    <div className="relative z-10 flex gap-6">
                      <div className="flex-shrink-0">
                        <div
                          className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                            isCyber ? "bg-red-700/20" : "bg-blue-500/20"
                          }`}
                        >
                          <FileText
                            className={`w-8 h-8 ${
                              isCyber ? "text-red-400" : "text-blue-400"
                            }`}
                          />
                        </div>
                      </div>

                      <div className="flex-1">
                        <h3
                          className={`text-xl md:text-2xl font-bold mb-3 transition-colors ${
                            isCyber
                              ? "text-red-100 group-hover:text-red-400"
                              : "text-slate-100 group-hover:text-blue-400"
                          }`}
                        >
                          {paper.title}
                        </h3>
                        <p
                          className={`text-sm font-medium ${
                            isCyber ? "text-red-400/60" : "text-slate-400"
                          }`}
                        >
                          {t.readMore}
                        </p>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
