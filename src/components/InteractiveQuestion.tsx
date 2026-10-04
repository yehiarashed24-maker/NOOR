import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import { Section } from './ui/Section'
import { GlassCard } from './ui/GlassCard'
import { Button } from './ui/Button'
import { Sparkles, Smile } from 'lucide-react'
import { fadeInVariants } from '@/lib/animations'

export const InteractiveQuestion: React.FC = () => {
  const [answered, setAnswered] = useState<string | null>(null)

  const triggerSoftConfetti = () => {
    // Beautiful pastel celebratory confetti
    const colors = ['#FFD6E7', '#FF9FC5', '#FF6FA5', '#FFFFFF', '#C94F7C']

    confetti({
      particleCount: 45,
      angle: 60,
      spread: 60,
      origin: { x: 0.2, y: 0.65 },
      colors,
      shapes: ['circle'],
      scalar: 0.9,
    })

    confetti({
      particleCount: 45,
      angle: 120,
      spread: 60,
      origin: { x: 0.8, y: 0.65 },
      colors,
      shapes: ['circle'],
      scalar: 0.9,
    })
  }

  const handleAnswer = (choice: string) => {
    setAnswered(choice)
    triggerSoftConfetti()
  }

  return (
    <Section id="question-section" className="py-6 sm:py-10 md:py-12 px-3 sm:px-6">
      <div className="max-w-xl mx-auto w-full">
        <GlassCard className="text-center p-5 sm:p-7 md:p-9 relative overflow-hidden w-full">
          {/* Header pill */}
          <motion.div
            variants={fadeInVariants}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFD6E7]/50 text-[#C94F7C] text-[11px] sm:text-xs uppercase tracking-wider sm:tracking-widest font-medium mb-4 sm:mb-6"
          >
            <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#FF6FA5]" />
            <span>Friendship Quiz • Ya Sahbty</span>
          </motion.div>

          <AnimatePresence mode="wait">
            {!answered ? (
              <motion.div
                key="question"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-xl sm:text-3xl md:text-4xl font-serif-playfair text-[#3A2630] font-normal leading-snug tracking-tight mb-6 sm:mb-8 px-1">
                  Do you agree that we are the best friends, ya sahbty?
                </h3>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full">
                  <Button
                    variant="secondary"
                    size="lg"
                    onClick={() => handleAnswer('obviously')}
                    className="w-full sm:w-auto min-w-[160px] py-3 sm:py-3.5"
                  >
                    Obviously ya sahbty! 🤍
                  </Button>
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => handleAnswer('100%')}
                    className="w-full sm:w-auto min-w-[160px] py-3 sm:py-3.5"
                  >
                    100% Best Friends 🤝
                  </Button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="response"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="py-4"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.25, 1] }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#FFD6E7]/70 flex items-center justify-center text-[#FF6FA5] shadow-inner"
                >
                  <Smile className="w-7 h-7 text-[#FF6FA5]" />
                </motion.div>

                <h4 className="text-2xl sm:text-3xl font-serif-playfair text-[#3A2630] font-normal mb-3">
                  I knew it! Best friends since 27/09/2026, ya sahbty! 🤍
                </h4>

                <p className="text-sm sm:text-base text-[#3A2630]/70 font-serif-cormorant italic">
                  أجدع صاحبة في الدنيا والله ya sahbty!
                </p>

                <div className="mt-6">
                  <button
                    onClick={() => setAnswered(null)}
                    className="text-xs text-[#C94F7C] underline decoration-[#FF9FC5] underline-offset-4 hover:text-[#3A2630] transition-colors"
                  >
                    Answer again ya sahbty
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </GlassCard>
      </div>
    </Section>
  )
}
