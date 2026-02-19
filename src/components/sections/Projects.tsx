"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
    {
        title: "Kula Kount",
        description: "Privacy-Focused Calorie Tracker",
        tags: ["Flutter", "Dart", "Supabase", "OpenFoodFacts"],
        longDescription: "A cross-platform mobile application built with Flutter that emphasizes user privacy. Features barcode scanning via OpenFoodFacts API, offline capabilities, and secure data synchronization.",
        links: { demo: "#", github: "#" },
    },
    {
        title: "Personal Finance Tracker",
        description: "Full-Stack Financial Management",
        tags: ["React", "Django", "MongoDB", "Auth0"],
        longDescription: "Comprehensive financial dashboard for tracking expenses and budgeting. Implements complex data visualization and secure user authentication with bank-grade encryption standards.",
        links: { demo: "#", github: "#" },
    },
];

export function Projects() {
    return (
        <section id="projects" className="py-24 bg-background relative overflow-hidden">
            <div className="container px-4 md:px-6 z-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                        Selected Works
                    </h2>
                    <div className="h-1 w-20 bg-primary rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <Card className="h-full flex flex-col group hover:border-primary/50 transition-colors duration-300">
                                <CardHeader>
                                    <CardTitle className="flex justify-between items-start">
                                        {project.title}
                                        <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                    </CardTitle>
                                    <CardDescription className="text-base mt-2">
                                        {project.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                                        {project.longDescription}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md font-mono"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter className="gap-4">
                                    <Button variant="outline" size="sm" className="w-full gap-2">
                                        <Github className="w-4 h-4" /> Code
                                    </Button>
                                    <Button size="sm" className="w-full gap-2">
                                        Live Demo
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
