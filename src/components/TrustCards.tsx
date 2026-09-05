import React from 'react';
import { GraduationCap, Boxes, ShieldCheck, Handshake } from 'lucide-react';
import { TRUST_INDICATORS } from '../data/environmentalData';

const iconMap: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap className="w-5 h-5 text-[#304338]" />,
  Boxes: <Boxes className="w-5 h-5 text-[#304338]" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#304338]" />,
  Handshake: <Handshake className="w-5 h-5 text-[#304338]" />
};

export const TrustCards: React.FC = () => {
  return (
    <section id="nosotros" className="pt-16 pb-12 bg-[#F9F8F6]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {TRUST_INDICATORS.map((indicator, index) => (
            <div
              key={indicator.id}
              className="bg-[#FFFFFF] rounded-[24px] p-6 border border-[#E1E2DD] shadow-card hover:shadow-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#304338]/10 group-hover:bg-[#304338] text-[#304338] group-hover:text-white flex items-center justify-center transition-colors">
                    {iconMap[indicator.icon]}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#81958A]">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-[#171D18] group-hover:text-[#304338] transition-colors mb-2 uppercase tracking-wide">
                  {indicator.title}
                </h3>

                <p className="text-xs sm:text-[13px] text-[#59635D] leading-relaxed">
                  {indicator.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#F9F8F6] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E99A35]" />
                <span className="text-[10px] font-bold text-[#7A817C] uppercase tracking-widest">
                  Estándar Ingenia
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
