"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useTheme } from "next-themes"
import Link from "next/link"
import { FileText, ArrowRight } from "lucide-react"
import { researchPapers } from "@/lib/research-data"
import { useLanguage } from "@/components/language-provider"

const translations = {
  en: {
    subheading: "Publications",
    sectionTitle: "Research & Publications",
    readMore: "Read full paper",
  },
  fr: {
    subheading: "Publications",
    sectionTitle: "Recherche & Publications",
    readMore: "Lire l'article complet",
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
    <section id="research" className="relative py-28 px-6" ref={ref}>
      {/* Section number */}
      {!isCyber && (
        <div className="absolute left-[3%] top-20 text-[15vw] font-black leading-none select-none pointer-events-none text-[rgba(197,165,90,0.025)] tracking-tighter">
          06
        </div>
      )}
      <div className="container mx-auto max-w-7xl z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section header */}
          <div className="mb-16 flex items-end gap-6">
            <div>
              <p className={`text-xs font-mono tracking-[0.3em] uppercase mb-3 ${
                isCyber ? "text-red-400" : "text-[#c5a55a]"
              }`}>
                {`// ${t.subheading.toLowerCase()}`}
              </p>
              <h2 className={`text-4xl md:text-5xl font-black tracking-tight ${
                isCyber ? "text-red-100" : "text-[#e8eaf5]"
              }`}>
                {t.sectionTitle}
              </h2>
            </div>
            <div className={`flex-1 h-px mb-3 hidden md:block ${
              isCyber
                ? "bg-gradient-to-r from-red-900/40 to-transparent"
                : "bg-gradient-to-r from-[rgba(197,165,90,0.3)] to-transparent"
            }`} />
          </div>

          <div className="space-y-4">
            {researchPapers.map((paper, index) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                whileHover={{ x: 4 }}
              >
                <Link href={`/research/${paper.id}`}>
                  <div className={`group relative border transition-all duration-300 p-6 md:p-8 cursor-pointer ${
                    isCyber
                      ? "bg-black/60 border-red-900/40 hover:border-red-600/50"
                      : "bg-[rgba(11,21,37,0.8)] border-[rgba(197,165,90,0.1)] hover:border-[rgba(197,165,90,0.35)]"
                  }`}>
                    {/* Top accent */}
                    <div className={`absolute top-0 left-0 right-0 h-px transition-all duration-300 ${
                      isCyber
                        ? "bg-gradient-to-r from-red-700/40 to-transparent group-hover:from-red-600/70"
                        : "bg-gradient-to-r from-[rgba(197,165,90,0.3)] to-transparent group-hover:from-[rgba(197,165,90,0.6)]"
                    }`} />

                    {/* Hover overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${paper.gradient} opacity-0 group-hover:opacity-[0.025] transition-opacity duration-500`} />

                    <div className="relative flex gap-5 items-start">
                      <div className={`w-12 h-12 flex items-center justify-center border flex-shrink-0 transition-colors ${
                        isCyber
                          ? "border-red-700/40 bg-red-900/10 group-hover:border-red-600/60"
                          : "border-[rgba(197,165,90,0.2)] bg-[rgba(197,165,90,0.05)] group-hover:border-[rgba(197,165,90,0.4)]"
                      }`}>
                        <FileText className={`w-5 h-5 ${
                          isCyber ? "text-red-400" : "text-[#c5a55a]"
                        }`} />
                      </div>

                      <div className="flex-1">
                        <h3 className={`text-lg md:text-xl font-bold mb-2 leading-snug transition-colors ${
                          isCyber
                            ? "text-red-100 group-hover:text-red-300"
                            : "text-[#e8eaf5] group-hover:text-[#c5a55a]"
                        }`}>
                          {paper.title}
                        </h3>
                        <div className={`flex items-center gap-2 text-xs font-mono tracking-wider uppercase ${
                          isCyber ? "text-red-400/50" : "text-[rgba(197,165,90,0.45)]"
                        }`}>
                          <span>{t.readMore}</span>
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>

                      {/* Index number */}
                      <div className={`text-4xl font-black opacity-10 select-none ${
                        isCyber ? "text-red-400" : "text-[#c5a55a]"
                      }`}>
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

