"use client";

import React, { useMemo, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, ContactShadows } from "@react-three/drei";
import { useTheme } from "@/components/ThemeProvider";
import { usePrefersReducedMotion } from "./SceneBoundary";

function createSymbolTexture(
  symbol: string,
  label: string,
  colorStart: string,
  colorEnd: string,
  isDark: boolean
): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext("2d");

  if (ctx) {
    ctx.clearRect(0, 0, 256, 256);

    const grad = ctx.createLinearGradient(0, 0, 256, 256);
    grad.addColorStop(0, colorStart);
    grad.addColorStop(1, colorEnd);

    // Rounded glass tile background
    const r = 44;
    ctx.beginPath();
    ctx.moveTo(r, 12);
    ctx.lineTo(244 - r, 12);
    ctx.quadraticCurveTo(244, 12, 244, 12 + r);
    ctx.lineTo(244, 244 - r);
    ctx.quadraticCurveTo(244, 244, 244 - r, 244);
    ctx.lineTo(12 + r, 244);
    ctx.quadraticCurveTo(12, 244, 12, 244 - r);
    ctx.lineTo(12, 12 + r);
    ctx.quadraticCurveTo(12, 12, 12 + r, 12);
    ctx.closePath();

    ctx.fillStyle = isDark
      ? "rgba(16, 16, 28, 0.88)"
      : "rgba(255, 249, 245, 0.94)";
    ctx.fill();

    ctx.lineWidth = 8;
    ctx.strokeStyle = grad;
    ctx.stroke();

    // Inner glow dot
    ctx.beginPath();
    ctx.arc(204, 52, 10, 0, Math.PI * 2);
    ctx.fillStyle = colorEnd;
    ctx.fill();

    // Main symbol
    ctx.fillStyle = grad;
    ctx.font = "700 84px system-ui, -apple-system, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(symbol, 128, 114);

    // Language name
    ctx.fillStyle = isDark ? "#FFF9F5" : "#10101C";
    ctx.font = "600 28px system-ui, -apple-system, sans-serif";
    ctx.fillText(label, 128, 192);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
}

function LanguageTile({
  position,
  symbol,
  label,
  colorStart,
  colorEnd,
  phase,
  isDark,
  reducedMotion,
}: {
  position: [number, number, number];
  symbol: string;
  label: string;
  colorStart: string;
  colorEnd: string;
  phase: number;
  isDark: boolean;
  reducedMotion: boolean;
}) {
  const meshRef = useRef<THREE.Group>(null);
  const texture = useMemo(
    () => createSymbolTexture(symbol, label, colorStart, colorEnd, isDark),
    [symbol, label, colorStart, colorEnd, isDark]
  );

  useFrame(({ clock }) => {
    if (!meshRef.current || reducedMotion) return;
    const t = clock.getElapsedTime() + phase;
    meshRef.current.position.y = position[1] + Math.sin(t * 1.1) * 0.18;
    meshRef.current.rotation.y = Math.sin(t * 0.65) * 0.28;
    meshRef.current.rotation.z = Math.cos(t * 0.5) * 0.08;
  });

  return (
    <group ref={meshRef} position={position}>
      <mesh castShadow>
        <boxGeometry args={[0.92, 0.92, 0.14]} />
        <meshPhysicalMaterial
          color={isDark ? "#1a1830" : "#ffffff"}
          roughness={0.18}
          metalness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.12}
          transparent
          opacity={0.92}
        />
      </mesh>
      <mesh position={[0, 0, 0.075]}>
        <planeGeometry args={[0.88, 0.88]} />
        <meshBasicMaterial map={texture} transparent />
      </mesh>
      <mesh position={[0, 0, -0.075]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[0.88, 0.88]} />
        <meshBasicMaterial map={texture} transparent />
      </mesh>
    </group>
  );
}

