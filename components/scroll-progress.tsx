"use client"

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion"

export function ScrollProgress() {
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: prefersReducedMotion ? 100 : 180,
    damping: prefersReducedMotion ? 30 : 22,
    restDelta: 0.001,
  })

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 top-0 z-[70] h-1 w-full origin-left bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 cyber:from-red-600 cyber:via-red-400 cyber:to-red-600"
      style={{ scaleX }}
    />
  )
}
