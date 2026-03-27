"use client";

import React, { useState, useEffect } from 'react';
import { 
  Menu, X, User, ShoppingBag, MessageCircle, ChevronDown, Zap
} from 'lucide-react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/logo.jpeg';
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
      <nav className="relative w-full bg-white backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50 font-sans shadow-sm">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          
          {/* Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="group flex items-center gap-2 text-gray-700 hover:text-amber-600 transition-colors p-2 rounded-xl hover:bg-gray-100"
          >
            <Menu className="w-6 h-6 group-hover:scale-110 transition-transform" />
            <span className="hidden sm:block font-bold text-xs md:text-sm uppercase tracking-wider">Menu</span>
          </button>

          {/* Center Brand Logo */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2 group">
            <div className="relative h-12 w-32 md:h-16 md:w-32">
              <Image 
                src={logo} 
                alt="Az Sports" 
                fill
                className="object-contain"
              />
            </div>
          </Link>

          {/* Right Action Icons */}
          <div className="flex items-center gap-2 sm:gap-4">
            
            {/* WhatsApp Icon */}
            <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-amber-600 transition-colors p-2 rounded-xl hover:bg-gray-100 hidden sm:block" title="Chat on WhatsApp">
              <MessageCircle className="w-[22px] h-[22px]" />
            </a>
            
            {/* User Icon */}
            <Link href="/account" className="text-gray-500 hover:text-amber-600 transition-colors p-2 rounded-xl hover:bg-gray-100 hidden sm:block">
              <User className="w-[22px] h-[22px]" />
            </Link>
            
            {/* Cart Icon */}
            <Link href="/cart" className="text-gray-500 relative hover:text-amber-600 transition-colors p-2 rounded-xl hover:bg-gray-100">
              <ShoppingBag className="w-[22px] h-[22px]" />
              {cartItems > 0 && (
                <span className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 bg-[#D3B157] text-white w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shadow-[0_0_10px_rgba(211,177,87,0.5)]">
                  {cartItems}
                </span>
              )}
            </Link>

            {/* Checkout Button */}
            <Link href="/checkout" className="hidden md:flex bg-[#D3B157] text-white px-5 py-2.5 rounded-xl font-bold text-xs md:text-sm tracking-wide hover:shadow-[0_0_15px_rgba(211,177,87,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 ml-2">
              CHECKOUT
            </Link>
          </div>
        </div>
      </nav>

      {/* ── SLIDE-OUT MENU OVERLAY ── */}
      <div 
        className={`fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* ── SLIDE-OUT DRAWER ── */}
      <div className={`fixed top-0 left-0 h-full w-full sm:w-[420px] bg-white border-r border-gray-200 z-[60] shadow-2xl transform transition-transform duration-500 ease-in-out flex flex-col font-sans ${
        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 h-20 border-b border-gray-200 shrink-0">
          <Link href="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 group">
            <div className="relative h-10 w-24">
              <Image 
                src={logo} 
                alt="Az Sports" 
                fill
                className="object-contain"
              />
            </div>
          </Link>
          <button onClick={() => setIsMenuOpen(false)} className="text-gray-500 p-2 hover:bg-gray-100 rounded-full transition-colors hover:text-gray-900">
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
                className="px-6 py-3 text-base font-bold text-gray-700 hover:text-amber-600 hover:bg-gray-50 border-l-4 border-transparent hover:border-amber-500 transition-all duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <hr className="border-gray-200 mx-6" />

          {/* 2. TRENDING GEAR (Best Sellers) */}
          <div className="px-6 py-8">
            <div className="flex items-center gap-2 mb-6">
              <Zap className="w-4 h-4 text-amber-500" />
              <h3 className="text-gray-900 font-bold uppercase tracking-widest text-xs">Trending Gear</h3>
            </div>
            
            <div className="space-y-6">
              {bestSellers.map((product) => (
                <Link 
                  key={product.id} 
                  href={product.href} 
                  onClick={() => setIsMenuOpen(false)} 
                  className="flex gap-4 group cursor-pointer p-3 -mx-3 rounded-2xl hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all duration-300"
                >
                  {/* Product Image Box */}
                  <div className="w-20 h-24 bg-gray-100 rounded-xl shrink-0 overflow-hidden border border-gray-200 group-hover:border-amber-500/50 transition-colors relative">
                    <div className="absolute inset-0 bg-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity z-0"></div>
                    <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500 relative z-10"/>
                  </div>
                  
                  {/* Product Details */}
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="flex flex-col items-start justify-between w-full mb-1 gap-1.5">
                      <span className="bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                        {product.tag}
                      </span>
                      <h4 className="font-bold text-base text-gray-900 group-hover:text-amber-600 transition-colors">{product.name}</h4>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 pr-2">{product.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <hr className="border-gray-200 mx-6" />

          {/* 3. UTILITY LINKS */}
          <div className="flex flex-col py-6">
            {utilityLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)} 
                className="px-6 py-2.5 text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium flex items-center group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
              </Link>
            ))}
          </div>

          <hr className="border-gray-200 mx-6 mb-6" />

          {/* Location Selector */}
          <div className="px-6">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Location</p>
            <button className="w-full border border-gray-300 rounded-xl py-3.5 px-4 flex items-center justify-between bg-gray-50 text-gray-700 hover:border-amber-500/50 hover:bg-gray-100 hover:text-gray-900 transition-all duration-300">
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