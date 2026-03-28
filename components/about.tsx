"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { Target, GraduationCap, Briefcase, Code2 } from "lucide-react"

export function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const isCyber = mounted && theme === "cyber"

  const cardBase = `backdrop-blur-sm rounded-xl p-6 transition-all duration-300 border ${
    isCyber
      ? "bg-black/60 border-red-900/40 hover:border-red-600/60"
      : "bg-slate-800/50 border-slate-700 hover:border-blue-500/50"
  }`

  const iconBg = isCyber ? "bg-red-700/20" : "bg-blue-500/20"
  const iconColor = isCyber ? "text-red-400" : "text-blue-400"
  const titleColor = isCyber ? "text-red-100" : "text-slate-100"
  const textColor = isCyber ? "text-red-200/70" : "text-slate-300"
  const accentColor = isCyber ? "text-red-300" : "text-blue-400"

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  }
  const cardVariant = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="about" className="relative py-20 px-6" ref={ref}>
      <div className="container mx-auto max-w-7xl z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-12 ${titleColor}`}>
            About Me
          </h2>

          {/* Bento Grid Layout */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={stagger}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* Main Bio Card - Large */}
            <motion.div
              variants={cardVariant}
              whileHover={{ scale: 1.01 }}
              className={`lg:col-span-2 lg:row-span-2 ${cardBase} p-8`}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-br ${isCyber ? "from-red-700 to-red-500" : "from-blue-500 to-blue-400"} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className={`text-2xl font-bold mb-2 ${titleColor}`}>Mohammed El Kassoiri</h3>
                  <p className={`font-medium ${accentColor}`}>Data Scientist & AI Engineer</p>
                </div>
              </div>
              
              <div className={`space-y-4 leading-relaxed ${textColor}`}>
                <p>
                  Data Scientist & AI Engineer specializing in Machine Learning, Deep Learning, and Computer Vision.
                  Currently working on AI for agricultural parcelization.
                </p>
                <p>
                  🌍 <span className={`font-medium ${titleColor}`}>Location:</span> Morocco 🇲🇦
                </p>
                <p>
                  🎓 <span className={`font-medium ${titleColor}`}>Education:</span> ENSIASD - Data Science, Big Data & AI
                </p>
              </div>

              {/* Code snippet */}
              <div className={`mt-6 rounded-lg p-4 border ${isCyber ? "bg-black/70 border-red-900/30" : "bg-slate-900/50 border-slate-700/50"}`}>
                <pre className={`text-sm font-mono overflow-x-auto ${isCyber ? "text-red-300/80" : "text-slate-300"}`}>
{`class AI:
  def __init__(self):
    self.name = "Mohammed El Kassoiri"
    self.role = "Data Scientist & AI Engineer"
    self.location = "Morocco 🇲🇦"
    self.focus = ["Machine Learning", 
                  "Deep Learning", 
                  "Data Science", "NLP"]
  
  def say_hi(self):
    print("Let's build the future!")

me = AI()
me.say_hi()`}
                </pre>
              </div>
            </motion.div>

            {/* Current Focus Card */}
            <motion.div variants={cardVariant} whileHover={{ scale: 1.02 }} className={cardBase}>
              <div className={`w-12 h-12 ${iconBg} rounded-lg flex items-center justify-center mb-4`}>
                <Target className={`w-6 h-6 ${iconColor}`} />
              </div>
              <div className="flex items-center gap-2 mb-3">
                <h3 className={`text-xl font-semibold ${titleColor}`}>Featured Project (PFE)</h3>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs font-semibold">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-purple-500"></span>
                  </span>
                  En cours
                </span>
              </div>
              <p className={`text-sm leading-relaxed ${textColor}`}>
                Parcellisation Automatique des Parcelles Agricoles — Deep Learning system for automatic agricultural field delineation from satellite imagery using multi-task segmentation and edge detection.
              </p>
            </motion.div>

            {/* Education Card */}
            <motion.div variants={cardVariant} whileHover={{ scale: 1.02 }} className={cardBase}>
              <div className={`w-12 h-12 ${iconBg} rounded-lg flex items-center justify-center mb-4`}>
                <GraduationCap className={`w-6 h-6 ${iconColor}`} />
              </div>
              <h3 className={`text-xl font-semibold mb-3 ${titleColor}`}>Education</h3>
              <p className={`text-sm leading-relaxed ${textColor}`}>
                <span className={`font-medium ${titleColor}`}>ENSIASD</span>
                <br />
                Data Science, Big Data & AI
                <br />
                <span className={isCyber ? "text-red-400/60" : "text-slate-400"}>Taroudant, Morocco</span>
              </p>
            </motion.div>

            {/* Mission Card - Wide */}
            <motion.div
              variants={cardVariant}
              whileHover={{ scale: 1.01 }}
              className={`lg:col-span-2 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 border ${
                isCyber
                  ? "bg-gradient-to-br from-red-700/10 to-red-900/5 border-red-700/30 hover:border-red-600/50"
                  : "bg-gradient-to-br from-blue-500/10 to-blue-400/5 border-blue-500/30 hover:border-blue-500/50"
              }`}
            >
              <div className={`w-12 h-12 ${iconBg} rounded-lg flex items-center justify-center mb-4`}>
                <Briefcase className={`w-6 h-6 ${iconColor}`} />
              </div>
              <h3 className={`text-xl font-semibold mb-3 ${titleColor}`}>Mission</h3>
              <p className={`leading-relaxed ${textColor}`}>
                AI & Data Engineer ready for the industry — seeking full-time roles in AI, Data Science, or Software Engineering where cutting-edge ML skills meet real-world impact. Ready to contribute to meaningful projects that shape the future.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
