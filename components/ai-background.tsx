"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

// ── Dot grid constants ───────────────────────────────────────────────────────
const DOT_GRID_SIZE = "52px 52px"     // spacing between dots
const DOT_OPACITY = 0.18              // overall dot grid opacity
const DOT_FILL_OPACITY = 0.55         // dot fill colour opacity

// ── Neural network topology ──────────────────────────────────────────────────
// Each sub-array is a layer: values are y-positions (% of viewport height).
const LAYERS: number[][] = [
  [12, 25, 38, 52, 65, 78],   // Input  layer  (x = 10%)
  [18, 32, 48, 62, 76],       // Hidden layer 1 (x = 28%)
  [22, 40, 58, 74],           // Hidden layer 2 (x = 50%)
  [28, 50, 72],               // Hidden layer 3 (x = 72%)
  [36, 64],                   // Output layer   (x = 88%)
]
const LAYER_X = [10, 28, 50, 72, 88]

interface NNode { x: number; y: number }
interface NEdge { x1: number; y1: number; x2: number; y2: number }

function buildNetwork(): { nodes: NNode[]; edges: NEdge[] } {
  const nodes: NNode[] = []
  const edges: NEdge[] = []
  LAYERS.forEach((ys, li) => {
    ys.forEach((y) => nodes.push({ x: LAYER_X[li], y }))
    if (li < LAYERS.length - 1) {
      ys.forEach((y1) =>
        LAYERS[li + 1].forEach((y2) =>
          edges.push({ x1: LAYER_X[li], y1, x2: LAYER_X[li + 1], y2 }),
        ),
      )
    }
  })
  return { nodes, edges }
}

const { nodes: NEURAL_NODES, edges: NEURAL_EDGES } = buildNetwork()

// ── Floating particles ───────────────────────────────────────────────────────
const PARTICLE_COUNT = 14
const PARTICLE_TOP_OFFSET = 8        // minimum top position (%)
const PARTICLE_TOP_SPREAD = 82       // how far top positions can spread (%)
const PARTICLE_LEFT_OFFSET = 4       // minimum left position (%)
const PARTICLE_LEFT_SPREAD = 90      // how far left positions can spread (%)
const PARTICLE_TOP_STEP = 6.5        // step multiplier for top staggering
const PARTICLE_LEFT_STEP = 7.3       // step multiplier for left staggering
const PARTICLE_MIN_DURATION = 4      // shortest animation cycle (s)
const PARTICLE_DURATION_SPREAD = 4   // max additional duration variance (s)
const PARTICLE_DURATION_STEP = 0.55  // per-index duration increment
const PARTICLE_DELAY_STEP = 0.45     // per-index delay increment (s)
const PARTICLE_SIZE_LARGE = 3        // px – every 3rd particle
const PARTICLE_SIZE_SMALL = 2        // px – all other particles

const PARTICLES = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
  id: i,
  top: `${PARTICLE_TOP_OFFSET + ((i * PARTICLE_TOP_STEP) % PARTICLE_TOP_SPREAD)}%`,
  left: `${PARTICLE_LEFT_OFFSET + ((i * PARTICLE_LEFT_STEP) % PARTICLE_LEFT_SPREAD)}%`,
  duration: PARTICLE_MIN_DURATION + ((i * PARTICLE_DURATION_STEP) % PARTICLE_DURATION_SPREAD),
  delay: i * PARTICLE_DELAY_STEP,
  size: i % 3 === 0 ? PARTICLE_SIZE_LARGE : PARTICLE_SIZE_SMALL,
}))

