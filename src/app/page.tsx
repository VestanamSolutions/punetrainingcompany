'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Users, Target, Globe, Zap, CheckCircle, Star, Calendar } from 'lucide-react';
import TrainerProfileCard from '@/components/TrainerProfileCard';
import { trainingPartners } from '@/data/trainingPartners';
import FeatureCard from '@/components/FeatureCard';
import SectionReveal from '@/components/SectionReveal';
import HeroSection from '@/components/HeroSection';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const featuredPartners = trainingPartners.slice(0, 8);
    const statsRef = useRef<HTMLDivElement>(null);
    const featuresRef = useRef<HTMLDivElement>(null);
    const featuresHeaderRef = useRef<HTMLDivElement>(null);
    const partnersRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const autoScrollInterval = useRef<NodeJS.Timeout | null>(null);
    const [currentScrollIndex, setCurrentScrollIndex] = useState(0);

    useEffect(() => {
        // Make sure GSAP and ScrollTrigger are ready
        if (typeof window !== 'undefined') {
            // Clear any existing ScrollTriggers
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());

            const ctx = gsap.context(() => {
                const stats = statsRef.current;
                const features = featuresRef.current;
                const featuresHeader = featuresHeaderRef.current;
                const partners = partnersRef.current;
                const cta = ctaRef.current;

                if (stats) {
                    gsap.fromTo(stats.children,
                        { y: 30, opacity: 0 },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.6,
                            stagger: 0.1,
                            ease: "power2.out",
                            scrollTrigger: {
                                trigger: stats,
                                start: "top bottom-=100",
                                toggleActions: "play none none reverse"
                            }
                        }
                    );
                }

                // Features header animation
                if (featuresHeader) {
                    gsap.fromTo(featuresHeader.children,
                        { y: 40, opacity: 0 },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.8,
                            stagger: 0.2,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: featuresHeader,
                                start: "top bottom-=50",
                                toggleActions: "play none none reverse"
                            }
                        }
                    );
                }

                // Features cards animation
                if (features) {
                    gsap.fromTo(features.children,
                        { y: 60, opacity: 0, scale: 0.9 },
                        {
                            y: 0,
                            opacity: 1,
                            scale: 1,
                            duration: 0.8,
                            stagger: 0.15,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: features,
                                start: "top bottom-=100",
                                toggleActions: "play none none reverse"
                            }
                        }
                    );
                }

                if (partners) {
                    gsap.fromTo(partners.children,
                        { y: 30, opacity: 0 },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.6,
                            stagger: 0.1,
                            ease: "power2.out",
                            scrollTrigger: {
                                trigger: partners,
                                start: "top bottom-=100",
                                toggleActions: "play none none reverse"
                            }
                        }
                    );
                }

                if (cta) {
                    gsap.fromTo(cta,
                        { y: 30, opacity: 0 },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.8,
                            ease: "power2.out",
                            scrollTrigger: {
                                trigger: cta,
                                start: "top bottom-=100",
                                toggleActions: "play none none reverse"
                            }
                        }
                    );
                }
            });

            // Cleanup function
            return () => {
                ctx.revert(); // This will clean up all GSAP animations created in this context
                ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            };
        }
    }, []);

    // Auto-scroll functionality for partners
    useEffect(() => {
        const container = partnersRef.current;
        if (!container) return;

        let currentIndex = 0;
        let isScrolling = false;

        const startAutoScroll = () => {
            if (autoScrollInterval.current) return; // Prevent multiple intervals

            autoScrollInterval.current = setInterval(() => {
                if (isScrolling) return; // Skip if already scrolling

                isScrolling = true;
                const cardWidth = 320 + 24; // card width + gap
                const maxScrollLeft = container.scrollWidth - container.clientWidth;

                // Calculate next scroll position
                const nextScrollLeft = Math.min((currentIndex + 1) * cardWidth, maxScrollLeft);

                container.scrollTo({
                    left: nextScrollLeft,
                    behavior: 'smooth'
                });

                // Update current index
                currentIndex = (currentIndex + 1) % Math.ceil(featuredPartners.length / 2);
                setCurrentScrollIndex(currentIndex);

                // Reset to beginning when reached end
                if (nextScrollLeft >= maxScrollLeft) {
                    setTimeout(() => {
                        currentIndex = 0;
                        setCurrentScrollIndex(0);
                        container.scrollTo({
                            left: 0,
                            behavior: 'smooth'
                        });
                        setTimeout(() => {
                            isScrolling = false;
                        }, 500);
                    }, 2000);
                } else {
                    setTimeout(() => {
                        isScrolling = false;
                    }, 500);
                }
            }, 3000);
        };

        const stopAutoScroll = () => {
            if (autoScrollInterval.current) {
                clearInterval(autoScrollInterval.current);
                autoScrollInterval.current = null;
            }
        };

        // Start auto-scroll after initial animations complete
        const timer = setTimeout(startAutoScroll, 2000);

        // Pause on hover and touch
        container.addEventListener('mouseenter', stopAutoScroll);
        container.addEventListener('mouseleave', startAutoScroll);
        container.addEventListener('touchstart', stopAutoScroll);
        container.addEventListener('touchend', () => setTimeout(startAutoScroll, 5000));

        return () => {
            clearTimeout(timer);
            stopAutoScroll();
            container.removeEventListener('mouseenter', stopAutoScroll);
            container.removeEventListener('mouseleave', startAutoScroll);
            container.removeEventListener('touchstart', stopAutoScroll);
            container.removeEventListener('touchend', () => setTimeout(startAutoScroll, 5000));
        };
    }, [featuredPartners.length]);

    return (
        <div className="min-h-screen">
            <HeroSection />

            {/* Stats Section */}
            <section className="py-8 bg-slate-50 full-width parallax-section">
                <div className="parallax-bg-shapes">
                    <div className="parallax-shape parallax-shape-1"></div>
                    <div className="parallax-shape parallax-shape-2"></div>
                    <div className="parallax-shape-scroll-1"></div>
                    <div className="parallax-waves"></div>
                    <div className="scroll-gradient-overlay"></div>
                </div>
                <div className="responsive-container relative z-10">
                    <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 text-center">
                        {[
                            { number: "50+", label: "Training Partners", color: "text-slate-700" },
                            { number: "200+", label: "Organizations Served", color: "text-slate-600" },
                            { number: "5000+", label: "Professionals Trained", color: "text-slate-700" },
                            { number: "98%", label: "Satisfaction Rate", color: "text-slate-600" }
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className="bg-white p-4 lg:p-6 rounded-lg border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:bg-slate-50/50"
                            >
                                <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                                <div className="text-slate-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="w-full py-12 bg-gradient-to-b from-white to-slate-50 full-width parallax-section">
                <div className="parallax-bg-shapes">
                    <div className="parallax-shape parallax-shape-3"></div>
                    <div className="parallax-shape parallax-shape-4"></div>
                    <div className="parallax-shape-scroll-2"></div>
                    <div className="parallax-waves parallax-waves-alt"></div>
                    <div className="scroll-gradient-overlay"></div>
                </div>
                <div className="responsive-container relative z-10">
                    <div ref={featuresHeaderRef} className="text-center mb-8">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 bg-clip-text text-transparent">
                            Why Choose PUNE Training Company?
                        </h2>
                        <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
                            We leverage technology to streamline the entire training lifecycle - from generating
                            leads to nurturing trainer-led communities through a unified ecosystem.
                        </p>
                    </div>

                    <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 xl:gap-8 max-w-7xl mx-auto parallax-cards">
                        <FeatureCard
                            icon={Users}
                            title="Expert Network"
                            description="Access to a curated network of experienced training professionals across various domains and industries."
                            index={0}
                        />
                        <FeatureCard
                            icon={Target}
                            title="Customized Solutions"
                            description="Tailored training programs designed to meet your organization's specific needs and objectives."
                            index={1}
                        />
                        <FeatureCard
                            icon={Globe}
                            title="Global Reach"
                            description="Taking the PUNE spirit to the world - building a global brand rooted in Indian values and innovation."
                            index={2}
                        />
                        <FeatureCard
                            icon={Zap}
                            title="Technology Driven"
                            description="Leveraging cutting-edge technology to streamline training processes and enhance learning experiences."
                            index={3}
                        />
                        <FeatureCard
                            icon={CheckCircle}
                            title="Quality Assured"
                            description="Rigorous vetting process ensures only the highest quality training partners join our platform."
                            index={4}
                        />
                        <FeatureCard
                            icon={Calendar}
                            title="Flexible Scheduling"
                            description="Easy booking and scheduling system that adapts to your organization's timeline and requirements."
                            index={5}
                        />
                    </div>
                </div>
            </section>

            {/* Featured Partners Section */}
            <section className="py-12 bg-slate-50 full-width parallax-section">
                <div className="parallax-bg-shapes">
                    <div className="parallax-shape parallax-shape-1"></div>
                    <div className="parallax-shape parallax-shape-2"></div>
                    <div className="parallax-shape-scroll-3"></div>
                    <div className="parallax-waves"></div>
                    <div className="scroll-gradient-overlay"></div>
                </div>
                <div className="responsive-container relative z-10">
                    <div className="text-center mb-8">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-800 via-blue-800 to-slate-800 bg-clip-text text-transparent">
                            Featured Partners
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Meet some of our top-rated training professionals who are ready to help your organization grow.
                        </p>
                    </div>

                    <div className="relative">
                        <div ref={partnersRef} className="partners-scroll flex gap-6 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory opacity-100 parallax-cards">
                            {featuredPartners.map((partner, index) => (
                                <div key={partner.id} className="flex-none w-80 opacity-100 transform translate-y-0 snap-start">
                                    <TrainerProfileCard
                                        initials={partner.name.split(' ').map(n => n[0]).join('')}
                                        name={partner.name}
                                        rating={partner.rating}
                                        reviews={partner.reviews}
                                        skills={partner.expertise}
                                        description={partner.description}
                                        experience={partner.experience}
                                        availability={partner.availability}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Scroll indicators */}
                        <div className="flex justify-center mt-4 space-x-2">
                            {Array.from({ length: Math.ceil(featuredPartners.length / 2) }).map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${currentScrollIndex === index
                                        ? 'bg-slate-700 w-6'
                                        : 'bg-slate-300 hover:bg-slate-500'
                                        }`}
                                    onClick={() => {
                                        const container = partnersRef.current;
                                        if (container) {
                                            const cardWidth = 320 + 24; // card width + gap
                                            const scrollAmount = index * cardWidth * 2; // Show 2 cards per indicator
                                            container.scrollTo({ left: scrollAmount, behavior: 'smooth' });
                                            setCurrentScrollIndex(index);

                                            // Stop auto-scroll when user manually navigates
                                            if (autoScrollInterval.current) {
                                                clearInterval(autoScrollInterval.current);
                                                autoScrollInterval.current = null;
                                            }
                                        }
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="text-center mt-8">
                        <Link
                            href="/offerings"
                            className="inline-flex items-center justify-center bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 gap-2"
                        >
                            <span>View All Partners</span>
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 bg-[#1e293b] text-white relative overflow-hidden full-width parallax-section">
                {/* Background gradient effects */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-blue-500/10 rounded-full filter blur-3xl"></div>
                    <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-slate-400/10 rounded-full filter blur-3xl"></div>
                </div>

                <div className="responsive-container text-center relative z-20">
                    <div ref={ctaRef} className="max-w-4xl mx-auto opacity-100 transform translate-y-0">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                            Ready to Transform Your Training?
                        </h2>
                        <p className="text-xl mb-8 text-slate-300">
                            Join hundreds of organizations that have already revolutionized their training programs with PUNE Training Company.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                href="/offerings"
                                className="bg-white text-slate-800 hover:bg-slate-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 border border-slate-200 hover:border-slate-300"
                            >
                                View Our Partners
                            </Link>
                            <Link
                                href="/about"
                                className="border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
                            >
                                Learn Our Story
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}