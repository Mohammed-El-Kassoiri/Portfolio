"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useTheme } from "next-themes"
import { Github, ExternalLink, FileText } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

interface Project {
  title: string
  description: string
  category: string
  tags: string[]
  gradient: string
  github?: string
  demo?: string
  huggingface?: string
  paper?: string
}

const projectsEn: Project[] = [
  {
    title: "Robot Arm Object Sorting System",
    description:
      "Real-time object detection and automated sorting system using advanced CV algorithms for color-based sorting.",
    category: "industrial",
    tags: ["Python", "OpenCV", "Tkinter", "Arduino", "Computer Vision"],
    gradient: "from-blue-500 to-blue-600",
    github: "https://github.com/Mohammed-El-Kassoiri/vision-robotic-arm",
    demo: "https://www.youtube.com/watch?v=9RaW4qnF28s",
  },
  {
    title: "English → Darija Translation System",
    description:
      "Bidirectional neural machine translation between English and Moroccan Darija (Moroccan Arabic dialect), built on a state-of-the-art Transformer architecture.",
    category: "other",
    tags: ["NLP", "Transformers", "Deep Learning", "Moroccan Darija", "Machine Translation"],
    gradient: "from-purple-500 to-pink-500",
    github: "https://github.com/Mohammed-El-Kassoiri/English-to-Darija-Translator",
    huggingface: "https://huggingface.co/NeoAivara/English_to_Darija_translator",
    demo: "https://huggingface.co/spaces/NeoAivara/English_to_Darija_translator",
  },
  {
    title: "Letterboxd Movie Analytics & Recommendation System",
    description:
      "Analyzed Letterboxd user data and built a personalized movie recommendation system combining past ratings with movie content.",
    category: "other",
    tags: ["Data Science", "Python", "NLP", "Scikit-learn", "TF-IDF", "LDA", "SVD"],
    gradient: "from-green-500 to-emerald-600",
    github: "https://github.com/Mohammed-El-Kassoiri/Letterboxd-Movie-Analytics-Recommendation-System",
  },
  {
    title: "Medical-Diagnosis-COT-DeepSeek V1",
    description:
      "Advanced medical language model fine-tuned for evidence-based medical question answering using a state-of-the-art transformer architecture.",
    category: "medical",
    tags: ["Deep Learning", "Transformers", "Medical AI", "Healthcare", "LLM"],
    gradient: "from-red-500 to-orange-500",
    github: "https://github.com/Mohammed-El-Kassoiri/Medical-Diagnosis-COT-DeepSeek",
    huggingface: "https://huggingface.co/MOHAMMED7M7/AI_Doctor_V1",
  },
  {
    title: "Water Stress & Agricultural Adaptation Mapping (Taroudant)",
    description:
      "Semantic segmentation system based on Attention U-Net for mapping water stress and agricultural adaptation potential using multi-source remote sensing data.",
    category: "agriculture",
    tags: ["Remote Sensing", "Attention U-Net", "Semantic Segmentation", "Sentinel-1", "Sentinel-2", "SMAP", "Google Earth Engine"],
    gradient: "from-amber-500 to-yellow-500",
    github: "https://github.com/Mohammed-El-Kassoiri/Mapping-Water-Stress-and-Agricultural-Adaptation-Potential",
    paper:
      "https://www.researchgate.net/publication/399089388_Mapping_Water_Stress_and_Agricultural_Adaptation_Potential_Using_Multi-Source_16-Band_Attention_U-Net_Case_of_Taroudant_Morocco",
  },
  {
    title: "MY LAW – Moroccan Legal RAG System",
    description:
      "Retrieval-Augmented Generation (RAG) system for Moroccan legal texts, enabling accurate multilingual (Arabic/French) legal question answering with strict source citation.",
    category: "legal",
    tags: ["RAG", "NLP", "Arabic NLP", "Legal AI", "FAISS", "Sentence Transformers", "FastAPI"],
    gradient: "from-indigo-500 to-blue-600",
    demo: "https://huggingface.co/spaces/NeoAivara/law",
  },
]

