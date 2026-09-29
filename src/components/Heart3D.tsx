import React, { useRef, useMemo, useState, useEffect, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'
import { motion } from 'framer-motion'
import { useMousePosition } from '@/hooks/useMousePosition'

// Fallback CSS Heart when WebGL is unavailable or during loading
export const CSSHeartFallback: React.FC<{ size?: 'sm' | 'md' | 'lg' | 'xl' }> = ({ size = 'lg' }) => {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-36 h-36 sm:w-44 sm:h-44',
    xl: 'w-48 h-48 sm:w-56 sm:h-56',
  }

  return (
    <div className="relative flex items-center justify-center p-2">
      <div className={`relative ${sizeClasses[size]} animate-float`}>
        {/* Soft back glow */}
        <div className="absolute inset-0 rounded-full bg-[#FF9FC5]/35 blur-2xl animate-pulse" />
        
        {/* Cute Glass Heart SVG */}
        <svg
          viewBox="0 0 24 24"
          className="w-full h-full drop-shadow-[0_10px_25px_rgba(255,111,165,0.45)] filter transition-transform duration-700 hover:scale-110"
        >
          <defs>
            <linearGradient id="fallbackHeartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="35%" stopColor="#FFD6E7" stopOpacity="0.9" />
              <stop offset="70%" stopColor="#FF9FC5" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#FF6FA5" stopOpacity="0.95" />
            </linearGradient>
            <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            fill="url(#fallbackHeartGrad)"
            stroke="rgba(255, 255, 255, 0.8)"
            strokeWidth="0.75"
            filter="url(#softGlow)"
          />
        </svg>
      </div>
    </div>
  )
}

// Pre-computed fixed stardust points for purity
const PRECOMPUTED_POINTS = [
  0.8, 0.5, 0.7, -0.6, 0.9, -0.4, 1.1, -0.2, 0.6, -0.9, -0.7, 0.5,
  0.3, 1.2, -0.3, -0.5, 1.0, 0.8, 1.3, 0.1, -0.7, -1.1, 0.4, 0.5,
  0.6, -1.0, -0.4, -0.2, -1.2, 0.8, 0.9, 0.8, -0.6, -0.7, -0.6, -0.9,
  1.0, -0.5, 0.8, -1.2, -0.3, -0.5, 0.4, 1.3, 0.4, -0.4, 0.6, 1.2,
  0.7, -0.8, 0.9, -0.9, 0.7, -0.8, 1.2, -0.4, -0.3, -0.3, -1.1, -0.8,
  0.5, 0.9, -1.0, -1.0, 0.5, 0.8, 0.8, -0.9, -0.6, -0.6, -0.8, 0.9,
]

function HeartMesh({ mousePos }: { mousePos: { normalizedX: number; normalizedY: number } }) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const groupRef = useRef<THREE.Group>(null!)

  // Generate Heart 3D Geometry via Extrude Shape
  const heartGeometry = useMemo(() => {
    const shape = new THREE.Shape()
    const x = 0, y = 0
    shape.moveTo(x + 0.25, y + 0.25)
    shape.bezierCurveTo(x + 0.25, y + 0.25, x + 0.2, y, x, y)
    shape.bezierCurveTo(x - 0.3, y, x - 0.3, y + 0.35, x - 0.3, y + 0.35)
    shape.bezierCurveTo(x - 0.3, y + 0.55, x - 0.1, y + 0.77, x + 0.25, y + 1.0)
    shape.bezierCurveTo(x + 0.6, y + 0.77, x + 0.8, y + 0.55, x + 0.8, y + 0.35)
    shape.bezierCurveTo(x + 0.8, y + 0.35, x + 0.8, y, x + 0.5, y)
    shape.bezierCurveTo(x + 0.35, y, x + 0.25, y + 0.25, x + 0.25, y + 0.25)

    const extrudeSettings: THREE.ExtrudeGeometryOptions = {
      depth: 0.25,
      bevelEnabled: true,
      bevelSegments: 12,
      steps: 2,
      bevelSize: 0.14,
      bevelThickness: 0.14,
    }

    const geo = new THREE.ExtrudeGeometry(shape, extrudeSettings)
    geo.center()
    return geo
  }, [])

  // Floating ambient particles around the 3D heart
  const particlesGeo = useMemo(() => {
    const positions = new Float32Array(PRECOMPUTED_POINTS)
    const pGeo = new THREE.BufferGeometry()
    pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    return pGeo
  }, [])

  useFrame((state, delta) => {
    if (!groupRef.current || !meshRef.current) return

    // Continuous rotation
    meshRef.current.rotation.y += delta * 0.45
    meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.8) * 0.08

    // Reaction to mouse/touch
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      mousePos.normalizedX * 0.35,
      0.05
    )
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      -mousePos.normalizedY * 0.25,
      0.05
    )
  })

  return (
    <group ref={groupRef}>
      <Float speed={2.2} rotationIntensity={0.25} floatIntensity={0.35}>
        <mesh ref={meshRef} geometry={heartGeometry} rotation={[Math.PI, 0, 0]} scale={1.42}>
          {/* Subtle soft pink glass/satin material */}
          <meshPhysicalMaterial
            color="#FFB3D1"
            emissive="#FF8FB8"
            emissiveIntensity={0.2}
            roughness={0.15}
            metalness={0.08}
            clearcoat={0.9}
            clearcoatRoughness={0.1}
            transmission={0.4}
            ior={1.3}
            thickness={0.8}
            reflectivity={0.6}
          />
        </mesh>
      </Float>

      {/* Little floating stardust points */}
      <points geometry={particlesGeo}>
        <pointsMaterial
          size={0.035}
          color="#FFD6E7"
          transparent
          opacity={0.7}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  )
}

interface Heart3DProps {
  className?: string
}

export const Heart3D: React.FC<Heart3DProps> = ({ className = 'w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64' }) => {
  const mousePos = useMousePosition()
  const [hasWebGL] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true
    try {
      const canvas = document.createElement('canvas')
      return Boolean(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    } catch {
      return false
    }
  })

  // Ensure Three.js canvas sizes properly without needing interaction
  useEffect(() => {
    const triggerResize = () => {
      window.dispatchEvent(new Event('resize'))
    }
    triggerResize()
    const timer1 = setTimeout(triggerResize, 50)
    const timer2 = setTimeout(triggerResize, 180)
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  if (!hasWebGL) {
    return (
      <div className={className}>
        <CSSHeartFallback size="lg" />
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`relative ${className}`}
    >
      <div className="absolute inset-0 rounded-full bg-[#FF9FC5]/20 blur-3xl -z-10 pointer-events-none" />
      
      <Suspense fallback={<CSSHeartFallback size="lg" />}>
        <Canvas
          camera={{ position: [0, 0, 3.3], fov: 45 }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
          className="w-full h-full cursor-grab active:cursor-grabbing"
        >
          <ambientLight intensity={1.2} />
          <directionalLight position={[3, 4, 3]} intensity={1.5} color="#FFFFFF" />
          <directionalLight position={[-3, -2, -2]} intensity={0.8} color="#FFD6E7" />
          <pointLight position={[0, 0, 2]} intensity={0.6} color="#FF6FA5" />
          <HeartMesh mousePos={mousePos} />
        </Canvas>
      </Suspense>
    </motion.div>
  )
}
