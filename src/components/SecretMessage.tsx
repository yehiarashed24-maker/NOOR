import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from './ui/Button'
import { Sparkles, X, Smile } from 'lucide-react'

export const SecretMessage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  // Listen for escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  return (
    <div className="flex flex-col items-center justify-center my-16 z-20 relative">
      {/* Trigger Button */}
      <Button
        variant="soft"
        size="lg"
        onClick={() => setIsOpen(true)}
        className="group shadow-[0_4px_20px_rgba(255,111,165,0.15)] hover:shadow-[0_8px_30px_rgba(255,111,165,0.25)]"
      >
        <Sparkles className="w-4 h-4 text-[#FF6FA5] group-hover:rotate-12 transition-transform" />
        <span className="font-serif-cormorant italic text-lg text-[#3A2630] font-medium">
          A personal note for ya sahbty...
        </span>
      </Button>

      {/* Modal Dialog */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Darkened blur backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-[#3A2630]/40 backdrop-blur-md"
            />

            {/* Glass Letter Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-lg rounded-2xl sm:rounded-3xl p-5 sm:p-10 md:p-12 bg-white/95 backdrop-blur-2xl border border-white/80 shadow-[0_25px_60px_-15px_rgba(255,111,165,0.35)] z-10 my-auto text-left max-h-[90vh] overflow-y-auto"
            >
              {/* Soft ambient inner glow */}
              <div className="absolute top-0 right-0 w-44 h-44 rounded-full bg-[#FFD6E7]/50 blur-3xl pointer-events-none -z-10" />

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close message"
                className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/80 border border-[#FFD6E7] flex items-center justify-center text-[#3A2630]/60 hover:text-[#C94F7C] hover:bg-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Header */}
              <div className="flex items-center gap-2 mb-6">
                <Smile className="w-4 h-4 text-[#FF6FA5]" />
                <span className="text-xs uppercase tracking-widest text-[#C94F7C] font-medium">
                  A friend's note • Ya Sahbty
                </span>
              </div>

              {/* Letter Content */}
              <div className="space-y-6 text-[#3A2630] font-serif-playfair leading-relaxed">
                <p className="text-2xl sm:text-3xl text-[#C94F7C] font-normal">
                  Nour,
                </p>

                <p className="text-base sm:text-lg font-serif-cormorant italic text-[#3A2630]/85 font-normal leading-relaxed">
                  I don't know where life will take us,<br />
                  but I know one thing for sure...
                </p>

                <p className="text-lg sm:text-xl font-normal leading-relaxed text-[#3A2630]">
                  <span className="text-[#C94F7C] font-semibold underline decoration-[#FF9FC5]/60 underline-offset-4">
                    27/09/2026
                  </span>{' '}
                  will always be the day<br />
                  I met the most awesome friend.
                </p>

                <p className="text-base font-sans-dm text-[#3A2630]/75 font-light">
                  Thanks for being you, ya sahbty. You are truly one of a kind and I'm glad we are friends!
                </p>

                <div className="pt-4 text-right">
                  <p className="font-serif-cormorant italic text-xl sm:text-2xl text-[#C94F7C]">
                    — Yehia (Your Friend) 🤍
                  </p>
                </div>
              </div>

              {/* Card Footer action */}
              <div className="mt-8 pt-4 border-t border-[#FFD6E7]/60 text-center">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-xs tracking-wider uppercase text-[#3A2630]/50 hover:text-[#C94F7C] transition-colors"
                >
                  Close ya sahbty
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
