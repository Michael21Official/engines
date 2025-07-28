import { useState, useRef, useMemo, Suspense, memo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
    OrbitControls,
    useGLTF,
    Html,
    GizmoHelper,
    GizmoViewport,
} from "@react-three/drei";
import * as THREE from "three";
import {
    Typography,
    Button,
    ToggleButton,
    ToggleButtonGroup,
    Box,
    useMediaQuery,
    Slider,
    Stack,
    useTheme
} from "@mui/material";
import "./../styles/DCSimulation3D.css";

// Typ dla folderów modeli
type ModelPart =
    | "rotor"
    | "housing_front"
    | "housing_rear"
    | "brushes_left"
    | "brushes_right"
    | "magnet_left"
    | "magnet_right"
    | "shaft_rear"
    | "shaft_front";

const modelFolders: readonly ModelPart[] = [
    "rotor",
    "housing_front",
    "housing_rear",
    "brushes_left",
    "brushes_right",
    "magnet_left",
    "magnet_right",
    "shaft_rear",
    "shaft_front",
] as const;

const positionsMap: Record<ModelPart, [number, number, number]> = {
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

const rotationsMap: Partial<Record<ModelPart, [number, number, number]>> = {
    brushes_left: [Math.PI, 0, 0],
    brushes_right: [0, Math.PI, 0],
    magnet_left: [0, Math.PI, 0],
};

const elementLabels: Record<ModelPart, string> = {
    rotor: "Wirnik",
    housing_front: "Obudowa przednia",
    housing_rear: "Obudowa tylna",
    brushes_left: "Szczotka lewa",
    brushes_right: "Szczotka prawa",
    magnet_left: "Magnes lewy",
    magnet_right: "Magnes prawy",
    shaft_rear: "Wałek tylny",
    shaft_front: "Wałek przedni",
};

const backgrounds = [
    { label: "Przezroczysty", value: "#f5f5f5" },
    { label: "Jasne", value: "#e0eafc" },
    { label: "Ciemne", value: "#222831" },
    { label: "Białe", value: "#ffffff" },
    { label: "Niebieskie", value: "#a2c7fa" },
];

const Model = memo(function Model({
    folder,
    position,
    rotation,
    isHighlighted,
    isVisible,
    rotorRotating = false,
    rotationSpeed = 1,
}: {
    folder: ModelPart;
    position: [number, number, number];
    rotation?: [number, number, number];
    isHighlighted: boolean;
    isVisible: boolean;
    rotorRotating?: boolean;
    rotationSpeed?: number;
}) {
    const { scene } = useGLTF(`/engines/models/${folder}/${folder}.gltf`, true);

    // Obracanie rotora
    useFrame(() => {
        if (rotorRotating && folder === "rotor") {
            scene.rotation.z += 0.03 * rotationSpeed;
        }
    });

    const highlightMaterial = useMemo(
        () =>
            new THREE.MeshStandardMaterial({
                color: "yellow",
            }),
        []
    );

    useMemo(() => {
        scene.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                if (isHighlighted) {
                    child.material = highlightMaterial;
                }
            }
        });
    }, [scene, isHighlighted, highlightMaterial]);

    return (
        <primitive
            object={scene}
            position={position}
            rotation={rotation}
            scale={[90, 90, 90]}
            visible={isVisible}
        />
    );
});

