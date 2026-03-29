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
    <section id="skills" className="relative py-24 px-6" ref={ref}>
      <div className="container mx-auto max-w-7xl z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section header */}
          <div className="mb-14">
            <p
              className={`text-sm font-semibold tracking-widest uppercase mb-3 ${
                isCyber ? "text-red-400" : "text-blue-400"
              }`}
            >
              {language === "en" ? "Tech stack" : "Technologies"}
            </p>
            <h2
              className={`text-4xl md:text-5xl font-extrabold tracking-tight ${
                isCyber ? "text-red-100" : "text-slate-100"
              }`}
            >
              {language === "en" ? "Skills & Expertise" : "Compétences & Expertise"}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={`backdrop-blur-sm border rounded-2xl p-6 transition-all duration-300 ${
                  isCyber
                    ? "bg-black/60 border-red-900/40 hover:border-red-600/60"
                    : "bg-slate-800/50 border-slate-700/60 hover:border-blue-500/50"
                }`}
              >
                <h3
                  className={`text-lg font-semibold mb-6 ${
                    isCyber ? "text-red-400" : "text-blue-400"
                  }`}
                >
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, i) => {
                    const Icon = skill.icon
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.1 + i * 0.05,
                        }}
                        whileHover={{ scale: 1.08 }}
                        className={`flex flex-col items-center gap-2 p-3 rounded-xl transition-all group ${
                          isCyber
                            ? "bg-red-900/10 hover:bg-red-900/20"
                            : "bg-slate-700/30 hover:bg-slate-700/50"
                        }`}
                      >
                        <Icon
                          className={`w-7 h-7 group-hover:scale-110 transition-transform ${
                            isCyber ? "text-red-400" : "text-blue-400"
                          }`}
                        />
                        <span
                          className={`text-xs text-center font-medium leading-tight ${
                            isCyber ? "text-red-200/70" : "text-slate-300"
                          }`}
                        >
                          {skill.name}
                        </span>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
