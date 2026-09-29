import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Volume2, Pause, Play, Music } from 'lucide-react'

interface MusicButtonProps {
  isPlaying: boolean
  onToggle: () => void
}

export const MusicButton: React.FC<MusicButtonProps> = ({ isPlaying, onToggle }) => {
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    if (isPlaying) {
      const showTimer = setTimeout(() => setShowToast(true), 50)
      const hideTimer = setTimeout(() => setShowToast(false), 4500)
      return () => {
        clearTimeout(showTimer)
        clearTimeout(hideTimer)
      }
    }
  }, [isPlaying])

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2">
      {/* Toast Notification when playing */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#FFD6E7] shadow-lg text-xs text-[#3A2630] font-medium"
          >
            <Music className="w-3.5 h-3.5 text-[#FF6FA5] animate-bounce" />
            <span>Now Playing: TUL8TE - جريئة اوي 🎶</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Music Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        onClick={onToggle}
        aria-label={isPlaying ? 'Pause TUL8TE song' : 'Play TUL8TE - Garee2a Awy'}
        className="group relative flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full bg-white/90 backdrop-blur-md border border-[#FFD6E7] shadow-[0_8px_25px_rgba(255,111,165,0.22)] hover:border-[#FF9FC5] hover:shadow-[0_12px_35px_rgba(255,111,165,0.32)] transition-all duration-300 active:scale-95 cursor-pointer"
      >
        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#FFD6E7]/70 text-[#FF6FA5] group-hover:scale-110 transition-transform">
          {isPlaying ? (
            <Pause className="w-3 h-3 fill-[#FF6FA5]" />
          ) : (
            <Play className="w-3 h-3 fill-[#FF6FA5] ml-0.5" />
          )}
        </span>

        <span className="text-xs font-medium tracking-wide text-[#3A2630] group-hover:text-[#C94F7C] transition-colors">
          {isPlaying ? 'TUL8TE - جريئة اوي 🎶' : 'Play TUL8TE 🎶'}
        </span>

        {/* Animated Equalizer bars */}
        <AnimatePresence>
          {isPlaying ? (
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              exit={{ opacity: 0, width: 0 }}
              className="flex items-end gap-0.5 h-3.5 px-1"
            >
              {[0.4, 0.9, 0.6, 1, 0.7].map((h, i) => (
                <motion.span
                  key={i}
                  animate={{
                    height: ['20%', '100%', '35%', '85%', '20%'],
                  }}
                  transition={{
                    duration: 1.1,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.18,
                  }}
                  className="w-0.5 bg-[#FF6FA5] rounded-full"
                  style={{ height: `${h * 100}%` }}
                />
              ))}
            </motion.div>
          ) : (
            <Volume2 className="w-3.5 h-3.5 text-[#FF9FC5] group-hover:text-[#FF6FA5]" />
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  )
}
