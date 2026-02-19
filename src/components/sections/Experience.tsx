"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const experience = [
    {
        role: "Software Development Lead",
        company: "Uniconnect Centre (Accor International)",
        period: "May 2025 – Present",
        description: [
            "Developed the entire internal tools ecosystem from the ground up, including architecture design and implementation.",
            "Integrated Gemini AI and other LLMs into internal tools to enhance automation and decision-making capabilities.",
            "Designed and deployed scalable APIs and microservices to support business applications.",
            "Established development workflows and best practices for the technical team."
        ],
        tech: ["React", "Node.js", "Gemini AI", "Microservices"]
    },
    {
        role: "Bachelor of Science in Software Development",
        company: "KCA University",
        period: "2021 – 2025",
        description: [
            "Relevant Coursework: Data Structures & Algorithms, Database Management Systems, Software Engineering, Computer Architecture."
        ],
        tech: ["Computer Science", "Software Engineering"]
    }
];

export function Experience() {
    return (
        <section id="experience" className="py-24 bg-background relative z-10">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                        Journey
                    </h2>
                    <div className="h-1 w-20 bg-primary rounded-full" />
                </motion.div>

                <div className="relative border-l border-white/10 ml-4 md:ml-12 space-y-12">
                    {experience.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative pl-8 md:pl-12"
                        >
                            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                                <h3 className="text-xl font-bold text-foreground">{item.role}</h3>
                                <span className="text-sm font-mono text-primary/80 bg-primary/10 px-2 py-1 rounded border border-primary/20 mt-2 sm:mt-0 w-fit">
                                    {item.period}
                                </span>
                            </div>

                            <div className="text-lg text-muted-foreground mb-4 font-medium">
                                {item.company}
                            </div>

                            <ul className="space-y-2 mb-6 list-disc list-inside text-muted-foreground/80">
                                {item.description.map((desc, i) => (
                                    <li key={i}>{desc}</li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-2">
                                {item.tech.map((t) => (
                                    <Badge key={t} variant="secondary" className="text-xs">
                                        {t}
                                    </Badge>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
