import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Lenis from 'lenis'
import { Hero } from './components/Hero'
import { DateSection } from './components/DateSection'
import { Coincidence } from './components/Coincidence'
import { NourSection } from './components/NourSection'
import { NourYehia } from './components/NourYehia'
import { InteractiveQuestion } from './components/InteractiveQuestion'
import { SecretMessage } from './components/SecretMessage'
import { FinalSection } from './components/FinalSection'
import { FloatingParticles } from './components/FloatingParticles'
import { CursorGlow } from './components/CursorGlow'
import { MusicButton } from './components/MusicButton'
import { PasswordGate } from './components/PasswordGate'
import { useReducedMotion } from './hooks/useReducedMotion'
import { useSoundtrack } from './hooks/useSoundtrack'

export function App() {
  const [isUnlocked, setIsUnlocked] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem('yehia_heart_unlocked') === 'true'
    } catch {
      return false
    }
  })
  const prefersReducedMotion = useReducedMotion()
  const { isPlaying, toggle } = useSoundtrack()

  useEffect(() => {
    if (prefersReducedMotion || !isUnlocked) return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [prefersReducedMotion, isUnlocked])

  return (
    <div className="relative min-h-screen bg-[#FFF8FB] text-[#3A2630] font-sans-dm selection:bg-[#FFD6E7] selection:text-[#C94F7C] overflow-x-hidden">
      {/* Password Gate Screen (yehia heart / noni) */}
      <AnimatePresence>
        {!isUnlocked && (
          <PasswordGate onUnlock={() => setIsUnlocked(true)} />
        )}
      </AnimatePresence>

      {/* Background Floating Canvas & Glows */}
      <FloatingParticles />

      {/* Desktop Cursor Glow */}
      <CursorGlow />

      {/* Top Subtle Brand Bar */}
      <header className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-6 py-4 pointer-events-none">
        <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#C94F7C]/70">
          Nour & Yehia
        </span>
        <span className="text-xs tracking-wider text-[#3A2630]/40 font-mono">
          27.09 • 02.10 • 03.10
        </span>
      </header>

      {/* Main Single-Page Sections */}
      <main className="relative z-10 flex flex-col">
        {/* 1. Intro & Hero with 3D Heart */}
        <Hero />

        {/* 2. The Date & Calendar Section */}
        <DateSection />

        {/* 3. The Coincidence Narrative */}
        <Coincidence />

        {/* 4. Nour Dedicated Card */}
        <NourSection />

        {/* 5. Nour & Yehia Composition */}
        <NourYehia />

        {/* 6. Interactive Question */}
        <InteractiveQuestion />

        {/* 7. Secret Personal Letter */}
        <SecretMessage />

        {/* 8. Final Memories & Signoff */}
        <FinalSection />
      </main>

      {/* Audio Soundtrack Button */}
      <MusicButton isPlaying={isPlaying} onToggle={toggle} />
    </div>
  )
}

export default App
