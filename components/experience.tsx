"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Building2 } from "lucide-react"

const experiences = [
  {
    title: "Projet de Fin d'Études – Parcellisation Automatique des Parcelles Agricoles",
    company: "Pôle Digital de l'Agriculture, de la Forêt et Observatoire de la Sécheresse",
    period: "Fév 2026 – Juin 2026",
    type: "pfe",
    description:
      "Développement d'un système d'intelligence artificielle basé sur le Deep Learning pour la parcellisation automatique des parcelles agricoles à partir d'images satellites, intégrant un modèle multi-tâches combinant la segmentation sémantique et la détection des contours (edge detection).",
    highlights: [
      "Détection automatique des limites des parcelles via modèles Encoder-Decoder (DeepLabV3+)",
      "Modèle multi-tâches : segmentation sémantique + edge detection pour des frontières précises",
      "Exploitation d'images Sentinel-2 avec intégration GIS (Google Earth Engine, QGIS)",
      "Utilisation d'indices de végétation : NDVI, GNDVI, OSAVI",
      "Pipeline complet : extraction → prétraitement → entraînement → évaluation → fine-tuning",
      "Résultats : IoU ≈ 0.87 · Dice Score ≈ 0.92",
    ],
    tags: ["Deep Learning", "Computer Vision", "Remote Sensing", "Python", "TensorFlow", "PyTorch", "GEE", "QGIS"],
  },
  {
    title: "Stagiaire Data Science & Machine Learning",
    company: "XAI Morocco",
    period: "Août 2025 - Octobre 2025",
    description:
      "Contribution au développement de la plateforme X-EdTech, un écosystème éducatif intégrant plusieurs modules IA.",
    highlights: [
      "X-Forms: Génération automatique de formulaires intelligents",
      "X-Quiz: Création intelligente de questions d'évaluation",
      "X-Table: Visualisation avancée et analyse des données éducatives",
    ],
    tags: ["Data Science", "Machine Learning", "IA", "EdTech"],
  },
]

export function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="relative py-20 px-6" ref={ref}>
      <div className="container mx-auto max-w-7xl z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-slate-100">
            Experience
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-blue-400 to-transparent" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative mb-12 md:ml-16"
              >
                {/* Timeline dot */}
                <div className={`absolute -left-16 md:-left-[4.5rem] top-6 w-4 h-4 rounded-full border-4 border-slate-900 shadow-lg ${
                  exp.type === "pfe"
                    ? "bg-purple-500 shadow-purple-500/50"
                    : "bg-blue-500 shadow-blue-500/50"
                }`} />

                {/* Experience card */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className={`backdrop-blur-sm rounded-xl p-6 md:p-8 transition-all duration-300 shadow-xl ml-8 md:ml-0 ${
                    exp.type === "pfe"
                      ? "bg-white/[0.03] border border-purple-500/30 hover:border-purple-500/60 hover:shadow-[0_0_40px_rgba(168,85,247,0.12)]"
                      : "bg-slate-800/50 border border-slate-700 hover:border-blue-500/50"
                  }`}
                >
                  {exp.type === "pfe" && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-4">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                      </span>
                      Projet de Fin d&apos;Études (PFE)
                    </div>
                  )}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-100 mb-2">{exp.title}</h3>
                      <div className={`flex items-center gap-2 font-medium mb-2 ${exp.type === "pfe" ? "text-purple-400" : "text-blue-400"}`}>
                        <Building2 className="w-4 h-4" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="text-sm text-slate-400 font-medium bg-slate-700/50 px-4 py-2 rounded-lg whitespace-nowrap">
                      {exp.period}
                    </div>
                  </div>

                  <p className="text-slate-300 mb-6 leading-relaxed">{exp.description}</p>

                  <ul className="space-y-3 mb-6">
                    {exp.highlights.map((highlight, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.2 + i * 0.1 }}
                        className="text-sm text-slate-300 flex items-start gap-3"
                      >
                        <span className="text-blue-400 mt-1">▹</span>
                        <span>{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 text-xs font-medium rounded-full border ${
                          exp.type === "pfe"
                            ? "bg-purple-500/20 text-purple-300 border-purple-500/30"
                            : "bg-blue-500/20 text-blue-300 border-blue-500/30"
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
