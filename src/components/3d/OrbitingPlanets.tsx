import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import * as THREE from 'three'
import { useUniverseStore, UniverseSection } from '../../store/universeStore'
import { playPlanetSound } from '../../utils/soundEffects'

interface PlanetDef {
  section: UniverseSection
  label: string
  sublabel: string
  icon: string
  radius: number
  speed: number
  size: number
  color: string
  emissive: string
  hasRing?: boolean
  yOffset: number
}

const PLANETS: PlanetDef[] = [
  {
    section: 'letters',
    label: '365 Letters',
    sublabel: 'رسائل كل يوم 💌',
    icon: '💌',
    radius: 4.8,
    speed: 0.35,
    size: 0.55,
    color: '#FF9FC5',
    emissive: '#FF6FA5',
    hasRing: true,
    yOffset: 0.2,
  },
  {
    section: 'memories',
    label: 'Our Memories',
    sublabel: 'ذكرياتنا الحلوة ✨',
    icon: '⭐',
    radius: 7.2,
    speed: 0.24,
    size: 0.65,
    color: '#A5B4FC',
    emissive: '#6366F1',
    hasRing: false,
    yOffset: -0.3,
  },
  {
    section: 'certificate',
    label: 'Noni Star',
    sublabel: 'شهادة نجمة نوني 📜',
    icon: '🌟',
    radius: 9.8,
    speed: 0.18,
    size: 0.6,
    color: '#FDE047',
    emissive: '#EAB308',
    hasRing: true,
    yOffset: 0.5,
  },
  {
    section: 'reasons',
    label: 'Little Things',
    sublabel: 'تفاصيل بحبها فيكي 💫',
    icon: '💫',
    radius: 12.5,
    speed: 0.14,
    size: 0.5,
    color: '#F472B6',
    emissive: '#EC4899',
    hasRing: false,
    yOffset: -0.4,
  },
  {
    section: 'secret',
    label: 'Secret Area',
    sublabel: 'حاجة مخبية ليكي 🔐',
    icon: '🔐',
    radius: 15.2,
    speed: 0.11,
    size: 0.45,
    color: '#C084FC',
    emissive: '#9333EA',
    hasRing: false,
    yOffset: 0.3,
  },
  {
    section: 'final',
    label: 'Final Reveal',
    sublabel: 'في حاجة أخيرة 🌙',
    icon: '🌙',
    radius: 18.0,
    speed: 0.08,
    size: 0.7,
    color: '#7DD3FC',
    emissive: '#0284C7',
    hasRing: true,
    yOffset: -0.2,
  },
]

export const OrbitingPlanets: React.FC = () => {
  return (
    <group>
      {PLANETS.map((planet) => (
        <SinglePlanet key={planet.section} planet={planet} />
      ))}
    </group>
  )
}

const SinglePlanet: React.FC<{ planet: PlanetDef }> = ({ planet }) => {
  const groupRef = useRef<THREE.Group>(null)
  const planetMeshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)
  const openSection = useUniverseStore((s) => s.openSection)

  // Random phase angle so planets are distributed around the orbit
  const phase = useRef(Math.random() * Math.PI * 2)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * planet.speed + phase.current
    const x = Math.cos(t) * planet.radius
    const z = Math.sin(t) * planet.radius
    const y = Math.sin(t * 1.5) * planet.yOffset

    if (groupRef.current) {
      groupRef.current.position.set(x, y, z)
    }
    if (planetMeshRef.current) {
      planetMeshRef.current.rotation.y += 0.015
    }
  })

  const handleClick = (e: { stopPropagation: () => void }) => {
    e.stopPropagation()
    playPlanetSound()
    openSection(planet.section)
  }

  return (
    <>
      {/* Visual Orbit Trace Ring */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[planet.radius - 0.02, planet.radius + 0.02, 64]} />
        <meshBasicMaterial
          color={planet.color}
          transparent
          opacity={0.12}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Orbiting Planet Group */}
      <group ref={groupRef}>
        <mesh
          ref={planetMeshRef}
          onClick={handleClick}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          scale={hovered ? 1.3 : 1}
        >
          <sphereGeometry args={[planet.size, 32, 32]} />
          <meshStandardMaterial
            color={planet.color}
            emissive={planet.emissive}
            emissiveIntensity={hovered ? 1.8 : 0.8}
            roughness={0.4}
            metalness={0.3}
          />
        </mesh>

        {/* Optional Planet Ring */}
        {planet.hasRing && (
          <mesh rotation={[-Math.PI / 3, 0.2, 0]}>
            <ringGeometry args={[planet.size * 1.3, planet.size * 1.9, 32]} />
            <meshBasicMaterial
              color={planet.color}
              transparent
              opacity={0.35}
              side={THREE.DoubleSide}
            />
          </mesh>
        )}

        {/* Subtle Glow Aura */}
        <pointLight color={planet.color} intensity={hovered ? 2.5 : 1} distance={4} />

        {/* Floating Label Badge */}
        <Html position={[0, planet.size + 0.6, 0]} center distanceFactor={14} pointerEvents="none">
          <div
            className={`flex flex-col items-center pointer-events-none transition-all duration-300 ${
              hovered ? 'scale-110 opacity-100' : 'opacity-85'
            }`}
          >
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 shadow-lg text-white text-xs whitespace-nowrap">
              <span>{planet.icon}</span>
              <span className="font-medium tracking-wide">{planet.label}</span>
            </div>
            <span className="text-[10px] text-white/70 font-serif-cormorant italic mt-0.5 whitespace-nowrap drop-shadow">
              {planet.sublabel}
            </span>
          </div>
        </Html>
      </group>
    </>
  )
}
