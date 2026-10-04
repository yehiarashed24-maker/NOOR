// Web Audio API Synthesizer for subtle cosmic UI sounds & ambient drone

let audioCtx: AudioContext | null = null

const getAudioContext = (): AudioContext | null => {
  if (typeof window === 'undefined') return null
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
    if (AudioContextClass) {
      audioCtx = new AudioContextClass()
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume()
  }
  return audioCtx
}

// Gentle chime for star hover / click
export const playStarSound = () => {
  try {
    const ctx = getAudioContext()
    if (!ctx) return
    const now = ctx.currentTime

    const osc = ctx.createOscillator()
    const gain = ctx.createGain()

    osc.type = 'sine'
    osc.frequency.setValueAtTime(880, now) // A5
    osc.frequency.exponentialRampToValueAtTime(1760, now + 0.3) // A6 sparkle

    gain.gain.setValueAtTime(0.04, now)
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5)

    osc.connect(gain)
    gain.connect(ctx.destination)

    osc.start(now)
    osc.stop(now + 0.5)
  } catch {}
}

// Planet select sound (deep resonant chime)
export const playPlanetSound = () => {
  try {
    const ctx = getAudioContext()
    if (!ctx) return
    const now = ctx.currentTime

    const osc = ctx.createOscillator()
    const gain = ctx.createGain()

    osc.type = 'triangle'
    osc.frequency.setValueAtTime(440, now)
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.4)

    gain.gain.setValueAtTime(0.06, now)
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6)

    osc.connect(gain)
    gain.connect(ctx.destination)

    osc.start(now)
    osc.stop(now + 0.6)
  } catch {}
}

// Letter reveal chime (sweet harp-like arpeggio)
export const playLetterOpenSound = () => {
  try {
    const ctx = getAudioContext()
    if (!ctx) return
    const notes = [523.25, 659.25, 783.99, 1046.5] // C5, E5, G5, C6
    const now = ctx.currentTime

    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()

      osc.type = 'sine'
      osc.frequency.setValueAtTime(freq, now + idx * 0.08)

      gain.gain.setValueAtTime(0.03, now + idx * 0.08)
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.4)

      osc.connect(gain)
      gain.connect(ctx.destination)

      osc.start(now + idx * 0.08)
      osc.stop(now + idx * 0.08 + 0.45)
    })
  } catch {}
}

// Unlock / Success sound
export const playUnlockSound = () => {
  try {
    const ctx = getAudioContext()
    if (!ctx) return
    const notes = [440, 554.37, 659.25, 880] // A major chord
    const now = ctx.currentTime

    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()

      osc.type = 'sine'
      osc.frequency.setValueAtTime(freq, now + idx * 0.07)

      gain.gain.setValueAtTime(0.05, now + idx * 0.07)
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.07 + 0.5)

      osc.connect(gain)
      gain.connect(ctx.destination)

      osc.start(now + idx * 0.07)
      osc.stop(now + idx * 0.07 + 0.55)
    })
  } catch {}
}

// Ambient Cosmic Space Music Generator (Runs when no external MP3 is playing)
class AmbientCosmicSynth {
  private ctx: AudioContext | null = null
  private gainNode: GainNode | null = null
  private isRunning: boolean = false
  private timer: number | null = null

  public start() {
    if (this.isRunning) return
    this.ctx = getAudioContext()
    if (!this.ctx) return

    this.gainNode = this.ctx.createGain()
    this.gainNode.gain.setValueAtTime(0.035, this.ctx.currentTime)
    this.gainNode.connect(this.ctx.destination)

    this.isRunning = true
    this.playAmbientPad()
  }

  public stop() {
    this.isRunning = false
    if (this.timer) {
      window.clearTimeout(this.timer)
      this.timer = null
    }
    if (this.gainNode && this.ctx) {
      try {
        this.gainNode.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 1)
      } catch {}
    }
  }

  private playAmbientPad() {
    if (!this.isRunning || !this.ctx || !this.gainNode) return

    const now = this.ctx.currentTime
    // Dreamy celestial scale notes (D, F#, A, B, C#)
    const chords = [
      [146.83, 220.0, 277.18, 369.99], // D maj7
      [164.81, 246.94, 293.66, 392.0], // E min7
      [196.0, 293.66, 369.99, 440.0],  // G maj7
      [220.0, 277.18, 329.63, 440.0],  // A sus
    ]

    const chord = chords[Math.floor(Math.random() * chords.length)]
    const duration = 4.5

    chord.forEach((freq) => {
      if (!this.ctx || !this.gainNode) return
      const osc = this.ctx.createOscillator()
      const noteGain = this.ctx.createGain()

      osc.type = 'sine'
      osc.frequency.setValueAtTime(freq, now)

      noteGain.gain.setValueAtTime(0.001, now)
      noteGain.gain.linearRampToValueAtTime(0.015, now + 1.8)
      noteGain.gain.exponentialRampToValueAtTime(0.0001, now + duration)

      osc.connect(noteGain)
      noteGain.connect(this.gainNode)

      osc.start(now)
      osc.stop(now + duration + 0.2)
    })

    this.timer = window.setTimeout(() => {
      this.playAmbientPad()
    }, 4000)
  }
}

export const ambientSynth = new AmbientCosmicSynth()

let isMuted = false

export const soundEffects = {
  playStarChime: () => {
    if (!isMuted) playStarSound()
  },
  playPlanetResonance: () => {
    if (!isMuted) playPlanetSound()
  },
  playLetterReveal: () => {
    if (!isMuted) playLetterOpenSound()
  },
  playUnlock: () => {
    if (!isMuted) playUnlockSound()
  },
  startAmbientMusic: () => {
    if (!isMuted) ambientSynth.start()
  },
  stopAmbientMusic: () => {
    ambientSynth.stop()
  },
  toggleMute: () => {
    isMuted = !isMuted
    if (isMuted) {
      ambientSynth.stop()
    }
  },
  isMuted: () => isMuted,
}
