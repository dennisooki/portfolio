"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", level: 90 },
      { name: "Dart", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "Go", level: 60 },
      { name: "Bash", level: 70 },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "Django", level: 95 },
      { name: "Flutter", level: 85 },
      { name: "React", level: 80 },
      { name: "Android", level: 70 },
    ],
  },
  {
    title: "Databases & APIs",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "Supabase", level: 80 },
      { name: "REST APIs", level: 90 },
      { name: "JSON", level: 95 },
    ],
  },
  {
    title: "Development Tools",
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "Docker", level: 75 },
      { name: "Linux/Unix", level: 85 },
      { name: "VS Code", level: 95 },
    ],
  },
];

const coreCompetencies = [
  "Full-Stack Development",
  "Mobile Applications",
  "Database Architecture",
  "API Design",
  "AI Integration",
  "Team Leadership",
  "Technical Documentation",
  "Agile Methodology",
];

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-24 md:py-32 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-serif text-sm tracking-[0.3em] uppercase text-accent mb-4">
            Expertise
          </h2>
          <div className="section-divider w-24" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="bg-surface border border-border rounded-xl p-6"
            >
              <h3 className="font-serif text-lg font-medium text-foreground mb-6">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    onMouseEnter={() => setHoveredSkill(`${catIndex}-${skillIndex}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex justify-between text-sm mb-2">
                      <span
                        className={`font-mono transition-colors ${
                          hoveredSkill === `${catIndex}-${skillIndex}`
                            ? "text-accent"
                            : "text-foreground"
                        }`}
                      >
                        {skill.name}
                      </span>
                      <span className="text-muted">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-card rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + skillIndex * 0.1, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-accent to-highlight"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-serif text-lg font-medium text-foreground mb-6 text-center">
            Core Competencies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {coreCompetencies.map((competency, index) => (
              <motion.span
                key={competency}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 text-sm font-mono bg-surface border border-border rounded-full text-muted hover:text-accent hover:border-accent transition-colors cursor-default"
              >
                {competency}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
