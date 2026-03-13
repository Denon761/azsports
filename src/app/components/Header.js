"use client";

import React, { useState, useEffect } from 'react';
import { 
  Menu, X, User, ShoppingBag, MessageCircle, ChevronDown, Zap
} from 'lucide-react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/logo.png';
import Image001 from '../assets/products/001.png';
import Image002 from '../assets/products/002.png';
import Image003 from '../assets/products/003.png';

// --- DATA ARRAYS (CARROM THEME) ---
const primaryLinks = [
  { name: 'Shop All', href: '/shop' },
  { name: 'Carrom Boards', href: '/shop' },
  { name: 'Accessories', href: '/shop' },
];

const bestSellers = [
  {
    id: 1,
    name: 'Champion GEN-Z',
    tag: 'Tournament Grade',
    desc: 'Official match board with waterproof ply and lightning fast surface.',
    image: Image003, 
    href: '/shop/champion-series'
  },
  {
    id: 2,
    name: 'Ivory Pro Striker',
    tag: 'Pro Series',
    desc: 'Perfectly balanced 15g striker for ultimate control and rebound.',
    image: Image001,
    href: '/shop/rookie-gen-1'
  },
  {
    id: 3,
    name: 'Disco Boric Powder',
    tag: 'Essential',
    desc: 'Specialized powder for smooth gliding and board protection.',
    image: Image002,
    href: '/shop/club-pro'
  }
];

