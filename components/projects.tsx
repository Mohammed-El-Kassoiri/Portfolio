"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card } from "@/components/ui/card"
import { Github, ExternalLink, FileText } from "lucide-react"

const projects = [
  {
    title: "Robot Arm Object Sorting System",
    description:
      "Real-time object detection and automated sorting system using advanced CV algorithms for color sorting.",
    category: "industrial",
    tags: ["Python", "OpenCV", "Tkinter", "Arduino", "Computer Vision"],
    highlights: [
      "Real-time object detection",
      "Automated sorting & tracking",
      "Environmental impact focus",
      "High accuracy sorting by color",
    ],
    github: "https://github.com/Mohammed-El-Kassoiri/vision-robotic-arm",
    demo: "https://www.youtube.com/watch?v=9RaW4qnF28s",
  },

  {
    title: "English → Darija Translation System",
    description:
      "Bidirectional neural machine translation system between English and Moroccan Darija (Moroccan Arabic dialect), built on a state-of-the-art Transformer architecture.",
    category: "other",
    tags: [
      "NLP",
      "Neural Networks",
      "Transformers",
      "Deep Learning",
      "Moroccan Darija",
      "Machine Translation",
    ],
    highlights: [
      "Advanced NLP algorithms",
      "Bidirectional English ↔ Darija translation (~83% accuracy)",
      "Context-aware understanding of informal dialect",
    ],
    github: "https://github.com/Mohammed-El-Kassoiri/English-to-Darija-Translator",
    huggingface: "https://huggingface.co/NeoAivara/English_to_Darija_translator",
    demo: "https://huggingface.co/spaces/NeoAivara/English_to_Darija_translator",
  },

  {
    title: "Letterboxd Movie Analytics & Recommendation System",
    description:
      "Analyzed Letterboxd user data and built a personalized movie recommendation system that suggests unseen films by combining past ratings with movie content.",
    category: "other",
    tags: [
      "Data Science",
      "Python",
      "NLP",
      "Scikit-learn",
      "TF-IDF + cosine similarity",
      "LDA",
      "SVD",
    ],
    highlights: [
      "Letterboxd movie analytics",
      "Personalized recommendation system",
      "User behavior & movie content analysis",
      "Fast & scalable API",
    ],
    github: "https://github.com/Mohammed-El-Kassoiri/Letterboxd-Movie-Analytics-Recommendation-System",
  },

  {
    title: "Medical-Diagnosis-COT-DeepSeek V1",
    description:
      "Advanced medical language model fine-tuned for medical question answering using state-of-the-art transformer architecture.",
    category: "medical",
    tags: ["Deep Learning", "Transformers", "Medical AI", "Healthcare", "LLM"],
    highlights: [
      "Medical question answering",
      "Evidence-based responses",
      "Clinical knowledge base",
      "Accurate medical Q&A",
    ],
    github: "https://github.com/Mohammed-El-Kassoiri/Medical-Diagnosis-COT-DeepSeek",
    huggingface: "https://huggingface.co/MOHAMMED7M7/AI_Doctor_V1",
  },

  {
    title:
      "Cartographie du Stress Hydrique et du Potentiel d'Adaptation Agricole (Taroudant)",
    description:
      "Semantic segmentation system based on Attention U-Net for mapping water stress and agricultural adaptation potential using multi-source remote sensing and environmental data.",
    category: "agriculture",
    tags: [
      "Remote Sensing",
      "Attention U-Net",
      "Semantic Segmentation",
      "Sentinel-1",
      "Sentinel-2",
      "SMAP",
      "DEM",
      "Google Earth Engine",
      "Agriculture",
    ],
    highlights: [
      "Fusion de 16 bandes (optique, radar, SMAP, DEM, pente, précipitations)",
      "Attention U-Net (Accuracy: 93.6%, Mean IoU: 0.81)",
      "Pipeline de weak supervision développé sur Google Earth Engine",
    ],
    github: "https://github.com/Mohammed-El-Kassoiri/Mapping-Water-Stress-and-Agricultural-Adaptation-Potential",
    paper:
      "https://www.researchgate.net/publication/399089388_Mapping_Water_Stress_and_Agricultural_Adaptation_Potential_Using_Multi-Source_16-Band_Attention_U-Net_Case_of_Taroudant_Morocco",
  },
  {
    title: "MY LAW – Moroccan Legal RAG System",
    description:
      "Retrieval-Augmented Generation (RAG) system for Moroccan legal texts, enabling accurate, multilingual (Arabic/French) legal question answering with strict source citation.",
    category: "legal",
    tags: [
      "RAG",
      "NLP",
      "Arabic NLP",
      "Legal AI",
      "FAISS",
      "Sentence Transformers",
      "Gdadio",
      "FastAPI",
    ],
    highlights: [
      "Retrieval-Augmented Generation (RAG) architecture",
      "Multilingual legal QA (Arabic / French)",
      "FAISS vector search with linguistic preference",
      "Strict source-cited legal answers",
      "Optimized for Moroccan legal texts",
    ],
    demo: "https://huggingface.co/spaces/NeoAivara/law",
  },
]

const categories = [
  { id: "all", label: "All Projects" },
  { id: "medical", label: "Medical" },
  { id: "industrial", label: "Industrial" },
  { id: "agriculture", label: "Agriculture" },
  { id: "legal", label: "Legal AI" },
  { id: "other", label: "Other" },
]

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "all" || project.category === selectedCategory
    return matchesCategory
  })

  const sortedProjects = filteredProjects.sort((a, b) => {
    if (selectedCategory !== "all") {
      if (a.category === selectedCategory && b.category !== selectedCategory)
        return -1
      if (a.category !== selectedCategory && b.category === selectedCategory)
        return 1
    }
    return 0
  })

  return (
    <section id="projects" className="section" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Featured Projects</h2>

        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedProjects.length > 0 ? (
            sortedProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  inView ? { opacity: 1, y: 0 } : {}
                }
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="h-full card p-6 hover:-translate-y-1 transition-transform duration-200">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full">
                      {
                        categories.find(
                          (c) => c.id === project.category
                        )?.label
                      }
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <ul className="space-y-2 mb-4">
                    {project.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="text-xs text-gray-600 flex items-start gap-2"
                      >
                        <span className="text-blue-600">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="badge text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2 flex-wrap">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 text-xs font-medium border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                    )}

                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 text-xs font-medium border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Demo</span>
                      </a>
                    ) : project.huggingface ? (
                      <a
                        href={project.huggingface}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 text-xs font-medium border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>HF</span>
                      </a>
                    ) : null}

                    {project.paper && (
                      <a
                        href={project.paper}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 text-xs font-medium border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <FileText className="w-4 h-4" />
                        <span>Paper</span>
                      </a>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">
                No projects found matching your search.
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  )
}
