import React from 'react';
import { ShieldCheck, Layers, Award, Zap } from 'lucide-react';
// import { btn, card, heading, text, badge } from './UniStyles'; // Left here if you still need it for other parts

const features = [
  {
    icon: Layers,
    title: "English Birch Ply",
    description: "Sourced for high density and zero warping over time.",
  },
  {
    icon: Zap,
    title: "5x Rebound",
    description: "Kikar wood frames cured to give the perfect bounce back.",
  },
  {
    icon: ShieldCheck,
    title: "Silky Smooth",
    description: "7-layer polish process creates a frictionless glass-like surface.",
  },
  {
    icon: Award,
    title: "Federation Spec",
    description: "Built strictly to international tournament size standards.",
  },
];

const Features = () => {
  return (
    <section className="bg-zinc-950 py-16 md:py-24 relative overflow-hidden font-sans">
      
      {/* --- AMBIENT BACKGROUND EFFECTS (Matches PromoBanner) --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/5 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          {/* Subtle Tagline Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-[10px] md:text-xs font-bold text-amber-500 tracking-widest uppercase mb-6">
            <ShieldCheck className="w-3.5 h-3.5" />
            Premium Engineering
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight tracking-tight animate-fade-in-up">
            Why most boards don't play{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-orange-500">
              like they look
            </span>
          </h2>
          
          <p className="text-base md:text-lg text-zinc-400 animate-fade-in-up delay-200 max-w-2xl mx-auto leading-relaxed">
            Cheap particle board and uneven surfacing kill the game. 
            Az SPORTS boards are engineered differently for champions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
               <div
                key={index}
                className="group flex flex-col items-center text-center p-8 rounded-[2rem] bg-zinc-900/40 border border-zinc-800/50 hover:bg-zinc-900/80 hover:border-amber-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-15px_rgba(245,158,11,0.15)]"
              >
                {/* Icon Container with Glow Effect */}
                <div
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-600/10 border border-amber-500/20 flex items-center justify-center mb-6 text-amber-500 group-hover:scale-110 group-hover:text-amber-400 group-hover:border-amber-400/40 transition-all duration-500"
                >
                  <Icon className="w-8 h-8" strokeWidth={1.5} />
                </div>

                {/* Text Content */}
                <h3 className="font-bold text-zinc-100 text-xl mb-3 group-hover:text-white transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-zinc-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;