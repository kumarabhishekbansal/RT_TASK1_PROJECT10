import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import Controls from "./components/Controls";
import Panorama from "./components/Panorama";
import Helicopter from "./components/Helicopter";
export default function App() {
  return (
    <div id="Canvas-container">
      <Canvas>
        <Controls />
        <Suspense fallback={null}>
          <Panorama />
          <Helicopter />
        </Suspense>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
      </Canvas>
    </div>
  );
}
