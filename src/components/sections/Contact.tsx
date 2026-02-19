"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Send, Mail, Github, Linkedin, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setIsSent(true);
    }

    return (
        <section id="contact" className="py-24 bg-background/50 backdrop-blur-sm relative z-10 border-t border-white/5">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                            Initialize Connection
                        </h2>
                        <div className="h-1 w-20 bg-primary rounded-full mb-8" />
                        <p className="text-lg text-muted-foreground mb-8">
                            Whether you have a question, a project proposal, or just want to discuss the future of tech, I'm aligned and ready to connect.
                        </p>

                        <div className="space-y-6">
                            <a
                                href="mailto:dennisooki@icloud.com"
                                className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                            >
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-sm font-medium text-foreground">Email</div>
                                    <div>dennisooki@icloud.com</div>
                                </div>
                            </a>

                            <a
                                href="https://github.com/dennisooki"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                            >
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                                    <Github className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-sm font-medium text-foreground">GitHub</div>
                                    <div>github.com/dennisooki</div>
                                </div>
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Card className="p-6 md:p-8 backdrop-blur-xl bg-card/30">
                            {isSent ? (
                                <div className="flex flex-col items-center justify-center h-[400px] text-center space-y-4">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                    >
                                        <CheckCircle2 className="w-16 h-16 text-primary" />
                                    </motion.div>
                                    <h3 className="text-2xl font-bold">Transmission Received</h3>
                                    <p className="text-muted-foreground">
                                        I'll get back to you as soon as I decode your message.
                                    </p>
                                    <Button variant="outline" onClick={() => setIsSent(false)}>
                                        Send Another
                                    </Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-medium">Name</label>
                                            <Input id="name" required />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-medium">Email</label>
                                            <Input id="email" type="email" required />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                                        <Input id="subject" placeholder="Project collaboration..." required />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium">Message</label>
                                        <textarea
                                            id="message"
                                            className="flex min-h-[150px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 backdrop-blur-sm resize-none"
                                            placeholder="Tell me about your project..."
                                            required
                                        />
                                    </div>
                                    <Button type="submit" className="w-full gap-2" disabled={isSubmitting}>
                                        {isSubmitting ? (
                                            "Transmitting..."
                                        ) : (
                                            <>
                                                Send Message <Send className="w-4 h-4" />
                                            </>
                                        )}
                                    </Button>
                                </form>
                            )}
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
