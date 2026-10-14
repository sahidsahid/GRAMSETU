import React from 'react';

/**
 * 12-pointed retro starburst sticker matching the reference PDF
 * Fill: Periwinkle #A3B7D8, Stroke: #1E1E24 (2.5px), Drop Shadow: #1E1E24
 */
export function StarburstSticker({ className = '', size = 64, color = '#A3B7D8' }) {
  return (
    <div className={`relative inline-block select-none ${className}`} style={{ width: size, height: size }}>
      {/* Crisp hard offset shadow */}
      <svg
        viewBox="0 0 100 100"
        className="absolute top-[4px] left-[4px] w-full h-full fill-[#1E1E24]"
      >
        <path d="M50 0 L61 24 L85 15 L78 39 L100 50 L78 61 L85 85 L61 78 L50 100 L39 78 L15 85 L22 61 L0 50 L22 39 L15 15 L39 24 Z" />
      </svg>
      {/* Main sticker with outline */}
      <svg
        viewBox="0 0 100 100"
        className="relative w-full h-full"
      >
        <path
          d="M50 0 L61 24 L85 15 L78 39 L100 50 L78 61 L85 85 L61 78 L50 100 L39 78 L15 85 L22 61 L0 50 L22 39 L15 15 L39 24 Z"
          fill={color}
          stroke="#1E1E24"
          strokeWidth="6"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

/**
 * Thick cross / plus sticker matching reference PDF
 */
export function PlusSticker({ className = '', size = 52, color = '#A3B7D8' }) {
  return (
    <div className={`relative inline-block select-none ${className}`} style={{ width: size, height: size }}>
      {/* Offset shadow */}
      <svg viewBox="0 0 100 100" className="absolute top-[4px] left-[4px] w-full h-full fill-[#1E1E24]">
        <path d="M35 5 H65 V35 H95 V65 H65 V95 H35 V65 H5 V35 H35 Z" />
      </svg>
      {/* Main sticker */}
      <svg viewBox="0 0 100 100" className="relative w-full h-full">
        <path
          d="M35 5 H65 V35 H95 V65 H65 V95 H35 V65 H5 V35 H35 Z"
          fill={color}
          stroke="#1E1E24"
          strokeWidth="6"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

/**
 * Concentric Ring / Bullseye sticker matching reference PDF
 */
export function RingSticker({ className = '', size = 56, outerColor = '#FFFFFF', innerColor = '#1E1E24' }) {
  return (
    <div className={`relative inline-block select-none ${className}`} style={{ width: size, height: size }}>
      {/* Offset shadow */}
      <svg viewBox="0 0 100 100" className="absolute top-[4px] left-[4px] w-full h-full">
        <circle cx="50" cy="50" r="46" fill="#1E1E24" />
      </svg>
      {/* Outer ring with stroke */}
      <svg viewBox="0 0 100 100" className="relative w-full h-full">
        <circle
          cx="50"
          cy="50"
          r="45"
          fill={outerColor}
          stroke="#1E1E24"
          strokeWidth="7"
        />
        {/* Inner circle cutout / bullseye */}
        <circle
          cx="50"
          cy="50"
          r="23"
          fill={innerColor}
          stroke="#1E1E24"
          strokeWidth="5"
        />
      </svg>
    </div>
  );
}

/**
 * Page Pill matching the exact top-right "Page 01" indicator in the PDF
 */
export function PagePill({ label = 'Page', number = '01', className = '' }) {
  return (
    <div
      className={`inline-flex items-center gap-2 bg-[#363636] text-white px-3.5 py-1.5 rounded-full font-bold text-xs sm:text-sm tracking-wide shadow-md border border-[#222] select-none ${className}`}
    >
      <span className="font-medium tracking-normal text-gray-200">{label}</span>
      <span className="bg-[#2B3048] text-white px-2 py-0.5 rounded-full text-xs font-black tracking-wider border border-[#484E6D]">
        {number}
      </span>
    </div>
  );
}

/**
 * Rotated highlight sticker pill (like "Marketing" on slide 1)
 */
export function RotatedPill({ text = 'Andhra Pradesh', rotation = '-rotate-3', bg = 'bg-[#363636]', textColor = 'text-white' }) {
  return (
    <div className={`inline-block transform ${rotation} select-none`}>
      <div className={`${bg} ${textColor} font-chunky text-base sm:text-xl px-4 py-1.5 rounded-full border-2 border-[#1E1E24] sticker-shadow tracking-wide`}>
        {text}
      </div>
    </div>
  );
}
