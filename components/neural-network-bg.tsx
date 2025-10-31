"use client"

import { useEffect, useRef } from "react"

interface Node {
  x: number
  y: number
  z: number // Added z coordinate for 3D effect
  vx: number
  vy: number
  vz: number // Added z velocity for 3D rotation
  connections: number[]
}

interface Star {
  x: number
  y: number
  size: number
  opacity: number
  twinkleSpeed: number
}

export function NeuralNetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let nodes: Node[] = []
    let stars: Star[] = []
    let mouseX = 0
    let mouseY = 0
    let time = 0
    let rotationAngle = 0 // Added rotation angle for supernova rotation

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = Math.max(window.innerHeight * 1.3, window.innerHeight + 300)
    }

    const createStars = () => {
      stars = []
      const starCount = 80
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.5 + 0.3,
          twinkleSpeed: Math.random() * 0.02 + 0.01,
        })
      }
    }

    const createNodes = () => {
      nodes = []
      const nodeCount = 50
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const brainWidth = Math.min(canvas.width, canvas.height) * 0.4
      const brainHeight = brainWidth * 0.8

      // Create brain-like structure with two hemispheres in 3D
      for (let i = 0; i < nodeCount; i++) {
        const angle = (i / nodeCount) * Math.PI * 2
        const hemisphere = i < nodeCount / 2 ? -1 : 1
        const radiusX = brainWidth * (0.5 + Math.random() * 0.3)
        const radiusY = brainHeight * (0.5 + Math.random() * 0.3)

        const x = centerX + hemisphere * Math.cos(angle) * radiusX * 0.5 + (Math.random() - 0.5) * 50
        const y = centerY + Math.sin(angle) * radiusY + (Math.random() - 0.5) * 50
        const z = (Math.random() - 0.5) * 200

        nodes.push({
          x,
          y,
          z,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          vz: (Math.random() - 0.5) * 0.2,
          connections: [],
        })
      }

      // Create brain-like connections (more organic)
      nodes.forEach((node, i) => {
        nodes.forEach((otherNode, j) => {
          if (i !== j) {
            const dx = node.x - otherNode.x
            const dy = node.y - otherNode.y
            const dz = node.z - otherNode.z
            const distance = Math.sqrt(dx * dx + dy * dy + dz * dz)

            // Connect nearby nodes to create brain-like structure
            if (distance < 150 && Math.random() > 0.6) {
              node.connections.push(j)
            }
          }
        })
      })
    }

    const rotate3D = (x: number, y: number, z: number, angleX: number, angleY: number) => {
      // Rotate around Y axis
      const cosY = Math.cos(angleY)
      const sinY = Math.sin(angleY)
      const x1 = x * cosY - z * sinY
      const z1 = x * sinY + z * cosY

      // Rotate around X axis
      const cosX = Math.cos(angleX)
      const sinX = Math.sin(angleX)
      const y1 = y * cosX - z1 * sinX
      const z2 = y * sinX + z1 * cosX

      return { x: x1, y: y1, z: z2 }
    }

    const project3D = (x: number, y: number, z: number) => {
      const perspective = 800
      const scale = perspective / (perspective + z)
      return {
        x: x * scale,
        y: y * scale,
        scale: scale,
      }
    }

    const drawNode = (node: Node, pulse: number, projected: { x: number; y: number; scale: number }) => {
      const size = (4 + pulse * 2) * projected.scale
      const gradient = ctx.createRadialGradient(projected.x, projected.y, 0, projected.x, projected.y, size * 2)
      gradient.addColorStop(0, `rgba(0, 255, 255, ${(0.8 + pulse * 0.2) * projected.scale})`)
      gradient.addColorStop(0.5, `rgba(255, 50, 100, ${(0.5 + pulse * 0.2) * projected.scale})`)
      gradient.addColorStop(1, "rgba(0, 255, 255, 0)")

      ctx.beginPath()
      ctx.arc(projected.x, projected.y, size, 0, Math.PI * 2)
      ctx.fillStyle = gradient
      ctx.fill()

      ctx.shadowBlur = (15 + pulse * 10) * projected.scale
      ctx.shadowColor = `rgba(255, 100, 150, ${(0.4 + pulse * 0.3) * projected.scale})`
      ctx.beginPath()
      ctx.arc(projected.x, projected.y, size * 0.75, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(0, 255, 255, ${(0.9 + pulse * 0.1) * projected.scale})`
      ctx.fill()
      ctx.shadowBlur = 0
    }

    const drawConnection = (
      from: Node,
      to: Node,
      pulse: number,
      projectedFrom: { x: number; y: number; scale: number },
      projectedTo: { x: number; y: number; scale: number },
    ) => {
      const avgScale = (projectedFrom.scale + projectedTo.scale) / 2
      const gradient = ctx.createLinearGradient(projectedFrom.x, projectedFrom.y, projectedTo.x, projectedTo.y)
      gradient.addColorStop(0, `rgba(0, 255, 255, ${(0.15 + pulse * 0.1) * avgScale})`)
      gradient.addColorStop(0.5, `rgba(255, 80, 120, ${(0.2 + pulse * 0.15) * avgScale})`)
      gradient.addColorStop(1, `rgba(0, 255, 255, ${(0.15 + pulse * 0.1) * avgScale})`)

      ctx.beginPath()
      ctx.moveTo(projectedFrom.x, projectedFrom.y)
      ctx.lineTo(projectedTo.x, projectedTo.y)
      ctx.strokeStyle = gradient
      ctx.lineWidth = (1 + pulse * 0.5) * avgScale
      ctx.stroke()

      // Animated pulse along connection
      const pulsePos = (time % 100) / 100
      const pulseX = projectedFrom.x + (projectedTo.x - projectedFrom.x) * pulsePos
      const pulseY = projectedFrom.y + (projectedTo.y - projectedFrom.y) * pulsePos

      ctx.beginPath()
      ctx.arc(pulseX, pulseY, 2 * avgScale, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255, 100, 150, ${(0.6 + pulse * 0.4) * avgScale})`
      ctx.fill()
    }

    const drawStars = () => {
      stars.forEach((star) => {
        const twinkle = Math.sin(time * star.twinkleSpeed) * 0.5 + 0.5
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * twinkle})`
        ctx.fill()

        if (star.size > 1.5) {
          ctx.shadowBlur = 15 + twinkle * 10
          ctx.shadowColor = `rgba(255, 200, 220, ${star.opacity * twinkle * 0.8})`
          ctx.beginPath()
          ctx.arc(star.x, star.y, star.size * 0.5, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * twinkle})`
          ctx.fill()

          // Add extra bright core for supernova effect
          ctx.beginPath()
          ctx.arc(star.x, star.y, star.size * 0.2, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255, 255, 255, ${twinkle})`
          ctx.fill()
          ctx.shadowBlur = 0
        }
      })
    }

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      time += 0.5
      rotationAngle += 0.008
      const pulse = Math.sin(time * 0.05) * 0.5 + 0.5

      drawStars()

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const mouseInfluenceX = (mouseX - centerX) / centerX
      const mouseInfluenceY = (mouseY - centerY) / centerY

      const projectedNodes = nodes.map((node) => {
        const relX = node.x - centerX
        const relY = node.y - centerY
        const rotated = rotate3D(
          relX,
          relY,
          node.z,
          rotationAngle * 0.5 + mouseInfluenceY * 0.3,
          rotationAngle + mouseInfluenceX * 0.3,
        )
        const projected = project3D(rotated.x, rotated.y, rotated.z)

        return {
          x: projected.x + centerX,
          y: projected.y + centerY,
          scale: projected.scale,
          originalNode: node,
        }
      })

      // Sort by z-depth for proper rendering
      projectedNodes.sort((a, b) => a.scale - b.scale)

      // Update and draw nodes
      nodes.forEach((node, i) => {
        const projected = projectedNodes.find((p) => p.originalNode === node)
        if (!projected) return

        const dx = mouseX - projected.x
        const dy = mouseY - projected.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 250) {
          const force = (250 - distance) / 250
          node.vx += (dx / distance) * force * 0.15
          node.vy += (dy / distance) * force * 0.15
        }

        node.x += node.vx
        node.y += node.vy
        node.z += node.vz

        const centerX = canvas.width / 2
        const centerY = canvas.height / 2
        const maxDist = Math.min(canvas.width, canvas.height) * 0.4

        const distFromCenter = Math.sqrt(
          Math.pow(node.x - centerX, 2) + Math.pow(node.y - centerY, 2) + Math.pow(node.z, 2),
        )
        if (distFromCenter > maxDist) {
          node.vx *= -0.8
          node.vy *= -0.8
          node.vz *= -0.8
        }

        node.vx *= 0.98
        node.vy *= 0.98
        node.vz *= 0.98

        node.connections.forEach((targetIndex) => {
          if (targetIndex < nodes.length) {
            const targetProjected = projectedNodes.find((p) => p.originalNode === nodes[targetIndex])
            if (targetProjected) {
              drawConnection(node, nodes[targetIndex], pulse, projected, targetProjected)
            }
          }
        })
      })

      projectedNodes.forEach((projected) => {
        drawNode(projected.originalNode, pulse, projected)
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    resize()
    createStars()
    createNodes()
    animate()

    window.addEventListener("resize", () => {
      resize()
      createStars()
      createNodes()
    })
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none" style={{ zIndex: 1 }} />
}
