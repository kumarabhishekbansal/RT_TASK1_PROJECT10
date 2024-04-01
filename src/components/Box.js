import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Box({ rotate = false }) {
  const mesh = useRef();
  useFrame(() => {
    if (rotate) {
      mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
    }
  });
  return (
    <mesh scale={2} ref={mesh}>
      <boxGeometry />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
}
