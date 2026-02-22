import React, { createContext, useContext, useState } from "react";

interface ParticleContextType {
    particlesEnabled: boolean;
    toggleParticles: () => void;
}

const ParticleContext = createContext<ParticleContextType | undefined>(undefined);

export function ParticleProvider({ children }: { children: React.ReactNode }) {
    const [particlesEnabled, setParticlesEnabled] = useState<boolean>(() => {
        if (typeof window !== "undefined") {
            const saved = localStorage.getItem("particlesEnabled");
            return saved !== null ? saved === "true" : true;
        }
        return true;
    });

    const toggleParticles = () => {
        setParticlesEnabled((prev) => {
            const next = !prev;
            localStorage.setItem("particlesEnabled", String(next));
            return next;
        });
    };

    return (
        <ParticleContext.Provider value={{ particlesEnabled, toggleParticles }}>
            {children}
        </ParticleContext.Provider>
    );
}

export function useParticleContext() {
    const context = useContext(ParticleContext);
    if (context === undefined) {
        throw new Error("useParticleContext must be used within a ParticleProvider");
    }
    return context;
}
