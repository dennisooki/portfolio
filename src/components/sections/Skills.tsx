"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const skills = {
    "Languages": ["Python", "Dart", "JavaScript", "Bash", "Go", "TypeScript"],
    "Frameworks": ["Django", "Flutter", "React", "Next.js", "Tailwind CSS"],
    "Databases & Cloud": ["MongoDB", "Supabase", "PostgreSQL", "Docker", "AWS"],
    "Tools & Concepts": ["Git/GitHub", "CI/CD", "Agile", "System Design", "UI/UX"],
};

export function Skills() {
    return (
        <section id="skills" className="py-24 bg-background/50 backdrop-blur-sm relative z-10 border-y border-white/5">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                        Technical Arsenal
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        A curated stack of technologies I use to bring digital visions to life.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {Object.entries(skills).map(([category, items], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="space-y-4"
                        >
                            <h3 className="text-xl font-semibold text-primary">{category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 rounded-md border border-white/10 bg-white/5 text-sm hover:border-primary/50 hover:bg-primary/10 transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
