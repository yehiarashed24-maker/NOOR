import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  X, Lock, Sparkles, Heart, Bookmark, ChevronLeft, ChevronRight, 
  Search, SlidersHorizontal, ShieldAlert
} from 'lucide-react'
import { useUniverseStore } from '../../store/universeStore'
import { lettersData } from '../../data/letters'
import { soundEffects } from '../../utils/soundEffects'
import confetti from 'canvas-confetti'

export const LettersModal: React.FC = () => {
  const { 
    activeSection, 
    closeSection, 
    currentDay, 
    savedLetters, 
    toggleSaveLetter, 
    devMode 
  } = useUniverseStore()

  const isOpen = activeSection === 'letters'

  // Selected day state
  const [selectedDay, setSelectedDay] = useState<number>(currentDay)
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [isSavedAnimating, setIsSavedAnimating] = useState<boolean>(false)
  const [viewMode, setViewMode] = useState<'reader' | 'grid'>('reader')

  // Find letter for selected day
  const currentLetter = useMemo(() => {
    return lettersData.find((l) => l.day === selectedDay) || lettersData[0]
  }, [selectedDay])

  // Is letter locked?
  const isLocked = useMemo(() => {
    if (devMode) return false
    return selectedDay > currentDay
  }, [devMode, selectedDay, currentDay])

  // Filtered letters list for grid mode
  const filteredLetters = useMemo(() => {
    return lettersData.filter((letter) => {
      const matchesCategory =
        activeCategory === 'all'
          ? true
          : activeCategory === 'saved'
          ? savedLetters.includes(letter.day)
          : letter.category === activeCategory

      const matchesSearch =
        searchQuery.trim() === ''
          ? true
          : letter.message.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (letter.categoryLabel || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
            letter.day.toString().includes(searchQuery)

      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchQuery, savedLetters])

  if (!isOpen) return null

  const handleClose = () => {
    soundEffects.playStarChime()
    closeSection()
  }

  const handleNextDay = () => {
    if (selectedDay < 365) {
      soundEffects.playStarChime()
      setSelectedDay((prev) => prev + 1)
    }
  }

  const handlePrevDay = () => {
    if (selectedDay > 1) {
      soundEffects.playStarChime()
      setSelectedDay((prev) => prev - 1)
    }
  }

  const handleSaveToggle = () => {
    soundEffects.playPlanetResonance()
    toggleSaveLetter(selectedDay)
    setIsSavedAnimating(true)
    setTimeout(() => setIsSavedAnimating(false), 1000)

    if (!savedLetters.includes(selectedDay)) {
      confetti({
        particleCount: 30,
        spread: 50,
        origin: { y: 0.8 },
        colors: ['#FF6FA5', '#FF9FC5', '#FFD6E7', '#C94F7C'],
      })
    }
  }

  const isSaved = savedLetters.includes(selectedDay)

  const categories: { key: string; label: string }[] = [
    { key: 'all', label: 'كل الرسائل' },
    { key: 'saved', label: `محفوظاتي (${savedLetters.length})` },
    { key: 'love', label: 'حب ❤️' },
    { key: 'morning', label: 'صباح الخير ☀️' },
    { key: 'night', label: 'قبل النوم 🌙' },
    { key: 'missing', label: 'وحشتيني 💭' },
    { key: 'funny', label: 'ضحك وعفوي 😂' },
    { key: 'emotional', label: 'مشاعر 🥹' },
    { key: 'appreciation', label: 'تقدير وامتنان 🫶' },
    { key: 'deep', label: 'كلام عميق 🧠' },
    { key: 'future', label: 'أيامنا الجاية 💌' },
    { key: 'cute', label: 'رسائل سريعة 🥰' },
    { key: 'difficult_days', label: 'لأيامك الصعبة 🤍' },
    { key: 'open_when', label: 'افتحي لما... 🕊️' },
    { key: 'special', label: 'مميز 🌟' },
  ]

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
          className="relative flex h-[92vh] sm:h-[88vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-[#FFD6E7] bg-white/95 backdrop-blur-2xl text-[#3A2630] shadow-[0_25px_60px_-15px_rgba(255,111,165,0.3)]"
        >
          {/* Header */}
          <div className="relative z-10 flex flex-wrap items-center justify-between border-b border-[#FFD6E7]/80 px-4 sm:px-6 py-3 sm:py-4 bg-[#FFF8FB]/90 backdrop-blur-md gap-2">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-pink-100 text-pink-600 border border-pink-200 shadow-sm">
                <Sparkles size={20} />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-bold tracking-tight text-[#3A2630] flex items-center gap-2">
                  <span>365 DAYS — 365 LETTERS</span>
                  {devMode && (
                    <span className="flex items-center gap-1 rounded bg-amber-100 px-1.5 py-0.5 text-[10px] font-medium text-amber-800 border border-amber-300">
                      <ShieldAlert size={10} />
                      DEV UNLOCKED
                    </span>
                  )}
                </h2>
                <p className="text-xs text-[#7c4d63]">
                  رسالة يومية مكتوبة مخصوص لنوري • اليوم الحالي: Day {String(currentDay).padStart(3, '0')} / 365
                </p>
              </div>
            </div>

            {/* Toggle Modes & Close */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode(viewMode === 'reader' ? 'grid' : 'reader')}
                className="flex items-center gap-1.5 rounded-xl border border-[#FFD6E7] bg-white px-3 py-1.5 text-xs font-semibold text-[#3A2630] hover:bg-[#FFD6E7]/40 transition-colors shadow-sm"
              >
                <SlidersHorizontal size={14} className="text-pink-600" />
                <span>{viewMode === 'reader' ? 'فهرس كل الأيام' : 'وضع القراءة'}</span>
              </button>

              <button
                onClick={handleClose}
                aria-label="إغلاق"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white border border-[#FFD6E7] text-[#3A2630]/70 hover:bg-[#FFD6E7] hover:text-[#C94F7C] transition-colors shadow-sm"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* MAIN CONTENT AREA */}
          <div className="relative flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 bg-[#FFF8FB]/30">
            {viewMode === 'reader' ? (
              /* ================= READER MODE ================= */
              <div className="mx-auto flex h-full max-w-2xl flex-col justify-between">
                {/* Day Navigator */}
                <div className="flex items-center justify-between mb-4">
                  <button
                    onClick={handlePrevDay}
                    disabled={selectedDay <= 1}
                    className="flex items-center gap-1 rounded-xl bg-white border border-[#FFD6E7] px-3.5 py-2 text-xs font-semibold text-[#3A2630] hover:bg-[#FFD6E7]/40 disabled:opacity-40 disabled:pointer-events-none transition-colors shadow-sm"
                  >
                    <ChevronRight size={16} />
                    <span>اليوم السابق</span>
                  </button>

                  <div className="text-center">
                    <span className="text-xs font-mono tracking-widest text-[#C94F7C] font-bold block">
                      DAY {String(selectedDay).padStart(3, '0')} / 365
                    </span>
                    <span className="text-[11px] text-[#7c4d63]">
                      {selectedDay === currentDay ? '✨ رسالة النهارده' : selectedDay < currentDay ? 'رسالة سابقة' : 'رسالة قادمة 🔒'}
                    </span>
                  </div>

                  <button
                    onClick={handleNextDay}
                    disabled={selectedDay >= 365}
                    className="flex items-center gap-1 rounded-xl bg-white border border-[#FFD6E7] px-3.5 py-2 text-xs font-semibold text-[#3A2630] hover:bg-[#FFD6E7]/40 disabled:opacity-40 disabled:pointer-events-none transition-colors shadow-sm"
                  >
                    <span>اليوم التالي</span>
                    <ChevronLeft size={16} />
                  </button>
                </div>

                {/* Day Slider / Fast Jump */}
                <div className="mb-6 px-2">
                  <div className="flex items-center justify-between text-[11px] text-[#7c4d63] font-mono mb-1">
                    <span>Day 001</span>
                    <span className="text-[#C94F7C] font-bold">انتقال سريع: {selectedDay}</span>
                    <span>Day 365</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="365"
                    value={selectedDay}
                    onChange={(e) => setSelectedDay(parseInt(e.target.value, 10))}
                    className="w-full h-1.5 bg-[#FFD6E7] rounded-lg appearance-none cursor-pointer accent-[#C94F7C]"
                  />
                </div>

                {/* The Letter Card or Lock Screen */}
                <div className="flex-1 flex flex-col justify-center">
                  {isLocked ? (
                    /* Locked Message Screen */
                    <motion.div
                      key={`locked-${selectedDay}`}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="rounded-3xl border border-[#FFD6E7] bg-white p-8 sm:p-10 text-center shadow-lg"
                    >
                      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-rose-50 text-[#C94F7C] border border-rose-200 shadow-inner">
                        <Lock size={30} />
                      </div>
                      <span className="inline-block rounded-full bg-rose-50 px-3 py-1 font-mono text-xs font-semibold text-[#C94F7C] border border-rose-100">
                        🔒 Day {String(selectedDay).padStart(3, '0')}
                      </span>
                      <h3 className="mt-4 text-xl sm:text-2xl font-bold text-[#3A2630]">
                        "لسه بدري على الرسالة دي يا نوني 😌"
                      </h3>
                      <p className="mt-3 text-sm text-[#7c4d63] leading-relaxed max-w-md mx-auto">
                        كل يوم له رسالته الخاصة.. الرسالة دي هتفتح تلقائياً لما يجي يومها. خليكي متحمسة ❤️
                      </p>
                      <button
                        onClick={() => setSelectedDay(currentDay)}
                        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-pink-100 border border-pink-200 px-4 py-2 text-xs font-semibold text-[#C94F7C] hover:bg-pink-200 transition-colors shadow-sm"
                      >
                        <Sparkles size={14} />
                        <span>ارجعي لرسالة النهارده (Day {String(currentDay).padStart(3, '0')})</span>
                      </button>
                    </motion.div>
                  ) : (
                    /* Unlocked Letter View in Warm Theme */
                    <motion.div
                      key={`unlocked-${selectedDay}`}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35 }}
                      className="relative rounded-3xl border border-[#FFD6E7] bg-white p-6 sm:p-8 md:p-10 shadow-lg"
                    >
                      {/* Top metadata */}
                      <div className="flex items-center justify-between border-b border-[#FFD6E7]/60 pb-4 mb-6">
                        <div className="flex items-center gap-2">
                          <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                          <span className="rounded-full bg-pink-50 border border-pink-200 px-3 py-0.5 text-xs font-semibold text-[#C94F7C]">
                            {currentLetter.categoryLabel}
                          </span>
                        </div>
                        <span className="font-mono text-xs font-bold tracking-widest text-[#7c4d63]">
                          DAY {String(currentLetter.day).padStart(3, '0')}
                        </span>
                      </div>

                      {/* Header hint */}
                      <div className="mb-4">
                        <p className="text-xs sm:text-sm font-semibold text-[#C94F7C]">
                          {selectedDay === currentDay
                            ? 'رسالة النهارده ليكي يا نوري ❤️'
                            : 'رسالة صغيرة لنوني...'}
                        </p>
                      </div>

                      {/* Letter message content */}
                      <div className="my-6">
                        <p className="text-base sm:text-lg md:text-xl leading-relaxed sm:leading-loose text-[#3A2630] whitespace-pre-line text-right selection:bg-[#FFD6E7]">
                          {currentLetter.message}
                        </p>
                      </div>

                      {/* Bottom actions */}
                      <div className="mt-8 flex items-center justify-between border-t border-[#FFD6E7]/60 pt-4">
                        <div className="flex items-center gap-2 text-[#C94F7C] text-sm">
                          <Heart size={16} className="fill-[#FF6FA5] text-[#FF6FA5] animate-pulse" />
                          <span className="text-xs text-[#7c4d63]">من يحيى لنور</span>
                        </div>

                        {/* Save Button "خليها عندي" */}
                        <motion.button
                          onClick={handleSaveToggle}
                          whileTap={{ scale: 0.93 }}
                          className={`flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs sm:text-sm font-semibold transition-all shadow-sm ${
                            isSaved
                              ? 'bg-[#C94F7C] text-white shadow-[#C94F7C]/30'
                              : 'bg-white border border-[#FFD6E7] text-[#3A2630] hover:bg-[#FFD6E7]/40'
                          }`}
                        >
                          <Bookmark size={15} className={isSaved ? 'fill-white' : ''} />
                          <span>{isSaved ? 'محفوظة عندك ✨' : 'خليها عندي'}</span>
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            ) : (
              /* ================= GRID / INDEX MODE ================= */
              <div className="space-y-6">
                {/* Search & Category Filter Pills */}
                <div className="space-y-3">
                  <div className="relative">
                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="ابحثي في رسائل الـ 365 يوم..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full rounded-2xl border border-[#FFD6E7] bg-white pl-10 pr-4 py-2.5 text-sm text-[#3A2630] placeholder-slate-400 focus:border-[#C94F7C] focus:outline-none shadow-sm"
                    />
                  </div>

                  {/* Horizontal Category Scroll */}
                  <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs">
                    {categories.map((cat) => (
                      <button
                        key={cat.key}
                        onClick={() => setActiveCategory(cat.key)}
                        className={`whitespace-nowrap rounded-xl px-3 py-1.5 font-semibold transition-all ${
                          activeCategory === cat.key
                            ? 'bg-[#C94F7C] text-white shadow-sm shadow-[#C94F7C]/20'
                            : 'bg-white border border-[#FFD6E7] text-[#7c4d63] hover:bg-pink-50'
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Letters Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {filteredLetters.map((letter) => {
                    const locked = !devMode && letter.day > currentDay
                    const isSelected = letter.day === selectedDay
                    const saved = savedLetters.includes(letter.day)

                    return (
                      <motion.button
                        key={letter.day}
                        onClick={() => {
                          setSelectedDay(letter.day)
                          setViewMode('reader')
                          soundEffects.playStarChime()
                        }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`relative flex flex-col justify-between rounded-2xl border p-3.5 text-right transition-all shadow-sm ${
                          isSelected
                            ? 'border-[#C94F7C] bg-pink-50/80 shadow-md ring-1 ring-[#C94F7C]'
                            : locked
                            ? 'border-slate-200 bg-slate-50/70 opacity-60'
                            : 'border-[#FFD6E7] bg-white hover:border-[#FF9FC5] hover:bg-pink-50/30'
                        }`}
                      >
                        <div className="flex items-center justify-between w-full mb-2">
                          <span className="font-mono text-[10px] font-bold tracking-widest text-[#7c4d63]">
                            #{String(letter.day).padStart(3, '0')}
                          </span>
                          {locked ? (
                            <Lock size={12} className="text-slate-400" />
                          ) : saved ? (
                            <Bookmark size={12} className="text-[#C94F7C] fill-[#C94F7C]" />
                          ) : letter.day === currentDay ? (
                            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                          ) : null}
                        </div>

                        <p className="text-xs text-[#3A2630] line-clamp-2 leading-relaxed">
                          {locked ? 'رسالة مشفرة حتى يحين موعدها...' : letter.message}
                        </p>

                        <div className="mt-2 pt-2 border-t border-[#FFD6E7]/50 flex items-center justify-between text-[10px] text-[#7c4d63]">
                          <span>{letter.categoryLabel}</span>
                          {letter.day === currentDay && (
                            <span className="text-[#C94F7C] font-bold">اليوم</span>
                          )}
                        </div>
                      </motion.button>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
