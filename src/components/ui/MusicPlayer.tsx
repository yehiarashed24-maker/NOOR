import React, { useEffect, useRef, useState } from 'react'
import { useUniverseStore } from '../../store/universeStore'
import { siteConfig } from '../../data/config'
import { soundEffects } from '../../utils/soundEffects'

export const MusicPlayer: React.FC = () => {
  const { isMusicPlaying, setMusicPlaying, isAudioMuted } = useUniverseStore()
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [useFallbackSynth, setUseFallbackSynth] = useState<boolean>(false)

  // Initialize audio element
  useEffect(() => {
    const audio = new Audio(siteConfig.music.placeholderPath)
    audio.loop = true
    audio.volume = 0.5
    audioRef.current = audio

    const handlePlayError = () => {
      // If our-song.mp3 fails, fall back to our synthesized ambient space music
      setUseFallbackSynth(true)
    }

    audio.addEventListener('error', handlePlayError)

    return () => {
      audio.removeEventListener('error', handlePlayError)
      audio.pause()
      soundEffects.stopAmbientMusic()
    }
  }, [])

  // Sync state changes with audio playback
  useEffect(() => {
    const audio = audioRef.current

    if (isAudioMuted) {
      if (audio) audio.muted = true
      soundEffects.stopAmbientMusic()
      return
    }

    if (audio) audio.muted = false

    if (isMusicPlaying) {
      if (useFallbackSynth) {
        soundEffects.startAmbientMusic()
      } else if (audio) {
        audio
          .play()
          .then(() => {
            soundEffects.stopAmbientMusic()
          })
          .catch(() => {
            // Autoplay blocked or file error -> trigger synth
            setUseFallbackSynth(true)
            soundEffects.startAmbientMusic()
          })
      }
    } else {
      if (audio) audio.pause()
      soundEffects.stopAmbientMusic()
    }
  }, [isMusicPlaying, isAudioMuted, useFallbackSynth])

  return null
}
