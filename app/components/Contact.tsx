'use client';

import { useEffect, useRef, useState, FormEvent } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
    const sectionRef = useRef<HTMLElement>(null);
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);

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

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setSending(true);
        // Simulate send
        setTimeout(() => {
            setSending(false);
            setSent(true);
        }, 1500);
    };

    return (
        <section id="contatto" data-section className={`section ${styles.contact}`} ref={sectionRef}>
            <div className={`container ${styles.inner}`}>
                <span className="section-label reveal-stagger">06 — Contatto</span>
                <h2 className={`${styles.heading} reveal-stagger`}>
                    Let&apos;s build something<br />remarkable together.
                </h2>
                <div className="section-divider reveal-stagger" />

                <div className={styles.grid}>
                    {/* Form */}
                    <form className={`${styles.form} reveal-stagger`} onSubmit={handleSubmit}>
                        {sent ? (
                            <div className={styles.success}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent-secondary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                    <polyline points="22 4 12 14.01 9 11.01" />
                                </svg>
                                <p>Message sent. I&apos;ll be in touch soon.</p>
                            </div>
                        ) : (
                            <>
                                <div className={styles.field}>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        placeholder=" "
                                        className={styles.input}
                                        autoComplete="name"
                                    />
                                    <label htmlFor="name" className={styles.label}>Your Name</label>
                                </div>
                                <div className={styles.field}>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        placeholder=" "
                                        className={styles.input}
                                        autoComplete="email"
                                    />
                                    <label htmlFor="email" className={styles.label}>Email</label>
                                </div>
                                <div className={styles.field}>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        placeholder=" "
                                        className={`${styles.input} ${styles.textarea}`}
                                        rows={4}
                                    />
                                    <label htmlFor="message" className={styles.label}>Message</label>
                                </div>
                                <button type="submit" className={styles.submit} disabled={sending}>
                                    {sending ? 'Sending…' : 'Send Message'}
                                </button>
                            </>
                        )}
                    </form>

                    {/* Direct contact */}
                    <div className={`${styles.direct} reveal-stagger`}>
                        <p className={styles.directLabel}>Or reach out directly</p>

                        <a href="mailto:dennisooki@icloud.com" className={styles.directLink}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="4" width="20" height="16" rx="2" />
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                            </svg>
                            dennisooki@icloud.com
                        </a>

                        <a href="tel:+254700772176" className={styles.directLink}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            (+254) 700 772 176
                        </a>

                        <a href="https://github.com/dennisooki" target="_blank" rel="noopener noreferrer" className={styles.directLink}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4" />
                                <path d="M9 18c-4.51 2-5-2-7-2" />
                            </svg>
                            github.com/dennisooki
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
