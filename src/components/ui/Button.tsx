import React, { forwardRef } from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'soft'
  size?: 'sm' | 'md' | 'lg'
  children?: React.ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6FA5]/50 focus-visible:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50'

    const sizeStyles = {
      sm: 'px-4 py-1.5 text-xs tracking-wider uppercase gap-1.5',
      md: 'px-6 py-2.5 text-sm tracking-wide gap-2',
      lg: 'px-8 py-3.5 text-base tracking-wide gap-2.5',
    }

    const variantStyles = {
      primary:
        'bg-gradient-to-r from-[#FF6FA5] via-[#FF8FB8] to-[#C94F7C] text-white shadow-md shadow-[#FF6FA5]/25 hover:shadow-lg hover:shadow-[#FF6FA5]/35 hover:brightness-105 border border-white/20',
      secondary:
        'bg-white text-[#3A2630] border border-[#FFD6E7] hover:border-[#FF9FC5] hover:bg-[#FFF8FB] shadow-sm hover:shadow-md hover:shadow-[#FF6FA5]/10',
      outline:
        'border border-[#FF9FC5]/60 text-[#C94F7C] hover:bg-[#FFD6E7]/30 hover:border-[#FF6FA5]',
      ghost:
        'text-[#3A2630] hover:text-[#C94F7C] hover:bg-[#FFD6E7]/25',
      soft:
        'bg-[#FFD6E7]/60 text-[#C94F7C] hover:bg-[#FFD6E7] border border-[#FF9FC5]/30 shadow-sm',
    }

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
        {...props}
      >
        {children}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'
