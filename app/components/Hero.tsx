'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
    const [phase, setPhase] = useState(0);
    const nameRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        const t1 = setTimeout(() => setPhase(1), 400);
        const t2 = setTimeout(() => setPhase(2), 2200);
        const t3 = setTimeout(() => setPhase(3), 3200);
        return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
    }, []);

    const handleScrollDown = () => {
        const next = document.getElementById('philosophy');
        if (next) next.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                {/* Ink SVG Name */}
                <div className={`${styles.nameWrap} ${phase >= 1 ? styles.nameVisible : ''}`}>
                    <svg
                        ref={nameRef}
                        className={styles.nameSvg}
                        viewBox="0 0 900 100"
                        aria-label="Dennis Ooki Magolo"
                    >
                        <text
                            x="450"
                            y="70"
                            textAnchor="middle"
                            className={styles.nameText}
                        >
                            DENNIS OOKI MAGOLO
                        </text>
                    </svg>
                </div>

                {/* Title */}
                <p className={`${styles.title} ${phase >= 2 ? styles.titleVisible : ''}`}>
                    Software Developer &amp; Digital Craftsman
                </p>

                {/* Ink line */}
                <div className={`${styles.inkLine} ${phase >= 2 ? styles.inkLineVisible : ''}`} />

                {/* Tagline */}
                <p className={`${styles.tagline} ${phase >= 3 ? styles.taglineVisible : ''}`}>
                    Building with intention, precision &amp; pride
                </p>
            </div>

            {/* Scroll indicator */}
            <button
                className={`${styles.scrollCta} ${phase >= 3 ? styles.scrollCtaVisible : ''}`}
                onClick={handleScrollDown}
                aria-label="Scroll to content"
            >
                <span className={styles.scrollLabel}>Scroll</span>
                <svg className={styles.scrollChevron} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                </svg>
            </button>
        </section>
    );
}
