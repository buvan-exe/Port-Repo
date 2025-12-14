import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";
import SceneOutside from "./scenes/sceneoutside";

export default function App() {
  return (
    <Canvas camera={{ position: [0, 1.5, 6], fov: 45 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      <ScrollControls pages={4} damping={0.2}>
        <SceneOutside />
      </ScrollControls>
    </Canvas>
  );
}
