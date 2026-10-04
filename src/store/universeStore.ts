import { create } from 'zustand'
import { differenceInDays, parseISO } from 'date-fns'
import { siteConfig } from '../data/config'

export type UniverseSection =
  | 'none'
  | 'star'
  | 'letters'
  | 'memories'
  | 'certificate'
  | 'reasons'
  | 'secret'
  | 'final'

interface UniverseState {
  introCompleted: boolean
  activeSection: UniverseSection
  isMusicPlaying: boolean
  isAudioMuted: boolean
  currentDay: number
  isSecretUnlocked: boolean
  savedLetters: number[] // array of day numbers
  isFinalRevealed: boolean
  devMode: boolean

  // Actions
  completeIntro: () => void
  openSection: (section: UniverseSection) => void
  closeSection: () => void
  toggleMusic: () => void
  setMusicPlaying: (playing: boolean) => void
  toggleAudioMute: () => void
  unlockSecret: () => void
  toggleSaveLetter: (day: number) => void
  setDay: (day: number) => void
  triggerFinalSurprise: () => void
}

// Compute starting day relative to siteConfig.startDate
const calculateCurrentDay = (): number => {
  try {
    const start = parseISO(siteConfig.startDate)
    const now = new Date()
    const diff = differenceInDays(now, start)
    const day = Math.max(1, Math.min(365, diff + 1))
    return day
  } catch {
    return 1
  }
}

const getInitialSavedLetters = (): number[] => {
  try {
    const saved = localStorage.getItem('noor_saved_letters')
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

const getInitialSecretUnlocked = (): boolean => {
  try {
    return localStorage.getItem('noor_secret_unlocked') === 'true'
  } catch {
    return false
  }
}

export const useUniverseStore = create<UniverseState>((set, get) => ({
  introCompleted: false,
  activeSection: 'none',
  isMusicPlaying: false,
  isAudioMuted: false,
  currentDay: calculateCurrentDay(),
  isSecretUnlocked: getInitialSecretUnlocked(),
  savedLetters: getInitialSavedLetters(),
  isFinalRevealed: false,
  devMode: siteConfig.devMode,

  completeIntro: () => set({ introCompleted: true }),

  openSection: (section) => set({ activeSection: section }),

  closeSection: () => set({ activeSection: 'none' }),

  toggleMusic: () => set((state) => ({ isMusicPlaying: !state.isMusicPlaying })),

  setMusicPlaying: (playing) => set({ isMusicPlaying: playing }),

  toggleAudioMute: () => set((state) => ({ isAudioMuted: !state.isAudioMuted })),

  unlockSecret: () => {
    try {
      localStorage.setItem('noor_secret_unlocked', 'true')
    } catch {}
    set({ isSecretUnlocked: true })
  },

  toggleSaveLetter: (day) => {
    const current = get().savedLetters
    const exists = current.includes(day)
    const updated = exists ? current.filter((d) => d !== day) : [...current, day]
    try {
      localStorage.setItem('noor_saved_letters', JSON.stringify(updated))
    } catch {}
    set({ savedLetters: updated })
  },

  setDay: (day) => set({ currentDay: Math.max(1, Math.min(365, day)) }),

  triggerFinalSurprise: () => set({ isFinalRevealed: true }),
}))
