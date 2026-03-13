import React from 'react';
import { HelpCircle, Plus } from 'lucide-react';
// import { heading, text } from './UniStyles'; // Left here if needed

export default function Faqs() {
  const faqs = [
    { q: "Do you ship internationally?", a: "Yes, we ship worldwide! Shipping costs will apply and are added at checkout." },
    { q: "Can I return my order?", a: "We offer a 30-day return policy. Items must be unused and in their original packaging." },
    { q: "Do you offer team/club discounts?", a: "Absolutely. If you are buying in bulk for a club, please contact our support team for a custom quote." },
    { q: "How long does shipping take?", a: "Domestic orders usually take 3-5 business days. International orders can take 7-14 days depending on the destination." }
  ];

  return (
    <section className="bg-zinc-950 py-16 md:py-24 relative overflow-hidden font-sans">
      
      {/* --- AMBIENT BACKGROUND EFFECTS --- */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] mix-blend-screen pointer-events-none -translate-x-1/2"></div>
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-[10px] md:text-xs font-bold text-amber-500 tracking-widest uppercase mb-6">
            <HelpCircle className="w-3.5 h-3.5" />
            Support
          </div>

          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight tracking-tight">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-orange-500">Questions</span>
          </h2>
          
          <p className="text-base md:text-lg text-zinc-400">
            Everything you need to know about our products, shipping, and services.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details 
              key={index} 
              className="group border border-zinc-800/50 rounded-2xl bg-zinc-900/40 hover:bg-zinc-900/60 hover:border-amber-500/30 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden open:border-amber-500/50 open:bg-zinc-900/80 open:shadow-[0_0_30px_-10px_rgba(245,158,11,0.15)]"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 p-6 text-zinc-100 font-bold select-none outline-none group-open:text-amber-400 transition-colors duration-300">
                <h3 className="text-sm md:text-base leading-snug">{faq.q}</h3>
                
                {/* Icon Container that rotates on open */}
                <span className="shrink-0 rounded-full bg-zinc-800/50 border border-zinc-700/50 p-2 text-zinc-400 group-hover:text-amber-500 group-hover:bg-amber-500/10 group-open:rotate-45 group-open:text-amber-500 group-open:bg-amber-500/10 group-open:border-amber-500/20 transition-all duration-300">
                  <Plus className="w-5 h-5" />
                </span>
              </summary>
              
              <div className="px-6 pb-6 text-zinc-400 leading-relaxed text-sm md:text-base border-t border-zinc-800/30 pt-4 mt-2 group-open:animate-fade-in-down">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}