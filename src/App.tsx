import React, { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Lenis from 'lenis'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { DateSection } from './components/DateSection'
import { NoniStarAndLetters } from './components/NoniStarAndLetters'
import { Coincidence } from './components/Coincidence'
import { NourSection } from './components/NourSection'
import { NourYehia } from './components/NourYehia'
import { InteractiveQuestion } from './components/InteractiveQuestion'
import { SecretMessage } from './components/SecretMessage'
import { FinalSection } from './components/FinalSection'
import { FloatingParticles } from './components/FloatingParticles'
import { CursorGlow } from './components/CursorGlow'
import { PasswordGate } from './components/PasswordGate'
import { MusicButton } from './components/MusicButton'
import { CertificateModal } from './components/ui/CertificateModal'
import { LettersModal } from './components/ui/LettersModal'
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

  // Smooth scroll
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
    <div className="relative min-h-screen bg-[#FFF8FB] text-[#3A2630] font-sans-dm selection:bg-[#FFD6E7] selection:text-[#C94F7C] overflow-x-hidden font-arabic">
      {/* Password Gate Screen (yehia heart / noni) */}
      <AnimatePresence>
        {!isUnlocked && (
          <PasswordGate onUnlock={() => setIsUnlocked(true)} />
        )}
      </AnimatePresence>

      {/* Background Floating Particles */}
      <FloatingParticles />

      {/* Desktop Cursor Glow */}
      <CursorGlow />

      {/* Music Button at the Bottom Right with Song Title & Animated Equalizer Logo */}
      <MusicButton isPlaying={isPlaying} onToggle={toggle} />

      {/* Top Navbar with Star & 365 Letters shortcuts */}
      <Navbar />

      {/* Main Single-Page Content */}
      <main className="relative z-10 flex flex-col pt-12 sm:pt-14">
        {/* 1. Hero with Heart */}
        <Hero />

        {/* 2. Key Dates Section (27 Sep, 02 Oct, 03 Oct) */}
        <DateSection />

        {/* 3. The Star & 365 Letters Dedicated Showcase */}
        <NoniStarAndLetters />

        {/* 4. The First Coincidence Story */}
        <Coincidence />

        {/* 5. Dedicated Nour Card */}
        <NourSection />

        {/* 6. Nour & Yehia Chemistry */}
        <NourYehia />

        {/* 7. Interactive Question */}
        <InteractiveQuestion />

        {/* 8. Secret Message */}
        <SecretMessage />

        {/* 9. Final Section */}
        <FinalSection />
      </main>

      {/* Modals: The Star Certificate & 365 Letters System (in Soft Romantic Theme) */}
      <CertificateModal />
      <LettersModal />
    </div>
  )
}

export default App
