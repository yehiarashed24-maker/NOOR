import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import * as THREE from 'three'
import { useUniverseStore } from '../../store/universeStore'
import { playStarSound } from '../../utils/soundEffects'

export const CentralStar: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null)
  const glowRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)
  const openSection = useUniverseStore((s) => s.openSection)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.15
      meshRef.current.rotation.z = Math.sin(t * 0.2) * 0.05
    }
    if (glowRef.current) {
      const pulse = 1 + Math.sin(t * 2) * 0.08
      glowRef.current.scale.set(pulse, pulse, pulse)
    }
  })

  const handleClick = (e: { stopPropagation: () => void }) => {
    e.stopPropagation()
    playStarSound()
    openSection('star')
  }

  return (
    <group position={[0, 0, 0]}>
      {/* Radiant Inner Star Sphere */}
      <mesh
        ref={meshRef}
        onClick={handleClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.15 : 1}
      >
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshStandardMaterial
          emissive="#FFB3D1"
          emissiveIntensity={2.2}
          color="#FFF8FB"
          roughness={0.1}
          metalness={0.2}
        />
      </mesh>

      {/* Outer Corona Glow Layer */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[1.9, 32, 32]} />
        <meshBasicMaterial
          color="#FF6FA5"
          transparent
          opacity={0.35}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Far Outer Ambient Starlight Aura */}
      <mesh>
        <sphereGeometry args={[2.5, 32, 32]} />
        <meshBasicMaterial
          color="#C94F7C"
          transparent
          opacity={0.15}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Point light emitting from star center */}
      <pointLight color="#FFD6E7" intensity={8} distance={30} decay={2} />
      <pointLight color="#FF6FA5" intensity={4} distance={15} decay={2} />

      {/* 3D Floating Nameplate Badge */}
      <Html position={[0, -2.2, 0]} center distanceFactor={14} pointerEvents="none">
        <div className="flex flex-col items-center select-none pointer-events-none transition-all duration-300">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-[#FF6FA5]/60 shadow-[0_0_20px_rgba(255,111,165,0.6)]">
            <span className="w-2 h-2 rounded-full bg-[#FF6FA5] animate-ping" />
            <span className="text-xs uppercase tracking-[0.25em] text-white font-medium drop-shadow-md">
              NOOR • نوني
            </span>
          </div>
          <span className="text-[10px] text-[#FFD6E7]/80 tracking-wider mt-1 drop-shadow font-serif-cormorant italic">
            Tap to enter core ✨
          </span>
        </div>
      </Html>
    </group>
  )
}
