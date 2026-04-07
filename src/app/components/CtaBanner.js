import React from 'react';
import Link from 'next/link';
import { Trophy, ArrowRight, MessageCircle } from 'lucide-react';
// import { btn, heading, text } from './UniStyles'; // Left here if needed

export default function CtaBanner() {
  return (
    <section className="bg-gray-50 py-16 md:py-24 px-4 font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main CTA Card */}
        <div className="relative rounded-[2rem] md:rounded-[2.5rem] bg-white border border-gray-200 shadow-2xl overflow-hidden text-center py-16 px-6 sm:px-12 md:py-24 group">
          
          {/* Ambient Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none group-hover:bg-amber-500/15 transition-all duration-700"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-[10px] md:text-xs font-bold text-amber-500 tracking-widest uppercase mb-8">
              <Trophy className="w-4 h-4" />
              Take the Next Step
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight tracking-tight font-heading">
              Ready to <span className="text-[#241b14]">Elevate Your Game?</span>
            </h2>
            
            {/* Subtext */}
            <p className="text-gray-600 text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Shop our latest collection today and experience the difference in championship-level quality and performance.
            </p>
            
            {/* Buttons Container */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 w-full sm:w-auto">
              
              {/* Primary CTA Button */}
              <Link 
                href="/shop"
                className="w-full sm:w-auto bg-[#241b14] text-white px-8 md:px-10 py-4 rounded-xl font-bold md:text-lg flex items-center justify-center gap-2 hover:shadow-[0_0_25px_rgba(36,27,20,0.4)] transition-all duration-300 transform hover:-translate-y-1"
              >
                Shop Collection
                <ArrowRight className="w-5 h-5 ml-1" />
              </Link>

              {/* Secondary CTA Button */}
              <Link 
                href="/contact"
                className="w-full sm:w-auto bg-white border border-gray-300 text-gray-900 px-8 md:px-10 py-4 rounded-xl font-bold md:text-lg flex items-center justify-center gap-2 hover:text-amber-600 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 transform hover:-translate-y-1"
              >
                <MessageCircle className="w-5 h-5 mr-1 text-gray-500 group-hover:text-gray-700 transition-colors" />
                Contact Us
              </Link>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}