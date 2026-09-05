import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Search, Menu, X, MessageCircle, Phone, ArrowUpRight } from 'lucide-react';
import { WHATSAPP_NUMBER, PHONE_MOBILE } from '../config';

interface HeaderProps {
  onOpenSearch: () => void;
  onOpenQuote: (servicePreset?: string) => void;
  onOpenServiceFinder: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  onOpenSearch, 
  onOpenQuote,
  onOpenServiceFinder 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Sectores', href: '#sectores' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <>
      <header
        id="main-header"
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FFFFFF]/90 backdrop-blur-md shadow-sm border-b border-[#E1E2DD] py-3.5'
            : 'bg-[#F9F8F6]/85 backdrop-blur-md py-4 border-b border-[#E1E2DD]'
        }`}
      >
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#304338] rounded-lg">
            <Logo />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Navegación principal">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#59635D] hover:text-[#304338] transition-colors relative py-1 focus:outline-none focus-visible:text-[#304338]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions on the Right */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Search Trigger */}
            <button
              id="header-search-btn"
              onClick={onOpenSearch}
              aria-label="Buscar servicios o normativa"
              className="w-10 h-10 rounded-full border border-[#E1E2DD] bg-[#FFFFFF] flex items-center justify-center text-[#59635D] hover:text-[#304338] hover:border-[#81958A] hover:bg-[#F9F8F6] transition-all cursor-pointer shadow-xs focus:outline-none focus:ring-2 focus:ring-[#304338]"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Asistente Finder Shortcut */}
            <button
              onClick={onOpenServiceFinder}
              className="text-xs font-semibold px-3 py-2 text-[#304338] hover:text-[#E99A35] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>Encuentra tu servicio</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Quote CTA Button */}
            <button
              id="header-quote-btn"
              onClick={() => onOpenQuote()}
              className="bg-[#E99A35] hover:bg-[#D98220] text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-[#304338]/10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#E99A35]"
            >
              Solicitar cotización
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Search Button Mobile */}
            <button
              onClick={onOpenSearch}
              aria-label="Buscar"
              className="w-9 h-9 rounded-full border border-[#E1E2DD] bg-[#FFFFFF] flex items-center justify-center text-[#59635D]"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* WhatsApp Link Mobile */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20INGENIA,%20deseo%20información%20sobre%20sus%20servicios%20ambientales.`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contactar por WhatsApp"
              className="w-9 h-9 rounded-full bg-[#304338] text-white flex items-center justify-center"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              className="w-10 h-10 rounded-full border border-[#E1E2DD] bg-[#FFFFFF] flex items-center justify-center text-[#304338] hover:bg-[#ECEBE7] transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-[#17251D]/60 backdrop-blur-xs lg:hidden transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div 
            className="fixed top-[65px] right-0 bottom-0 w-[85%] max-w-[340px] bg-[#F9F8F6] border-l border-[#E1E2DD] p-6 flex flex-col justify-between shadow-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#7A817C] mb-4">
                Navegación
              </div>
              <nav className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-base font-medium text-[#171D18] hover:text-[#304338] hover:translate-x-1 transition-all py-1.5 border-b border-[#E1E2DD]/50"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="mt-6 pt-4 border-t border-[#E1E2DD]">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenServiceFinder();
                  }}
                  className="w-full text-left text-sm font-semibold text-[#304338] py-2 flex items-center justify-between"
                >
                  <span>Asistente: Encuentra tu servicio</span>
                  <ArrowUpRight className="w-4 h-4 text-[#E99A35]" />
                </button>
              </div>
            </div>

            <div className="space-y-3 pt-6 border-t border-[#E1E2DD]">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full bg-[#E99A35] text-white font-semibold py-3 rounded-full text-center text-sm shadow-md"
              >
                Solicitar cotización
              </button>

              <a
                href={`tel:${PHONE_MOBILE}`}
                className="w-full bg-[#FFFFFF] border border-[#304338] text-[#304338] font-semibold py-2.5 rounded-full text-center text-xs flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                Llamar a oficina central
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
