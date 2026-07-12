import React from 'react';

// Exact vector replica of the uploaded gold MMC logo
export const MMCExactLogoSVG: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => {
  return (
    <svg 
      viewBox="0 0 500 500" 
      className={`select-none ${className}`} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background Gold Square - Exact color from the uploaded image (#cca33b) */}
      <rect width="500" height="500" fill="#CCA33B" />
      
      {/* "MMC" Text - Custom tracked and bold, positioned exactly like the image */}
      <text 
        x="250" 
        y="300" 
        fill="#000000" 
        fontFamily="system-ui, -apple-system, sans-serif" 
        fontWeight="900" 
        fontSize="170" 
        textAnchor="middle" 
        letterSpacing="-0.06em"
      >
        MMC
      </text>
      
      {/* "MYSTERY MASTERY COMMUNITY" Subtitle */}
      <text 
        x="250" 
        y="335" 
        fill="#000000" 
        fontFamily="system-ui, -apple-system, sans-serif" 
        fontWeight="800" 
        fontSize="16.5" 
        textAnchor="middle" 
        letterSpacing="0.04em"
      >
        MYSTERY MASTERY COMMUNITY
      </text>
    </svg>
  );
};

interface MMCLogoProps {
  className?: string;
  variant?: 'square' | 'horizontal' | 'icon' | 'text-only';
  iconSize?: string;
}

export const MMCLogo: React.FC<MMCLogoProps> = ({ 
  className = "", 
  variant = "horizontal",
  iconSize = "w-10 h-10" 
}) => {
  if (variant === 'square') {
    return (
      <div className={`aspect-square w-full max-w-[320px] rounded-2xl overflow-hidden shadow-2xl shadow-slate-950/50 ${className}`}>
        <MMCExactLogoSVG className="w-full h-full" />
      </div>
    );
  }

  if (variant === 'icon') {
    return (
      <div className={`${iconSize} rounded-xl overflow-hidden shadow-lg shadow-embergold/10 shrink-0 ${className}`}>
        <MMCExactLogoSVG className="w-full h-full" />
      </div>
    );
  }

  if (variant === 'text-only') {
    return (
      <div className={`flex flex-col ${className}`}>
        <span className="text-lg font-bold tracking-tight text-bonewhite font-sans block leading-none hover:text-embergold transition-colors">
          Mystery Mastery
        </span>
        <span className="text-[10px] uppercase tracking-widest text-embergold font-semibold block mt-1">
          Community (MMC)
        </span>
      </div>
    );
  }

  // Horizontal layout (Icon + Text beside it) - Perfect for Navbar & Footer
  return (
    <div className={`flex items-center gap-3 group select-none text-left ${className}`}>
      <div className={`${iconSize} rounded-xl overflow-hidden shadow-lg shadow-embergold/10 group-hover:scale-105 transition-transform shrink-0`}>
        <MMCExactLogoSVG className="w-full h-full" />
      </div>
      <div>
        <span className="text-lg font-bold tracking-tight text-bonewhite font-sans block leading-none group-hover:text-embergold transition-colors">
          Mystery Mastery
        </span>
        <span className="text-[10px] uppercase tracking-widest text-embergold font-semibold block mt-0.5">
          Community • MMC
        </span>
      </div>
    </div>
  );
};
