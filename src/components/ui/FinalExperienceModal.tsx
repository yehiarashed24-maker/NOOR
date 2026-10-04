import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Sparkles, Heart, Headphones, Play, Pause, RotateCcw } from 'lucide-react'
import { useUniverseStore } from '../../store/universeStore'
import { siteConfig } from '../../data/config'
import { soundEffects } from '../../utils/soundEffects'
import confetti from 'canvas-confetti'

export const FinalExperienceModal: React.FC = () => {
  const { activeSection, closeSection, triggerFinalSurprise, isFinalRevealed } = useUniverseStore()
  const isOpen = activeSection === 'final'

  // Step progression in the cinematic story
  const [step, setStep] = useState<number>(0)
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false)
  const [audioProgress, setAudioProgress] = useState<number>(0)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // Reset or initialize on open
  useEffect(() => {
    if (isOpen) {
      setStep(0)
      setIsPlayingAudio(false)
      setAudioProgress(0)
    }
  }, [isOpen])

  // Progress steps with timer if user waits, or user can click Next
  useEffect(() => {
    if (!isOpen) return
    if (step < 4) {
      const timer = setTimeout(() => {
        setStep((prev) => prev + 1)
        soundEffects.playStarChime()
      }, step === 0 ? 2500 : 3500)
      return () => clearTimeout(timer)
    }
  }, [isOpen, step])

  if (!isOpen) return null

  const handleClose = () => {
    if (audioRef.current) {
      audioRef.current.pause()
    }
    soundEffects.playStarChime()
    closeSection()
  }

  const handleToggleVoiceNote = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(siteConfig.voiceMessage.placeholderPath)
      audioRef.current.ontimeupdate = () => {
        if (audioRef.current) {
          const p = (audioRef.current.currentTime / (audioRef.current.duration || 1)) * 100
          setAudioProgress(p)
        }
      }
      audioRef.current.onended = () => {
        setIsPlayingAudio(false)
        handleTriggerStarMorph()
      }
      audioRef.current.onerror = () => {
        // Fallback tone if MP3 not placed yet
        soundEffects.playLetterReveal()
        setIsPlayingAudio(true)
        setTimeout(() => {
          setIsPlayingAudio(false)
          handleTriggerStarMorph()
        }, 5000)
      }
    }

    if (isPlayingAudio) {
      audioRef.current.pause()
      setIsPlayingAudio(false)
    } else {
      audioRef.current.play().catch(() => {
        soundEffects.playLetterReveal()
        setIsPlayingAudio(true)
        setTimeout(() => {
          setIsPlayingAudio(false)
          handleTriggerStarMorph()
        }, 5000)
      })
      setIsPlayingAudio(true)
    }
  }

  const handleTriggerStarMorph = () => {
    triggerFinalSurprise()
    soundEffects.playLetterReveal()
    confetti({
      particleCount: 80,
      spread: 100,
      origin: { y: 0.6 },
      colors: ['#fbbf24', '#ec4899', '#f43f5e', '#60a5fa'],
    })
  }

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6">
        {/* Deep Cinema Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="absolute inset-0 bg-black/90 backdrop-blur-xl"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 260 }}
          className="relative flex h-[92vh] sm:h-[88vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl border border-pink-500/20 bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white shadow-[0_0_100px_rgba(244,63,94,0.2)]"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 bg-slate-900/40">
            <span className="text-xs font-mono tracking-widest text-slate-400">
              NOOR UNIVERSE • FINALE
            </span>
            <button
              onClick={handleClose}
              aria-label="إغلاق"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Body Narrative Area */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-10 flex flex-col justify-center items-center text-center">
            {/* Step 0: Solitary light */}
            {step === 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <div className="relative mx-auto flex h-24 w-24 items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-pink-500/30 blur-2xl animate-pulse" />
                  <div className="relative h-4 w-4 rounded-full bg-white shadow-[0_0_25px_#fff]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-arabic text-slate-300">
                  "في حاجة أخيرة..."
                </h3>
              </motion.div>
            )}

            {/* Step 1: The Name */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="space-y-4"
              >
                <span className="text-xs font-mono tracking-widest text-pink-400 uppercase">
                  To My One and Only
                </span>
                <h2 className="text-4xl sm:text-6xl font-bold font-arabic text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-amber-300 to-purple-400">
                  نور
                </h2>
                <p className="text-sm text-slate-400 font-arabic pt-2">
                  "يمكن أنا مش دايمًا بعرف أقول كل اللي جوايا..."
                </p>
              </motion.div>
            )}

            {/* Step 2: The Heartfelt Message */}
            {step >= 2 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6 max-w-lg mx-auto font-arabic text-right"
              >
                <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-200 bg-white/5 rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl backdrop-blur-md">
                  <p className="text-center font-bold text-lg sm:text-xl text-pink-300 mb-2">
                    "يا نوري ❤️"
                  </p>
                  <p>
                    العالم ده بكل نجومه وكواكبه وتفاصيله مش مجرد موقع.. ده انعكاس بسيط للي إنتي بتعمليه في أيامي.
                  </p>
                  <p>
                    لما بكون تعبان، أو الدنيا زحمة، بفتكر ضحكتك وصوتك، واليومين اللي شفتك فيهم وكان شكلك فيهم قمر وبياخد العقل.
                  </p>
                  <div className="border-t border-white/10 pt-4 text-center">
                    <p className="text-base sm:text-lg font-bold text-amber-200">
                      "بس لو سألتني إيه أكتر حاجة حلوة حصلتلي؟"
                    </p>
                    <p className="text-xl sm:text-2xl font-bold text-pink-400 mt-2">
                      "هقولك: إنك بقيتي جزء من حياتي."
                    </p>
                    <p className="text-2xl sm:text-3xl font-bold text-white mt-3">
                      "بحبك يا نوري ❤️"
                    </p>
                  </div>
                </div>

                {/* Voice Note & Star Morph Buttons */}
                <div className="flex flex-col gap-3 pt-2">
                  {/* Voice Note Button */}
                  <button
                    onClick={handleToggleVoiceNote}
                    className="w-full flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-pink-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all font-arabic"
                  >
                    <Headphones size={20} />
                    <span>{isPlayingAudio ? 'إيقاف التسجيل الصوتي ⏸️' : 'PLAY MY MESSAGE 🎧 (رسالتي بصوتي)'}</span>
                  </button>

                  {/* Audio Progress Bar if active */}
                  {isPlayingAudio && (
                    <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                      <div
                        className="bg-pink-500 h-full transition-all duration-300"
                        style={{ width: `${audioProgress}%` }}
                      />
                    </div>
                  )}

                  {/* Star Surprise Trigger Button */}
                  <button
                    onClick={handleTriggerStarMorph}
                    className="w-full flex items-center justify-center gap-2 rounded-2xl border border-amber-400/40 bg-amber-400/10 px-5 py-3 text-xs sm:text-sm font-semibold text-amber-300 hover:bg-amber-400/20 active:scale-[0.98] transition-all font-arabic"
                  >
                    <Sparkles size={16} />
                    <span>{isFinalRevealed ? 'تشكيل نجوم السماء مجدداً ✨' : 'اكشفي المفاجأة الكبرى في سماء النجوم 🌌'}</span>
                  </button>
                </div>

                {/* Final Sign-off */}
                {isFinalRevealed && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="pt-4 text-center space-y-1 font-arabic"
                  >
                    <h4 className="text-lg font-bold text-white tracking-wide">
                      Happy every day, Noor.
                    </h4>
                    <p className="text-sm text-pink-400 font-bold flex items-center justify-center gap-1">
                      <span>من يحيى ❤️</span>
                      <Heart size={14} className="fill-pink-500" />
                    </p>
                  </motion.div>
                )}
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
