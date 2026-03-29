"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { Target, GraduationCap, Briefcase, Code2 } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

const translations = {
  en: {
    sectionTitle: "About Me",
    name: "Mohammed El Kassoiri",
    role: "Data Scientist & AI Engineer",
    bio1:
      "Data Scientist & AI Engineer specializing in Machine Learning, Deep Learning, and Computer Vision. Currently developing an AI system for automatic agricultural parcelization.",
    location: "Location:",
    locationVal: "Morocco 🇲🇦",
    education: "Education:",
    educationVal: "ENSIASD — Data Science, Big Data & AI",
    pfeBadgeTitle: "Featured Project (PFE)",
    pfeBadgeStatus: "In Progress",
    pfeDesc:
      "Automatic Agricultural Parcelization — Deep Learning system for automatic field delineation from satellite imagery using multi-task segmentation and edge detection.",
    educationCard: "Education",
    educationSchool: "ENSIASD",
    educationProgram: "Data Science, Big Data & AI",
    educationCity: "Taroudant, Morocco",
    missionTitle: "Mission",
    missionText:
      "AI & Data Engineer ready for the industry — seeking full-time roles in AI, Data Science, or Software Engineering where cutting-edge ML skills meet real-world impact. Ready to contribute to meaningful projects that shape the future.",
  },
  fr: {
    sectionTitle: "À propos",
    name: "Mohammed El Kassoiri",
    role: "Data Scientist & Ingénieur IA",
    bio1:
      "Data Scientist & Ingénieur IA spécialisé en Machine Learning, Deep Learning et Computer Vision. Actuellement en train de développer un système IA pour la parcellisation automatique des terres agricoles.",
    location: "Localisation :",
    locationVal: "Maroc 🇲🇦",
    education: "Formation :",
    educationVal: "ENSIASD — Data Science, Big Data & IA",
    pfeBadgeTitle: "Projet de Fin d'Études (PFE)",
    pfeBadgeStatus: "En cours",
    pfeDesc:
      "Parcellisation Automatique des Parcelles Agricoles — Système Deep Learning pour la délimitation automatique des parcelles depuis des images satellites, combinant segmentation sémantique et détection de contours.",
    educationCard: "Formation",
    educationSchool: "ENSIASD",
    educationProgram: "Data Science, Big Data & IA",
    educationCity: "Taroudant, Maroc",
    missionTitle: "Mission",
    missionText:
      "Ingénieur IA & Data prêt pour l'industrie — à la recherche d'un poste en IA, Data Science ou Ingénierie Logicielle, pour mettre en œuvre des compétences ML de pointe au service de projets à fort impact réel.",
  },
}