const utilityLinks = [
  { name: 'My Account', href: '/account' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Rules of Carrom', href: '/rules' },
  { name: 'Board Maintenance', href: '/maintenance' },
  { name: 'Faqs', href: '/faq' },
  { name: 'Shipping & Delivery', href: '/shipping' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms & Conditions', href: '/terms' },
  { name: 'Cookies', href: '/cookies' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Note: Assuming your Redux setup is working as provided
  const cartItems = useSelector(state => state.cart?.totalItems || 0);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  return (
    <>
      {/* ── MAIN NAVIGATION BAR ── */}
      <nav className="relative w-full bg-black backdrop-blur-md border-b border-zinc-800/50 sticky top-0 z-50 font-sans">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          
          {/* Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="group flex items-center gap-2 text-zinc-300 hover:text-amber-400 transition-colors p-2 rounded-xl hover:bg-zinc-900/80"
          >
            <Menu className="w-6 h-6 group-hover:scale-110 transition-transform" />
            <span className="hidden sm:block font-bold text-xs md:text-sm uppercase tracking-wider">Menu</span>
          </button>

          {/* Center Brand Logo */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2 group">
            <div className="relative h-10 w-28 md:h-12 md:w-32">
              <Image 
                src={logo} 
                alt="Az Sports" 
                fill
                className="object-contain invert brightness-0 filter"
              />
            </div>
          </Link>

          {/* Right Action Icons */}
          <div className="flex items-center gap-2 sm:gap-4">
            
            {/* WhatsApp Icon */}
            <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-amber-500 transition-colors p-2 rounded-xl hover:bg-zinc-900/80 hidden sm:block" title="Chat on WhatsApp">
              <MessageCircle className="w-[22px] h-[22px]" />
            </a>
            
            {/* User Icon */}
            <Link href="/account" className="text-zinc-400 hover:text-amber-500 transition-colors p-2 rounded-xl hover:bg-zinc-900/80 hidden sm:block">
              <User className="w-[22px] h-[22px]" />
            </Link>
            
            {/* Cart Icon */}
            <Link href="/cart" className="text-zinc-400 relative hover:text-amber-500 transition-colors p-2 rounded-xl hover:bg-zinc-900/80">
              <ShoppingBag className="w-[22px] h-[22px]" />
              {cartItems > 0 && (
                <span className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 bg-gradient-to-r from-amber-500 to-orange-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shadow-[0_0_10px_rgba(245,158,11,0.5)]">
                  {cartItems}
                </span>
              )}
            </Link>

            {/* Checkout Button */}
            <Link href="/checkout" className="hidden md:flex bg-gradient-to-r from-amber-500 to-orange-600 text-white px-5 py-2.5 rounded-xl font-bold text-xs md:text-sm tracking-wide hover:shadow-[0_0_15px_rgba(245,158,11,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 ml-2">
              CHECKOUT
            </Link>
          </div>
        </div>
      </nav>

      {/* ── SLIDE-OUT MENU OVERLAY ── */}
      <div 
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* ── SLIDE-OUT DRAWER ── */}
      <div className={`fixed top-0 left-0 h-full w-full sm:w-[420px] bg-zinc-950 border-r border-zinc-800/50 z-[60] shadow-2xl transform transition-transform duration-500 ease-in-out flex flex-col font-sans ${
        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 h-20 border-b border-zinc-800/50 shrink-0">
          <Link href="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 group">
            <div className="relative h-10 w-24">
              <Image 
                src={logo} 
                alt="Az Sports" 
                fill
                className="object-contain invert brightness-0 filter"
              />
            </div>
          </Link>
          <button onClick={() => setIsMenuOpen(false)} className="text-zinc-400 p-2 hover:bg-zinc-900 rounded-full transition-colors hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Drawer Scrollable Content */}
        <div className="overflow-y-auto flex-1 pb-10">
          
          {/* 1. PRIMARY LINKS */}
          <div className="flex flex-col py-6">
            {primaryLinks.map((link, index) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)} 
                className="px-6 py-3 text-base font-bold text-zinc-300 hover:text-amber-400 hover:bg-zinc-900/50 border-l-4 border-transparent hover:border-amber-500 transition-all duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <hr className="border-zinc-800/50 mx-6" />

          {/* 2. TRENDING GEAR (Best Sellers) */}
          <div className="px-6 py-8">
            <div className="flex items-center gap-2 mb-6">
              <Zap className="w-4 h-4 text-amber-500" />
              <h3 className="text-zinc-100 font-bold uppercase tracking-widest text-xs">Trending Gear</h3>
            </div>
            
            <div className="space-y-6">
              {bestSellers.map((product) => (
                <Link 
                  key={product.id} 
                  href={product.href} 
                  onClick={() => setIsMenuOpen(false)} 
                  className="flex gap-4 group cursor-pointer p-3 -mx-3 rounded-2xl hover:bg-zinc-900/60 border border-transparent hover:border-zinc-800 transition-all duration-300"
                >
                  {/* Product Image Box */}
                  <div className="w-20 h-24 bg-zinc-900 rounded-xl shrink-0 overflow-hidden border border-zinc-800 group-hover:border-amber-500/50 transition-colors relative">
                    <div className="absolute inset-0 bg-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity z-0"></div>
                    <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500 relative z-10"/>
                  </div>
                  
                  {/* Product Details */}
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="flex flex-col items-start justify-between w-full mb-1 gap-1.5">
                      <span className="bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                        {product.tag}
                      </span>
                      <h4 className="font-bold text-base text-zinc-100 group-hover:text-amber-400 transition-colors">{product.name}</h4>
                    </div>
                    <p className="text-xs text-zinc-500 leading-relaxed line-clamp-2 pr-2">{product.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <hr className="border-zinc-800/50 mx-6" />

          {/* 3. UTILITY LINKS */}
          <div className="flex flex-col py-6">
            {utilityLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)} 
                className="px-6 py-2.5 text-sm text-zinc-400 hover:text-white transition-colors font-medium flex items-center group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
              </Link>
            ))}
          </div>

          <hr className="border-zinc-800/50 mx-6 mb-6" />

          {/* Location Selector */}
          <div className="px-6">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-3">Location</p>
            <button className="w-full border border-zinc-800 rounded-xl py-3.5 px-4 flex items-center justify-between bg-zinc-900/50 text-zinc-300 hover:border-amber-500/50 hover:bg-zinc-900 hover:text-white transition-all duration-300">
              <span className="font-semibold text-sm">Pakistan</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </>
  )
}

export default Header;