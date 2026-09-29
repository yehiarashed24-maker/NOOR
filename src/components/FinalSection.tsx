import React from 'react'
import { motion } from 'framer-motion'
import { Section } from './ui/Section'
import { Sparkles, ArrowUp } from 'lucide-react'
import { fadeInVariants, fadeInUpSlow } from '@/lib/animations'

export const FinalSection: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Section id="final-section" className="py-20 sm:py-28 md:py-48 text-center px-3 sm:px-6">
      <div className="max-w-2xl mx-auto space-y-8 sm:space-y-12">
        {/* Subtle breathing sparkle badge */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-full bg-white/80 border border-[#FFD6E7] shadow-sm flex items-center justify-center text-[#FF6FA5]"
        >
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF6FA5]" />
        </motion.div>

        {/* Phase 1: Some dates are just dates. */}
        <motion.div variants={fadeInVariants} className="space-y-2 sm:space-y-3 px-2">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif-playfair text-[#3A2630]/70 font-light tracking-tight">
            Some dates are just dates.
          </h2>

          {/* Phase 2: And some introduce you to your best friend. */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif-playfair text-[#3A2630] font-normal tracking-tight">
            And some introduce you to your <span className="italic font-serif-cormorant text-[#C94F7C]">best friend.</span>
          </h2>
        </motion.div>

        {/* Phase 3: 27.09.2026 */}
        <motion.div variants={fadeInVariants} className="pt-2 sm:pt-4">
          <p className="text-4xl sm:text-6xl md:text-7xl font-serif-playfair text-[#C94F7C] font-normal tracking-tight">
            27.09.2026
          </p>
        </motion.div>

        {/* Phase 4: Noor */}
        <motion.div variants={fadeInVariants} className="pt-2 px-2">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif-playfair text-[#3A2630] flex items-center justify-center gap-2 sm:gap-3">
            <span>Noor</span>
            <span className="text-2xl sm:text-3xl md:text-4xl">🤍</span>
          </h3>

          <p className="text-xs sm:text-sm uppercase tracking-wider sm:tracking-[0.25em] text-[#C94F7C] font-medium mt-3 leading-relaxed">
            From Yehia — We are friends always, ya sahbty!
          </p>
        </motion.div>

        {/* Bottom Epilogue */}
        <motion.div
          variants={fadeInUpSlow}
          className="pt-16 border-t border-[#FFD6E7]/50 max-w-sm mx-auto"
        >
          <p className="text-xs sm:text-sm font-serif-cormorant italic text-[#3A2630]/60">
            “The beginning of an awesome friendship, ya sahbty.”
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="mt-8 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-[#3A2630]/40 hover:text-[#C94F7C] transition-colors"
          >
            <ArrowUp className="w-3 h-3" />
            <span>Return to top, ya sahbty</span>
          </button>
        </motion.div>
      </div>
    </Section>
  )
}
