"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { ChevronDown, MapPin } from "lucide-react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 50,
          y: (e.clientY - rect.top - rect.height / 2) / 50,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const nameWords = ["DENNIS", "OOKI", "MAGOLO"];

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      id="/"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      <div className="absolute inset-0 geometric-pattern pointer-events-none" />
      
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-highlight/5 blur-3xl" />

      <motion.div
        className="relative mb-12"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="relative w-48 h-48 md:w-64 md:h-64">
          <motion.div
            className="absolute inset-0 border-2 border-accent/30 rounded-full"
            animate={{
              x: mousePosition.x * 2,
              y: mousePosition.y * 2,
            }}
            transition={{ type: "spring", stiffness: 50, damping: 30 }}
          />
          <motion.div
            className="absolute inset-4 border border-accent/20 rotate-45"
            animate={{
              x: mousePosition.x * -1.5,
              y: mousePosition.y * -1.5,
              rotate: 45,
            }}
            transition={{ type: "spring", stiffness: 50, damping: 30 }}
          />
          <motion.div
            className="absolute inset-12 border border-accent/40"
            style={{ clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" }}
            animate={{
              x: mousePosition.x * 3,
              y: mousePosition.y * 3,
            }}
            transition={{ type: "spring", stiffness: 50, damping: 30 }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.span
              className="font-serif text-6xl md:text-8xl font-semibold text-foreground"
              animate={{
                x: mousePosition.x * 0.5,
                y: mousePosition.y * 0.5,
              }}
              transition={{ type: "spring", stiffness: 50, damping: 30 }}
            >
              DM
            </motion.span>
          </div>
        </div>
      </motion.div>

      <div className="text-center relative z-10">
        <motion.div className="overflow-hidden mb-4">
          <motion.h1
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground tracking-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {nameWords.map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block whitespace-nowrap">
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={letterIndex}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.5 + (wordIndex * word.length + letterIndex) * 0.03,
                      ease: "easeOut",
                    }}
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                ))}
                {wordIndex < nameWords.length - 1 && <span className="inline-block w-4" />}
              </span>
            ))}
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="space-y-3"
        >
          <p className="text-lg md:text-xl text-muted font-light tracking-wide">
            Software Development Lead <span className="text-accent">|</span>{" "}
            Architect of Digital Experiences
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-muted">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              <span className="text-sm tracking-wider">Nairobi, Kenya</span>
            </div>
            <span className="text-accent hidden sm:inline">|</span>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse-subtle" />
              <span className="text-sm tracking-wider">Available for opportunities</span>
            </div>
          </div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          onClick={scrollToProjects}
          className="mt-12 group flex flex-col items-center justify-center gap-2 text-muted hover:text-accent transition-colors cursor-pointer w-full"
        >
          <span className="text-sm tracking-widest uppercase text-center">Explore the Craft</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
