import React, { useEffect, useState } from "react";
import logo from "../../../public/images/UKEN-logo.png";
import "./AppLoader.css";

interface AppLoaderProps {
    children: React.ReactNode;
    delayMs?: number;
}

const AppLoader: React.FC<AppLoaderProps> = ({ children, delayMs = 1200 }) => {
    const [loading, setLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setFadeOut(true), delayMs);
        return () => clearTimeout(timer);
    }, [delayMs]);

    useEffect(() => {
        if (fadeOut) {
            const timer = setTimeout(() => setLoading(false), 700); // czas trwania animacji
            return () => clearTimeout(timer);
        }
    }, [fadeOut]);

    if (loading) {
        return (
            <div className={`logo__container visible${fadeOut ? " fading-out" : ""}`}>
                <img
                    src={logo}
                    alt="UKEN logo"
                    className={`uken-logo${fadeOut ? " fading-out" : ""}`}
                    draggable={false}
                />
            </div>
        );
    }

    return <>{children}</>;
};

export default AppLoader;