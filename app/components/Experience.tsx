"use client";

import { motion } from "framer-motion";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  type: "work" | "education";
}

const experiences: ExperienceItem[] = [
  {
    title: "Software Development Lead",
    company: "Uniconnect Centre (Accor International)",
    period: "May 2025 – Present",
    description: "Leading the development of internal tools ecosystem and AI-powered solutions.",
    achievements: [
      "Developed entire internal tools ecosystem from ground up",
      "Integrated Gemini AI and LLMs for automation",
      "Designed scalable APIs and microservices",
      "Established development workflows and best practices",
    ],
    type: "work",
  },
  {
    title: "Bachelor of Science in Software Development",
    company: "KCA University",
    period: "2021 – 2025",
    description: "Comprehensive study in software engineering and computer science fundamentals.",
    achievements: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Software Engineering",
      "Computer Architecture",
    ],
    type: "education",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-serif text-sm tracking-[0.3em] uppercase text-accent mb-4">
            Experience
          </h2>
          <div className="section-divider w-24" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-8 md:pl-20 pb-12 last:pb-0"
            >
              <div className="absolute left-0 md:left-8 top-0 w-4 h-4 -ml-[7px] rounded-full border-2 border-accent bg-background" />
              <div className="absolute left-0 md:left-8 top-0 w-4 h-4 -ml-[7px] rounded-full bg-accent/20 animate-pulse-subtle" />

              <div className="bg-surface border border-border rounded-xl p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground">
                      {exp.title}
                    </h3>
                    <p className="text-accent font-medium">{exp.company}</p>
                  </div>
                  <span className="text-muted text-sm mt-2 md:mt-0 font-mono">
                    {exp.period}
                  </span>
                </div>

                <p className="text-muted mb-6">{exp.description}</p>

                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-start gap-3 text-sm text-muted"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
