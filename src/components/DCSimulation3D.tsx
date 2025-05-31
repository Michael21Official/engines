import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html, GizmoHelper, GizmoViewport } from "@react-three/drei";
import { Suspense, memo } from "react";
import * as THREE from "three";
import {
    Typography,
    Button,
} from "@mui/material";
import "./../styles/DCSimulation3D.css";

const initialModelFolders = [
    "rotor",
    "housing_front",
    "housing_rear",
    "brushes_left",
    "brushes_right",
    "magnet_left",
    "magnet_right",
    "shaft_rear",
    "shaft_front",
];

const positionsMap: Record<string, [number, number, number]> = {
    rotor: [0, 0, 0],
    housing_front: [0, 0, 0],
    housing_rear: [0, 0, -1.08],
    brushes_left: [0.403, 0.045, -0.8],
    brushes_right: [-0.403, -0.045, -0.8],
    magnet_left: [0, 0, 0.5],
    magnet_right: [0, 0, -0.58],
    shaft_rear: [0, 0, -1.5],
    shaft_front: [0, 0, 0.8],
};

const rotationsMap: Record<string, [number, number, number]> = {
    brushes_left: [Math.PI, 0, 0],
    brushes_right: [0, Math.PI, 0],
    magnet_left: [0, Math.PI, 0],
};

const getPositionForElement = (folder: string): [number, number, number] =>
    positionsMap[folder] || [0, 0, 0];

const getRotationForElement = (folder: string): [number, number, number] =>
    rotationsMap[folder] || [0, 0, 0];

const Model = memo(function Model({
    folder,
    position,
    rotation,
    isHighlighted,
    isVisible,
}: {
    folder: string;
    position: [number, number, number];
    rotation?: [number, number, number];
    isHighlighted: boolean;
    isVisible: boolean;
}) {
    const { scene } = useGLTF(`/engines/models/${folder}/${folder}.gltf`, true);

    return (
        <primitive
            object={scene}
            position={position}
            rotation={rotation}
            scale={[90, 90, 90]}
            visible={isVisible}
            material={
                isHighlighted
                    ? new THREE.MeshStandardMaterial({ color: "yellow" })
                    : undefined
            }
        />
    );
});

export default function Scene() {
    const [modelFolders] = useState(initialModelFolders);
    const [hiddenFolders, setHiddenFolders] = useState<string[]>([]);

    const handleToggleVisibility = (folder: string) => {
        setHiddenFolders((prev) =>
            prev.includes(folder)
                ? prev.filter((item) => item !== folder)
                : [...prev, folder]
        );
    };

    return (
        <div className="scene-vertical-container">
            {/* Filtry */}
            <div className="controls-horizontal">
                <Typography variant="subtitle1" style={{ marginRight: 16, fontSize: 16 }}>
                    Display Elements:
                </Typography>
                <div className="controls-buttons-horizontal">
                    {modelFolders.map((folder) => (
                        <Button
                            key={folder}
                            variant={hiddenFolders.includes(folder) ? "outlined" : "contained"}
                            color={hiddenFolders.includes(folder) ? "inherit" : "success"}
                            size="small"
                            onClick={() => handleToggleVisibility(folder)}
                            style={{
                                marginRight: 8,
                                minWidth: 90,
                                textTransform: "none",
                            }}
                        >
                            {folder}
                        </Button>
                    ))}
                </div>
            </div>

            {/* Scena 3D */}
            <div className="canvas-container-horizontal">
                <Canvas
                    camera={{
                        position: [5, 5, 5],
                        fov: 50
                    }}
                    style={{ width: "100%", height: "100%" }}
                >
                    <ambientLight intensity={0.8} />
                    <directionalLight position={[10, 10, 10]} intensity={1.5} />
                    <Suspense
                        fallback={
                            <Html center>
                                <div style={{ color: "white" }}>Ładowanie...</div>
                            </Html>
                        }
                    >
                        {modelFolders.map((folder, index) => (
                            <Model
                                key={index}
                                folder={folder}
                                position={getPositionForElement(folder)}
                                rotation={getRotationForElement(folder)}
                                isHighlighted={false}
                                isVisible={!hiddenFolders.includes(folder)}
                            />
                        ))}
                    </Suspense>
                    <OrbitControls
                        target={[0, 0, 0]} // patrz na środek sceny
                        enableDamping
                    />
                    <GizmoHelper alignment="top-right" margin={[80, 80]}>
                        <GizmoViewport axisColors={['red', 'green', 'blue']} labelColor="white" />
                    </GizmoHelper>
                </Canvas>
            </div>
        </div>
    );
}