const projectsFr: Project[] = [
  {
    title: "Système de Tri Robotique par Vision",
    description:
      "Système de détection d'objets en temps réel et de tri automatisé basé sur des algorithmes CV avancés de tri par couleur.",
    category: "industrial",
    tags: ["Python", "OpenCV", "Tkinter", "Arduino", "Computer Vision"],
    gradient: "from-blue-500 to-blue-600",
    github: "https://github.com/Mohammed-El-Kassoiri/vision-robotic-arm",
    demo: "https://www.youtube.com/watch?v=9RaW4qnF28s",
  },
  {
    title: "Système de Traduction Anglais → Darija",
    description:
      "Système de traduction automatique bidirectionnel entre l'anglais et le Darija marocain (dialecte arabe marocain), basé sur une architecture Transformer de pointe.",
    category: "other",
    tags: ["NLP", "Transformers", "Deep Learning", "Darija Marocain", "Traduction Automatique"],
    gradient: "from-purple-500 to-pink-500",
    github: "https://github.com/Mohammed-El-Kassoiri/English-to-Darija-Translator",
    huggingface: "https://huggingface.co/NeoAivara/English_to_Darija_translator",
    demo: "https://huggingface.co/spaces/NeoAivara/English_to_Darija_translator",
  },
  {
    title: "Analyse de Films Letterboxd & Système de Recommandation",
    description:
      "Analyse des données Letterboxd et construction d'un système de recommandation personnalisé combinant historique de notes et contenu des films.",
    category: "other",
    tags: ["Data Science", "Python", "NLP", "Scikit-learn", "TF-IDF", "LDA", "SVD"],
    gradient: "from-green-500 to-emerald-600",
    github: "https://github.com/Mohammed-El-Kassoiri/Letterboxd-Movie-Analytics-Recommendation-System",
  },
  {
    title: "Medical-Diagnosis-COT-DeepSeek V1",
    description:
      "Modèle de langage médical avancé fine-tuné pour le diagnostic médical basé sur des preuves, utilisant une architecture Transformer de pointe.",
    category: "medical",
    tags: ["Deep Learning", "Transformers", "IA Médicale", "Santé", "LLM"],
    gradient: "from-red-500 to-orange-500",
    github: "https://github.com/Mohammed-El-Kassoiri/Medical-Diagnosis-COT-DeepSeek",
    huggingface: "https://huggingface.co/MOHAMMED7M7/AI_Doctor_V1",
  },
  {
    title: "Cartographie du Stress Hydrique et Potentiel d'Adaptation Agricole (Taroudant)",
    description:
      "Système de segmentation sémantique basé sur Attention U-Net pour cartographier le stress hydrique et le potentiel d'adaptation agricole à partir de données de télédétection multi-sources.",
    category: "agriculture",
    tags: ["Télédétection", "Attention U-Net", "Segmentation Sémantique", "Sentinel-1", "Sentinel-2", "SMAP", "Google Earth Engine"],
    gradient: "from-amber-500 to-yellow-500",
    github: "https://github.com/Mohammed-El-Kassoiri/Mapping-Water-Stress-and-Agricultural-Adaptation-Potential",
    paper:
      "https://www.researchgate.net/publication/399089388_Mapping_Water_Stress_and_Agricultural_Adaptation_Potential_Using_Multi-Source_16-Band_Attention_U-Net_Case_of_Taroudant_Morocco",
  },
  {
    title: "MY LAW – Système RAG de Droit Marocain",
    description:
      "Système RAG (Retrieval-Augmented Generation) pour les textes juridiques marocains, permettant des réponses juridiques précises et multilingues (arabe/français) avec citation des sources.",
    category: "legal",
    tags: ["RAG", "NLP", "NLP Arabe", "IA Juridique", "FAISS", "Sentence Transformers", "FastAPI"],
    gradient: "from-indigo-500 to-blue-600",
    demo: "https://huggingface.co/spaces/NeoAivara/law",
  },
]

