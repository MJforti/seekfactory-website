import React from 'react';

export default function Logo({ variant = 'dark', height = 44 }) {
  // Variant can be 'dark' (for dark background) or 'light'
  const textColor = variant === 'dark' ? '#FFFFFF' : '#0B4E99';
  const subtextColor = variant === 'dark' ? '#60A5FA' : '#0B4E99';
  const accentColor = '#E05638'; // Terracotta Orange from official logo

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.85rem', cursor: 'pointer', userSelect: 'none' }}>
      {/* Official SF Monogram: Gear 'S' + Pipe Wrench 'F' */}
      <svg width={height * 1.05} height={height} viewBox="0 0 110 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Gear 'S' Symbol */}
        <g fill={accentColor}>
          {/* Outer cog teeth */}
          <path d="M 30 2 C 16 2 5 13 5 28 C 5 36 9 43 16 48 L 34 57 C 42 61 47 68 47 77 C 47 90 35 100 20 100 C 9 100 1 92 0 81 L 12 78 C 13 84 17 89 21 89 C 27 89 33 83 33 76 C 33 70 29 65 22 61 L 8 53 C 1 47 -3 37 -3 27 C -3 10 10 -2 30 -2 Z" />
          {/* Internal Cog Cutouts */}
          <circle cx="28" cy="18" r="4.5" fill="#090B0E" />
          <circle cx="20" cy="80" r="4.5" fill="#090B0E" />
        </g>

        {/* Wrench 'F' Symbol */}
        <g fill={accentColor} transform="translate(62, 0)">
          {/* Top Wrench Jaw */}
          <path d="M 0 4 C 0 1.8 1.8 0 4 0 L 36 0 C 38.2 0 40 1.8 40 4 L 40 14 C 40 16.2 38.2 18 36 18 L 12 18 L 12 96 C 12 98.2 10.2 100 8 100 L 4 100 C 1.8 100 0 98.2 0 96 Z" />
          {/* Lower Jaw Serrated Clamp */}
          <path d="M 12 28 C 12 26 14 24 16 24 L 32 24 C 34 24 36 26 36 28 L 36 36 C 36 38 34 40 32 40 L 12 40 Z" />
        </g>
      </svg>

      {/* Brand Text Column */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', lineHeight: 1 }}>
        <div style={{
          fontSize: `${height * 0.48}px`,
          fontWeight: 800,
          color: textColor,
          letterSpacing: '-0.02em',
          fontFamily: "'Inter', sans-serif"
        }}>
          SEEK FACTORY
        </div>
        <div style={{
          fontSize: `${height * 0.19}px`,
          fontWeight: 700,
          color: subtextColor,
          letterSpacing: '0.22em',
          marginTop: '3px',
          fontFamily: "'Inter', sans-serif",
          textTransform: 'uppercase'
        }}>
          GREEN FACTORIES WORLDWIDE
        </div>
      </div>
    </div>
  );
}
