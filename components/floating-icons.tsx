"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Brain, Code, Database, Cpu, Network, Zap } from "lucide-react"

const iconConfigs = [
  { Icon: Brain, color: "cyan", delay: 0 },
  { Icon: Code, color: "magenta", delay: 0.2 },
  { Icon: Database, color: "green", delay: 0.4 },
  { Icon: Cpu, color: "cyan", delay: 0.6 },
  { Icon: Network, color: "magenta", delay: 0.8 },
  { Icon: Zap, color: "green", delay: 1 },
]

interface IconPosition {
  initial: {
    x: number
    y: number
    opacity: number
  }
  animate: {
    x: number[]
    y: number[]
    opacity: number[]
    rotate: number[]
  }
}

export function FloatingIcons() {
  const [positions, setPositions] = useState<IconPosition[]>([])
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    const newPositions = iconConfigs.map(() => ({
      initial: {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        opacity: 0,
      },
      animate: {
        x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth, Math.random() * window.innerWidth],
        y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight, Math.random() * window.innerHeight],
        opacity: [0, 0.3, 0],
        rotate: [0, 360, 720],
      },
    }))

    setPositions(newPositions)
  }, [])

  if (!isClient || positions.length === 0) {
    return null
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 2 }}>
      {iconConfigs.map(({ Icon, color, delay }, index) => {
        const pos = positions[index]
        if (!pos) return null

        return (
          <motion.div
            key={index}
            className="absolute"
            initial={pos.initial}
            animate={pos.animate}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              delay: delay,
              ease: "linear",
            }}
          >
            <Icon
              className={`w-12 h-12 text-${color}-400`}
              style={{
                filter: `drop-shadow(0 0 10px rgba(0, 255, 255, 0.5))`,
              }}
            />
          </motion.div>
        )
      })}
    </div>
  )
}
