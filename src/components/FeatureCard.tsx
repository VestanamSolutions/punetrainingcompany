'use client';

import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-white rounded-xl p-4 lg:p-6 xl:p-8 border border-slate-200 hover:border-slate-300 transition-all duration-300 transform hover:-translate-y-2 h-full hover:bg-slate-50/50">
      <div className="w-12 h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center mb-4 lg:mb-6 transform transition-transform duration-300 hover:scale-110 border border-slate-600">
        <Icon className="text-white" size={24} />
      </div>
      <h3 className="text-lg lg:text-xl font-bold mb-2 lg:mb-3 text-slate-800">{title}</h3>
      <p className="text-slate-600 leading-relaxed text-sm lg:text-base">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;