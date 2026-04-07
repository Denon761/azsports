"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ShoppingBag } from 'lucide-react';
import { products, accessories } from '../data/products';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import SeriesGrid from '../components/SeriesGrid';

const categoryInfo = {
  'Regular Series': {
    name: 'Regular Series',
    description: 'Classic carrom boards for everyday play — handcrafted for family fun',
  },
  'Country Edition': {
    name: 'Country Series',
    description: 'Boards featuring iconic landmarks from around the world',
  },
  'Special Edition': {
    name: 'Special Series',
    description: 'Premium boards with unique designs and special finishes',
  },
  'Professional Series': {
    name: 'Professional Series',
    description: 'Tournament-grade boards for competitive players',
  },
};

export default function ShopPage() {
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  
  const [typeFilter, setTypeFilter] = useState('all');
  const [categoryParam, setCategoryParam] = useState('all');

  useEffect(() => {
    const typeParam = searchParams.get('type');
    const catParam = searchParams.get('category');
    if (typeParam) {
      setTypeFilter(typeParam);
    }
    if (catParam) {
      setCategoryParam(catParam);
    }
  }, [searchParams]);

  const allProducts = [...products, ...accessories];

  const isFiltered = typeFilter !== 'all' || categoryParam !== 'all';
  const currentCategory = typeFilter !== 'all' ? categoryInfo[typeFilter] : null;

  let filteredProducts = allProducts;

  if (categoryParam !== 'all') {
    filteredProducts = filteredProducts.filter(p => p.category === categoryParam);
  }

  if (typeFilter !== 'all') {
    filteredProducts = filteredProducts.filter(p => p.type === typeFilter);
  }

  const handleAddToCart = (product) => {
    dispatch(addToCart({ product, quantity: 1 }));
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-16">
      {/* Hero Header */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16 text-center">
          {currentCategory ? (
            <>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
                {currentCategory.name}
              </h1>
              <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto">
                {currentCategory.description} — Hand-crafting carrom boards | Since 1940.
              </p>
            </>
          ) : (
            <>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
                Premium Carrom Collection
              </h1>
              <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto">
                Handcrafted boards & professional accessories — built for competition and family fun — Hand-crafting carrom boards | Since 1940.
              </p>
            </>
          )}
        </div>
      </section>

      {/* Series Categories - Only show when not filtered */}
      {!isFiltered && (
        <section className="py-8 md:py-12 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <SeriesGrid layout="1x4" />
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-800 mb-3">No products found</h3>
              <p className="text-slate-500 mb-6">Try another category</p>
              <button
                onClick={() => {
                  setTypeFilter('all');
                  setCategoryParam('all');
                }}
                className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800"
              >
                View All
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all group hover:shadow-lg hover:border-slate-400"
                >
                  <div className="relative overflow-hidden bg-slate-50 aspect-square">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {product.tag && (
                      <span className="absolute top-4 left-4 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                        {product.tag}
                      </span>
                    )}
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="absolute bottom-4 right-4 bg-slate-900 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ShoppingBag className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="p-6 flex flex-col">
                    <Link href={`/shop/${product.slug}`}>
                      <h3 className="text-xl font-bold text-slate-900 mb-2 hover:text-slate-700">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="text-slate-600 text-sm mb-4 line-clamp-2">{product.description}</p>

                    <div className="mt-auto flex items-center justify-between">
                      <div>
                        <p className="text-xl font-bold text-slate-900">
                          Rs {(product.sizes ? product.sizes[0].price : product.price).toLocaleString()}
                        </p>
                        {product.specs?.size && (
                          <p className="text-sm text-slate-500">{product.specs.size}</p>
                        )}
                      </div>
                      <Link
                        href={`/shop/${product.slug}`}
                        className="bg-slate-900 text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-slate-800"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}