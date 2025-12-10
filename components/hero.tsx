"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4">
      <div className="container mx-auto text-center z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 font-mono relative"
            whileHover={{ scale: 1.02 }}
            style={{
              perspective: "1000px",
              transformStyle: "preserve-3d",
            }}
          >
            <motion.span
              className="text-white relative inline"
              style={{
                transformStyle: "preserve-3d",
                transform: "translateZ(50px)",
              }}
              animate={{
                rotateY: [-2, 2, -2],
                rotateX: [-1, 1, -1],
                textShadow: [
                  "0 0 10px rgba(0, 255, 255, 0.5)",
                  "0 0 20px rgba(255, 0, 255, 0.5)",
                  "0 0 10px rgba(0, 255, 255, 0.5)",
                ],
              }}
              transition={{
                rotateY: { duration: 4, repeat: Number.POSITIVE_INFINITY },
                rotateX: { duration: 3, repeat: Number.POSITIVE_INFINITY },
                textShadow: { duration: 2, repeat: Number.POSITIVE_INFINITY },
              }}
            >
              Mohammed
            </motion.span>{" "}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-magenta-500 to-green-400 animate-gradient inline"
              style={{
                transformStyle: "preserve-3d",
                transform: "translateZ(50px)",
              }}
              animate={{
                rotateY: [2, -2, 2],
                rotateX: [1, -1, 1],
              }}
              transition={{
                rotateY: { duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 0.2 },
                rotateX: { duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 0.2 },
              }}
            >
              El Kassoiri
            </motion.span>
          </motion.h1>

          <div className="text-2xl md:text-3xl text-cyan-400 mb-6 h-20 font-mono flex items-center justify-center gap-3">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Sparkles className="w-6 h-6" />
            </motion.div>
            <TypeAnimation
              sequence={[
                "AI Engineer",
                2000,
                "Data Scientist",
                2000,
                "Machine Learning Expert",
                2000,
                "Neural Network Researcher",
                2000,
                "Deep Learning Researcher",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Number.POSITIVE_INFINITY}
            />
          </div>

          <motion.p
            className="text-white text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Building the future with AI and Machine Learning. Passionate about creating intelligent systems that make a
            difference.
          </motion.p>

          <div className="flex gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-magenta-500 text-black font-mono font-bold rounded hover:shadow-2xl hover:shadow-cyan-400/50 transition-all relative overflow-hidden group"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-magenta-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
              <span className="relative z-10">View Projects</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-mono font-bold rounded hover:bg-cyan-400/20 hover:shadow-xl hover:shadow-cyan-400/30 transition-all"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Contact Me
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{
              y: [0, 15, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="text-cyan-400 relative"
          >
            <motion.div
              className="absolute inset-0 blur-xl"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
            <svg className="w-6 h-6 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
