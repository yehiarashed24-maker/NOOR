import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Sparkles, Heart, Star, ChevronLeft, RotateCcw } from 'lucide-react'
import { useUniverseStore } from '../../store/universeStore'
import { littleThingsData, littleThingsConclusion } from '../../data/reasons'
import { soundEffects } from '../../utils/soundEffects'
import confetti from 'canvas-confetti'

export const LittleThingsModal: React.FC = () => {
  const { activeSection, closeSection } = useUniverseStore()
  const isOpen = activeSection === 'reasons'

  // Revealed items up to this index
  const [revealedCount, setRevealedCount] = useState<number>(3)

  if (!isOpen) return null

  const handleClose = () => {
    soundEffects.playStarChime()
    closeSection()
  }

  const handleRevealNext = () => {
    if (revealedCount < littleThingsData.length) {
      soundEffects.playStarChime()
      const next = revealedCount + 1
      setRevealedCount(next)

      if (next === littleThingsData.length) {
        soundEffects.playLetterReveal()
        confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#ec4899', '#f43f5e', '#a855f7', '#fbbf24'],
        })
      }
    }
  }

  const handleReset = () => {
    soundEffects.playPlanetResonance()
    setRevealedCount(3)
  }

  const isAllRevealed = revealedCount >= littleThingsData.length

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 260 }}
          className="relative flex h-[90vh] sm:h-[85vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-pink-500/20 bg-slate-950/95 text-white shadow-[0_0_80px_rgba(236,72,153,0.15)]"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 bg-slate-900/60 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-500/20 text-pink-400 border border-pink-500/30">
                <Sparkles size={20} />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-bold tracking-tight text-white">
                  💫 LITTLE THINGS I LOVE ABOUT YOU
                </h2>
                <p className="text-xs text-slate-400 font-arabic">
                  تفاصيل صغيرة بحبها فيكي يا نوري ({revealedCount} / {littleThingsData.length})
                </p>
              </div>
            </div>

            <button
              onClick={handleClose}
              aria-label="إغلاق"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {littleThingsData.map((item, index) => {
                const isRevealed = index < revealedCount

                return (
                  <motion.div
                    key={item.id}
                    initial={false}
                    animate={
                      isRevealed
                        ? { opacity: 1, scale: 1, y: 0 }
                        : { opacity: 0.3, scale: 0.98, y: 5 }
                    }
                    className={`rounded-2xl border p-4 text-right transition-all font-arabic ${
                      isRevealed
                        ? 'border-pink-500/30 bg-gradient-to-l from-slate-900/80 to-slate-900/40 shadow-sm'
                        : 'border-white/5 bg-slate-900/20 opacity-30 select-none'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-lg">{item.emoji}</span>
                      <div className="flex items-center gap-1.5">
                        <span className="font-mono text-[11px] text-pink-400 font-bold">
                          #{String(item.id).padStart(2, '0')}
                        </span>
                        <Star
                          size={13}
                          className={
                            isRevealed
                              ? 'text-pink-400 fill-pink-400'
                              : 'text-slate-600'
                          }
                        />
                      </div>
                    </div>

                    <h4 className="text-base font-bold text-white mb-1">
                      {isRevealed ? item.text : '••••••••••••'}
                    </h4>

                    {item.subtext && (
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {isRevealed ? item.subtext : 'اضغطي للكشف عن النجمة...'}
                      </p>
                    )}
                  </motion.div>
                )
              })}
            </div>

            {/* Conclusion Banner (When all revealed) */}
            {isAllRevealed && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="mt-6 rounded-3xl border-2 border-pink-400/40 bg-gradient-to-r from-pink-950/60 via-purple-950/60 to-slate-950/80 p-6 text-center shadow-xl backdrop-blur-md"
              >
                <Heart size={32} className="mx-auto mb-3 text-pink-500 fill-pink-500 animate-bounce" />
                <h3 className="text-xl sm:text-2xl font-bold font-arabic text-pink-200">
                  {littleThingsConclusion}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-400 font-arabic">
                  مهما عدّيت حاجات بحبها، حبك في قلبي أكبر من أي كلام ممكن يتوصف.
                </p>
              </motion.div>
            )}
          </div>

          {/* Footer Navigation */}
          <div className="border-t border-white/10 px-6 py-4 bg-slate-900/60 flex items-center justify-between">
            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-400 hover:text-white transition-colors"
            >
              <RotateCcw size={13} />
              <span>إعادة البدء</span>
            </button>

            {!isAllRevealed ? (
              <button
                onClick={handleRevealNext}
                className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-pink-500/25 hover:scale-105 active:scale-95 transition-all font-arabic"
              >
                <span>اكشفي النجمة التالية ({revealedCount + 1})</span>
                <ChevronLeft size={16} />
              </button>
            ) : (
              <span className="text-xs font-arabic text-pink-400 font-semibold flex items-center gap-1">
                <Heart size={14} className="fill-pink-500" />
                <span>كل النجوم اتكشفت لنوري</span>
              </span>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
