import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Award, Mail, Music, ArrowRight, Heart, Home } from 'lucide-react'
import { useUniverseStore } from '../store/universeStore'
import { soundEffects } from '../utils/soundEffects'

export const Navbar: React.FC = () => {
  const { 
    isUniverseMode, 
    openUniverse, 
    closeUniverse, 
    openSection, 
    isMusicPlaying, 
    toggleMusic, 
    currentDay 
  } = useUniverseStore()

  const handleOpenUniverse = () => {
    soundEffects.playPlanetResonance()
    openUniverse()
  }

  const handleOpenCertificate = () => {
    soundEffects.playStarChime()
    openSection('certificate')
  }

  const handleOpenLetters = () => {
    soundEffects.playStarChime()
    openSection('letters')
  }

  const handleReturnHome = () => {
    soundEffects.playStarChime()
    closeUniverse()
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

      {/* Navigation Buttons */}
      <nav className="pointer-events-auto flex items-center gap-1.5 sm:gap-2">
        {isUniverseMode ? (
          /* When in Universe Mode: Back to Home Button */
          <button
            onClick={handleReturnHome}
            className="flex items-center gap-2 rounded-2xl bg-white/90 border border-white/20 px-3.5 py-2 text-xs font-semibold text-slate-900 shadow-lg hover:bg-white transition-all font-arabic"
          >
            <Home size={15} />
            <span>الرجوع للموقع الرئيسي</span>
          </button>
        ) : (
          /* When in Main Site: Shortcuts to Universe & Star & Letters */
          <>
            {/* 🌌 Universe Button */}
            <motion.button
              onClick={handleOpenUniverse}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-1.5 rounded-2xl bg-gradient-to-r from-slate-950 via-purple-950 to-slate-900 border border-purple-500/30 px-3.5 py-2 text-xs font-semibold text-white shadow-[0_4px_15px_rgba(168,85,247,0.25)] hover:border-purple-400/60 transition-all font-arabic"
            >
              <Sparkles size={14} className="text-amber-300 animate-spin" style={{ animationDuration: '8s' }} />
              <span className="hidden xs:inline">عالم نور</span>
              <span className="text-[10px] font-mono text-pink-300">3D</span>
            </motion.button>

            {/* ⭐ Star Certificate Button */}
            <button
              onClick={handleOpenCertificate}
              className="flex items-center gap-1.5 rounded-2xl glass-panel px-3 py-2 text-xs font-semibold text-[#3A2630] hover:text-[#C94F7C] transition-all font-arabic"
              title="شهادة نجمة نوني الرسمية"
            >
              <Award size={14} className="text-amber-500" />
              <span>نجمة نوني ⭐</span>
            </button>

            {/* 💌 365 Letters Button */}
            <button
              onClick={handleOpenLetters}
              className="hidden md:flex items-center gap-1.5 rounded-2xl glass-panel px-3 py-2 text-xs font-semibold text-[#3A2630] hover:text-[#C94F7C] transition-all font-arabic"
              title="365 رسالة"
            >
              <Mail size={14} className="text-rose-500" />
              <span>365 رسالة</span>
              <span className="rounded bg-rose-100 px-1 py-0.2 text-[10px] font-mono text-rose-600 font-bold">
                #{String(currentDay).padStart(3, '0')}
              </span>
            </button>
          </>
        )}

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