export function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const { theme } = useTheme()
  const { language } = useLanguage()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const isCyber = mounted && theme === "cyber"
  const t = translations[language]

  const cardBase = `relative border transition-all duration-300 ${
    isCyber
      ? "bg-black/60 border-red-900/40 hover:border-red-600/50"
      : "bg-[rgba(11,21,37,0.8)] border-[rgba(197,165,90,0.1)] hover:border-[rgba(197,165,90,0.35)]"
  }`

  const accentColor = isCyber ? "text-red-400" : "text-[#c5a55a]"
  const titleColor = isCyber ? "text-red-100" : "text-[#e8eaf5]"
  const textColor = isCyber ? "text-red-200/70" : "text-[rgba(232,234,245,0.6)]"

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  }
  const cardVariant = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="about" className="relative py-28 px-6" ref={ref}>
      {/* Section number */}
      {!isCyber && (
        <div className="absolute left-[3%] top-20 text-[15vw] font-black leading-none select-none pointer-events-none text-[rgba(197,165,90,0.025)] tracking-tighter">
          02
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
              <p className={`text-xs font-mono tracking-[0.3em] uppercase mb-3 ${accentColor}`}>
                {language === "en" ? "// who I am" : "// qui je suis"}
              </p>
              <h2 className={`text-4xl md:text-5xl font-black tracking-tight ${titleColor}`}>
                {t.sectionTitle}
              </h2>
            </div>
            <div className={`flex-1 h-px mb-3 hidden md:block ${
              isCyber
                ? "bg-gradient-to-r from-red-900/40 to-transparent"
                : "bg-gradient-to-r from-[rgba(197,165,90,0.3)] to-transparent"
            }`} />
          </div>

          {/* Bento Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            variants={stagger}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* Main Bio Card */}
            <motion.div
              variants={cardVariant}
              whileHover={{ scale: 1.005 }}
              className={`lg:col-span-2 lg:row-span-2 ${cardBase} p-8`}
            >
              {/* Top accent */}
              <div className={`absolute top-0 left-0 right-0 h-px ${
                isCyber
                  ? "bg-gradient-to-r from-red-700/60 via-red-500/30 to-transparent"
                  : "bg-gradient-to-r from-[rgba(197,165,90,0.6)] via-[rgba(197,165,90,0.2)] to-transparent"
              }`} />

              <div className="flex items-start gap-4 mb-6">
                <div
                  className={`w-12 h-12 flex items-center justify-center flex-shrink-0 border ${
                    isCyber
                      ? "border-red-700/50 bg-red-900/20"
                      : "border-[rgba(197,165,90,0.3)] bg-[rgba(197,165,90,0.08)]"
                  }`}
                >
                  <Code2 className={`w-5 h-5 ${accentColor}`} />
                </div>
                <div>
                  <h3 className={`text-xl font-bold mb-1 ${titleColor}`}>{t.name}</h3>
                  <p className={`text-sm font-mono ${accentColor}`}>{t.role}</p>
                </div>
              </div>

              <div className={`space-y-3 leading-relaxed text-sm ${textColor}`}>
                <p>{t.bio1}</p>
                <p>
                  <span className={`font-semibold ${titleColor}`}>{t.location}</span>{" "}
                  {t.locationVal}
                </p>
                <p>
                  <span className={`font-semibold ${titleColor}`}>{t.education}</span>{" "}
                  {t.educationVal}
                </p>
              </div>

              {/* Code snippet */}
              <div
                className={`mt-6 p-5 border font-mono text-xs overflow-x-auto ${
                  isCyber
                    ? "bg-black/80 border-red-900/30 text-red-300/70"
                    : "bg-[rgba(6,9,16,0.8)] border-[rgba(197,165,90,0.1)] text-[rgba(232,234,245,0.55)]"
                }`}
              >
                <pre>{`class AI:
  def __init__(self):
    self.name    = "Mohammed El Kassoiri"
    self.role    = "Data Scientist & AI Engineer"
    self.location = "Morocco 🇲🇦"
    self.focus   = ["ML", "Deep Learning",
                    "Data Science", "NLP"]

  def say_hi(self):
    print("Let's build the future! 🚀")

me = AI()
me.say_hi()`}</pre>
              </div>
            </motion.div>

            {/* PFE Focus Card */}
            <motion.div variants={cardVariant} whileHover={{ scale: 1.01 }} className={`${cardBase} p-6`}>
              <div className={`absolute top-0 left-0 right-0 h-px ${
                isCyber
                  ? "bg-gradient-to-r from-purple-700/60 to-transparent"
                  : "bg-gradient-to-r from-[rgba(197,165,90,0.6)] to-transparent"
              }`} />
              <div className={`w-10 h-10 flex items-center justify-center border mb-4 ${
                isCyber ? "border-purple-700/50 bg-purple-900/10" : "border-[rgba(197,165,90,0.3)] bg-[rgba(197,165,90,0.06)]"
              }`}>
                <Target className={`w-4 h-4 ${isCyber ? "text-purple-400" : accentColor}`} />
              </div>
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <h3 className={`text-sm font-bold uppercase tracking-wider ${titleColor}`}>{t.pfeBadgeTitle}</h3>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-purple-500/10 border border-purple-500/30 text-purple-300 text-[10px] font-bold tracking-wider uppercase">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-purple-500" />
                  </span>
                  {t.pfeBadgeStatus}
                </span>
              </div>
              <p className={`text-xs leading-relaxed ${textColor}`}>{t.pfeDesc}</p>
            </motion.div>

            {/* Education Card */}
            <motion.div variants={cardVariant} whileHover={{ scale: 1.01 }} className={`${cardBase} p-6`}>
              <div className={`absolute top-0 left-0 right-0 h-px ${
                isCyber
                  ? "bg-gradient-to-r from-red-700/60 to-transparent"
                  : "bg-gradient-to-r from-[rgba(197,165,90,0.6)] to-transparent"
              }`} />
              <div className={`w-10 h-10 flex items-center justify-center border mb-4 ${
                isCyber ? "border-red-700/50 bg-red-900/10" : "border-[rgba(197,165,90,0.3)] bg-[rgba(197,165,90,0.06)]"
              }`}>
                <GraduationCap className={`w-4 h-4 ${accentColor}`} />
              </div>
              <h3 className={`text-sm font-bold uppercase tracking-wider mb-3 ${titleColor}`}>{t.educationCard}</h3>
              <p className={`text-xs leading-relaxed ${textColor}`}>
                <span className={`font-bold text-sm ${titleColor}`}>{t.educationSchool}</span>
                <br />
                {t.educationProgram}
                <br />
                <span className={`font-mono ${accentColor} opacity-70`}>{t.educationCity}</span>
              </p>
            </motion.div>

            {/* Mission Card — wide */}
            <motion.div
              variants={cardVariant}
              whileHover={{ scale: 1.005 }}
              className={`lg:col-span-2 ${cardBase} p-6`}
            >
              <div className={`absolute top-0 left-0 right-0 h-px ${
                isCyber
                  ? "bg-gradient-to-r from-red-700/60 via-red-500/30 to-transparent"
                  : "bg-gradient-to-r from-[rgba(197,165,90,0.6)] via-[rgba(197,165,90,0.2)] to-transparent"
              }`} />
              <div className={`w-10 h-10 flex items-center justify-center border mb-4 ${
                isCyber ? "border-red-700/50 bg-red-900/10" : "border-[rgba(197,165,90,0.3)] bg-[rgba(197,165,90,0.06)]"
              }`}>
                <Briefcase className={`w-4 h-4 ${accentColor}`} />
              </div>
              <h3 className={`text-sm font-bold uppercase tracking-wider mb-3 ${titleColor}`}>{t.missionTitle}</h3>
              <p className={`text-sm leading-relaxed ${textColor}`}>{t.missionText}</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
