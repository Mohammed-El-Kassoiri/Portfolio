"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useTheme } from "next-themes"
import { Building2 } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

const experienceData = {
  en: [
    {
      title: "Final Year Project (PFE) — Automatic Agricultural Parcelization",
      company:
        "Pôle Digital de l'Agriculture, de la Forêt et Observatoire de la Sécheresse",
      period: "Feb 2026 – Jun 2026",
      type: "pfe",
      badge: "Final Year Project (PFE) · In Progress",
      description:
        "Development of a Deep Learning-based AI system for automatic agricultural parcelization from satellite imagery, integrating a multi-task model combining semantic segmentation and edge detection.",
      highlights: [
        "Automatic field boundary detection via Encoder-Decoder models (DeepLabV3+)",
        "Multi-task model: semantic segmentation + edge detection for precise boundaries",
        "Sentinel-2 imagery with GIS integration (Google Earth Engine, QGIS)",
        "Vegetation indices: NDVI, GNDVI, OSAVI",
        "End-to-end pipeline: extraction → preprocessing → training → evaluation → fine-tuning",
        "Results: IoU ≈ 0.87 · Dice Score ≈ 0.92",
      ],
      tags: [
        "Deep Learning",
        "Computer Vision",
        "Remote Sensing",
        "Python",
        "TensorFlow",
        "PyTorch",
        "GEE",
        "QGIS",
      ],
    },
    {
      title: "Data Science & Machine Learning Intern",
      company: "XAI Morocco",
      period: "Aug 2025 – Oct 2025",
      type: "internship",
      badge: null,
      description:
        "Contributed to the development of the X-EdTech platform, an educational ecosystem integrating several AI modules.",
      highlights: [
        "X-Forms: Automatic generation of intelligent forms",
        "X-Quiz: AI-powered creation of assessment questions",
        "X-Table: Advanced visualization and analysis of educational data",
      ],
      tags: ["Data Science", "Machine Learning", "AI", "EdTech"],
    },
  ],
  fr: [
    {
      title: "Projet de Fin d'Études (PFE) — Parcellisation Automatique des Parcelles Agricoles",
      company:
        "Pôle Digital de l'Agriculture, de la Forêt et Observatoire de la Sécheresse",
      period: "Fév 2026 – Juin 2026",
      type: "pfe",
      badge: "Projet de Fin d'Études (PFE) · En cours",
      description:
        "Développement d'un système d'intelligence artificielle basé sur le Deep Learning pour la parcellisation automatique des parcelles agricoles à partir d'images satellites, intégrant un modèle multi-tâches combinant la segmentation sémantique et la détection des contours.",
      highlights: [
        "Détection automatique des limites des parcelles via modèles Encoder-Decoder (DeepLabV3+)",
        "Modèle multi-tâches : segmentation sémantique + edge detection pour des frontières précises",
        "Exploitation d'images Sentinel-2 avec intégration GIS (Google Earth Engine, QGIS)",
        "Utilisation d'indices de végétation : NDVI, GNDVI, OSAVI",
        "Pipeline complet : extraction → prétraitement → entraînement → évaluation → fine-tuning",
        "Résultats : IoU ≈ 0.87 · Dice Score ≈ 0.92",
      ],
      tags: [
        "Deep Learning",
        "Computer Vision",
        "Remote Sensing",
        "Python",
        "TensorFlow",
        "PyTorch",
        "GEE",
        "QGIS",
      ],
    },
    {
      title: "Stagiaire Data Science & Machine Learning",
      company: "XAI Morocco",
      period: "Août 2025 – Octobre 2025",
      type: "internship",
      badge: null,
      description:
        "Contribution au développement de la plateforme X-EdTech, un écosystème éducatif intégrant plusieurs modules IA.",
      highlights: [
        "X-Forms : Génération automatique de formulaires intelligents",
        "X-Quiz : Création intelligente de questions d'évaluation",
        "X-Table : Visualisation avancée et analyse des données éducatives",
      ],
      tags: ["Data Science", "Machine Learning", "IA", "EdTech"],
    },
  ],
}

const sectionTitle = { en: "Experience", fr: "Expérience" }

