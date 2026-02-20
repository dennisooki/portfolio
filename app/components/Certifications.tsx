"use client";

import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";

const certifications = [
  {
    title: "Back-End Developer Professional Certificate",
    issuer: "Meta",
    description:
      "Comprehensive certification covering server-side development, APIs, databases, and Django framework.",
    year: "2024",
    link: "https://www.coursera.org/professional-certificates/meta-back-end-developer",
  },
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM",
    description:
      "Foundation in AI concepts, machine learning basics, and practical applications of AI technologies.",
    year: "2024",
    link: "https://www.coursera.org/learn/ibm-ai-fundamentals",
  },
];

export default function Certifications() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-serif text-sm tracking-[0.3em] uppercase text-accent mb-4">
            Certifications
          </h2>
          <div className="section-divider w-24" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -4 }}
              className="group block bg-surface border border-border rounded-xl p-6 hover:border-accent transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-accent text-sm font-medium">{cert.issuer}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted group-hover:text-accent transition-colors flex-shrink-0 mt-1" />
                  </div>
                  <p className="text-muted text-sm mt-3 leading-relaxed">
                    {cert.description}
                  </p>
                  <span className="inline-block mt-4 text-xs font-mono text-muted">
                    {cert.year}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