// ── Component ────────────────────────────────────────────────────────────────
export function AIBackground() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const isCyber = mounted && theme === "cyber"

  const primary = isCyber ? "220,38,38" : "59,130,246"
  const accent = isCyber ? "239,68,68" : "96,165,250"
  const secondary = isCyber ? "185,28,28" : "34,211,238"

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none"
    >
      {/* ── Base gradient ── */}
      <div
        className="absolute inset-0 transition-colors duration-700"
        style={{
          background: isCyber
            ? "radial-gradient(ellipse 90% 70% at 20% 40%, #130003 0%, #060000 55%, #020000 100%)"
            : "radial-gradient(ellipse 90% 70% at 20% 40%, #030d22 0%, #020a18 55%, #020508 100%)",
        }}
      />

      {/* ── Dot grid ── */}
      <div
        className="absolute inset-0 transition-opacity duration-700"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(${primary},${DOT_FILL_OPACITY}) 1px, transparent 1px)`,
          backgroundSize: DOT_GRID_SIZE,
          opacity: DOT_OPACITY,
        }}
      />

      {/* ── Neural network SVG ── */}
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.07 }}>
        {NEURAL_EDGES.map((e, i) => (
          <line
            key={`e-${i}`}
            x1={`${e.x1}%`}
            y1={`${e.y1}%`}
            x2={`${e.x2}%`}
            y2={`${e.y2}%`}
            stroke={`rgb(${accent})`}
            strokeWidth="0.45"
          />
        ))}
        {NEURAL_NODES.map((n, i) => (
          <circle
            key={`n-${i}`}
            cx={`${n.x}%`}
            cy={`${n.y}%`}
            r="3.5"
            fill={`rgb(${primary})`}
            fillOpacity="0.9"
          />
        ))}
      </svg>

      {/* ── Ambient orbs ── */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: "55vw",
          height: "55vw",
          background: `radial-gradient(circle, rgba(${primary},0.14) 0%, transparent 70%)`,
          filter: "blur(90px)",
          top: "-15%",
          left: "-5%",
        }}
        animate={{ x: [0, 45, 0], y: [0, 28, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: "45vw",
          height: "45vw",
          background: `radial-gradient(circle, rgba(${accent},0.10) 0%, transparent 70%)`,
          filter: "blur(90px)",
          bottom: "-10%",
          right: "-5%",
        }}
        animate={{ x: [0, -40, 0], y: [0, -22, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut", delay: 6 }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: "38vw",
          height: "38vw",
          background: `radial-gradient(circle, rgba(${secondary},0.08) 0%, transparent 70%)`,
          filter: "blur(80px)",
          top: "35%",
          left: "55%",
        }}
        animate={{ x: [0, 28, 0], y: [0, -38, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 13 }}
      />

      {/* ── Floating particles ── */}
      {PARTICLES.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: `rgba(${accent},0.65)`,
            top: p.top,
            left: p.left,
            boxShadow: `0 0 6px rgba(${accent},0.4)`,
          }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.75, 0.2] }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}

      {/* ── Corner tech-line accent (top-left) ── */}
      <svg
        className="absolute top-0 left-0"
        width="260"
        height="180"
        style={{ opacity: 0.1 }}
      >
        <line x1="0" y1="44" x2="220" y2="44" stroke={`rgb(${primary})`} strokeWidth="0.5" />
        <line x1="0" y1="88" x2="160" y2="88" stroke={`rgb(${primary})`} strokeWidth="0.5" />
        <line x1="44" y1="0" x2="44" y2="180" stroke={`rgb(${primary})`} strokeWidth="0.5" />
        <line x1="88" y1="0" x2="88" y2="140" stroke={`rgb(${primary})`} strokeWidth="0.5" />
        <rect x="32" y="32" width="24" height="24" fill="none" stroke={`rgb(${accent})`} strokeWidth="0.6" />
        <rect x="76" y="76" width="16" height="16" fill="none" stroke={`rgb(${accent})`} strokeWidth="0.6" />
      </svg>

      {/* ── Corner tech-line accent (bottom-right) ── */}
      <svg
        className="absolute bottom-0 right-0"
        width="260"
        height="180"
        style={{ opacity: 0.1, transform: "rotate(180deg)" }}
      >
        <line x1="0" y1="44" x2="220" y2="44" stroke={`rgb(${primary})`} strokeWidth="0.5" />
        <line x1="0" y1="88" x2="160" y2="88" stroke={`rgb(${primary})`} strokeWidth="0.5" />
        <line x1="44" y1="0" x2="44" y2="180" stroke={`rgb(${primary})`} strokeWidth="0.5" />
        <line x1="88" y1="0" x2="88" y2="140" stroke={`rgb(${primary})`} strokeWidth="0.5" />
        <rect x="32" y="32" width="24" height="24" fill="none" stroke={`rgb(${accent})`} strokeWidth="0.6" />
        <rect x="76" y="76" width="16" height="16" fill="none" stroke={`rgb(${accent})`} strokeWidth="0.6" />
      </svg>
    </div>
  )
}
