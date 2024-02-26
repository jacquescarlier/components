import React, { useRef, useState } from 'react';
import * as THREE from 'three';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

// Importez vos images ici
import image1 from './omf1.webp';
import image2 from './omf1.webp';
import image3 from './omf1.webp';

function ThreeCubesWithModal() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const sceneRef = useRef();
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  const cubes = [];

  const handleCubeClick = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const initScene = () => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    sceneRef.current.appendChild(renderer.domElement);

    const textureLoader = new THREE.TextureLoader();

    const cubeGeometry = new THREE.BoxGeometry(2, 2, 2);
    const cubeMaterials = [
      new THREE.MeshBasicMaterial({ map: textureLoader.load(image1) }),
      new THREE.MeshBasicMaterial({ map: textureLoader.load(image2) }),
      new THREE.MeshBasicMaterial({ map: textureLoader.load(image3) }),
    ];

    for (let i = 0; i < 3; i++) {
      const cube = new THREE.Mesh(cubeGeometry, cubeMaterials[i]);
      cube.position.x = (i - 1) * 4;
      scene.add(cube);
      cubes.push(cube);
    }

    camera.position.z = 10;

    const animate = () => {
      requestAnimationFrame(animate);
      cubes.forEach(cube => {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
      });
      renderer.render(scene, camera);
    };

    animate();

    const onDocumentMouseDown = (event) => {
      event.preventDefault();
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(cubes);
      if (intersects.length > 0) {
        const intersectedCube = intersects[0].object;
        const index = cubes.indexOf(intersectedCube);
        if (index !== -1) {
          handleCubeClick(index + 1); // Index starts from 0, so adding 1 to match image indices
        }
      }
    };

    document.addEventListener('mousedown', onDocumentMouseDown, false);

    return scene;
  };

  useState(() => {
    initScene();
  }, []);

  return (
    <div>
      <div ref={sceneRef} style={{ width: '100%', height: '100%' }} />
      <Modal open={modalOpen} onClose={closeModal}>
        {selectedImage && <img src={selectedImage} alt="Selected" style={{ maxWidth: '100%' }} />}
      </Modal>
    </div>
  );
}

export default ThreeCubesWithModal;
