import { MeshReflectorMaterial, OrbitControls, Stage } from '@react-three/drei';
import Femur from './Femur.jsx';
import Tibia from './Tibia.jsx';
import React, { useRef } from 'react';
import Cable from './Cable.jsx';
import { ConfiguratorContext } from './Configurator';
import { useEffect, useState } from 'react';
import { useContext } from 'react';

export default function Experience() {
  const point1 = useRef();
  const point2 = useRef();
  const point3 = useRef();
  const point4 = useRef();
  const point5 = useRef();
  const point6 = useRef();
  const point7 = useRef();
  const point8 = useRef();
  const point9 = useRef();
  const point10 = useRef();
  const connections = {
    'Femur Center': point1,
    'Hip Center': point2,
    'Femur Proximal Canal': point3,
    'Femur Distal Canal': point4,
    'Medial Epicondyle': point5,
    'Lateral Epicondyle': point6,
    'Posterior Medial Pt': point7,
    'Posterior Lateral Pt': point8,
  };

  const connection = [
    { name1: 'Femur Center', name2: 'Hip Center', start: point1, end: point2 },
    {
      name1: 'Femur Proximal Canal',
      name2: 'Femur Distal Canal',
      start: point3,
      end: point4,
    },
    {
      name1: 'Medial Epicondyle',
      name2: 'Lateral Epicondyle',
      start: point5,
      end: point6,
    },
    {
      name1: 'Posterior Medial Pt',
      name2: 'Posterior Lateral Pt',
      start: point7,
      end: point8,
    },
  ];
  const {
    points,
    setPoints,
    selected,
    setSelect,
    handleUpdateClick,
    isUpdateClick,
  } = useContext(ConfiguratorContext);

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
        <Femur />
        <Tibia />
      </Stage>
      {isUpdateClick &&
        Object.entries(points).map((val) => {
          console.log(val);
          return (
            <mesh
              ref={connections[val[0]]}
              position={[val[1].x, val[1].y, val[1].z]}
            >
              <sphereGeometry args={[0.05, 16, 16]} />
              <meshStandardMaterial color="blue" transparent />
            </mesh>
          );
        })}
       ̰
      {/* <Cable start={point1} end={point2} /> */}
      {Object.entries(points).length === 10 &&
        connection.map((val) => <Cable start={val.start} end={val.end} />)}
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
