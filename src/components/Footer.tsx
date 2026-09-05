import React from 'react';
import { Logo } from './Logo';
import { MistiVolcanoSilhouette } from './Decorations';
import { 
  LINKEDIN_URL, 
  INSTAGRAM_URL, 
  FACEBOOK_URL, 
  YOUTUBE_URL, 
  EMAIL, 
  PHONE, 
  REGIONAL_OFFICE,
  COMPANY_NAME 
} from '../config';
import { Linkedin, Instagram, Facebook, Youtube, Mail, Phone as PhoneIcon, MapPin, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenQuote: (servicePreset?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#17251D] text-[#ECEBE7] pt-16 sm:pt-20 pb-12 border-t border-[#304338] relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="on-green" />
            
            <p className="text-sm text-[#81958A] leading-relaxed max-w-sm pt-2">
              Soluciones ambientales basadas en conocimiento, ingeniería e innovación para proyectos responsables en todo el Perú.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de INGENIA"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#E99A35] text-white flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de INGENIA"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#E99A35] text-white flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook de INGENIA"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#E99A35] text-white flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube de INGENIA"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#E99A35] text-white flex items-center justify-center transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2">
              <MistiVolcanoSilhouette className="w-24 h-10 text-[#81958A]/30" />
            </div>
          </div>

          {/* Col 2: Servicios */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Servicios
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#81958A]">
              <li>
                <a href="#servicios" className="hover:text-white transition-colors block">
                  01. Monitoreo Ambiental (Aire, Agua, Suelo, Ruido)
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors block">
                  02. Monitoreo Biológico (Flora y Fauna)
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors block">
                  03. Monitoreos Ocupacionales & Ergonomía
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors block">
                  04. Estudios Ambientales (EVAP, DIA, EIA, ITS)
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors block">
                  Planes de Cierre y Remediación
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Sectores & Recursos */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Sectores
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#81958A]">
              <li><a href="#sectores" className="hover:text-white transition-colors block">Energía & Renovables</a></li>
              <li><a href="#sectores" className="hover:text-white transition-colors block">Minería & Exploración</a></li>
              <li><a href="#sectores" className="hover:text-white transition-colors block">Construcción & Obras</a></li>
              <li><a href="#sectores" className="hover:text-white transition-colors block">Industria & Manufactura</a></li>
              <li><a href="#sectores" className="hover:text-white transition-colors block">Hidrocarburos</a></li>
              <li><a href="#sectores" className="hover:text-white transition-colors block">Sector Público</a></li>
            </ul>
          </div>

          {/* Col 4: Contacto */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Contacto
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-[#81958A]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E99A35] shrink-0 mt-0.5" />
                <span>{REGIONAL_OFFICE}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#E99A35] shrink-0" />
                <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors">{EMAIL}</a>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon className="w-4 h-4 text-[#E99A35] shrink-0" />
                <span>{PHONE}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenQuote()}
                className="w-full bg-[#E99A35] hover:bg-[#D98220] text-white text-xs font-bold py-2.5 px-4 rounded-full transition-colors cursor-pointer"
              >
                Solicitar cotización
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright and back-to-top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#81958A]">
          <p>
            <span>© {new Date().getFullYear()} {COMPANY_NAME}. Todos los derechos reservados.</span>
            <span className="block text-[#81958A] mt-1 font-medium">Casa Gryphos - KVP</span>
          </p>
          
          <div className="flex items-center gap-6">
            <span>Cumplimiento normativo SEIA · SENACE · OEFA · SUNAFIL</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
              aria-label="Volver arriba"
            >
              <span>Arriba</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