export default function Scene() {
    const [hiddenFolders, setHiddenFolders] = useState<ModelPart[]>([]);
    const [background, setBackground] = useState("#e0eafc");
    const [powerOn, setPowerOn] = useState(false);
    const [rotorRotating, setRotorRotating] = useState(false);
    const [rotationSpeed, setRotationSpeed] = useState(1);
    const filtersRef = useRef<HTMLDivElement>(null);

    // Responsywność
    const isMobile = useMediaQuery("(max-width:600px)");

    // Stan widoczności strzałek
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    // Sprawdzanie możliwości przewijania
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

    const toggleVisibility = (folder: ModelPart) => {
        setHiddenFolders((prev) =>
            prev.includes(folder)
                ? prev.filter((f) => f !== folder)
                : [...prev, folder]
        );
    };

    const scrollFilters = (direction: "left" | "right") => {
        if (filtersRef.current) {
            const scrollAmount = 180;
            filtersRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    const theme = useTheme();
    const isWide = useMediaQuery(theme.breakpoints.up("sm"));

    return (
        <div className="scene-vertical-container">
            {/* Panel kontroli */}
            <div
                className="controls-horizontal"
                style={{
                    flexDirection: isMobile ? "column" : "row",
                    alignItems: isMobile ? "stretch" : "center",
                    gap: isMobile ? "12px 0" : undefined,
                    padding: isMobile ? "8px 4px" : undefined,
                }}
            >
                {/* Filtry */}
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
                        {modelFolders.map((folder) => (
                            <Button
                                key={folder}
                                variant={hiddenFolders.includes(folder) ? "outlined" : "contained"}
                                color={hiddenFolders.includes(folder) ? "inherit" : "success"}
                                size="small"
                                onClick={() => toggleVisibility(folder)}
                                sx={{
                                    marginRight: isMobile ? 0.5 : 1,
                                    minWidth: isMobile ? 60 : 90,
                                    fontSize: isMobile ? "0.75rem" : "1rem",
                                    textTransform: "none",
                                    whiteSpace: "nowrap",
                                    flexShrink: 0,
                                    py: isMobile ? 0.2 : 1,
                                }}
                            >
                                {elementLabels[folder]}
                            </Button>
                        ))}
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

                {/* Background */}
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

            {/* Scena 3D */}
            <div className="canvas-container-horizontal">
                <Canvas
                    camera={{ position: [10, 5, 5], fov: 30 }}
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
                        {modelFolders.map((folder) => (
                            <Model
                                key={folder}
                                folder={folder}
                                position={positionsMap[folder]}
                                rotation={rotationsMap[folder]}
                                isHighlighted={false}
                                isVisible={!hiddenFolders.includes(folder)}
                                rotorRotating={rotorRotating && powerOn}
                                rotationSpeed={rotationSpeed}
                            />
                        ))}
                    </Suspense>

                    <OrbitControls target={[0, 0, 0]} enableDamping />
                    <GizmoHelper alignment="top-right" margin={[80, 80]}>
                        <GizmoViewport axisColors={["red", "green", "blue"]} labelColor="white" />
                    </GizmoHelper>
                </Canvas>
            </div>

            {/* PANEL STEROWANIA */}
            <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
                <Stack
                    direction={isWide ? "row" : "column"}
                    spacing={2}
                    alignItems="center"
                    justifyContent="center"
                >
                    <Button
                        variant={powerOn ? "contained" : "outlined"}
                        color={powerOn ? "success" : "primary"}
                        onClick={() => setPowerOn((prev) => !prev)}
                    >
                        {powerOn ? "Wyłącz zasilanie" : "Włącz zasilanie"}
                    </Button>
                    <Button
                        variant={rotorRotating ? "contained" : "outlined"}
                        color={rotorRotating ? "success" : "primary"}
                        onClick={() => setRotorRotating((prev) => !prev)}
                        disabled={!powerOn}
                    >
                        {rotorRotating ? "Zatrzymaj wirnik" : "Uruchom obrót wirnika"}
                    </Button>
                    <Box sx={{ width: 300 }}>
                        <Typography gutterBottom>
                            Prędkość obrotu wirnika: {rotationSpeed.toFixed(2)}
                        </Typography>
                        <Slider
                            value={rotationSpeed}
                            min={0.1}
                            max={3}
                            step={0.01}
                            onChange={(_, value) => setRotationSpeed(Number(value))}
                            disabled={!powerOn || !rotorRotating}
                            valueLabelDisplay="auto"
                        />
                    </Box>
                </Stack>
            </Box>
        </div>
    );
}
