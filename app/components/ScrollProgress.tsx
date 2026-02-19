'use client';

import { useEffect, useRef } from 'react';

export default function ScrollProgress() {
    const barRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ticking = false;
        const update = () => {
            if (!barRef.current) return;
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = docHeight > 0 ? scrollTop / docHeight : 0;
            barRef.current.style.transform = `scaleX(${progress})`;
        };

        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    update();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return <div ref={barRef} className="scroll-progress" style={{ transform: 'scaleX(0)' }} />;
}
