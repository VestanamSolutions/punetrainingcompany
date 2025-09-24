'use client';

import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="bg-gradient-to-r from-slate-700 to-slate-800 text-white font-bold text-xl px-3 py-2 rounded-lg">
                                PTC
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">PUNE Training Company</h3>
                                <p className="text-gray-400 text-sm">Empowering Organizations Through Training</p>
                            </div>
                        </div>
                        <p className="text-gray-400 mb-4 max-w-md">
                            We partner with organizations to solve their training requirements and democratize
                            the corporate training ecosystem through technology and innovation.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/offerings" className="text-gray-400 hover:text-white transition-colors">
                                    Our Offerings
                                </Link>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Training Partners
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <Mail size={16} className="text-slate-400" />
                                <span className="text-gray-400">info@punetrainingcompany.com</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone size={16} className="text-slate-400" />
                                <span className="text-gray-400">+91-9876543210</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <MapPin size={16} className="text-slate-400" />
                                <span className="text-gray-400">Pune, Maharashtra, India</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">
                        © 2025 PUNE Training Company. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                            Terms of Service
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                            Cookie Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
