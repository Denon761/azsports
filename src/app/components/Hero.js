import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, ShieldCheck, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[600px] lg:min-h-[750px] bg-black flex items-center overflow-hidden font-sans">
      
      {/* --- BACKGROUND EFFECTS --- */}
      {/* Decorative ambient glowing orbs behind the layout */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none translate-x-1/4 translate-y-1/4"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 py-16 lg:py-0">
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN - TEXT & CTA */}
          <div className="flex flex-col items-start text-left pt-10 lg:pt-0">
            
            {/* Social Proof Badge */}
            <div className="inline-flex items-center gap-2.5 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} fill="currentColor" className="w-3.5 h-3.5" />
                ))}
              </div>
              <span className="text-xs md:text-sm font-medium text-zinc-300">
                Trusted by 2,000+ Pro Players
              </span>
            </div>

            {/* Huge Premium Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              Master the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-orange-500">
                Perfect Strike.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed mb-8">
              Experience the glass-like glide, razor-sharp accuracy, and 
              legendary rebound of championship-grade carrom boards. Handcrafted in Pakistan since 1940.
            </p>

            {/* Quick Value Props */}
            <ul className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-10 text-sm font-medium text-zinc-300">
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-amber-500" />
                100% Solid Wood
              </li>
              <li className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-500" />
                Tournament Spec Rebound
              </li>
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 w-full sm:w-auto">
              <Link 
                href="/shop" 
                className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-7 py-3 md:py-3.5 rounded-lg text-sm md:text-base font-semibold hover:shadow-[0_0_20px_rgba(245,158,0.35)] transition-all flex items-center justify-center gap-2 w-full sm:w-auto transform hover:-translate-y-0.5"
              >
                Shop Pro Boards <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </Link>
              <Link 
                href="/shop" 
                className="bg-transparent text-white border border-white/20 px-7 py-3 md:py-3.5 rounded-lg text-sm md:text-base font-medium hover:bg-white/10 hover:border-white/30 transition-all flex items-center justify-center w-full sm:w-auto"
              >
                Browse Collection
              </Link>
            </div>
            
          </div>

          {/* RIGHT COLUMN - VISUAL SHOWCASE */}
          <div className="relative w-full h-[350px] lg:h-[600px] flex items-center justify-center group mt-8 lg:mt-0">
            
            {/* Ambient shadow specifically for the board to ground it */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-amber-500/20 blur-[100px] rounded-full mix-blend-screen transition-opacity duration-700 opacity-50 group-hover:opacity-80"></div>

            {/* We wrapper the image to simulate a high-end 3D floating effect */}
            <div className="relative z-20 transform -rotate-[6deg] hover:-translate-y-4 hover:rotate-0 transition-all duration-700 ease-out drop-shadow-[0_30px_50px_rgba(0,0,0,0.8)]">
              
              {/* Note: A transparent PNG of an isolated carrom board looks best here. */}
              {/* I've added some inline border & shadow styling so even standard JPGs look like an physical frame */}
              <div className="relative rounded-lg overflow-hidden">
                <img 
                  src="https://ts1xw1iyvq.ufs.sh/f/vW3Htblq8C7mqjdSc4TyFE6ZCTekbHqgdOzjvnyYolr7fVcI" 
                  alt="Championship Carrom Board" 
                  className="w-[320px] sm:w-[650px] h-auto object-cover transform scale-[1.02] filter brightness-95 contrast-110"
                />
              </div>

              {/* Floating Element - Gives depth to the layout */}
              <div className="absolute -bottom-8 -left-8 bg-[#0B0D38] border border-white/10 p-4 rounded-xl shadow-xl flex items-center gap-3 transform translate-y-4 lg:group-hover:-translate-y-2 transition-transform duration-700">
                <div className="w-10 h-10 bg-amber-500/10 rounded-full flex items-center justify-center border border-amber-500/30">
                  <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Craftsmanship</p>
                  <p className="text-zinc-400 text-xs">Since 1940</p>
                </div>
              </div>

            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;