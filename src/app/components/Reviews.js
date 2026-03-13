import React from 'react';
import { Star, MessageSquare } from 'lucide-react';
// import { card, heading, text } from './UniStyles'; // Left here if you still need it

export default function Reviews() {
  const reviews = [
    { name: "James T.", role: "Club Manager", text: "Absolutely incredible quality. Our whole team uses these now and we couldn't be happier.", rating: 5 },
    { name: "Sarah L.", role: "Pro Athlete", text: "The delivery was super fast and the customer service was top tier. Highly recommended!", rating: 5 },
    { name: "Michael R.", role: "Coach", text: "Best value for money on the market right now. Will definitely be buying again next season.", rating: 4 },
  ];

  return (
    <section className="bg-zinc-950 py-16 md:py-24 relative overflow-hidden font-sans">
      
      {/* --- AMBIENT BACKGROUND EFFECTS --- */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-600/5 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-[10px] md:text-xs font-bold text-amber-500 tracking-widest uppercase mb-6">
            <MessageSquare className="w-3.5 h-3.5" />
            Testimonials
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-orange-500">Champions</span> Say
          </h2>
          
          <p className="text-base md:text-lg text-zinc-400 max-w-xl mx-auto">
            Trusted by professional athletes and carrom clubs worldwide.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="group flex flex-col p-8 rounded-[2rem] bg-zinc-900/40 border border-zinc-800/50 hover:bg-zinc-900/80 hover:border-amber-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-15px_rgba(245,158,11,0.15)]"
            >
              
              {/* Star Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 md:w-5 md:h-5 ${i < review.rating ? 'text-amber-500' : 'text-zinc-700'}`} 
                    fill={i < review.rating ? 'currentColor' : 'none'}
                    strokeWidth={i < review.rating ? 0 : 2}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-zinc-300 text-sm md:text-base leading-relaxed mb-8 flex-grow">
                "{review.text}"
              </p>

              {/* Reviewer Info */}
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-zinc-800/50 group-hover:border-amber-500/20 transition-colors duration-500">
                
                {/* Initial Avatar */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 flex items-center justify-center font-bold text-amber-500 shadow-inner">
                  {review.name.charAt(0)}
                </div>
                
                <div>
                  <p className="font-bold text-zinc-100 text-sm">{review.name}</p>
                  <p className="text-xs text-zinc-500 font-medium uppercase tracking-wider mt-0.5">{review.role}</p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}