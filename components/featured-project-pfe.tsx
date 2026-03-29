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
    <section id="pfe" className="relative py-24 px-6" ref={ref}>
      <div className="container mx-auto max-w-7xl z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section header */}
          <div className="mb-14">
            <p className={`text-sm font-semibold tracking-widest uppercase mb-3 text-purple-400`}>
              {language === "en" ? "Thesis work" : "Travail de thèse"}
            </p>
            <h2
              className={`text-4xl md:text-5xl font-extrabold tracking-tight ${
                isCyber ? "text-red-100" : "text-slate-100"
              }`}
            >
              {t.sectionTitle}
            </h2>
          </div>

          {/* Main card */}
          <div
            className={`relative group rounded-3xl backdrop-blur-xl p-8 md:p-12 transition-all duration-500 border ${
              isCyber
                ? "bg-black/60 border-red-900/30 hover:border-purple-500/40 hover:shadow-[0_0_80px_rgba(168,85,247,0.08)]"
                : "bg-white/[0.02] border-white/10 hover:bg-white/[0.04] hover:border-purple-500/30 hover:shadow-[0_0_80px_rgba(168,85,247,0.10)]"
            }`}
          >
            {/* Glow accents */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/15 rounded-full blur-[100px] pointer-events-none" />

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 text-purple-300 text-sm font-semibold mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
              </span>
              {t.badge}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left column */}
              <div className="lg:col-span-7 flex flex-col space-y-6">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400 tracking-tight">
                    {t.projectTitle}
                  </h3>

                  <div
                    className={`flex flex-wrap items-center gap-4 text-sm md:text-base mb-6 ${
                      isCyber ? "text-red-300/60" : "text-gray-400"
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      <Building2 className="w-4 h-4 text-blue-400 shrink-0" />
                      <span>{t.company}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-purple-400 shrink-0" />
                      <span>{t.period}</span>
                    </div>
                  </div>

                  <p
                    className={`leading-relaxed text-lg mb-6 ${
                      isCyber ? "text-red-200/70" : "text-gray-300"
                    }`}
                  >
                    {t.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {t.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-lg text-sm font-medium border ${
                        isCyber
                          ? "bg-red-900/20 border-red-800/30 text-red-200"
                          : "bg-white/5 border-white/10 text-gray-200"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Key Contributions */}
                <div className="space-y-3">
                  <h4
                    className={`text-lg font-semibold mb-4 ${
                      isCyber ? "text-red-100" : "text-white"
                    }`}
                  >
                    {t.contributionsTitle}
                  </h4>
                  {t.contributions.map((feature, idx) => (
                    <div
                      key={idx}
                      className={`flex items-start gap-3 ${
                        isCyber ? "text-red-200/70" : "text-gray-300"
                      }`}
                    >
                      <CheckCircle2 className="w-5 h-5 text-purple-400 mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Tech stack */}
                <div
                  className={`pt-6 border-t ${
                    isCyber ? "border-red-900/30" : "border-white/10"
                  }`}
                >
                  <div className="flex flex-wrap gap-3">
                    {[
                      { icon: Cpu, label: "TensorFlow / PyTorch" },
                      { icon: Satellite, label: "Sentinel-2 / GEE" },
                      { icon: Map, label: "QGIS" },
                      { icon: Database, label: "NDVI / GNDVI / OSAVI" },
                    ].map(({ icon: Icon, label }) => (
                      <div
                        key={label}
                        className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-sm ${
                          isCyber
                            ? "bg-red-900/20 border-red-800/30 text-red-300/70"
                            : "bg-black/30 border-white/5 text-gray-400"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right column — metrics */}
              <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
                {/* Performance card */}
                <div
                  className={`rounded-2xl p-6 relative overflow-hidden border ${
                    isCyber
                      ? "bg-black/60 border-red-900/30"
                      : "bg-black/40 border-white/10"
                  }`}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-[50px] rounded-full" />

                  <h4
                    className={`flex items-center gap-2 text-lg font-semibold mb-6 ${
                      isCyber ? "text-red-100" : "text-white"
                    }`}
                  >
                    <Target className="w-5 h-5 text-blue-400" />
                    {t.metricsTitle}
                  </h4>

                  {/* IoU */}
                  <div className="mb-6">
                    <div className="flex justify-between items-end mb-2">
                      <span
                        className={`font-medium ${
                          isCyber ? "text-red-300/70" : "text-gray-400"
                        }`}
                      >
                        Intersection over Union (IoU)
                      </span>
                      <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                        0.87
                      </span>
                    </div>
                    <div className="w-full bg-white/5 rounded-full h-2.5 overflow-hidden">
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2.5 rounded-full w-[87%] relative">
                        <div className="absolute top-0 right-0 bottom-0 w-10 bg-gradient-to-r from-transparent to-white/30 animate-pulse" />
                      </div>
                    </div>
                  </div>

                  {/* Dice */}
                  <div className="mb-6">
                    <div className="flex justify-between items-end mb-2">
                      <span
                        className={`font-medium ${
                          isCyber ? "text-red-300/70" : "text-gray-400"
                        }`}
                      >
                        Dice Score (F1)
                      </span>
                      <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">
                        0.92
                      </span>
                    </div>
                    <div className="w-full bg-white/5 rounded-full h-2.5 overflow-hidden">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-400 h-2.5 rounded-full w-[92%] relative">
                        <div className="absolute top-0 right-0 bottom-0 w-10 bg-gradient-to-r from-transparent to-white/30 animate-pulse" />
                      </div>
                    </div>
                  </div>

                  <div
                    className={`flex items-start gap-3 p-4 rounded-xl border mt-4 ${
                      isCyber
                        ? "bg-red-900/10 border-red-900/20"
                        : "bg-white/5 border-white/5"
                    }`}
                  >
                    <BarChart3
                      className={`w-5 h-5 shrink-0 mt-0.5 ${
                        isCyber ? "text-green-400" : "text-green-400"
                      }`}
                    />
                    <p
                      className={`text-sm ${
                        isCyber ? "text-red-200/70" : "text-gray-300"
                      }`}
                    >
                      {t.metricNote}
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <button className="group relative w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-xl overflow-hidden transition-transform hover:scale-[1.02] active:scale-[0.98]">
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative">{t.ctaLabel}</span>
                  <ExternalLink className="w-5 h-5 relative group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
