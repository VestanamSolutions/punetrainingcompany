'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const bg1Ref = useRef<HTMLDivElement>(null);
  const bg2Ref = useRef<HTMLDivElement>(null);
  const bg3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const description = descriptionRef.current;
    const cta = ctaRef.current;
    const bg1 = bg1Ref.current;
    const bg2 = bg2Ref.current;
    const bg3 = bg3Ref.current;

    if (!section || !title || !description || !cta || !bg1 || !bg2 || !bg3) return;

    // Initial state
    gsap.set([title, description, cta], {
      y: 50,
      opacity: 0,
    });

    gsap.set([bg1, bg2, bg3], {
      scale: 0.8,
      opacity: 0,
    });

    // Create timeline
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Background animations
    tl.to([bg1, bg2, bg3], {
      scale: 1,
      opacity: 0.2,
      duration: 1.5,
      stagger: 0.2,
    });

    // Content animations
    tl.to(title, {
      y: 0,
      opacity: 1,
      duration: 1,
    }, "-=1")
      .to(description, {
        y: 0,
        opacity: 1,
        duration: 1,
      }, "-=0.8")
      .to(cta, {
        y: 0,
        opacity: 1,
        duration: 1,
      }, "-=0.8");

    // Background floating animations
    gsap.to(bg1, {
      y: -30,
      x: 20,
      scale: 1.1,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: "none",
    });

    gsap.to(bg2, {
      y: 40,
      x: -30,
      scale: 0.9,
      duration: 10,
      delay: 2,
      repeat: -1,
      yoyo: true,
      ease: "none",
    });

    gsap.to(bg3, {
      y: -20,
      scale: 1.2,
      duration: 6,
      delay: 4,
      repeat: -1,
      yoyo: true,
      ease: "none",
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-12 lg:py-16 overflow-hidden full-width parallax-section">
      <div className="absolute inset-0 bg-slate-900 opacity-40"></div>

      {/* Parallax Background Elements */}
      <div className="parallax-bg-shapes">
        <div className="parallax-shape parallax-shape-3"></div>
        <div className="parallax-shape parallax-shape-4"></div>
        <div className="parallax-waves parallax-waves-alt"></div>
      </div>

      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          ref={bg1Ref}
          className="absolute top-20 left-10 w-96 h-96 bg-slate-700 rounded-full filter blur-3xl opacity-10"
        />
        <div
          ref={bg2Ref}
          className="absolute top-40 right-10 w-80 h-80 bg-slate-600 rounded-full filter blur-2xl opacity-15"
        />
        <div
          ref={bg3Ref}
          className="absolute -bottom-8 left-1/2 w-64 h-64 bg-slate-500 rounded-full filter blur-xl opacity-20"
        />
      </div>

      <div className="responsive-container relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            ref={titleRef}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 lg:mb-6 leading-tight"
          >
            Democratizing
            <span className="bg-gradient-to-r from-slate-300 to-white bg-clip-text text-transparent"> Corporate Training</span>
          </h1>

          <p
            ref={descriptionRef}
            className="text-lg md:text-xl lg:text-2xl mb-6 lg:mb-8 text-slate-200 leading-relaxed"
          >
            We partner with organizations to solve their training requirements and enable
            a platform for knowledge sharing among the training community.
          </p>

          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/offerings"
              className="bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-2 transform hover:scale-105 transition-all duration-300 border border-slate-600 hover:border-slate-500"
            >
              <span>Find Training Partners</span>
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/about"
              className="border-2 border-slate-300 text-slate-100 hover:bg-slate-100 hover:text-slate-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
