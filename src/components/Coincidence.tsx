import React from 'react'
import { motion } from 'framer-motion'
import { Section } from './ui/Section'
import { Compass } from 'lucide-react'
import { fadeInVariants, fadeInUpSlow } from '@/lib/animations'

export const Coincidence: React.FC = () => {
  const thoughts = [
    'Out of all the days.',
    'Out of all the people.',
    'Out of all the random coincidences in life...',
  ]

  return (
    <Section id="coincidence-section" className="py-6 sm:py-10 md:py-12 px-3 sm:px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Section Pill */}
        <motion.div
          variants={fadeInVariants}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFD6E7]/50 text-[#C94F7C] text-[11px] sm:text-xs uppercase tracking-wider sm:tracking-widest font-medium mb-3 sm:mb-4"
        >
          <Compass className="w-3.5 h-3.5 text-[#FF6FA5]" />
          <span>Serendipity • Ya Sahbty</span>
        </motion.div>

        {/* Large Main Heading */}
        <motion.h2
          variants={fadeInVariants}
          className="text-2xl sm:text-4xl md:text-5xl font-serif-playfair text-[#3A2630] font-normal tracking-tight mb-5 sm:mb-8 leading-[1.2]"
        >
          The most beautiful <br />
          <span className="italic font-serif-cormorant text-[#C94F7C]">coincidence, ya sahbty.</span>
        </motion.h2>

        {/* Sequential Story Flow with Vertical Trail */}
        <div className="relative py-2 sm:py-4 flex flex-col items-center w-full">
          {/* Subtle vertical connector */}
          <div className="absolute top-0 bottom-0 w-[1.5px] bg-gradient-to-b from-transparent via-[#FFD6E7] to-transparent pointer-events-none" />

          {thoughts.map((thought, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: 0.2 + idx * 0.35, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative my-2.5 sm:my-4 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-[#FFD6E7]/60 shadow-sm max-w-[90vw]"
            >
              <p className="text-sm sm:text-xl text-[#3A2630]/80 font-serif-cormorant italic tracking-wide">
                {thought}
              </p>
            </motion.div>
          ))}
        </div>

        {/* The Climax Reveal: "There was Nour." */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 25 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ delay: 1.3, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 sm:mt-14 mb-6 sm:mb-8"
        >
          <div className="relative inline-block px-4 sm:px-8 py-3 sm:py-4">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFD6E7]/0 via-[#FFD6E7]/40 to-[#FFD6E7]/0 rounded-2xl blur-md" />
            <h3 className="relative text-3xl sm:text-5xl md:text-6xl font-serif-playfair text-[#C94F7C] font-normal tracking-tight">
              There was Nour.
            </h3>
          </div>
        </motion.div>

        {/* Final Conclusion Sentence */}
        <motion.p
          variants={fadeInUpSlow}
          className="text-base sm:text-lg md:text-xl text-[#3A2630]/75 font-sans-dm max-w-lg mx-auto font-light leading-relaxed"
        >
          And gaining a friend like you was enough to make{' '}
          <span className="font-medium text-[#C94F7C] underline decoration-[#FF9FC5]/60 underline-offset-4">
            27/09/2026
          </span>{' '}
          unforgettable, ya sahbty.
        </motion.p>
      </div>
    </Section>
  )
}
