import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Sparkles, Compass, Heart, Award } from 'lucide-react'
import { useUniverseStore } from '../../store/universeStore'
import { siteConfig } from '../../data/config'
import { soundEffects } from '../../utils/soundEffects'

export const CentralStarModal: React.FC = () => {
  const { activeSection, closeSection, openSection } = useUniverseStore()
  const isOpen = activeSection === 'star'

  if (!isOpen) return null

  const handleClose = () => {
    soundEffects.playStarChime()
    closeSection()
  }

  const handleExplore = () => {
    soundEffects.playUnlock()
    openSection('letters')
  }

  const handleViewCertificate = () => {
    soundEffects.playStarChime()
    openSection('certificate')
  }

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
        {/* Backdrop blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 280 }}
          className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-amber-500/20 bg-gradient-to-b from-slate-900/90 via-purple-950/40 to-black/95 p-6 sm:p-8 shadow-[0_0_80px_rgba(251,191,36,0.15)] text-center text-white"
        >
          {/* Subtle cosmic glow accents */}
          <div className="absolute -top-24 -left-24 h-48 w-48 rounded-full bg-amber-500/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-pink-500/15 blur-3xl pointer-events-none" />

          {/* Close button */}
          <button
            onClick={handleClose}
            aria-label="إغلاق"
            className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
          >
            <X size={18} />
          </button>

          {/* Glowing Star Icon */}
          <div className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center">
            <motion.div
              animate={{ rotate: 360, scale: [1, 1.1, 1] }}
              transition={{ rotate: { duration: 25, repeat: Infinity, ease: 'linear' }, scale: { duration: 3, repeat: Infinity, ease: 'easeInOut' } }}
              className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-400/30 to-pink-500/30 blur-lg"
            />
            <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-tr from-amber-300 to-amber-500 text-slate-950 shadow-[0_0_30px_rgba(251,191,36,0.6)]">
              <Sparkles size={32} />
            </div>
          </div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mb-1"
          >
            <span className="inline-block rounded-full bg-amber-400/10 px-3.5 py-1 text-xs font-medium tracking-widest text-amber-300 uppercase border border-amber-400/20">
              The Heart of the Universe
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-white">
              {siteConfig.girlName} • {siteConfig.starName}
            </h2>
          </motion.div>

          {/* Poetic Message */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="my-6 space-y-3 font-arabic text-base sm:text-lg leading-relaxed text-slate-200"
          >
            <p className="text-amber-200/90 font-medium">
              "أصلًا العالم ده كله بدأ بسبب واحدة اسمها نور."
            </p>
            <p className="text-slate-400 text-sm sm:text-base">
              أو زي ما بحب أقولك دايماً...
            </p>
            <p className="text-xl sm:text-2xl font-bold text-pink-400 tracking-wide pt-1">
              "يا نوري ❤️"
            </p>
            <p className="text-xs sm:text-sm text-slate-400/80 pt-2 px-4 leading-normal">
              كل كوكب ونجمة وتفصيلة في الفضاء ده اتصممت علشان تفضل تفكرك بضحكتك، وتفاصيلك، وقد إيه وجودك نور في حياتي.
            </p>
          </motion.div>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2"
          >
            <button
              onClick={handleExplore}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-amber-400 via-pink-500 to-purple-600 px-6 py-3 font-semibold text-white shadow-[0_0_25px_rgba(236,72,153,0.35)] transition-all hover:scale-105 active:scale-95"
            >
              <Compass size={18} />
              <span>EXPLORE • استكشفي عالمك</span>
            </button>

            <button
              onClick={handleViewCertificate}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-slate-200 backdrop-blur hover:bg-white/10 hover:text-white transition-all active:scale-95"
            >
              <Award size={16} className="text-amber-300" />
              <span>شهادة النجمة الحقيقية</span>
            </button>
          </motion.div>

          {/* Footer note */}
          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-500 font-arabic">
            <Heart size={12} className="text-pink-500 fill-pink-500 animate-pulse" />
            <span>من يحيى إلى نوري • للأبد في سماء الكون</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
