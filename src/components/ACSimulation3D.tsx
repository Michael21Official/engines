import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html, GizmoHelper, GizmoViewport } from "@react-three/drei";
import { Suspense, useMemo, useState, useRef, useEffect } from "react";
import { Typography, Box, ToggleButton, ToggleButtonGroup, Button, Slider, Stack } from "@mui/material";
import { useMediaQuery } from "@mui/material";
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

const backgrounds = [
    { label: "Przezroczysty", value: "#f5f5f5" },
    { label: "Jasne", value: "#e0eafc" },
    { label: "Ciemne", value: "#222831" },
    { label: "Białe", value: "#ffffff" },
    { label: "Niebieskie", value: "#a2c7fa" },
];

const groups = [
    {
        label: "Pole magnetyczne stojana",
        elements: ["Text_black_0", "Cube_blue_0", "Text001_black_0", "Cube001_red_0"],
    },
    {
        label: "Rotor",
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
    const [rotationSpeed, setRotationSpeed] = useState(1);

    // Slider do filtrów
    const filtersRef = useRef<HTMLDivElement>(null);
    const isMobile = useMediaQuery("(max-width:600px)");
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const checkScroll = () => {
        const el = filtersRef.current;
        if (!el) return;
        setCanScrollLeft(el.scrollLeft > 0);
        setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
    };

    useEffect(() => {
        checkScroll();
        const el = filtersRef.current;
        if (!el) return;
        el.addEventListener("scroll", checkScroll);
        window.addEventListener("resize", checkScroll);
        return () => {
            el.removeEventListener("scroll", checkScroll);
            window.removeEventListener("resize", checkScroll);
        };
    }, []);

    const scrollFilters = (direction: "left" | "right") => {
        if (filtersRef.current) {
            const scrollAmount = 180;
            filtersRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

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
            <div
                className="controls-horizontal"
                style={{
                    flexDirection: isMobile ? "column" : "row",
                    alignItems: isMobile ? "stretch" : "center",
                    gap: isMobile ? "12px 0" : undefined,
                    padding: isMobile ? "8px 4px" : undefined,
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        flex: 1,
                        minWidth: 0,
                        width: "100%",
                        mb: isMobile ? 1 : 0,
                    }}
                >
                    {canScrollLeft && (
                        <Button
                            onClick={() => scrollFilters("left")}
                            sx={{
                                minWidth: 32,
                                px: 0,
                                mr: 1,
                                height: 36,
                                display: "flex",
                                fontSize: isMobile ? "1.2rem" : "1.5rem",
                            }}
                        >
                            &#8592;
                        </Button>
                    )}

                    <div
                        ref={filtersRef}
                        className="controls-buttons-horizontal"
                        style={{
                            display: "flex",
                            overflowX: "auto",
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                            flex: 1,
                            minWidth: 0,
                        }}
                    >
                        {groups.map((group) => {
                            const allVisible = group.elements.every((name) => visibleMap[name]);
                            return (
                                <Button
                                    key={group.label}
                                    variant={allVisible ? "contained" : "outlined"}
                                    color={allVisible ? "success" : "inherit"}
                                    size="small"
                                    onClick={() => handleGroupToggle(group.elements)}
                                    sx={{
                                        marginRight: isMobile ? 0.5 : 1,
                                        minWidth: isMobile ? 60 : 120,
                                        fontSize: isMobile ? "0.75rem" : "1rem",
                                        textTransform: "none",
                                        whiteSpace: "nowrap",
                                        flexShrink: 0,
                                        py: isMobile ? 0.2 : 1,
                                    }}
                                >
                                    {group.label}
                                </Button>
                            );
                        })}
                    </div>

                    {canScrollRight && (
                        <Button
                            onClick={() => scrollFilters("right")}
                            sx={{
                                minWidth: 32,
                                px: 0,
                                ml: 1,
                                height: 36,
                                display: "flex",
                                fontSize: isMobile ? "1.2rem" : "1.5rem",
                            }}
                        >
                            &#8594;
                        </Button>
                    )}
                </Box>
                <Box
                    className="background-toggle-group"
                    sx={{
                        ml: isMobile ? 0 : 4,
                        mt: isMobile ? 1 : 0,
                        width: isMobile ? "100%" : "auto",
                        display: "flex",
                        justifyContent: isMobile ? "flex-start" : "center",
                    }}
                >
                    <ToggleButtonGroup
                        value={background}
                        exclusive
                        onChange={(_, value) => value && setBackground(value)}
                        size={isMobile ? "small" : "medium"}
                        color="primary"
                        fullWidth={isMobile}
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
                        position: [10, 5, 5],
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