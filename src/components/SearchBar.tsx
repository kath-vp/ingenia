import React, { useState } from 'react';
import { Search, MapPin, Calendar, Layers, ArrowRight } from 'lucide-react';

interface SearchBarProps {
  onSearchSubmit: (params: { servicio: string; region: string; plazo: string }) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearchSubmit }) => {
  const [servicio, setServicio] = useState('monitoreo-ambiental');
  const [region, setRegion] = useState('Arequipa');
  const [plazo, setPlazo] = useState('Inmediato (próximos 30 días)');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchSubmit({ servicio, region, plazo });
  };

  return (
    <div className="w-full max-w-[1100px] mx-auto -mt-10 sm:-mt-14 relative z-20 px-4">
      <div className="bg-[#FFFFFF] rounded-[24px] p-6 md:p-7 shadow-2xl border border-[#E1E2DD]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-[#ECEBE7]">
          <h2 className="text-xs font-bold text-[#304338] uppercase tracking-widest border-l-4 border-[#E99A35] pl-3">
            ¿Qué necesitas para tu proyecto?
          </h2>
          <span className="text-[11px] text-[#7A817C] font-normal hidden sm:inline">
            Orientación técnica inmediata adaptada a la normativa ambiental peruana
          </span>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-center">
          {/* Field 1: Service */}
          <div className="md:col-span-4 bg-[#F9F8F6] rounded-xl p-3 border border-[#E1E2DD]">
            <label htmlFor="search-service-select" className="block text-[9px] uppercase font-bold text-[#7A817C] mb-1 tracking-wider flex items-center gap-1.5">
              <Layers className="w-3 h-3 text-[#304338]" />
              Servicio requerido
            </label>
            <select
              id="search-service-select"
              value={servicio}
              onChange={(e) => setServicio(e.target.value)}
              className="w-full bg-transparent text-xs font-semibold text-[#171D18] focus:outline-none cursor-pointer"
            >
              <option value="monitoreo-ambiental">01. Monitoreo Ambiental (Aire, Agua, Suelo, Ruido)</option>
              <option value="monitoreo-biologico">02. Monitoreo Biológico (Flora y Fauna)</option>
              <option value="monitoreos-ocupacionales">03. Monitoreos Ocupacionales (Físicos, Químicos, Ergonomía)</option>
              <option value="estudios-ambientales">04. Estudios Ambientales (EVAP, DIA, EIA, ITS, Cierre)</option>
              <option value="asesoria-integral">Asesoría técnica integral / No estoy seguro</option>
            </select>
          </div>

          {/* Field 2: Region / Location */}
          <div className="md:col-span-3 bg-[#F9F8F6] rounded-xl p-3 border border-[#E1E2DD]">
            <label htmlFor="search-region-select" className="block text-[9px] uppercase font-bold text-[#7A817C] mb-1 tracking-wider flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-[#304338]" />
              Ubicación
            </label>
            <select
              id="search-region-select"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="w-full bg-transparent text-xs font-semibold text-[#171D18] focus:outline-none cursor-pointer"
            >
              <option value="Arequipa">Arequipa (Sede Sur)</option>
              <option value="Lima">Lima y Callao (Central)</option>
              <option value="Moquegua">Moquegua / Tacna</option>
              <option value="Ica">Ica / Costa Sur</option>
              <option value="Cusco">Cusco / Puno / Apurímac</option>
              <option value="Cajamarca">Cajamarca / Sierra Norte</option>
              <option value="Áncash">Áncash / La Libertad</option>
              <option value="Selva">Amazonía / Selva Central</option>
              <option value="Nacional">Cobertura a nivel nacional</option>
            </select>
          </div>

          {/* Field 3: Timeline */}
          <div className="md:col-span-3 bg-[#F9F8F6] rounded-xl p-3 border border-[#E1E2DD]">
            <label htmlFor="search-timeline-select" className="block text-[9px] uppercase font-bold text-[#7A817C] mb-1 tracking-wider flex items-center gap-1.5">
              <Calendar className="w-3 h-3 text-[#304338]" />
              Plazo estimado
            </label>
            <select
              id="search-timeline-select"
              value={plazo}
              onChange={(e) => setPlazo(e.target.value)}
              className="w-full bg-transparent text-xs font-semibold text-[#171D18] focus:outline-none cursor-pointer"
            >
              <option value="Inmediato (próximos 30 días)">Inmediato (próximos 30 días)</option>
              <option value="En 1 a 3 meses">En 1 a 3 meses</option>
              <option value="Planificación anual">Planificación anual / Campaña</option>
              <option value="Licitación / Cotización presupuestal">Licitación / Cotización formal</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex items-center">
            <button
              id="search-submit-btn"
              type="submit"
              className="w-full bg-[#304338] hover:bg-[#17251D] text-white py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Encontrar solución</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
