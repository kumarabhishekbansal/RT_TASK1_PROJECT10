import { Canvas } from "@react-three/fiber";
import "./App.css";
import Box from "./components/Box";
import Controls from "./components/Controls";
export default function App() {
  return (
    <div id="Canvas-container">
      <Canvas>
      <Controls />
        <Box />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
      </Canvas>
    </div>
  );
}
