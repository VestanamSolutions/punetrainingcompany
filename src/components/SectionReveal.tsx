'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SectionRevealProps {
  children: React.ReactNode;
  delay?: number;
  stagger?: number;
}

const SectionReveal = ({ children, delay = 0, stagger = 0.1 }: SectionRevealProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const elements = sectionRef.current?.children;
      if (!elements) return;

      // Set initial state to visible
      gsap.set(elements, { opacity: 1, y: 0 });

      // Then animate from hidden to visible when scrolled into view
      gsap.fromTo(
        elements,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: stagger,
          ease: "power2.out",
          delay: delay,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom-=100",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => ctx.revert();
  }, [delay, stagger]);

  return (
    <div ref={sectionRef} className="opacity-100">
      {children}
    </div>
  );
};

export default SectionReveal;