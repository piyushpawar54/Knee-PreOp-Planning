import { MeshReflectorMaterial, OrbitControls, Stage } from '@react-three/drei';
import Femur from './Femur.jsx';
import Tibia from './Tibia.jsx';
import React, { useRef } from 'react';
import Cable from './Cable.jsx';
import { useConfigurator } from './context/Configurator.jsx';

export default function Experience() {
  const point1 = useRef();
  const point2 = useRef();
  const pos = {};

  function coordinates(args) {
    console.log(args);
  }

  return (
    <>
      <OrbitControls makeDefault />
      <Stage
        environment={'city'}
        intensity={0.6}
        contactShadow={true}
        shadowBias={-0.0015}
        adjustCamera={2}
      >
        <Femur sendCoordinate={coordinates} />
        <Tibia />
      </Stage>

      <mesh ref={point1} position={[1, 12, 3]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial color="blue" transparent />
      </mesh>

      <mesh ref={point2} position={[-1, 2, 3]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial color="hotpink" transparent />
      </mesh>

      <Cable start={point1} end={point2} />

      <mesh rotation={[-Math.PI / 2, 0, 0]} position-y={-11}>
        <planeGeometry args={[170, 170]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={40}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#101010"
          metalness={0.5}
        />
      </mesh>
    </>
  );
}
