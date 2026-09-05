import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/environmentalData';
import { CheckCircle, BarChart3, Binary, Scale, FileText, ChevronRight } from 'lucide-react';
import { TopographicCurves } from './Decorations';

export const ProcessTimeline: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const currentStep = PROCESS_STEPS[activeStepIndex];

  const stepIcons = [
    <Binary className="w-5 h-5" />,
    <BarChart3 className="w-5 h-5" />,
    <Scale className="w-5 h-5" />,
    <FileText className="w-5 h-5" />
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#ECEBE7] relative overflow-hidden">
      {/* Subtle topographic background */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <TopographicCurves className="w-full h-full text-[#81958A]/30" />
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-[760px] mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#FFFFFF] px-3.5 py-1 rounded-full border border-[#E1E2DD] text-xs font-bold text-[#304338] uppercase tracking-wider mb-4 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#E99A35]" />
            Metodología Científica
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#171D18] tracking-tight mb-4">
            Del dato a la decisión.
          </h2>

          <p className="text-base sm:text-xl font-medium text-[#536A5D] tracking-tight">
            Medimos. Analizamos. Interpretamos. Decidimos.
          </p>

          <p className="text-sm text-[#59635D] mt-3 leading-relaxed">
            Un flujo de trabajo técnico diseñado para que cada registro de campo se convierta en una garantía operativa, legal y ambiental para tu empresa.
          </p>
        </div>

        {/* Step Tabs Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {PROCESS_STEPS.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStepIndex(idx)}
                className={`text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#304338] text-white border-[#17251D] shadow-[0_10px_30px_rgba(48,67,56,0.25)] -translate-y-1'
                    : 'bg-[#FFFFFF] text-[#171D18] border-[#E1E2DD] hover:border-[#81958A] hover:bg-[#F9F8F6]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-xs font-black tracking-widest ${
                      isActive ? 'text-[#E99A35]' : 'text-[#81958A]'
                    }`}
                  >
                    {step.number}
                  </span>
                  <div className={`p-1.5 rounded-lg ${isActive ? 'bg-white/10 text-[#E99A35]' : 'bg-[#ECEBE7] text-[#304338]'}`}>
                    {stepIcons[idx]}
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-sm sm:text-base tracking-tight mb-1">
                    {step.title}
                  </h3>
                  <span
                    className={`text-xs block ${
                      isActive ? 'text-[#ECEBE7]/80' : 'text-[#7A817C]'
                    }`}
                  >
                    {step.subtitle}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Interactive Viewer */}
        <div className="bg-[#FFFFFF] rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 border border-[#E1E2DD] shadow-[0_16px_40px_rgba(30,45,36,0.06)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-[#F9F8F6] text-[#304338] px-3 py-1 rounded-full text-xs font-semibold mb-4 border border-[#E1E2DD]">
                <span className="text-[#E99A35] font-bold">Fase {currentStep.number}</span>
                <span>•</span>
                <span>{currentStep.actionWord}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#171D18] tracking-tight mb-3">
                {currentStep.number}. {currentStep.title} — {currentStep.subtitle}
              </h3>

              <p className="text-sm sm:text-base text-[#59635D] leading-relaxed mb-6">
                {currentStep.description}
              </p>

              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#304338] block">
                  Criterios técnicos y de trazabilidad:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentStep.technicalDetails.map((detail, index) => (
                    <div
                      key={index}
                      className="bg-[#F9F8F6] p-3 rounded-xl border border-[#E1E2DD]/80 flex items-start gap-2.5 text-xs sm:text-[13px] text-[#171D18]"
                    >
                      <CheckCircle className="w-4 h-4 text-[#6E8B72] shrink-0 mt-0.5" />
                      <span className="leading-snug">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Visual Representation Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#304338] text-white rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-lg border border-[#17251D]">
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/15">
                    <span className="text-xs font-mono tracking-widest text-[#E99A35] uppercase">
                      Trazabilidad Científica
                    </span>
                    <span className="text-[11px] bg-white/10 px-2.5 py-0.5 rounded-full font-medium">
                      {currentStep.badge}
                    </span>
                  </div>

                  <div className="space-y-4 text-xs sm:text-sm text-[#ECEBE7]">
                    <div className="flex justify-between items-center py-1 border-b border-white/10">
                      <span className="text-[#81958A]">Etapa</span>
                      <span className="font-semibold text-white">{currentStep.title}</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-white/10">
                      <span className="text-[#81958A]">Estándar</span>
                      <span className="font-semibold text-white">ISO/IEC 17025 / INACAL</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-white/10">
                      <span className="text-[#81958A]">Resultado final</span>
                      <span className="font-semibold text-[#E99A35]">Información con certeza legal</span>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/15 flex items-center justify-between text-xs">
                    <span className="text-[#81958A]">Siguiente paso</span>
                    <button
                      onClick={() => setActiveStepIndex((activeStepIndex + 1) % PROCESS_STEPS.length)}
                      className="text-[#E99A35] hover:text-white font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <span>Avanzar</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Subtle topographic graphic background */}
                <div className="absolute -bottom-10 -right-10 opacity-20 pointer-events-none">
                  <TopographicCurves className="w-64 h-64 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
