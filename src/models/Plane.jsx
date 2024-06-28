import React, { useEffect, useRef } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';
import PropTypes from 'prop-types';
import planeScene from '../assets/3d/plane.glb';

export default function Plane({ isRotating, ...props }) {
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, scene);
  const ref = useRef();

  useEffect(() => {
    if (isRotating) {
      actions.Scene.play();
    } else {
      actions.Scene.stop();
    }
  }, [isRotating]);

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
}

Plane.propTypes = {
  isRotating: PropTypes.bool.isRequired,
};
