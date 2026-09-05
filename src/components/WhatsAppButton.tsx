import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER, COMPANY_SHORT_NAME } from '../config';

export const WhatsAppButton: React.FC = () => {
  const message = encodeURIComponent(
    `Hola ${COMPANY_SHORT_NAME}, deseo solicitar información técnica y cotización sobre sus servicios ambientales.`
  );
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Tooltip on Desktop */}
      <span className="hidden sm:inline-block mr-3 bg-[#FFFFFF] text-[#171D18] text-xs font-semibold px-3.5 py-1.5 rounded-full border border-[#E1E2DD] shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        Contactar por WhatsApp
      </span>

      {/* Floating Button */}
      <a
        id="floating-whatsapp-btn"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar a INGENIA por WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_8px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_30px_rgba(37,211,102,0.55)] hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        <MessageCircle className="w-7 h-7 fill-white text-white" />
        
        {/* Subtle Online Pulse Ring */}
        <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-[#FFFFFF] border-2 border-[#25D366]"></span>
        </span>
      </a>
    </div>
  );
};
