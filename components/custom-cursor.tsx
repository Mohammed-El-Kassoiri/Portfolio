"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useState } from "react"

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 300, damping: 30 })
  const sy = useSpring(y, { stiffness: 300, damping: 30 })

  useEffect(() => {
    if (window.matchMedia("(pointer:fine)").matches) {
      setEnabled(true)
    }

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX - 16)
      y.set(e.clientY - 16)
    }

    window.addEventListener("mousemove", onMove)
    return () => window.removeEventListener("mousemove", onMove)
  }, [x, y])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed z-[110] h-8 w-8 rounded-full border border-cyan-300/60 bg-cyan-300/10 mix-blend-screen"
      style={{ x: sx, y: sy }}
    />
  )
}
