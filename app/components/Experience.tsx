'use client';

import { useEffect, useRef } from 'react';
import styles from './Experience.module.css';

const TIMELINE = [
    {
        period: 'May 2025 – Present',
        title: 'Software Development Lead',
        org: 'Uniconnect Centre (Accor International)',
        points: [
            'Built entire internal tools ecosystem from the ground up — architecture, APIs, databases',
            'Integrated Gemini AI and LLMs into internal tools for automation and decision-making',
            'Designed scalable microservices and established development workflows for the technical team',
            'Created comprehensive technical documentation for all internal systems',
        ],
    },
    {
        period: '2021 – 2025',
        title: 'B.Sc. Software Development',
        org: 'KCA University',
        points: [
            'Data Structures & Algorithms, Database Management, Software Engineering',
            'Computer Architecture, Information Systems Management',
        ],
        isEducation: true,
    },
];

export default function Experience() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll('.reveal-stagger').forEach((el, i) => {
                            setTimeout(() => el.classList.add('visible'), i * 150);
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
        <section id="percorso" data-section className={`section ${styles.experience}`} ref={sectionRef}>
            <div className="container">
                <span className="section-label reveal-stagger">04 — Percorso</span>
                <h2 className="section-title reveal-stagger">The Journey</h2>
                <div className="section-divider reveal-stagger" />

                <div className={styles.timeline}>
                    {TIMELINE.map((item, index) => (
                        <div key={index} className={`${styles.timelineItem} reveal-stagger`}>
                            <div className={styles.timelineDot}>
                                <div className={styles.dotInner} />
                            </div>
                            <div className={styles.timelineContent}>
                                <span className={styles.period}>{item.period}</span>
                                <h3 className={styles.role}>{item.title}</h3>
                                <p className={styles.org}>{item.org}</p>
                                <ul className={styles.points}>
                                    {item.points.map((point, pi) => (
                                        <li key={pi}>{point}</li>
                                    ))}
                                </ul>
                                {item.isEducation && (
                                    <span className={styles.badge}>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                                            <path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5" />
                                        </svg>
                                        Education
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
