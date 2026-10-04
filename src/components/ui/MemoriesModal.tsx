import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Sparkles, Calendar, Heart, Image as ImageIcon, Star } from 'lucide-react'
import { useUniverseStore } from '../../store/universeStore'
import { memoriesData, Memory } from '../../data/memories'
import { soundEffects } from '../../utils/soundEffects'

export const MemoriesModal: React.FC = () => {
  const { activeSection, closeSection } = useUniverseStore()
  const isOpen = activeSection === 'memories'

  const [selectedMemory, setSelectedMemory] = useState<Memory>(memoriesData[0])

  if (!isOpen) return null

  const handleClose = () => {
    soundEffects.playStarChime()
    closeSection()
  }

  const handleSelect = (mem: Memory) => {
    soundEffects.playStarChime()
    setSelectedMemory(mem)
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
          className="relative flex h-[90vh] sm:h-[85vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-purple-500/20 bg-slate-950/95 text-white shadow-[0_0_80px_rgba(168,85,247,0.15)]"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 bg-slate-900/60 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/30">
                <Sparkles size={20} />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-bold tracking-tight text-white">
                  ✨ OUR MEMORIES CONSTELLATION
                </h2>
                <p className="text-xs text-slate-400 font-arabic">
                  كوكبة ذكرياتنا • كل نجمة بتحكي لحظة حلوة بين يحيى ونور
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

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left Column: Constellation Stars List */}
              <div className="lg:col-span-5 space-y-2.5">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 px-1">
                  نجوم الكوكبة (اضغطي للاستكشاف)
                </div>

                {memoriesData.map((mem) => {
                  const isSelected = selectedMemory.id === mem.id
                  return (
                    <button
                      key={mem.id}
                      onClick={() => handleSelect(mem)}
                      className={`w-full text-right rounded-2xl border p-3.5 transition-all flex items-center justify-between gap-3 font-arabic ${
                        isSelected
                          ? 'border-purple-400 bg-purple-500/20 shadow-[0_0_20px_rgba(168,85,247,0.3)]'
                          : 'border-white/5 bg-slate-900/60 hover:bg-slate-800/80 hover:border-white/20'
                      }`}
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <Star
                            size={14}
                            className={
                              isSelected
                                ? 'text-amber-400 fill-amber-400'
                                : mem.highlight
                                ? 'text-pink-400 fill-pink-400'
                                : 'text-slate-400'
                            }
                          />
                          <span className="text-xs font-semibold text-slate-200 truncate">
                            {mem.arabicTitle}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 font-mono">
                          {mem.date}
                        </p>
                      </div>

                      {mem.highlight && (
                        <span className="rounded-full bg-pink-500/10 px-2 py-0.5 text-[10px] font-medium text-pink-300 border border-pink-500/20 whitespace-nowrap">
                          مميز
                        </span>
                      )}
                    </button>
                  )
                })}
              </div>

              {/* Right Column: Selected Memory Detail */}
              <div className="lg:col-span-7">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedMemory.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                    className="rounded-3xl border border-purple-500/20 bg-gradient-to-b from-slate-900/80 via-slate-900/50 to-black/90 p-6 sm:p-8 shadow-xl"
                  >
                    {/* Date & Tag */}
                    <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
                      <div className="flex items-center gap-2 text-purple-300 text-xs font-mono font-semibold">
                        <Calendar size={14} />
                        <span>{selectedMemory.date}</span>
                      </div>
                      <span className="rounded-full bg-purple-500/10 px-2.5 py-0.5 text-[11px] text-purple-300 border border-purple-500/20 font-mono">
                        {selectedMemory.id.toUpperCase()}
                      </span>
                    </div>

                    {/* Titles */}
                    <h3 className="text-xl sm:text-2xl font-bold font-arabic text-white mb-1">
                      {selectedMemory.arabicTitle}
                    </h3>
                    <p className="text-xs font-mono text-slate-400 mb-6">
                      {selectedMemory.title}
                    </p>

                    {/* Image Area (Luxury photo placeholder or actual image) */}
                    <div className="relative mb-6 aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-tr from-purple-950/40 via-slate-900 to-pink-950/30 flex flex-col items-center justify-center p-4 text-center">
                      <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-300 mb-2">
                        <ImageIcon size={24} />
                      </div>
                      <p className="text-xs text-slate-400 font-arabic">
                        مكان مخصص لصورة الذكرى
                      </p>
                      <p className="text-[10px] text-slate-500 font-mono mt-0.5">
                        {selectedMemory.imagePlaceholder || '/images/memory.jpg'}
                      </p>
                    </div>

                    {/* Narrative Text */}
                    <div className="font-arabic text-sm sm:text-base leading-relaxed text-slate-200 bg-white/5 rounded-2xl p-4 border border-white/5 text-right">
                      {selectedMemory.description}
                    </div>

                    {/* Note footer */}
                    <div className="mt-6 flex items-center justify-end gap-1.5 text-xs text-pink-400 font-arabic">
                      <span>محفورة في كوكبة نوري</span>
                      <Heart size={14} className="fill-pink-500" />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
