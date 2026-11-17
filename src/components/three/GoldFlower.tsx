"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import Studio from "./Studio";

function Flower() {
  const ref = useRef<THREE.Mesh>(null);

  const geometry = useMemo(() => {
    const petals = 8;
    const shape = new THREE.Shape();
    const N = 360;
    for (let i = 0; i <= N; i++) {
      const a = (i / N) * Math.PI * 2;
      const r = 1 + 0.16 * Math.cos(petals * a);
      const x = Math.cos(a) * r;
      const y = Math.sin(a) * r;
      if (i === 0) shape.moveTo(x, y);
      else shape.lineTo(x, y);
    }
    const hole = new THREE.Path();
    hole.absarc(0, 0, 0.3, 0, Math.PI * 2, true);
    shape.holes.push(hole);
    const g = new THREE.ExtrudeGeometry(shape, {
      depth: 0.22,
      bevelEnabled: true,
      bevelThickness: 0.32,
      bevelSize: 0.22,
      bevelSegments: 20,
      curveSegments: 120,
    });
    g.center();
    g.computeVertexNormals();
    return g;
  }, []);

  useFrame((state, dt) => {
    if (!ref.current) return;
    ref.current.rotation.z += dt * 0.35;
    ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, 0.35 - state.pointer.y * 0.4, 0.05);
    ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, -0.25 + state.pointer.x * 0.5, 0.05);
  });

  return (
    <Float speed={1.6} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={ref} geometry={geometry} scale={0.95}>
        <meshPhysicalMaterial color="#c6a15b" metalness={1} roughness={0.16} clearcoat={1} clearcoatRoughness={0.1} envMapIntensity={1.6} />
      </mesh>
    </Float>
  );
}

export default function GoldFlower() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 40 }} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[2, 3, 4]} intensity={1.5} color="#fff3dc" />
      <Flower />
      <Studio warm />
    </Canvas>
  );
}
