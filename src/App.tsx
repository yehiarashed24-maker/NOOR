import React, { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Lenis from 'lenis'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { DateSection } from './components/DateSection'
import { Coincidence } from './components/Coincidence'
import { NourSection } from './components/NourSection'
import { NourYehia } from './components/NourYehia'
import { InteractiveQuestion } from './components/InteractiveQuestion'
import { SecretMessage } from './components/SecretMessage'
import { FinalSection } from './components/FinalSection'
import { UniverseBanner } from './components/UniverseBanner'
import { FloatingParticles } from './components/FloatingParticles'
import { CursorGlow } from './components/CursorGlow'
import { PasswordGate } from './components/PasswordGate'
import { useReducedMotion } from './hooks/useReducedMotion'

// 3D Universe Components & Modals
import { UniverseCanvas } from './components/3d/UniverseCanvas'
import { NavigationHUD } from './components/ui/NavigationHUD'
import { MusicPlayer } from './components/ui/MusicPlayer'
import { CentralStarModal } from './components/ui/CentralStarModal'
import { LettersModal } from './components/ui/LettersModal'
import { MemoriesModal } from './components/ui/MemoriesModal'
import { CertificateModal } from './components/ui/CertificateModal'
import { LittleThingsModal } from './components/ui/LittleThingsModal'
import { SecretModal } from './components/ui/SecretModal'
import { FinalExperienceModal } from './components/ui/FinalExperienceModal'
import { useUniverseStore } from './store/universeStore'

export function App() {
  const [isUnlocked, setIsUnlocked] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem('yehia_heart_unlocked') === 'true'
    } catch {
      return false
    }
  })

  const { isUniverseMode } = useUniverseStore()
  const prefersReducedMotion = useReducedMotion()

  // Smooth scroll for main site
  useEffect(() => {
    if (prefersReducedMotion || !isUnlocked || isUniverseMode) return

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
  }, [prefersReducedMotion, isUnlocked, isUniverseMode])

  return (
    <div className={`relative min-h-screen ${isUniverseMode ? 'bg-black text-slate-100' : 'bg-[#FFF8FB] text-[#3A2630] font-sans-dm'} selection:bg-[#FFD6E7] selection:text-[#C94F7C] overflow-x-hidden`}>
      {/* Password Gate Screen (yehia heart / noni) */}
      <AnimatePresence>
        {!isUnlocked && (
          <PasswordGate onUnlock={() => setIsUnlocked(true)} />
        )}
      </AnimatePresence>

      {/* Global Sound Engine & Music Player */}
      <MusicPlayer />

      {/* Desktop Cursor Glow */}
      <CursorGlow />

      {/* Top Navbar with Universe, Star, and 365 Letters Shortcuts */}
      <Navbar />

      {isUniverseMode ? (
        /* ================= 🌌 3D NOOR UNIVERSE MODE ================= */
        <div className="fixed inset-0 z-10 bg-black">
          <UniverseCanvas />
          <NavigationHUD />
        </div>
      ) : (
        /* ================= 🌸 MAIN ROMANTIC SITE ================= */
        <>
          {/* Subtle Floating Particles in Background */}
          <FloatingParticles />

          {/* Main Single-Page Sections */}
          <main className="relative z-10 flex flex-col pt-16">
            {/* 1. Hero with 3D Heart */}
            <Hero />

            {/* 2. Key Dates Section (27 Sep, 02 Oct, 03 Oct) */}
            <DateSection />

            {/* 3. Dedicated Universe & Star Certificate Invitation Card */}
            <UniverseBanner />

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
        </>
      )}

      {/* Modals (Accessible from both Main Site & Universe Mode) */}
      <CentralStarModal />
      <LettersModal />
      <MemoriesModal />
      <CertificateModal />
      <LittleThingsModal />
      <SecretModal />
      <FinalExperienceModal />
    </div>
  )
}

export default App
