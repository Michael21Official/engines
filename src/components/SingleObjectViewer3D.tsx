import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html } from "@react-three/drei";
import { useMemo, Suspense } from "react";
import { Object3D } from "three";

function GLTFObject({
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
        const found: Object3D[] = [];
        scene.traverse((child) => {
            if (objectNames.includes(child.name)) {
                found.push(child);
            }
        });
        return found;
    }, [scene, objectNames]);

    if (selectedObjects.length === 0) return null;

    return (
        <>
            {selectedObjects.map((object, index) => (
                <primitive key={index} object={object} scale={scale} />
            ))}
        </>
    );
}


export default function SingleObjectViewer3D({
    path,
    objectNames,
    background = "#ffffff",
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
            <Canvas camera={{ position: cameraPosition, fov: 50 }} style={{ width: "100%", height: "100%" }}>
                <color attach="background" args={[background]} />
                <ambientLight intensity={0.8} />
                <directionalLight position={[10, 10, 10]} intensity={1.5} />

                <Suspense
                    fallback={
                        <Html center>
                            <div style={{ color: "black" }}>Ładowanie obiektu...</div>
                        </Html>
                    }
                >
                    <GLTFObject path={path} objectNames={objectNames} scale={scale} />
                </Suspense>

                <OrbitControls enableDamping />
            </Canvas>
        </div>
    );
}

