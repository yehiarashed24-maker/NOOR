import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Lock, KeyRound, Sparkles, Heart, ShieldCheck, ArrowRight } from 'lucide-react'
import { useUniverseStore } from '../../store/universeStore'
import { siteConfig } from '../../data/config'
import { soundEffects } from '../../utils/soundEffects'
import confetti from 'canvas-confetti'

export const SecretModal: React.FC = () => {
  const { activeSection, closeSection, isSecretUnlocked, unlockSecret } = useUniverseStore()
  const isOpen = activeSection === 'secret'

  const [passwordInput, setPasswordInput] = useState<string>('')
  const [errorMsg, setErrorMsg] = useState<string>('')
  const [shake, setShake] = useState<boolean>(false)

  if (!isOpen) return null

  const handleClose = () => {
    soundEffects.playStarChime()
    closeSection()
  }

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault()
    if (passwordInput.trim().toLowerCase() === siteConfig.secretPassword.toLowerCase()) {
      soundEffects.playUnlock()
      unlockSecret()
      setErrorMsg('')
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#a855f7', '#ec4899', '#3b82f6'],
      })
    } else {
      setErrorMsg('الباسورد مش صح يا نوني.. فكري تاني 😉')
      setShake(true)
      setTimeout(() => setShake(false), 500)
    }
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
          className="relative flex h-[85vh] sm:h-[80vh] w-full max-w-xl flex-col overflow-hidden rounded-3xl border border-indigo-500/20 bg-slate-950/95 text-white shadow-[0_0_80px_rgba(99,102,241,0.15)]"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 bg-slate-900/60 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                {isSecretUnlocked ? <ShieldCheck size={20} /> : <Lock size={20} />}
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-bold tracking-tight text-white flex items-center gap-2">
                  <span>🔐 SECRET CHAMBER</span>
                  <span className="text-xs font-normal text-slate-400 font-mono">yehia heart</span>
                </h2>
                <p className="text-xs text-slate-400 font-arabic">
                  {isSecretUnlocked ? 'تم فتح الرسالة السرية لنور' : 'دي مش لأي حد...'}
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
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 flex flex-col justify-center">
            {!isSecretUnlocked ? (
              /* Password Form */
              <motion.div
                animate={shake ? { x: [-10, 10, -10, 10, 0] } : {}}
                transition={{ duration: 0.4 }}
                className="max-w-md mx-auto w-full text-center space-y-6"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-indigo-950/50 border border-indigo-500/30 text-indigo-400 shadow-[0_0_40px_rgba(99,102,241,0.25)]">
                  <KeyRound size={36} />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold font-arabic text-white">
                    "دي مش لأي حد."
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 font-arabic">
                    المكان ده فيه سر صغير من قلبي.. اكتبي كلمة السر علشان تفتحي الباب.
                  </p>
                  <p className="text-[11px] font-mono text-indigo-300/80">
                    Hint: yehia heart (اسم الدلع المفضل)
                  </p>
                </div>

                <form onSubmit={handleUnlock} className="space-y-4">
                  <div className="relative">
                    <input
                      type="password"
                      placeholder="كلمة السر..."
                      value={passwordInput}
                      onChange={(e) => setPasswordInput(e.target.value)}
                      className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3.5 text-center font-mono text-lg text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                      autoFocus
                    />
                  </div>

                  {errorMsg && (
                    <p className="text-xs font-arabic text-rose-400 animate-pulse">
                      {errorMsg}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="w-full rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 py-3.5 font-arabic font-semibold text-white shadow-lg shadow-indigo-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    افتحي الباب السري ✨
                  </button>
                </form>
              </motion.div>
            ) : (
              /* Unlocked Secret Message */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-6 text-right font-arabic"
              >
                <div className="rounded-2xl bg-indigo-500/10 border border-indigo-500/30 p-4 text-center">
                  <Sparkles size={20} className="inline mr-2 text-indigo-400" />
                  <span className="font-bold text-indigo-300 text-sm sm:text-base">
                    "مبروك يا نوني، وصلتي للحاجة اللي كنت مخبيها."
                  </span>
                </div>

                <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-200 bg-white/5 rounded-3xl p-6 border border-white/5 shadow-inner">
                  <p>
                    عارفة يا نور؟ المكان ده عملته في أبعد حتة في الفضاء ده كله، علشان يكون سر بيني وبينك بس.
                  </p>
                  <p>
                    أنا ممكن قدام الناس أبان هادي ومش بتكلم كتير، بس جوايا كلام كتير أوي ليكي.. إنتي مش مجرد صدفة حلوة عدت في حياتي، إنتي الحاجة الوحيدة اللي لما ببصلها بحس إن الدنيا لسه فيها خير وطيبة.
                  </p>
                  <p>
                    شكراً إنك بتستحمليني، وشكراً على ضحكتك، وشكراً على اليومين اللي شفتك فيهم وحسيت فيهم إني لقيت روحي من تاني.
                  </p>
                  <p className="text-pink-400 font-semibold pt-2">
                    يا رب تفضلي دايمًا نوري وسندي، ونكمل حكايتنا لأخر العمر سوا ❤️
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400 border-t border-white/10 pt-4">
                  <span className="font-mono">yehia heart • exclusive</span>
                  <div className="flex items-center gap-1.5 text-pink-400">
                    <Heart size={14} className="fill-pink-500" />
                    <span>من يحيى لنوني</span>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
