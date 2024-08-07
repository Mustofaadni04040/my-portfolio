import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Island from '../models/Island';
import Sky from '../models/Sky';
import Plane from '../models/Plane';
import HomeInfo from '../components/HomeInfo';
import sakura from '../assets/sakura.mp3';
import { soundoff, soundon } from '../assets/icons';
import Dragon from '../models/Bird';

export default function Home() {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  const handlerSoundPress = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setIsPlayingMusic(!isPlayingMusic);
    }
  };

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    const screenPosition = [0, 0.8, -40];
    const rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [2, 2, 2];
    } else {
      screenScale = [2.5, 2.5, 2.5];
    }
    return [screenScale, screenPosition, rotation];
  };

  const adjustPlaneForScreenSize = () => {
    let screenScale;
    let screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.1, 0.1, 0.1];
      screenPosition = [0, -4, -12];
    } else {
      screenScale = [0.1, 0.1, 0.1];
      screenPosition = [0, -4, -6];
    }
    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />

          <Dragon />
          <Sky isRotating={isRotating} />
          <Island
            position={islandPosition}
            scale={islandScale}
            setCurrentStage={setCurrentStage}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
          />
          <Plane
            isRotating={isRotating}
            scale={planeScale}
            position={planePosition}
            rotation={[0, 9.5, 0]}
          />
        </Suspense>
      </Canvas>

      <div className="absolute bottom-12 left-2 md:bottom-2 md:left-2">
        <img
          src={isPlayingMusic ? soundoff : soundon}
          alt="sound-icon"
          className="w-10 h-10 cursor-pointer object-contain"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          onKeyDown={handlerSoundPress}
          role="button"
        />
      </div>
    </section>
  );
}
