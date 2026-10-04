import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { useUniverseStore } from '../../store/universeStore'
import { playStarSound, playUnlockSound, ambientSynth } from '../../utils/soundEffects'

export const CinematicIntro: React.FC = () => {
  const [step, setStep] = useState(0)
  const completeIntro = useUniverseStore((s) => s.completeIntro)
  const setMusicPlaying = useUniverseStore((s) => s.setMusicPlaying)

  useEffect(() => {
    // Step 0: Single point of light (0 to 1.8s)
    const t0 = setTimeout(() => setStep(1), 1800)
    // Step 1: Text "في مكان بعيد جدًا..."
    const t1 = setTimeout(() => setStep(2), 3800)
    // Step 2: "وسط مليارات النجوم..."
    const t2 = setTimeout(() => setStep(3), 5800)
    // Step 3: "كان فيه عالم واحد..."
    const t3 = setTimeout(() => setStep(4), 7800)
    // Step 4: "أنا عملته مخصوص ليكي."
    const t4 = setTimeout(() => setStep(5), 9800)
    // Step 5: "Welcome, Noor." & Button
    const t5 = setTimeout(() => setStep(6), 11800)

    return () => {
      clearTimeout(t0)
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
      clearTimeout(t4)
      clearTimeout(t5)
    }
  }, [])

  const handleEnter = () => {
    playUnlockSound()
    ambientSynth.start()
    setMusicPlaying(true)
    completeIntro()
  }

  const handleSkip = () => {
    setStep(6)
  }

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.08, filter: 'blur(16px)' }}
      transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#020205] text-white overflow-hidden select-none px-6"
    >
      {/* Background starlight points blooming */}
      <div className="absolute inset-0 pointer-events-none">
        <AnimatePresence>
          {step >= 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 3 }}
              className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,111,165,0.15)_0%,rgba(59,7,100,0.1)_50%,transparent_80%)]"
            />
          )}
        </AnimatePresence>
      </div>

      {/* Center glowing focal star */}
      <div className="relative mb-10 flex items-center justify-center">
        {/* Step 0: Tiny solitary point of light */}
        <motion.div
          animate={{
            scale: step === 0 ? [1, 1.6, 1] : [2, 2.5, 2],
            boxShadow:
              step === 0
                ? '0 0 10px rgba(255,255,255,0.8)'
                : '0 0 35px rgba(255,159,197,0.9), 0 0 70px rgba(201,79,124,0.6)',
          }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-2.5 h-2.5 rounded-full bg-white relative z-10"
        />

        {/* Outer glowing halo */}
        {step >= 1 && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.7 }}
            transition={{ duration: 1.8 }}
            className="absolute w-24 h-24 rounded-full bg-gradient-to-tr from-[#FF6FA5]/40 via-[#A855F7]/30 to-transparent blur-xl pointer-events-none"
          />
        )}
      </div>

      {/* Cinematic Poetic Text Sequence */}
      <div className="min-h-[140px] flex flex-col items-center justify-center text-center max-w-xl mx-auto px-4 z-10">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.p
              key="step1"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 1.2 }}
              className="text-lg sm:text-2xl text-white/80 font-serif-cormorant italic tracking-wide"
            >
              في مكان بعيد جدًا...
            </motion.p>
          )}

          {step === 2 && (
            <motion.p
              key="step2"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 1.2 }}
              className="text-lg sm:text-2xl text-white/80 font-serif-cormorant italic tracking-wide"
            >
              وسط مليارات النجوم في الفضاء...
            </motion.p>
          )}

          {step === 3 && (
            <motion.p
              key="step3"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 1.2 }}
              className="text-lg sm:text-2xl text-white/80 font-serif-cormorant italic tracking-wide"
            >
              كان فيه عالم واحد بس...
            </motion.p>
          )}

          {step === 4 && (
            <motion.p
              key="step4"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 1.2 }}
              className="text-xl sm:text-3xl text-[#FF9FC5] font-serif-cormorant italic tracking-wide font-normal"
            >
              أنا عملته مخصوص ليكي.
            </motion.p>
          )}

          {step >= 5 && (
            <motion.div
              key="step5"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif-playfair tracking-tight bg-gradient-to-r from-white via-[#FFD6E7] to-[#FF9FC5] bg-clip-text text-transparent">
                Welcome, Noor.
              </h1>
              <p className="text-sm sm:text-lg text-white/70 font-serif-cormorant italic">
                جاهزة تدخلي عالمك الصغير يا نوري؟ ✨
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Enter Button */}
      {step >= 6 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-8 z-20"
        >
          <button
            onClick={handleEnter}
            onPointerOver={playStarSound}
            className="group relative px-8 py-3.5 rounded-full bg-gradient-to-r from-[#FF6FA5] via-[#C94F7C] to-[#7928CA] text-white font-medium text-sm sm:text-base tracking-[0.2em] uppercase shadow-[0_0_30px_rgba(255,111,165,0.45)] hover:shadow-[0_0_50px_rgba(255,111,165,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#FDE047] group-hover:rotate-12 transition-transform" />
            <span>ENTER MY UNIVERSE ✨</span>
          </button>
        </motion.div>
      )}

      {/* Skip button for quick review */}
      {step < 6 && (
        <button
          onClick={handleSkip}
          className="absolute bottom-6 right-6 text-xs text-white/40 hover:text-white/80 transition-colors uppercase tracking-widest cursor-pointer"
        >
          Skip Intro →
        </button>
      )}
    </motion.div>
  )
}
