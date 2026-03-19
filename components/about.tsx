"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Target, GraduationCap, Briefcase, Code2 } from "lucide-react"

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="relative py-20 px-6" ref={ref}>
      <div className="container mx-auto max-w-7xl z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-slate-100">
            About Me
          </h2>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Main Bio Card - Large */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2 lg:row-span-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-100 mb-2">Mohammed El Kassoiri</h3>
                  <p className="text-blue-400 font-medium">Data Scientist & AI Engineer</p>
                </div>
              </div>
              
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Data Scientist & AI Engineer specializing in Machine Learning, Deep Learning, and Computer Vision.
                  Currently working on AI for agricultural parcelization.
                </p>
                <p>
                  🌍 <span className="text-slate-100 font-medium">Location:</span> Morocco 🇲🇦
                </p>
                <p>
                  🎓 <span className="text-slate-100 font-medium">Education:</span> ENSIASD - Data Science, Big Data & AI
                </p>
              </div>

              {/* Code snippet */}
              <div className="mt-6 bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                <pre className="text-sm text-slate-300 font-mono overflow-x-auto">
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-blue-400" />
              </div>
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-xl font-semibold text-slate-100">Featured Project (PFE)</h3>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs font-semibold">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-purple-500"></span>
                  </span>
                  En cours
                </span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Parcellisation Automatique des Parcelles Agricoles — Deep Learning system for automatic agricultural field delineation from satellite imagery using multi-task segmentation and edge detection.
              </p>
            </motion.div>

            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-100 mb-3">Education</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                <span className="font-medium text-slate-100">ENSIASD</span>
                <br />
                Data Science, Big Data & AI
                <br />
                <span className="text-slate-400">Taroudant, Morocco</span>
              </p>
            </motion.div>

            {/* Mission Card - Wide */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="lg:col-span-2 bg-gradient-to-br from-blue-500/10 to-blue-400/5 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-100 mb-3">Mission</h3>
              <p className="text-slate-300 leading-relaxed">
                AI & Data Engineer ready for the industry — seeking full-time roles in AI, Data Science, or Software Engineering where cutting-edge ML skills meet real-world impact. Ready to contribute to meaningful projects that shape the future.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
