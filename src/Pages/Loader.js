import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const RotatingSphere = () => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} scale={1.5}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#007bff" wireframe />
    </mesh>
  );
};

export default RotatingSphere;
