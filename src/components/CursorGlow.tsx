import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export const CursorGlow: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [visible, setVisible] = useState(false)
  const [isPointer, setIsPointer] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouch || prefersReducedMotion) return

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      if (!visible) setVisible(true)

      const target = e.target as HTMLElement
      const clickable =
        target.closest('button') ||
        target.closest('a') ||
        target.closest('[role="button"]') ||
        target.classList.contains('cursor-pointer')

      setIsPointer(Boolean(clickable))
    }

    const handleMouseLeave = () => setVisible(false)

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [visible, prefersReducedMotion])

  if (!visible || prefersReducedMotion) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer ambient glow */}
      <motion.div
        className="fixed rounded-full bg-gradient-to-r from-[#FFD6E7]/30 to-[#FF9FC5]/25 blur-xl pointer-events-none -z-10"
        animate={{
          x: pos.x - 70,
          y: pos.y - 70,
          scale: isPointer ? 1.3 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 28,
          stiffness: 250,
          mass: 0.5,
        }}
        style={{ width: 140, height: 140 }}
      />

      {/* Tiny subtle follower dot */}
      <motion.div
        className="fixed rounded-full bg-[#FF6FA5]/40 backdrop-blur-sm pointer-events-none"
        animate={{
          x: pos.x - (isPointer ? 12 : 5),
          y: pos.y - (isPointer ? 12 : 5),
          width: isPointer ? 24 : 10,
          height: isPointer ? 24 : 10,
        }}
        transition={{
          type: 'spring',
          damping: 35,
          stiffness: 450,
          mass: 0.2,
        }}
      />
    </div>
  )
}
