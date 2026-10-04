import React from 'react'
import { motion } from 'framer-motion'
import { Award, Mail, Music, Heart, Sparkles } from 'lucide-react'
import { useUniverseStore } from '../store/universeStore'
import { soundEffects } from '../utils/soundEffects'

export const Navbar: React.FC = () => {
  const { 
    openSection, 
    isMusicPlaying, 
    toggleMusic, 
    currentDay 
  } = useUniverseStore()

  const handleOpenCertificate = () => {
    soundEffects.playStarChime()
    openSection('certificate')
  }

  const handleOpenLetters = () => {
    soundEffects.playStarChime()
    openSection('letters')
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-3 sm:px-6 py-3 pointer-events-none transition-all">
      {/* Brand Logo */}
      <div className="pointer-events-auto flex items-center gap-2.5 rounded-2xl glass-panel px-3.5 py-2 shadow-sm">
        <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-gradient-to-tr from-[#FF6FA5] to-[#FF9FC5] text-white shadow-sm">
          <Heart size={14} className="fill-white" />
        </div>
        <div>
          <span className="text-xs sm:text-sm font-bold tracking-wider text-[#3A2630] font-sans-dm">
            Nour & Yehia
          </span>
          <span className="hidden sm:inline-block mx-2 text-[10px] text-[#C94F7C]/70 font-mono">
            27.09 • 02.10 • 03.10
          </span>
        </div>
      </div>

      {/* Navigation Shortcuts */}
      <nav className="pointer-events-auto flex items-center gap-1.5 sm:gap-2.5">
        {/* ⭐ Star Certificate Button */}
        <motion.button
          onClick={handleOpenCertificate}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="flex items-center gap-1.5 rounded-2xl bg-gradient-to-r from-amber-500/15 via-rose-500/10 to-amber-500/15 border border-amber-400/40 px-3.5 py-2 text-xs font-semibold text-[#854d0e] hover:border-amber-500 transition-all font-arabic backdrop-blur-md shadow-sm"
          title="شهادة نجمة نوني الرسمية في السماء"
        >
          <Award size={15} className="text-amber-500" />
          <span>نجمة نوني ⭐</span>
        </motion.button>

        {/* 💌 365 Letters Button */}
        <motion.button
          onClick={handleOpenLetters}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="flex items-center gap-1.5 rounded-2xl bg-gradient-to-r from-pink-500/15 to-purple-500/15 border border-pink-400/40 px-3.5 py-2 text-xs font-semibold text-[#9d174d] hover:border-pink-500 transition-all font-arabic backdrop-blur-md shadow-sm"
          title="365 رسالة لنور"
        >
          <Mail size={15} className="text-pink-600" />
          <span>365 رسالة</span>
          <span className="rounded-full bg-pink-500 px-2 py-0.5 text-[10px] font-mono text-white font-bold">
            #{String(currentDay).padStart(3, '0')}
          </span>
        </motion.button>

        {/* 🎵 Music Toggle */}
        <button
          onClick={toggleMusic}
          aria-label="تشغيل / إيقاف الموسيقى"
          className={`flex h-9 w-9 items-center justify-center rounded-2xl border transition-all ${
            isMusicPlaying
              ? 'bg-[#FF6FA5] text-white border-[#FF6FA5] shadow-[0_0_12px_rgba(255,111,165,0.4)]'
              : 'glass-panel text-[#3A2630] hover:text-[#C94F7C]'
          }`}
        >
          <Music size={15} className={isMusicPlaying ? 'animate-bounce' : ''} />
        </button>
      </nav>
    </header>
  )
}
