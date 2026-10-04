import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import { Section } from './ui/Section'
import { Calendar as CalendarIcon, Sparkles, Heart, Eye, Compass } from 'lucide-react'
import { fadeInVariants, scaleUpVariants } from '@/lib/animations'

interface Sparkle {
  id: number
  x: number
  y: number
  size: number
  driftX: number
}

type MilestoneKey = 'sep27' | 'oct2' | 'oct3'

export const DateSection: React.FC = () => {
  const [activeMonth, setActiveMonth] = useState<'september' | 'october'>('september')
  const [activeMilestone, setActiveMilestone] = useState<MilestoneKey>('sep27')
  const [sparkles, setSparkles] = useState<Sparkle[]>([])

  const triggerConfetti = (key: MilestoneKey) => {
    setActiveMilestone(key)
    if (key === 'sep27') {
      setActiveMonth('september')
    } else {
      setActiveMonth('october')
    }

    const colorPresets: Record<MilestoneKey, string[]> = {
      sep27: ['#FFD6E7', '#FF9FC5', '#FF6FA5', '#FFFFFF', '#C94F7C'],
      oct2: ['#FF9FC5', '#FF6FA5', '#E05288', '#FFFFFF', '#FFD6E7'],
      oct3: ['#FF6FA5', '#C94F7C', '#FFD6E7', '#FFB3D1', '#FFFFFF'],
    }

    confetti({
      particleCount: 50,
      angle: 60,
      spread: 60,
      origin: { x: 0.15, y: 0.7 },
      colors: colorPresets[key],
      scalar: 0.9,
    })

    confetti({
      particleCount: 50,
      angle: 120,
      spread: 60,
      origin: { x: 0.85, y: 0.7 },
      colors: colorPresets[key],
      scalar: 0.9,
    })
  }

  const triggerSparkles = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const newSparkles: Sparkle[] = Array.from({ length: 6 }).map((_, i) => ({
      id: Date.now() + i,
      x: x + (Math.random() - 0.5) * 60,
      y: y + (Math.random() - 0.5) * 60,
      size: Math.random() * 12 + 10,
      driftX: (Math.random() - 0.5) * 30,
    }))

    setSparkles((prev) => [...prev.slice(-12), ...newSparkles])
  }

  const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

  // September 2026: Sep 1 is Tuesday (empty: Sun, Mon = 2 slots)
  const sepEmptyDays = [0, 1]
  const sepDays = Array.from({ length: 30 }, (_, i) => i + 1)

  // October 2026: Oct 1 is Thursday (empty: Sun, Mon, Tue, Wed = 4 slots)
  const octEmptyDays = [0, 1, 2, 3]
  const octDays = Array.from({ length: 31 }, (_, i) => i + 1)

  return (
    <Section id="date-section" className="py-6 sm:py-10 md:py-12 px-3 sm:px-6">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-4 sm:mb-6">
        <motion.div
          variants={fadeInVariants}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFD6E7]/40 text-[#C94F7C] text-[11px] sm:text-xs uppercase tracking-wider sm:tracking-widest font-medium mb-3 sm:mb-4"
        >
          <CalendarIcon className="w-3.5 h-3.5 text-[#FF6FA5]" />
          <span>Our Unforgettable Dates • Ya Sahbty</span>
        </motion.div>

        <motion.h2
          variants={fadeInVariants}
          className="text-2xl sm:text-4xl md:text-5xl font-serif-playfair text-[#3A2630] font-normal tracking-tight mb-3 sm:mb-4"
        >
          27.09 • 02.10 • 03.10
        </motion.h2>

        <motion.p
          variants={fadeInVariants}
          className="text-sm sm:text-lg text-[#3A2630]/80 font-serif-cormorant italic max-w-lg mx-auto leading-relaxed px-2"
        >
          “أول صدفة جمعتنا... واليومين اللي شفتك فيهم، وكان شكلك حلو أوي يا نوني ✨”
        </motion.p>

        {/* Milestone Quick Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
          <button
            type="button"
            onClick={() => triggerConfetti('sep27')}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
              activeMilestone === 'sep27'
                ? 'bg-[#FF6FA5] text-white shadow-md shadow-[#FF6FA5]/30'
                : 'bg-white/80 text-[#3A2630]/70 border border-[#FFD6E7] hover:border-[#FF9FC5]'
            }`}
          >
            27 سبتمبر • أول صدفة
          </button>
          <button
            type="button"
            onClick={() => triggerConfetti('oct2')}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
              activeMilestone === 'oct2'
                ? 'bg-[#E05288] text-white shadow-md shadow-[#E05288]/30'
                : 'bg-white/80 text-[#3A2630]/70 border border-[#FFD6E7] hover:border-[#FF9FC5]'
            }`}
          >
            2 أكتوبر • أول مرة شفتك
          </button>
          <button
            type="button"
            onClick={() => triggerConfetti('oct3')}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
              activeMilestone === 'oct3'
                ? 'bg-[#C94F7C] text-white shadow-md shadow-[#C94F7C]/30'
                : 'bg-white/80 text-[#3A2630]/70 border border-[#FFD6E7] hover:border-[#FF9FC5]'
            }`}
          >
            3 أكتوبر • شكلك كان حلو أوي ✨
          </button>
        </div>
      </div>

      {/* Elegant Minimal Calendar Card */}
      <motion.div
        variants={scaleUpVariants}
        className="relative w-full max-w-sm sm:max-w-md mx-auto mb-6 sm:mb-8"
      >
        <motion.div
          onClick={triggerSparkles}
          whileHover={{
            rotateX: 2,
            rotateY: -2,
            y: -4,
            transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
          }}
          className="group relative cursor-pointer rounded-2xl sm:rounded-3xl p-4 sm:p-8 bg-white/85 backdrop-blur-2xl border border-[#FFD6E7] shadow-[0_20px_50px_-15px_rgba(255,111,165,0.18)] transition-all duration-500 overflow-hidden"
        >
          {/* Header of the calendar with Month toggle */}
          <div className="flex items-center justify-between border-b border-[#FFD6E7]/60 pb-4 mb-5">
            <div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    setActiveMonth('september')
                    setActiveMilestone('sep27')
                  }}
                  className={`text-xs uppercase tracking-widest font-semibold transition-colors ${
                    activeMonth === 'september'
                      ? 'text-[#C94F7C] border-b-2 border-[#C94F7C] pb-0.5'
                      : 'text-[#3A2630]/40 hover:text-[#3A2630]'
                  }`}
                >
                  September
                </button>
                <span className="text-[#3A2630]/30">•</span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    setActiveMonth('october')
                    if (activeMilestone === 'sep27') setActiveMilestone('oct2')
                  }}
                  className={`text-xs uppercase tracking-widest font-semibold transition-colors ${
                    activeMonth === 'october'
                      ? 'text-[#C94F7C] border-b-2 border-[#C94F7C] pb-0.5'
                      : 'text-[#3A2630]/40 hover:text-[#3A2630]'
                  }`}
                >
                  October
                </button>
              </div>
              <p className="text-2xl font-serif-playfair text-[#3A2630] font-medium mt-1">
                2026
              </p>
            </div>

            <div className="w-10 h-10 rounded-2xl bg-[#FFF8FB] border border-[#FFD6E7] flex items-center justify-center text-[#FF6FA5] shadow-inner">
              <Sparkles className="w-5 h-5 text-[#FF6FA5]" />
            </div>
          </div>

          {/* Days Grid: September */}
          {activeMonth === 'september' && (
            <div className="grid grid-cols-7 gap-1 sm:gap-2 text-center text-xs mb-3">
              {daysOfWeek.map((d, i) => (
                <span key={i} className="text-[#3A2630]/40 font-medium py-1">
                  {d}
                </span>
              ))}
              {sepEmptyDays.map((_, i) => (
                <span key={`empty-sep-${i}`} />
              ))}
              {sepDays.map((day) => {
                const isSpecial = day === 27
                return (
                  <div
                    key={`sep-${day}`}
                    onClick={(e) => {
                      if (isSpecial) {
                        e.stopPropagation()
                        triggerConfetti('sep27')
                      }
                    }}
                    className="relative flex flex-col items-center justify-center py-1.5"
                  >
                    {isSpecial ? (
                      <motion.div
                        animate={{ scale: [1, 1.15, 1.08] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                        className="relative z-10 w-8 h-8 rounded-full bg-gradient-to-r from-[#FF6FA5] to-[#C94F7C] text-white font-medium flex items-center justify-center shadow-md shadow-[#FF6FA5]/40 cursor-pointer"
                      >
                        <span className="text-xs font-semibold">{day}</span>
                        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-white border border-[#FF6FA5] flex items-center justify-center">
                          <span className="w-1 h-1 rounded-full bg-[#FF6FA5]" />
                        </span>
                      </motion.div>
                    ) : (
                      <span
                        className={`text-[#3A2630]/70 ${
                          day < 27 ? 'opacity-40' : 'opacity-70'
                        }`}
                      >
                        {day}
                      </span>
                    )}
                  </div>
                )
              })}
            </div>
          )}

          {/* Days Grid: October */}
          {activeMonth === 'october' && (
            <div className="grid grid-cols-7 gap-1 sm:gap-2 text-center text-xs mb-3">
              {daysOfWeek.map((d, i) => (
                <span key={i} className="text-[#3A2630]/40 font-medium py-1">
                  {d}
                </span>
              ))}
              {octEmptyDays.map((_, i) => (
                <span key={`empty-oct-${i}`} />
              ))}
              {octDays.map((day) => {
                const isDayTwo = day === 2
                const isDayThree = day === 3

                if (isDayTwo) {
                  return (
                    <div
                      key={`oct-${day}`}
                      onClick={(e) => {
                        e.stopPropagation()
                        triggerConfetti('oct2')
                      }}
                      className="relative flex flex-col items-center justify-center py-1 cursor-pointer"
                    >
                      <motion.div
                        animate={{
                          scale: activeMilestone === 'oct2' ? [1, 1.15, 1.06] : 1,
                        }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                        className="relative z-10 w-8 h-8 rounded-full bg-gradient-to-br from-[#FF6FA5] to-[#E05288] text-white font-medium flex items-center justify-center shadow-md shadow-[#FF6FA5]/40"
                      >
                        <span className="text-xs font-semibold">{day}</span>
                        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-white border border-[#FF6FA5] flex items-center justify-center">
                          <span className="w-1 h-1 rounded-full bg-[#FF6FA5]" />
                        </span>
                      </motion.div>
                      <span className="text-[9px] text-[#C94F7C] font-medium mt-0.5 whitespace-nowrap">
                        أول مرة
                      </span>
                    </div>
                  )
                }

                if (isDayThree) {
                  return (
                    <div
                      key={`oct-${day}`}
                      onClick={(e) => {
                        e.stopPropagation()
                        triggerConfetti('oct3')
                      }}
                      className="relative flex flex-col items-center justify-center py-1 cursor-pointer"
                    >
                      <motion.div
                        animate={{
                          scale: activeMilestone === 'oct3' ? [1, 1.15, 1.06] : 1,
                        }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                        className="relative z-10 w-8 h-8 rounded-full bg-gradient-to-br from-[#E05288] to-[#C94F7C] text-white font-medium flex items-center justify-center shadow-md shadow-[#C94F7C]/40"
                      >
                        <span className="text-xs font-semibold">{day}</span>
                        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-white border border-[#C94F7C] flex items-center justify-center">
                          <Sparkles className="w-2 h-2 text-[#C94F7C]" />
                        </span>
                      </motion.div>
                      <span className="text-[9px] text-[#C94F7C] font-medium mt-0.5 whitespace-nowrap">
                        يا نوني ✨
                      </span>
                    </div>
                  )
                }

                return (
                  <div
                    key={`oct-${day}`}
                    className="relative flex items-center justify-center py-2 text-xs sm:text-sm"
                  >
                    <span
                      className={`text-[#3A2630]/70 ${
                        day < 2 ? 'opacity-40' : 'opacity-70'
                      }`}
                    >
                      {day}
                    </span>
                  </div>
                )
              })}
            </div>
          )}

          {/* Bottom Card Footer */}
          <div className="mt-3 pt-3 border-t border-[#FFD6E7]/50 flex items-center justify-between text-xs text-[#3A2630]/60">
            <span className="flex items-center gap-1 font-serif-cormorant italic text-sm">
              <Compass className="w-3.5 h-3.5 text-[#FF6FA5]" />
              {activeMonth === 'september' ? '27 September • أول صدفة' : '2 & 3 October • اللقاء'}
            </span>
            <span className="text-[11px] text-[#C94F7C] tracking-wider uppercase font-medium">
              Tap dates to celebrate!
            </span>
          </div>

          {/* Interactive Floating Particle Sparks */}
          <AnimatePresence>
            {sparkles.map((sparkle) => (
              <motion.div
                key={sparkle.id}
                initial={{ opacity: 1, scale: 0, x: sparkle.x, y: sparkle.y }}
                animate={{
                  opacity: 0,
                  scale: 1.4,
                  y: sparkle.y - 45,
                  x: sparkle.x + sparkle.driftX,
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
                className="absolute pointer-events-none z-20 text-[#FF6FA5]"
                style={{ left: 0, top: 0 }}
              >
                <Sparkles className="w-4 h-4 text-[#FF9FC5]" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* 3 Dedicated Milestone Cards: 27 September, 02 October, 03 October */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
        {/* Card 1: 27 September (أول صدفة) */}
        <motion.div
          variants={scaleUpVariants}
          whileHover={{ y: -4 }}
          onClick={() => triggerConfetti('sep27')}
          className={`cursor-pointer relative rounded-2xl sm:rounded-3xl p-5 sm:p-7 bg-white/85 backdrop-blur-xl border transition-all duration-500 shadow-sm hover:shadow-lg flex flex-col justify-between ${
            activeMilestone === 'sep27'
              ? 'border-[#FF6FA5] ring-2 ring-[#FF6FA5]/25 shadow-[0_15px_40px_-10px_rgba(255,111,165,0.25)]'
              : 'border-[#FFD6E7]/80 hover:border-[#FF9FC5]'
          }`}
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#FFD6E7]/50 text-[#C94F7C] text-[11px] font-medium tracking-wider uppercase">
                <Compass className="w-3.5 h-3.5 text-[#FF6FA5]" />
                27.09.2026
              </span>
              <span className="text-xs font-serif-playfair text-[#C94F7C] font-semibold">
                أول صدفة
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-serif-playfair text-[#3A2630] font-medium mb-1">
              أول صدفة جمعتنا
            </h3>
            <p className="text-xs uppercase tracking-wider text-[#C94F7C]/80 font-medium mb-3">
              The First Coincidence
            </p>

            <p className="text-sm text-[#3A2630]/85 font-serif-cormorant italic leading-relaxed mb-3">
              “أول صدفة جمعتنا.. صدفة خلت اليوم ده بداية لأحلى صحوبية وأجدع صاحبة، يا صاحبتي.”
            </p>

            <p className="text-xs text-[#3A2630]/70 font-sans-dm font-light leading-relaxed">
              “I didn't know that one ordinary day was going to bring me the best friend, ya sahbty.”
            </p>
          </div>

          <div className="mt-5 pt-3 border-t border-[#FFD6E7]/50 flex items-center justify-between text-xs text-[#C94F7C]">
            <span className="font-serif-cormorant italic text-sm">بداية الحكاية 🤍</span>
            <span className="underline decoration-[#FF9FC5] underline-offset-4 font-medium">
              أول صدفة ✨
            </span>
          </div>
        </motion.div>

        {/* Card 2: 02 October (أول مرة شفتك) */}
        <motion.div
          variants={scaleUpVariants}
          whileHover={{ y: -4 }}
          onClick={() => triggerConfetti('oct2')}
          className={`cursor-pointer relative rounded-2xl sm:rounded-3xl p-5 sm:p-7 bg-white/85 backdrop-blur-xl border transition-all duration-500 shadow-sm hover:shadow-lg flex flex-col justify-between ${
            activeMilestone === 'oct2'
              ? 'border-[#E05288] ring-2 ring-[#E05288]/25 shadow-[0_15px_40px_-10px_rgba(224,82,136,0.25)]'
              : 'border-[#FFD6E7]/80 hover:border-[#FF9FC5]'
          }`}
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#FFD6E7]/50 text-[#C94F7C] text-[11px] font-medium tracking-wider uppercase">
                <Eye className="w-3.5 h-3.5 text-[#FF6FA5]" />
                02.10.2026
              </span>
              <span className="text-xs font-serif-playfair text-[#C94F7C] font-semibold">
                أول لقاء
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-serif-playfair text-[#3A2630] font-medium mb-1">
              أول مرة شفتك فيها
            </h3>
            <p className="text-xs uppercase tracking-wider text-[#C94F7C]/80 font-medium mb-3">
              The First Time I Saw You
            </p>

            <p className="text-sm text-[#3A2630]/85 font-serif-cormorant italic leading-relaxed mb-3">
              “يوم 2 - 10: أول مرة عيني شافتك فيها.. اللحظة اللي دخلتي فيها حياتي وبدأت حكايتنا.”
            </p>

            <p className="text-xs text-[#3A2630]/70 font-sans-dm font-light leading-relaxed">
              The moment our eyes met for the very first time, turning an ordinary day into something unforgettable.
            </p>
          </div>

          <div className="mt-5 pt-3 border-t border-[#FFD6E7]/50 flex items-center justify-between text-xs text-[#C94F7C]">
            <span className="font-serif-cormorant italic text-sm">أول نظرة 💫</span>
            <span className="underline decoration-[#FF9FC5] underline-offset-4 font-medium">
              يوم 2 أكتوبر ✨
            </span>
          </div>
        </motion.div>

        {/* Card 3: 03 October (تاني يوم شفتك وكان شكلك حلو أوي يا نوني) */}
        <motion.div
          variants={scaleUpVariants}
          whileHover={{ y: -4 }}
          onClick={() => triggerConfetti('oct3')}
          className={`cursor-pointer relative rounded-2xl sm:rounded-3xl p-5 sm:p-7 bg-white/85 backdrop-blur-xl border transition-all duration-500 shadow-sm hover:shadow-lg flex flex-col justify-between ${
            activeMilestone === 'oct3'
              ? 'border-[#C94F7C] ring-2 ring-[#C94F7C]/25 shadow-[0_15px_40px_-10px_rgba(201,79,124,0.25)]'
              : 'border-[#FFD6E7]/80 hover:border-[#FF9FC5]'
          }`}
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#FFD6E7]/50 text-[#C94F7C] text-[11px] font-medium tracking-wider uppercase">
                <Heart className="w-3.5 h-3.5 text-[#FF6FA5]" />
                03.10.2026
              </span>
              <span className="text-xs font-serif-playfair text-[#C94F7C] font-semibold">
                تاني يوم
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-serif-playfair text-[#3A2630] font-medium mb-1">
              تاني يوم شفتك فيه
            </h3>
            <p className="text-xs uppercase tracking-wider text-[#C94F7C]/80 font-medium mb-2">
              The Second Day • Beautiful Memory
            </p>

            <div className="my-2.5 py-1.5 px-2.5 rounded-xl bg-gradient-to-r from-[#FFD6E7]/50 via-[#FFD6E7]/20 to-transparent border-l-2 border-[#C94F7C]">
              <p className="text-sm sm:text-base font-serif-playfair text-[#C94F7C] font-semibold">
                “وكان شكلك حلو أوي يا نوني...” ✨
              </p>
            </div>

            <p className="text-sm text-[#3A2630]/85 font-serif-cormorant italic leading-relaxed mb-3">
              “تاني يوم شفتك فيه، وكنتِ قمر وخاطفة للأنظار بجمالك وضحكتك اللي تنور الدنيا.. شكلك كان يجنن بجد يا نوني!”
            </p>

            <p className="text-xs text-[#3A2630]/70 font-sans-dm font-light leading-relaxed">
              The second day I saw you, you looked so breathtakingly radiant, ya Nony, glowing like pure sunshine.
            </p>
          </div>

          <div className="mt-5 pt-3 border-t border-[#FFD6E7]/50 flex items-center justify-between text-xs text-[#C94F7C]">
            <span className="font-serif-cormorant italic text-sm">قمر يخطف القلب 🤍</span>
            <span className="underline decoration-[#FF9FC5] underline-offset-4 font-medium">
              يا نوني القمر ✨
            </span>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
