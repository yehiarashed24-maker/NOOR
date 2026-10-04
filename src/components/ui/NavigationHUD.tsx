import React from 'react'
import { motion } from 'framer-motion'
import { 
  Sparkles, Mail, Heart, Award, Star, Lock, Music, Volume2, VolumeX,
  Compass
} from 'lucide-react'
import { useUniverseStore, UniverseSection } from '../../store/universeStore'
import { siteConfig } from '../../data/config'
import { soundEffects } from '../../utils/soundEffects'

export const NavigationHUD: React.FC = () => {
  const { 
    activeSection, 
    openSection, 
    currentDay, 
    isMusicPlaying, 
    toggleMusic, 
    isAudioMuted, 
    toggleAudioMute,
    introCompleted
  } = useUniverseStore()

  if (!introCompleted) return null

  const handleNav = (section: UniverseSection) => {
    soundEffects.playStarChime()
    openSection(section)
  }

  const handleToggleSound = () => {
    toggleAudioMute()
    soundEffects.toggleMute()
  }

  const navItems: { id: UniverseSection; label: string; icon: React.ReactNode; color: string }[] = [
    { id: 'star', label: 'نور (القلب)', icon: <Sparkles size={16} />, color: 'from-amber-400 to-amber-600' },
    { id: 'letters', label: '365 رسالة', icon: <Mail size={16} />, color: 'from-pink-500 to-rose-600' },
    { id: 'memories', label: 'ذكرياتنا', icon: <Star size={16} />, color: 'from-purple-500 to-indigo-600' },
    { id: 'certificate', label: 'شهادة النجمة', icon: <Award size={16} />, color: 'from-amber-300 to-yellow-500' },
    { id: 'reasons', label: 'تفاصيل بحبها', icon: <Heart size={16} />, color: 'from-pink-400 to-pink-600' },
    { id: 'secret', label: 'سري', icon: <Lock size={16} />, color: 'from-indigo-400 to-purple-700' },
    { id: 'final', label: 'الرسالة الأخيرة', icon: <Compass size={16} />, color: 'from-cyan-400 to-blue-600' },
  ]

  return (
    <>
      {/* ================= TOP HUD ================= */}
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between p-3 sm:p-5 pointer-events-none">
        {/* Left: Universe Title & Dedication */}
        <div className="pointer-events-auto flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/70 px-3.5 py-2 backdrop-blur-xl shadow-lg">
          <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-gradient-to-tr from-pink-500 to-amber-400 text-white shadow-[0_0_12px_rgba(244,63,94,0.4)]">
            <Sparkles size={15} />
          </div>
          <div>
            <h1 className="text-xs sm:text-sm font-bold tracking-wider text-white">
              {siteConfig.title}
            </h1>
            <p className="text-[10px] text-pink-300/80 font-arabic">
              A little universe made only for {siteConfig.girlName}
            </p>
          </div>
        </div>

        {/* Right: Quick Controls (Music, Sound, Day Counter) */}
        <div className="pointer-events-auto flex items-center gap-2">
          {/* Day Counter Badge */}
          <button
            onClick={() => handleNav('letters')}
            className="flex items-center gap-1.5 rounded-2xl border border-pink-500/30 bg-slate-950/70 px-3 py-1.5 backdrop-blur-xl text-xs font-semibold text-pink-300 hover:bg-pink-500/20 transition-all shadow-md"
          >
            <span className="h-2 w-2 rounded-full bg-pink-500 animate-ping" />
            <span className="font-mono">DAY {String(currentDay).padStart(3, '0')}</span>
          </button>

          {/* Music Play/Pause Toggle */}
          <button
            onClick={toggleMusic}
            aria-label="تشغيل / إيقاف الموسيقى"
            className={`flex h-9 w-9 items-center justify-center rounded-2xl border backdrop-blur-xl transition-all ${
              isMusicPlaying
                ? 'border-pink-500/40 bg-pink-500/20 text-pink-300 shadow-[0_0_15px_rgba(244,63,94,0.3)]'
                : 'border-white/10 bg-slate-950/70 text-slate-400 hover:text-white'
            }`}
          >
            <Music size={16} className={isMusicPlaying ? 'animate-spin' : ''} style={{ animationDuration: '6s' }} />
          </button>

          {/* Sound FX Mute Toggle */}
          <button
            onClick={handleToggleSound}
            aria-label="كتم / تفعيل المؤثرات"
            className="flex h-9 w-9 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/70 backdrop-blur-xl text-slate-400 hover:text-white transition-all"
          >
            {isAudioMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>
        </div>
      </header>

      {/* ================= BOTTOM NAVIGATION DOCK ================= */}
      <nav className="fixed bottom-3 sm:bottom-6 left-0 right-0 z-40 flex justify-center px-2 pointer-events-none">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, type: 'spring', damping: 20 }}
          className="pointer-events-auto flex items-center gap-1 sm:gap-2 overflow-x-auto max-w-[95vw] rounded-3xl border border-white/15 bg-slate-950/80 p-1.5 sm:p-2 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,0,0,0.6)] scrollbar-none"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id
            return (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`flex items-center gap-1.5 rounded-2xl px-2.5 sm:px-3.5 py-2 text-xs font-arabic font-medium transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-gradient-to-r text-white shadow-lg ' + item.color
                    : 'text-slate-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                <span>{item.icon}</span>
                <span className="text-[11px] sm:text-xs">{item.label}</span>
              </button>
            )
          })}
        </motion.div>
      </nav>
    </>
  )
}
