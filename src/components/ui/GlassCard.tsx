import React, { forwardRef } from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

export interface GlassCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode
  glow?: boolean
  hoverEffect?: boolean
}

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, children, glow = true, hoverEffect = true, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={hoverEffect ? { y: -4, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } } : undefined}
        className={cn(
          'relative rounded-3xl p-6 md:p-10',
          'bg-white/75 backdrop-blur-xl',
          'border border-[#FFD6E7]/80',
          'shadow-[0_15px_40px_-15px_rgba(255,111,165,0.12)]',
          glow && 'before:absolute before:inset-0 before:-z-10 before:rounded-3xl before:bg-gradient-to-b before:from-[#FFD6E7]/30 before:to-transparent before:blur-xl before:opacity-60',
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

GlassCard.displayName = 'GlassCard'
