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
        particleCount: 25,
        spread: 45,
        origin: { y: 0.8 },
        colors: ['#f43f5e', '#fb7185', '#fda4af', '#fbcfe8'],
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
    { key: 'final', label: 'النهاية 💫' },
    { key: 'surprise', label: 'مفاجأة 🎁' },
  ]

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-lg"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 260 }}
          className="relative flex h-[92vh] sm:h-[88vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-pink-500/20 bg-slate-950/95 text-white shadow-[0_0_80px_rgba(244,63,94,0.12)]"
        >
          {/* Header */}
          <div className="relative z-10 flex flex-wrap items-center justify-between border-b border-white/10 px-4 sm:px-6 py-3 sm:py-4 bg-slate-900/60 backdrop-blur-md gap-2">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-500/20 text-pink-400 border border-pink-500/30">
                <Sparkles size={20} />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-bold tracking-tight text-white flex items-center gap-2">
                  <span>365 DAYS — 365 LETTERS</span>
                  {devMode && (
                    <span className="flex items-center gap-1 rounded bg-amber-500/20 px-1.5 py-0.5 text-[10px] font-medium text-amber-300 border border-amber-500/30">
                      <ShieldAlert size={10} />
                      DEV UNLOCKED
                    </span>
                  )}
                </h2>
                <p className="text-xs text-slate-400 font-arabic">
                  رسالة يومية مكتوبة مخصوص لنوري • اليوم الحالي: Day {String(currentDay).padStart(3, '0')} / 365
                </p>
              </div>
            </div>

            {/* Toggle Modes & Close */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode(viewMode === 'reader' ? 'grid' : 'reader')}
                className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:bg-white/10 hover:text-white transition-colors"
              >
                <SlidersHorizontal size={14} />
                <span>{viewMode === 'reader' ? 'فهرس كل الأيام' : 'وضع القراءة'}</span>
              </button>

              <button
                onClick={handleClose}
                aria-label="إغلاق"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* MAIN CONTENT AREA */}
          <div className="relative flex-1 overflow-y-auto p-4 sm:p-6 md:p-8">
            {viewMode === 'reader' ? (
              /* ================= READER MODE ================= */
              <div className="mx-auto flex h-full max-w-2xl flex-col justify-between">
                {/* Day Navigator */}
                <div className="flex items-center justify-between mb-4">
                  <button
                    onClick={handlePrevDay}
                    disabled={selectedDay <= 1}
                    className="flex items-center gap-1 rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-xs font-medium text-slate-300 hover:bg-white/10 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
                  >
                    <ChevronRight size={16} />
                    <span>اليوم السابق</span>
                  </button>

                  <div className="text-center">
                    <span className="text-xs font-mono tracking-widest text-pink-400 font-semibold block">
                      DAY {String(selectedDay).padStart(3, '0')} / 365
                    </span>
                    <span className="text-[11px] text-slate-500 font-arabic">
                      {selectedDay === currentDay ? '✨ رسالة النهارده' : selectedDay < currentDay ? 'رسالة سابقة' : 'رسالة قادمة 🔒'}
                    </span>
                  </div>

                  <button
                    onClick={handleNextDay}
                    disabled={selectedDay >= 365}
                    className="flex items-center gap-1 rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-xs font-medium text-slate-300 hover:bg-white/10 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
                  >
                    <span>اليوم التالي</span>
                    <ChevronLeft size={16} />
                  </button>
                </div>

                {/* Day Slider / Fast Jump */}
                <div className="mb-6 px-2">
                  <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono mb-1">
                    <span>Day 001</span>
                    <span className="text-pink-400 font-bold">انتقال سريع: {selectedDay}</span>
                    <span>Day 365</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="365"
                    value={selectedDay}
                    onChange={(e) => setSelectedDay(parseInt(e.target.value, 10))}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-pink-500"
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
                      className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 sm:p-10 text-center shadow-xl backdrop-blur-md"
                    >
                      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-800/80 text-pink-400/80 border border-white/10 shadow-inner">
                        <Lock size={30} />
                      </div>
                      <span className="inline-block rounded-full bg-slate-800 px-3 py-1 font-mono text-xs font-semibold text-slate-400">
                        🔒 Day {String(selectedDay).padStart(3, '0')}
                      </span>
                      <h3 className="mt-4 text-xl sm:text-2xl font-bold font-arabic text-slate-200">
                        "لسه بدري على الرسالة دي يا نوني 😌"
                      </h3>
                      <p className="mt-3 text-sm text-slate-400 font-arabic leading-relaxed max-w-md mx-auto">
                        كل يوم له نوره الخاص.. الرسالة دي هتفتح تلقائياً لما يجي يومها في سماء الكون. خليكي متحمسة ❤️
                      </p>
                      <button
                        onClick={() => setSelectedDay(currentDay)}
                        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-pink-500/20 border border-pink-500/30 px-4 py-2 text-xs font-semibold text-pink-300 hover:bg-pink-500/30 transition-colors"
                      >
                        <Sparkles size={14} />
                        <span>ارجعي لرسالة النهارده (Day {String(currentDay).padStart(3, '0')})</span>
                      </button>
                    </motion.div>
                  ) : (
                    /* Unlocked Letter View */
                    <motion.div
                      key={`unlocked-${selectedDay}`}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35 }}
                      className="relative rounded-3xl border border-pink-500/20 bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-black/95 p-6 sm:p-8 md:p-10 shadow-2xl backdrop-blur-xl"
                    >
                      {/* Top metadata */}
                      <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                        <div className="flex items-center gap-2">
                          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span className="rounded-full bg-pink-500/15 border border-pink-500/25 px-3 py-0.5 text-xs font-medium text-pink-300 font-arabic">
                            {currentLetter.categoryLabel}
                          </span>
                        </div>
                        <span className="font-mono text-xs font-bold tracking-widest text-slate-400">
                          DAY {String(currentLetter.day).padStart(3, '0')}
                        </span>
                      </div>

                      {/* Header hint */}
                      <div className="mb-4">
                        <p className="text-xs sm:text-sm font-arabic font-medium text-pink-300/80">
                          {selectedDay === currentDay
                            ? 'رسالة النهارده ليكي يا نوري ❤️'
                            : 'رسالة صغيرة لنوني...'}
                        </p>
                      </div>

                      {/* Letter message content */}
                      <div className="my-6">
                        <p className="font-arabic text-base sm:text-lg md:text-xl leading-relaxed sm:leading-loose text-slate-100 whitespace-pre-line text-right selection:bg-pink-500/30">
                          {currentLetter.message}
                        </p>
                      </div>

                      {/* Bottom actions */}
                      <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4">
                        <div className="flex items-center gap-2 text-pink-400 text-sm font-arabic">
                          <Heart size={16} className="fill-pink-500 text-pink-500 animate-pulse" />
                          <span className="text-xs text-slate-400">من يحيى لنور</span>
                        </div>

                        {/* Save Button "خليها عندي" */}
                        <motion.button
                          onClick={handleSaveToggle}
                          whileTap={{ scale: 0.93 }}
                          className={`flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs sm:text-sm font-semibold transition-all shadow-md font-arabic ${
                            isSaved
                              ? 'bg-pink-500 text-white shadow-pink-500/30'
                              : 'bg-white/10 border border-white/15 text-slate-200 hover:bg-white/15'
                          }`}
                        >
                          <Bookmark size={15} className={isSaved ? 'fill-white' : ''} />
                          <span>{isSaved ? 'محفوظة عندك ✨' : 'خليها عندي'}</span>
                          {isSavedAnimating && (
                            <motion.span
                              initial={{ scale: 0, opacity: 1 }}
                              animate={{ scale: 2, opacity: 0 }}
                              className="absolute inset-0 rounded-2xl border border-pink-400 pointer-events-none"
                            />
                          )}
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
                      className="w-full rounded-2xl border border-white/10 bg-slate-900/80 pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-pink-500 focus:outline-none font-arabic"
                    />
                  </div>

                  {/* Horizontal Category Scroll */}
                  <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none font-arabic text-xs">
                    {categories.map((cat) => (
                      <button
                        key={cat.key}
                        onClick={() => setActiveCategory(cat.key)}
                        className={`whitespace-nowrap rounded-xl px-3 py-1.5 font-medium transition-all ${
                          activeCategory === cat.key
                            ? 'bg-pink-500 text-white shadow-md shadow-pink-500/30'
                            : 'bg-white/5 border border-white/10 text-slate-400 hover:bg-white/10 hover:text-white'
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
                        className={`relative flex flex-col justify-between rounded-2xl border p-3.5 text-right transition-all font-arabic ${
                          isSelected
                            ? 'border-pink-400 bg-pink-500/20 shadow-[0_0_15px_rgba(244,63,94,0.3)]'
                            : locked
                            ? 'border-white/5 bg-slate-900/40 opacity-60'
                            : 'border-white/10 bg-slate-900/70 hover:border-pink-500/30 hover:bg-slate-800/80'
                        }`}
                      >
                        <div className="flex items-center justify-between w-full mb-2">
                          <span className="font-mono text-[10px] font-bold tracking-widest text-slate-400">
                            #{String(letter.day).padStart(3, '0')}
                          </span>
                          {locked ? (
                            <Lock size={12} className="text-slate-500" />
                          ) : saved ? (
                            <Bookmark size={12} className="text-pink-400 fill-pink-400" />
                          ) : letter.day === currentDay ? (
                            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                          ) : null}
                        </div>

                        <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                          {locked ? 'رسالة مشفرة حتى يحين موعدها...' : letter.message}
                        </p>

                        <div className="mt-2 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-500">
                          <span>{letter.categoryLabel}</span>
                          {letter.day === currentDay && (
                            <span className="text-pink-400 font-bold">اليوم</span>
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
