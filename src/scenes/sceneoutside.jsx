import { useGLTF } from "@react-three/drei";

export default function SceneOutside() {
  const { scene } = useGLTF("/models/door.glb");

  return (
    <primitive
      object={scene}
      position={[0, 0, 0]}
      scale={1}
    />
  );
}
