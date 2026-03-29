"use client"

import {
  Satellite,
  Map,
  Cpu,
  Calendar,
  Building2,
  ExternalLink,
  CheckCircle2,
  Target,
  BarChart3,
  Database,
} from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { useLanguage } from "@/components/language-provider"

const translations = {
  en: {
    sectionTitle: "Featured Final Year Project",
    badge: "Final Year Project (PFE) · In Progress",
    projectTitle: "Automatic Agricultural Parcelization",
    company:
      "Pôle Digital de l'Agriculture, de la Forêt et Observatoire de la Sécheresse",
    period: "Feb 2026 – Jun 2026",
    description:
      "Development of a Deep Learning-based AI system for automatic agricultural parcelization from satellite imagery, integrating a multi-task model combining semantic segmentation and edge detection.",
    tags: ["Artificial Intelligence", "Deep Learning", "Computer Vision", "Remote Sensing"],
    contributionsTitle: "Key Contributions",
    contributions: [
      "Automatic boundary detection via Encoder-Decoder models (DeepLabV3+)",
      "Multi-task model (Segmentation + Edge Detection) for precise field boundaries",
      "Sentinel-2 imagery processing with GEE and QGIS",
      "End-to-end pipeline: Extraction, Preprocessing, Training and Fine-tuning",
    ],
    metricsTitle: "Model Performance",
    metricNote:
      "Highly robust model across multi-resolution images (Sentinel-2 and very high resolution data).",
    ctaLabel: "View Project Details",
  },
  fr: {
    sectionTitle: "Projet de Fin d'Études",
    badge: "Projet de Fin d'Études · En cours",
    projectTitle: "Parcellisation Automatique des Parcelles Agricoles",
    company:
      "Pôle Digital de l'Agriculture, de la Forêt et Observatoire de la Sécheresse",
    period: "Fév 2026 – Juin 2026",
    description:
      "Développement d'un système d'intelligence artificielle basé sur le Deep Learning pour la parcellisation automatique à partir d'images satellites. Intégration d'un modèle multi-tâches combinant la segmentation sémantique et la détection des contours.",
    tags: ["Intelligence Artificielle", "Deep Learning", "Computer Vision", "Remote Sensing"],
    contributionsTitle: "Contributions Clés",
    contributions: [
      "Détection automatique des limites via modèles Encoder-Decoder (DeepLabV3+)",
      "Modèle multi-tâches (Segmentation + Edge Detection) pour des frontières précises",
      "Exploitation d'images Sentinel-2 avec GEE et QGIS",
      "Pipeline complet : Extraction, Prétraitement, Entraînement et Fine-tuning",
    ],
    metricsTitle: "Performances du Modèle",
    metricNote:
      "Modèle hautement robuste sur des images multi-résolution (Sentinel-2 et données très haute résolution).",
    ctaLabel: "Voir les détails du projet",
  },
}

