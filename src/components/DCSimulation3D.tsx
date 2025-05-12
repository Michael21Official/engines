import React, { useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html, GizmoHelper, GizmoViewport } from "@react-three/drei";
import { Suspense, useEffect, memo } from "react";
import * as THREE from "three";
import {
    Typography,
    FormControlLabel,
    Switch,
    Button,
} from "@mui/material";
import "./../styles/DCSimulation3D.css";

const initialModelFolders = [
    "Part1_Rotor",
    "Part1",
    "Part2",
    "Part3",
    "Part4",
    "Part5",
    "Part6",
    "Part7",
];

const positionsMap: Record<string, [number, number, number]> = {
    Part1_Rotor: [0, 0, 0],
    Part1: [2, 0, 0],
    Part2: [-2, 0, 0],
    Part3: [0, 2, 0],
    Part4: [0, -2, 0],
    Part5: [2, 2, 0],
    Part6: [-2, 2, 0],
    Part7: [0, 0, 2],
};

const getPositionForElement = (folder: string): [number, number, number] =>
    positionsMap[folder] || [0, 0, 0];

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
                        position: [5, 5, 5], // kierunek +X +Y +Z, możesz zwiększyć wartość dla oddalenia
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