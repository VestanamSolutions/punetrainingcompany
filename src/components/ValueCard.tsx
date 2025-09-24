'use client';

import { useRef, useEffect } from 'react';
import { LucideIcon } from 'lucide-react';
import { gsap } from 'gsap';

interface ValueCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    index: number;
}

const ValueCard = ({ icon: Icon, title, description, index }: ValueCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const iconRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const card = cardRef.current;
        const icon = iconRef.current;
        const content = contentRef.current;

        if (!card || !icon || !content) return;

        // Initial state
        gsap.set(card, {
            y: 30,
            opacity: 0,
        });

        gsap.set(icon, {
            scale: 0.8,
            opacity: 0,
        });

        gsap.set(content, {
            y: 20,
            opacity: 0,
        });

        // Animate in when scrolled into view
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: card,
                start: "top bottom-=100",
                toggleActions: "play none none reverse"
            }
        });

        tl.to(card, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
            delay: index * 0.2,
        })
            .to(icon, {
                scale: 1,
                opacity: 1,
                duration: 0.4,
                ease: "back.out(1.7)",
            }, "-=0.3")
            .to(content, {
                y: 0,
                opacity: 1,
                duration: 0.4,
                ease: "power2.out",
            }, "-=0.2");

        // Hover animation
        const hoverTl = gsap.timeline({ paused: true });

        hoverTl
            .to(card, {
                y: -5,
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                duration: 0.3,
                ease: "power2.out",
            })
            .to(icon, {
                y: -3,
                scale: 1.05,
                duration: 0.3,
                ease: "power2.out",
            }, 0);

        // Add hover event listeners
        card.addEventListener("mouseenter", () => hoverTl.play());
        card.addEventListener("mouseleave", () => hoverTl.reverse());

        // Cleanup
        return () => {
            card.removeEventListener("mouseenter", () => hoverTl.play());
            card.removeEventListener("mouseleave", () => hoverTl.reverse());
        };
    }, [index]);

    return (
        <div
            ref={cardRef}
            className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:bg-slate-50/50"
        >
            <div ref={iconRef} className="mb-6">
                <div className="bg-slate-50 w-16 h-16 rounded-xl flex items-center justify-center mx-auto">
                    <Icon className="text-slate-700" size={32} />
                </div>
            </div>

            <div ref={contentRef} className="text-center">
                <h3 className="text-xl font-bold mb-3 text-slate-800">
                    {title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default ValueCard;
