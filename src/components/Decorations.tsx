import React from 'react';

/**
 * Clean stylized minimalist silhouette of El Misti Volcano (Arequipa / Peruvian Andes).
 * Used as an elegant brand watermark and graphic signature.
 */
export const MistiVolcanoSilhouette: React.FC<{ className?: string; strokeWidth?: number }> = ({ 
  className = "w-24 h-12 text-[#304338]/20",
  strokeWidth = 1.5
}) => {
  return (
    <svg 
      viewBox="0 0 160 50" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      aria-hidden="true"
    >
      {/* Symmetrical conical stratovolcano silhouette of El Misti */}
      <path 
        d="M 5 44 C 35 43, 58 38, 72 16 C 75 11, 77 9, 80 9 C 83 9, 85 11, 88 16 C 102 38, 125 43, 155 44" 
        stroke="currentColor" 
        strokeWidth={strokeWidth} 
        strokeLinecap="round" 
      />
      {/* Crater rim & summit line */}
      <path 
        d="M 77 10 L 83 10" 
        stroke="currentColor" 
        strokeWidth={strokeWidth} 
        strokeLinecap="round" 
      />
      {/* Subtle topographic elevation contour */}
      <path 
        d="M 28 44 C 48 43, 62 39, 73 26 C 76 22, 80 20, 84 22 C 95 35, 112 43, 132 44" 
        stroke="currentColor" 
        strokeWidth={strokeWidth * 0.7} 
        strokeDasharray="2 3"
        strokeLinecap="round"
        opacity={0.6}
      />
    </svg>
  );
};

/**
 * Topographic contour lines - scientific and subtle
 */
export const TopographicCurves: React.FC<{ className?: string }> = ({ 
  className = "w-full h-full text-[#304338]/5" 
}) => {
  return (
    <svg 
      viewBox="0 0 800 400" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      aria-hidden="true"
    >
      <path 
        d="M -50 180 C 150 120, 280 260, 480 160 C 680 60, 750 200, 850 140" 
        stroke="currentColor" 
        strokeWidth="1.2" 
      />
      <path 
        d="M -50 240 C 180 180, 310 320, 520 220 C 700 120, 780 260, 860 200" 
        stroke="currentColor" 
        strokeWidth="1.2" 
      />
      <path 
        d="M -50 300 C 200 240, 340 380, 560 280 C 720 180, 810 320, 870 260" 
        stroke="currentColor" 
        strokeWidth="1" 
      />
      <path 
        d="M -50 120 C 120 60, 250 200, 450 100 C 650 0, 720 140, 850 80" 
        stroke="currentColor" 
        strokeWidth="0.8" 
        strokeDasharray="4 4"
      />
    </svg>
  );
};

/**
 * Elegant minimalist botanical branch accent (used very sparingly)
 */
export const BotanicalTwig: React.FC<{ className?: string }> = ({ 
  className = "w-8 h-12 text-[#81958A]" 
}) => {
  return (
    <svg 
      viewBox="0 0 32 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      aria-hidden="true"
    >
      <path 
        d="M 16 44 C 16 28, 17 16, 18 4" 
        stroke="currentColor" 
        strokeWidth="1.2" 
        strokeLinecap="round" 
      />
      {/* Delicate leaf 1 */}
      <path 
        d="M 16 32 C 11 30, 7 24, 8 18 C 13 18, 16 26, 16 32 Z" 
        fill="currentColor" 
        fillOpacity="0.25"
        stroke="currentColor"
        strokeWidth="0.8"
      />
      {/* Delicate leaf 2 */}
      <path 
        d="M 17 22 C 22 20, 26 14, 25 8 C 20 8, 17 16, 17 22 Z" 
        fill="currentColor" 
        fillOpacity="0.25"
        stroke="currentColor"
        strokeWidth="0.8"
      />
      {/* Top tiny leaf */}
      <path 
        d="M 18 10 C 18 4, 15 2, 13 1 C 13 4, 16 8, 18 10 Z" 
        fill="currentColor" 
        fillOpacity="0.4"
      />
    </svg>
  );
};
