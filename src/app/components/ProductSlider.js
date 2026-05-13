"use client";

import React from 'react';
import { Layers, Ruler, Star, Shield, ArrowRight } from 'lucide-react';
import { products } from '../data/products';
import Link from 'next/link';
import Image from 'next/image';
import { useCurrency } from '../context/CurrencyContext';

const ProductCard = ({ product }) => {
  const { formatCurrency, getLocalizedPrice } = useCurrency();

  return (
    <div className="group relative bg-white h-full flex flex-col rounded-2xl md:rounded-3xl border border-zinc-200 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
      
      {/* Floating Badges */}
      {/* <div className="absolute top-2 left-2 md:top-4 md:left-4 z-20 flex flex-col gap-2">
          {product.tag && (
              <span className="bg-amber-500 text-zinc-950 text-[8px] md:text-[10px] font-bold px-2 py-0.5 md:px-3 md:py-1 rounded-full uppercase tracking-widest shadow-md">
                {product.tag}
              </span>
          )}
      </div> */}

      {/* IMAGE AREA */}
      <Link href={`/shop/${product.slug}`} className="relative aspect-square bg-zinc-50 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent z-10"></div>
        <Image 
          src={product.image}
          alt={product.name} 
          fill
          className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" 
        />
      </Link>

      {/* CONTENT BODY */}
      <div className="flex-1 flex flex-col p-3 md:p-6 bg-white">
        
        {/* Header Row (Rating) */}
        <div className="flex items-center justify-between mb-2">
          {/* <div className="flex items-center gap-1">
            <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
            <span className="text-[10px] md:text-xs font-semibold text-zinc-600">4.9</span>
          </div> */}
          <div className="hidden sm:flex items-center gap-1 text-[9px] uppercase font-bold text-zinc-400">
             <Shield className="w-3 h-3" /> Solid Wood
          </div>
        </div>

        {/* Title */}
        <Link href={`/shop/${product.slug}`} className="block mb-2 md:mb-4">
          <h3 className="text-sm md:text-xl font-black text-zinc-900 leading-tight group-hover:text-amber-600 transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        
        {/* Specs Tags */}
       

        <div className="flex-grow"></div>

         {/* Price and Button */}
         <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-3 border-t border-zinc-100 gap-2">
           <div className="flex flex-col">
             <span className="text-[8px] md:text-[10px] font-bold uppercase text-zinc-400">Price</span>
             <div className="text-sm md:text-xl font-black text-zinc-900">
               {formatCurrency(getLocalizedPrice(product, 0))}
             </div>
           </div>
          
          <Link 
            href={`/shop/${product.slug}`}
            className="bg-zinc-900 text-white w-full sm:w-auto px-3 h-10 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center gap-2 font-semibold text-[11px] md:text-sm hover:bg-amber-500 transition-all group/btn"
          >
          Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

const ProductGrid = () => {
  return (
    <section className="py-12 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 lg:mb-12 gap-6">
          <div className="max-w-2xl text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-950 tracking-tight mb-4 leading-tight font-heading">
              Select Your <span className="text-black block sm:inline">Champion's Board.</span>
            </h2>
          </div>

          <Link 
            href="/shop" 
            className="hidden md:inline-flex items-center gap-2 font-bold text-sm text-zinc-950 border-b-2 border-amber-500 pb-1 hover:text-amber-600 transition-colors group"
          >
            View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        {/* THE GRID: 2 columns on mobile, 3 columns on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 flex justify-center md:hidden">
          <Link 
            href="/shop" 
            className="w-full inline-flex justify-center items-center gap-2 bg-white border border-zinc-200 font-bold text-sm text-zinc-900 rounded-xl px-6 py-4"
          >
            Explore All Products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ProductGrid;