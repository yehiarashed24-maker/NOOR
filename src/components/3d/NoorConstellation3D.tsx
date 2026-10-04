import React, { useMemo, useRef, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useUniverseStore } from '../../store/universeStore'

interface NoorConstellationProps {
  active: boolean
}

export const NoorConstellation3D: React.FC<NoorConstellationProps> = ({ active }) => {
  const pointsRef = useRef<THREE.Points>(null)
  const [phase, setPhase] = useState<'idle' | 'morphN' | 'morphNOOR'>('idle')

  const count = 1800

  // Generate target coordinates for "N" and "NOOR"
  const { initialPositions, targetPositionsN, targetPositionsNOOR, colors } = useMemo(() => {
    const init = new Float32Array(count * 3)
    const targetN = new Float32Array(count * 3)
    const targetNOOR = new Float32Array(count * 3)
    const cols = new Float32Array(count * 3)

    const palette = [
      new THREE.Color('#FFD6E7'),
      new THREE.Color('#FF6FA5'),
      new THREE.Color('#FDE047'),
      new THREE.Color('#FFFFFF'),
      new THREE.Color('#A5B4FC'),
    ]

    // 1. Initial random space cloud
    for (let i = 0; i < count; i++) {
      init[i * 3] = (Math.random() - 0.5) * 50
      init[i * 3 + 1] = (Math.random() - 0.5) * 40
      init[i * 3 + 2] = (Math.random() - 0.5) * 40

      const color = palette[i % palette.length]
      cols[i * 3] = color.r
      cols[i * 3 + 1] = color.g
      cols[i * 3 + 2] = color.b
    }

    // 2. Generate points for single large "N" (Height ~ 12, Width ~ 8)
    const nPoints: [number, number, number][] = []
    const density = 250
    // Left vertical line
    for (let i = 0; i < density; i++) {
      const y = -6 + (i / density) * 12
      nPoints.push([-4, y, 0])
    }
    // Right vertical line
    for (let i = 0; i < density; i++) {
      const y = -6 + (i / density) * 12
      nPoints.push([4, y, 0])
    }
    // Diagonal
    for (let i = 0; i < density; i++) {
      const t = i / density
      const x = -4 + t * 8
      const y = 6 - t * 12
      nPoints.push([x, y, 0])
    }

    // Fill targetN
    for (let i = 0; i < count; i++) {
      if (i < nPoints.length) {
        const p = nPoints[i]
        targetN[i * 3] = p[0] + (Math.random() - 0.5) * 0.2
        targetN[i * 3 + 1] = p[1] + (Math.random() - 0.5) * 0.2
        targetN[i * 3 + 2] = p[2] + (Math.random() - 0.5) * 0.2
      } else {
        // Orbiting halo around N
        const angle = Math.random() * Math.PI * 2
        const rad = 7 + Math.random() * 8
        targetN[i * 3] = Math.cos(angle) * rad
        targetN[i * 3 + 1] = Math.sin(angle) * rad
        targetN[i * 3 + 2] = (Math.random() - 0.5) * 4
      }
    }

    // 3. Generate points for "NOOR"
    const noorPoints: [number, number, number][] = []
    const letterDensity = 120

    // Letter 'N' at x = -7.5
    for (let i = 0; i < letterDensity; i++) {
      const y = -3 + (i / letterDensity) * 6
      noorPoints.push([-9.5, y, 0])
      noorPoints.push([-5.5, y, 0])
      const t = i / letterDensity
      noorPoints.push([-9.5 + t * 4, 3 - t * 6, 0])
    }

    // Letter 'O' at x = -2.5 (Ellipse)
    for (let i = 0; i < letterDensity * 2; i++) {
      const a = (i / (letterDensity * 2)) * Math.PI * 2
      noorPoints.push([-2.5 + Math.cos(a) * 1.8, Math.sin(a) * 3, 0])
    }

    // Letter 'O' at x = 2.5 (Ellipse)
    for (let i = 0; i < letterDensity * 2; i++) {
      const a = (i / (letterDensity * 2)) * Math.PI * 2
      noorPoints.push([2.5 + Math.cos(a) * 1.8, Math.sin(a) * 3, 0])
    }

    // Letter 'R' at x = 7.5
    for (let i = 0; i < letterDensity; i++) {
      const y = -3 + (i / letterDensity) * 6
      noorPoints.push([6.0, y, 0]) // spine
      // upper loop
      const a = (i / letterDensity) * Math.PI - Math.PI / 2
      noorPoints.push([6.0 + Math.cos(a) * 1.5, 1.5 + Math.sin(a) * 1.5, 0])
      // leg
      const t = i / letterDensity
      noorPoints.push([6.0 + t * 2.5, -t * 3, 0])
    }

    // Fill targetNOOR
    for (let i = 0; i < count; i++) {
      if (i < noorPoints.length) {
        const p = noorPoints[i]
        targetNOOR[i * 3] = p[0] + (Math.random() - 0.5) * 0.15
        targetNOOR[i * 3 + 1] = p[1] + (Math.random() - 0.5) * 0.15
        targetNOOR[i * 3 + 2] = p[2] + (Math.random() - 0.5) * 0.15
      } else {
        // Outer celestial halo
        const angle = Math.random() * Math.PI * 2
        const rad = 12 + Math.random() * 10
        targetNOOR[i * 3] = Math.cos(angle) * rad
        targetNOOR[i * 3 + 1] = Math.sin(angle) * rad * 0.5
        targetNOOR[i * 3 + 2] = (Math.random() - 0.5) * 6
      }
    }

    return {
      initialPositions: init,
      targetPositionsN: targetN,
      targetPositionsNOOR: targetNOOR,
      colors: cols,
    }
  }, [count])

  // Current working position buffer
  const currentPositions = useMemo(() => new Float32Array(initialPositions), [initialPositions])

  // Progression sequence when active
  useEffect(() => {
    if (!active) {
      setPhase('idle')
      return
    }

    // Phase 1 -> N after 1.5s
    const t1 = setTimeout(() => {
      setPhase('morphN')
    }, 1500)

    // Phase 2 -> NOOR after 5.5s
    const t2 = setTimeout(() => {
      setPhase('morphNOOR')
    }, 5500)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [active])

  useFrame(() => {
    if (!pointsRef.current || !active) return

    const posAttr = pointsRef.current.geometry.attributes.position as THREE.BufferAttribute
    const pos = posAttr.array as Float32Array

    let targetArray: Float32Array | null = null
    if (phase === 'morphN') {
      targetArray = targetPositionsN
    } else if (phase === 'morphNOOR') {
      targetArray = targetPositionsNOOR
    }

    if (targetArray) {
      const lerpSpeed = phase === 'morphNOOR' ? 0.045 : 0.035
      for (let i = 0; i < count * 3; i++) {
        pos[i] += (targetArray[i] - pos[i]) * lerpSpeed
      }
      posAttr.needsUpdate = true
    }
  })

  if (!active) return null

  return (
    <points ref={pointsRef} position={[0, 1.5, 0]}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[currentPositions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.28}
        vertexColors
        transparent
        opacity={0.95}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}
