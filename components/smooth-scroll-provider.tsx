"use client"

import { useEffect } from "react"
import Lenis from "lenis"

export function SmoothScrollProvider() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.15,
      smoothWheel: true,
      touchMultiplier: 1,
    })

    return () => lenis.destroy()
  }, [])

  return null
}
