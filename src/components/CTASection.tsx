import React from 'react';
import { ArrowRight, PhoneCall, Mail } from 'lucide-react';
import { EMAIL, PHONE_MOBILE } from '../config';
import { MistiVolcanoSilhouette } from './Decorations';

interface CTASectionProps {
  onOpenQuote: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenQuote }) => {
  return (
    <section className="py-16 sm:py-24 bg-[#F9F8F6]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[32px] sm:rounded-[44px] overflow-hidden bg-[#304338] border border-[#17251D] shadow-[0_20px_60px_rgba(23,37,29,0.18)]">
          {/* Panoramic Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=2000&q=80"
              alt="Paisaje de ingeniería y desarrollo ambiental sostenible en el Perú"
              className="w-full h-full object-cover object-center opacity-30"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#17251D] via-[#304338]/95 to-[#304338]/85" />
          </div>

          {/* Content */}
          <div className="relative z-10 p-8 sm:p-14 lg:p-20 flex flex-col md:flex-row md:items-center justify-between gap-10">
            <div className="max-w-[680px]">
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-white text-xs font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-[#E99A35]" />
                <span>Atención Técnica Inmediata</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
                ¿Tienes un proyecto ambiental por desarrollar?
              </h2>

              <p className="text-base sm:text-lg text-[#ECEBE7]/90 font-normal leading-relaxed mb-8">
                Cuéntanos qué necesitas y nuestro equipo te ayudará a identificar la solución adecuada con sustento técnico y estricto apego regulatorio.
              </p>

              {/* Direct Contacts Row */}
              <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm text-[#ECEBE7]/80">
                <a href={`tel:${PHONE_MOBILE}`} className="flex items-center gap-2 hover:text-[#E99A35] transition-colors">
                  <PhoneCall className="w-4 h-4 text-[#E99A35]" />
                  <span>{PHONE_MOBILE}</span>
                </a>
                <span className="hidden sm:inline">•</span>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-[#E99A35] transition-colors">
                  <Mail className="w-4 h-4 text-[#E99A35]" />
                  <span>{EMAIL}</span>
                </a>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
              <button
                id="cta-final-quote-btn"
                onClick={onOpenQuote}
                className="bg-[#E99A35] hover:bg-[#D98220] text-white text-base font-bold px-8 py-4 rounded-full transition-all duration-200 shadow-[0_8px_25px_rgba(233,154,53,0.35)] hover:shadow-[0_12px_32px_rgba(233,154,53,0.45)] hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Solicitar cotización</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <div className="text-center pt-2">
                <MistiVolcanoSilhouette className="w-20 h-8 mx-auto text-[#81958A]/40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
