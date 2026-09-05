import React from 'react';
import { ProjectItem } from '../types';
import { MapPin, Calendar, CheckSquare, Layers } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectItem;
  onOpenQuote: (servicePreset?: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenQuote }) => {
  return (
    <div className="bg-[#FFFFFF] rounded-3xl overflow-hidden border border-[#E1E2DD] shadow-[0_8px_30px_rgba(30,45,36,0.06)] hover:shadow-[0_16px_40px_rgba(30,45,36,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col group h-full">
      {/* Image with subtle badge */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#ECEBE7]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#17251D]/70 via-transparent to-transparent opacity-60" />

        {/* Sector Tag */}
        <div className="absolute top-4 left-4">
          <span className="bg-[#304338]/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full border border-white/20">
            {project.sector}
          </span>
        </div>

        {/* Year and Location pill */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
          <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-full">
            <MapPin className="w-3 h-3 text-[#E99A35]" />
            <span>{project.location}</span>
          </div>
          <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-full">
            <Calendar className="w-3 h-3 text-[#E99A35]" />
            <span>{project.year}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-[#81958A] uppercase tracking-wider mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>{project.service}</span>
          </div>

          <h3 className="text-lg font-bold text-[#171D18] group-hover:text-[#304338] transition-colors mb-3 leading-snug">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#59635D] leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-2 py-3 border-y border-[#ECEBE7] mb-4 bg-[#F9F8F6] px-3 rounded-xl">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="text-center">
                <span className="block text-[10px] text-[#7A817C] uppercase tracking-wider">
                  {metric.label}
                </span>
                <span className="text-xs font-bold text-[#304338]">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 flex items-center justify-between">
          <span className="text-[10px] text-[#7A817C] bg-[#ECEBE7] px-2 py-0.5 rounded-md font-mono">
            Experiencia tipo
          </span>

          <button
            onClick={() => onOpenQuote(project.service)}
            className="text-xs font-semibold text-[#304338] hover:text-[#E99A35] transition-colors py-1 flex items-center gap-1 cursor-pointer"
          >
            <span>Consultar alcance similar</span>
            <CheckSquare className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