const categoriesEn = [
  { id: "all", label: "All Projects" },
  { id: "medical", label: "Medical" },
  { id: "industrial", label: "Industrial" },
  { id: "agriculture", label: "Agriculture" },
  { id: "legal", label: "Legal AI" },
  { id: "other", label: "Other" },
]

const categoriesFr = [
  { id: "all", label: "Tous les projets" },
  { id: "medical", label: "Médical" },
  { id: "industrial", label: "Industriel" },
  { id: "agriculture", label: "Agriculture" },
  { id: "legal", label: "IA Juridique" },
  { id: "other", label: "Autre" },
]

export function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [selectedCategory, setSelectedCategory] = useState("all")
  const { theme } = useTheme()
  const { language } = useLanguage()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const isCyber = mounted && theme === "cyber"

  const projects = language === "en" ? projectsEn : projectsFr
  const categories = language === "en" ? categoriesEn : categoriesFr

  const filteredProjects = projects.filter(
    (p) => selectedCategory === "all" || p.category === selectedCategory,
  )

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (selectedCategory !== "all") {
      if (a.category === selectedCategory && b.category !== selectedCategory) return -1
      if (a.category !== selectedCategory && b.category === selectedCategory) return 1
    }
    return 0
  })

  const noResultsMsg =
    language === "en"
      ? "No projects found matching your search."
      : "Aucun projet correspondant à votre recherche."

  return (
    <section id="projects" className="relative py-28 px-6" ref={ref}>
      {/* Section number */}
      {!isCyber && (
        <div className="absolute right-[3%] top-20 text-[15vw] font-black leading-none select-none pointer-events-none text-[rgba(197,165,90,0.025)] tracking-tighter">
          05
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
                {language === "en" ? "// portfolio" : "// portfolio"}
              </p>
              <h2 className={`text-4xl md:text-5xl font-black tracking-tight ${
                isCyber ? "text-red-100" : "text-[#e8eaf5]"
              }`}>
                {language === "en" ? "Academic & Personal Projects" : "Projets Académiques & Personnels"}
              </h2>
            </div>
            <div className={`flex-1 h-px mb-3 hidden md:block ${
              isCyber
                ? "bg-gradient-to-r from-red-900/40 to-transparent"
                : "bg-gradient-to-r from-[rgba(197,165,90,0.3)] to-transparent"
            }`} />
          </div>

          {/* Filter buttons */}
          <div className="mb-12 flex flex-wrap gap-2">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.97 }}
                className={`px-4 py-2 text-xs font-bold tracking-widest uppercase transition-all border ${
                  selectedCategory === category.id
                    ? isCyber
                      ? "bg-red-700 text-white border-red-700"
                      : "bg-[#c5a55a] text-[#060910] border-[#c5a55a]"
                    : isCyber
                    ? "bg-black/40 text-red-200/60 border-red-900/40 hover:border-red-600/40 hover:text-red-300"
                    : "bg-transparent text-[rgba(232,234,245,0.5)] border-[rgba(197,165,90,0.15)] hover:border-[rgba(197,165,90,0.4)] hover:text-[#c5a55a]"
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sortedProjects.length > 0 ? (
              sortedProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: index * 0.08 }}
                  whileHover={{ y: -3 }}
                  className={`group relative border transition-all duration-300 flex flex-col ${
                    isCyber
                      ? "bg-black/60 border-red-900/40 hover:border-red-600/50"
                      : "bg-[rgba(11,21,37,0.8)] border-[rgba(197,165,90,0.1)] hover:border-[rgba(197,165,90,0.35)]"
                  }`}
                >
                  {/* Top color accent using gradient */}
                  <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${project.gradient} opacity-60`} />

                  {/* Hover overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />

                  <div className="relative p-6 flex flex-col h-full">
                    {/* Category + icon row */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-2.5 py-0.5 text-[10px] font-bold tracking-widest uppercase border ${
                        isCyber
                          ? "bg-red-700/15 text-red-300/70 border-red-700/25"
                          : "bg-[rgba(197,165,90,0.07)] text-[rgba(197,165,90,0.7)] border-[rgba(197,165,90,0.2)]"
                      }`}>
                        {categories.find((c) => c.id === project.category)?.label}
                      </span>
                      <div className={`w-8 h-8 flex items-center justify-center bg-gradient-to-br ${project.gradient} flex-shrink-0`}>
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                    </div>

                    <h3 className={`text-base font-bold mb-2 leading-snug ${
                      isCyber ? "text-red-100" : "text-[#e8eaf5]"
                    }`}>
                      {project.title}
                    </h3>

                    <p className={`text-xs mb-4 leading-relaxed flex-grow ${
                      isCyber ? "text-red-200/60" : "text-[rgba(232,234,245,0.55)]"
                    }`}>
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.slice(0, 4).map((tag, i) => (
                        <span
                          key={i}
                          className={`px-2 py-0.5 text-[10px] font-medium border ${
                            isCyber
                              ? "bg-red-900/15 text-red-300/60 border-red-900/30"
                              : "bg-[rgba(11,21,37,0.6)] text-[rgba(232,234,245,0.45)] border-[rgba(197,165,90,0.1)]"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className={`px-2 py-0.5 text-[10px] font-medium ${
                          isCyber ? "text-red-400/50" : "text-[rgba(197,165,90,0.4)]"
                        }`}>
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-2 mt-auto flex-wrap">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ y: -1 }}
                          className={`flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-bold tracking-wider uppercase border transition-all ${
                            isCyber
                              ? "border-red-700/40 text-red-400/70 hover:text-red-400 hover:border-red-600/60"
                              : "border-[rgba(197,165,90,0.2)] text-[rgba(197,165,90,0.6)] hover:text-[#c5a55a] hover:border-[rgba(197,165,90,0.5)]"
                          }`}
                        >
                          <Github className="w-3 h-3" />
                          <span>Code</span>
                        </motion.a>
                      )}

                      {project.demo ? (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ y: -1 }}
                          className={`flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-bold tracking-wider uppercase border transition-all ${
                            isCyber
                              ? "border-red-700/40 text-red-400/70 hover:text-red-400 hover:border-red-600/60"
                              : "border-[rgba(197,165,90,0.2)] text-[rgba(197,165,90,0.6)] hover:text-[#c5a55a] hover:border-[rgba(197,165,90,0.5)]"
                          }`}
                        >
                          <ExternalLink className="w-3 h-3" />
                          <span>Demo</span>
                        </motion.a>
                      ) : project.huggingface ? (
                        <motion.a
                          href={project.huggingface}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ y: -1 }}
                          className={`flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-bold tracking-wider uppercase border transition-all ${
                            isCyber
                              ? "border-red-700/40 text-red-400/70 hover:text-red-400 hover:border-red-600/60"
                              : "border-[rgba(197,165,90,0.2)] text-[rgba(197,165,90,0.6)] hover:text-[#c5a55a] hover:border-[rgba(197,165,90,0.5)]"
                          }`}
                        >
                          <ExternalLink className="w-3 h-3" />
                          <span>HF</span>
                        </motion.a>
                      ) : null}

                      {project.paper && (
                        <motion.a
                          href={project.paper}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ y: -1 }}
                          className={`flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-bold tracking-wider uppercase border transition-all ${
                            isCyber
                              ? "border-red-700/40 text-red-400/70 hover:text-red-400 hover:border-red-600/60"
                              : "border-[rgba(197,165,90,0.2)] text-[rgba(197,165,90,0.6)] hover:text-[#c5a55a] hover:border-[rgba(197,165,90,0.5)]"
                          }`}
                        >
                          <FileText className="w-3 h-3" />
                          <span>Paper</span>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-16">
                <p className={`text-sm ${isCyber ? "text-red-400/60" : "text-[rgba(197,165,90,0.4)]"}`}>
                  {noResultsMsg}
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}


interface Project {
  title: string
  description: string
  category: string
  tags: string[]
  gradient: string
  github?: string
  demo?: string
  huggingface?: string
  paper?: string
}
