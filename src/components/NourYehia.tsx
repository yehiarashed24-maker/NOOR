import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Section } from './ui/Section'
import { Sparkles } from 'lucide-react'
import { fadeInVariants, scaleUpVariants } from '@/lib/animations'

interface ParticleDot {
  id: number
  x: number
  y: number
  size: number
}

export const NourYehia: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [particles, setParticles] = useState<ParticleDot[]>([])

  const handleCenterHover = () => {
    setIsHovered(true)
    const newParticles: ParticleDot[] = Array.from({ length: 8 }).map((_, i) => ({
      id: Date.now() + i,
      x: (Math.random() - 0.5) * 120,
      y: (Math.random() - 0.5) * 80,
      size: Math.random() * 8 + 4,
    }))
    setParticles(newParticles)
  }

  const handleCenterLeave = () => {
    setIsHovered(false)
  }

  return (
    <Section id="nour-yehia-section" className="py-6 sm:py-10 md:py-12 px-3 sm:px-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* Subtle pill */}
        <motion.div
          variants={fadeInVariants}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFD6E7]/40 text-[#C94F7C] text-[11px] sm:text-xs uppercase tracking-wider sm:tracking-widest font-medium mb-4 sm:mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#FF6FA5]" />
          <span>Friends Duo • Ya Sahbty</span>
        </motion.div>

        {/* Central Visual Composition - horizontal on mobile and desktop */}
        <motion.div
          variants={scaleUpVariants}
          className="relative flex flex-row items-center justify-center gap-3 sm:gap-8 mb-8 sm:mb-14 select-none"
        >
          {/* Nour */}
          <span className="text-3xl sm:text-5xl md:text-6xl font-serif-playfair text-[#3A2630] tracking-tight">
            Nour
          </span>

          {/* Interactive Morphing Symbol */}
          <div
            onMouseEnter={handleCenterHover}
            onMouseLeave={handleCenterLeave}
            onClick={() => (isHovered ? handleCenterLeave() : handleCenterHover())}
            className="relative cursor-pointer w-12 h-12 sm:w-20 sm:h-20 rounded-full flex items-center justify-center transition-all duration-500 hover:bg-white/80 border border-[#FFD6E7] hover:border-[#FF9FC5] hover:shadow-[0_0_30px_rgba(255,111,165,0.35)] shrink-0"
          >
            {/* Glow Aura */}
            <div
              className={`absolute inset-0 rounded-full bg-[#FF9FC5]/30 blur-xl transition-opacity duration-500 ${
                isHovered ? 'opacity-100 scale-125' : 'opacity-0 scale-90'
              }`}
            />

            <AnimatePresence mode="wait">
              {isHovered ? (
                <motion.div
                  key="sparkle"
                  initial={{ scale: 0, rotate: -45 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 45 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[#FF6FA5] relative z-10"
                >
                  <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-[#FF6FA5]" />
                </motion.div>
              ) : (
                <motion.div
                  key="heart"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="relative z-10 flex items-center justify-center text-xl sm:text-2xl"
                >
                  🤍
                </motion.div>
              )}
            </AnimatePresence>

            {/* Sparkle burst particles */}
            <AnimatePresence>
              {isHovered &&
                particles.map((p) => (
                  <motion.div
                    key={p.id}
                    initial={{ opacity: 1, scale: 0, x: 0, y: 0 }}
                    animate={{
                      opacity: 0,
                      scale: 1.2,
                      x: p.x,
                      y: p.y - 20,
                    }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="absolute pointer-events-none rounded-full bg-[#FF6FA5]"
                    style={{ width: p.size, height: p.size }}
                  />
                ))}
            </AnimatePresence>
          </div>

          {/* Yehia */}
          <span className="text-4xl sm:text-5xl md:text-6xl font-serif-playfair text-[#3A2630] tracking-tight">
            Yehia
          </span>
        </motion.div>

        {/* Text Reflections */}
        <motion.div
          variants={fadeInVariants}
          className="space-y-4 max-w-lg mx-auto"
        >
          <div className="space-y-1.5 text-base sm:text-lg text-[#3A2630]/75 font-serif-cormorant italic font-normal leading-relaxed">
            <p>“Maybe it was coincidence, ya sahbty.</p>
            <p>Maybe it was timing.</p>
            <p>Maybe life just wanted to give me the best friend ever.”</p>
          </div>

          <div className="pt-6">
            <p className="text-lg sm:text-xl font-sans-dm text-[#C94F7C] font-normal tracking-wide">
              We are friends, ya sahbty... <br />
              <span className="font-serif-playfair text-2xl text-[#3A2630]">
                and I'm proud to have you as my friend!
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
