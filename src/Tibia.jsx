import { Environment, useGLTF } from '@react-three/drei';
import { button, useControls } from 'leva';
import { useRef } from 'react';
import { TransformControls, OrbitControls } from '@react-three/drei';
import { useEffect, useState, useContext } from 'react';
import { ConfiguratorContext } from './Configurator';
export default function Tibia() {
  const ref1 = useRef();
  const tibia = useGLTF('./Tibia.glb');

  const { points, setPoints, selected, setSelect } =
    useContext(ConfiguratorContext);

  const { position, visible } = useControls('Tibia', {
    position: {
      value: { x: -4.05, y: -9.35, z: -1 },
      step: 0.01,
      joystick: 'invertY',
    },
    visible: true,
  });

  const femurEventHandler = (event) => {
    //console.log(event);
    //console.log('point', event.point);
    const coordinates = { ...points, [selected]: event.point };
    setPoints(coordinates);
  };

  return (
    <>
      <primitive
        onClick={femurEventHandler}
        ref={ref1}
        object={tibia.scene}
        scale={0.02}
        position={[position.x, position.y, position.z]}
        visible={visible}
      />
    </>
  );
}
