import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Lock, KeyRound, Sparkles, Eye, EyeOff } from 'lucide-react'

interface PasswordGateProps {
  onUnlock: () => void
}

export const PasswordGate: React.FC<PasswordGateProps> = ({ onUnlock }) => {
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [shake, setShake] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Password is 'noni' (case-insensitive and trimmed)
    if (password.trim().toLowerCase() === 'noni') {
      try {
        sessionStorage.setItem('yehia_heart_unlocked', 'true')
      } catch {
        // Ignore storage errors in restricted contexts
      }
      onUnlock()
    } else {
      setError(true)
      setShake(true)
      setTimeout(() => setShake(false), 500)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#FFF8FB] overflow-hidden selection:bg-[#FFD6E7] selection:text-[#C94F7C]">
      {/* Background Soft Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-[32rem] sm:h-[32rem] rounded-full bg-gradient-to-tr from-[#FFD6E7]/60 via-[#FFB3D1]/30 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-56 h-56 rounded-full bg-[#FF9FC5]/20 blur-2xl pointer-events-none" />

      {/* Main Lock Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 15 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
          x: shake ? [-10, 10, -8, 8, -4, 4, 0] : 0,
        }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-sm rounded-3xl p-6 sm:p-10 bg-white/85 backdrop-blur-2xl border border-[#FFD6E7] shadow-[0_20px_50px_-15px_rgba(255,111,165,0.22)] text-center"
      >
        {/* Animated Heart Icon */}
        <div className="relative w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-[#FFF8FB] to-[#FFD6E7]/50 border border-[#FFD6E7] flex items-center justify-center text-[#FF6FA5] shadow-inner">
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Heart className="w-8 h-8 fill-[#FF6FA5]/20 text-[#FF6FA5]" />
          </motion.div>
          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#FF6FA5] ring-2 ring-white flex items-center justify-center">
            <Sparkles className="w-2 h-2 text-white" />
          </span>
        </div>

        {/* Title: yehia heart */}
        <h1 className="text-3xl sm:text-4xl font-serif-playfair text-[#3A2630] font-normal tracking-tight mb-1">
          yehia heart
        </h1>

        <p className="text-xs uppercase tracking-widest text-[#C94F7C] font-medium mb-6">
          Enter password to enter
        </p>

        {/* Password Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#FF6FA5]">
              <KeyRound className="w-4 h-4" />
            </div>

            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
                if (error) setError(false)
              }}
              placeholder="Enter password..."
              autoFocus
              className="w-full pl-10 pr-10 py-3 rounded-2xl bg-white/90 border border-[#FFD6E7] text-[#3A2630] placeholder:text-[#3A2630]/35 text-sm sm:text-base focus:outline-none focus:border-[#FF6FA5] focus:ring-2 focus:ring-[#FF6FA5]/20 transition-all font-sans-dm shadow-inner"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#3A2630]/40 hover:text-[#C94F7C] transition-colors"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>

          {/* Error Message */}
          <AnimatePresence>
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="text-xs text-[#C94F7C] font-medium"
              >
                Wrong password... try again!
              </motion.p>
            )}
          </AnimatePresence>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-[#FF6FA5] to-[#C94F7C] text-white font-medium text-sm sm:text-base tracking-wide shadow-md shadow-[#FF6FA5]/30 hover:shadow-lg hover:shadow-[#FF6FA5]/40 hover:brightness-105 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Lock className="w-4 h-4" />
            <span>Unlock 🤍</span>
          </button>
        </form>

        {/* Footer Hint */}
        <div className="mt-6 pt-4 border-t border-[#FFD6E7]/50 text-center">
          <p className="text-[11px] text-[#3A2630]/50 font-serif-cormorant italic">
            A special secret space for Nour ✨
          </p>
        </div>
      </motion.div>
    </div>
  )
}
