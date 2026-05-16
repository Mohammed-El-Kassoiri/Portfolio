"use client"

import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function ScrollOrchestrator() {
  useEffect(() => {
    const sections = gsap.utils.toArray<HTMLElement>(".section-container")

    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0.55, y: 45 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
            once: true,
          },
        },
      )
    })

    const magnetButtons = document.querySelectorAll<HTMLElement>("[data-magnetic]")
    const cleanupListeners: Array<() => void> = []

    magnetButtons.forEach((button) => {
      const handleMove = (e: MouseEvent) => {
        const rect = button.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        gsap.to(button, { x: x * 0.15, y: y * 0.2, duration: 0.25, ease: "power2.out" })
      }

      const handleLeave = () =>
        gsap.to(button, { x: 0, y: 0, duration: 0.35, ease: "elastic.out(1, 0.4)" })

      button.addEventListener("mousemove", handleMove)
      button.addEventListener("mouseleave", handleLeave)

      cleanupListeners.push(() => {
        button.removeEventListener("mousemove", handleMove)
        button.removeEventListener("mouseleave", handleLeave)
      })
    })

    return () => {
      cleanupListeners.forEach((cleanup) => cleanup())
      sections.forEach((section) => gsap.killTweensOf(section))
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return null
}
