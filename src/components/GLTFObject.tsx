import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html } from "@react-three/drei";
import { useMemo, Suspense } from "react";
import { Object3D } from "three";

function GLTFObjects({
    path,
    objectNames,
    scale = [1, 1, 1],
}: {
    path: string;
    objectNames: string[];
    scale?: [number, number, number];
}) {
    const { scene } = useGLTF(path, true);

    const selectedObjects = useMemo(() => {
        const selected: Object3D[] = [];
        scene.traverse((child) => {
            if (objectNames.includes(child.name)) {
                selected.push(child);
            }
        });
        return selected;
    }, [scene, objectNames]);

    if (selectedObjects.length === 0) return null;

    return (
        <>
            {selectedObjects.map((obj, idx) => (
                <primitive key={idx} object={obj} scale={scale} />
            ))}
        </>
    );
}

export default function SingleObjectViewer3D({
    path,
    objectNames,
    background = "black",
    cameraPosition = [2, 2, 4],
    scale = [1, 1, 1],
}: {
    path: string;
    objectNames: string[];
    background?: string;
    cameraPosition?: [number, number, number];
    scale?: [number, number, number];
}) {
    return (
        <div style={{ width: "100%", height: "400px" }}>
            <Canvas
                camera={{ position: cameraPosition, fov: 50 }}
                style={{ width: "100%", height: "100%" }}
            >
                <color attach="background" args={[background]} />
                <ambientLight intensity={0.8} />
                <directionalLight position={[10, 10, 10]} intensity={1.5} />

                <Suspense
                    fallback={
                        <Html center>
                            <div style={{ color: "black" }}>Ładowanie obiektów...</div>
                        </Html>
                    }
                >
                    <GLTFObjects path={path} objectNames={objectNames} scale={scale} />
                </Suspense>

                <OrbitControls enableDamping />
            </Canvas>
        </div>
    );
}
