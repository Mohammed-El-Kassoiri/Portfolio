"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useTheme } from "next-themes"
import {
  Brain,
  Code2,
  Database,
  Eye,
  MessageSquare,
  BarChart3,
  FileCode,
  Boxes,
  Wrench,
  Satellite,
  Map,
  Layers,
} from "lucide-react"
import { useLanguage } from "@/components/language-provider"

const skillCategoriesEn = [
  {
    title: "AI & Deep Learning",
    skills: [
      { name: "Machine Learning", icon: Brain },
      { name: "Deep Learning", icon: Brain },
      { name: "Transformers", icon: Brain },
      { name: "Hugging Face", icon: Brain },
      { name: "Computer Vision", icon: Eye },
      { name: "NLP", icon: MessageSquare },
      { name: "Semantic Segmentation", icon: Eye },
      { name: "Edge Detection", icon: Eye },
      { name: "Multi-task Learning", icon: Layers },
    ],
  },
  {
    title: "Programming",
    skills: [
      { name: "Python", icon: FileCode },
      { name: "SQL", icon: Database },
      { name: "JavaScript", icon: Code2 },
      { name: "R", icon: Code2 },
    ],
  },
  {
    title: "Frameworks & APIs",
    skills: [
      { name: "PyTorch", icon: Boxes },
      { name: "TensorFlow", icon: Boxes },
      { name: "Keras", icon: Boxes },
      { name: "Scikit-learn", icon: Boxes },
      { name: "DeepLabV3+", icon: Boxes },
      { name: "Flask", icon: Wrench },
      { name: "FastAPI", icon: Wrench },
    ],
  },
  {
    title: "Data & Databases",
    skills: [
      { name: "Pandas", icon: Database },
      { name: "NumPy", icon: Database },
      { name: "SciPy", icon: Database },
      { name: "MongoDB", icon: Database },
      { name: "MySQL", icon: Database },
      { name: "SQLite", icon: Database },
    ],
  },
  {
    title: "NLP Stack",
    skills: [
      { name: "NLTK", icon: MessageSquare },
      { name: "spaCy", icon: MessageSquare },
      { name: "Gensim", icon: MessageSquare },
      { name: "TextBlob", icon: MessageSquare },
    ],
  },
  {
    title: "Mathematics & Theory",
    skills: [
      { name: "Statistics", icon: BarChart3 },
      { name: "Probabilities", icon: BarChart3 },
      { name: "Linear Algebra", icon: BarChart3 },
      { name: "Analysis", icon: BarChart3 },
    ],
  },
  {
    title: "Remote Sensing & GIS",
    skills: [
      { name: "Remote Sensing", icon: Satellite },
      { name: "Google Earth Engine", icon: Satellite },
      { name: "QGIS", icon: Map },
      { name: "Sentinel-2", icon: Satellite },
      { name: "NDVI / Veg. Indices", icon: BarChart3 },
      { name: "Encoder-Decoder", icon: Layers },
    ],
  },
]

const skillCategoriesFr = [
  {
    title: "IA & Deep Learning",
    skills: [
      { name: "Machine Learning", icon: Brain },
      { name: "Deep Learning", icon: Brain },
      { name: "Transformers", icon: Brain },
      { name: "Hugging Face", icon: Brain },
      { name: "Computer Vision", icon: Eye },
      { name: "NLP", icon: MessageSquare },
      { name: "Segmentation Sémantique", icon: Eye },
      { name: "Détection de Contours", icon: Eye },
      { name: "Apprentissage Multi-tâches", icon: Layers },
    ],
  },
  {
    title: "Programmation",
    skills: [
      { name: "Python", icon: FileCode },
      { name: "SQL", icon: Database },
      { name: "JavaScript", icon: Code2 },
      { name: "R", icon: Code2 },
    ],
  },
  {
    title: "Frameworks & APIs",
    skills: [
      { name: "PyTorch", icon: Boxes },
      { name: "TensorFlow", icon: Boxes },
      { name: "Keras", icon: Boxes },
      { name: "Scikit-learn", icon: Boxes },
      { name: "DeepLabV3+", icon: Boxes },
      { name: "Flask", icon: Wrench },
      { name: "FastAPI", icon: Wrench },
    ],
  },
  {
    title: "Données & Bases de données",
    skills: [
      { name: "Pandas", icon: Database },
      { name: "NumPy", icon: Database },
      { name: "SciPy", icon: Database },
      { name: "MongoDB", icon: Database },
      { name: "MySQL", icon: Database },
      { name: "SQLite", icon: Database },
    ],
  },
  {
    title: "Pile NLP",
    skills: [
      { name: "NLTK", icon: MessageSquare },
      { name: "spaCy", icon: MessageSquare },
      { name: "Gensim", icon: MessageSquare },
      { name: "TextBlob", icon: MessageSquare },
    ],
  },
  {
    title: "Mathématiques & Théorie",
    skills: [
      { name: "Statistiques", icon: BarChart3 },
      { name: "Probabilités", icon: BarChart3 },
      { name: "Algèbre Linéaire", icon: BarChart3 },
      { name: "Analyse", icon: BarChart3 },
    ],
  },
  {
    title: "Télédétection & SIG",
    skills: [
      { name: "Télédétection", icon: Satellite },
      { name: "Google Earth Engine", icon: Satellite },
      { name: "QGIS", icon: Map },
      { name: "Sentinel-2", icon: Satellite },
      { name: "NDVI / Indices Végétation", icon: BarChart3 },
      { name: "Encodeur-Décodeur", icon: Layers },
    ],
  },
]

