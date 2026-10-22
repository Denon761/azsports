import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[300px] lg:min-h-[750px] flex items-end lg:items-center overflow-hidden font-sans">

      {/* Banner Image - Full width background on all breakpoints */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://ts1xw1iyvq.ufs.sh/f/vW3Htblq8C7my3ULmOnfr6gcBibRhO58zFdGI2wPxAv1tlk9"
          alt="Championship Carrom Board Banner"
          className="w-full h-full object-cover brightness-95 contrast-110"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 py-4 lg:py-0">

        {/* Huge Premium Headline */}
        <h1 className="text-lg sm:text-lg lg:text-3xl font-bold text-white tracking-tight leading-[1.1] mb-0 font-heading drop-shadow-lg max-w-2xl">
          Hand-crafting carrom boards<br />
          <span className="text-white">| Since 1940.</span>
        </h1>

      </div>
    </section>
  );
};

export default Hero;