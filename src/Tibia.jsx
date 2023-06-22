import { Environment, useGLTF } from '@react-three/drei';
import { button, useControls } from 'leva';
import { useRef } from 'react';
import { TransformControls, OrbitControls } from '@react-three/drei';

export default function Tibia() {
  const ref1 = useRef();
  const tibia = useGLTF('./Tibia.glb');

  const { position, visible } = useControls('Tibia', {
    position: {
      value: { x: -4.05, y: -9.35, z: -1 },
      step: 0.01,
      joystick: 'invertY',
    },
    visible: true,
    myInterval: {
      min: 0,
      max: 10,
      value: [4, 5],
    },
    clickMe: button(() => {
      console.log('ok');
    }),
  });

  return (
    <>
      <primitive
        ref={ref1}
        object={tibia.scene}
        scale={0.02}
        position={[position.x, position.y, position.z]}
        visible={visible}
      />
    </>
  );
}
