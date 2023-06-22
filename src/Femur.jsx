import { Environment, useGLTF } from '@react-three/drei';
import { button, useControls } from 'leva';
import { TransformControls, OrbitControls } from '@react-three/drei';
import { useRef } from 'react';

export default function Femur({ sendCoordinate }) {
  const ref = useRef();
  const femur = useGLTF('./Femur.glb');
  const { position, visible } = useControls('Femur', {
    position: {
      value: { x: -1.0, y: 1.0, z: 0 },
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

  const femurEventHandler = (event) => {
    //console.log(event);
    //console.log('point', event.point);
    sendCoordinate(event.point);
  };

  return (
    <>
      <primitive
        onClick={femurEventHandler}
        ref={ref}
        object={femur.scene}
        scale={0.02}
        position={[position.x, position.y, position.z]}
        visible={visible}
      />
    </>
  );
}
