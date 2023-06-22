import * as THREE from 'three';
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { QuadraticBezierLine } from '@react-three/drei';

export default function Cable({
  start,
  end,
  v1 = new THREE.Vector3(),
  v2 = new THREE.Vector3(),
}) {
  const ref = useRef();

  useFrame(
    () =>
      ref.current.setPoints(
        start.current.getWorldPosition(v1),
        end.current.getWorldPosition(v2)
      ),
    []
  );
  return <QuadraticBezierLine ref={ref} lineWidth={3} color="#ff2060" />;
}
