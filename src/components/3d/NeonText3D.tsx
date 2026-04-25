import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text3D, Center, OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three';

interface NeonText3DProps {
  text: string;
  position?: [number, number, number];
  color?: string;
  emissiveIntensity?: number;
  size?: number;
}

function AnimatedText3D({ 
  text, 
  position = [0, 0, 0], 
  color = "#9333ea", 
  emissiveIntensity = 0.5,
  size = 1 
}: NeonText3DProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  // Create neon material
  const material = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: color,
      emissive: color,
      emissiveIntensity: emissiveIntensity,
      metalness: 0.1,
      roughness: 0.2,
    });
  }, [color, emissiveIntensity]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <Center>
        <Text3D
          ref={meshRef}
          font="https://threejs.org/examples/fonts/helvetiker_regular.typeface.json"
          size={size}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
          position={position}
          material={material}
        >
          {text}
        </Text3D>
      </Center>
    </Float>
  );
}

function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 50; i++) {
      temp.push(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      );
    }
    return new Float32Array(temp);
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#00ffff" sizeAttenuation transparent opacity={0.6} />
    </points>
  );
}

export default function NeonText3D({ text, ...props }: NeonText3DProps) {
  return (
    <div className="w-full h-screen">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <color attach="background" args={['#000000']} />
        
        {/* Lighting */}
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#9333ea" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00ffff" />
        <spotLight
          position={[0, 10, 0]}
          angle={0.3}
          penumbra={1}
          intensity={1}
          color="#ffffff"
          castShadow
        />

        {/* 3D Text */}
        <AnimatedText3D text={text} {...props} />
        
        {/* Particle field */}
        <ParticleField />
        
        {/* Controls */}
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          maxDistance={15}
          minDistance={5}
          autoRotate
          autoRotateSpeed={1}
        />
      </Canvas>
    </div>
  );
}