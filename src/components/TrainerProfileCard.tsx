'use client';

import { Star } from 'lucide-react';

interface TrainerProfileCardProps {
    initials: string;
    name: string;
    rating: number;
    reviews: number;
    skills: string[];
    description: string;
    experience: string;
    availability: string;
}

const TrainerProfileCard = ({
    initials,
    name,
    rating,
    reviews,
    skills,
    description,
    experience,
    availability
}: TrainerProfileCardProps) => {
    return (
        <div className="bg-white rounded-xl p-4 lg:p-6 border border-slate-200 hover:border-slate-300 transition-all duration-300 h-full hover:bg-slate-50/50 transform hover:-translate-y-1">
            <div className="flex items-start gap-3 lg:gap-4">
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-slate-800 rounded-full flex items-center justify-center text-white font-bold text-lg lg:text-xl shrink-0">
                    {initials}
                </div>
                <div className="flex-grow min-w-0">
                    <h3 className="text-lg lg:text-xl font-bold text-slate-800 mb-1 truncate">{name}</h3>
                    <div className="flex items-center gap-1 mb-2 lg:mb-3">
                        <Star className="w-4 h-4 text-yellow-400 fill-current shrink-0" />
                        <span className="text-xs lg:text-sm text-slate-600 truncate">{rating} ({reviews} reviews)</span>
                    </div>
                    <div className="flex flex-wrap gap-1 lg:gap-2 mb-2 lg:mb-3">
                        {skills.slice(0, 2).map((skill, idx) => (
                            <span
                                key={idx}
                                className="px-2 py-1 bg-slate-100 text-slate-700 text-xs lg:text-sm rounded-full"
                            >
                                {skill}
                            </span>
                        ))}
                        {skills.length > 2 && (
                            <span className="px-2 py-1 bg-slate-200 text-slate-600 text-xs lg:text-sm rounded-full">
                                +{skills.length - 2}
                            </span>
                        )}
                    </div>
                    <p className="text-slate-600 text-xs lg:text-sm mb-3 lg:mb-4 line-clamp-2">
                        {description}
                    </p>
                    <div className="flex items-center justify-between text-xs lg:text-sm">
                        <span className="text-slate-500 truncate">{experience}</span>
                        <span className="text-green-600 font-medium truncate ml-2">{availability}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrainerProfileCard;
