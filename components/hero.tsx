"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

export function Hero() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const isCyber = mounted && theme === "cyber"

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 pt-16">
      {/* Subtle background pattern — adapts to theme */}
      <div
        className={
          isCyber
            ? "absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(220,38,38,0.08)_0%,transparent_50%),radial-gradient(circle_at_70%_80%,rgba(239,68,68,0.05)_0%,transparent_50%)]"
            : "absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.05)_0%,transparent_50%),radial-gradient(circle_at_70%_80%,rgba(96,165,250,0.05)_0%,transparent_50%)]"
        }
      />

      {/* Cyber scanline accent */}
      {isCyber && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.03]"
          style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, #dc2626 2px, #dc2626 4px)" }}
        />
      )}
      
      <div className="container mx-auto max-w-7xl z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className={isCyber ? "text-red-100" : "text-slate-100"}>Mohammed</span>
              <br />
              <span
                className={
                  isCyber
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400 animate-gradient"
                    : "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-400 animate-gradient"
                }
              >
                El Kassoiri
              </span>
            </motion.h1>

            <div className={`text-2xl md:text-3xl h-20 flex items-center ${isCyber ? "text-red-400" : "text-blue-400"}`}>
              <TypeAnimation
                sequence={[
                  "AI Engineer",
                  2000,
                  "Data Scientist",
                  2000,
                  "Machine Learning Expert",
                  2000,
                  "Deep Learning Researcher",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            <motion.p
              className={`text-lg md:text-xl max-w-xl leading-relaxed ${isCyber ? "text-red-200/80" : "text-slate-300"}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Building the future with AI and Machine Learning. Passionate about creating intelligent systems that make a difference.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <motion.button
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`px-8 py-3 font-medium rounded-lg transition-all shadow-lg ${
                  isCyber
                    ? "bg-red-700 hover:bg-red-600 text-white shadow-red-900/50"
                    : "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/30"
                }`}
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Projects
              </motion.button>
              <motion.button
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`px-8 py-3 border-2 font-medium rounded-lg transition-all ${
                  isCyber
                    ? "border-red-600 text-red-400 hover:bg-red-600/10"
                    : "border-blue-500 text-blue-400 hover:bg-blue-500/10"
                }`}
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Contact Me
              </motion.button>
            </motion.div>

            <motion.div
              className="flex gap-4 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              {[
                { href: "https://github.com/Mohammed-El-Kassoiri", icon: <Github className="w-6 h-6" />, label: "GitHub" },
                { href: "https://linkedin.com/in/Mohammed-El-Kassoiri", icon: <Linkedin className="w-6 h-6" />, label: "LinkedIn" },
                { href: "mailto:mohammed.kassoiri@gmail.com", icon: <Mail className="w-6 h-6" />, label: "Email" },
              ].map(({ href, icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -3 }}
                  className={`transition-colors ${
                    isCyber ? "text-red-400/60 hover:text-red-400" : "text-slate-400 hover:text-blue-400"
                  }`}
                >
                  {icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Visual element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg">
              {/* Gradient orb */}
              <motion.div
                className={`absolute inset-0 rounded-full blur-3xl ${
                  isCyber
                    ? "bg-gradient-to-br from-red-700/25 to-red-900/10"
                    : "bg-gradient-to-br from-blue-500/20 to-blue-400/10"
                }`}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Code window mockup */}
              <motion.div
                className={`relative backdrop-blur-sm rounded-xl p-6 shadow-2xl border ${
                  isCyber
                    ? "bg-black/70 border-red-900/50"
                    : "bg-slate-800/50 border-slate-700"
                }`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <pre className={`text-sm font-mono overflow-x-auto ${isCyber ? "text-red-300/90" : "text-slate-300"}`}>
{`const skills = {
  AI: ["Machine Learning", "Deep Learning"],
  Languages: ["Python", "JavaScript", "SQL"],
  Frameworks: ["PyTorch", "TensorFlow"],
  Focus: "Building intelligent systems"
};

console.log("Let's innovate! 🚀");`}
                </pre>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className={isCyber ? "text-red-500" : "text-blue-400"}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  )
}