function NeuralConstellation({ reducedMotion }: { reducedMotion: boolean }) {
  const groupRef = useRef<THREE.Group>(null);

  const { nodes, edges } = useMemo(() => {
    const pts: Array<{ pos: [number, number, number]; color: string; size: number }> = [
      { pos: [-1.45, 1.15, -0.45], color: "#C4B5FD", size: 0.09 },
      { pos: [-0.95, 1.55, 0.35], color: "#38BDF8", size: 0.08 },
      { pos: [1.35, 1.3, -0.25], color: "#F472B6", size: 0.1 },
      { pos: [1.7, 0.45, 0.4], color: "#6EE7B7", size: 0.085 },
      { pos: [1.25, -1.25, -0.35], color: "#FF8066", size: 0.095 },
      { pos: [-1.35, -1.05, 0.3], color: "#7C3AED", size: 0.09 },
      { pos: [0.0, 1.85, -0.4], color: "#6EE7B7", size: 0.08 },
      { pos: [0.05, -1.75, 0.2], color: "#38BDF8", size: 0.085 },
    ];

    const pairs: Array<[[number, number, number], [number, number, number], string]> = [
      [pts[0].pos, pts[1].pos, "#C4B5FD"],
      [pts[1].pos, pts[6].pos, "#38BDF8"],
      [pts[6].pos, pts[2].pos, "#F472B6"],
      [pts[2].pos, pts[3].pos, "#6EE7B7"],
      [pts[3].pos, pts[4].pos, "#FF8066"],
      [pts[4].pos, pts[7].pos, "#38BDF8"],
      [pts[7].pos, pts[5].pos, "#7C3AED"],
      [pts[5].pos, pts[0].pos, "#C4B5FD"],
      [pts[0].pos, [0, 0, 0], "#7C3AED"],
      [pts[2].pos, [0, 0, 0], "#F472B6"],
      [pts[4].pos, [0, 0, 0], "#FF8066"],
      [pts[5].pos, [0, 0, 0], "#38BDF8"],
    ];

    return { nodes: pts, edges: pairs };
  }, []);

  useFrame((_, delta) => {
    if (!groupRef.current || reducedMotion) return;
    groupRef.current.rotation.y += delta * 0.12;
  });

  return (
    <group ref={groupRef}>
      {edges.map(([start, end, color], idx) => (
        <Line
          key={idx}
          points={[start, end]}
          color={color}
          lineWidth={1.3}
          transparent
          opacity={0.48}
        />
      ))}
      {nodes.map((node, idx) => (
        <mesh key={idx} position={node.pos}>
          <sphereGeometry args={[node.size, 20, 20]} />
          <meshStandardMaterial
            color={node.color}
            emissive={node.color}
            emissiveIntensity={0.6}
            roughness={0.2}
          />
        </mesh>
      ))}
    </group>
  );
}

