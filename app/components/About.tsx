"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

const handleDownloadCV = () => {
  const cvWindow = window.open("/Dennis Ooki CV.html", "_blank");
  if (cvWindow) {
    setTimeout(() => {
      cvWindow.print();
    }, 500);
  }
};

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-serif text-sm tracking-[0.3em] uppercase text-accent mb-4">
            About
          </h2>
          <div className="section-divider w-24" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 md:order-1"
          >
            <blockquote className="font-serif text-2xl md:text-3xl text-foreground mb-8 leading-relaxed">
              "I believe software should feel{" "}
              <span className="text-gradient">crafted</span>, not manufactured."
            </blockquote>

            <p className="text-muted leading-relaxed mb-6">
              I am a <span className="text-foreground font-medium">Software Development Lead</span> at{" "}
              <span className="text-accent font-medium">Uniconnect Centre</span>, crafting digital 
              experiences that merge technical precision with creative vision. With a foundation in 
              full-stack development and a passion for elegant architecture, I transform complex 
              problems into intuitive solutions.
            </p>

            <p className="text-muted leading-relaxed mb-8">
              Currently leading the internal tools ecosystem at Uniconnect Centre, I specialize 
              in building scalable applications, integrating AI-powered solutions, and establishing 
              development workflows that empower teams to deliver exceptional results.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <motion.button
                onClick={handleDownloadCV}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-5 py-3 bg-accent text-background rounded-lg font-medium text-sm hover:bg-accent-light transition-colors"
              >
                <FileText className="w-4 h-4" />
                Download CV
              </motion.button>
              <a
                href="https://github.com/dennisooki"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-border rounded-full hover:border-accent hover:text-accent transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/dennisooki"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-border rounded-full hover:border-accent hover:text-accent transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:dennisooki@icloud.com"
                className="p-3 border border-border rounded-full hover:border-accent hover:text-accent transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="order-1 md:order-2 relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 border border-accent/20 rounded-lg transform rotate-3" />
              <div className="absolute inset-0 border border-accent/30 rounded-lg transform -rotate-3" />
              <div className="absolute inset-0 bg-card rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full border-2 border-accent/30 flex items-center justify-center">
                      <span className="font-serif text-5xl font-semibold text-accent">DM</span>
                    </div>
                    <div className="space-y-2">
                      <div className="w-24 h-1 bg-accent/20 mx-auto rounded" />
                      <div className="w-16 h-1 bg-accent/20 mx-auto rounded" />
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 geometric-pattern opacity-30" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
