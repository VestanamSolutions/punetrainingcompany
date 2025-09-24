'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star, MapPin, Clock, Calendar, Mail, Phone, Linkedin } from 'lucide-react';
import { TrainingPartner } from '@/data/trainingPartners';

interface TrainingPartnerCardProps {
    partner: TrainingPartner;
    index: number;
}

const TrainingPartnerCard = ({ partner, index }: TrainingPartnerCardProps) => {
    const availabilityColor = {
        'Available': 'text-green-600 bg-green-50/80',
        'Busy': 'text-red-600 bg-red-50/80',
        'Limited': 'text-yellow-600 bg-yellow-50/80'
    };

    const handleBookMeeting = () => {
        const subject = `Training Inquiry - ${partner.name}`;
        const body = `Hi ${partner.name.split(' ')[0]},\n\nI would like to schedule a meeting to discuss training requirements.\n\nBest regards`;
        window.location.href = `mailto:${partner.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: index * 0.1
            }}
            className="modern-card elegant-border rounded-2xl overflow-hidden group"
        >
            <div className="flex flex-col h-full">
                {/* Header with Photo */}
                <div className="relative h-48 overflow-hidden">
                    <Image
                        src={partner.image}
                        alt={partner.name}
                        fill
                        className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Trainer Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
                    >
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-slate-50">{partner.name}</h3>
                        <div className="flex items-center text-sm space-x-3 text-slate-200">
                            <div className="flex items-center">
                                <Star className="text-yellow-400 fill-current" size={14} />
                                <span className="ml-1">{partner.rating}</span>
                                <span className="text-slate-300/80 ml-1">({partner.reviews})</span>
                            </div>
                            <div className="flex items-center">
                                <MapPin size={14} className="mr-1" />
                                <span>{partner.location}</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Content */}
                <div className="p-4 flex-grow bg-white/80 backdrop-blur-sm">
                    {/* Expertise Tags */}
                    <div className="mb-3">
                        <div className="flex flex-wrap gap-1.5">
                            {partner.expertise.slice(0, 2).map((skill, idx) => (
                                <span
                                    key={idx}
                                    className="bg-slate-100/80 backdrop-blur-sm text-slate-700 px-2.5 py-1 rounded-full text-xs font-medium transform hover:scale-105 transition-transform duration-200"
                                >
                                    {skill}
                                </span>
                            ))}
                            {partner.expertise.length > 2 && (
                                <span className="bg-slate-200/80 text-slate-600 px-2.5 py-1 rounded-full text-xs">
                                    +{partner.expertise.length - 2}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Experience and Availability */}
                    <div className="flex items-center justify-between text-sm mb-3">
                        <div className="flex items-center text-slate-600">
                            <Clock size={14} className="mr-1" />
                            <span>{partner.experience}</span>
                        </div>
                        <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${availabilityColor[partner.availability]}`}>
                            {partner.availability}
                        </span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-600 line-clamp-2 mb-4 group-hover:line-clamp-none transition-all duration-300">
                        {partner.description}
                    </p>

                    {/* Certifications */}
                    <div className="mb-4">
                        <div className="flex flex-wrap gap-1.5">
                            {partner.certifications.slice(0, 2).map((cert, idx) => (
                                <span
                                    key={idx}
                                    className="bg-slate-50/80 text-slate-600 px-2.5 py-1 rounded-full text-xs transform hover:scale-105 transition-transform duration-200"
                                >
                                    {cert}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Actions */}
                <div className="p-4 border-t border-slate-100/50 backdrop-blur-sm bg-white/50">
                    <div className="flex items-center justify-between">
                        <div className="flex space-x-1">
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                href={`mailto:${partner.contact.email}`}
                                className="p-2 rounded-lg hover:bg-slate-100/80 text-slate-600 hover:text-slate-800 transition-colors"
                                title="Email"
                            >
                                <Mail size={18} />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                href={`tel:${partner.contact.phone}`}
                                className="p-2 rounded-lg hover:bg-slate-100/80 text-slate-600 hover:text-slate-800 transition-colors"
                                title="Call"
                            >
                                <Phone size={18} />
                            </motion.a>
                            {partner.contact.linkedin && (
                                <motion.a
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    href={`https://${partner.contact.linkedin}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-lg hover:bg-slate-100/80 text-slate-600 hover:text-slate-800 transition-colors"
                                    title="LinkedIn Profile"
                                >
                                    <Linkedin size={18} />
                                </motion.a>
                            )}
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={handleBookMeeting}
                            className="flex items-center space-x-1 bg-slate-800/90 hover:bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors border border-slate-700 hover:border-slate-600"
                        >
                            <Calendar size={16} />
                            <span>Book Meeting</span>
                        </motion.button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default TrainingPartnerCard;