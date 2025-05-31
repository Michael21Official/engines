import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html, GizmoHelper, GizmoViewport } from "@react-three/drei";
import { Suspense } from "react";
import { Typography } from "@mui/material";
import "./../styles/DCSimulation3D.css";

function ACModel() {
    const { scene } = useGLTF("/models/ac/ac_model.gltf", true);
    return (
        <primitive object={scene} scale={[1, 1, 1]} />
    );
}

export default function ACSimulation3D() {
    return (
        <div className="scene-vertical-container">
            <div className="controls-horizontal">
                <Typography variant="subtitle1" style={{ marginRight: 16, fontSize: 16 }}>
                    Model AC Motor
                </Typography>
            </div>
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
                        <ACModel />
                    </Suspense>
                    <OrbitControls target={[0, 0, 0]} enableDamping />
                    <GizmoHelper alignment="top-right" margin={[80, 80]}>
                        <GizmoViewport axisColors={['red', 'green', 'blue']} labelColor="white" />
                    </GizmoHelper>
                </Canvas>
            </div>
        </div>
    );
}