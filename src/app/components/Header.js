"use client";

import React, { useState, useEffect } from 'react';
import { 
  Menu, X, User, ShoppingBag, MessageCircle, ChevronDown
} from 'lucide-react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/logo.jpeg';

// --- DATA ARRAYS (CARROM THEME) ---
const primaryLinks = [
  { name: 'Regular Series', href: '/shop?type=Regular Series', query: 'type=Regular Series' },
  { name: 'Professional Series', href: '/shop?type=Professional Series', query: 'type=Professional Series' },
  { name: 'Country Series', href: '/shop?type=Country Edition', query: 'type=Country Edition' },
  { name: 'Special Series', href: '/shop?type=Special Edition', query: 'type=Special Edition' },
  { name: 'Accessories', href: '/shop?category=accessories', query: 'category=accessories' },
];

const utilityLinks = [
  // { name: 'My Account', href: '/account' },
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
                <span className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 bg-[#241b14] text-white w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shadow-[0_0_10px_rgba(211,177,87,0.5)]">
                  {cartItems}
                </span>
              )}
            </Link>

            {/* Checkout Button */}
            <Link href="/checkout" className="hidden md:flex bg-[#241b14] text-white px-5 py-2.5 rounded-xl font-bold text-xs md:text-sm tracking-wide hover:shadow-[0_0_15px_rgba(211,177,87,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 ml-2">
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

          {/* 2. UTILITY LINKS */}
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
          {/* <div className="px-6">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Location</p>
            <button className="w-full border border-gray-300 rounded-xl py-3.5 px-4 flex items-center justify-between bg-gray-50 text-gray-700 hover:border-amber-500/50 hover:bg-gray-100 hover:text-gray-900 transition-all duration-300">
              <span className="font-semibold text-sm">Pakistan</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div> */}

        </div>
      </div>
    </>
  )
}

export default Header;