import React, { useEffect, useRef } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
  color: string
  isHeart: boolean
  rotation: number
  rotationSpeed: number
}

export const FloatingParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const isMobile = width < 768
    const particleCount = isMobile ? 22 : 45

    const colors = [
      'rgba(255, 214, 231, ', // soft pink
      'rgba(255, 159, 197, ', // pink
      'rgba(255, 111, 165, ', // rose
      'rgba(255, 255, 255, ', // soft white
    ]

    const particles: Particle[] = []

    const drawHeart = (
      context: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      opacity: number,
      colorPrefix: string,
      rotation: number
    ) => {
      context.save()
      context.translate(x, y)
      context.rotate(rotation)
      context.beginPath()
      const topCurveHeight = size * 0.3
      context.moveTo(0, topCurveHeight)
      // top left curve
      context.bezierCurveTo(-size / 2, -topCurveHeight, -size, topCurveHeight / 3, 0, size)
      // top right curve
      context.bezierCurveTo(size, topCurveHeight / 3, size / 2, -topCurveHeight, 0, topCurveHeight)
      context.fillStyle = `${colorPrefix}${opacity})`
      context.fill()
      context.restore()
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 4 + 2,
        speedX: (Math.random() - 0.5) * 0.35,
        speedY: -Math.random() * 0.45 - 0.15,
        opacity: Math.random() * 0.45 + 0.15,
        color: colors[Math.floor(Math.random() * colors.length)],
        isHeart: Math.random() < 0.28,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.015,
      })
    }

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.speedX
        p.y += p.speedY
        p.rotation += p.rotationSpeed

        if (p.y < -20) {
          p.y = height + 10
          p.x = Math.random() * width
        }
        if (p.x < -20) p.x = width + 10
        if (p.x > width + 20) p.x = -10

        if (p.isHeart) {
          drawHeart(ctx, p.x, p.y, p.size * 1.8, p.opacity, p.color, p.rotation)
        } else {
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
          ctx.fillStyle = `${p.color}${p.opacity})`
          ctx.fill()
        }
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [prefersReducedMotion])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Dynamic ambient pink gradients */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#FFD6E7]/40 blur-3xl animate-pulse-glow" />
      <div className="absolute top-1/3 -right-40 w-[30rem] h-[30rem] rounded-full bg-[#FF9FC5]/20 blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="absolute -bottom-32 left-1/4 w-[28rem] h-[28rem] rounded-full bg-[#FFD6E7]/35 blur-3xl animate-pulse-glow" style={{ animationDelay: '4s' }} />

      {/* Floating Canvas */}
      {!prefersReducedMotion && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full opacity-70"
          style={{ willChange: 'transform' }}
        />
      )}
    </div>
  )
}
