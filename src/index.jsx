import './style.css';
import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber';
import Experience from './Experience.jsx';
import { StrictMode } from 'react';
import { Leva } from 'leva';
import { ConfiguratorProvider } from './Configurator';
import { Interface } from './Interface';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
  <StrictMode>
    <ConfiguratorProvider>
      <Leva collapsed />
      <Canvas
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
      >
        <color attach="background" args={['#213547']} />:
        <Experience />
      </Canvas>
      <Interface />
    </ConfiguratorProvider>
  </StrictMode>
);
