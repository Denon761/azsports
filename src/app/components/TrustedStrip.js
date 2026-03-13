import React from 'react';

const TrustedStrip = () => {
  // Using standard 2-letter country codes for the FlagCDN API
  const locations = [
    { name: "LONDON", code: "gb" },
    { name: "MANCHESTER", code: "gb" },
    { name: "DUBAI", code: "ae" },
    { name: "USA", code: "us" },
    { name: "AUSTRALIA", code: "au" },
    { name: "CANADA", code: "ca" } 
  ];

  return (
    <div className="border-y border-zinc-200 bg-white py-10 overflow-hidden relative">
      
      {/* Sleek Faded Edges for a premium slider look */}
      <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 text-center relative z-0">
        
        {/* Subheading */}
        <p className="text-[10px] md:text-xs font-black tracking-[0.25em] text-zinc-400 uppercase mb-8">
          Equipping Professional Clubs & Tournaments Globally
        </p>
        
        {/* Grid wrapping for optimal mobile and desktop spacing */}
        <div className="flex flex-wrap justify-center items-center gap-x-6 md:gap-x-10 gap-y-6">
          {locations.map((loc, index) => (
            <React.Fragment key={index}>
              
              <div className="flex items-center gap-2.5 group cursor-default">
                
                {/* SVG Flag pulled securely via FlagCDN */}
                <img 
                  src={`https://flagcdn.com/${loc.code}.svg`} 
                  alt={`${loc.name} flag`}
                  loading="lazy"
                  /* h-auto + w-auto + object-contain stops any weird stretching */
                  className="h-4 md:h-[18px] w-auto object-contain shadow-[0_0_2px_rgba(0,0,0,0.2)] rounded-[2px] transform group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Text is darker by default now since flags are fully colored */}
                <span className="text-xs md:text-sm font-black text-zinc-700 tracking-wider group-hover:text-amber-600 transition-colors duration-300">
                  {loc.name}
                </span>

              </div>

              {/* Subtle divider dot between locations (hidden on last item) */}
              {index !== locations.length - 1 && (
                <div className="hidden md:block w-1 h-1 rounded-full bg-zinc-300"></div>
              )}
              
            </React.Fragment>
          ))}
        </div>

      </div>
    </div>
  );
};

export default TrustedStrip;