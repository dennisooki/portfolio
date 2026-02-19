'use client';

import { useEffect, useRef } from 'react';
import styles from './Credentials.module.css';

const CERTS = [
    {
        title: 'Meta Back-End Developer',
        issuer: 'Meta (Coursera)',
        icon: '✓',
    },
    {
        title: 'Artificial Intelligence Fundamentals',
        issuer: 'IBM',
        icon: '✓',
    },
];

const COMPETENCIES = [
    'Full-Stack Web Development',
    'Mobile Application Development',
    'Database Design & Management',
    'Software Architecture & Design',
    'Problem-Solving & Debugging',
    'Version Control & Collaboration',
    'Agile Development & Testing',
    'Technical Leadership & Mentoring',
];

export default function Credentials() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll('.reveal-stagger').forEach((el, i) => {
                            setTimeout(() => el.classList.add('visible'), i * 100);
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
        <section id="credenziali" data-section className={`section ${styles.credentials}`} ref={sectionRef}>
            <div className="container">
                <span className="section-label reveal-stagger">05 — Credenziali</span>
                <h2 className="section-title reveal-stagger">Credentials &amp; Craft</h2>
                <div className="section-divider reveal-stagger" />

                <div className={styles.layout}>
                    {/* Certifications */}
                    <div className={styles.certsCol}>
                        <h3 className={`${styles.subTitle} reveal-stagger`}>Certifications</h3>
                        <div className={styles.certs}>
                            {CERTS.map((cert) => (
                                <div key={cert.title} className={`${styles.certCard} reveal-stagger`}>
                                    <div className={styles.certIcon}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                            <polyline points="22 4 12 14.01 9 11.01" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className={styles.certTitle}>{cert.title}</p>
                                        <p className={styles.certIssuer}>{cert.issuer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Core Competencies */}
                    <div className={styles.compCol}>
                        <h3 className={`${styles.subTitle} reveal-stagger`}>Core Competencies</h3>
                        <div className={styles.compGrid}>
                            {COMPETENCIES.map((comp) => (
                                <span key={comp} className={`${styles.compTag} reveal-stagger`}>
                                    {comp}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
