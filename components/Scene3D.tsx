"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, MeshTransmissionMaterial, RoundedBox } from "@react-three/drei";
import type { Group, Mesh } from "three";

// Follows the pointer with easing so the whole scene tilts in 3D
function Rig({ children }: { children: React.ReactNode }) {
  const group = useRef<Group>(null);
  useFrame(({ pointer }, delta) => {
    const g = group.current;
    if (!g) return;
    const k = 1 - Math.exp(-delta * 3);
    g.rotation.y += (pointer.x * 0.35 - g.rotation.y) * k;
    g.rotation.x += (-pointer.y * 0.25 - g.rotation.x) * k;
  });
  return <group ref={group}>{children}</group>;
}

function Blob() {
  const mesh = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (mesh.current) mesh.current.rotation.y += delta * 0.15;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={mesh} position={[2.7, 1, -1.5]} scale={1.2}>
        <icosahedronGeometry args={[1, 32]} />
        <MeshDistortMaterial color="#8257ff" emissive="#3b1a9c" roughness={0.15} metalness={0.4} distort={0.38} speed={1.6} />
      </mesh>
    </Float>
  );
}

function Ring() {
  const mesh = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.x += delta * 0.4;
    mesh.current.rotation.z += delta * 0.2;
  });
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
      <mesh ref={mesh} position={[0.45, 2, -1]} scale={0.4}>
        <torusGeometry args={[1, 0.32, 48, 120]} />
        <meshStandardMaterial color="#ff5ca8" roughness={0.25} metalness={0.6} />
      </mesh>
    </Float>
  );
}

function GlassCube() {
  const mesh = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.x += delta * 0.25;
    mesh.current.rotation.y += delta * 0.35;
  });
  return (
    <Float speed={1.8} rotationIntensity={1.2} floatIntensity={1}>
      <RoundedBox ref={mesh} args={[1, 1, 1]} radius={0.18} smoothness={6} position={[2.9, -1.3, 0]} scale={0.55}>
        <MeshTransmissionMaterial
          color="#d7cbff"
          thickness={0.6}
          roughness={0.05}
          transmission={1}
          ior={1.4}
          chromaticAberration={0.4}
          backside
          samples={4}
          resolution={256}
        />
      </RoundedBox>
    </Float>
  );
}

function Orb({ position, color, scale }: { position: [number, number, number]; color: string; scale: number }) {
  return (
    <Float speed={3} floatIntensity={2}>
      <mesh position={position} scale={scale}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} roughness={0.3} />
      </mesh>
    </Float>
  );
}

export default function Scene3D() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      // Canvas sits under the hero content, so listen for the pointer on the whole page
      eventSource={document.body}
      eventPrefix="client"
      camera={{ position: [0, 0, 7], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 5, 5]} intensity={2.2} color="#ffffff" />
      <pointLight position={[-5, -2, 3]} intensity={30} color="#ff5ca8" />
      <pointLight position={[5, 2, 2]} intensity={25} color="#8257ff" />
      <pointLight position={[0, -4, 2]} intensity={12} color="#ffb547" />
      <Rig>
        <Blob />
        <Ring />
        <GlassCube />
        <Orb position={[-3.3, 2.55, -1.5]} color="#ffb547" scale={0.2} />
        <Orb position={[0.25, -1.75, -1]} color="#3ef0c2" scale={0.12} />
        <Orb position={[-0.6, 2.45, -2]} color="#9d7bff" scale={0.2} />
      </Rig>
    </Canvas>
  );
}
