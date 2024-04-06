import React, { useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
// import { BoxGeometry, Mesh, MeshNormalMaterial } from 'three';

function InterleavedCubes(props) {
    const group = useRef();

    // Animation
    useFrame(() => {
        group.current.rotation.x += 0.01;
        group.current.rotation.y += 0.01;
    });

    return (
        <group ref={group}>
            <Cube position={[-1.5, 0, 0]} />
            <Cube position={[1.5, 0, 0]} />
            <Cube position={[0, -1.5, 0]} />
            <Cube position={[0, 1.5, 0]} />
            <Cube position={[0, 0, -1.5]} />
        </group>
    );
}

function Cube(props) {
    const ref = useRef();

    // Animation
    useFrame(() => {
        ref.current.rotation.x += 0.025;
        ref.current.rotation.y += 0.025;
    });

    return (
        <mesh ref={ref} {...props}>
            <boxGeometry args={[1, 1, 1]} />
            <meshNormalMaterial />
        </mesh>
    );
}

function NewCube3d() {
    return (
        <div className='newCube3d'>
            <h1>Cube 3D</h1>
            <>
                <Canvas>
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    <InterleavedCubes />
                </Canvas>
            </>
        </div>
    );
}

export default NewCube3d;
