'use client';

import { useEffect, useRef } from 'react';
import styles from './Skills.module.css';

const SKILL_GROUPS = [
    {
        category: 'Languages',
        items: [
            { name: 'Python', level: 92 },
            { name: 'Dart', level: 88 },
            { name: 'JavaScript', level: 90 },
            { name: 'Bash', level: 72 },
            { name: 'Go', level: 65 },
        ],
    },
    {
        category: 'Frameworks',
        items: [
            { name: 'Django', level: 90 },
            { name: 'Flutter', level: 88 },
            { name: 'React', level: 85 },
            { name: 'Android', level: 70 },
        ],
    },
    {
        category: 'Data & APIs',
        items: [
            { name: 'MongoDB', level: 80 },
            { name: 'Supabase', level: 88 },
            { name: 'RESTful APIs', level: 92 },
            { name: 'JSON', level: 95 },
        ],
    },
    {
        category: 'DevOps & Tools',
        items: [
            { name: 'Git / GitHub', level: 90 },
            { name: 'Docker', level: 75 },
            { name: 'Unix / Linux', level: 82 },
            { name: 'VS Code', level: 95 },
        ],
    },
    {
        category: 'Web Technologies',
        items: [
            { name: 'HTML & CSS', level: 92 },
            { name: 'Responsive Design', level: 88 },
            { name: 'UX/UI Principles', level: 80 },
            { name: 'Web APIs', level: 85 },
        ],
    },
    {
        category: 'Practices',
        items: [
            { name: 'Agile / Scrum', level: 82 },
            { name: 'Testing', level: 78 },
            { name: 'Technical Docs', level: 88 },
            { name: 'Microsoft 365', level: 85 },
        ],
    },
];

export default function Skills() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll('.reveal-stagger').forEach((el, i) => {
                            setTimeout(() => el.classList.add('visible'), i * 80);
                        });
                    }
                });
            },
            { threshold: 0.08 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="strumenti" data-section className={`section ${styles.skills}`} ref={sectionRef}>
            <div className="container">
                <span className="section-label reveal-stagger">03 — Strumenti</span>
                <h2 className="section-title reveal-stagger">Tools of the Trade</h2>
                <div className="section-divider reveal-stagger" />

                <div className={styles.grid}>
                    {SKILL_GROUPS.map((group) => (
                        <div key={group.category} className={`${styles.group} reveal-stagger`}>
                            <h3 className={styles.groupTitle}>{group.category}</h3>
                            <ul className={styles.list}>
                                {group.items.map((skill) => (
                                    <li key={skill.name} className={styles.item}>
                                        <div className={styles.itemHeader}>
                                            <span className={styles.itemName}>{skill.name}</span>
                                        </div>
                                        <div className={styles.bar}>
                                            <div
                                                className={styles.barFill}
                                                style={{ '--fill-width': `${skill.level}%` } as React.CSSProperties}
                                            />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
