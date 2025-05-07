import React, { useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html } from "@react-three/drei";
import { Suspense, useEffect, memo } from "react";
import * as THREE from "three";
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    FormControlLabel,
    Switch,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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

function FitCameraToScene() {
    const { camera, scene } = useThree();

    useEffect(() => {
        const box = new THREE.Box3().setFromObject(scene);
        const size = new THREE.Vector3();
        box.getSize(size);

        const center = new THREE.Vector3();
        box.getCenter(center);

        const maxDim = Math.max(size.x, size.y, size.z);
        const fitHeightDistance =
            camera instanceof THREE.PerspectiveCamera
                ? maxDim / (2 * Math.atan((camera.fov * Math.PI) / 360))
                : maxDim;
        const fitWidthDistance =
            fitHeightDistance / (camera as THREE.PerspectiveCamera).aspect;
        const distance = Math.max(fitHeightDistance, fitWidthDistance);

        camera.position.set(center.x, center.y, center.z + distance);
        camera.lookAt(center);
    }, [camera, scene]);

    return null;
}

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
        <div className="scene-container">
            {/* Filtry */}
            <div className="controls">
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>Tools</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="subtitle1" gutterBottom>
                            Display Elements
                        </Typography>
                        {modelFolders.map((folder) => (
                            <FormControlLabel
                                key={folder}
                                control={
                                    <Switch
                                        checked={!hiddenFolders.includes(folder)}
                                        onChange={() => handleToggleVisibility(folder)}
                                    />
                                }
                                label={folder}
                            />
                        ))}
                    </AccordionDetails>
                </Accordion>
            </div>

            {/* Scena 3D */}
            <div className="canvas-container">
                <Canvas camera={{ position: [0, 0, 30], fov: 50 }}>
                    <FitCameraToScene />
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
                    <OrbitControls minDistance={5} maxDistance={100} />
                </Canvas>
            </div>
        </div>
    );
}