import React from 'react';
import { ArrowRight, Activity, Trees, HardHat, FileCheck, CheckCircle2 } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceCardProps {
  service: ServiceItem;
  onSelectService: (service: ServiceItem) => void;
  onQuickQuote: (serviceTitle: string) => void;
}

const iconRenderer = (name: string) => {
  switch (name) {
    case 'Activity':
      return <Activity className="w-5 h-5 text-[#304338]" />;
    case 'Trees':
      return <Trees className="w-5 h-5 text-[#304338]" />;
    case 'HardHat':
      return <HardHat className="w-5 h-5 text-[#304338]" />;
    case 'FileCheck':
      return <FileCheck className="w-5 h-5 text-[#304338]" />;
    default:
      return <Activity className="w-5 h-5 text-[#304338]" />;
  }
};

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  onSelectService,
  onQuickQuote
}) => {
  return (
    <div className="rounded-[24px] overflow-hidden border shadow-card hover:shadow-hover transition-all duration-300 flex flex-col group h-full relative bg-[#FFFFFF] border-[#E1E2DD] text-[#171D18]">
      {/* Image Container with 16:10 ratio */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#ECEBE7]">
        {service.secondaryImage ? (
          <div className="grid grid-cols-2 h-full w-full">
            {/* Fauna: Gallito de las Rocas */}
            <div className="relative h-full overflow-hidden border-r border-white/30">
              <img
                src={service.image}
                alt={service.imageLabels?.primary || "Gallito de las Rocas"}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/estudios_ambientales_peru.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17251D]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-2.5 left-2.5 pointer-events-none z-10">
                <span className="bg-[#17251D]/85 backdrop-blur-xs text-[10px] font-semibold text-white px-2 py-0.5 rounded-full border border-white/20 flex items-center gap-1.5 shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E99A35] animate-pulse"></span>
                  {service.imageLabels?.primary || "Gallito de las Rocas"}
                </span>
              </div>
            </div>

            {/* Flora: Orquídea Peruana */}
            <div className="relative h-full overflow-hidden">
              <img
                src={service.secondaryImage}
                alt={service.imageLabels?.secondary || "Orquídea Peruana"}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/estudios_ambientales_peru.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17251D]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-2.5 right-2.5 pointer-events-none z-10">
                <span className="bg-[#17251D]/85 backdrop-blur-xs text-[10px] font-semibold text-white px-2 py-0.5 rounded-full border border-white/20 flex items-center gap-1.5 shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#81958A] animate-pulse"></span>
                  {service.imageLabels?.secondary || "Orquídea Peruana"}
                </span>
              </div>
            </div>
          </div>
        ) : (
          <>
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              loading="lazy"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/images/estudios_ambientales_peru.jpg';
              }}
            />
            {/* Subtle gradient vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#17251D]/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
          </>
        )}

        {/* Number Badge */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-white/40 shadow-xs z-10">
          <span className="text-xs font-black text-[#304338] tracking-widest">
            {service.number}
          </span>
        </div>

        {/* Floating Icon */}
        <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center border border-white/60 shadow-xs z-10">
          {iconRenderer(service.iconName)}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between relative z-10">
        <div>
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-lg sm:text-xl font-bold tracking-tight uppercase transition-colors text-[#171D18] group-hover:text-[#304338]">
              {service.title}
            </h3>
          </div>

          <p className="text-xs sm:text-sm leading-relaxed mb-5 text-[#59635D]">
            {service.shortDescription}
          </p>

          {/* Subservices tags */}
          <div className="space-y-2 mb-6 pt-3 border-t border-[#E1E2DD]/50">
            <span className="text-[10px] font-bold uppercase tracking-wider block mb-2 text-[#81958A]">
              Alcances principales:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {service.subservices.slice(0, 3).map((sub, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-[#304338]/5 text-[#304338]"
                >
                  {sub}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Actions Button Row */}
        <div className="pt-4 border-t flex items-center justify-between gap-3 border-[#F9F8F6]">
          <button
            onClick={() => onSelectService(service)}
            className="text-[10px] font-bold text-[#E99A35] uppercase tracking-widest group-hover:translate-x-1 transition-transform flex items-center gap-1 cursor-pointer"
          >
            <span>Ver detalles</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => onQuickQuote(service.title)}
            className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-xs bg-[#304338] hover:bg-[#17251D] text-white"
          >
            Cotizar
          </button>
        </div>
      </div>
    </div>
  );
};
