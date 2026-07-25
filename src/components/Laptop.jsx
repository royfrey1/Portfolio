import React, { useRef } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export function Laptop3D(props) {
  const { nodes, materials } = useGLTF('/laptop-transformed.glb');
  const texture = useTexture('/cap.png'); // Carga la imagen de la carpeta public
  const groupRef = useRef();


  texture.center.set(0.5, 0.5);
  texture.rotation = Math.PI;
  texture.repeat.set(-1, 1);
  // Invertir textura verticalmente si Three.js la proyecta al revés
  texture.flipY = false;

  // Animación de bucle suave de izquierda a derecha
  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    // Rotación suave oscilante entre -0.25 y 0.25 radianes
    groupRef.current.rotation.y = Math.sin(t * 0.9) * 0.25;
    // Un leve balanceo vertical casi imperceptible
    groupRef.current.rotation.x = Math.sin(t * 0.5) * 0.05 + 0.1;
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      {/* Cuerpo principal de la laptop */}
      <mesh geometry={nodes.body.geometry} material={materials.PaletteMaterial001} />

      {/* Teclado */}
      <group position={[0.026, 0.006, -0.174]}>
        <mesh geometry={nodes.Plane.geometry} material={materials['laptop.keyboard']} />
        <mesh geometry={nodes.Plane_1.geometry} material={materials.PaletteMaterial002} />
      </group>

      {/* Pantalla 3D física con la textura aplicada directamente en el material */}
      <mesh position={[0, 1.50, -1.48]} rotation={[-0.235, 0, 0]}>
        <planeGeometry args={[4.12, 2.48]} /> {/* Dimensiones exactas del panel de la pantalla */}
        <meshBasicMaterial map={texture} />
      </mesh>
    </group>
  );
}

useGLTF.preload('/laptop-transformed.glb');
useTexture.preload('/cap.png');