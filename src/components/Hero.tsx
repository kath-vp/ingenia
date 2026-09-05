import React from 'react';
import { Compass, Shield, Award } from 'lucide-react';
import { TopographicCurves, MistiVolcanoSilhouette } from './Decorations';

interface HeroProps {
  onOpenQuote: () => void;
  onScrollToServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToServices }) => {
  return (
    <section id="inicio" className="pt-8 sm:pt-10 pb-14 sm:pb-20 relative overflow-hidden bg-[#F9F8F6]">
      {/* Background subtle topographic contours */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <TopographicCurves className="w-full h-full text-[#81958A]/30" />
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Large Panoramic Editorial Container */}
        <div className="relative rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-card border border-[#E1E2DD]">
          {/* Panoramic Hero Image: Peruvian Andean landscape + modern clean wind turbines / scientific field infrastructure */}
          <div className="relative h-[480px] sm:h-[540px] md:h-[580px] w-full">
            <img
              src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=2000&q=85"
              alt="Paisaje andino con infraestructura de energía limpia eólica y monitoreo ambiental en Perú"
              className="w-full h-full object-cover object-center scale-[1.02] transform transition-transform duration-1000 ease-out"
              loading="eager"
            />

            {/* Subtle Gradient Overlays for High Legibility while keeping image natural */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#17251D]/90 via-[#304338]/75 to-transparent sm:w-[85%] md:w-[70%]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#17251D]/80 via-transparent to-black/30" />

            {/* Content overlay */}
            <div className="absolute inset-0 p-6 sm:p-10 md:p-14 lg:p-16 flex flex-col justify-between max-w-[850px] z-10">
              {/* Top Row: Label & subtle Misti watermark */}
              <div className="flex items-center justify-between">
                <span className="inline-block px-3 py-1 bg-[#E99A35] text-[10px] font-bold rounded-full tracking-widest uppercase text-white shadow-xs">
                  Consultoría Ambiental
                </span>

                <div className="hidden sm:flex items-center gap-2 text-white/50 text-xs">
                  <MistiVolcanoSilhouette className="w-16 h-7 text-[#ECEBE7]/60" />
                  <span className="text-[10px] tracking-wider uppercase font-medium">Perú</span>
                </div>
              </div>

              {/* Middle Headline */}
              <div className="my-auto pt-6 pb-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-[#FFFFFF] tracking-tighter leading-[0.98] mb-4">
                  Soluciones ambientales que impulsan{' '}
                  <span className="text-[#E99A35]">
                    proyectos responsables.
                  </span>
                </h1>

                <p className="text-sm sm:text-base md:text-lg text-[#ECEBE7]/90 max-w-[620px] font-normal leading-relaxed mb-8">
                  Monitoreamos, evaluamos y desarrollamos soluciones ambientales para proyectos de energía, infraestructura, minería, construcción e industria.
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                  <button
                    id="hero-cta-services"
                    onClick={onScrollToServices}
                    className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/30 text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-full transition-all cursor-pointer hover:-translate-y-0.5"
                  >
                    Conocer servicios
                  </button>
                </div>
              </div>

              {/* Bottom Quick Feature Tagline */}
              <div className="hidden md:flex items-center gap-6 pt-3 border-t border-[#FFFFFF]/15 text-xs text-[#ECEBE7]/80">
                <div className="flex items-center gap-2">
                  <Compass className="w-3.5 h-3.5 text-[#E99A35]" />
                  <span>Cobertura técnica a nivel nacional</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-white/30" />
                <div className="flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5 text-[#E99A35]" />
                  <span>Metodologías alineadas a OEFA y SENACE</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-white/30" />
                <div className="flex items-center gap-2">
                  <Award className="w-3.5 h-3.5 text-[#E99A35]" />
                  <span>Laboratorios con acreditación INACAL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
