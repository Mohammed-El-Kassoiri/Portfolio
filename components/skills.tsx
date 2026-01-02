"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
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
} from "lucide-react"

const skillCategories = [
  {
    title: "AI & Deep Learning",
    skills: [
      { name: "Machine Learning", icon: Brain },
      { name: "Deep Learning", icon: Brain },
      { name: "Transformers", icon: Brain },
      { name: "Hugging Face", icon: Brain },
      { name: "Computer Vision", icon: Eye },
      { name: "NLP", icon: MessageSquare },
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
    title: "Math & Theory",
    skills: [
      { name: "Statistics", icon: BarChart3 },
      { name: "Probabilities", icon: BarChart3 },
      { name: "Linear Algebra", icon: BarChart3 },
      { name: "Analysis", icon: BarChart3 },
    ],
  },
]

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="section" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Skills & Expertise</h2>

          <div className="space-y-8">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                className="card p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {category.skills.map((skill) => {
                    const Icon = skill.icon
                    return (
                      <div
                        key={skill.name}
                        className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <Icon className="w-5 h-5 text-blue-600" />
                        <span className="text-sm text-gray-700 font-medium">
                          {skill.name}
                        </span>
                      </div>
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
