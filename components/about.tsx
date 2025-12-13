"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Terminal, Sparkles, Zap } from "lucide-react"

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="relative py-20 px-4" ref={ref}>
      <div className="container mx-auto max-w-6xl z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 font-mono">
            <span className="text-cyan-400">&lt;</span>
            <span className="text-white">About Me</span>
            <span className="text-magenta-400">/&gt;</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <motion.div
                className="border border-cyan-400/30 p-6 rounded-lg bg-black/50 backdrop-blur-sm hover:border-cyan-400 transition-all relative overflow-hidden group"
                whileHover={{
                  y: -5,
                  rotateX: 5,
                  boxShadow: "0 20px 40px rgba(0, 255, 255, 0.2)",
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  className="absolute top-0 right-0 opacity-10"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Sparkles className="w-32 h-32 text-cyan-400" />
                </motion.div>
                <h3 className="text-xl font-mono text-cyan-400 mb-3 flex items-center gap-2">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    🎯
                  </motion.div>
                  Current Focus
                </h3>
                <p className="text-white leading-relaxed relative z-10">
                 Data Scientist & AI Engineer specializing in Machine Learning and Deep Learning. Currently contributing to the X-EdTech Platform at XAI Morocco.
                </p>
              </motion.div>

              <motion.div
                className="border border-magenta-400/30 p-6 rounded-lg bg-black/50 backdrop-blur-sm hover:border-magenta-400 transition-all relative overflow-hidden group"
                whileHover={{
                  y: -5,
                  rotateX: 5,
                  boxShadow: "0 20px 40px rgba(255, 0, 255, 0.2)",
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  className="absolute top-0 right-0 opacity-10"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Terminal className="w-32 h-32 text-magenta-400" />
                </motion.div>
                <h3 className="text-xl font-mono text-magenta-400 mb-3 flex items-center gap-2">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.3 }}
                  >
                    🎓
                  </motion.div>
                  Education
                </h3>
                <p className="text-white leading-relaxed relative z-10">
                  ENSIASD - Data Science, Big Data & AI
                  <br />
                  <span className="text-sm text-white">Taroudant, Morocco 🇲🇦</span>
                </p>
              </motion.div>

              <motion.div
                className="border border-green-400/30 p-6 rounded-lg bg-black/50 backdrop-blur-sm hover:border-green-400 transition-all relative overflow-hidden group"
                whileHover={{
                  y: -5,
                  rotateX: 5,
                  boxShadow: "0 20px 40px rgba(0, 255, 0, 0.2)",
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  className="absolute top-0 right-0 opacity-10"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Zap className="w-32 h-32 text-green-400" />
                </motion.div>
                <h3 className="text-xl font-mono text-green-400 mb-3 flex items-center gap-2">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.6 }}
                  >
                    🚀
                  </motion.div>
                  Mission
                </h3>
                <p className="text-white leading-relaxed relative z-10">
                  Seeking PFE Internship to apply cutting-edge ML/AI skills in a dynamic environment where innovation
                  meets impact.
                </p>
              </motion.div>
            </div>

            <div className="space-y-6">
              <motion.div
                className="border border-cyan-400/30 p-6 rounded-lg bg-black/50 backdrop-blur-sm relative overflow-hidden"
                whileHover={{
                  boxShadow: "0 0 30px rgba(0, 255, 255, 0.3)",
                  borderColor: "rgba(0, 255, 255, 0.8)",
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-magenta-400/5"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                />
                <pre className="text-sm text-green-400 font-mono overflow-x-auto relative z-10">
                  {`class AI:
  def __init__(self):
      self.name = "Mohammed El Kassoiri"
      self.role = "Data Scientist 
                          & AI Engineer"
      self.location = "Morocco 🇲🇦"
      self.focus = [
         "Machine Learning",
          "Deep Learning",
          "Data Science",
          "NLP"
      ]
    
  def say_hi(self):
      print("Let's build the future!")

me = AI()
me.say_hi()`}
                </pre>
              </motion.div>
{/*
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    rotateY: 10,
                    boxShadow: "0 20px 40px rgba(0, 255, 255, 0.3)",
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="border border-cyan-400/30 p-4 rounded-lg bg-black/50 backdrop-blur-sm text-center relative overflow-hidden group"
                >
                  <motion.div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <motion.div
                    className="text-3xl font-bold text-cyan-400 mb-2"
                    animate={{
                      textShadow: [
                        "0 0 10px rgba(0, 255, 255, 0.5)",
                        "0 0 20px rgba(0, 255, 255, 0.8)",
                        "0 0 10px rgba(0, 255, 255, 0.5)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    1+
                  </motion.div>
                  <div className="text-sm text-white font-mono relative z-10">Years Experience</div>
                </motion.div>
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    rotateY: -10,
                    boxShadow: "0 20px 40px rgba(255, 0, 255, 0.3)",
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="border border-magenta-400/30 p-4 rounded-lg bg-black/50 backdrop-blur-sm text-center relative overflow-hidden group"
                >
                  <motion.div className="absolute inset-0 bg-gradient-to-br from-magenta-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <motion.div
                    className="text-3xl font-bold text-magenta-400 mb-2"
                    animate={{
                      textShadow: [
                        "0 0 10px rgba(255, 0, 255, 0.5)",
                        "0 0 20px rgba(255, 0, 255, 0.8)",
                        "0 0 10px rgba(255, 0, 255, 0.5)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                  >
                    10+
                  </motion.div>
                  <div className="text-sm text-white font-mono relative z-10">Projects</div>
                </motion.div>
              </div>
              */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
