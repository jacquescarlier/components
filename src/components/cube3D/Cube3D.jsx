/* npm install three @react-three/fiber */
/*
import React from 'react';
import { Canvas } from '@react-three/fiber';

function LinkableImage({ url, position, rotation, imageUrl }) {
  return (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial>
        <primitive attach="map" object-url={imageUrl} />
      </meshBasicMaterial>
      <meshBasicMaterial side={THREE.BackSide} />
    </mesh>
  );
}

function CubeWithClickableImages() {
  const cubeFaces = [
    { position: [1, 0, 0], rotation: [0, Math.PI / 2, 0], url: 'https://example.com/1', imageUrl: '/path/to/image1.jpg' },
    { position: [-1, 0, 0], rotation: [0, -Math.PI / 2, 0], url: 'https://example.com/2', imageUrl: '/path/to/image2.jpg' },
    { position: [0, 1, 0], rotation: [Math.PI / 2, 0, 0], url: 'https://example.com/3', imageUrl: '/path/to/image3.jpg' },
    { position: [0, -1, 0], rotation: [-Math.PI / 2, 0, 0], url: 'https://example.com/4', imageUrl: '/path/to/image4.jpg' },
    { position: [0, 0, 1], rotation: [0, 0, 0], url: 'https://example.com/5', imageUrl: '/path/to/image5.jpg' },
    { position: [0, 0, -1], rotation: [0, Math.PI, 0], url: 'https://example.com/6', imageUrl: '/path/to/image6.jpg' },
  ];

  return (
    <>
      {cubeFaces.map((face, index) => (
        <LinkableImage key={index} position={face.position} rotation={face.rotation} url={face.url} imageUrl={face.imageUrl} />
      ))}
    </>
  );
}

function Scene() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <CubeWithClickableImages />
    </Canvas>
  );
}
*/


import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.01;
      mesh.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh {...props} ref={mesh}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={props.color} />
    </mesh>
  );
}

function Scene() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} />
      <Box position={[-4, 0, 0]} color="blue" scale={[2, 2, 2]}  />
      <Box position={[0, 0, 0]} color="white" scale={[2, 2, 2]}  />
      <Box position={[4, 0, 0]} color="red" scale={[2, 2, 2]} />
    </Canvas>
  );
}

function Cube3D() {
  return (
    <div style={{ width: '100vw', height: '600px' }}>
      <Scene />
    </div>
  );
}

export default Cube3D;
