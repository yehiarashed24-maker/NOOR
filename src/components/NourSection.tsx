import React from 'react'
import { motion } from 'framer-motion'
import { Section } from './ui/Section'
import { GlassCard } from './ui/GlassCard'
import { Sparkles, Smile } from 'lucide-react'
import { fadeInVariants, scaleUpVariants } from '@/lib/animations'

export const NourSection: React.FC = () => {
  const words = [
    { label: 'Gada3a', desc: 'أجدع صاحبة ya sahbty' },
    { label: 'Pure Vibe', desc: 'Always laughing and true' },
    { label: 'Unexpected', desc: 'The best surprise of 2026' },
    { label: 'Unforgettable', desc: 'Friends for life, ya sahbty' },
  ]

  return (
    <Section id="nour-section" className="py-6 sm:py-10 md:py-12 px-3 sm:px-6">
      <div className="relative max-w-2xl mx-auto w-full">
        {/* Floating Smile/Sparkle badge beside the card */}
        <motion.div
          animate={{
            y: [-10, 10, -10],
            rotate: [-4, 6, -4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="hidden md:flex absolute -right-12 -top-10 w-24 h-24 rounded-full bg-white/70 backdrop-blur-md border border-[#FFD6E7] shadow-[0_10px_30px_rgba(255,111,165,0.2)] items-center justify-center text-[#FF6FA5] z-20 pointer-events-none"
        >
          <Smile className="w-10 h-10 text-[#FF6FA5]" />
        </motion.div>

        {/* Soft Glassmorphism Card */}
        <GlassCard className="p-5 sm:p-7 md:p-9 text-center relative overflow-hidden w-full">
          {/* Subtle top decoration badge */}
          <motion.div
            variants={fadeInVariants}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFD6E7]/50 text-[#C94F7C] text-[11px] sm:text-xs uppercase tracking-wider sm:tracking-widest font-medium mb-4 sm:mb-6"
          >
            <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#FF6FA5]" />
            <span>Dedicated to my best friend</span>
          </motion.div>

          {/* Title: Nour 🤍 */}
          <motion.h2
            variants={fadeInVariants}
            className="text-4xl sm:text-6xl md:text-7xl font-serif-playfair text-[#3A2630] font-normal tracking-tight mb-2 flex items-center justify-center gap-2 sm:gap-3"
          >
            <span>Nour</span>
            <span className="text-2xl sm:text-4xl md:text-5xl">🤍</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={fadeInVariants}
            className="text-sm sm:text-lg md:text-xl text-[#3A2630]/75 font-serif-cormorant italic max-w-md mx-auto mb-6 sm:mb-10 px-2"
          >
            “A friendship I wouldn't trade for anything, ya sahbty.”
          </motion.p>

          {/* Sincere Animated Words Grid */}
          <div className="grid grid-cols-2 gap-2 sm:gap-4 max-w-lg mx-auto">
            {words.map((item) => (
              <motion.div
                key={item.label}
                variants={scaleUpVariants}
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative p-4 sm:p-5 rounded-2xl bg-white/60 hover:bg-white/90 border border-[#FFD6E7]/70 hover:border-[#FF9FC5] transition-all duration-300 shadow-sm hover:shadow-md text-left cursor-default"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm sm:text-base font-serif-playfair text-[#3A2630] font-medium group-hover:text-[#C94F7C] transition-colors">
                    {item.label}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF9FC5] group-hover:scale-150 transition-transform" />
                </div>
                <p className="text-xs text-[#3A2630]/60 font-sans-dm font-light">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Gentle footnote */}
          <motion.div
            variants={fadeInVariants}
            className="mt-10 pt-6 border-t border-[#FFD6E7]/50 flex items-center justify-center gap-2 text-xs text-[#3A2630]/60 tracking-wider"
          >
            <span>Sahbi El Gada3 • Ya Sahbty • True Friends</span>
          </motion.div>
        </GlassCard>
      </div>
    </Section>
  )
}
