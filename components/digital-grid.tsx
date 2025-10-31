"use client"

import { useEffect, useRef } from "react"

export function DigitalGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const drawGrid = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const gridSize = 50
      const offsetX = (time * 0.5) % gridSize
      const offsetY = (time * 0.5) % gridSize

      // Vertical lines
      for (let x = -offsetX; x < canvas.width; x += gridSize) {
        const gradient = ctx.createLinearGradient(x, 0, x, canvas.height)
        gradient.addColorStop(0, "rgba(0, 255, 255, 0)")
        gradient.addColorStop(0.5, `rgba(0, 255, 255, ${0.1 + Math.sin(time * 0.01 + x * 0.01) * 0.05})`)
        gradient.addColorStop(1, "rgba(0, 255, 255, 0)")

        ctx.strokeStyle = gradient
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      // Horizontal lines
      for (let y = -offsetY; y < canvas.height; y += gridSize) {
        const gradient = ctx.createLinearGradient(0, y, canvas.width, y)
        gradient.addColorStop(0, "rgba(255, 0, 255, 0)")
        gradient.addColorStop(0.5, `rgba(255, 0, 255, ${0.1 + Math.sin(time * 0.01 + y * 0.01) * 0.05})`)
        gradient.addColorStop(1, "rgba(255, 0, 255, 0)")

        ctx.strokeStyle = gradient
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Glowing intersections
      for (let x = -offsetX; x < canvas.width; x += gridSize) {
        for (let y = -offsetY; y < canvas.height; y += gridSize) {
          if (Math.random() > 0.98) {
            const pulse = Math.sin(time * 0.1 + x * 0.01 + y * 0.01) * 0.5 + 0.5
            ctx.shadowBlur = 10
            ctx.shadowColor = `rgba(0, 255, 255, ${pulse})`
            ctx.fillStyle = `rgba(0, 255, 255, ${0.3 + pulse * 0.3})`
            ctx.beginPath()
            ctx.arc(x, y, 2, 0, Math.PI * 2)
            ctx.fill()
            ctx.shadowBlur = 0
          }
        }
      }

      time++
      animationFrameId = requestAnimationFrame(drawGrid)
    }

    resize()
    drawGrid()

    window.addEventListener("resize", resize)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none opacity-30" style={{ zIndex: 0 }} />
}
