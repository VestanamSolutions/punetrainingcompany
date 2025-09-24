'use client';

import { useEffect, useRef } from 'react';

interface ScrollParallaxProps {
    children: React.ReactNode;
    speed?: number;
    className?: string;
}

const ScrollParallax = ({ children, speed = 0.5, className = '' }: ScrollParallaxProps) => {
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const handleScroll = () => {
            const rect = element.getBoundingClientRect();
            const scrolled = window.pageYOffset;
            const rate = scrolled * speed;

            element.style.setProperty('--parallax-y', `${-rate}px`);
        };

        const handleScrollThrottled = () => {
            requestAnimationFrame(handleScroll);
        };

        window.addEventListener('scroll', handleScrollThrottled, { passive: true });
        handleScroll(); // Initial call

        return () => {
            window.removeEventListener('scroll', handleScrollThrottled);
        };
    }, [speed]);

    return (
        <div ref={elementRef} className={`scroll-parallax ${className}`}>
            {children}
        </div>
    );
};

export default ScrollParallax;
