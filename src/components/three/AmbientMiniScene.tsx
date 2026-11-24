"use client";

import React, { useMemo, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import dynamic from "next/dynamic";
import { useTheme } from "@/components/ThemeProvider";
import { SceneBoundary, usePrefersReducedMotion } from "./SceneBoundary";

export type MiniSceneVariant = "about" | "hackathon" | "projects" | "contact";

function AboutSculpture({ reducedMotion }: { reducedMotion: boolean }) {
  const torusRef = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (!torusRef.current || reducedMotion) return;
    torusRef.current.rotation.x += delta * 0.25;
    torusRef.current.rotation.y += delta * 0.35;
  });

  return (
    <group>
      <Float speed={reducedMotion ? 0 : 2} floatIntensity={reducedMotion ? 0 : 0.4}>
        <mesh ref={torusRef}>
          <torusKnotGeometry args={[0.85, 0.24, 100, 20]} />
          <meshPhysicalMaterial
            color="#C4B5FD"
            iridescence={1}
            iridescenceIOR={1.4}
            roughness={0.12}
            metalness={0.15}
            clearcoat={1}
          />
        </mesh>
      </Float>
      <Float speed={reducedMotion ? 0 : 2.5} floatIntensity={reducedMotion ? 0 : 0.5}>
        <mesh position={[-1.4, 0.8, 0.4]}>
          <sphereGeometry args={[0.32, 32, 32]} />
          <meshPhysicalMaterial color="#F472B6" roughness={0.1} clearcoat={1} />
        </mesh>
      </Float>
      <Float speed={reducedMotion ? 0 : 1.8} floatIntensity={reducedMotion ? 0 : 0.45}>
        <mesh position={[1.45, -0.75, 0.3]}>
          <octahedronGeometry args={[0.36, 0]} />
          <meshPhysicalMaterial color="#6EE7B7" roughness={0.15} clearcoat={1} />
        </mesh>
      </Float>
    </group>
  );
}

function ThermalFabricLayer({
  yOffset,
  color,
  emissive,
  phase,
  opacity,
  reducedMotion,
}: {
  yOffset: number;
  color: string;
  emissive: string;
  phase: number;
  opacity: number;
  reducedMotion: boolean;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const basePositions = useMemo(() => {
    const geom = new THREE.PlaneGeometry(3.2, 1.9, 28, 18);
    return new Float32Array(geom.attributes.position.array);
  }, []);

  useFrame(({ clock }) => {
    if (!meshRef.current || reducedMotion) return;
    const t = clock.getElapsedTime() + phase;
    const pos = meshRef.current.geometry.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = basePositions[i * 3];
      const y = basePositions[i * 3 + 1];
      const wave =
        Math.sin(x * 1.4 + t * 1.3) * 0.14 +
        Math.cos(y * 1.6 + t * 1.1) * 0.1;
      pos.setZ(i, wave);
    }
    pos.needsUpdate = true;
    meshRef.current.geometry.computeVertexNormals();
  });

  return (
    <mesh
      ref={meshRef}
      position={[0, yOffset, 0]}
      rotation={[-Math.PI / 2.6, 0.15, -0.2]}
    >
      <planeGeometry args={[3.2, 1.9, 28, 18]} />
      <meshPhysicalMaterial
        color={color}
        emissive={emissive}
        emissiveIntensity={0.22}
        roughness={0.22}
        metalness={0.08}
        clearcoat={0.7}
        transparent
        opacity={opacity}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

function HackathonFabricSculpture({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <group position={[0, -0.05, 0]}>
      {/* Outer Breathable Cool Layer */}
      <ThermalFabricLayer
        yOffset={0.62}
        color="#38BDF8"
        emissive="#38BDF8"
        phase={0}
        opacity={0.72}
        reducedMotion={reducedMotion}
      />
      {/* Adaptive Middle Transition Layer */}
      <ThermalFabricLayer
        yOffset={0.0}
        color="#C4B5FD"
        emissive="#F472B6"
        phase={1.2}
        opacity={0.82}
        reducedMotion={reducedMotion}
      />
      {/* Inner Warmth Retention Layer */}
      <ThermalFabricLayer
        yOffset={-0.62}
        color="#FF8066"
        emissive="#F472B6"
        phase={2.4}
        opacity={0.88}
        reducedMotion={reducedMotion}
      />
      {/* Thermal Core Orbs */}
      <Float speed={reducedMotion ? 0 : 2.2} floatIntensity={reducedMotion ? 0 : 0.35}>
        <mesh position={[-1.1, 0.35, 0.7]}>
          <sphereGeometry args={[0.14, 24, 24]} />
          <meshStandardMaterial color="#38BDF8" emissive="#38BDF8" emissiveIntensity={0.7} />
        </mesh>
      </Float>
      <Float speed={reducedMotion ? 0 : 2} floatIntensity={reducedMotion ? 0 : 0.35}>
        <mesh position={[1.15, -0.35, 0.65]}>
          <sphereGeometry args={[0.16, 24, 24]} />
          <meshStandardMaterial color="#FF8066" emissive="#FF8066" emissiveIntensity={0.75} />
        </mesh>
      </Float>
    </group>
  );
}

function ProjectsSculpture({ reducedMotion }: { reducedMotion: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (!groupRef.current || reducedMotion) return;
    groupRef.current.rotation.y += delta * 0.28;
  });

  return (
    <group ref={groupRef}>
      <Float speed={reducedMotion ? 0 : 2} floatIntensity={reducedMotion ? 0 : 0.4}>
        <mesh position={[-0.65, 0.25, 0]} rotation={[0.3, 0.4, 0]}>
          <boxGeometry args={[0.78, 0.78, 0.78]} />
          <meshPhysicalMaterial
            color="#7C3AED"
            iridescence={0.8}
            roughness={0.14}
            clearcoat={1}
          />
        </mesh>
      </Float>
      <Float speed={reducedMotion ? 0 : 2.4} floatIntensity={reducedMotion ? 0 : 0.5}>
        <mesh position={[0.75, -0.25, 0.3]} rotation={[0.5, 0.2, 0.4]}>
          <icosahedronGeometry args={[0.52, 0]} />
          <meshPhysicalMaterial
            color="#F472B6"
            iridescence={0.9}
            roughness={0.12}
            clearcoat={1}
          />
        </mesh>
      </Float>
      <Float speed={reducedMotion ? 0 : 1.7} floatIntensity={reducedMotion ? 0 : 0.4}>
        <mesh position={[0.15, 0.85, -0.25]}>
          <torusGeometry args={[0.45, 0.12, 24, 48]} />
          <meshPhysicalMaterial
            color="#38BDF8"
            transparent
            opacity={0.78}
            roughness={0.08}
            clearcoat={1}
          />
        </mesh>
      </Float>
    </group>
  );
}

function ContactSculpture({ reducedMotion }: { reducedMotion: boolean }) {
  const ringRef = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (!ringRef.current || reducedMotion) return;
    ringRef.current.rotation.z += delta * 0.25;
    ringRef.current.rotation.x += delta * 0.14;
  });

  return (
    <group>
      <Float speed={reducedMotion ? 0 : 1.8} floatIntensity={reducedMotion ? 0 : 0.45}>
        <mesh>
          <sphereGeometry args={[0.68, 48, 48]} />
          <meshPhysicalMaterial
            color="#F472B6"
            iridescence={1}
            roughness={0.08}
            clearcoat={1}
          />
        </mesh>
      </Float>
      <mesh ref={ringRef} rotation={[0.8, 0.4, 0]}>
        <torusGeometry args={[1.25, 0.06, 20, 80]} />
        <meshPhysicalMaterial
          color="#38BDF8"
          emissive="#38BDF8"
          emissiveIntensity={0.35}
          roughness={0.15}
        />
      </mesh>
      <Float speed={reducedMotion ? 0 : 2.3} floatIntensity={reducedMotion ? 0 : 0.4}>
        <mesh position={[-1.25, -0.55, 0.4]}>
          <dodecahedronGeometry args={[0.3, 0]} />
          <meshPhysicalMaterial color="#6EE7B7" roughness={0.15} clearcoat={1} />
        </mesh>
      </Float>
    </group>
  );
}

