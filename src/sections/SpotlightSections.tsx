import React, { useState } from 'react';
import { 
  Wind, Droplets, Mountain, Volume2, 
  Trees, Bug, ShieldAlert, Cpu, HeartPulse, UserCheck, 
  ArrowRight, FileText, CheckCircle2, ChevronRight, Info
} from 'lucide-react';
import { ENVIRONMENTAL_INSTRUMENTS } from '../data/environmentalData';
import { EnvironmentalStudyInstrument } from '../types';

interface SpotlightSectionsProps {
  onOpenQuote: (serviceTitle?: string) => void;
}

export const SpotlightSections: React.FC<SpotlightSectionsProps> = ({ onOpenQuote }) => {
  const [selectedInstrument, setSelectedInstrument] = useState<EnvironmentalStudyInstrument>(
    ENVIRONMENTAL_INSTRUMENTS[1] // Default DIA
  );

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* ========================================================================= */}
      {/* 15. MONITOREO AMBIENTAL: Imagen grande izquierda, contenido derecha */}
      {/* ========================================================================= */}
      <section className="bg-[#FFFFFF] rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 lg:p-14 border border-[#E1E2DD] shadow-[0_12px_40px_rgba(30,45,36,0.05)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Large Image on Left */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[16/11] border border-[#E1E2DD] shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80"
                alt="Especialista ambiental realizando muestreo y análisis técnico de calidad de agua y aire"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17251D]/70 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white text-xs">
                <div className="inline-flex items-center gap-2 bg-[#FFFFFF]/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30 mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#E99A35]" />
                  <span className="font-semibold">Muestreo Calibrado</span>
                </div>
                <p className="text-[#ECEBE7]/90 text-xs">
                  Equipos con calibración vigente y trazabilidad bajo norma ISO/IEC 17025.
                </p>
              </div>
            </div>
          </div>

          {/* Content on Right */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 bg-[#F9F8F6] px-3.5 py-1 rounded-full border border-[#E1E2DD] text-xs font-bold text-[#304338] uppercase tracking-wider mb-4">
              <span className="text-[#E99A35]">01</span>
              <span>•</span>
              <span>Línea de Servicio</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#171D18] tracking-tight mb-4">
              Monitoreo ambiental con precisión técnica.
            </h2>

            <p className="text-sm sm:text-base text-[#59635D] leading-relaxed mb-6">
              Medición y control de factores físicos para garantizar el cumplimiento de los Estándares de Calidad Ambiental (ECA) y responder con solvencia técnica ante fiscalizaciones de OEFA y autoridades sectoriales.
            </p>

            {/* 4 Matrices: Aire, Agua, Suelo, Ruido */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              <div className="p-4 rounded-2xl bg-[#F9F8F6] border border-[#E1E2DD] flex items-start gap-3">
                <div className="p-2 rounded-xl bg-[#FFFFFF] text-[#304338] shadow-2xs">
                  <Wind className="w-5 h-5 text-[#304338]" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#171D18]">Aire</h3>
                  <p className="text-xs text-[#59635D] mt-0.5">
                    PM10, PM2.5, PTS, gases (CO, SO2, NO2, O3), COVs y meteorología.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#F9F8F6] border border-[#E1E2DD] flex items-start gap-3">
                <div className="p-2 rounded-xl bg-[#FFFFFF] text-[#304338] shadow-2xs">
                  <Droplets className="w-5 h-5 text-[#304338]" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#171D18]">Agua</h3>
                  <p className="text-xs text-[#59635D] mt-0.5">
                    Superficial, subterránea, marina, efluentes mineros e industriales.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#F9F8F6] border border-[#E1E2DD] flex items-start gap-3">
                <div className="p-2 rounded-xl bg-[#FFFFFF] text-[#304338] shadow-2xs">
                  <Mountain className="w-5 h-5 text-[#304338]" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#171D18]">Suelo</h3>
                  <p className="text-xs text-[#59635D] mt-0.5">
                    Metales pesados, TPH, hidrocarburos, agroquímicos y remediación.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#F9F8F6] border border-[#E1E2DD] flex items-start gap-3">
                <div className="p-2 rounded-xl bg-[#FFFFFF] text-[#304338] shadow-2xs">
                  <Volume2 className="w-5 h-5 text-[#304338]" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#171D18]">Ruido</h3>
                  <p className="text-xs text-[#59635D] mt-0.5">
                    Ruido ambiental diurno y nocturno continuo con sonómetros Tipo 1.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA button */}
            <button
              onClick={() => onOpenQuote('Monitoreo Ambiental (Aire, Agua, Suelo, Ruido)')}
              className="bg-[#304338] hover:bg-[#17251D] text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-200 flex items-center gap-2 shadow-sm cursor-pointer"
            >
              <span>Conocer monitoreo ambiental</span>
              <ArrowRight className="w-4 h-4 text-[#E99A35]" />
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 16. MONITOREO BIOLÓGICO: "Conocer el territorio también es protegerlo" */}
      {/* ========================================================================= */}
      <section className="bg-[#F9F8F6] rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 lg:p-14 border border-[#E1E2DD]">
        <div className="max-w-[760px] mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-[#FFFFFF] px-3.5 py-1 rounded-full border border-[#E1E2DD] text-xs font-bold text-[#304338] uppercase tracking-wider mb-4">
            <span className="text-[#E99A35]">02</span>
            <span>•</span>
            <span>Biodiversidad & Conservación</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#171D18] tracking-tight mb-4">
            Conocer el territorio también es protegerlo.
          </h2>

          <p className="text-sm sm:text-base text-[#59635D] leading-relaxed">
            Evaluamos la riqueza biológica y dinámica comunitaria de los ecosistemas peruanos con metodologías avaladas por SERFOR y estándares de conservación internacional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Flora Card */}
          <div className="bg-[#FFFFFF] rounded-3xl overflow-hidden border border-[#E1E2DD] shadow-sm flex flex-col justify-between group">
            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src="/images/orquideas_peru_flora.jpg"
                alt="Evaluación botánica de orquídeas nativas del Perú y flora silvestre"
                className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#304338] flex items-center gap-1.5">
                <Trees className="w-3.5 h-3.5 text-[#6E8B72]" />
                <span>Componente Flora</span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-[#171D18] mb-2">Flora y Cobertura Vegetal</h3>
              <p className="text-xs sm:text-sm text-[#59635D] leading-relaxed mb-4">
                Inventarios florísticos mediante transectos, parcelas botánicas, evaluación de orquídeas nativas, cactáceas, especies CITES y categorizadas bajo el D.S. 043-2006-AG.
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-[#304338]">
                <span className="bg-[#ECEBE7] px-2.5 py-1 rounded-full font-medium">Orquídeas CITES</span>
                <span className="bg-[#ECEBE7] px-2.5 py-1 rounded-full font-medium">Bofedales</span>
                <span className="bg-[#ECEBE7] px-2.5 py-1 rounded-full font-medium">Bosque Nublado</span>
                <span className="bg-[#ECEBE7] px-2.5 py-1 rounded-full font-medium">Rescate Botánico</span>
              </div>
            </div>
          </div>

          {/* Fauna Card */}
          <div className="bg-[#FFFFFF] rounded-3xl overflow-hidden border border-[#E1E2DD] shadow-sm flex flex-col justify-between group">
            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src="/images/gallito_de_las_rocas_peru.jpg"
                alt="Gallito de las rocas (Rupicola peruvianus), ave nacional del Perú y monitoreo de ornitofauna silvestre"
                className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#304338] flex items-center gap-1.5">
                <Bug className="w-3.5 h-3.5 text-[#E99A35]" />
                <span>Componente Fauna</span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-[#171D18] mb-2">Fauna Silvestre e Hidrobiología</h3>
              <p className="text-xs sm:text-sm text-[#59635D] leading-relaxed mb-4">
                Censo de ornitofauna (como el gallito de las rocas, Rupicola peruvianus), mastofauna, herpetofauna y comunidades hidrobiológicas evaluadas bajo directrices de SERFOR.
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-[#304338]">
                <span className="bg-[#ECEBE7] px-2.5 py-1 rounded-full font-medium">Ornitofauna (Aves)</span>
                <span className="bg-[#ECEBE7] px-2.5 py-1 rounded-full font-medium">Cámaras Trampa</span>
                <span className="bg-[#ECEBE7] px-2.5 py-1 rounded-full font-medium">Redes de Niebla</span>
                <span className="bg-[#ECEBE7] px-2.5 py-1 rounded-full font-medium">Macroinvertebrados</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 17. MONITOREOS OCUPACIONALES: Entorno laboral y 5 servicios */}
      {/* ========================================================================= */}
      <section className="bg-[#FFFFFF] rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 lg:p-14 border border-[#E1E2DD] shadow-[0_12px_40px_rgba(30,45,36,0.05)]">
        <div className="max-w-[760px] mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#F9F8F6] px-3.5 py-1 rounded-full border border-[#E1E2DD] text-xs font-bold text-[#304338] uppercase tracking-wider mb-4">
            <span className="text-[#E99A35]">03</span>
            <span>•</span>
            <span>Higiene y Salud Ocupacional</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#171D18] tracking-tight mb-4">
            Evaluamos los riesgos presentes en el entorno laboral.
          </h2>

          <p className="text-sm sm:text-base text-[#59635D] leading-relaxed">
            Cumplimiento riguroso de la Ley N° 29783 y la R.M. 375-2008-TR para proteger la salud de los trabajadores y responder ante inspecciones de SUNAFIL.
          </p>
        </div>

        {/* 5 Technical Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="bg-[#F9F8F6] rounded-2xl p-5 border border-[#E1E2DD] flex flex-col justify-between hover:border-[#81958A] transition-all">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#304338] shadow-2xs mb-3">
                <Volume2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-[#171D18] mb-1">Agentes físicos</h3>
              <p className="text-xs text-[#59635D] leading-relaxed">
                Ruido dosimétrico, vibraciones cuerpo entero/mano-brazo, iluminación y estrés térmico TGBH.
              </p>
            </div>
            <span className="text-[11px] font-semibold text-[#81958A] mt-4 pt-3 border-t border-[#ECEBE7]">
              Dosimetría & Luxometría
            </span>
          </div>

          <div className="bg-[#F9F8F6] rounded-2xl p-5 border border-[#E1E2DD] flex flex-col justify-between hover:border-[#81958A] transition-all">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#304338] shadow-2xs mb-3">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-[#171D18] mb-1">Agentes químicos</h3>
              <p className="text-xs text-[#59635D] leading-relaxed">
                Polvo respirable e inhalable, humos metálicos, gases, vapores orgánicos y nieblas ácidas.
              </p>
            </div>
            <span className="text-[11px] font-semibold text-[#81958A] mt-4 pt-3 border-t border-[#ECEBE7]">
              Trenes Gravimétricos
            </span>
          </div>

          <div className="bg-[#F9F8F6] rounded-2xl p-5 border border-[#E1E2DD] flex flex-col justify-between hover:border-[#81958A] transition-all">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#304338] shadow-2xs mb-3">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-[#171D18] mb-1">Agentes biológicos</h3>
              <p className="text-xs text-[#59635D] leading-relaxed">
                Bacterias, hongos y levaduras aerotransportadas en espacios cerrados o de climatización.
              </p>
            </div>
            <span className="text-[11px] font-semibold text-[#81958A] mt-4 pt-3 border-t border-[#ECEBE7]">
              Muestreo de Aire Indoor
            </span>
          </div>

          <div className="bg-[#F9F8F6] rounded-2xl p-5 border border-[#E1E2DD] flex flex-col justify-between hover:border-[#81958A] transition-all">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#304338] shadow-2xs mb-3">
                <UserCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-[#171D18] mb-1">Evaluación disergonómica</h3>
              <p className="text-xs text-[#59635D] leading-relaxed">
                Métodos REBA, RULA, OWAS, ecuación NIOSH y manipulación manual de cargas.
              </p>
            </div>
            <span className="text-[11px] font-semibold text-[#81958A] mt-4 pt-3 border-t border-[#ECEBE7]">
              R.M. 375-2008-TR
            </span>
          </div>

          <div className="bg-[#F9F8F6] rounded-2xl p-5 border border-[#E1E2DD] flex flex-col justify-between hover:border-[#81958A] transition-all">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#304338] shadow-2xs mb-3">
                <HeartPulse className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-[#171D18] mb-1">Evaluación psicosocial</h3>
              <p className="text-xs text-[#59635D] leading-relaxed">
                Identificación de factores intralaborales y extralaborales con metodología validada.
              </p>
            </div>
            <span className="text-[11px] font-semibold text-[#81958A] mt-4 pt-3 border-t border-[#ECEBE7]">
              CoPsoQ-istas21
            </span>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 18. ESTUDIOS AMBIENTALES: Pipeline visual EVAP → DIA → EIA-sd → EIA-d → ITS → FITSA → Plan de cierre */}
      {/* ========================================================================= */}
      <section className="bg-[#F9F8F6] rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 lg:p-14 border border-[#E1E2DD]">
        <div className="max-w-[800px] mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-[#FFFFFF] px-3.5 py-1 rounded-full border border-[#E1E2DD] text-xs font-bold text-[#304338] uppercase tracking-wider mb-4">
            <span className="text-[#E99A35]">04</span>
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
