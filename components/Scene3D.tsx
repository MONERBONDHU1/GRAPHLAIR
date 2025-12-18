
import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float, MeshWobbleMaterial, Octahedron } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedShape = () => {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.sin(time / 4);
    meshRef.current.rotation.y = Math.cos(time / 2);
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 100, 100]} scale={2}>
        <MeshDistortMaterial
          color="#3b82f6"
          attach="material"
          distort={0.4}
          speed={3}
          roughness={0}
          metalness={0.9}
        />
      </Sphere>
    </Float>
  );
};

const SecondaryShape = () => {
  return (
    <Float speed={5} rotationIntensity={2} floatIntensity={3}>
      {/* Fix: Use Octahedron from @react-three/drei to avoid JSX intrinsic element errors with <mesh> and <octahedronGeometry> */}
      <Octahedron position={[4, 2, -2]} args={[1, 0]}>
        <MeshWobbleMaterial color="#8b5cf6" speed={1} factor={0.6} metalness={0.8} />
      </Octahedron>
    </Float>
  );
}

const Scene3D: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        {/* Fix: Suppress intrinsic element errors for lights as they are supported by R3F but may lack definitions in the JSX namespace */}
        {/* @ts-ignore */}
        <ambientLight intensity={0.5} />
        {/* @ts-ignore */}
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#3b82f6" />
        {/* @ts-ignore */}
        <pointLight position={[-10, -10, -10]} intensity={1} color="#8b5cf6" />
        {/* @ts-ignore */}
        <spotLight position={[0, 5, 0]} angle={0.3} penumbra={1} intensity={2} color="#ffffff" />
        <Suspense fallback={null}>
          <AnimatedShape />
          <SecondaryShape />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

export default Scene3D;
