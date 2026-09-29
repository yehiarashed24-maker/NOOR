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

    const updatePosition = (clientX: number, clientY: number) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const width = window.innerWidth
          const height = window.innerHeight
          setPosition({
            x: clientX,
            y: clientY,
            normalizedX: (clientX / width) * 2 - 1,
            normalizedY: -(clientY / height) * 2 + 1,
          })
          ticking = false
        })
        ticking = true
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      updatePosition(e.clientX, e.clientY)
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        updatePosition(e.touches[0].clientX, e.touches[0].clientY)
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchmove', handleTouchMove)
    }
  }, [])

  return position
}
