import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark' | 'on-green';
  className?: string;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ 
  variant = 'dark', 
  className = "",
  showTagline = false,
  size = 'md'
}) => {
  const isLight = variant === 'on-green' || variant === 'light';

  // Scale dimensions based on size
  const iconHeight = size === 'sm' ? 36 : size === 'lg' ? 48 : 42;
  const iconWidth = Math.round(iconHeight * (100 / 110));

  const darkColor = isLight ? '#FFFFFF' : '#0E382A';
  const greenColor = isLight ? '#00D17D' : '#008A52';
  const lineColor = isLight ? 'rgba(255, 255, 255, 0.22)' : '#D5DED9';

  return (
    <div className={`inline-flex items-center gap-3.5 select-none ${className}`}>
      {/* Official Isotipo */}
      <div className="shrink-0 flex items-center justify-center">
        <svg 
          viewBox="0 0 105 110" 
          width={iconWidth} 
          height={iconHeight} 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 hover:scale-105"
        >
          {/* Columna angular izquierda (Ingeniería) */}
          <polygon 
            points="14,24 46,8 46,86 14,86" 
            fill={darkColor} 
          />
          
          {/* Elemento orgánico curvo con muesca circular (Medio Ambiente) */}
          <path 
            d="M 46 28 C 76 28, 96 42, 96 57 C 96 72, 76 86, 46 86 L 46 68 A 12 12 0 0 0 46 44 L 46 28 Z" 
            fill={greenColor} 
          />
          
          {/* Punto de precisión técnico */}
          <circle cx="30" cy="98" r="5.5" fill={greenColor} />
          
          {/* Barra horizontal de base técnica */}
          <rect x="52" y="95.25" width="36" height="5.5" rx="2.75" fill={greenColor} />
        </svg>
      </div>

      {/* Official Logotipo / Text */}
      <div className="flex flex-col text-left">
        <span 
          className={`font-black tracking-tight leading-none ${
            size === 'sm' ? 'text-lg sm:text-xl' : size === 'lg' ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
          } ${isLight ? 'text-white' : 'text-[#0E382A]'}`}
          style={{ letterSpacing: '0.02em' }}
        >
          INGENIA
        </span>
        
        <span 
          className={`font-extrabold uppercase leading-none mt-1 ${
            size === 'sm' ? 'text-[8px] sm:text-[9px]' : size === 'lg' ? 'text-[11px] sm:text-xs' : 'text-[9px] sm:text-[10.5px]'
          } ${isLight ? 'text-[#00D17D]' : 'text-[#008A52]'}`}
          style={{ letterSpacing: '0.28em' }}
        >
          CONSULTORES AMBIENTALES
        </span>

        {/* Fine bottom rule line as in official logo */}
        <div 
          className="h-[1.5px] w-full mt-1.5 transition-colors" 
          style={{ backgroundColor: lineColor }} 
        />

        {showTagline && (
          <span className={`text-[9px] font-medium tracking-normal mt-1 ${isLight ? 'text-white/60' : 'text-[#7A817C]'}`}>
            Ingeniería · Innovación · Soluciones Ambientales
          </span>
        )}
      </div>
    </div>
  );
};

