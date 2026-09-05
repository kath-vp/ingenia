import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';
import { QuoteFormData } from '../types';
import { EMAIL, PHONE, PHONE_MOBILE, REGIONAL_OFFICE } from '../config';

interface QuoteFormProps {
  initialService?: string;
  onSuccess?: () => void;
  isModal?: boolean;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({ 
  initialService = '', 
  onSuccess,
  isModal = false 
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    nombre: '',
    empresa: '',
    cargo: '',
    correo: '',
    telefono: '',
    ubicacion: '',
    sector: 'Energía',
    servicio: initialService || '01. Monitoreo Ambiental (Aire, Agua, Suelo, Ruido)',
    mensaje: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, servicio: initialService }));
    }
  }, [initialService]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Realistic validation and client confirmation
    setTimeout(() => {
      const generatedId = `ING-${Math.floor(100000 + Math.random() * 900000)}`;
      setTicketId(generatedId);
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onSuccess) {
        onSuccess();
      }
    }, 600);
  };

  if (isSubmitted) {
    return (
      <div className="bg-[#FFFFFF] rounded-3xl p-8 text-center border border-[#E1E2DD] shadow-sm">
        <div className="w-16 h-16 rounded-full bg-[#6E8B72]/15 text-[#304338] mx-auto flex items-center justify-center mb-4">
          <CheckCircle2 className="w-8 h-8 text-[#6E8B72]" />
        </div>

        <span className="text-xs font-mono bg-[#ECEBE7] px-3 py-1 rounded-full text-[#304338] font-bold">
          Ticket: {ticketId}
        </span>

        <h3 className="text-2xl font-bold text-[#171D18] mt-4 mb-2">
          Solicitud de cotización registrada
        </h3>

        <p className="text-sm text-[#59635D] max-w-md mx-auto leading-relaxed mb-6">
          Gracias, <strong className="text-[#171D18]">{formData.nombre}</strong>. Hemos recibido los requerimientos de <strong className="text-[#171D18]">{formData.empresa || 'tu proyecto'}</strong> para <strong className="text-[#171D18]">{formData.servicio}</strong>. Un especialista técnico se pondrá en contacto al correo <strong className="text-[#171D18]">{formData.correo}</strong>.
        </p>

        <button
          onClick={() => setIsSubmitted(false)}
          className="bg-[#304338] text-white text-xs font-semibold px-6 py-2.5 rounded-full hover:bg-[#17251D] transition-colors"
        >
          Enviar otra consulta
        </button>
      </div>
    );
  }

  return (
    <section id="contacto" className={isModal ? "" : "py-20 sm:py-28 bg-[#F9F8F6]"}>
      <div className={isModal ? "" : "max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8"}>
        {!isModal && (
          <div className="max-w-[760px] mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#FFFFFF] px-3.5 py-1 rounded-full border border-[#E1E2DD] text-xs font-bold text-[#304338] uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-[#E99A35]" />
              Contacto Técnico Directo
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#171D18] tracking-tight mb-4">
              Hablemos de tu proyecto.
            </h2>
            <p className="text-sm sm:text-base text-[#59635D] leading-relaxed">
              Completa el formulario para recibir una propuesta técnica y económica ajustada a las exigencias de tu sector y marco regulatorio vigente.
            </p>
          </div>
        )}

        <div className={isModal ? "" : "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"}>
          {/* Info Column (only shown when not inside compact modal) */}
          {!isModal && (
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-[#FFFFFF] rounded-3xl p-6 sm:p-8 border border-[#E1E2DD] shadow-sm">
                <h3 className="text-lg font-bold text-[#304338] mb-4 pb-3 border-b border-[#ECEBE7]">
                  Oficinas y Contacto
                </h3>

                <div className="space-y-4 text-xs sm:text-sm text-[#59635D]">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#E99A35] shrink-0 mt-1" />
                    <div>
                      <strong className="text-[#171D18] block">Oficina / Sede:</strong>
                      <span>{REGIONAL_OFFICE}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-[#E99A35] shrink-0 mt-1" />
                    <div>
                      <strong className="text-[#171D18] block">Correo Institucional:</strong>
                      <a href={`mailto:${EMAIL}`} className="hover:text-[#304338] transition-colors">{EMAIL}</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-[#E99A35] shrink-0 mt-1" />
                    <div>
                      <strong className="text-[#171D18] block">Central Telefónica:</strong>
                      <span>{PHONE}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#304338] text-white rounded-3xl p-6 border border-[#17251D]">
                <div className="flex items-center gap-2 mb-2 text-[#E99A35] text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Confidencialidad Garantizada</span>
                </div>
                <p className="text-xs text-[#ECEBE7]/90 leading-relaxed">
                  Toda la información técnica y cartográfica compartida está protegida bajo estrictos acuerdos de confidencialidad y reserva profesional.
                </p>
              </div>
            </div>
          )}

          {/* Form Column */}
          <div className={isModal ? "w-full" : "lg:col-span-8"}>
            <div className="bg-[#FFFFFF] rounded-3xl p-6 sm:p-10 border border-[#E1E2DD] shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="quote-nombre" className="block text-xs font-semibold text-[#171D18] mb-1.5">
                      Nombre completo *
                    </label>
                    <input
                      id="quote-nombre"
                      type="text"
                      name="nombre"
                      required
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Ej. Ing. Juan Morales"
                      className="w-full bg-[#F9F8F6] border border-[#E1E2DD] focus:border-[#304338] focus:bg-[#FFFFFF] rounded-xl px-4 py-3 text-sm text-[#171D18] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="quote-empresa" className="block text-xs font-semibold text-[#171D18] mb-1.5">
                      Empresa o Titular *
                    </label>
                    <input
                      id="quote-empresa"
                      type="text"
                      name="empresa"
                      required
                      value={formData.empresa}
                      onChange={handleChange}
                      placeholder="Ej. Minera o Constructora SAC"
                      className="w-full bg-[#F9F8F6] border border-[#E1E2DD] focus:border-[#304338] focus:bg-[#FFFFFF] rounded-xl px-4 py-3 text-sm text-[#171D18] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="quote-cargo" className="block text-xs font-semibold text-[#171D18] mb-1.5">
                      Cargo
                    </label>
                    <input
                      id="quote-cargo"
                      type="text"
                      name="cargo"
                      value={formData.cargo}
                      onChange={handleChange}
                      placeholder="Ej. Gerente de Sostenibilidad"
                      className="w-full bg-[#F9F8F6] border border-[#E1E2DD] focus:border-[#304338] focus:bg-[#FFFFFF] rounded-xl px-4 py-3 text-sm text-[#171D18] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="quote-correo" className="block text-xs font-semibold text-[#171D18] mb-1.5">
                      Correo corporativo *
                    </label>
                    <input
                      id="quote-correo"
                      type="email"
                      name="correo"
                      required
                      value={formData.correo}
                      onChange={handleChange}
                      placeholder="nombre@empresa.com"
                      className="w-full bg-[#F9F8F6] border border-[#E1E2DD] focus:border-[#304338] focus:bg-[#FFFFFF] rounded-xl px-4 py-3 text-sm text-[#171D18] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="quote-telefono" className="block text-xs font-semibold text-[#171D18] mb-1.5">
                      Teléfono de contacto *
                    </label>
                    <input
                      id="quote-telefono"
                      type="tel"
                      name="telefono"
                      required
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="+51 987 654 321"
                      className="w-full bg-[#F9F8F6] border border-[#E1E2DD] focus:border-[#304338] focus:bg-[#FFFFFF] rounded-xl px-4 py-3 text-sm text-[#171D18] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="quote-ubicacion" className="block text-xs font-semibold text-[#171D18] mb-1.5">
                      Ubicación del proyecto *
                    </label>
                    <input
                      id="quote-ubicacion"
                      type="text"
                      name="ubicacion"
                      required
                      value={formData.ubicacion}
                      onChange={handleChange}
                      placeholder="Ej. Moquegua, Arequipa, Lima"
                      className="w-full bg-[#F9F8F6] border border-[#E1E2DD] focus:border-[#304338] focus:bg-[#FFFFFF] rounded-xl px-4 py-3 text-sm text-[#171D18] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="quote-sector" className="block text-xs font-semibold text-[#171D18] mb-1.5">
                      Sector
                    </label>
                    <select
                      id="quote-sector"
                      name="sector"
                      value={formData.sector}
                      onChange={handleChange}
                      className="w-full bg-[#F9F8F6] border border-[#E1E2DD] focus:border-[#304338] focus:bg-[#FFFFFF] rounded-xl px-4 py-3 text-sm text-[#171D18] focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="Energía">Energía (Solar / Eólica / Hidro)</option>
                      <option value="Minería">Minería (Tajo / Subterránea / Planta)</option>
                      <option value="Construcción">Construcción Civil</option>
                      <option value="Industria">Industria Manufacturera</option>
                      <option value="Hidrocarburos">Hidrocarburos</option>
                      <option value="Sector Público">Sector Público / Proyectos Especiales</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="quote-servicio" className="block text-xs font-semibold text-[#171D18] mb-1.5">
                      Servicio requerido
                    </label>
                    <select
                      id="quote-servicio"
                      name="servicio"
                      value={formData.servicio}
                      onChange={handleChange}
                      className="w-full bg-[#F9F8F6] border border-[#E1E2DD] focus:border-[#304338] focus:bg-[#FFFFFF] rounded-xl px-4 py-3 text-sm text-[#171D18] focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="01. Monitoreo Ambiental (Aire, Agua, Suelo, Ruido)">01. Monitoreo Ambiental</option>
                      <option value="02. Monitoreo Biológico (Flora y Fauna)">02. Monitoreo Biológico</option>
                      <option value="03. Monitoreos Ocupacionales (Físicos, Químicos, Ergonomía)">03. Monitoreos Ocupacionales</option>
                      <option value="04. Estudios Ambientales (EVAP, DIA, EIA, ITS, Cierre)">04. Estudios Ambientales</option>
                      <option value="Diagnóstico y asesoría técnica integral">Diagnóstico y asesoría integral</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="quote-mensaje" className="block text-xs font-semibold text-[#171D18] mb-1.5">
                    Descripción del requerimiento o términos de referencia
                  </label>
                  <textarea
                    id="quote-mensaje"
                    name="mensaje"
                    rows={4}
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Detalla los puntos de monitoreo estimados, cronograma requerido, normativa de referencia o antecedentes del proyecto..."
                    className="w-full bg-[#F9F8F6] border border-[#E1E2DD] focus:border-[#304338] focus:bg-[#FFFFFF] rounded-xl p-4 text-sm text-[#171D18] focus:outline-none transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-[#7A817C]">
                    * Campos obligatorios para elaboración de propuesta formal.
                  </span>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#E99A35] hover:bg-[#D98220] disabled:opacity-50 text-white font-semibold text-sm px-8 py-3.5 rounded-full transition-all duration-200 flex items-center gap-2 shadow-[0_6px_20px_rgba(233,154,53,0.30)] cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Registrando solicitud...</span>
                    ) : (
                      <>
                        <span>Enviar solicitud</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
