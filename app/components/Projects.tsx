"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  features: string[];
  color: string;
  github?: string;
  live?: string;
}

const projects: Project[] = [
  {
    id: "finance-tracker",
    title: "Personal Finance Tracker",
    subtitle: "Full-stack financial management",
    description:
      "A comprehensive financial management application built to help users track expenses, manage budgets, and gain insights into their financial health. Features an intuitive dashboard with real-time analytics.",
    technologies: ["React", "Django", "MongoDB", "REST API"],
    features: [
      "Intuitive dashboard with expense tracking and budgeting tools",
      "MongoDB database for efficient financial data relationships",
      "Secure user authentication and data encryption",
      "Financial analytics and visualization",
    ],
    color: "#C9A86C",
    github: "https://github.com/dennisooki",
  },
  {
    id: "kula-kount",
    title: "Kula Kount",
    subtitle: "Privacy-focused calorie tracker",
    description:
      "A cross-platform mobile application designed with privacy at its core. Enables users to track their nutrition without compromising personal data, featuring offline functionality and seamless API integrations.",
    technologies: ["Flutter", "Dart", "Supabase", "USDA API"],
    features: [
      "Cross-platform support for iOS and Android",
      "Barcode scanning with OpenFoodFacts integration",
      "Offline-first architecture with data sync",
      "GDPR-compliant privacy design",
    ],
    color: "#B8336A",
    github: "https://github.com/dennisooki",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 md:py-32 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-serif text-sm tracking-[0.3em] uppercase text-accent mb-4">
            Featured Work
          </h2>
          <div className="section-divider w-24" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedProject(project)}
              className="group relative bg-surface border border-border rounded-xl overflow-hidden cursor-pointer"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at center, ${project.color}10 0%, transparent 70%)`,
                }}
              />

              <div className="relative p-8">
                <div className="mb-6">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${project.color}20` }}
                  >
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: project.color }}
                    />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted text-sm">{project.subtitle}</p>
                </div>

                <p className="text-muted text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono bg-card rounded-full text-muted border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center text-accent group/link">
                  <span className="text-sm font-medium">View Project</span>
                  <ExternalLink className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                </div>
              </div>

              <div
                className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                style={{ backgroundColor: project.color }}
              />
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 z-50 bg-background/90 backdrop-blur-lg flex items-center justify-center p-6"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 50 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-2xl w-full bg-surface border border-border rounded-2xl overflow-hidden"
              >
                <div
                  className="h-2"
                  style={{ backgroundColor: selectedProject.color }}
                />

                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-2 text-muted hover:text-foreground transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="p-8 md:p-12">
                  <div className="mb-8">
                    <h3 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-2">
                      {selectedProject.title}
                    </h3>
                    <p className="text-muted">{selectedProject.subtitle}</p>
                  </div>

                  <p className="text-muted leading-relaxed mb-8">
                    {selectedProject.description}
                  </p>

                  <div className="mb-8">
                    <h4 className="font-serif text-lg font-medium text-foreground mb-4">
                      Key Features
                    </h4>
                    <ul className="space-y-3">
                      {selectedProject.features.map((feature, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-3 text-muted"
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                            style={{ backgroundColor: selectedProject.color }}
                          />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-serif text-lg font-medium text-foreground mb-4">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 text-sm font-mono bg-card rounded-lg text-foreground border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-lg hover:opacity-90 transition-opacity"
                      >
                        <Github className="w-4 h-4" />
                        View Code
                      </a>
                    )}
                    {selectedProject.live && (
                      <a
                        href={selectedProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:border-accent hover:text-accent transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
