"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";
import { useScreenSize } from "../hooks/useScreenSize";

function Model() {
  const { scene } = useGLTF("/model.glb");
  const ref = useRef<THREE.Group>(null!);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;
    }
  });

  scene.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      const mesh = child as THREE.Mesh;
      const material = mesh.material as THREE.Material;

      if (material instanceof THREE.MeshStandardMaterial) {
        material.color = new THREE.Color(0xffffff);
        material.metalness = 0.5;
        material.roughness = 0.3;
        material.emissive = new THREE.Color(0x111111);
        material.emissiveIntensity = 0.5;
      }
    }
  });

  return (
    <primitive object={scene} scale={2} ref={ref} position={[0.5, 0, 0]} />
  );
}

export default function Home() {
  const width = useScreenSize();
  return (
    <div style={{ height: "60vh", width: width }}>
      <Canvas>
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 5, 5]} intensity={2} />
        <Model />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
