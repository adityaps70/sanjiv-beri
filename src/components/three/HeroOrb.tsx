"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import Studio from "./Studio";

function Orb() {
  const group = useRef<THREE.Group>(null);
  const ring = useRef<THREE.Group>(null);
  const moon = useRef<THREE.Mesh>(null);

  useFrame((state, dt) => {
    const t = state.clock.elapsedTime;
    if (group.current) {
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, state.pointer.x * 0.5, 0.04);
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -state.pointer.y * 0.3, 0.04);
    }
    if (ring.current) ring.current.rotation.z += dt * 0.15;
    if (moon.current) {
      moon.current.position.set(Math.cos(t * 0.6) * 2.05, Math.sin(t * 0.6) * 0.55, Math.sin(t * 0.6) * 0.9);
    }
  });

  return (
    <group ref={group}>
      <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.6}>
        <mesh>
          <icosahedronGeometry args={[1.25, 64]} />
          <MeshDistortMaterial
            color="#ffffff"
            roughness={0.12}
            metalness={0.05}
            clearcoat={1}
            clearcoatRoughness={0.05}
            distort={0.32}
            speed={1.6}
            envMapIntensity={1.4}
          />
        </mesh>
      </Float>
      <group ref={ring} rotation={[1.2, 0.15, 0]}>
        <mesh>
          <torusGeometry args={[2.05, 0.018, 24, 256]} />
          <meshStandardMaterial color="#c6a15b" metalness={1} roughness={0.2} />
        </mesh>
      </group>
      <group rotation={[0.35, 0, -0.25]}>
        <mesh ref={moon}>
          <sphereGeometry args={[0.11, 48, 48]} />
          <meshStandardMaterial color="#c6a15b" metalness={1} roughness={0.15} />
        </mesh>
      </group>
    </group>
  );
}

export default function HeroOrb() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 6.2], fov: 40 }} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 4, 5]} intensity={1.2} />
      <Orb />
      <Studio />
    </Canvas>
  );
}
