import { useGLTF } from '@react-three/drei';
import { useControls } from 'leva';
import { useRef } from 'react';
import { ConfiguratorContext } from './Configurator';
import { useContext } from 'react';

export default function Femur() {
  const ref = useRef();
  const femur = useGLTF('./Femur.glb');

  const { points, setPoints, selected, setSelect } =
    useContext(ConfiguratorContext);
  const { position, visible } = useControls('Femur', {
    position: {
      value: { x: -1.0, y: 1.0, z: 0 },
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
        ref={ref}
        object={femur.scene}
        scale={0.02}
        position={[position.x, position.y, position.z]}
        visible={visible}
      />
    </>
  );
}
