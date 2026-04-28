'use client'
import { useState, useEffect } from "react";

const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536,
};

export function useScreenSize() {
    const getScreen = () => {
        if (typeof window === 'undefined') {
            return {
                isMobile: false,
                sm: false,
                md: false,
                lg: false,
                xl: false,
                "2xl": false,
                width: 0,
            };
        }
        const width = window.innerWidth;

        return {
            isMobile: width < breakpoints.sm,
            sm: width >= breakpoints.sm,
            md: width >= breakpoints.md,
            lg: width >= breakpoints.lg,
            xl: width >= breakpoints.xl,
            "2xl": width >= breakpoints["2xl"],
            width,
        };
    };

    const [screen, setScreen] = useState(getScreen());

    useEffect(() => {
        // Update screen size once on mount
        setScreen(getScreen());

        const handleResize = () => setScreen(getScreen());

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return screen;
}