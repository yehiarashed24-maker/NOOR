import React from 'react'
import { UniverseCanvas } from './components/3d/UniverseCanvas'
import { CinematicIntro } from './components/ui/CinematicIntro'
import { NavigationHUD } from './components/ui/NavigationHUD'
import { MusicPlayer } from './components/ui/MusicPlayer'
import { CursorGlow } from './components/CursorGlow'
import { CentralStarModal } from './components/ui/CentralStarModal'
import { LettersModal } from './components/ui/LettersModal'
import { MemoriesModal } from './components/ui/MemoriesModal'
import { CertificateModal } from './components/ui/CertificateModal'
import { LittleThingsModal } from './components/ui/LittleThingsModal'
import { SecretModal } from './components/ui/SecretModal'
import { FinalExperienceModal } from './components/ui/FinalExperienceModal'
import { useUniverseStore } from './store/universeStore'

export function App() {
  const { introCompleted } = useUniverseStore()

  return (
    <div className="relative min-h-screen w-full bg-black text-slate-100 overflow-hidden select-none font-arabic">
      {/* 1. Cinematic Opening Flow */}
      {!introCompleted && <CinematicIntro />}

      {/* 2. Interactive 3D Cosmic Universe */}
      <div className="fixed inset-0 z-0">
        <UniverseCanvas />
      </div>

      {/* 3. Floating Navigation HUD (Top & Bottom docks) */}
      <NavigationHUD />

      {/* 4. Background Soundtrack & Ambient Sound Engine */}
      <MusicPlayer />

      {/* 5. Desktop Starlight Cursor Glow */}
      <CursorGlow />

      {/* 6. Celestial Modals & Experiences */}
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
