"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";
import { motion, useScroll, useTransform } from "framer-motion";

function Stars({ mouse }: { mouse: { x: number; y: number } }) {
  const ref = useRef<THREE.Points>(null!);
  const sphere = new Float32Array(3000)
    .fill(0)
    .map(() => (Math.random() - 0.5) * 10);

  useFrame((_state, delta) => {
    // subtle drift rotation
    ref.current.rotation.x -= delta * 0.02;
    ref.current.rotation.y -= delta * 0.03;

    // gentle parallax from mouse
    ref.current.rotation.x += mouse.y * 0.02;
    ref.current.rotation.y += mouse.x * 0.02;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3}>
        <PointMaterial
          transparent
          color="#FF6F61"
          size={0.015}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function HeroScene() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = -(e.clientY / window.innerHeight - 0.5) * 2;
    setMouse({ x, y });
  };

  return (
    <motion.div
      className="absolute inset-0 -z-10"
      style={{ scale }}
      onMouseMove={handleMouseMove}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <Canvas camera={{ position: [0, 0, 3] }}>
        <Stars mouse={mouse} />
      </Canvas>
    </motion.div>
  );
}
