'use client';

import { useState, useMemo, useRef, useEffect } from 'react';
import { Users } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SearchAndFilter from '@/components/SearchAndFilter';
import TrainerCard from '@/components/TrainerCard';
// import SectionReveal from '@/components/SectionReveal';
import { trainingPartners } from '@/data/trainingPartners';

gsap.registerPlugin(ScrollTrigger);

export default function Offerings() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
    const heroRef = useRef<HTMLDivElement>(null);
    const statsRef = useRef<HTMLDivElement>(null);
    const noResultsRef = useRef<HTMLDivElement>(null);

    const filteredPartners = useMemo(() => {
        return trainingPartners.filter(partner => {
            const matchesSearch = searchQuery === '' ||
                partner.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                partner.expertise.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase())) ||
                partner.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                partner.specializations.some(spec => spec.toLowerCase().includes(searchQuery.toLowerCase()));

            const matchesFilters = selectedFilters.length === 0 ||
                selectedFilters.some(filter =>
                    partner.expertise.includes(filter) ||
                    partner.specializations.includes(filter)
                );

            return matchesSearch && matchesFilters;
        });
    }, [searchQuery, selectedFilters]);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const hero = heroRef.current;
        const stats = statsRef.current;

        // Set initial visibility
        if (hero) {
            gsap.set(hero.children, { opacity: 1, y: 0 });
        }
        if (stats) {
            gsap.set(stats.children, { opacity: 1, y: 0 });
        }

        const ctx = gsap.context(() => {
            // Hero animations
            if (hero) {
                gsap.fromTo(hero.children,
                    { y: 30, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        stagger: 0.2,
                        ease: "power3.out"
                    }
                );
            }

            // Stats animations
            if (stats) {
                gsap.fromTo(stats.children,
                    { y: 20, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                        stagger: 0.1,
                        ease: "power2.out"
                    }
                );
            }
        });

        return () => ctx.revert();
    }, []);

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900 opacity-40"></div>
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-96 h-96 bg-slate-700 rounded-full filter blur-3xl opacity-10"></div>
                    <div className="absolute top-40 right-10 w-80 h-80 bg-slate-600 rounded-full filter blur-2xl opacity-15"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div ref={heroRef} className="max-w-4xl mx-auto text-center opacity-100">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ opacity: 1 }}>
                            Our <span className="text-slate-200">Training Partners</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-200 mb-8" style={{ opacity: 1 }}>
                            Connect with expert trainers who can transform your organization&#39;s capabilities
                        </p>

                        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto opacity-100">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-slate-200 mb-1">{trainingPartners.length}+</div>
                                <div className="text-slate-300 text-sm">Expert Trainers</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-slate-200 mb-1">18</div>
                                <div className="text-slate-300 text-sm">Specializations</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-slate-200 mb-1">100%</div>
                                <div className="text-slate-300 text-sm">Verified</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-slate-200 mb-1">24/7</div>
                                <div className="text-slate-300 text-sm">Support</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Search Section */}
            <section className="py-8 bg-gradient-to-b from-slate-50 to-white sticky top-16 z-40">
                <div className="container mx-auto px-4">
                    <SearchAndFilter
                        onSearch={setSearchQuery}
                        onFilterChange={setSelectedFilters}
                        searchQuery={searchQuery}
                        selectedFilters={selectedFilters}
                    />
                </div>
            </section>

            {/* Trainers Grid */}
            <section className="py-8">
                <div className="container mx-auto px-4">
                    {filteredPartners.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredPartners.map((partner, index) => (
                                <TrainerCard
                                    key={partner.id}
                                    partner={partner}
                                    index={index}
                                />
                            ))}
                        </div>
                    ) : (
                        <div ref={noResultsRef} className="text-center py-16">
                            <div className="bg-slate-100 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <Users className="text-slate-500" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-800 mb-4">No trainers found</h3>
                            <p className="text-slate-600 mb-6 max-w-md mx-auto">
                                We couldn&#39;t find any training partners matching your search criteria. Try adjusting your filters or search terms.
                            </p>
                            <button
                                onClick={() => {
                                    setSearchQuery('');
                                    setSelectedFilters([]);
                                }}
                                className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                            >
                                Clear All Filters
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}