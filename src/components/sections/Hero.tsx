"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { useState, useRef, Suspense } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

function Stars(props: any) {
    const ref = useRef<any>(null);
    const [sphere] = useState(() =>
        random.inSphere(new Float32Array(5000), { radius: 1.5 })
    );

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points
                ref={ref}
                positions={sphere}
                stride={3}
                frustumCulled={false}
                {...props}
            >
                <PointMaterial
                    transparent
                    color="#2c5aa0"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
}

export function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background">
            {/* 3D Background */}
            <div className="absolute inset-0 z-0 opacity-40">
                <Canvas camera={{ position: [0, 0, 1] }}>
                    <Suspense fallback={null}>
                        <Stars />
                    </Suspense>
                </Canvas>
            </div>

            <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="inline-block rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-6 backdrop-blur-sm">
                        Available for New Opportunities
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6"
                >
                    Building the <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                        Digital Nervous System
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="max-w-2xl text-lg md:text-xl text-muted-foreground mb-10"
                >
                    DENNIS OOKI / SOFTWARE DEVELOPER
                    <br />
                    Crafting intelligent, scalable, and immersive digital experiences that bridge the gap between human intent and machine execution.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <Button size="lg" className="gap-2" asChild>
                        <a href="#projects">
                            View Work <ArrowRight className="w-4 h-4" />
                        </a>
                    </Button>
                    <Button variant="outline" size="lg" className="gap-2" asChild>
                        <a href="/Dennis Ooki CV.pdf" target="_blank" rel="noopener noreferrer">
                            Download CV <Download className="w-4 h-4" />
                        </a>
                    </Button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground text-sm"
            >
                <span>Scroll to Initialize</span>
                <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center p-1">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-1 h-1 bg-white rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
}
