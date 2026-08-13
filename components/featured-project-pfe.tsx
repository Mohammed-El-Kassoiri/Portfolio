"use client"

import {
  Calendar,
  Building2,
  ChevronDown,
  CheckCircle2,
  Trophy,
  ScanSearch,
  BarChart3,
} from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useTheme } from "next-themes"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { useMounted } from "@/hooks/use-mounted"
import { SectionHeader } from "@/components/section-header"

const translations = {
  en: {
    sectionTitle: "Featured Final Year Project",
    badge: "Final Year Project (PFE) · Completed",
    projectTitle: "Automatic Agricultural Parcelization",
    company:
      "Pôle Digital de l'Agriculture, de la Forêt et Observatoire de la Sécheresse",
    period: "Feb 2026 – 16/06/2026",
    completionDate: "Completed on 16/06/2026",
    description:
      "Designed and delivered a production-oriented deep learning workflow for automatic parcel delineation from satellite imagery, combining semantic segmentation and edge detection to improve boundary precision.",
    tags: [
      "Data Science",
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Remote Sensing",
    ],
    contributionsTitle: "Key Achievements",
    contributions: [
      "Benchmarked multiple segmentation strategies and selected the best-performing architecture for robust parcel boundaries.",
      "Reached strong overlap quality with IoU-focused optimization, improving spatial alignment between predictions and ground truth masks.",
      "Operationalized a full pipeline from Sentinel-2 data extraction to preprocessing, training, and evaluation with GIS tooling.",
      "Delivered reproducible outputs that support agricultural monitoring and downstream decision workflows.",
    ],
    metricsTitle: "Outcome Snapshot",
    metricNote:
      "Results confirm robust generalization across multi-resolution imagery and clean parcel boundary recovery.",
    ctaLabel: "Explore More Projects",
    resultTitle: "PFE Results",
    resultModelComparison: "Model comparison and training performance",
    resultModelComparisonCaption:
      "The comparison chart highlights the selected architecture as the best trade-off between segmentation quality and reliability.",
    resultSpatialOverlap: "Spatial overlap and IoU quality",
    resultSpatialOverlapCaption:
      "Prediction overlays show precise parcel boundaries with strong overlap consistency against reference masks.",
  },
  fr: {
    sectionTitle: "Projet de Fin d'Études",
    badge: "Projet de Fin d'Études · Terminé",
    projectTitle: "Parcellisation Automatique des Parcelles Agricoles",
    company:
      "Pôle Digital de l'Agriculture, de la Forêt et Observatoire de la Sécheresse",
    period: "Fév 2026 – 16/06/2026",
    completionDate: "Terminé le 16/06/2026",
    description:
      "Conception et livraison d'un workflow Deep Learning orienté production pour la délimitation automatique des parcelles agricoles à partir d'images satellites, en combinant segmentation sémantique et détection des contours.",
    tags: [
      "Data Science",
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Remote Sensing",
    ],
    contributionsTitle: "Réalisations Clés",
    contributions: [
      "Comparaison de plusieurs approches de segmentation pour sélectionner l'architecture la plus performante.",
      "Obtention d'un fort niveau de recouvrement spatial (IoU) grâce à une optimisation orientée qualité des contours.",
      "Industrialisation d'un pipeline complet : extraction Sentinel-2, prétraitement, entraînement et évaluation via outils SIG.",
      "Livraison de résultats reproductibles utiles au suivi agricole et à l'aide à la décision.",
    ],
    metricsTitle: "Synthèse des Résultats",
    metricNote:
      "Les résultats confirment une bonne généralisation sur des images multi-résolution et des limites de parcelles nettes.",
    ctaLabel: "Explorer plus de projets",
    resultTitle: "Résultats du PFE",
    resultModelComparison: "Comparaison des modèles et performances",
    resultModelComparisonCaption:
      "Le graphique de comparaison met en avant l'architecture retenue pour son meilleur compromis précision/robustesse.",
    resultSpatialOverlap: "Recouvrement spatial et qualité IoU",
    resultSpatialOverlapCaption:
      "Les superpositions de prédiction montrent des limites précises avec un fort recouvrement par rapport aux masques de référence.",
  },
}

