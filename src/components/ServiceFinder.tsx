import React, { useState } from 'react';
import { Check, ArrowRight, RotateCcw, Sparkles, CheckCircle2 } from 'lucide-react';
import { ServiceRecommendation } from '../types';

interface ServiceFinderProps {
  onOpenQuote: (servicePreset?: string) => void;
  initialNeed?: string;
}

export const ServiceFinder: React.FC<ServiceFinderProps> = ({ onOpenQuote, initialNeed }) => {
  const [step, setStep] = useState<number>(1);
  const [needType, setNeedType] = useState<string>(initialNeed || '');
  const [projectStage, setProjectStage] = useState<string>('');
  const [sectorType, setSectorType] = useState<string>('');

  const handleNeedSelect = (value: string) => {
    setNeedType(value);
    setStep(2);
  };

  const handleStageSelect = (value: string) => {
    setProjectStage(value);
    setStep(3);
  };

  const handleSectorSelect = (value: string) => {
    setSectorType(value);
    setStep(4);
  };

  const handleReset = () => {
    setStep(1);
    setNeedType('');
    setProjectStage('');
    setSectorType('');
  };

  // Calculate recommendation based on user answers
  const calculateRecommendation = (): ServiceRecommendation => {
    if (needType === 'monitorear-componente') {
      return {
        recommendedServiceId: 'monitoreo-ambiental',
        title: '01. Monitoreo Ambiental Sistemático (ECA / LMP)',
        category: 'Monitoreo Físico',
        justification: `Para proyectos en fase de ${projectStage || 'operación'} en el sector ${sectorType || 'industrial/minero'}, la normativa exige el control de Estándares de Calidad Ambiental (ECA) con laboratorios acreditados ante INACAL.`,
        recommendedScope: [
          'Medición de material particulado (PM10 y PM2.5)',
          'Monitoreo sonométrico diurno y nocturno con sonómetro Tipo 1',
          'Muestreo de aguas y efluentes según protocolo nacional',
          'Informe comparativo con análisis estadístico'
        ],
        regulatoryBasis: 'D.S. 003-2017-MINAM, D.S. 004-2017-MINAM y D.S. 085-2003-PCM.'
      };
    }

    if (needType === 'evaluar-biodiversidad') {
      return {
        recommendedServiceId: 'monitoreo-biologico',
        title: '02. Monitoreo Biológico Estacional (Flora y Fauna)',
        category: 'Biodiversidad',
        justification: `La caracterización estacional (época húmeda y seca) es requisito indispensable de SENACE y SERFOR para evaluar hábitats y especies en proyectos de ${sectorType || 'infraestructura/energía'}.`,
        recommendedScope: [
          'Evaluación florística mediante transectos y parcelas botánicas',
          'Monitoreo de ornitofauna, mastofauna y herpetofauna',
          'Uso de cámaras trampa y redes de niebla según protocolos',
          'Catálogo fotográfico y mapas de sensibilidad ecológica'
        ],
        regulatoryBasis: 'D.S. 004-2014-MINAGRI y D.S. 043-2006-AG.'
      };
    }

    if (needType === 'evaluar-ocupacional') {
      return {
        recommendedServiceId: 'monitoreos-ocupacionales',
        title: '03. Programa Anual de Monitoreo Ocupacional & Ergonomía',
        category: 'Higiene Industrial',
        justification: `El cumplimiento de la Ley N° 29783 y la R.M. 375-2008-TR previene sanciones de SUNAFIL y asegura la salud de los trabajadores frente a agentes físicos, químicos y disergonómicos.`,
        recommendedScope: [
          'Dosimetría de ruido por grupos de exposición similar (GES)',
          'Evaluación de iluminación con luxómetro calibrado',
          'Estudio ergonómico de puestos de trabajo (método REBA / RULA)',
          'Informe técnico con medidas de control en la fuente'
        ],
        regulatoryBasis: 'Ley N° 29783 y R.M. 375-2008-TR.'
      };
    }

    if (needType === 'desarrollar-instrumento') {
      return {
        recommendedServiceId: 'estudios-ambientales',
        title: '04. Instrumentos de Gestión Ambiental (EVAP / DIA / EIA / ITS)',
        category: 'Certificación Ambiental',
        justification: `La viabilidad ambiental ante Senace o Ministerios requiere determinar si corresponde una DIA, un EIA Semidetallado, un ITS o la clasificación anticipada según el SEIA.`,
        recommendedScope: [
          'Elaboración de expediente técnico con mapas temáticos SIG',
          'Evaluación y modelamiento de impactos ambientales',
          'Plan de Manejo Ambiental y Plan de Contingencias',
          'Acompañamiento técnico hasta la Certificación Ambiental'
        ],
        regulatoryBasis: 'Ley del SEIA N° 27446 y D.S. 019-2009-MINAM.'
      };
    }

    // Default: Asesoría integral
    return {
      recommendedServiceId: 'asesoria-integral',
      title: 'Diagnóstico Ambiental Preliminar & Asesoría Integral',
      category: 'Consultoría Especializada',
      justification: `Revisamos la situación legal y ambiental de tu proyecto para estructurar una ruta técnica y optimizar recursos sin contingencias ante OEFA o Senace.`,
      recommendedScope: [
        'Auditoría documental de compromisos vigentes',
        'Matriz de aplicabilidad legal sectorial',
        'Propuesta técnica y cronograma de cumplimiento'
      ],
      regulatoryBasis: 'Marco legal ambiental peruano aplicable al sector.'
    };
  };

  const recommendation = calculateRecommendation();

  return (
    <div className="bg-[#FFFFFF] rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 md:p-12 border border-[#E1E2DD] shadow-[0_12px_40px_rgba(30,45,36,0.06)] max-w-[1000px] mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-[#ECEBE7]">
        <div>
          <div className="inline-flex items-center gap-2 bg-[#F9F8F6] px-3 py-1 rounded-full border border-[#E1E2DD] text-xs font-bold text-[#304338] mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#E99A35]" />
            <span>Asistente Técnico Interactivo</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#171D18]">
            Encuentra el servicio ambiental adecuado
          </h2>
        </div>

        {step > 1 && (
          <button
            onClick={handleReset}
            className="text-xs font-semibold text-[#81958A] hover:text-[#304338] flex items-center gap-1.5 transition-colors self-start sm:self-auto cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reiniciar asistente</span>
          </button>
        )}
      </div>

      {/* STEP 1: ¿Qué necesitas? */}
      {step === 1 && (
        <div className="space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#81958A] block">
            Paso 1 de 3
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-[#171D18]">
            ¿Qué necesitas para tu proyecto?
          </h3>
          <p className="text-sm text-[#59635D] mb-6">
            Selecciona el requerimiento principal que describe tu necesidad actual:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
            <button
              onClick={() => handleNeedSelect('monitorear-componente')}
              className="text-left p-5 rounded-2xl border border-[#E1E2DD] hover:border-[#304338] hover:bg-[#F9F8F6] transition-all cursor-pointer group"
            >
              <span className="text-xs font-bold text-[#E99A35] block mb-1">01</span>
              <h4 className="font-bold text-base text-[#171D18] group-hover:text-[#304338]">
                Monitorear un componente ambiental
              </h4>
              <p className="text-xs text-[#59635D] mt-1">
                Calidad de aire, agua, suelo, ruido ambiental o efluentes con equipos calibrados.
              </p>
            </button>

            <button
              onClick={() => handleNeedSelect('evaluar-biodiversidad')}
              className="text-left p-5 rounded-2xl border border-[#E1E2DD] hover:border-[#304338] hover:bg-[#F9F8F6] transition-all cursor-pointer group"
            >
              <span className="text-xs font-bold text-[#E99A35] block mb-1">02</span>
              <h4 className="font-bold text-base text-[#171D18] group-hover:text-[#304338]">
                Evaluar biodiversidad (Flora y Fauna)
              </h4>
              <p className="text-xs text-[#59635D] mt-1">
                Línea base biológica, inventarios estacionales, cámaras trampa o rescate de flora.
              </p>
            </button>

            <button
              onClick={() => handleNeedSelect('evaluar-ocupacional')}
              className="text-left p-5 rounded-2xl border border-[#E1E2DD] hover:border-[#304338] hover:bg-[#F9F8F6] transition-all cursor-pointer group"
            >
              <span className="text-xs font-bold text-[#E99A35] block mb-1">03</span>
              <h4 className="font-bold text-base text-[#171D18] group-hover:text-[#304338]">
                Evaluar condiciones ocupacionales
              </h4>
              <p className="text-xs text-[#59635D] mt-1">
                Ruido laboral, iluminación, vibraciones, ergonomía o factores psicosociales (Ley 29783).
              </p>
            </button>

            <button
              onClick={() => handleNeedSelect('desarrollar-instrumento')}
              className="text-left p-5 rounded-2xl border border-[#E1E2DD] hover:border-[#304338] hover:bg-[#F9F8F6] transition-all cursor-pointer group"
            >
              <span className="text-xs font-bold text-[#E99A35] block mb-1">04</span>
              <h4 className="font-bold text-base text-[#171D18] group-hover:text-[#304338]">
                Desarrollar un instrumento ambiental
              </h4>
              <p className="text-xs text-[#59635D] mt-1">
                EVAP, DIA, EIA-sd, EIA-d, ITS, FITSA o Plan de Cierre para viabilidad legal.
              </p>
            </button>

            <button
              onClick={() => handleNeedSelect('no-estoy-seguro')}
              className="sm:col-span-2 text-left p-4 rounded-2xl border border-dashed border-[#81958A] bg-[#ECEBE7]/40 hover:bg-[#ECEBE7] transition-all cursor-pointer"
            >
              <h4 className="font-bold text-sm text-[#304338]">
                No estoy seguro / Deseo asesoría personalizada
              </h4>
              <p className="text-xs text-[#59635D] mt-0.5">
                Nuestro equipo técnico analizará tu caso específico para recomendarte el alcance exacto.
              </p>
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: ¿En qué etapa está el proyecto? */}
      {step === 2 && (
        <div className="space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#81958A] block">
            Paso 2 de 3
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-[#171D18]">
            ¿En qué etapa se encuentra tu proyecto?
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
            {[
              { id: 'diseno-planificacion', label: 'Diseño o Planificación', desc: 'Previo a obras, requiero línea base o certificación ambiental.' },
              { id: 'construccion-obras', label: 'Construcción y Movimiento de Tierras', desc: 'Monitoreo de PM10, ruido de maquinaria y PMA de obra.' },
              { id: 'operacion-mantenimiento', label: 'Operación Continua', desc: 'Monitoreos periódicos obligatorios y cumplimiento ante OEFA/SUNAFIL.' },
              { id: 'modificacion-ampliacion', label: 'Ampliación o Modificación', desc: 'Nuevos componentes o mejoras tecnológicas (ITS / MEIA).' },
              { id: 'cierre-remediacion', label: 'Cierre o Remediación', desc: 'Abandono de instalaciones, remediación de pasivos o canteras.' }
            ].map((stage) => (
              <button
                key={stage.id}
                onClick={() => handleStageSelect(stage.label)}
                className="text-left p-4 rounded-2xl border border-[#E1E2DD] hover:border-[#304338] hover:bg-[#F9F8F6] transition-all cursor-pointer"
              >
                <h4 className="font-bold text-sm text-[#171D18]">{stage.label}</h4>
                <p className="text-xs text-[#59635D] mt-1">{stage.desc}</p>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* STEP 3: ¿A qué sector pertenece? */}
      {step === 3 && (
        <div className="space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#81958A] block">
            Paso 3 de 3
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-[#171D18]">
            ¿A qué sector productivo pertenece?
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
            {[
              'Energía', 'Minería', 'Construcción',
              'Industria', 'Hidrocarburos', 'Sector Público'
            ].map((sector) => (
              <button
                key={sector}
                onClick={() => handleSectorSelect(sector)}
                className="p-4 rounded-2xl border border-[#E1E2DD] hover:border-[#304338] hover:bg-[#304338] hover:text-white font-bold text-sm transition-all text-center cursor-pointer"
              >
                {sector}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* STEP 4: RESULTADO - SERVICIO RECOMENDADO */}
      {step === 4 && (
        <div className="space-y-6">
          <div className="bg-[#304338] text-white p-6 sm:p-8 rounded-3xl border border-[#17251D] shadow-lg relative overflow-hidden">
            <div className="inline-flex items-center gap-2 bg-[#E99A35] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <Check className="w-3.5 h-3.5" />
              <span>SERVICIO RECOMENDADO</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              {recommendation.title}
            </h3>

            <p className="text-sm text-[#ECEBE7] leading-relaxed mb-6">
              {recommendation.justification}
            </p>

            <div className="bg-white/10 p-4 sm:p-5 rounded-2xl backdrop-blur-xs mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#E99A35] block mb-2">
                Alcance sugerido para tu caso:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                {recommendation.recommendedScope.map((scope, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-[#ECEBE7]">
                    <CheckCircle2 className="w-4 h-4 text-[#E99A35] shrink-0 mt-0.5" />
                    <span>{scope}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/15">
              <div className="text-xs text-[#ECEBE7]/80">
                <span className="font-semibold text-white">Base normativa: </span>
                {recommendation.regulatoryBasis}
              </div>

              <button
                onClick={() => onOpenQuote(`${recommendation.title} (Sector ${sectorType})`)}
                className="bg-[#E99A35] hover:bg-[#D98220] text-white font-bold text-sm px-6 py-3 rounded-full transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer self-start sm:self-auto shrink-0"
              >
                <span>Solicitar cotización de esta solución</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
