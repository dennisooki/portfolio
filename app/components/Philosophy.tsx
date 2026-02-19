'use client';

import { useEffect, useRef } from 'react';
import styles from './Philosophy.module.css';

export default function Philosophy() {
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
            { threshold: 0.15 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="philosophy" data-section className={`section ${styles.philosophy}`} ref={sectionRef}>
            <div className={`container ${styles.grid}`}>
                <div className={styles.textCol}>
                    <span className="section-label reveal-stagger">01 — Philosophy</span>
                    <h2 className="section-title reveal-stagger">
                        Every line of code<br />
                        is a design decision.
                    </h2>
                    <div className="section-divider reveal-stagger" />

                    <p className={`${styles.prose} reveal-stagger`}>
                        I believe exceptional software emerges at the intersection of engineering rigor
                        and creative intuition. From crafting full-stack systems that power real business
                        operations at Uniconnect, to building privacy-conscious mobile applications that
                        respect users — I approach each project the way an artisan approaches their craft.
                    </p>
                    <p className={`${styles.prose} reveal-stagger`}>
                        With intention. With precision. With pride.
                    </p>
                    <p className={`${styles.prose} reveal-stagger`}>
                        My toolkit spans Python, Dart, JavaScript, and Go — frameworks like Django,
                        Flutter, and React — but tools are only as good as the thinking behind them.
                        What truly drives my work is the pursuit of solutions that are not just
                        functional, but genuinely thoughtful.
                    </p>
                </div>

                <div className={`${styles.artCol} reveal-stagger`}>
                    <div className={styles.artFrame}>
                        <svg viewBox="0 0 400 500" className={styles.artSvg} aria-hidden="true">
                            {/* Abstract geometric art — architectural line drawing */}
                            <line x1="50" y1="50" x2="350" y2="50" stroke="var(--accent-primary)" strokeWidth="0.5" opacity="0.4" />
                            <line x1="50" y1="50" x2="50" y2="450" stroke="var(--accent-primary)" strokeWidth="0.5" opacity="0.4" />
                            <rect x="80" y="80" width="120" height="180" fill="none" stroke="var(--text-tertiary)" strokeWidth="0.8" opacity="0.3" />
                            <rect x="220" y="140" width="100" height="100" fill="none" stroke="var(--accent-secondary)" strokeWidth="0.8" opacity="0.3" />
                            <circle cx="200" cy="350" r="60" fill="none" stroke="var(--accent-primary)" strokeWidth="0.8" opacity="0.2" />
                            <line x1="80" y1="260" x2="320" y2="260" stroke="var(--text-tertiary)" strokeWidth="0.3" opacity="0.3" />
                            <line x1="140" y1="80" x2="220" y2="140" stroke="var(--accent-secondary)" strokeWidth="0.5" opacity="0.2" />
                            <circle cx="140" cy="170" r="3" fill="var(--accent-primary)" opacity="0.5" />
                            <circle cx="270" cy="190" r="3" fill="var(--accent-secondary)" opacity="0.5" />
                            <text x="60" y="480" fontFamily="var(--font-mono)" fontSize="9" fill="var(--text-tertiary)" opacity="0.4">
                                artigianato digitale
                            </text>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}
