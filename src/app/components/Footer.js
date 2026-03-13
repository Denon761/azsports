"use client";

import React from 'react';
import Link from 'next/link';
import { 
  Instagram, Twitter, Facebook, Youtube, 
  Mail, ArrowRight 
} from 'lucide-react';

// ── Data ────────────────────────────────────────────────
const footerLinks = [
  {
    title: "Shop",
    items: [
      { label: "All Products", href: "/shop" },
      { label: "Tournament Boards", href: "/shop" },
      { label: "Practice Boards", href: "/shop" },
      { label: "Strikers & Coins", href: "/shop" },
      { label: "Foldable Stands", href: "/shop" },
    ]
  },
  {
    title: "Learn & Discover",
    items: [
      { label: "Official Rules", href: "/rules" },
      { label: "Board Maintenance", href: "/maintenance" },
      { label: "About Az SPORTS", href: "/about" },
      { label: "Contact Us", href: "/contact" },
    ]
  },
  {
    title: "Support",
    items: [
      { label: "Track Order", href: "/track-order" },
      { label: "Shipping & Returns", href: "/shipping" },
      { label: "Bulk / Club Orders", href: "/contact" },
      { label: "FAQs", href: "/contact" },
    ]
  },
  {
    title: "Legal",
    items: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
    ]
  },
];

const socials = [
  { Icon: Instagram, href: "https://instagram.com/azsports", label: "Instagram" },
  { Icon: Facebook,  href: "https://facebook.com/azsports",  label: "Facebook"  },
  { Icon: Youtube,   href: "https://youtube.com/@azsports",  label: "YouTube"   },
  { Icon: Twitter,   href: "https://twitter.com/azsports",   label: "Twitter"   },
];

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-white pt-16 pb-8 border-t border-zinc-800/50 relative overflow-hidden font-sans">
      
      {/* --- AMBIENT BACKGROUND EFFECTS --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-amber-500/5 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">

        {/* ── Main Content Grid ── */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-x-8 gap-y-12">

          {/* Brand + short desc (Takes up 2 columns on desktop) */}
          <div className="col-span-2 md:col-span-2 pr-0 md:pr-8">
            <Link href="/" className="inline-block mb-4">
              <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white group">
                AZ <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 group-hover:from-amber-300 group-hover:to-orange-400 transition-all duration-300">SPORTS</span>
              </h2>
            </Link>
            
            <p className="text-zinc-400 leading-relaxed text-sm max-w-sm mb-8">
              Engineered for champions. Premium carrom boards & accessories built for precision, rebound, and lifelong durability.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="bg-zinc-900 border border-zinc-800 p-3 rounded-xl hover:bg-zinc-800 hover:border-amber-500/50 hover:text-amber-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(245,158,11,0.15)] text-zinc-400"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.title} className="col-span-1">
              <h3 className="font-bold text-zinc-100 uppercase tracking-wider text-sm mb-6">
                {group.title}
              </h3>
              <ul className="space-y-3.5 text-zinc-400 text-sm">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="group flex items-center gap-2 hover:text-amber-400 transition-colors duration-200"
                    >
                      <span className="w-1 h-1 rounded-full bg-amber-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {item.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* ── Newsletter Section (Wide Card) ── */}
        <div className="mt-16 bg-zinc-900/40 p-8 md:p-10 rounded-[2rem] border border-zinc-800/50 hover:border-amber-500/30 transition-all duration-500 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden group">
          
          <div className="absolute right-0 bottom-0 w-[300px] h-[300px] bg-amber-500/5 rounded-full blur-[80px] mix-blend-screen pointer-events-none group-hover:bg-amber-500/10 transition-colors duration-700"></div>

          <div className="flex-1 z-10 w-full text-center lg:text-left">
            <div className="inline-flex items-center gap-2 mb-3">
              <Mail className="w-5 h-5 text-amber-500" />
              <h4 className="font-bold uppercase tracking-wider text-sm text-zinc-100">
                Join the Champions Club
              </h4>
            </div>
            <p className="text-zinc-400 text-sm md:text-base max-w-md mx-auto lg:mx-0">
              Get exclusive tips, tournament updates &{' '}
              <strong className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 font-bold">10% off</strong>{' '}
              your first striker.
            </p>
          </div>

          <form className="w-full lg:w-auto flex-1 max-w-md flex flex-col sm:flex-row gap-3 z-10">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-zinc-950 text-zinc-100 px-5 py-4 rounded-xl border border-zinc-800 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all flex-1 text-sm placeholder:text-zinc-600 shadow-inner"
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold px-8 py-4 rounded-xl hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap transform hover:-translate-y-0.5"
            >
              Subscribe <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="mt-16 pt-8 border-t border-zinc-800/50 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-zinc-500">
          
          <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 font-medium">
            <span>© {new Date().getFullYear()} Az SPORTS Ltd.</span>
            <Link href="/privacy" className="hover:text-amber-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-amber-400 transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-amber-400 transition-colors">Cookies</Link>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-2.5">
            {['VISA', 'Mastercard', 'PayPal', 'COD'].map((method) => (
              <span 
                key={method} 
                className="text-[10px] md:text-xs font-bold tracking-wider border border-zinc-800 bg-zinc-900/50 text-zinc-400 px-3 py-1.5 rounded-lg uppercase"
              >
                {method}
              </span>
            ))}
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;