export function FeaturedProjectPFE() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const { theme } = useTheme()
  const { language } = useLanguage()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const isCyber = mounted && theme === "cyber"
  const t = translations[language]

  return (
    <section id="pfe" className="relative py-28 px-6" ref={ref}>
      {/* Section number */}
      {!isCyber && (
        <div className="absolute left-[3%] top-20 text-[15vw] font-black leading-none select-none pointer-events-none text-[rgba(168,85,247,0.04)] tracking-tighter">
          04
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
              <p className="text-xs font-mono tracking-[0.3em] uppercase mb-3 text-purple-400">
                {language === "en" ? "// thesis work" : "// travail de thèse"}
              </p>
              <h2 className={`text-4xl md:text-5xl font-black tracking-tight ${
                isCyber ? "text-red-100" : "text-[#e8eaf5]"
              }`}>
                {t.sectionTitle}
              </h2>
            </div>
            <div className="flex-1 h-px mb-3 hidden md:block bg-gradient-to-r from-purple-500/30 to-transparent" />
          </div>

          {/* Main card */}
          <div className={`relative border transition-all duration-500 ${
            isCyber
              ? "bg-black/60 border-purple-900/30 hover:border-purple-600/40"
              : "bg-[rgba(11,21,37,0.8)] border-[rgba(168,85,247,0.15)] hover:border-[rgba(168,85,247,0.35)]"
          }`}>
            {/* Top accent */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-purple-600 via-purple-400/50 to-transparent" />

            {/* Background glow */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-purple-600/8 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative p-8 md:p-12">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 border border-purple-500/25 text-purple-300 text-[10px] font-bold tracking-widest uppercase mb-8">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-purple-500" />
                </span>
                {t.badge}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Left column */}
                <div className="lg:col-span-7 flex flex-col space-y-6">
                  <div>
                    <h3 className={`text-2xl md:text-3xl font-black mb-4 tracking-tight ${
                      isCyber ? "text-red-100" : "text-[#e8eaf5]"
                    }`}>
                      {t.projectTitle}
                    </h3>

                    <div className={`flex flex-wrap items-center gap-4 text-sm mb-6 ${
                      isCyber ? "text-red-300/60" : "text-[rgba(232,234,245,0.5)]"
                    }`}>
                      <div className="flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                        <span>{t.company}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                        <span>{t.period}</span>
                      </div>
                    </div>

                    <p className={`leading-relaxed text-sm mb-6 ${
                      isCyber ? "text-red-200/70" : "text-[rgba(232,234,245,0.65)]"
                    }`}>
                      {t.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {t.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`px-2.5 py-0.5 text-[10px] font-medium tracking-wider uppercase border ${
                          isCyber
                            ? "bg-red-900/15 border-red-800/25 text-red-200/70"
                            : "bg-purple-500/8 border-purple-500/20 text-purple-300/80"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Key Contributions */}
                  <div className="space-y-2.5">
                    <h4 className={`text-sm font-bold uppercase tracking-wider mb-4 ${
                      isCyber ? "text-red-100" : "text-[#e8eaf5]"
                    }`}>
                      {t.contributionsTitle}
                    </h4>
                    {t.contributions.map((feature, idx) => (
                      <div
                        key={idx}
                        className={`flex items-start gap-3 text-xs ${
                          isCyber ? "text-red-200/60" : "text-[rgba(232,234,245,0.6)]"
                        }`}
                      >
                        <CheckCircle2 className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className={`pt-6 border-t ${
                    isCyber ? "border-red-900/30" : "border-[rgba(197,165,90,0.1)]"
                  }`}>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { icon: Cpu, label: "TensorFlow / PyTorch" },
                        { icon: Satellite, label: "Sentinel-2 / GEE" },
                        { icon: Map, label: "QGIS" },
                        { icon: Database, label: "NDVI / GNDVI / OSAVI" },
                      ].map(({ icon: Icon, label }) => (
                        <div
                          key={label}
                          className={`flex items-center gap-2 px-3 py-1.5 border text-xs ${
                            isCyber
                              ? "bg-red-900/15 border-red-800/25 text-red-300/60"
                              : "bg-[rgba(168,85,247,0.06)] border-purple-500/15 text-[rgba(232,234,245,0.55)]"
                          }`}
                        >
                          <Icon className="w-3.5 h-3.5 text-purple-400" />
                          <span>{label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right column — metrics */}
                <div className="lg:col-span-5 flex flex-col justify-center space-y-5">
                  {/* Performance card */}
                  <div className={`relative border p-6 ${
                    isCyber
                      ? "bg-black/60 border-red-900/30"
                      : "bg-[rgba(6,9,16,0.6)] border-[rgba(168,85,247,0.15)]"
                  }`}>
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-purple-600/60 to-transparent" />

                    <h4 className={`flex items-center gap-2 text-sm font-bold uppercase tracking-wider mb-6 ${
                      isCyber ? "text-red-100" : "text-[#e8eaf5]"
                    }`}>
                      <Target className="w-4 h-4 text-purple-400" />
                      {t.metricsTitle}
                    </h4>

                    {/* IoU metric */}
                    <div className="mb-5">
                      <div className="flex justify-between items-baseline mb-2">
                        <span className={`text-xs font-mono ${
                          isCyber ? "text-red-300/60" : "text-[rgba(232,234,245,0.5)]"
                        }`}>
                          IoU
                        </span>
                        <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                          0.87
                        </span>
                      </div>
                      <div className={`w-full h-1.5 ${
                        isCyber ? "bg-white/5" : "bg-[rgba(255,255,255,0.06)]"
                      }`}>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: "87%" } : {}}
                          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                          className="bg-gradient-to-r from-purple-500 to-blue-400 h-1.5"
                        />
                      </div>
                    </div>

                    {/* Dice metric */}
                    <div className="mb-5">
                      <div className="flex justify-between items-baseline mb-2">
                        <span className={`text-xs font-mono ${
                          isCyber ? "text-red-300/60" : "text-[rgba(232,234,245,0.5)]"
                        }`}>
                          Dice Score (F1)
                        </span>
                        <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-400">
                          0.92
                        </span>
                      </div>
                      <div className={`w-full h-1.5 ${
                        isCyber ? "bg-white/5" : "bg-[rgba(255,255,255,0.06)]"
                      }`}>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: "92%" } : {}}
                          transition={{ duration: 1.2, delay: 0.7, ease: "easeOut" }}
                          className="bg-gradient-to-r from-purple-400 to-pink-400 h-1.5"
                        />
                      </div>
                    </div>

                    <div className={`flex items-start gap-3 p-3 border mt-4 ${
                      isCyber
                        ? "bg-red-900/10 border-red-900/20"
                        : "bg-[rgba(168,85,247,0.06)] border-purple-500/15"
                    }`}>
                      <BarChart3 className="w-4 h-4 shrink-0 mt-0.5 text-green-400" />
                      <p className={`text-xs leading-relaxed ${
                        isCyber ? "text-red-200/60" : "text-[rgba(232,234,245,0.55)]"
                      }`}>
                        {t.metricNote}
                      </p>
                    </div>
                  </div>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    className={`group w-full inline-flex items-center justify-center gap-3 px-6 py-3.5 font-bold text-sm tracking-wider uppercase transition-all border ${
                      isCyber
                        ? "bg-red-700 border-red-600 text-white hover:bg-red-600"
                        : "bg-[rgba(168,85,247,0.1)] border-purple-500/40 text-purple-300 hover:bg-[rgba(168,85,247,0.2)] hover:border-purple-400/60"
                    }`}
                  >
                    <span>{t.ctaLabel}</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

