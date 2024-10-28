import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
}

export default function FeatureCard({ icon: Icon, title, description, image }: FeatureCardProps) {
  return (
    <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
      <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <Icon className="absolute bottom-4 left-4 w-12 h-12 text-blue-500" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
}