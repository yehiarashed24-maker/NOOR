import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Award, Compass, Heart, ExternalLink } from 'lucide-react'
import { useUniverseStore } from '../store/universeStore'
import { soundEffects } from '../utils/soundEffects'
import { starCertificateData } from '../data/certificate'

export const UniverseBanner: React.FC = () => {
  const { openUniverse, openSection } = useUniverseStore()

  const handleOpenUniverse = () => {
    soundEffects.playPlanetResonance()
    openUniverse()
  }

  const handleOpenCertificate = () => {
    soundEffects.playStarChime()
    openSection('certificate')
  }

  return (
    <section className="relative py-16 px-4 sm:px-6 max-w-5xl mx-auto font-arabic">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden rounded-3xl border border-purple-500/20 bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950/80 p-8 sm:p-12 text-white shadow-[0_20px_60px_-15px_rgba(168,85,247,0.3)] text-center"
      >
        {/* Glow Spheres */}
        <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-pink-500/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl pointer-events-none" />

        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 px-3.5 py-1 text-xs font-semibold text-amber-300">
            <Award size={13} />
            <span>نجمة مسجلة رسميًا باسم: noni star</span>
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-pink-400/10 border border-pink-400/30 px-3.5 py-1 text-xs font-semibold text-pink-300">
            <Sparkles size={13} />
            <span>A Little Universe Made For Noor</span>
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-4">
          عالم نور ثلاثي الأبعاد • 3D Universe
        </h2>

        {/* Narrative */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
          موقع تقليدي مكنش هيكفي.. عشان كده بنيت ليكي عالم فضائي كامل ثلاثي الأبعاد، فيه نجمتك الرئيسية، وكواكب تدور حواليكي، ونظام 365 رسالة يومية، وكوكبة ذكرياتنا وسر مخبي ليكي.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Open Universe Button */}
          <motion.button
            onClick={handleOpenUniverse}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 px-7 py-3.5 font-bold text-white shadow-[0_0_30px_rgba(236,72,153,0.4)] transition-all"
          >
            <Compass size={18} />
            <span>ادخلي عالم نور 🌌 (3D Experience)</span>
          </motion.button>

          {/* View Certificate Button */}
          <button
            onClick={handleOpenCertificate}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur hover:bg-white/15 hover:text-white transition-all"
          >
            <Award size={18} className="text-amber-400" />
            <span>عرض شهادة النجمة الرسمية ⭐</span>
          </button>
        </div>

        {/* Footer info */}
        <div className="mt-8 flex items-center justify-center gap-3 text-xs text-slate-400">
          <span>كوكبة القوس (Sagittarius)</span>
          <span>•</span>
          <span>{starCertificateData.dateNamed}</span>
          <span>•</span>
          <span className="text-pink-400 flex items-center gap-1">
            <span>من يحيى لنوري</span>
            <Heart size={12} className="fill-pink-500" />
          </span>
        </div>
      </motion.div>
    </section>
  )
}
