'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const navItems = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About Us' },
        { href: '/offerings', label: 'Partners' },
    ];

    return (
        <header className="bg-white border-b border-slate-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
            {/* Top bar */}
            <div className="bg-slate-900 text-white py-2">
                <div className="container mx-auto px-4 flex justify-between items-center text-sm">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                            <Phone size={14} />
                            <span>+91-9876543210</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Mail size={14} />
                            <span>info@punetrainingcompany.com</span>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <span>Democratizing Corporate Training</span>
                    </div>
                </div>
            </div>

            {/* Main navigation */}
            <nav className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="bg-gradient-to-r from-slate-700 to-slate-800 text-white font-bold text-2xl px-4 py-2 rounded-lg">
                            PTC
                        </div>
                        <div className="hidden md:block">
                            <h1 className="text-xl font-bold text-gray-800">PUNE Training Company</h1>
                            <p className="text-sm text-gray-600">Empowering Organizations Through Training</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href));
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    aria-current={isActive ? 'page' : undefined}
                                    className={`font-medium transition-colors duration-300 relative group ${isActive ? 'text-slate-900' : 'text-slate-700 hover:text-slate-900'
                                        }`}
                                >
                                    {item.label}
                                    <span className={`absolute bottom-0 left-0 h-0.5 bg-slate-800 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                                        }`}></span>
                                </Link>
                            );
                        })}
                        <button className="bg-gradient-to-r from-slate-700 to-slate-800 text-white px-6 py-2 rounded-full border border-slate-600 hover:border-slate-500 transition-all duration-300 transform hover:scale-105">
                            Get Started
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden mt-4 border-t pt-4"
                        >
                            <div className="flex flex-col space-y-4">
                                {navItems.map((item) => {
                                    const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href));
                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            aria-current={isActive ? 'page' : undefined}
                                            className={`font-medium py-2 ${isActive ? 'text-slate-900' : 'text-slate-700 hover:text-slate-900'
                                                }`}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {item.label}
                                        </Link>
                                    );
                                })}
                                <button className="bg-gradient-to-r from-slate-700 to-slate-800 text-white px-6 py-2 rounded-full border border-slate-600 hover:border-slate-500 transition-all duration-300 w-full">
                                    Get Started
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
};

export default Header;
