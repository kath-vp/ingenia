import React from 'react';
import { SectorItem } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface SectorCardProps {
  sector: SectorItem;
  onSelectSector: (sector: SectorItem) => void;
}

export const SectorCard: React.FC<SectorCardProps> = ({ sector, onSelectSector }) => {
  return (
    <div
      onClick={() => onSelectSector(sector)}
      className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-[#17251D] border border-[#E1E2DD] shadow-[0_8px_25px_rgba(30,45,36,0.06)] hover:shadow-[0_16px_40px_rgba(30,45,36,0.15)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
    >
      {/* Background Photography */}
      <img
        src={sector.image}
        alt={sector.name}
        className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
        loading="lazy"
        referrerPolicy="no-referrer"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#17251D]/90 via-[#304338]/40 to-transparent group-hover:from-[#17251D]/95 transition-all duration-300" />

      {/* Content */}
      <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-between z-10">
        <div className="flex justify-end">
          <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#E99A35] group-hover:text-white transition-all duration-300">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>

        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#E99A35] mb-1 block">
            Sector Estratégico
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
            {sector.name}
          </h3>
          <p className="text-xs text-[#ECEBE7]/80 line-clamp-2 leading-relaxed font-normal">
            {sector.description}
          </p>
        </div>
      </div>
    </div>
  );
};
