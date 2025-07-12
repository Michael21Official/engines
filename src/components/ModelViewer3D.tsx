import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html, GizmoHelper, GizmoViewport } from "@react-three/drei";
import { Suspense } from "react";

function GLTFModel({ path, scale = [1, 1, 1] }: { path: string; scale?: [number, number, number] }) {
    const { scene } = useGLTF(path, true);
    return <primitive object={scene} scale={scale} />;
}

export default function ModelViewer3D({
    path,
    background = "black",
    cameraPosition = [5, 3, 5],
    scale = [1, 1, 1],
    enableControls = true,
}: {
    path: string;
    background?: string;
    cameraPosition?: [number, number, number];
    scale?: [number, number, number];
    enableControls?: boolean;
}) {
    return (
        <div style={{ width: "100%", height: "100%" }}>
            <Canvas
                camera={{
                    position: cameraPosition,
                    fov: 50,
                }}
                style={{ width: "100%", height: "100%" }}
            >
                <color attach="background" args={[background]} />
                <ambientLight intensity={0.8} />
                <directionalLight position={[10, 10, 10]} intensity={1.5} />
                <Suspense
                    fallback={
                        <Html center>
                            <div style={{ color: "white" }}>Ładowanie modelu...</div>
                        </Html>
                    }
                >
                    <GLTFModel path={path} scale={scale} />
                </Suspense>
                {enableControls && <OrbitControls target={[0, 0, 0]} enableDamping />}
                <GizmoHelper alignment="top-right" margin={[80, 80]}>
                    <GizmoViewport axisColors={["red", "green", "blue"]} labelColor="white" />
                </GizmoHelper>
            </Canvas>
        </div>
    );
}
