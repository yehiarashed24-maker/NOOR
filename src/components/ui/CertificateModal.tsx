import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Award, ExternalLink, Sparkles, Compass, Star, Eye } from 'lucide-react'
import { useUniverseStore } from '../../store/universeStore'
import { starCertificateData } from '../../data/certificate'
import { soundEffects } from '../../utils/soundEffects'

export const CertificateModal: React.FC = () => {
  const { activeSection, closeSection } = useUniverseStore()
  const isOpen = activeSection === 'certificate'

  const [activeTab, setActiveTab] = useState<'certificate' | 'astronomy'>('certificate')

  if (!isOpen) return null

  const handleClose = () => {
    soundEffects.playStarChime()
    closeSection()
  }

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
          className="relative flex h-[92vh] sm:h-[88vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-amber-500/30 bg-slate-950/95 text-white shadow-[0_0_90px_rgba(245,158,11,0.18)]"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 bg-slate-900/60 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                <Award size={22} />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-bold tracking-tight text-white flex items-center gap-2">
                  <span>OFFICIAL STAR CERTIFICATE</span>
                  <span className="rounded bg-amber-500/20 px-2 py-0.5 text-[10px] font-bold text-amber-300 border border-amber-500/30">
                    noni star
                  </span>
                </h2>
                <p className="text-xs text-slate-400 font-arabic">
                  شهادة تسجيل وتسمية نجمة رسمية في الفضاء الخارجي باسم نوني
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

          {/* Subheader Tabs */}
          <div className="flex items-center gap-2 px-6 pt-3 pb-1 border-b border-white/5 bg-slate-900/40 text-xs font-arabic">
            <button
              onClick={() => setActiveTab('certificate')}
              className={`rounded-xl px-4 py-2 font-medium transition-all ${
                activeTab === 'certificate'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              📜 وثيقة الشهادة الأصلية
            </button>
            <button
              onClick={() => setActiveTab('astronomy')}
              className={`rounded-xl px-4 py-2 font-medium transition-all ${
                activeTab === 'astronomy'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              🔭 الإحداثيات الفلكية والموقع في الفضاء
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8">
            {activeTab === 'certificate' ? (
              <div className="space-y-6">
                {/* Dedication Banner */}
                <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 text-center font-arabic leading-relaxed text-amber-200 text-sm sm:text-base">
                  <Sparkles size={18} className="inline mr-2 text-amber-400" />
                  {starCertificateData.arabicDedication}
                </div>

                {/* Certificate Display Card */}
                <div className="relative mx-auto max-w-2xl overflow-hidden rounded-2xl border-2 border-amber-400/40 bg-black shadow-2xl">
                  <img
                    src="/images/star-certificate.png"
                    alt="Staracle International Star Directory Certificate - noni star"
                    className="w-full h-auto object-contain block"
                    onError={(e) => {
                      // Fallback visual if image file is loading
                      e.currentTarget.style.display = 'none'
                    }}
                  />

                  {/* Fallback & details overlay */}
                  <div className="p-6 bg-gradient-to-t from-black via-slate-950/90 to-transparent">
                    <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
                      <div>
                        <span className="text-slate-400 block font-mono text-[10px]">REGISTERED NAME:</span>
                        <span className="text-lg font-bold text-amber-300 tracking-wider font-mono">
                          {starCertificateData.starName}
                        </span>
                      </div>

                      <div>
                        <span className="text-slate-400 block font-mono text-[10px]">CONSTELLATION:</span>
                        <span className="text-sm font-semibold text-slate-200">
                          {starCertificateData.constellation}
                        </span>
                      </div>

                      <a
                        href={starCertificateData.registryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-xl bg-amber-500/20 border border-amber-500/40 px-3 py-1.5 text-xs font-semibold text-amber-300 hover:bg-amber-500/30 transition-all"
                      >
                        <ExternalLink size={13} />
                        <span>تحقق من السجل العالمي (Staracle)</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Astronomical Data Tab */
              <div className="space-y-6 max-w-2xl mx-auto">
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-bold font-arabic text-amber-300">
                    موقع نجمة "نوني" في كوكبة القوس
                  </h3>
                  <p className="text-xs text-slate-400 font-arabic">
                    البيانات العلمية المعتمدة لنجمتك في UCAC3 Catalog والفهرس الفلكي
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                    <span className="text-xs text-slate-400 font-mono">Right Ascension (الميل المستقيم)</span>
                    <p className="mt-1 text-base font-bold text-white font-mono">{starCertificateData.rightAscension}</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                    <span className="text-xs text-slate-400 font-mono">Declination (الميل الزاوي)</span>
                    <p className="mt-1 text-base font-bold text-white font-mono">{starCertificateData.declination}</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                    <span className="text-xs text-slate-400 font-mono">Magnitude (القدر الظاهري)</span>
                    <p className="mt-1 text-base font-bold text-white font-mono">{starCertificateData.magnitude}</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                    <span className="text-xs text-slate-400 font-mono">Catalog Number (رقم الفهرس)</span>
                    <p className="mt-1 text-base font-bold text-white font-mono">{starCertificateData.catalogNumber}</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5 text-right font-arabic text-sm text-slate-300 leading-relaxed space-y-2">
                  <p>
                    🌟 <strong>نجمة نوني (noni star)</strong> هي نجمة سماوية حقيقية مسجلة رسميًا في سجل النجوم الدولي (Staracle International Star Directory) بتاريخ <strong>27 سبتمبر 2026</strong>.
                  </p>
                  <p className="text-slate-400 text-xs">
                    موجودة ضمن حدود كوكبة القوس (Sagittarius)، وموثقة إلى الأبد علشان لما تبصي في السماء في أي ليلة، تعرفي إن ليكي نجمة بتلمع باسمك في الكون.
                  </p>
                </div>

                <div className="text-center pt-2">
                  <a
                    href={starCertificateData.registryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all"
                  >
                    <ExternalLink size={16} />
                    <span>فتح شهادة Staracle الرسمية (Online)</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
