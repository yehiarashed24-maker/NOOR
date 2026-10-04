import React from 'react'
import { motion } from 'framer-motion'
import { Award, Mail, Sparkles, ExternalLink, Heart, Calendar } from 'lucide-react'
import { useUniverseStore } from '../store/universeStore'
import { starCertificateData } from '../data/certificate'
import { lettersData } from '../data/letters'
import { soundEffects } from '../utils/soundEffects'

export const NoniStarAndLetters: React.FC = () => {
  const { openSection, currentDay } = useUniverseStore()

  const todayLetter = lettersData.find((l) => l.day === currentDay) || lettersData[0]

  const handleOpenCertificate = () => {
    soundEffects.playStarChime()
    openSection('certificate')
  }

  const handleOpenLetters = () => {
    soundEffects.playStarChime()
    openSection('letters')
  }

  return (
    <section className="relative py-6 sm:py-8 px-4 sm:px-6 max-w-5xl mx-auto font-arabic space-y-6">
      {/* ================= 1. NONI STAR CERTIFICATE SHOWCASE ================= */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl border border-amber-300/60 bg-gradient-to-br from-white/95 via-amber-50/60 to-rose-50/70 p-5 sm:p-7 shadow-[0_15px_40px_-15px_rgba(245,158,11,0.12)] backdrop-blur-xl"
      >
        <div className="absolute top-0 right-0 h-40 w-40 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 h-40 w-40 bg-rose-200/30 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left / Certificate Visual */}
          <div className="md:col-span-5 flex justify-center">
            <motion.div
              whileHover={{ scale: 1.03 }}
              onClick={handleOpenCertificate}
              className="relative cursor-pointer group rounded-2xl overflow-hidden border-2 border-amber-400/50 shadow-xl bg-black max-w-[260px] sm:max-w-[280px]"
            >
              <img
                src="/images/star-certificate.png"
                alt="Staracle International Star Directory - noni star"
                className="w-full h-auto object-contain block transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4 text-white opacity-90 group-hover:opacity-100 transition-opacity">
                <div>
                  <span className="text-[10px] text-amber-300 font-mono block">OFFICIAL STARACLE RECORD</span>
                  <span className="text-sm font-bold font-mono">noni star ⭐</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right / Story & Details */}
          <div className="md:col-span-7 text-right space-y-4">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 text-xs font-semibold text-amber-800">
              <Award size={14} className="text-amber-600" />
              <span>شهادة تسجيل نجمة حقيقية في السماء</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#3A2630] leading-snug">
              نجمة "نوني" في كوكبة القوس ⭐
            </h3>

            <p className="text-sm sm:text-base text-[#6b4759] leading-relaxed">
              في يوم <strong>4 أكتوبر 2026 (4-10-2026)</strong>، اتسجلت ليكي نجمة حقيقية في الفضاء الخارجي في السجل الدولي للنجوم باسم <strong>"noni star"</strong> علشان تفضل بتلمع في السماء باسمك على طول.
            </p>

            <div className="grid grid-cols-2 gap-2 text-xs font-mono text-slate-700 bg-white/70 rounded-2xl p-3 border border-amber-200">
              <div>
                <span className="text-slate-400 text-[10px] block">الكوكبة:</span>
                <span className="font-semibold text-[#3A2630]">Sagittarius (Archer)</span>
              </div>
              <div>
                <span className="text-slate-400 text-[10px] block">رقم السجل:</span>
                <span className="font-semibold text-[#3A2630]">58707741 UCAC3</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={handleOpenCertificate}
                className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all"
              >
                <Award size={16} />
                <span>عرض وثيقة الشهادة كاملة ⭐</span>
              </button>

              <a
                href={starCertificateData.registryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-2xl border border-amber-300 bg-white/80 px-4 py-3 text-xs font-semibold text-amber-900 hover:bg-white transition-all"
              >
                <ExternalLink size={13} />
                <span>التحقق من السجل الدولي</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ================= 2. 365 DAYS — 365 LETTERS SHOWCASE ================= */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative overflow-hidden rounded-3xl border border-pink-300/60 bg-gradient-to-br from-white/95 via-rose-50/70 to-pink-50/80 p-5 sm:p-7 shadow-[0_15px_40px_-15px_rgba(244,63,94,0.12)] backdrop-blur-xl"
      >
        <div className="absolute top-0 left-0 h-40 w-40 bg-pink-200/30 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-pink-200/60">
          <div className="text-right space-y-1">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 px-3.5 py-1 text-xs font-semibold text-pink-700">
              <Mail size={14} className="text-pink-600" />
              <span>⏳ 365 DAYS — 365 LETTERS</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#3A2630]">
              رسالة لكل يوم في السنة لنوري ❤️
            </h3>
            <p className="text-xs sm:text-sm text-[#7c4d63]">
              365 رسالة حقيقية بالعامية المصرية.. رسالة بتفتح كل يوم تلقائيًا لنور.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-white border border-pink-200 px-4 py-2.5 text-center shadow-sm">
              <span className="text-[10px] text-slate-400 block font-mono">CURRENT DAY</span>
              <span className="text-lg font-bold font-mono text-pink-600">
                DAY {String(currentDay).padStart(3, '0')} / 365
              </span>
            </div>

            <button
              onClick={handleOpenLetters}
              className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-600 px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-pink-500/25 hover:scale-105 active:scale-95 transition-all"
            >
              <Mail size={16} />
              <span>افتحي رسايل الـ 365 💌</span>
            </button>
          </div>
        </div>

        {/* Today's Snippet Preview Card */}
        <div className="mt-6 rounded-2xl bg-white/80 border border-pink-200/80 p-5 sm:p-6 text-right space-y-3 shadow-inner">
          <div className="flex items-center justify-between border-b border-pink-100 pb-2.5">
            <span className="rounded-full bg-pink-100 px-3 py-0.5 text-xs font-semibold text-pink-700">
              {todayLetter.categoryLabel}
            </span>
            <span className="font-mono text-xs text-slate-400">
              رسالة اليوم (Day {String(currentDay).padStart(3, '0')})
            </span>
          </div>

          <p className="text-base sm:text-lg text-[#3A2630] leading-relaxed font-arabic selection:bg-pink-100">
            "{todayLetter.message}"
          </p>

          <div className="flex items-center justify-between pt-2 text-xs text-slate-400">
            <span className="flex items-center gap-1 text-pink-500 font-semibold">
              <Heart size={13} className="fill-pink-500" />
              <span>من يحيى لنور</span>
            </span>

            <button
              onClick={handleOpenLetters}
              className="text-pink-600 hover:text-pink-700 font-bold hover:underline"
            >
              قراءة المزيد والبحث في الأيام ←
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
