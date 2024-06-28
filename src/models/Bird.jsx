import React, { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useAnimations, useGLTF } from '@react-three/drei';
import dragonScene from '../assets/3d/dragon.glb';

export default function Dragon() {
  const { scene, animations } = useGLTF(dragonScene);
  const dragonRef = useRef();
  const { actions } = useAnimations(animations, dragonRef);

  useEffect(() => {
    // console.log('animations', animations);
    // console.log('actions', actions);

    const action = actions.Object_0;
    if (action) {
      action.play();
    } else {
      console.error('Animation "Object_0" not found!');
    }
    actions.Object_0.play();
  }, [actions]);

  useFrame(({ clock, camera }) => {
    // Update the Y position to simulate bird-like motion using a sine wave
    dragonRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    // Check if the bird reached a certain endpoint relative to the camera
    if (dragonRef.current.position.x > camera.position.x + 10) {
      // Change direction to backward and rotate the bird 180 degrees on the y-axis
      dragonRef.current.rotation.y = Math.PI;
    } else if (dragonRef.current.position.x < camera.position.x - 10) {
      // Change direction to forward and reset the bird's rotation
      dragonRef.current.rotation.y = 0;
    }

    // Update the X and Z positions based on the direction
    if (dragonRef.current.rotation.y === 0) {
      // Moving forward
      dragonRef.current.position.x += 0.01;
      dragonRef.current.position.z -= 0.01;
    } else {
      // Moving backward
      dragonRef.current.position.x -= 0.01;
      dragonRef.current.position.z += 0.01;
    }
  });

  return (
    <mesh position={[-5, 2, 1]} scale={[0.01, 0.01, 0.01]} ref={dragonRef}>
      <primitive object={scene} rotation={[0, Math.PI / 1.2, 0]} />
    </mesh>
  );
}
