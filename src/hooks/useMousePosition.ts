import { useState, useEffect } from 'react'

export interface MousePosition {
  x: number
  y: number
  normalizedX: number
  normalizedY: number
}

export function useMousePosition(): MousePosition {
  const [position, setPosition] = useState<MousePosition>({
    x: 0,
    y: 0,
    normalizedX: 0,
    normalizedY: 0,
  })

  useEffect(() => {
    let ticking = false

    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const width = window.innerWidth
          const height = window.innerHeight
          setPosition({
            x: e.clientX,
            y: e.clientY,
            normalizedX: (e.clientX / width) * 2 - 1,
            normalizedY: -(e.clientY / height) * 2 + 1,
          })
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return position
}
