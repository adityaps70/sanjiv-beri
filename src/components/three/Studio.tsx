"use client";

import { Environment, Lightformer } from "@react-three/drei";

/** Procedural studio lighting — no HDR download, crisp reflections on metal & pearl. */
export default function Studio({ warm = false }: { warm?: boolean }) {
  return (
    <Environment resolution={256}>
      <color attach="background" args={[warm ? "#2a2214" : "#e9edf2"]} />
      <group rotation={[-Math.PI / 3, 0, 1]}>
        <Lightformer form="circle" intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={2} />
        <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={2} />
        <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={2} />
        <Lightformer form="circle" intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={8} />
        <Lightformer form="rect" intensity={warm ? 3 : 1.5} color="#ffffff" position={[0, 0, 8]} scale={[12, 4, 1]} onUpdate={(s) => s.lookAt(0, 0, 0)} />
        {!warm && (
          <Lightformer form="rect" intensity={1} color="#071f36" position={[-8, -4, 2]} scale={[6, 10, 1]} onUpdate={(s) => s.lookAt(0, 0, 0)} />
        )}
        <Lightformer
          form="ring"
          color={warm ? "#ffd99a" : "#c6a15b"}
          intensity={warm ? 10 : 5}
          onUpdate={(self) => self.lookAt(0, 0, 0)}
          position={[10, 10, 0]}
          scale={10}
        />
      </group>
    </Environment>
  );
}