function MiniCanvasInner({ variant }: { variant: MiniSceneVariant }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const reducedMotion = usePrefersReducedMotion();

  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0.15, 4.3], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      className="h-full w-full"
    >
      <ambientLight intensity={isDark ? 0.75 : 1.0} color="#C4B5FD" />
      <directionalLight position={[4, 5, 4]} intensity={2.1} color="#FFF9F5" />
      <pointLight position={[-3, -2, 3]} intensity={1.5} color="#F472B6" />
      <pointLight position={[3, 2, -2]} intensity={1.4} color="#38BDF8" />
      {variant === "about" && <AboutSculpture reducedMotion={reducedMotion} />}
      {variant === "hackathon" && (
        <HackathonFabricSculpture reducedMotion={reducedMotion} />
      )}
      {variant === "projects" && <ProjectsSculpture reducedMotion={reducedMotion} />}
      {variant === "contact" && <ContactSculpture reducedMotion={reducedMotion} />}
    </Canvas>
  );
}

const DynamicMiniCanvas = dynamic(
  () => Promise.resolve(MiniCanvasInner),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center">
        <div className="h-28 w-28 animate-pulse rounded-full bg-gradient-to-tr from-[#7C3AED]/25 via-[#F472B6]/20 to-[#38BDF8]/25 blur-lg" />
      </div>
    ),
  }
);

export function AmbientMiniScene({
  variant,
  className = "h-64 w-full",
}: {
  variant: MiniSceneVariant;
  className?: string;
}) {
  return (
    <div className={className}>
      <SceneBoundary
        fallback={
          <div className="flex h-full w-full items-center justify-center rounded-3xl bg-gradient-to-br from-[#7C3AED]/15 via-[#F472B6]/15 to-[#38BDF8]/15">
            <div className="h-24 w-24 rounded-full bg-gradient-to-tr from-[#7C3AED] via-[#F472B6] to-[#38BDF8] opacity-80 blur-sm" />
          </div>
        }
      >
        <DynamicMiniCanvas variant={variant} />
      </SceneBoundary>
    </div>
  );
}