export function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const { theme } = useTheme()
  const { language } = useLanguage()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const isCyber = mounted && theme === "cyber"

  const experiences = experienceData[language]

  return (
    <section id="experience" className="relative py-28 px-6" ref={ref}>
      {/* Section number */}
      {!isCyber && (
        <div className="absolute right-[3%] top-20 text-[15vw] font-black leading-none select-none pointer-events-none text-[rgba(197,165,90,0.025)] tracking-tighter">
          03
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
                {language === "en" ? "// my journey" : "// mon parcours"}
              </p>
              <h2 className={`text-4xl md:text-5xl font-black tracking-tight ${
                isCyber ? "text-red-100" : "text-[#e8eaf5]"
              }`}>
                {sectionTitle[language]}
              </h2>
            </div>
            <div className={`flex-1 h-px mb-3 hidden md:block ${
              isCyber
                ? "bg-gradient-to-r from-red-900/40 to-transparent"
                : "bg-gradient-to-r from-[rgba(197,165,90,0.3)] to-transparent"
            }`} />
          </div>

          <div className="relative space-y-6">
            {/* Timeline vertical line */}
            <div
              className={`absolute left-4 md:left-6 top-0 bottom-0 w-px ${
                isCyber
                  ? "bg-gradient-to-b from-red-700 via-red-600/50 to-transparent"
                  : "bg-gradient-to-b from-[#c5a55a] via-[rgba(197,165,90,0.3)] to-transparent"
              }`}
            />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="relative ml-12 md:ml-16"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute -left-[2.35rem] md:-left-[3rem] top-6 w-3 h-3 border-2 ${
                    exp.type === "pfe"
                      ? "bg-purple-500 border-purple-400"
                      : isCyber
                      ? "bg-red-500 border-red-400"
                      : "bg-[#c5a55a] border-[#e2c980]"
                  }`}
                />

                {/* Experience card */}
                <motion.div
                  whileHover={{ x: 4 }}
                  className={`relative border transition-all duration-300 p-6 md:p-8 ${
                    exp.type === "pfe"
                      ? isCyber
                        ? "bg-black/60 border-purple-900/40 hover:border-purple-600/50"
                        : "bg-[rgba(11,21,37,0.8)] border-[rgba(168,85,247,0.15)] hover:border-[rgba(168,85,247,0.35)]"
                      : isCyber
                      ? "bg-black/60 border-red-900/40 hover:border-red-600/50"
                      : "bg-[rgba(11,21,37,0.8)] border-[rgba(197,165,90,0.1)] hover:border-[rgba(197,165,90,0.35)]"
                  }`}
                >
                  {/* Top accent line */}
                  <div className={`absolute top-0 left-0 right-0 h-px ${
                    exp.type === "pfe"
                      ? "bg-gradient-to-r from-purple-600/60 via-purple-400/20 to-transparent"
                      : isCyber
                      ? "bg-gradient-to-r from-red-700/60 to-transparent"
                      : "bg-gradient-to-r from-[rgba(197,165,90,0.6)] via-[rgba(197,165,90,0.2)] to-transparent"
                  }`} />

                  {exp.badge && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 border border-purple-500/25 text-purple-300 text-[10px] font-bold tracking-widest uppercase mb-4">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-purple-500" />
                      </span>
                      {exp.badge}
                    </div>
                  )}

                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className={`text-lg font-bold mb-2 leading-snug ${
                        isCyber ? "text-red-100" : "text-[#e8eaf5]"
                      }`}>
                        {exp.title}
                      </h3>
                      <div className={`flex items-center gap-2 text-sm font-medium mb-2 ${
                        exp.type === "pfe"
                          ? "text-purple-400"
                          : isCyber
                          ? "text-red-400"
                          : "text-[#c5a55a]"
                      }`}>
                        <Building2 className="w-3.5 h-3.5 shrink-0" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className={`text-xs font-mono px-3 py-1.5 border whitespace-nowrap self-start ${
                      isCyber
                        ? "text-red-300/60 bg-red-900/10 border-red-900/30"
                        : "text-[rgba(197,165,90,0.6)] bg-[rgba(197,165,90,0.05)] border-[rgba(197,165,90,0.15)]"
                    }`}>
                      {exp.period}
                    </div>
                  </div>

                  <p className={`text-sm mb-6 leading-relaxed ${
                    isCyber ? "text-red-200/70" : "text-[rgba(232,234,245,0.6)]"
                  }`}>
                    {exp.description}
                  </p>

                  <ul className="space-y-2.5 mb-6">
                    {exp.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className={`text-xs flex items-start gap-3 ${
                          isCyber ? "text-red-200/60" : "text-[rgba(232,234,245,0.55)]"
                        }`}
                      >
                        <span className={`mt-0.5 shrink-0 font-mono ${
                          exp.type === "pfe"
                            ? "text-purple-400"
                            : isCyber ? "text-red-500" : "text-[#c5a55a]"
                        }`}>
                          ▸
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`px-2.5 py-0.5 text-[10px] font-medium tracking-wider uppercase border ${
                          exp.type === "pfe"
                            ? "bg-purple-500/10 text-purple-300/80 border-purple-500/20"
                            : isCyber
                            ? "bg-red-700/15 text-red-300/70 border-red-700/25"
                            : "bg-[rgba(197,165,90,0.07)] text-[rgba(197,165,90,0.7)] border-[rgba(197,165,90,0.2)]"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

