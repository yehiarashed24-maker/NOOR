import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Sparkles } from 'lucide-react'
import { Heart3D } from './Heart3D'

export const Hero: React.FC = () => {
  const scrollToNext = () => {
    const el = document.getElementById('date-section')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between items-center px-4 pt-14 sm:pt-20 pb-8 sm:pb-12 overflow-hidden text-center">
      {/* Background Soft Glow Circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-[34rem] sm:h-[34rem] rounded-full bg-gradient-to-tr from-[#FFD6E7]/50 via-[#FFB3D1]/30 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Top minimal badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white/75 backdrop-blur-md border border-[#FFD6E7] text-[11px] sm:text-xs tracking-wider sm:tracking-widest uppercase text-[#C94F7C] shadow-sm max-w-[92vw]"
      >
        <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#FF6FA5] shrink-0" />
        <span className="truncate">Best Friends Forever • Ya Sahbty ✨</span>
      </motion.div>

      {/* Main Hero Story Animation Sequence */}
      <div className="flex-1 flex flex-col items-center justify-center max-w-3xl mx-auto my-4 sm:my-6 z-10 w-full px-2">
        {/* 3D Element - Always at full size immediately without scale glitch */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-1 sm:mb-2 flex items-center justify-center w-full"
        >
          <Heart3D className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64" />
        </motion.div>

        {/* Phase 1: Sometimes... */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs sm:text-base tracking-[0.2em] uppercase text-[#C94F7C]/80 font-medium mb-1.5 sm:mb-2"
        >
          Sometimes...
        </motion.p>

        {/* Phase 2: the best friends happen by coincidence, ya sahbty */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-2xl md:text-3xl text-[#3A2630]/90 font-serif-cormorant italic mb-4 sm:mb-6 font-light max-w-md sm:max-w-xl mx-auto leading-relaxed"
        >
          the best friends happen by coincidence, ya sahbty.
        </motion.p>

        {/* Phase 3: Date Reveal "27.09.2026" */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative inline-block mb-3 sm:mb-4"
        >
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif-playfair font-normal tracking-tight text-[#3A2630]">
            27.09.2026
          </h1>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-[1.5px] bg-gradient-to-r from-transparent via-[#FF9FC5] to-transparent" />
        </motion.div>

        {/* Phase 4: Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.9, duration: 0.9 }}
          className="text-sm sm:text-base md:text-lg text-[#3A2630]/75 tracking-wide max-w-md mx-auto mb-5 font-light"
        >
          The day I met the most awesome coincidence — my friend Nour.
        </motion.p>

        {/* Phase 5: Nour 🤍 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-2 text-3xl sm:text-4xl md:text-5xl font-serif-playfair text-[#C94F7C]"
        >
          <span>Nour</span>
          <motion.span
            animate={{ scale: [1, 1.18, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
            className="text-2xl sm:text-3xl md:text-4xl inline-block"
          >
            🤍
          </motion.span>
        </motion.div>
      </div>

      {/* Phase 6: Scroll Indicator */}
      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 4.2, duration: 0.9 }}
        aria-label="Scroll to discover why, ya sahbty"
        className="group flex flex-col items-center gap-2 text-xs tracking-widest uppercase text-[#3A2630]/60 hover:text-[#C94F7C] transition-colors cursor-pointer pb-2"
      >
        <span>Scroll to see our story, ya sahbty</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-8 h-8 rounded-full flex items-center justify-center bg-white/60 border border-[#FFD6E7] shadow-sm group-hover:border-[#FF9FC5] group-hover:bg-white"
        >
          <ChevronDown className="w-4 h-4 text-[#FF6FA5]" />
        </motion.div>
      </motion.button>
    </section>
  )
}
