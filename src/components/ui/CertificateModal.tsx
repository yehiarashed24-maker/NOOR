import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Award, ExternalLink, Sparkles } from 'lucide-react'
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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 font-arabic selection:bg-[#FFD6E7] selection:text-[#C94F7C]">
        {/* Soft Warm Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="absolute inset-0 bg-black/40 backdrop-blur-md"
        />

        {/* Modal Window in Soft Romantic Theme */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 260 }}
          className="relative flex h-[90vh] sm:h-[86vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-[#FFD6E7] bg-white/95 backdrop-blur-2xl text-[#3A2630] shadow-[0_25px_60px_-15px_rgba(255,111,165,0.3)]"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#FFD6E7]/80 px-6 py-4 bg-[#FFF8FB]/90 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-100 text-amber-600 border border-amber-200 shadow-sm">
                <Award size={22} />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-bold tracking-tight text-[#3A2630] flex items-center gap-2">
                  <span>شهادة تسجيل النجمة الرسمية</span>
                  <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-bold text-amber-800 border border-amber-300">
                    noni star ⭐
                  </span>
                </h2>
                <p className="text-xs text-[#7c4d63]">
                  سجل النجوم الدولي • كوكبة القوس (Sagittarius) • تاريخ 4-10-2026
                </p>
              </div>
            </div>

            <button
              onClick={handleClose}
              aria-label="إغلاق"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white border border-[#FFD6E7] text-[#3A2630]/70 hover:bg-[#FFD6E7] hover:text-[#C94F7C] transition-colors shadow-sm"
            >
              <X size={18} />
            </button>
          </div>

          {/* Subheader Tabs */}
          <div className="flex items-center gap-2 px-6 pt-3 pb-2 border-b border-[#FFD6E7]/50 bg-[#FFF8FB]/60 text-xs">
            <button
              onClick={() => setActiveTab('certificate')}
              className={`rounded-xl px-4 py-2 font-semibold transition-all ${
                activeTab === 'certificate'
                  ? 'bg-amber-500 text-white shadow-sm shadow-amber-500/20'
                  : 'text-[#3A2630]/70 hover:bg-white/80'
              }`}
            >
              📜 وثيقة الشهادة الأصلية
            </button>
            <button
              onClick={() => setActiveTab('astronomy')}
              className={`rounded-xl px-4 py-2 font-semibold transition-all ${
                activeTab === 'astronomy'
                  ? 'bg-amber-500 text-white shadow-sm shadow-amber-500/20'
                  : 'text-[#3A2630]/70 hover:bg-white/80'
              }`}
            >
              🔭 الإحداثيات الفلكية والموقع في السماء
            </button>
          </div>

          {/* Content Body */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 bg-[#FFF8FB]/30">
            {activeTab === 'certificate' ? (
              <div className="space-y-6">
                {/* Dedication Banner */}
                <div className="rounded-2xl border border-amber-200 bg-amber-50/80 p-4 text-center font-arabic leading-relaxed text-amber-900 text-sm sm:text-base shadow-sm">
                  <Sparkles size={18} className="inline mr-2 text-amber-500" />
                  {starCertificateData.arabicDedication}
                </div>

                {/* Certificate Display Card */}
                <div className="relative mx-auto max-w-2xl overflow-hidden rounded-2xl border-2 border-amber-300 shadow-xl bg-white">
                  <img
                    src="/images/star-certificate.png"
                    alt="Staracle International Star Directory Certificate - noni star"
                    className="w-full h-auto object-contain block"
                  />

                  {/* Details strip */}
                  <div className="p-4 sm:p-5 bg-white border-t border-amber-100 flex flex-wrap items-center justify-between gap-3 text-xs">
                    <div>
                      <span className="text-slate-400 block font-mono text-[10px]">REGISTERED NAME:</span>
                      <span className="text-base font-bold text-amber-700 font-mono">
                        {starCertificateData.starName}
                      </span>
                    </div>

                    <div>
                      <span className="text-slate-400 block font-mono text-[10px]">CONSTELLATION:</span>
                      <span className="text-sm font-semibold text-[#3A2630]">
                        {starCertificateData.constellation}
                      </span>
                    </div>

                    <a
                      href={starCertificateData.registryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-xl bg-amber-500 px-3.5 py-2 text-xs font-semibold text-white shadow-sm hover:bg-amber-600 transition-all"
                    >
                      <ExternalLink size={13} />
                      <span>تحقق من السجل الدولي (Staracle)</span>
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              /* Astronomical Data Tab */
              <div className="space-y-6 max-w-2xl mx-auto">
                <div className="text-center space-y-1">
                  <h3 className="text-xl font-bold text-[#3A2630]">
                    موقع نجمة "نوني" في كوكبة القوس
                  </h3>
                  <p className="text-xs text-[#7c4d63]">
                    البيانات الفلكية المعتمدة رسمياً في UCAC3 Catalog
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-amber-200 bg-white p-4 shadow-sm">
                    <span className="text-xs text-[#7c4d63] font-mono">Right Ascension (الميل المستقيم)</span>
                    <p className="mt-1 text-base font-bold text-[#3A2630] font-mono">{starCertificateData.rightAscension}</p>
                  </div>

                  <div className="rounded-2xl border border-amber-200 bg-white p-4 shadow-sm">
                    <span className="text-xs text-[#7c4d63] font-mono">Declination (الميل الزاوي)</span>
                    <p className="mt-1 text-base font-bold text-[#3A2630] font-mono">{starCertificateData.declination}</p>
                  </div>

                  <div className="rounded-2xl border border-amber-200 bg-white p-4 shadow-sm">
                    <span className="text-xs text-[#7c4d63] font-mono">Magnitude (القدر الظاهري)</span>
                    <p className="mt-1 text-base font-bold text-[#3A2630] font-mono">{starCertificateData.magnitude}</p>
                  </div>

                  <div className="rounded-2xl border border-amber-200 bg-white p-4 shadow-sm">
                    <span className="text-xs text-[#7c4d63] font-mono">Catalog Number (رقم الفهرس)</span>
                    <p className="mt-1 text-base font-bold text-[#3A2630] font-mono">{starCertificateData.catalogNumber}</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-[#FFD6E7] bg-white p-5 text-right text-sm text-[#3A2630] leading-relaxed space-y-2 shadow-sm">
                  <p>
                    🌟 <strong>نجمة نوني (noni star)</strong> هي نجمة سماوية حقيقية مسجلة رسميًا في سجل النجوم الدولي (Staracle International Star Directory) بتاريخ <strong>4 أكتوبر 2026 (4-10-2026)</strong>.
                  </p>
                  <p className="text-[#7c4d63] text-xs">
                    موجودة ضمن حدود كوكبة القوس (Sagittarius)، وموثقة إلى الأبد علشان لما تبصي في السماء في أي ليلة، تعرفي إن ليكي نجمة بتلمع باسمك في الكون.
                  </p>
                </div>

                <div className="text-center pt-2">
                  <a
                    href={starCertificateData.registryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3 font-semibold text-white shadow-md hover:scale-105 active:scale-95 transition-all"
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
