"use client"

import {
  Satellite, Map, Cpu,
  Calendar, Building2, ExternalLink,
  CheckCircle2, Target, BarChart3, Database
} from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function FeaturedProjectPFE() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="pfe" className="relative py-20 px-6" ref={ref}>
      <div className="container mx-auto max-w-7xl z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-slate-100">
            Featured Project
          </h2>

          {/* Card */}
          <div className="relative group rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl p-8 md:p-12 transition-all duration-500 hover:bg-white/[0.04] hover:border-purple-500/30 hover:shadow-[0_0_80px_rgba(168,85,247,0.1)]">

            {/* Background Glow Effects */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />

            {/* Featured Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 text-purple-300 text-sm font-semibold mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              Projet de Fin d&apos;Études (Featured)
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

              {/* Left Column: Content */}
              <div className="lg:col-span-7 flex flex-col space-y-6">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400 tracking-tight">
                    Parcellisation Automatique des Parcelles Agricoles
                  </h3>

                  <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm md:text-base mb-6">
                    <div className="flex items-center gap-1.5">
                      <Building2 className="w-4 h-4 text-blue-400" />
                      <span>Pôle Digital de l&apos;Agriculture, de la Forêt et Observatoire de la Sécheresse</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-purple-400" />
                      <span>Fév 2026 – Juin 2026</span>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed text-lg mb-6">
                    Développement d&apos;un système d&apos;intelligence artificielle basé sur le Deep Learning pour la parcellisation automatique à partir d&apos;images satellites. Intégration d&apos;un modèle multi-tâches combinant la segmentation sémantique et la détection des contours.
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-2">
                  {["Intelligence Artificielle", "Deep Learning", "Computer Vision", "Remote Sensing"].map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-sm font-medium text-gray-200">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Key Features */}
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-white mb-4">Contributions Clés</h4>
                  {[
                    "Détection automatique des limites via modèles Encoder-Decoder (DeepLabV3+)",
                    "Modèle multi-tâches (Segmentation + Edge Detection) pour des frontières précises",
                    "Exploitation d'images Sentinel-2 avec GEE et QGIS",
                    "Pipeline complet : Extraction, Prétraitement, Entraînement et Fine-tuning",
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-purple-400 mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="pt-6 border-t border-white/10">
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-gray-400 bg-black/30 px-3 py-2 rounded-xl border border-white/5">
                      <Cpu className="w-4 h-4" /> <span>TensorFlow / PyTorch</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 bg-black/30 px-3 py-2 rounded-xl border border-white/5">
                      <Satellite className="w-4 h-4" /> <span>Sentinel-2 / GEE</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 bg-black/30 px-3 py-2 rounded-xl border border-white/5">
                      <Map className="w-4 h-4" /> <span>QGIS</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 bg-black/30 px-3 py-2 rounded-xl border border-white/5">
                      <Database className="w-4 h-4" /> <span>NDVI / GNDVI / OSAVI</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Metrics */}
              <div className="lg:col-span-5 flex flex-col justify-center space-y-6">

                {/* Performance Card */}
                <div className="bg-black/40 border border-white/10 rounded-2xl p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-[50px] rounded-full" />

                  <h4 className="flex items-center gap-2 text-lg font-semibold text-white mb-6">
                    <Target className="w-5 h-5 text-blue-400" />
                    Performances du Modèle
                  </h4>

                  {/* IoU Metric */}
                  <div className="mb-6">
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-gray-400 font-medium">Intersection over Union (IoU)</span>
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

                  {/* Dice Score Metric */}
                  <div className="mb-6">
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-gray-400 font-medium">Dice Score (F1)</span>
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

                  <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/5 mt-4">
                    <BarChart3 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-300">
                      Modèle hautement robuste sur des images multi-résolution (Sentinel-2 et données très haute résolution).
                    </p>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="group relative w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-xl overflow-hidden transition-transform hover:scale-[1.02] active:scale-[0.98]">
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative">Voir les détails du projet</span>
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
