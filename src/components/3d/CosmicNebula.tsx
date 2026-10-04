import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export const CosmicNebula: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.005
      groupRef.current.rotation.z = Math.sin(clock.getElapsedTime() * 0.003) * 0.05
    }
  })

  return (
    <group ref={groupRef}>
      {/* Deep Violet Nebula Glow */}
      <mesh position={[-15, 8, -25]}>
        <sphereGeometry args={[18, 16, 16]} />
        <meshBasicMaterial
          color="#3B0764"
          transparent
          opacity={0.16}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Warm Rose Nebula Glow */}
      <mesh position={[20, -10, -20]}>
        <sphereGeometry args={[22, 16, 16]} />
        <meshBasicMaterial
          color="#BE185D"
          transparent
          opacity={0.12}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Midnight Blue Nebula Glow */}
      <mesh position={[5, 16, -15]}>
        <sphereGeometry args={[16, 16, 16]} />
        <meshBasicMaterial
          color="#1E1B4B"
          transparent
          opacity={0.2}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Soft Sagittarius Golden Shimmer */}
      <mesh position={[-8, -12, -30]}>
        <sphereGeometry args={[14, 16, 16]} />
        <meshBasicMaterial
          color="#854D0E"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  )
}
