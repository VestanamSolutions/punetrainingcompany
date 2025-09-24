'use client';

import { useEffect } from 'react';

const ParallaxManager = () => {
    useEffect(() => {
        // Initialize static parallax values (no scroll-based updates)
        document.documentElement.style.setProperty('--scroll-y', '0px');
        document.documentElement.style.setProperty('--scroll-x', '0px');
        document.documentElement.style.setProperty('--scroll-y-alt', '0px');
        document.documentElement.style.setProperty('--scroll-y-reverse', '0px');
        document.documentElement.style.setProperty('--scroll-scale', '1');
        document.documentElement.style.setProperty('--scroll-rotate', '0deg');
        document.documentElement.style.setProperty('--text-parallax-y', '0px');
        document.documentElement.style.setProperty('--cards-parallax-y', '0px');
        document.documentElement.style.setProperty('--cards-scale', '1');
        document.documentElement.style.setProperty('--gradient-angle', '45deg');
        document.documentElement.style.setProperty('--gradient-opacity', '0.02');
        document.documentElement.style.setProperty('--gradient-start', '20%');
        document.documentElement.style.setProperty('--gradient-end', '80%');
    }, []);

    return null; // This component doesn't render anything
};

export default ParallaxManager;
