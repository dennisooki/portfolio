"use client";

import { motion } from "framer-motion";

export function About() {
    return (
        <section id="about" className="py-24 bg-background relative z-10">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                            More Than Just Code
                        </h2>
                        <div className="h-1 w-20 bg-primary rounded-full mb-8" />
                        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                            <p>
                                I am a <strong>Software Developer and IT Specialist</strong> with a deep passion for building the digital nervous systems of tomorrow. My expertise spans full-stack development, mobile applications, and modern web technologies.
                            </p>
                            <p>
                                With a strong foundation in <strong>Python, Django, Flutter, and React</strong>, I create efficient, user-friendly solutions that bridge the gap between complex backend logic and intuitive frontend experiences.
                            </p>
                            <p>
                                I am driven by a continuous desire to learn and innovate, constantly exploring new frontiers in <strong>AI integration</strong> and <strong>scalable architecture</strong> to solve real-world problems.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 bg-card/50 backdrop-blur-sm p-2">
                            {/* Placeholder for a cool graphic or the user's photo if they wanted, 
                   but for "Digital Alchemy" maybe a generative abstract shape is better 
                   unless the photo is required. The prompt implies photo from CV. 
                   I'll use a placeholder for now or the image from public if I moved it.
                   CV said 'image.png'. I should probably leave a slot for it.
               */}
                            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-transparent rounded-xl flex items-center justify-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-primary/20 blur-3xl group-hover:bg-primary/30 transition-colors duration-500" />
                                <span className="font-display text-9xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors duration-500 select-none">
                                    DO
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
