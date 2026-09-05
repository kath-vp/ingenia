import React, { useState, useRef } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SearchBar } from './components/SearchBar';
import { TrustCards } from './components/TrustCards';
import { ServiceCard } from './components/ServiceCard';
import { ProcessTimeline } from './components/ProcessTimeline';
import { SectorCard } from './components/SectorCard';
import { ProjectCard } from './components/ProjectCard';
import { SpotlightSections } from './sections/SpotlightSections';
import { ServiceFinder } from './components/ServiceFinder';
import { BlogCard } from './components/BlogCard';
import { CTASection } from './components/CTASection';
import { QuoteForm } from './components/QuoteForm';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Footer } from './components/Footer';
import { 
  SearchModal, 
  ServiceDetailModal, 
  SectorDetailModal, 
  BlogReaderModal, 
  QuoteModal 
} from './components/Modals';

import { 
  SERVICES_DATA, 
  SECTORS_DATA, 
  PROJECTS_DATA, 
  BLOG_POSTS 
} from './data/environmentalData';
import { ServiceItem, SectorItem, ProjectItem, BlogPost } from './types';
import { Layers, Compass, BookOpen, Filter } from 'lucide-react';
import { TopographicCurves } from './components/Decorations';

export default function App() {
  // Modal & Interactive states
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteServicePreset, setQuoteServicePreset] = useState<string>('');
  
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedSector, setSelectedSector] = useState<SectorItem | null>(null);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // Portfolio filter
  const [projectSectorFilter, setProjectSectorFilter] = useState<string>('Todos');

  // Blog category filter
  const [blogCategoryFilter, setBlogCategoryFilter] = useState<string>('Todos');

  // Service Finder prefilled need
  const [serviceFinderNeed, setServiceFinderNeed] = useState<string>('');

  const servicesRef = useRef<HTMLElement>(null);
  const serviceFinderRef = useRef<HTMLDivElement>(null);

  const handleOpenQuote = (servicePreset?: string) => {
    setQuoteServicePreset(servicePreset || '');
    setIsQuoteOpen(true);
  };

  const handleScrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenServiceFinder = (needType?: string) => {
    if (needType) {
      setServiceFinderNeed(needType);
    }
    serviceFinderRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSearchSubmit = (params: { servicio: string; region: string; plazo: string }) => {
    // Map service to finder need
    let need = 'monitorear-componente';
    if (params.servicio === 'monitoreo-biologico') need = 'evaluar-biodiversidad';
    if (params.servicio === 'monitoreos-ocupacionales') need = 'evaluar-ocupacional';
    if (params.servicio === 'estudios-ambientales') need = 'desarrollar-instrumento';
    
    setServiceFinderNeed(need);
    serviceFinderRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Filtered projects
  const filteredProjects = projectSectorFilter === 'Todos'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.sector === projectSectorFilter);

  // Filtered blog posts
  const filteredBlogPosts = blogCategoryFilter === 'Todos'
    ? BLOG_POSTS
    : BLOG_POSTS.filter(p => p.category === blogCategoryFilter);

  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#171D18] flex flex-col selection:bg-[#304338] selection:text-white">
      {/* Top Header */}
      <Header
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenQuote={handleOpenQuote}
        onOpenServiceFinder={() => handleOpenServiceFinder()}
      />

      <main className="flex-1">
        {/* 1. Hero */}
        <Hero
          onOpenQuote={() => handleOpenQuote()}
          onScrollToServices={handleScrollToServices}
        />

        {/* 2. Interactive Search Bar */}
        <SearchBar onSearchSubmit={handleSearchSubmit} />

        {/* 3. Bloque de Confianza (Trust indicators) */}
        <TrustCards />

        {/* 4. Main Services Section */}
        <section id="servicios" ref={servicesRef} className="py-20 sm:py-28 bg-[#F9F8F6] relative">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-[760px] mx-auto text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-[#FFFFFF] px-3.5 py-1 rounded-full border border-[#E1E2DD] text-xs font-bold text-[#304338] uppercase tracking-wider mb-4 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#E99A35]" />
                Líneas de Especialización
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#171D18] tracking-tight mb-4">
                Soluciones ambientales para cada etapa de tu proyecto
              </h2>

              <p className="text-sm sm:text-base text-[#59635D] leading-relaxed">
                Cuatro divisiones especializadas que integran rigor científico, instrumental de campo calibrado y estricta validez jurídica ante las autoridades fiscalizadoras.
              </p>
            </div>

            {/* 4 Big Service Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SERVICES_DATA.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  onSelectService={(s) => setSelectedService(s)}
                  onQuickQuote={(title) => handleOpenQuote(title)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 5. Process Timeline: "Del dato a la decisión" */}
        <ProcessTimeline />

        {/* 6. Spotlight Deep-Dive Sections (01 Monitoreo Ambiental, 02 Biológico, 03 Ocupacional, 04 Estudios) */}
        <div className="py-20 sm:py-28 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <SpotlightSections onOpenQuote={handleOpenQuote} />
        </div>

        {/* 7. Sectores Section */}
        <section id="sectores" className="py-20 sm:py-28 bg-[#ECEBE7]/60 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-30">
            <TopographicCurves className="w-full h-full text-[#81958A]/30" />
          </div>

          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-[760px] mx-auto text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-[#FFFFFF] px-3.5 py-1 rounded-full border border-[#E1E2DD] text-xs font-bold text-[#304338] uppercase tracking-wider mb-4 shadow-2xs">
                <Compass className="w-3.5 h-3.5 text-[#E99A35]" />
                Experiencia Multisectorial
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#171D18] tracking-tight mb-4">
                Soluciones para diferentes sectores
              </h2>

              <p className="text-sm sm:text-base text-[#59635D] leading-relaxed">
                Cada industria posee desafíos técnicos y regulaciones particulares. Diseñamos planes adaptados al marco normativo de cada autoridad competente.
              </p>
            </div>

            {/* 8 Sectors Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
              {SECTORS_DATA.map((sector) => (
                <SectorCard
                  key={sector.id}
                  sector={sector}
                  onSelectSector={(sec) => setSelectedSector(sec)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 8. Proyectos / Portfolio */}
        <section id="proyectos" className="py-20 sm:py-28 bg-[#F9F8F6]">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div className="max-w-[620px]">
                <div className="inline-flex items-center gap-2 bg-[#FFFFFF] px-3.5 py-1 rounded-full border border-[#E1E2DD] text-xs font-bold text-[#304338] uppercase tracking-wider mb-3 shadow-2xs">
                  <Layers className="w-3.5 h-3.5 text-[#E99A35]" />
                  Portafolio Técnico
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#171D18] tracking-tight">
                  Proyectos que generan impacto
                </h2>
                <p className="text-sm text-[#59635D] mt-2 leading-relaxed">
                  Experiencias tipo desarrolladas con criterios de sostenibilidad, trazabilidad y cumplimiento ambiental integral.
                </p>
              </div>

              {/* Filter Tabs */}
              <div className="flex flex-wrap items-center gap-2 bg-[#ECEBE7] p-1.5 rounded-full self-start md:self-auto">
                {['Todos', 'Energía', 'Minería', 'Infraestructura', 'Industria'].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setProjectSectorFilter(filter)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                      projectSectorFilter === filter
                        ? 'bg-[#304338] text-white shadow-xs'
                        : 'text-[#59635D] hover:text-[#171D18]'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpenQuote={handleOpenQuote}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 9. Asistente Interactivo: "Encuentra tu servicio" */}
        <section id="asistente" ref={serviceFinderRef} className="py-20 sm:py-28 bg-[#ECEBE7]/50">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <ServiceFinder
              onOpenQuote={handleOpenQuote}
              initialNeed={serviceFinderNeed}
            />
          </div>
        </section>

        {/* 10. Blog / Conocimiento Técnico */}
        <section id="blog" className="py-20 sm:py-28 bg-[#F9F8F6]">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div className="max-w-[620px]">
                <div className="inline-flex items-center gap-2 bg-[#FFFFFF] px-3.5 py-1 rounded-full border border-[#E1E2DD] text-xs font-bold text-[#304338] uppercase tracking-wider mb-3 shadow-2xs">
                  <BookOpen className="w-3.5 h-3.5 text-[#E99A35]" />
                  Artículos & Criterios
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#171D18] tracking-tight">
                  Conocimiento que ayuda a decidir.
                </h2>
                <p className="text-sm text-[#59635D] mt-2 leading-relaxed">
                  Análisis técnicos sobre normativa ambiental peruana, avances en instrumentación científica y mejores prácticas operativas.
                </p>
              </div>

              {/* Categories Filter */}
              <div className="flex flex-wrap items-center gap-2">
                {['Todos', 'Normativa', 'Estudios Ambientales', 'Monitoreo Biológico', 'Seguridad y Salud Ocupacional'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setBlogCategoryFilter(cat)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
                      blogCategoryFilter === cat
                        ? 'bg-[#304338] text-white border-[#304338]'
                        : 'bg-white text-[#59635D] border-[#E1E2DD] hover:border-[#81958A]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredBlogPosts.map((post) => (
                <BlogCard
                  key={post.id}
                  post={post}
                  onReadPost={(p) => setSelectedPost(p)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 11. CTA Final */}
        <CTASection onOpenQuote={() => handleOpenQuote()} />

        {/* 12. Contacto / Cotización Formulario */}
        <QuoteForm />
      </main>

      {/* Floating WhatsApp Action */}
      <WhatsAppButton />

      {/* Minimalist Footer */}
      <Footer onOpenQuote={handleOpenQuote} />

      {/* Modals */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectService={(s) => setSelectedService(s)}
        onSelectSector={(sec) => setSelectedSector(sec)}
        onSelectPost={(p) => setSelectedPost(p)}
        onOpenQuote={handleOpenQuote}
      />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenQuote={handleOpenQuote}
      />

      <SectorDetailModal
        sector={selectedSector}
        onClose={() => setSelectedSector(null)}
        onOpenQuote={handleOpenQuote}
      />

      <BlogReaderModal
        post={selectedPost}
        onClose={() => setSelectedPost(null)}
        onOpenQuote={handleOpenQuote}
      />

      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        servicePreset={quoteServicePreset}
        QuoteFormComponent={QuoteForm}
      />
    </div>
  );
}