export function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const { theme } = useTheme()
  const { language } = useLanguage()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const isCyber = mounted && theme === "cyber"

  const skillCategories = language === "en" ? skillCategoriesEn : skillCategoriesFr

  return (
    <section id="skills" className="relative py-28 px-6" ref={ref}>
      {/* Section number */}
      {!isCyber && (
        <div className="absolute right-[3%] top-20 text-[15vw] font-black leading-none select-none pointer-events-none text-[rgba(197,165,90,0.025)] tracking-tighter">
          07
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
                {language === "en" ? "// tech stack" : "// technologies"}
              </p>
              <h2 className={`text-4xl md:text-5xl font-black tracking-tight ${
                isCyber ? "text-red-100" : "text-[#e8eaf5]"
              }`}>
                {language === "en" ? "Skills & Expertise" : "Compétences & Expertise"}
              </h2>
            </div>
            <div className={`flex-1 h-px mb-3 hidden md:block ${
              isCyber
                ? "bg-gradient-to-r from-red-900/40 to-transparent"
                : "bg-gradient-to-r from-[rgba(197,165,90,0.3)] to-transparent"
            }`} />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                whileHover={{ y: -2 }}
                className={`relative border transition-all duration-300 ${
                  isCyber
                    ? "bg-black/60 border-red-900/40 hover:border-red-600/50"
                    : "bg-[rgba(11,21,37,0.8)] border-[rgba(197,165,90,0.1)] hover:border-[rgba(197,165,90,0.35)]"
                }`}
              >
                {/* Top accent */}
                <div className={`absolute top-0 left-0 right-0 h-px ${
                  isCyber
                    ? "bg-gradient-to-r from-red-700/60 to-transparent"
                    : "bg-gradient-to-r from-[rgba(197,165,90,0.5)] to-transparent"
                }`} />

                <div className="p-5">
                  <h3 className={`text-xs font-bold uppercase tracking-widest mb-5 pb-3 border-b ${
                    isCyber
                      ? "text-red-400 border-red-900/30"
                      : "text-[#c5a55a] border-[rgba(197,165,90,0.1)]"
                  }`}>
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => {
                      const Icon = skill.icon
                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{
                            duration: 0.4,
                            delay: index * 0.08 + i * 0.04,
                          }}
                          whileHover={{ scale: 1.05 }}
                          className={`flex items-center gap-1.5 px-2.5 py-1.5 border text-[10px] font-medium tracking-wide cursor-default transition-all ${
                            isCyber
                              ? "bg-red-900/10 border-red-900/30 text-red-200/60 hover:border-red-600/40 hover:text-red-300"
                              : "bg-[rgba(197,165,90,0.04)] border-[rgba(197,165,90,0.12)] text-[rgba(232,234,245,0.55)] hover:border-[rgba(197,165,90,0.3)] hover:text-[rgba(232,234,245,0.8)]"
                          }`}
                        >
                          <Icon className={`w-3 h-3 flex-shrink-0 ${
                            isCyber ? "text-red-400/70" : "text-[rgba(197,165,90,0.6)]"
                          }`} />
                          <span>{skill.name}</span>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

