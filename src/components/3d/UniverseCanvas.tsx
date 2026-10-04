import React, { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { StarField } from './StarField'
import { CosmicNebula } from './CosmicNebula'
import { CentralStar } from './CentralStar'
import { OrbitingPlanets } from './OrbitingPlanets'
import { NoorConstellation3D } from './NoorConstellation3D'
import { useUniverseStore } from '../../store/universeStore'

export const UniverseCanvas: React.FC = () => {
  const isFinalRevealed = useUniverseStore((s) => s.isFinalRevealed)
  const [isMobile, setIsMobile] = useState(false)
  const [webGlSupported, setWebGlSupported] = useState(true)

  useEffect(() => {
    // Check mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)

    // Check WebGL support
    try {
      const canvas = document.createElement('canvas')
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
      if (!gl) setWebGlSupported(false)
    } catch {
      setWebGlSupported(false)
    }

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  if (!webGlSupported) {
    return (
      <div className="fixed inset-0 z-0 flex items-center justify-center bg-[#030308] text-center p-6">
        <div className="max-w-md p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 text-white">
          <h2 className="text-2xl font-serif-playfair text-[#FF9FC5] mb-2">NOOR UNIVERSE</h2>
          <p className="text-sm text-white/70">
            WebGL is not supported on this browser, but your universe is still shining bright.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 z-0 bg-[#030308] overflow-hidden select-none">
      <Canvas
        camera={{
          position: isMobile ? [0, 16, 26] : [0, 12, 22],
          fov: isMobile ? 58 : 50,
          near: 0.1,
          far: 200,
        }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          powerPreference: 'high-performance',
          alpha: false,
        }}
      >
        <color attach="background" args={['#030308']} />

        {/* Subtle Ambient Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 15, 10]} intensity={0.8} color="#FFF8FB" />

        <Suspense fallback={null}>
          {/* Deep Space Background Stars & Cosmic Nebula */}
          <StarField count={isMobile ? 2200 : 3800} />
          <CosmicNebula />

          {/* Central Star: NOOR */}
          <CentralStar />

          {/* Interactive Orbiting Planets */}
          <OrbitingPlanets />

          {/* Morphing Noor Constellation (Active during Final Experience) */}
          <NoorConstellation3D active={isFinalRevealed} />
        </Suspense>

        {/* Orbit Controls with gentle damping and boundaries */}
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          minDistance={6}
          maxDistance={42}
          rotateSpeed={0.5}
          zoomSpeed={0.6}
          dampingFactor={0.06}
          autoRotate={!isFinalRevealed}
          autoRotateSpeed={0.3}
          maxPolarAngle={Math.PI / 1.7}
          minPolarAngle={Math.PI / 4.5}
        />
      </Canvas>
    </div>
  )
}
