import React from 'react';
import Link from 'next/link';
import { Tag, ArrowRight, Zap } from 'lucide-react';

export default function PromoBanner() {
  return (
    <section className="p-4 max-w-7xl mx-auto w-full font-sans">
      {/* 
        MAIN BANNER CONTAINER 
        Uses deep zinc/carbon colors with a subtle glowing border effect.
        overflow-hidden keeps the ambient glowing orbs contained.
      */}
      <div className="relative bg-zinc-950 rounded-[2rem] md:rounded-[2.5rem] border border-zinc-800 shadow-2xl overflow-hidden group">
        
        {/* --- AMBIENT BACKGROUND EFFECTS --- */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none group-hover:bg-amber-500/15 transition-all duration-700"></div>
        <div className="absolute -bottom-24 -left-24 w-[300px] h-[300px] bg-orange-600/10 rounded-full blur-[80px] mix-blend-screen pointer-events-none"></div>

        {/* Content Layout */}
        <div className="relative z-10 p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-10 md:gap-12 text-left">
          
          <div className="max-w-xl">
            {/* Urgency/Status Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-[10px] md:text-xs font-bold text-amber-500 tracking-widest uppercase mb-6">
              <Zap className="w-3.5 h-3.5" fill="currentColor" />
              Limited Time Offer
            </div>
            
            {/* Headline with High-Contrast Gradient */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight tracking-tight">
              Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-orange-500">20% Off</span> Your First Order
            </h2>
            
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-lg">
              Experience championship-level rebound and smooth glides. Join thousands of satisfied professionals and upgrade your carrom gear today.
            </p>
          </div>

          {/* Action Area */}
          <div className="shrink-0 w-full md:w-auto flex flex-col items-center sm:items-start gap-4">
            
            {/* Primary CTA (Using Link since 'Shop the Sale' should route the user) */}
            <Link 
              href="/shop"
              className="w-full md:w-auto bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 md:px-10 py-4 rounded-xl font-bold md:text-lg flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all duration-300 transform hover:-translate-y-1"
            >
              <Tag className="w-5 h-5" />
              Claim Offer
              <ArrowRight className="w-5 h-5 ml-1" />
            </Link>

            <span className="text-[11px] text-zinc-500 font-medium text-center md:text-left w-full">
              Use code <strong className="text-zinc-300">PROPLAYER20</strong> at checkout
            </span>

          </div>

        </div>
      </div>
    </section>
  );
}