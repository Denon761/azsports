"use client";

import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { Check, Layers, Ruler, ShoppingCart, Star, Shield, ArrowRight } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice'; // Adjust imports based on your tree
import { products, standProduct } from '../data/products';
import Link from 'next/link';
import Image from 'next/image';

// NOTE: Replace missing dummy/placeholder images with actual properties from your data.

const ProductCard = ({ product }) => {
  const [addStand, setAddStand] = useState(false);
  const dispatch = useDispatch();
  
  // Base logic for pricing
  const standPrice = standProduct?.price || 6500;
  const totalPrice = addStand ? product.price + standPrice : product.price;

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addToCart({ product, quantity: 1, addStand }));
  };

  return (
    <div className="keen-slider__slide h-full py-4">
      {/* 
        CARD WRAPPER
        We use a flex column to push the footer to the bottom evenly.
        Notice we DO NOT wrap the whole card in <Link>. That causes invalid HTML and hydration bugs.
      */}
      <div className="group relative bg-white h-full flex flex-col rounded-3xl border border-zinc-200 shadow-sm hover:shadow-2xl hover:border-zinc-300 transition-all duration-500 overflow-hidden">
        
        {/* Floating Badges */}
        <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
            {product.tag && (
                <span className="bg-amber-500 text-zinc-950 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-md">
                  {product.tag}
                </span>
            )}
        </div>

        {/* IMAGE AREA (Wrapped in Link to product details) */}
        <Link href={`/shop/${product.slug}`} className="relative aspect-[4/3] sm:aspect-square bg-zinc-50 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent z-10"></div>
          
          <Image 
            src={product.image}
            alt={product.name} 
            fill
            className="object-cover transform group-hover:scale-[1.03] transition-transform duration-700 ease-out drop-shadow-lg" 
          />
        </Link>

        {/* CONTENT BODY */}
        <div className="flex-1 flex flex-col p-5 md:p-6 bg-white">
          
          {/* Header Row (Rating) */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span className="text-xs font-semibold text-zinc-600">4.9 <span className="font-normal text-zinc-400">(120)</span></span>
            </div>
            {/* Quick trust badge */}
            <div className="flex items-center gap-1 text-[10px] uppercase font-bold text-zinc-400">
               <Shield className="w-3.5 h-3.5" /> Solid Wood
            </div>
          </div>

          {/* Title Link */}
          <Link href={`/shop/${product.slug}`} className="block mb-4">
            <h3 className="text-xl sm:text-2xl font-black text-zinc-900 leading-tight group-hover:text-amber-600 transition-colors duration-300 line-clamp-2">
              {product.name}
            </h3>
          </Link>
          
          {/* Pro Specs Data Bar */}
          <div className="flex flex-wrap items-center gap-2 mb-6 text-xs text-zinc-600 font-medium">
            <div className="flex items-center gap-1.5 bg-zinc-100 px-2.5 py-1 rounded-md">
              <Ruler className="w-3.5 h-3.5 text-zinc-500" />
              <span>{product.specs?.size || 'Standard'}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-zinc-100 px-2.5 py-1 rounded-md">
              <Layers className="w-3.5 h-3.5 text-zinc-500" />
              <span>{product.specs?.ply || '16mm'}</span>
            </div>
            {/* Renders up to 1 extra highlight tag if it exists */}
            {product.features && product.features[0] && (
               <span className="text-[10px] uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-100 px-2 py-1 rounded-md">
                 {product.features[0]}
               </span>
            )}
          </div>

          <div className="flex-grow"></div> {/* Spacer to push bottom items down */}

          {/* Add-on Up-sell Toggle Box */}
          <button 
            type="button"
            onClick={() => setAddStand(!addStand)}
            className={`w-full flex items-center justify-between p-3.5 mb-5 rounded-2xl border transition-all duration-300 text-left focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-1 ${
                addStand 
                ? 'bg-amber-50/50 border-amber-500 ring-1 ring-amber-500/50 shadow-sm' 
                : 'bg-white border-zinc-200 hover:border-zinc-300'
            }`}
          >
            <div className="flex items-center gap-3">
              {/* iOS style custom checkbox */}
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                  addStand ? 'bg-amber-500 border-amber-500' : 'border-zinc-300 bg-zinc-50'
              }`}>
                <Check className={`w-3 h-3 text-white transition-opacity ${addStand ? 'opacity-100' : 'opacity-0'}`} />
              </div>
              <div className="flex flex-col">
                <span className={`text-[13px] font-bold transition-colors ${addStand ? 'text-amber-900' : 'text-zinc-700'}`}>
                  Include Foldable Stand
                </span>
                <span className="text-[11px] font-medium text-zinc-500">+Rs {standPrice.toLocaleString()}</span>
              </div>
            </div>
            <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-white border border-zinc-100 shadow-sm shrink-0">
              <Image 
                src={standProduct?.image}
                alt="Stand preview" 
                fill
                className="object-cover" 
              />
            </div>
          </button>

          {/* Footer Data (Price + Action) */}
          <div className="flex items-center justify-between pt-4 border-t border-zinc-100 gap-4 mt-auto">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-0.5">Total Amount</span>
              <div className="text-xl sm:text-2xl font-black text-zinc-900 tabular-nums">
                <span className="text-sm align-top font-bold text-zinc-500 mr-0.5">Rs</span>
                {totalPrice.toLocaleString()}
              </div>
            </div>
            
            <button 
              onClick={handleAddToCart}
              className="bg-zinc-950 text-white flex-1 max-w-[130px] sm:max-w-none h-12 md:h-14 rounded-xl flex items-center justify-center gap-2 font-semibold text-sm hover:bg-amber-500 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group/btn"
            >
              Add to Cart 
              <ShoppingCart className="w-4 h-4 opacity-70 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all" />
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};


// Slider Component wrapping the Cards
const ProductSlider = () => {
  const [sliderRef] = useKeenSlider({
    loop: false,
    mode: "free-snap",
    slides: {
      perView: 1.15,
      spacing: 16,
    },
    breakpoints: {
      '(min-width: 640px)': {
        slides: { perView: 2.15, spacing: 20 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 3, spacing: 32 },
      },
      '(min-width: 1280px)': {
        slides: { perView: 3.5, spacing: 40 },
      },
    },
  });

  return (
    <section className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Sleek, Desktop-Ready Header Layout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div className="max-w-2xl text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-950 tracking-tight mb-4 leading-tight">
              Select Your <span className="text-amber-500 block sm:inline">Champion's Board.</span>
            </h2>
            <p className="text-base md:text-lg text-zinc-500">
              Discover our signature lineup of professional-grade carrom boards crafted in Pakistan for tournament-level gameplay.
            </p>
          </div>

          <Link 
            href="/shop" 
            className="hidden md:inline-flex items-center gap-2 font-bold text-sm text-zinc-950 border-b-2 border-amber-500 pb-1 hover:text-amber-600 hover:border-amber-600 transition-colors group whitespace-nowrap"
          >
            View All Boards <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        {/* Sliders Box */}
        {/* Optional: Add custom arrow controls here outside the box if preferred */}
        <div className="relative -mx-4 sm:mx-0 px-4 sm:px-0">
          <div ref={sliderRef} className="keen-slider">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Mobile-only CTA */}
        <div className="mt-8 flex justify-center md:hidden">
          <Link 
            href="/shop" 
            className="w-full inline-flex justify-center items-center gap-2 bg-zinc-200 hover:bg-zinc-300 font-bold text-sm text-zinc-900 rounded-xl px-6 py-4 transition-colors"
          >
            Explore the Full Range <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ProductSlider;