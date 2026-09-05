import React, { useState } from 'react';
import { ChevronRight, Info } from 'lucide-react';
import { ENVIRONMENTAL_INSTRUMENTS } from '../data/environmentalData';
import { EnvironmentalStudyInstrument } from '../types';

interface SpotlightSectionsProps {
  onOpenQuote: (serviceName?: string) => void;
}

export const SpotlightSections: React.FC<SpotlightSectionsProps> = ({ onOpenQuote }) => {
  const [selectedInstrument, setSelectedInstrument] = useState<EnvironmentalStudyInstrument>(
    ENVIRONMENTAL_INSTRUMENTS[1] // Default DIA
  );

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* ========================================================================= */}
      {/* ESTUDIOS AMBIENTALES: Pipeline visual EVAP → DIA → EIA-sd → EIA-d → ITS → FITSA → Plan de cierre */}
      {/* ========================================================================= */}
      <section className="bg-[#F9F8F6] rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 lg:p-14 border border-[#E1E2DD]">
        <div className="max-w-[800px] mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-[#FFFFFF] px-3.5 py-1 rounded-full border border-[#E1E2DD] text-xs font-bold text-[#304338] uppercase tracking-wider mb-4">
            <span className="text-[#E99A35]">01</span>
            <span>•</span>
            <span>Marco Regulatorio SEIA</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#171D18] tracking-tight mb-4">
            De la evaluación ambiental a la viabilidad del proyecto.
          </h2>

          <p className="text-sm sm:text-base text-[#59635D] leading-relaxed">
            Estructuramos y tramitamos el instrumento de gestión ambiental adecuado ante Senace y ministerios sectoriales.
          </p>

          {/* Explicit disclaimer requested in section 18 */}
          <div className="mt-4 inline-flex items-center gap-2 bg-[#ECEBE7] text-[#536A5D] px-4 py-1.5 rounded-full text-xs">
            <Info className="w-3.5 h-3.5 text-[#E99A35]" />
            <span>Nota técnica: La exigibilidad de cada instrumento depende de la clasificación de riesgo, sector y envergadura de cada proyecto.</span>
          </div>
        </div>

        {/* Visual Pipeline Flow */}
        <div className="mb-10 overflow-x-auto pb-4">
          <div className="flex items-center min-w-[760px] justify-between gap-2 px-2">
            {ENVIRONMENTAL_INSTRUMENTS.map((inst, index) => {
              const isSelected = selectedInstrument.id === inst.id;
              return (
                <React.Fragment key={inst.id}>
                  <button
                    onClick={() => setSelectedInstrument(inst)}
                    className={`px-4 py-3 rounded-2xl border text-center transition-all cursor-pointer flex-1 ${
                      isSelected
                        ? 'bg-[#304338] text-white border-[#17251D] shadow-md scale-105'
                        : 'bg-[#FFFFFF] text-[#171D18] border-[#E1E2DD] hover:border-[#81958A]'
                    }`}
                  >
                    <span className="text-[10px] uppercase font-bold tracking-wider block opacity-70">
                      {inst.category}
                    </span>
                    <span className="text-sm sm:text-base font-extrabold tracking-tight block mt-0.5">
                      {inst.code}
                    </span>
                  </button>

                  {index < ENVIRONMENTAL_INSTRUMENTS.length - 1 && (
                    <ChevronRight className="w-4 h-4 text-[#81958A] shrink-0" />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Selected Instrument Detail Card */}
        <div className="bg-[#FFFFFF] rounded-3xl p-6 sm:p-8 border border-[#E1E2DD] shadow-sm max-w-[900px] mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-[#ECEBE7]">
            <div>
              <span className="text-xs font-bold text-[#E99A35] uppercase tracking-wider">
                {selectedInstrument.level}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#171D18]">
                {selectedInstrument.code} — {selectedInstrument.name}
              </h3>
            </div>
            <button
              onClick={() => onOpenQuote(`Estudio Ambiental: ${selectedInstrument.code} (${selectedInstrument.name})`)}
              className="bg-[#E99A35] hover:bg-[#D98220] text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-colors shrink-0 cursor-pointer"
            >
              Consultar este instrumento
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
            <div>
              <span className="text-[#81958A] font-semibold block uppercase tracking-wider text-[11px] mb-1">
                Finalidad Principal
              </span>
              <p className="text-[#171D18] leading-relaxed">
                {selectedInstrument.purpose}
              </p>
            </div>

            <div>
              <span className="text-[#81958A] font-semibold block uppercase tracking-wider text-[11px] mb-1">
                Aplicabilidad Habitual
              </span>
              <p className="text-[#171D18] leading-relaxed">
                {selectedInstrument.applicability}
              </p>
            </div>

            <div>
              <span className="text-[#81958A] font-semibold block uppercase tracking-wider text-[11px] mb-1">
                Autoridad Evaluadora Típica
              </span>
              <p className="text-[#304338] font-medium leading-relaxed">
                {selectedInstrument.typicalAuthority}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
