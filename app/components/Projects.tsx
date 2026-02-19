'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Projects.module.css';

const PROJECTS = [
    {
        id: 'uniconnect',
        title: 'Uniconnect Internal Tools',
        hook: 'Building the engine room of a global education firm.',
        description: 'Developed the entire internal tools ecosystem from the ground up — architecture design, scalable APIs, AI-powered automation with Gemini LLMs, and comprehensive database management supporting company-wide operations.',
        tech: ['Python', 'Django', 'React', 'Supabase', 'Docker'],
        impact: 'Full-stack ecosystem built from zero',
        color: 'var(--accent-secondary)',
    },
    {
        id: 'finance-tracker',
        title: 'Personal Finance Tracker',
        hook: 'Making money make sense.',
        description: 'Full-stack financial management application with intuitive dashboards, expense tracking, budgeting tools, and financial analytics — built with React frontend, Django backend, and MongoDB for complex data relationships.',
        tech: ['React', 'Django', 'MongoDB', 'REST API'],
        impact: 'Secure auth + data encryption',
        color: 'var(--accent-primary)',
    },
    {
        id: 'kula-kount',
        title: 'Kula Kount',
        hook: 'Privacy as a feature, not an afterthought.',
        description: 'Cross-platform calorie tracker with barcode scanning, OpenFoodFacts/USDA API integration, offline-first architecture, and GDPR-compliant privacy-first design — built with Flutter and Supabase.',
        tech: ['Flutter', 'Dart', 'Supabase', 'REST API'],
        impact: 'Privacy-first, offline-capable',
        color: 'var(--accent-hover)',
    },
];

export default function Projects() {
    const sectionRef = useRef<HTMLElement>(null);
    const [expandedId, setExpandedId] = useState<string | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll('.reveal-stagger').forEach((el, i) => {
                            setTimeout(() => el.classList.add('visible'), i * 120);
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="atelier" data-section className={`section ${styles.projects}`} ref={sectionRef}>
            <div className="container">
                <span className="section-label reveal-stagger">02 — Atelier</span>
                <h2 className="section-title reveal-stagger">Selected Works</h2>
                <div className="section-divider reveal-stagger" />

                <div className={styles.grid}>
                    {PROJECTS.map((project, index) => (
                        <article
                            key={project.id}
                            className={`${styles.card} ${expandedId === project.id ? styles.cardExpanded : ''} reveal-stagger`}
                            style={{ '--card-accent': project.color } as React.CSSProperties}
                            onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    setExpandedId(expandedId === project.id ? null : project.id);
                                }
                            }}
                        >
                            <div className={styles.cardHeader}>
                                <span className={styles.cardNumber}>
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <div className={styles.cardAccentLine} />
                            </div>

                            <h3 className={styles.cardTitle}>{project.title}</h3>
                            <p className={styles.cardHook}>{project.hook}</p>

                            <div className={styles.cardDetails}>
                                <p className={styles.cardDesc}>{project.description}</p>
                                <div className={styles.cardTech}>
                                    {project.tech.map((t) => (
                                        <span key={t} className={styles.techTag}>{t}</span>
                                    ))}
                                </div>
                                <p className={styles.cardImpact}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                    {project.impact}
                                </p>
                            </div>

                            <span className={styles.expandHint}>
                                {expandedId === project.id ? 'Less' : 'Explore'}
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: expandedId === project.id ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s ease' }}>
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            </span>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