function HeroComposition({ isDark }: { isDark: boolean }) {
  const reducedMotion = usePrefersReducedMotion();
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (reducedMotion) return;
    const t = state.clock.getElapsedTime();
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += delta * 0.24;
      ring1Ref.current.rotation.x = Math.PI / 3 + Math.sin(t * 0.35) * 0.08;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z -= delta * 0.18;
      ring2Ref.current.rotation.y = Math.PI / 4 + Math.cos(t * 0.28) * 0.1;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x += delta * 0.14;
      ring3Ref.current.rotation.y += delta * 0.2;
    }
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.22;
      coreRef.current.rotation.x = Math.sin(t * 0.5) * 0.14;
    }
  });

  return (
    <>
      <ambientLight intensity={isDark ? 0.65 : 0.9} color="#C4B5FD" />
      <directionalLight
        position={[4, 6, 5]}
        intensity={isDark ? 2.1 : 2.3}
        color="#FFF9F5"
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <pointLight position={[-4, 2, 3]} intensity={1.8} color="#F472B6" />
      <pointLight position={[3, -3, 2]} intensity={1.6} color="#38BDF8" />
      <pointLight position={[0, 4, -3]} intensity={1.4} color="#7C3AED" />

      <group position={[0, 0.1, 0]}>
        {/* Central Iridescent Abstract Sphere */}
        <Float
          speed={reducedMotion ? 0 : 1.8}
          rotationIntensity={reducedMotion ? 0 : 0.25}
          floatIntensity={reducedMotion ? 0 : 0.45}
        >
          <mesh ref={coreRef} castShadow receiveShadow>
            <sphereGeometry args={[0.92, 64, 64]} />
            <meshPhysicalMaterial
              color={isDark ? "#9D7BFF" : "#C4B5FD"}
              roughness={0.08}
              metalness={0.18}
              iridescence={1}
              iridescenceIOR={1.45}
              iridescenceThicknessRange={[140, 620]}
              clearcoat={1}
              clearcoatRoughness={0.06}
            />
          </mesh>

          {/* Transparent Outer Glass Shell */}
          <mesh>
            <icosahedronGeometry args={[1.18, 1]} />
            <meshPhysicalMaterial
              color="#FFF9F5"
              roughness={0.05}
              metalness={0}
              transparent
              opacity={isDark ? 0.16 : 0.26}
              transmission={0.65}
              thickness={0.6}
              ior={1.35}
              wireframe={false}
            />
          </mesh>
        </Float>

        {/* Secondary Iridescent Spheres */}
        <Float speed={reducedMotion ? 0 : 2.2} floatIntensity={reducedMotion ? 0 : 0.55}>
          <mesh position={[-1.45, -0.35, 0.65]} castShadow>
            <sphereGeometry args={[0.34, 40, 40]} />
            <meshPhysicalMaterial
              color="#F472B6"
              roughness={0.12}
              metalness={0.15}
              iridescence={0.9}
              clearcoat={1}
            />
          </mesh>
        </Float>

        <Float speed={reducedMotion ? 0 : 1.9} floatIntensity={reducedMotion ? 0 : 0.5}>
          <mesh position={[1.4, -0.55, 0.45]} castShadow>
            <sphereGeometry args={[0.26, 36, 36]} />
            <meshPhysicalMaterial
              color="#6EE7B7"
              roughness={0.15}
              metalness={0.1}
              iridescence={0.85}
              clearcoat={1}
            />
          </mesh>
        </Float>

        {/* Floating Lavender & Pink Geometric Shapes */}
        <Float
          speed={reducedMotion ? 0 : 2.4}
          rotationIntensity={reducedMotion ? 0 : 0.8}
          floatIntensity={reducedMotion ? 0 : 0.5}
        >
          <mesh position={[-1.1, 1.05, 0.4]} castShadow>
            <octahedronGeometry args={[0.32, 0]} />
            <meshPhysicalMaterial
              color="#C4B5FD"
              roughness={0.14}
              metalness={0.22}
              clearcoat={1}
            />
          </mesh>
        </Float>

        <Float
          speed={reducedMotion ? 0 : 2.1}
          rotationIntensity={reducedMotion ? 0 : 0.9}
          floatIntensity={reducedMotion ? 0 : 0.5}
        >
          <mesh position={[1.25, 0.95, 0.25]} castShadow>
            <torusKnotGeometry args={[0.24, 0.08, 80, 16]} />
            <meshPhysicalMaterial
              color="#FF8066"
              roughness={0.16}
              metalness={0.2}
              iridescence={0.7}
              clearcoat={1}
            />
          </mesh>
        </Float>

        {/* Transparent Glass Torus Accent */}
        <Float
          speed={reducedMotion ? 0 : 1.7}
          rotationIntensity={reducedMotion ? 0 : 0.6}
          floatIntensity={reducedMotion ? 0 : 0.4}
        >
          <mesh position={[0.2, -1.35, 0.75]} rotation={[0.6, 0.3, 0]}>
            <torusGeometry args={[0.3, 0.1, 24, 48]} />
            <meshPhysicalMaterial
              color="#38BDF8"
              roughness={0.06}
              transparent
              opacity={0.62}
              transmission={0.5}
              clearcoat={1}
            />
          </mesh>
        </Float>

        {/* Slowly Rotating Orbital Rings */}
        <mesh ref={ring1Ref} rotation={[Math.PI / 3, 0.2, 0]}>
          <torusGeometry args={[1.65, 0.022, 16, 120]} />
          <meshStandardMaterial
            color="#7C3AED"
            emissive="#7C3AED"
            emissiveIntensity={0.55}
            roughness={0.25}
          />
        </mesh>

        <mesh ref={ring2Ref} rotation={[-Math.PI / 4, Math.PI / 4, 0]}>
          <torusGeometry args={[2.05, 0.018, 16, 120]} />
          <meshStandardMaterial
            color="#F472B6"
            emissive="#F472B6"
            emissiveIntensity={0.45}
            roughness={0.25}
          />
        </mesh>

        <mesh ref={ring3Ref} rotation={[Math.PI / 2.2, -0.35, 0]}>
          <torusGeometry args={[2.35, 0.014, 16, 120]} />
          <meshStandardMaterial
            color="#38BDF8"
            emissive="#38BDF8"
            emissiveIntensity={0.45}
            roughness={0.25}
          />
        </mesh>

        {/* AI-Inspired Neural Connections */}
        <NeuralConstellation reducedMotion={reducedMotion} />

        {/* Floating Python, C, and Java Symbols */}
        <LanguageTile
          position={[-1.95, 0.35, 0.95]}
          symbol="Py"
          label="Python"
          colorStart="#38BDF8"
          colorEnd="#7C3AED"
          phase={0}
          isDark={isDark}
          reducedMotion={reducedMotion}
        />
        <LanguageTile
          position={[1.95, -0.05, 0.85]}
          symbol="C"
          label="C Lang"
          colorStart="#7C3AED"
          colorEnd="#F472B6"
          phase={2.1}
          isDark={isDark}
          reducedMotion={reducedMotion}
        />
        <LanguageTile
          position={[0.15, 1.75, 0.8]}
          symbol="Jv"
          label="Java"
          colorStart="#FF8066"
          colorEnd="#F472B6"
          phase={4.2}
          isDark={isDark}
          reducedMotion={reducedMotion}
        />
      </group>

      <ContactShadows
        position={[0, -2.15, 0]}
        opacity={isDark ? 0.38 : 0.24}
        scale={7}
        blur={2.5}
        far={4}
        color="#7C3AED"
      />
    </>
  );
}

export default function HeroScene() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0.25, 6.2], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      className="h-full w-full"
    >
      <HeroComposition isDark={isDark} />
    </Canvas>
  );
}
