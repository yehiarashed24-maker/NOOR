import React, { forwardRef } from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

export interface SectionProps extends HTMLMotionProps<'section'> {
  id: string
  children: React.ReactNode
  containerClassName?: string
  fullWidth?: boolean
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ id, className, containerClassName, fullWidth = false, children, ...props }, ref) => {
    return (
      <motion.section
        id={id}
        ref={ref}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className={cn('relative w-full py-8 sm:py-12 md:py-14 px-4 sm:px-6 lg:px-8 overflow-hidden', className)}
        {...props}
      >
        {fullWidth ? (
          children
        ) : (
          <div className={cn('mx-auto max-w-4xl w-full relative z-10', containerClassName)}>
            {children}
          </div>
        )}
      </motion.section>
    )
  }
)

Section.displayName = 'Section'
