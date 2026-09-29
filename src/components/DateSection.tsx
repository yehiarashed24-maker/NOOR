import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Section } from './ui/Section'
import { Calendar as CalendarIcon, Sparkles, Smile } from 'lucide-react'
import { fadeInVariants, scaleUpVariants } from '@/lib/animations'

interface Sparkle {
  id: number
  x: number
  y: number
  size: number
  driftX: number
}

export const DateSection: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [sparkles, setSparkles] = useState<Sparkle[]>([])

  const triggerSparkles = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const newSparkles: Sparkle[] = Array.from({ length: 6 }).map((_, i) => ({
      id: Date.now() + i,
      x: x + (Math.random() - 0.5) * 60,
      y: y + (Math.random() - 0.5) * 60,
      size: Math.random() * 12 + 10,
      driftX: (Math.random() - 0.5) * 30,
    }))

    setSparkles((prev) => [...prev.slice(-12), ...newSparkles])
  }

  // Days of September 2026 (September 1, 2026 was a Tuesday)
  const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
  const emptyDays = [0, 1] // Sunday, Monday empty
  const days = Array.from({ length: 30 }, (_, i) => i + 1)

  return (
    <Section id="date-section" className="py-16 sm:py-24 md:py-36 px-3 sm:px-6">
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
        <motion.div
          variants={fadeInVariants}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFD6E7]/40 text-[#C94F7C] text-[11px] sm:text-xs uppercase tracking-wider sm:tracking-widest font-medium mb-3 sm:mb-4"
        >
          <CalendarIcon className="w-3.5 h-3.5 text-[#FF6FA5]" />
          <span>The Day We Met, Ya Sahbty</span>
        </motion.div>

        <motion.h2
          variants={fadeInVariants}
          className="text-2xl sm:text-4xl md:text-5xl font-serif-playfair text-[#3A2630] font-normal tracking-tight mb-3 sm:mb-4"
        >
          27 September 2026
        </motion.h2>

        <motion.p
          variants={fadeInVariants}
          className="text-sm sm:text-lg text-[#3A2630]/75 font-serif-cormorant italic max-w-lg mx-auto leading-relaxed px-2"
        >
          “I didn't know that one ordinary day was going to bring me the best friend, ya sahbty.”
        </motion.p>
      </div>

      {/* Elegant Minimal Calendar Card */}
      <motion.div
        variants={scaleUpVariants}
        className="relative w-full max-w-sm sm:max-w-md mx-auto"
      >
        <motion.div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={triggerSparkles}
          whileHover={{
            rotateX: 4,
            rotateY: -4,
            y: -6,
            transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
          }}
          whileTap={{ scale: 0.98 }}
          className="group relative cursor-pointer rounded-2xl sm:rounded-3xl p-4 sm:p-8 bg-white/85 backdrop-blur-2xl border border-[#FFD6E7] shadow-[0_20px_50px_-15px_rgba(255,111,165,0.18)] transition-all duration-500 overflow-hidden"
        >
          {/* Soft pink glow upon hover */}
          <div
            className={`absolute inset-0 bg-gradient-to-tr from-[#FFD6E7]/50 via-transparent to-[#FF9FC5]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
          />

          {/* Header of the calendar */}
          <div className="flex items-center justify-between border-b border-[#FFD6E7]/60 pb-4 mb-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#C94F7C] font-semibold">
                September
              </span>
              <p className="text-2xl font-serif-playfair text-[#3A2630] font-medium">2026</p>
            </div>
            <div className="w-10 h-10 rounded-2xl bg-[#FFF8FB] border border-[#FFD6E7] flex items-center justify-center text-[#FF6FA5] shadow-inner">
              <Sparkles className="w-5 h-5 text-[#FF6FA5]" />
            </div>
          </div>

          {/* Days grid */}
          <div className="grid grid-cols-7 gap-1 sm:gap-2 text-center text-xs mb-2">
            {daysOfWeek.map((d, i) => (
              <span key={i} className="text-[#3A2630]/40 font-medium py-1">
                {d}
              </span>
            ))}
            {emptyDays.map((_, i) => (
              <span key={`empty-${i}`} />
            ))}
            {days.map((day) => {
              const isSpecial = day === 27
              return (
                <div
                  key={day}
                  className="relative flex items-center justify-center py-2 text-xs sm:text-sm"
                >
                  {isSpecial ? (
                    <motion.div
                      animate={{
                        scale: isHovered ? [1, 1.15, 1.08] : 1,
                      }}
                      transition={{ duration: 0.8, repeat: isHovered ? Infinity : 0 }}
                      className="relative z-10 w-8 h-8 rounded-full bg-gradient-to-r from-[#FF6FA5] to-[#C94F7C] text-white font-medium flex items-center justify-center shadow-md shadow-[#FF6FA5]/40"
                    >
                      <span>{day}</span>
                      <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-white border border-[#FF6FA5] flex items-center justify-center">
                        <span className="w-1 h-1 rounded-full bg-[#FF6FA5]" />
                      </span>
                    </motion.div>
                  ) : (
                    <span
                      className={`text-[#3A2630]/70 group-hover:text-[#3A2630] transition-colors ${
                        day < 27 ? 'opacity-50' : 'opacity-80'
                      }`}
                    >
                      {day}
                    </span>
                  )}
                </div>
              )
            })}
          </div>

          {/* Card footer caption */}
          <div className="mt-4 pt-3 border-t border-[#FFD6E7]/50 flex items-center justify-between text-xs text-[#3A2630]/60">
            <span className="flex items-center gap-1 font-serif-cormorant italic text-sm">
              <Smile className="w-3.5 h-3.5 text-[#FF6FA5]" />
              The start of our friendship
            </span>
            <span className="text-[11px] text-[#C94F7C] tracking-wider uppercase font-medium">
              Tap to celebrate, ya sahbty!
            </span>
          </div>

          {/* Interactive Floating Particle Sparks */}
          <AnimatePresence>
            {sparkles.map((sparkle) => (
              <motion.div
                key={sparkle.id}
                initial={{ opacity: 1, scale: 0, x: sparkle.x, y: sparkle.y }}
                animate={{
                  opacity: 0,
                  scale: 1.4,
                  y: sparkle.y - 45,
                  x: sparkle.x + sparkle.driftX,
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
                className="absolute pointer-events-none z-20 text-[#FF6FA5]"
                style={{ left: 0, top: 0 }}
              >
                <Sparkles className="w-4 h-4 text-[#FF9FC5]" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </Section>
  )
}
