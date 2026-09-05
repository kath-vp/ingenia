import React, { useState, useMemo } from 'react';
import { X, Search, ArrowRight, CheckCircle2, FileText, Activity, ShieldCheck, MapPin, ExternalLink, ChevronRight, Info } from 'lucide-react';
import { ServiceItem, SectorItem, BlogPost, EnvironmentalStudyInstrument } from '../types';
import { SERVICES_DATA, SECTORS_DATA, BLOG_POSTS, ENVIRONMENTAL_INSTRUMENTS } from '../data/environmentalData';

// -----------------------------------------------------------------------------
// 1. Search Modal
// -----------------------------------------------------------------------------
interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectService: (service: ServiceItem) => void;
  onSelectSector: (sector: SectorItem) => void;
  onSelectPost: (post: BlogPost) => void;
  onOpenQuote: (servicePreset?: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectService,
  onSelectSector,
  onSelectPost,
  onOpenQuote
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredResults = useMemo(() => {
    if (!searchTerm.trim()) {
      return {
        services: SERVICES_DATA,
        instruments: ENVIRONMENTAL_INSTRUMENTS.slice(0, 4),
        sectors: SECTORS_DATA.slice(0, 4),
        posts: BLOG_POSTS.slice(0, 3)
      };
    }

    const query = searchTerm.toLowerCase();

    return {
      services: SERVICES_DATA.filter(
        s => s.title.toLowerCase().includes(query) || 
             s.shortDescription.toLowerCase().includes(query) ||
             s.subservices.some(sub => sub.toLowerCase().includes(query))
      ),
      instruments: ENVIRONMENTAL_INSTRUMENTS.filter(
        i => i.code.toLowerCase().includes(query) ||
             i.name.toLowerCase().includes(query) ||
             i.purpose.toLowerCase().includes(query)
      ),
      sectors: SECTORS_DATA.filter(
        sec => sec.name.toLowerCase().includes(query) ||
               sec.description.toLowerCase().includes(query)
      ),
      posts: BLOG_POSTS.filter(
        p => p.title.toLowerCase().includes(query) ||
             p.excerpt.toLowerCase().includes(query) ||
             p.tags.some(t => t.toLowerCase().includes(query))
      )
    };
  }, [searchTerm]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#17251D]/70 backdrop-blur-sm flex items-start justify-center p-4 sm:p-6 overflow-y-auto pt-16 sm:pt-24 animate-in fade-in duration-200">
      <div 
        className="bg-[#FFFFFF] rounded-3xl w-full max-w-2xl border border-[#E1E2DD] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Header */}
        <div className="p-4 sm:p-5 border-b border-[#ECEBE7] flex items-center gap-3">
          <Search className="w-5 h-5 text-[#81958A]" />
          <input
            type="text"
            autoFocus
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar por servicio (aire, agua, flora, DIA, ITS, ruido)..."
            className="w-full text-base sm:text-lg font-medium text-[#171D18] placeholder-[#7A817C] focus:outline-none bg-transparent"
          />
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#ECEBE7] hover:bg-[#E1E2DD] text-[#304338] flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Tag Recommendations */}
        <div className="p-3 bg-[#F9F8F6] border-b border-[#ECEBE7] flex items-center gap-2 overflow-x-auto text-xs text-[#59635D]">
          <span className="font-semibold text-[#304338] shrink-0">Sugerencias:</span>
          {['Monitoreo de Aire', 'Agua', 'Ruido', 'EIA', 'ITS', 'Flora', 'Ergonomía'].map((tag) => (
            <button
              key={tag}
              onClick={() => setSearchTerm(tag)}
              className="bg-white px-2.5 py-1 rounded-full border border-[#E1E2DD] hover:border-[#304338] shrink-0 cursor-pointer transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results Body */}
        <div className="p-5 max-h-[60vh] overflow-y-auto space-y-6">
          {/* Services */}
          {filteredResults.services.length > 0 && (
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#81958A] block mb-2">
                Líneas de Servicio ({filteredResults.services.length})
              </span>
              <div className="space-y-2">
                {filteredResults.services.map((service) => (
                  <div
                    key={service.id}
                    onClick={() => {
                      onClose();
                      onSelectService(service);
                    }}
                    className="p-3 rounded-2xl hover:bg-[#F9F8F6] border border-transparent hover:border-[#E1E2DD] flex items-center justify-between cursor-pointer transition-colors group"
                  >
                    <div>
                      <h4 className="text-sm font-bold text-[#171D18] group-hover:text-[#304338]">
                        {service.number}. {service.title}
                      </h4>
                      <p className="text-xs text-[#59635D] line-clamp-1">
                        {service.shortDescription}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#81958A] group-hover:text-[#E99A35] shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Instruments */}
          {filteredResults.instruments.length > 0 && (
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#81958A] block mb-2">
                Instrumentos de Gestión Ambiental ({filteredResults.instruments.length})
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {filteredResults.instruments.map((inst) => (
                  <div
                    key={inst.id}
                    onClick={() => {
                      onClose();
                      onOpenQuote(`Instrumento: ${inst.code} (${inst.name})`);
                    }}
                    className="p-3 rounded-xl bg-[#F9F8F6] hover:bg-[#ECEBE7] border border-[#E1E2DD] cursor-pointer transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-[#304338]">{inst.code}</span>
                      <span className="text-[10px] text-[#E99A35] font-semibold">{inst.category}</span>
                    </div>
                    <p className="text-xs text-[#59635D] line-clamp-1 mt-0.5">{inst.name}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Sectors */}
          {filteredResults.sectors.length > 0 && (
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#81958A] block mb-2">
                Sectores ({filteredResults.sectors.length})
              </span>
              <div className="flex flex-wrap gap-2">
                {filteredResults.sectors.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => {
                      onClose();
                      onSelectSector(sec);
                    }}
                    className="px-3 py-1.5 rounded-full bg-[#F9F8F6] hover:bg-[#304338] hover:text-white border border-[#E1E2DD] text-xs font-semibold text-[#171D18] transition-colors cursor-pointer"
                  >
                    {sec.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Blog Articles */}
          {filteredResults.posts.length > 0 && (
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#81958A] block mb-2">
                Artículos Técnicos ({filteredResults.posts.length})
              </span>
              <div className="space-y-2">
                {filteredResults.posts.map((post) => (
                  <div
                    key={post.id}
                    onClick={() => {
                      onClose();
                      onSelectPost(post);
                    }}
                    className="p-3 rounded-xl hover:bg-[#F9F8F6] border border-transparent hover:border-[#E1E2DD] flex items-center justify-between cursor-pointer transition-colors"
                  >
                    <div className="pr-4">
                      <h4 className="text-xs sm:text-sm font-semibold text-[#171D18] line-clamp-1">
                        {post.title}
                      </h4>
                      <span className="text-[11px] text-[#7A817C]">{post.category} · {post.readTime}</span>
                    </div>
                    <FileText className="w-4 h-4 text-[#81958A] shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// -----------------------------------------------------------------------------
// 2. Service Detail Modal
// -----------------------------------------------------------------------------
interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenQuote: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onOpenQuote
}) => {
  const [selectedInstrument, setSelectedInstrument] = useState<EnvironmentalStudyInstrument>(
    ENVIRONMENTAL_INSTRUMENTS[1] // Default DIA
  );

  if (!service) return null;

  const isEstudiosAmbientales = service.id === 'estudios-ambientales' || service.number === '04' || service.title.toLowerCase().includes('estudios ambientales');

  return (
    <div className="fixed inset-0 z-50 bg-[#17251D]/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div 
        className={`bg-[#FFFFFF] rounded-3xl w-full ${isEstudiosAmbientales ? 'max-w-5xl' : 'max-w-3xl'} border border-[#E1E2DD] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col transition-all duration-300`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with image banner */}
        <div className="relative h-44 sm:h-52 bg-[#304338] shrink-0 overflow-hidden">
          {service.secondaryImage ? (
            <div className="grid grid-cols-2 w-full h-full">
              <div className="relative h-full overflow-hidden border-r border-white/20">
                <img
                  src={service.image}
                  alt={service.imageLabels?.primary || service.title}
                  className="w-full h-full object-cover opacity-50"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/estudios_ambientales_peru.jpg';
                  }}
                />
                <span className="absolute bottom-3 left-6 text-[11px] font-semibold text-white/90 bg-black/40 px-2.5 py-0.5 rounded-full backdrop-blur-xs border border-white/20">
                  {service.imageLabels?.primary || "Gallito de las Rocas"}
                </span>
              </div>
              <div className="relative h-full overflow-hidden">
                <img
                  src={service.secondaryImage}
                  alt={service.imageLabels?.secondary || service.title}
                  className="w-full h-full object-cover opacity-50"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/estudios_ambientales_peru.jpg';
                  }}
                />
                <span className="absolute bottom-3 right-6 text-[11px] font-semibold text-white/90 bg-black/40 px-2.5 py-0.5 rounded-full backdrop-blur-xs border border-white/20">
                  {service.imageLabels?.secondary || "Orquídea Peruana"}
                </span>
              </div>
            </div>
          ) : (
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover opacity-40"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/images/estudios_ambientales_peru.jpg';
              }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#17251D] via-black/40 to-black/20 pointer-events-none" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/40 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-xs font-mono tracking-widest text-[#E99A35] font-bold">
              LÍNEA {service.number}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* ========================================================================= */}
          {/* IF ESTUDIOS AMBIENTALES: Pipeline SEIA Interactivo Completo */}
          {/* ========================================================================= */}
          {isEstudiosAmbientales ? (
            <div className="space-y-6">
              {/* Marco SEIA Header Block */}
              <div className="bg-[#F9F8F6] rounded-3xl p-5 sm:p-8 border border-[#E1E2DD]">
                <div className="max-w-[780px] mx-auto text-center mb-8">
                  <h4 className="text-2xl sm:text-3xl font-bold text-[#171D18] tracking-tight mb-2">
                    De la evaluación ambiental a la viabilidad del proyecto
                  </h4>

                  <p className="text-xs sm:text-sm text-[#59635D] leading-relaxed">
                    Estructuramos y tramitamos el instrumento de gestión ambiental adecuado ante Senace y ministerios sectoriales (Minem, Produce, MTC, Minam, Vivienda).
                  </p>

                  <div className="mt-3.5 inline-flex items-center gap-2 bg-[#ECEBE7] text-[#536A5D] px-4 py-1.5 rounded-full text-xs">
                    <Info className="w-3.5 h-3.5 text-[#E99A35] shrink-0" />
                    <span>Nota técnica: La exigibilidad de cada instrumento depende de la clasificación de riesgo, sector y envergadura de cada proyecto.</span>
                  </div>
                </div>

                {/* Visual Pipeline Flow Buttons */}
                <div className="mb-6 overflow-x-auto pb-2">
                  <div className="flex items-center min-w-[700px] justify-between gap-2 px-1">
                    {ENVIRONMENTAL_INSTRUMENTS.map((inst, index) => {
                      const isSelected = selectedInstrument.id === inst.id;
                      return (
                        <React.Fragment key={inst.id}>
                          <button
                            type="button"
                            onClick={() => setSelectedInstrument(inst)}
                            className={`px-3.5 py-2.5 rounded-2xl border text-center transition-all cursor-pointer flex-1 ${
                              isSelected
                                ? 'bg-[#304338] text-white border-[#17251D] shadow-md scale-105'
                                : 'bg-[#FFFFFF] text-[#171D18] border-[#E1E2DD] hover:border-[#81958A]'
                            }`}
                          >
                            <span className="text-[10px] uppercase font-bold tracking-wider block opacity-75">
                              {inst.category}
                            </span>
                            <span className="text-xs sm:text-sm font-extrabold tracking-tight block mt-0.5">
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
                <div className="bg-[#FFFFFF] rounded-2xl p-5 sm:p-6 border border-[#E1E2DD] shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-3.5 border-b border-[#ECEBE7]">
                    <div>
                      <span className="text-[11px] font-bold text-[#E99A35] uppercase tracking-wider">
                        {selectedInstrument.level}
                      </span>
                      <h5 className="text-lg sm:text-xl font-bold text-[#171D18]">
                        {selectedInstrument.code} — {selectedInstrument.name}
                      </h5>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        onOpenQuote(`Estudio Ambiental: ${selectedInstrument.code} (${selectedInstrument.name})`);
                      }}
                      className="bg-[#E99A35] hover:bg-[#D98220] text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors shrink-0 cursor-pointer shadow-xs"
                    >
                      Cotizar este instrumento
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs sm:text-sm">
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
              </div>
            </div>
          ) : (
            <>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#81958A] mb-2">
                  Descripción General
                </h4>
                <p className="text-sm text-[#59635D] leading-relaxed">
                  {service.fullDescription}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#304338] mb-3">
                  Alcances y Componentes Específicos
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {service.subservices.map((sub, i) => (
                    <div key={i} className="bg-[#F9F8F6] p-3 rounded-xl border border-[#E1E2DD] flex items-start gap-2 text-xs sm:text-[13px] text-[#171D18]">
                      <CheckCircle2 className="w-4 h-4 text-[#6E8B72] shrink-0 mt-0.5" />
                      <span>{sub}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#304338] mb-3">
                  Equipamiento e Instrumentación Técnica
                </h4>
                <div className="space-y-2">
                  {service.parametersSample.map((param, i) => (
                    <div key={i} className="text-xs text-[#59635D] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E99A35]" />
                      <span>{param}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#ECEBE7] p-4 rounded-2xl">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#304338] block mb-1">
                  Marco Normativo de Referencia
                </span>
                <p className="text-xs text-[#59635D]">
                  {service.normativaReferencia}
                </p>
              </div>
            </>
          )}
        </div>

        {/* Footer actions */}
        <div className="p-4 sm:p-6 border-t border-[#ECEBE7] bg-[#F9F8F6] flex items-center justify-between shrink-0">
          <button
            onClick={onClose}
            className="text-xs font-semibold text-[#59635D] hover:text-[#171D18]"
          >
            Cerrar
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenQuote(service.title);
            }}
            className="bg-[#E99A35] hover:bg-[#D98220] text-white text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-full transition-colors flex items-center gap-2 shadow-md cursor-pointer"
          >
            <span>Solicitar cotización de este servicio</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

// -----------------------------------------------------------------------------
// 3. Sector Detail Modal
// -----------------------------------------------------------------------------
interface SectorDetailModalProps {
  sector: SectorItem | null;
  onClose: () => void;
  onOpenQuote: (sectorName: string) => void;
}

export const SectorDetailModal: React.FC<SectorDetailModalProps> = ({
  sector,
  onClose,
  onOpenQuote
}) => {
  if (!sector) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#17251D]/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="bg-[#FFFFFF] rounded-3xl w-full max-w-xl border border-[#E1E2DD] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-44 bg-[#17251D]">
          <img src={sector.image} alt={sector.name} className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#17251D] to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="absolute bottom-4 left-6 text-white">
            <span className="text-[11px] font-bold text-[#E99A35] uppercase tracking-wider">Sector Especializado</span>
            <h3 className="text-2xl font-bold text-white">{sector.name}</h3>
          </div>
        </div>

        <div className="p-6 space-y-4 text-xs sm:text-sm">
          <p className="text-[#59635D] leading-relaxed">
            {sector.description}
          </p>

          <div>
            <h4 className="font-bold text-[#171D18] mb-2">Servicios Clave en este Sector:</h4>
            <div className="space-y-1.5">
              {sector.keyServices.map((srv, idx) => (
                <div key={idx} className="flex items-center gap-2 text-[#304338]">
                  <CheckCircle2 className="w-4 h-4 text-[#6E8B72]" />
                  <span>{srv}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#F9F8F6] p-3.5 rounded-xl border border-[#E1E2DD]">
            <span className="font-bold text-[#304338] block text-xs mb-0.5">Reglamento Ambiental:</span>
            <p className="text-xs text-[#59635D]">{sector.regulations}</p>
          </div>
        </div>

        <div className="p-4 bg-[#F9F8F6] border-t border-[#ECEBE7] flex justify-end">
          <button
            onClick={() => {
              onClose();
              onOpenQuote(`Sector: ${sector.name}`);
            }}
            className="bg-[#304338] hover:bg-[#E99A35] text-white text-xs font-semibold px-6 py-2.5 rounded-full transition-colors cursor-pointer"
          >
            Cotizar para {sector.name}
          </button>
        </div>
      </div>
    </div>
  );
};

// -----------------------------------------------------------------------------
// 4. Blog Reader Modal
// -----------------------------------------------------------------------------
interface BlogReaderModalProps {
  post: BlogPost | null;
  onClose: () => void;
  onOpenQuote: (articleTitle?: string) => void;
}

export const BlogReaderModal: React.FC<BlogReaderModalProps> = ({ post, onClose, onOpenQuote }) => {
  if (!post) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#17251D]/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="bg-[#FFFFFF] rounded-3xl w-full max-w-2xl border border-[#E1E2DD] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b border-[#ECEBE7] flex items-center justify-between shrink-0">
          <div>
            <span className="text-xs font-bold text-[#E99A35] uppercase tracking-wider">
              {post.category}
            </span>
            <div className="text-xs text-[#7A817C] mt-0.5">{post.date} · {post.readTime}</div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#ECEBE7] hover:bg-[#E1E2DD] text-[#304338] flex items-center justify-center cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 sm:p-8 overflow-y-auto space-y-5">
          <h3 className="text-xl sm:text-2xl font-bold text-[#171D18] leading-tight">
            {post.title}
          </h3>

          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-[#ECEBE7]">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>

          <div className="space-y-4 text-sm text-[#59635D] leading-relaxed">
            {post.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <div className="pt-4 border-t border-[#ECEBE7] flex items-center justify-between">
            <div className="text-xs text-[#171D18]">
              <span className="text-[#81958A] block text-[10px] uppercase">Autor técnico</span>
              <strong>{post.author.name}</strong> · {post.author.role}
            </div>
          </div>
        </div>

        <div className="p-4 bg-[#F9F8F6] border-t border-[#ECEBE7] flex items-center justify-between shrink-0">
          <button onClick={onClose} className="text-xs text-[#7A817C]">Cerrar</button>
          <button
            onClick={() => {
              onClose();
              onOpenQuote(`Consulta sobre artículo: ${post.title}`);
            }}
            className="bg-[#304338] hover:bg-[#E99A35] text-white text-xs font-semibold px-5 py-2 rounded-full transition-colors cursor-pointer"
          >
            Consultar sobre este tema
          </button>
        </div>
      </div>
    </div>
  );
};

// -----------------------------------------------------------------------------
// 5. Standalone Quote Modal
// -----------------------------------------------------------------------------
interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  servicePreset?: string;
  QuoteFormComponent: React.ComponentType<{ initialService?: string; onSuccess?: () => void; isModal?: boolean }>;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  servicePreset,
  QuoteFormComponent
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#17251D]/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="bg-[#FFFFFF] rounded-3xl w-full max-w-2xl border border-[#E1E2DD] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5 border-b border-[#ECEBE7] flex items-center justify-between bg-[#F9F8F6] shrink-0">
          <div>
            <h3 className="text-lg font-bold text-[#171D18]">Solicitud de Cotización</h3>
            <span className="text-xs text-[#59635D]">Propuesta técnica y económica personalizada</span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#ECEBE7] hover:bg-[#E1E2DD] text-[#304338] flex items-center justify-center cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-5 sm:p-6 overflow-y-auto">
          <QuoteFormComponent initialService={servicePreset} isModal={true} onSuccess={() => {}} />
        </div>
      </div>
    </div>
  );
};
