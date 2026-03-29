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

  const cardBase = `backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 border ${
    isCyber
      ? "bg-black/60 border-red-900/40 hover:border-red-600/60"
      : "bg-slate-800/50 border-slate-700/60 hover:border-blue-500/50"
  }`

  const iconBg = isCyber ? "bg-red-700/20" : "bg-blue-500/20"
  const iconColor = isCyber ? "text-red-400" : "text-blue-400"
  const titleColor = isCyber ? "text-red-100" : "text-slate-100"
  const textColor = isCyber ? "text-red-200/70" : "text-slate-300"
  const accentColor = isCyber ? "text-red-300" : "text-blue-400"

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  }
  const cardVariant = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="about" className="relative py-24 px-6" ref={ref}>
      <div className="container mx-auto max-w-7xl z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section header */}
          <div className="mb-14">
            <p className={`text-sm font-semibold tracking-widest uppercase mb-3 ${accentColor}`}>
              {language === "en" ? "Who I am" : "Qui je suis"}
            </p>
            <h2 className={`text-4xl md:text-5xl font-extrabold tracking-tight ${titleColor}`}>
              {t.sectionTitle}
            </h2>
          </div>

          {/* Bento Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={stagger}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* Main Bio Card */}
            <motion.div
              variants={cardVariant}
              whileHover={{ scale: 1.01 }}
              className={`lg:col-span-2 lg:row-span-2 ${cardBase} p-8`}
            >
              <div className="flex items-start gap-4 mb-6">
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${
                    isCyber ? "from-red-700 to-red-500" : "from-blue-600 to-cyan-400"
                  } rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                >
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className={`text-2xl font-bold mb-1 ${titleColor}`}>{t.name}</h3>
                  <p className={`font-medium ${accentColor}`}>{t.role}</p>
                </div>
              </div>

              <div className={`space-y-3 leading-relaxed ${textColor}`}>
                <p>{t.bio1}</p>
                <p>
                  🌍 <span className={`font-semibold ${titleColor}`}>{t.location}</span> {t.locationVal}
                </p>
                <p>
                  🎓 <span className={`font-semibold ${titleColor}`}>{t.education}</span> {t.educationVal}
                </p>
              </div>

              {/* Code snippet */}
              <div
                className={`mt-6 rounded-xl p-5 border font-mono text-sm overflow-x-auto ${
                  isCyber
                    ? "bg-black/80 border-red-900/30 text-red-300/80"
                    : "bg-slate-900/60 border-slate-700/50 text-slate-300"
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
            <motion.div variants={cardVariant} whileHover={{ scale: 1.02 }} className={cardBase}>
              <div className={`w-12 h-12 ${iconBg} rounded-xl flex items-center justify-center mb-4`}>
                <Target className={`w-6 h-6 ${iconColor}`} />
              </div>
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <h3 className={`text-lg font-semibold ${titleColor}`}>{t.pfeBadgeTitle}</h3>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs font-semibold whitespace-nowrap">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-purple-500" />
                  </span>
                  {t.pfeBadgeStatus}
                </span>
              </div>
              <p className={`text-sm leading-relaxed ${textColor}`}>{t.pfeDesc}</p>
            </motion.div>

            {/* Education Card */}
            <motion.div variants={cardVariant} whileHover={{ scale: 1.02 }} className={cardBase}>
              <div className={`w-12 h-12 ${iconBg} rounded-xl flex items-center justify-center mb-4`}>
                <GraduationCap className={`w-6 h-6 ${iconColor}`} />
              </div>
              <h3 className={`text-lg font-semibold mb-3 ${titleColor}`}>{t.educationCard}</h3>
              <p className={`text-sm leading-relaxed ${textColor}`}>
                <span className={`font-semibold text-base ${titleColor}`}>{t.educationSchool}</span>
                <br />
                {t.educationProgram}
                <br />
                <span className={isCyber ? "text-red-400/60" : "text-slate-400"}>{t.educationCity}</span>
              </p>
            </motion.div>

            {/* Mission Card — wide */}
            <motion.div
              variants={cardVariant}
              whileHover={{ scale: 1.01 }}
              className={`lg:col-span-2 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 border ${
                isCyber
                  ? "bg-gradient-to-br from-red-700/10 to-red-900/5 border-red-700/30 hover:border-red-600/50"
                  : "bg-gradient-to-br from-blue-600/10 to-cyan-400/5 border-blue-500/30 hover:border-blue-500/50"
              }`}
            >
              <div className={`w-12 h-12 ${iconBg} rounded-xl flex items-center justify-center mb-4`}>
                <Briefcase className={`w-6 h-6 ${iconColor}`} />
              </div>
              <h3 className={`text-lg font-semibold mb-3 ${titleColor}`}>{t.missionTitle}</h3>
              <p className={`leading-relaxed ${textColor}`}>{t.missionText}</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