export function FeaturedProjectPFE() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const { theme } = useTheme()
  const { language } = useLanguage()
  const mounted = useMounted()
  const isCyber = mounted && theme === "cyber"
  const t = translations[language]

  return (
    <section id="pfe" className="relative section-container" ref={ref}>
      <div className="container mx-auto max-w-7xl z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section header */}
          <SectionHeader
            eyebrow={language === "en" ? "Thesis work" : "Travail de thèse"}
            title={t.sectionTitle}
            isCyber={isCyber}
          />

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
                  <h3
                    className={`text-3xl md:text-4xl font-bold mb-4 tracking-tight ${
                      isCyber ? "text-red-100" : "text-slate-100"
                    }`}
                  >
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
                    className={`inline-flex w-fit items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-semibold ${
                      isCyber
                        ? "bg-red-900/20 text-red-200 border border-red-900/40"
                        : "bg-emerald-500/10 text-emerald-300 border border-emerald-500/30"
                    }`}
                  >
                    <Trophy className="h-4 w-4" />
                    {t.completionDate}
                  </p>

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
                      { icon: ScanSearch, label: "DeepLabV3+ / Multi-task Segmentation" },
                      { icon: BarChart3, label: "IoU / Dice-based Evaluation" },
                      { icon: Calendar, label: "Feb 2026 → 16/06/2026" },
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

              {/* Right column — results */}
              <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
                {/* Result images */}
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
                    <BarChart3 className="w-5 h-5 text-blue-400" />
                    {t.resultTitle}
                  </h4>

                  <div className="space-y-5">
                    <article
                      className={`rounded-xl border p-3 ${
                        isCyber ? "border-red-900/30 bg-red-900/10" : "border-white/10 bg-white/5"
                      }`}
                    >
                      <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
                        <Image
                          src="/research/figures/accuracy-metrics.jpg"
                          alt="Model comparison and training metrics for agricultural parcelization"
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 38vw"
                        />
                      </div>
                      <h5
                        className={`mt-3 text-sm font-semibold ${
                          isCyber ? "text-red-100" : "text-slate-100"
                        }`}
                      >
                        {t.resultModelComparison}
                      </h5>
                      <p className={`mt-1 text-xs ${isCyber ? "text-red-200/70" : "text-slate-300"}`}>
                        {t.resultModelComparisonCaption}
                      </p>
                    </article>

                    <article
                      className={`rounded-xl border p-3 ${
                        isCyber ? "border-red-900/30 bg-red-900/10" : "border-white/10 bg-white/5"
                      }`}
                    >
                      <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
                        <Image
                          src="/research/figures/segmentation-results.jpg"
                          alt="Spatial overlap and segmentation outputs for parcel boundaries"
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 38vw"
                        />
                      </div>
                      <h5
                        className={`mt-3 text-sm font-semibold ${
                          isCyber ? "text-red-100" : "text-slate-100"
                        }`}
                      >
                        {t.resultSpatialOverlap}
                      </h5>
                      <p className={`mt-1 text-xs ${isCyber ? "text-red-200/70" : "text-slate-300"}`}>
                        {t.resultSpatialOverlapCaption}
                      </p>
                    </article>
                  </div>

                  <div className="mt-6 space-y-4">
                    <h4
                      className={`flex items-center gap-2 text-lg font-semibold ${
                        isCyber ? "text-red-100" : "text-white"
                      }`}
                    >
                      <ScanSearch className="w-5 h-5 text-cyan-400" />
                      {t.metricsTitle}
                    </h4>
                    <div
                      className={`flex items-start gap-3 p-4 rounded-xl border ${
                        isCyber
                          ? "bg-red-900/10 border-red-900/20"
                          : "bg-white/5 border-white/5"
                      }`}
                    >
                      <BarChart3 className="w-5 h-5 shrink-0 mt-0.5 text-green-400" />
                      <p className={`text-sm ${isCyber ? "text-red-200/70" : "text-gray-300"}`}>
                        {t.metricNote}
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <a
                  href="#projects"
                  className={`
                    group relative w-full inline-flex items-center justify-center gap-3 px-8 py-4 font-semibold rounded-xl overflow-hidden transition-transform hover:scale-[1.02] active:scale-[0.98]
                    ${isCyber ? "bg-red-700 text-white hover:bg-red-600" : "bg-blue-600 text-white hover:bg-blue-500"}
                  `}
                >
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative">{t.ctaLabel}</span>
                  <ChevronDown className="w-5 h-5 relative group-hover:translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
