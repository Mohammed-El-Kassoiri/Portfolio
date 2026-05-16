"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three"

function FloatingCore() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.35
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.9) * 0.08
  })

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.05, 1]} />
      <meshStandardMaterial
        color="#38bdf8"
        emissive="#0ea5e9"
        emissiveIntensity={0.65}
        wireframe
      />
    </mesh>
  )
}

export function HeroThreeScene() {
  return (
    <div className="h-[360px] w-full rounded-3xl border border-cyan-400/20 bg-slate-900/40 backdrop-blur-xl">
      <Canvas camera={{ position: [0, 0, 3.2], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[2, 2, 3]} intensity={2.2} color="#22d3ee" />
        <pointLight position={[-2, -1, -1]} intensity={1.2} color="#6366f1" />
        <FloatingCore />
      </Canvas>
    </div>
  )
}
