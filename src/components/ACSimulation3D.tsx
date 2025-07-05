import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html, GizmoHelper, GizmoViewport } from "@react-three/drei";
import { Suspense, useMemo, useState } from "react";
import { Typography, Box, ToggleButton, ToggleButtonGroup, Button, Slider, Stack } from "@mui/material";
import "./../styles/DCSimulation3D.css";

const acElements = [
    "Text001_black_0",
    "Text_black_0",
    "Cylinder_copper_0",
    "Cube001_red_0",
    "Cube_blue_0",
    "Cylinder001_copper_0",
    "Cylinder004_copper_0",
    "Cylinder002_black_0",
    "Cylinder002_Material_0",
];

// Mapowanie technicznych nazw na czytelne dla użytkownika
const elementLabels: Record<string, string> = {
    Text001_black_0: "Napis N (Magnes N)",
    Cube001_red_0: "Magnes N (Czerwony)",
    Text_black_0: "Napis S (Magnes S)",
    Cube_blue_0: "Magnes S (Niebieski)",
    Cylinder_copper_0: "Cewka (obrót zgodnie z ruchem wskazówek zegara)",
    Cylinder001_copper_0: "Komutator 1",
    Cylinder004_copper_0: "Komutator 2",
    Cylinder002_black_0: "Szczotka 1 z regulacją prędkości",
    Cylinder002_Material_0: "Szczotka 2 z regulacją prędkości",
};

const backgrounds = [
    { label: "Jasne", value: "#e0eafc" },
    { label: "Ciemne", value: "#222831" },
    { label: "Białe", value: "#ffffff" },
    { label: "Niebieskie", value: "#a2c7fa" },
];

const groups = [
    {
        label: "Magnes N",
        elements: ["Text001_black_0", "Cube001_red_0"],
    },
    {
        label: "Magnes S",
        elements: ["Text_black_0", "Cube_blue_0"],
    },
    {
        label: "Cewka",
        elements: ["Cylinder_copper_0"],
    },
    {
        label: "Komutator",
        elements: ["Cylinder001_copper_0", "Cylinder004_copper_0"],
    },
    {
        label: "Szczotki z regulacją prędkości",
        elements: ["Cylinder002_black_0", "Cylinder002_Material_0"],
    },
];

function ACModel({
    visibleMap,
    coilRotating,
    rotationSpeed = 1,
}: {
    visibleMap: Record<string, boolean>;
    coilRotating: boolean;
    rotationSpeed?: number;
}) {
    const { scene } = useGLTF("/engines/models/ac/scene.gltf", true);

    // Obracanie cewki
    useFrame(() => {
        if (coilRotating) {
            const coil = scene.getObjectByName("Cylinder_copper_0");
            if (coil) {
                coil.rotation.z += 0.03 * rotationSpeed;
            }
        }
    });

    useMemo(() => {
        scene.traverse((obj: any) => {
            if (obj.isMesh && obj.name && visibleMap[obj.name] !== undefined) {
                obj.visible = visibleMap[obj.name];
            }
        });
    }, [scene, visibleMap]);

    return <primitive object={scene} scale={[1, 1, 1]} />;
}

export default function ACSimulation3D() {
    const [visibleMap, setVisibleMap] = useState<Record<string, boolean>>(
        Object.fromEntries(acElements.map((name) => [name, true]))
    );
    const [background, setBackground] = useState("#e0eafc");
    const [coilRotating, setCoilRotating] = useState(false);
    const [powerOn, setPowerOn] = useState(false);
    const [rotationSpeed, setRotationSpeed] = useState(1); // 1 = domyślna prędkość

    // Handler grupowy: przełącza wszystkie elementy grupy naraz
    const handleGroupToggle = (elements: string[]) => {
        const allVisible = elements.every((name) => visibleMap[name]);
        setVisibleMap((prev) => {
            const updated = { ...prev };
            elements.forEach((name) => {
                updated[name] = !allVisible;
            });
            return updated;
        });
    };

    return (
        <div className="scene-vertical-container">
            <div className="controls-horizontal">
                <Typography variant="subtitle1" style={{ marginRight: 16, fontSize: 16 }}>
                    Wyświetlane elementy:
                </Typography>
                <div className="controls-buttons-horizontal">
                    {groups.map((group) => {
                        const allVisible = group.elements.every((name) => visibleMap[name]);
                        return (
                            <Button
                                key={group.label}
                                variant={allVisible ? "contained" : "outlined"}
                                color={allVisible ? "success" : "inherit"}
                                size="small"
                                onClick={() => handleGroupToggle(group.elements)}
                                style={{
                                    marginRight: 8,
                                    minWidth: 120,
                                    textTransform: "none",
                                }}
                            >
                                {group.label}
                            </Button>
                        );
                    })}
                </div>
                <Box sx={{ ml: 4 }}>
                    <ToggleButtonGroup
                        value={background}
                        exclusive
                        onChange={(_, value) => value && setBackground(value)}
                        size="small"
                        color="primary"
                    >
                        {backgrounds.map((bg) => (
                            <ToggleButton key={bg.value} value={bg.value}>
                                {bg.label}
                            </ToggleButton>
                        ))}
                    </ToggleButtonGroup>
                </Box>
            </div>
            <div className="canvas-container-horizontal">
                <Canvas
                    camera={{
                        position: [5, 5, 5],
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
                                <div style={{ color: "white" }}>Ładowanie...</div>
                            </Html>
                        }
                    >
                        <ACModel
                            visibleMap={visibleMap}
                            coilRotating={coilRotating && powerOn}
                            rotationSpeed={rotationSpeed}
                        />
                    </Suspense>
                    <OrbitControls target={[0, 0, 0]} enableDamping />
                    <GizmoHelper alignment="top-right" margin={[80, 80]}>
                        <GizmoViewport axisColors={["red", "green", "blue"]} labelColor="white" />
                    </GizmoHelper>
                </Canvas>
            </div>
            {/* PANEL STEROWANIA */}
            <Box sx={{ mt: 2, display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                <Stack direction="row" spacing={2}>
                    <Button
                        variant={powerOn ? "contained" : "outlined"}
                        color={powerOn ? "success" : "primary"}
                        onClick={() => setPowerOn((prev) => !prev)}
                    >
                        {powerOn ? "Wyłącz zasilanie" : "Włącz zasilanie"}
                    </Button>
                    <Button
                        variant={coilRotating ? "contained" : "outlined"}
                        color={coilRotating ? "success" : "primary"}
                        onClick={() => setCoilRotating((prev) => !prev)}
                        disabled={!powerOn}
                    >
                        {coilRotating ? "Zatrzymaj cewkę" : "Uruchom obrót cewki"}
                    </Button>
                </Stack>
                <Box sx={{ width: 300, mt: 2 }}>
                    <Typography gutterBottom>
                        Prędkość obrotu cewki: {rotationSpeed.toFixed(2)}
                    </Typography>
                    <Slider
                        value={rotationSpeed}
                        min={0.1}
                        max={3}
                        step={0.01}
                        onChange={(_, value) => setRotationSpeed(Number(value))}
                        disabled={!powerOn || !coilRotating}
                        valueLabelDisplay="auto"
                    />
                </Box>
            </Box>
        </div>
    );
}