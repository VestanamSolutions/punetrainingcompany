'use client';

import { useRef, useEffect } from 'react';
import { Star, MapPin, Mail, Phone, Linkedin } from 'lucide-react';
import { gsap } from 'gsap';
import { TrainingPartner } from '@/data/trainingPartners';

interface TrainerCardProps {
    partner: TrainingPartner;
    index: number;
}

const TrainerCard = ({ partner, index }: TrainerCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const actionsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const card = cardRef.current;
        const image = imageRef.current;
        const content = contentRef.current;
        const actions = actionsRef.current;

        if (!card || !image || !content || !actions) return;

        // Initial state
        gsap.set(card, {
            y: 30,
            opacity: 0,
        });

        gsap.set(image, {
            scale: 0.9,
            opacity: 0,
        });

        gsap.set([content, actions], {
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
            delay: index * 0.1,
        })
            .to(image, {
                scale: 1,
                opacity: 1,
                duration: 0.4,
                ease: "back.out(1.7)",
            }, "-=0.3")
            .to([content, actions], {
                y: 0,
                opacity: 1,
                stagger: 0.1,
                duration: 0.4,
                ease: "power2.out",
            }, "-=0.2");

        // Hover animations
        const hoverTl = gsap.timeline({ paused: true });

        hoverTl
            .to(card, {
                y: -5,
                boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                duration: 0.3,
                ease: "power2.out",
            })
            .to(image, {
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

    const handleBookMeeting = () => {
        const subject = `Training Inquiry - ${partner.name}`;
        const body = `Hi ${partner.name.split(' ')[0]},\n\nI would like to schedule a meeting to discuss training requirements.\n\nBest regards`;
        window.location.href = `mailto:${partner.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <div
            ref={cardRef}
            className="bg-white rounded-2xl border border-slate-200 hover:border-slate-300 transition-all duration-300"
        >
            {/* Profile Section */}
            <div ref={imageRef} className="p-6 bg-gradient-to-br from-slate-50 to-white">
                <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center text-white font-bold text-xl border border-slate-600">
                        {partner.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-slate-800">{partner.name}</h3>
                        <div className="flex items-center space-x-3 text-sm">
                            <div className="flex items-center">
                                <Star className="text-yellow-400 fill-current" size={14} />
                                <span className="text-slate-600 ml-1">{partner.rating}</span>
                                <span className="text-slate-400 ml-1">({partner.reviews})</span>
                            </div>
                            <div className="flex items-center text-slate-500">
                                <MapPin size={14} className="mr-1" />
                                <span>{partner.location}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div ref={contentRef} className="px-6 py-4">
                {/* Expertise Tags */}
                <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                        {partner.expertise.slice(0, 2).map((skill, idx) => (
                            <span
                                key={idx}
                                className="bg-slate-50 text-slate-700 px-3 py-1 rounded-lg text-sm"
                            >
                                {skill}
                            </span>
                        ))}
                        {partner.expertise.length > 2 && (
                            <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-lg text-sm">
                                +{partner.expertise.length - 2}
                            </span>
                        )}
                    </div>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                    {partner.description}
                </p>

                {/* Experience & Availability */}
                <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500">{partner.experience}</span>
                    <span className={`px-3 py-1 rounded-lg text-sm font-medium ${partner.availability === 'Available'
                        ? 'bg-green-50 text-green-600'
                        : partner.availability === 'Busy'
                            ? 'bg-red-50 text-red-600'
                            : 'bg-yellow-50 text-yellow-600'
                        }`}>
                        {partner.availability}
                    </span>
                </div>
            </div>

            {/* Actions Section */}
            <div
                ref={actionsRef}
                className="px-6 py-4 border-t border-slate-100 flex justify-between items-center"
            >
                <div className="flex space-x-2">
                    <button
                        onClick={() => window.location.href = `mailto:${partner.contact.email}`}
                        className="p-2 rounded-lg hover:bg-slate-50 text-slate-600 transition-colors"
                        title="Email"
                    >
                        <Mail size={18} />
                    </button>
                    <button
                        onClick={() => window.location.href = `tel:${partner.contact.phone}`}
                        className="p-2 rounded-lg hover:bg-slate-50 text-slate-600 transition-colors"
                        title="Call"
                    >
                        <Phone size={18} />
                    </button>
                    {partner.contact.linkedin && (
                        <a
                            href={`https://${partner.contact.linkedin}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg hover:bg-slate-50 text-slate-600 transition-colors"
                            title="LinkedIn Profile"
                        >
                            <Linkedin size={18} />
                        </a>
                    )}
                </div>
                <button
                    onClick={handleBookMeeting}
                    className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                    Book Meeting
                </button>
            </div>
        </div>
    );
};

export default TrainerCard;
