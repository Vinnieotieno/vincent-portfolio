"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from "@react-three/drei"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"
import { useTheme } from "../contexts/ThemeContext"

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null)
  const { theme } = useTheme()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 100, 200]} scale={2}>
        <MeshDistortMaterial
          color={theme === "dark" ? "#ffffff" : "#3b82f6"}
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.4}
          transparent
          opacity={0.05}
        />
      </Sphere>
    </Float>
  )
}

function Particles() {
  const points = useRef<THREE.Points>(null)
  const { theme } = useTheme()

  const particlesPosition = new Float32Array(3000 * 3)

  for (let i = 0; i < 3000; i++) {
    particlesPosition[i * 3] = (Math.random() - 0.5) * 10
    particlesPosition[i * 3 + 1] = (Math.random() - 0.5) * 10
    particlesPosition[i * 3 + 2] = (Math.random() - 0.5) * 10
  }

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.x = state.clock.elapsedTime * 0.05
      points.current.rotation.y = state.clock.elapsedTime * 0.075
    }
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.003} color={theme === "dark" ? "#ffffff" : "#6366f1"} transparent opacity={0.4} />
    </points>
  )
}

const Scene3D = () => {
  const { theme } = useTheme()

  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5] }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={theme === "dark" ? 0.5 : 0.3} />
        <pointLight position={[10, 10, 10]} intensity={theme === "dark" ? 1 : 0.5} />
        <AnimatedSphere />
        <Particles />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.3}
          enableDamping
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  )
}

export default Scene3D
