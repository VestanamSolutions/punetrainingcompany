'use client';

import { useRef, useEffect } from 'react';
import { Heart, Target, Users, Globe2, Award, BookOpen } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionReveal from '@/components/SectionReveal';
import ScrollParallax from '@/components/ScrollParallax';
import ValueCard from '@/components/ValueCard';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const heroRef = useRef<HTMLDivElement>(null);
    const founderImageRef = useRef<HTMLDivElement>(null);
    const valuesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const hero = heroRef.current;
        const founderImage = founderImageRef.current;
        const values = valuesRef.current;

        if (!hero || !founderImage || !values) return;

        // Hero animation
        gsap.from(hero.children, {
            y: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
        });

        // Founder image animation
        gsap.from(founderImage, {
            scale: 0.8,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: founderImage,
                start: "top bottom-=100",
                toggleActions: "play none none reverse"
            }
        });

        // Values cards animation
        gsap.from(values.children, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: values,
                start: "top bottom-=100",
                toggleActions: "play none none reverse"
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 overflow-hidden parallax-section">
                <div className="absolute inset-0 bg-slate-900 opacity-40"></div>
                {/* Parallax background */}
                <div className="parallax-bg-shapes">
                    <div className="parallax-shape parallax-shape-3"></div>
                    <div className="parallax-shape parallax-shape-4"></div>
                    <div className="parallax-waves parallax-waves-alt"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div ref={heroRef} className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
                            About <span className="bg-gradient-to-r from-blue-200 via-slate-200 to-purple-200 bg-clip-text text-transparent">PUNE Training Company</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 leading-relaxed font-light">
                            Building a global brand rooted in the values and vibrancy of Pune city
                        </p>
                    </div>
                </div>
            </section>

            {/* Who We Are Section */}
            <SectionReveal>
                <section className="py-16 parallax-section relative overflow-hidden">
                    <div className="parallax-bg-shapes">
                        <div className="parallax-shape parallax-shape-1"></div>
                        <div className="parallax-shape parallax-shape-2"></div>
                        <div className="parallax-waves"></div>
                    </div>
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
                                <span className="bg-gradient-to-r from-slate-800 via-blue-800 to-slate-800 bg-clip-text text-transparent">Who</span>
                                <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent"> We Are?</span>
                            </h2>

                            <div className="space-y-8 text-lg leading-relaxed">
                                <p className="text-center text-xl">
                                    At <span className="text-blue-600 font-semibold">PUNE Training Company</span>, we partner with organizations to help them solve their Training requirements.
                                </p>

                                <p className="text-center text-xl">
                                    We <strong className="text-blue-600 font-bold tracking-wide">ENABLE</strong> a platform for knowledge sharing and networking among the Training Community.
                                </p>

                                <p className="text-center text-xl">
                                    We <strong className="text-blue-600 font-bold tracking-wide">DEMOCRATIZE</strong> training requirements to benefit Training partners and Organizations.
                                </p>

                                <div className="text-center bg-gradient-to-br from-slate-50 via-white to-blue-50 p-8 rounded-xl border-l-4 border-blue-600 border border-slate-200">
                                    <p className="text-xl text-slate-700">
                                        By leveraging technology, <span className="text-blue-600 font-semibold">PUNE TRAINING Company</span> aims to streamline the entire training lifecycle - from generating leads to nurturing trainer-led communities <strong className="text-blue-700 font-bold">THROUGH</strong> a unified ecosystem.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </SectionReveal>

            {/* Our Values Section */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-4">
                    <SectionReveal>
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                <span className="bg-gradient-to-r from-slate-800 via-blue-800 to-slate-800 bg-clip-text text-transparent">Our</span>
                                <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent"> Core Values</span>
                            </h2>
                            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
                                The principles that guide everything we do
                            </p>
                        </div>
                    </SectionReveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <ValueCard
                            icon={Users}
                            title="Enable"
                            description="We create platforms for knowledge sharing and networking among the training community, fostering collaboration and growth."
                            index={0}
                        />
                        <ValueCard
                            icon={Target}
                            title="Democratize"
                            description="We make training accessible and beneficial for both training partners and organizations, breaking down barriers."
                            index={1}
                        />
                        <ValueCard
                            icon={Globe2}
                            title="Global Vision"
                            description="Taking the PUNE spirit to the world while building a global brand rooted in Indian values and culture."
                            index={2}
                        />
                    </div>
                </div>
            </section>

            {/* Founder Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <SectionReveal>
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                                <span className="bg-gradient-to-r from-slate-800 via-blue-800 to-slate-800 bg-clip-text text-transparent">Meet Our</span>
                                <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent"> Founder</span>
                            </h2>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                                {/* Founder Image */}
                                <div ref={founderImageRef} className="text-center">
                                    <div className="relative inline-block">
                                        <div className="relative w-80 h-80 rounded-2xl overflow-hidden border-2 border-slate-300">
                                            <img
                                                src="/images/nidhi.jpeg"
                                                alt="Nidhi Dhanju - Founder of PUNE Training Company"
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                                        </div>
                                        <div className="absolute -bottom-4 -right-4 bg-slate-600 text-white p-3 rounded-full border-2 border-white">
                                            <Award size={24} />
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-slate-800 via-blue-800 to-slate-800 bg-clip-text text-transparent">Nidhi Dhanju</h3>
                                        <p className="text-xl text-blue-600 font-semibold mb-2">Founder</p>
                                        <p className="text-lg text-slate-600">PUNE Training Company</p>
                                    </div>
                                </div>

                                {/* Founder Bio */}
                                <div className="space-y-6">
                                    <div className="modern-card elegant-border p-8 rounded-xl">
                                        <h4 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
                                            <BookOpen className="text-slate-700 mr-3" size={28} />
                                            Professional Journey
                                        </h4>
                                        <p className="text-slate-600 leading-relaxed mb-4">
                                            Founding Team Member Nidhi began her professional journey in Human Resources two decades ago. An avid traveler with a passion for people and cultures, she has held HR leadership roles in organizations such as <strong>Michelin, Infosys, Praj and Thermax</strong> shaping and driving impactful people strategies.
                                        </p>
                                        <p className="text-slate-600 leading-relaxed">
                                            Over the years, her experience in HR sparked a realization: the corporate <strong className="text-slate-800">TRAINING ecosystem needed a fresh approach</strong>. This inspired her to embark on a mission to <strong className="text-slate-800">DEMOCRATIZE the corporate training ecosystem</strong> and make it accessible and engaging for organizations, Trainers and Training Partners.
                                        </p>
                                    </div>

                                    <div className="modern-card elegant-border p-8 rounded-xl">
                                        <h4 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
                                            <Heart className="text-slate-700 mr-3" size={28} />
                                            Vision & Mission
                                        </h4>
                                        <p className="text-slate-600 leading-relaxed mb-4">
                                            In <strong className="text-slate-800">2025</strong>, driven by this vision, Nidhi founded <strong className="text-slate-800">PUNE TRAINING Company</strong>.
                                        </p>
                                        <p className="text-slate-600 leading-relaxed">
                                            Nidhi holds a <strong>Bachelor's degree from Lady Shri Ram College, Delhi</strong> and a <strong>PhD in Human Resource Development from the University of Minnesota, USA</strong>.
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="modern-card elegant-border p-6 rounded-xl text-center">
                                            <div className="text-3xl font-bold text-slate-700 mb-2">20+</div>
                                            <div className="text-slate-600">Years Experience</div>
                                        </div>
                                        <div className="modern-card elegant-border p-6 rounded-xl text-center">
                                            <div className="text-3xl font-bold text-slate-700 mb-2">4</div>
                                            <div className="text-slate-600">Major Organizations</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SectionReveal>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
                <div className="container mx-auto px-4 text-center">
                    <SectionReveal>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Join Our Mission
                        </h2>
                        <p className="text-xl mb-8 max-w-3xl mx-auto text-slate-200">
                            Be part of the revolution that's democratizing corporate training and building stronger organizations through knowledge sharing.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a
                                href="/offerings"
                                className="bg-white text-slate-800 hover:bg-slate-100 px-8 py-4 rounded-full font-semibold text-lg transform hover:scale-105 transition-all duration-300 border border-slate-200 hover:border-slate-300"
                            >
                                Explore Our Offerings
                            </a>
                            <a
                                href="mailto:info@punetrainingcompany.com"
                                className="border-2 border-slate-300 text-slate-100 hover:bg-slate-100 hover:text-slate-800 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
                            >
                                Get in Touch
                            </a>
                        </div>
                    </SectionReveal>
                </div>
            </section>
        </div>
    );
}