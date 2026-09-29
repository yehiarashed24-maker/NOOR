import { useState, useEffect } from 'react'

let globalAudio: HTMLAudioElement | null = null

function getAudio(): HTMLAudioElement {
  if (!globalAudio) {
    globalAudio = new Audio('/music/soundtrack.mp3')
    globalAudio.loop = true
    globalAudio.volume = 0.7
  }
  return globalAudio
}

export function useSoundtrack() {
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const audio = getAudio()

    const onPlay = () => setIsPlaying(true)
    const onPause = () => setIsPlaying(false)
    const onEnded = () => setIsPlaying(false)

    audio.addEventListener('play', onPlay)
    audio.addEventListener('pause', onPause)
    audio.addEventListener('ended', onEnded)

    // Attempt immediate playback
    audio.play().then(() => {
      setIsPlaying(true)
    }).catch(() => {
      // Browser blocked zero-click autoplay; unlock on the very first touch or click anywhere
      const unlockAudio = () => {
        audio.play().then(() => {
          setIsPlaying(true)
        }).catch(() => {})

        removeListeners()
      }

      const removeListeners = () => {
        window.removeEventListener('click', unlockAudio)
        window.removeEventListener('touchstart', unlockAudio)
        window.removeEventListener('pointerdown', unlockAudio)
        window.removeEventListener('keydown', unlockAudio)
      }

      window.addEventListener('click', unlockAudio, { once: true, passive: true })
      window.addEventListener('touchstart', unlockAudio, { once: true, passive: true })
      window.addEventListener('pointerdown', unlockAudio, { once: true, passive: true })
      window.addEventListener('keydown', unlockAudio, { once: true, passive: true })
    })

    return () => {
      audio.removeEventListener('play', onPlay)
      audio.removeEventListener('pause', onPause)
      audio.removeEventListener('ended', onEnded)
    }
  }, [])

  const toggle = () => {
    const audio = getAudio()
    if (audio.paused) {
      audio.play().then(() => setIsPlaying(true)).catch((e) => console.warn(e))
    } else {
      audio.pause()
      setIsPlaying(false)
    }
  }

  return {
    isPlaying,
    toggle,
  }
}
