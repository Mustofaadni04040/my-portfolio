import { useGLTF } from '@react-three/drei';
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useFrame } from '@react-three/fiber';
import skyScene from '../assets/3d/sky3.glb';

export default function Sky({ isRotating }) {
  const sky = useGLTF(skyScene);
  const sykRef = useRef();

  useFrame((_, delta) => {
    if (isRotating) {
      sykRef.current.rotation.y += 0.5 * delta;
    }
  });

  return (
    <mesh ref={sykRef}>
      <primitive object={sky.scene} />
    </mesh>
  );
}
Sky.propTypes = {
  isRotating: PropTypes.bool.isRequired,
};
