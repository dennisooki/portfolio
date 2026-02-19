'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './LaFirma.module.css';

const SIGNATURE_CODE = `/**
 * La Firma — Dennis Ooki Magolo
 * 
 * Every great craftsman signs their work.
 * This is mine.
 */

const craft = (passion, precision, patience) => {
  const vision = passion * precision;
  const result = iterate(vision, patience);
  return result > expectation 
    ? 'Ship it.' 
    : craft(passion + 1, precision, patience);
};

// The work never stops. The craft always improves.
craft(Infinity, Infinity, Infinity);
// → "Something remarkable."`;

export default function LaFirma() {
    const sectionRef = useRef<HTMLElement>(null);
    const [displayedCode, setDisplayedCode] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasStarted) {
                        setHasStarted(true);
                        entry.target.querySelectorAll('.reveal-stagger').forEach((el, i) => {
                            setTimeout(() => el.classList.add('visible'), i * 100);
                        });
                    }
                });
            },
            { threshold: 0.3 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, [hasStarted]);

    useEffect(() => {
        if (!hasStarted) return;

        setIsTyping(true);
        let i = 0;
        const interval = setInterval(() => {
            if (i < SIGNATURE_CODE.length) {
                setDisplayedCode(SIGNATURE_CODE.slice(0, i + 1));
                i++;
            } else {
                clearInterval(interval);
                setIsTyping(false);
            }
        }, 22);

        return () => clearInterval(interval);
    }, [hasStarted]);

    return (
        <section ref={sectionRef} className={`section ${styles.firma}`}>
            <div className={`container ${styles.inner}`}>
                <span className={`section-label reveal-stagger ${styles.label}`}>La Firma Digitale</span>
                <p className={`${styles.subtitle} reveal-stagger`}>Every craftsman signs their work.</p>

                <div className={`${styles.editor} reveal-stagger`}>
                    <div className={styles.editorHeader}>
                        <div className={styles.editorDots}>
                            <span /><span /><span />
                        </div>
                        <span className={styles.editorTitle}>signature.js</span>
                    </div>
                    <pre className={styles.editorBody}>
                        <code>
                            {displayedCode}
                            {isTyping && <span className={styles.cursor}>|</span>}
                        </code>
                    </pre>
                </div>

                {/* Footer */}
                <footer className={`${styles.footer} reveal-stagger`}>
                    <p className={styles.footerText}>
                        Crafted with care by <strong>Dennis Ooki Magolo</strong>
                    </p>
                    <p className={styles.footerMeta}>
                        Designed with the spirit of an Italian atelier. Built with Next.js.
                    </p>
                    <p className={styles.footerYear}>© {new Date().getFullYear()}</p>
                </footer>
            </div>
        </section>
    );
}
