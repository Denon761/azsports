"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, Grid, List, Star, ArrowUpDown } from 'lucide-react';
import { products, accessories } from '../data/products';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import SeriesGrid from '../components/SeriesGrid';

export default function ShopPage() {
  const dispatch = useDispatch();
  
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [typeFilter, setTypeFilter] = useState('all');
  const [sortBy, setSortBy] = useState('default');
  const [seriesLayout, setSeriesLayout] = useState('1x4');

  const seriesIdToType = {
    'Regular Series': 'Regular Series',
    'Country Edition': 'Country Edition',
    'Special Edition': 'Special Edition',
    'Professional Series': 'Professional Series',
  };

  const allProducts = [...products, ...accessories];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'boards', name: 'Carrom Boards' },
    { id: 'accessories', name: 'Accessories' },
  ];

  const typeCategories = [
    { id: 'all', name: 'All Types' },
    { id: 'Regular Series', name: 'Regular Series' },
    { id: 'Country Edition', name: 'Country Edition' },
    { id: 'Special Edition', name: 'Special Edition' },
    { id: 'Professional Series', name: 'Professional Series' },
  ];

  let filteredProducts = activeCategory === 'all'
    ? allProducts
    : allProducts.filter(p => p.category === activeCategory);

  if (typeFilter !== 'all') {
    const filterType = seriesIdToType[typeFilter] || typeFilter;
    filteredProducts = filteredProducts.filter(p => p.type === filterType);
  }

  filteredProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    return 0;
  });

  const handleAddToCart = (product) => {
    dispatch(addToCart({ product, quantity: 1 }));
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-16">
      {/* Hero Header */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Premium Carrom Collection
          </h1>
          <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto">
            Handcrafted boards & professional accessories — built for competition and family fun
          </p>
        </div>
      </section>

      {/* Series Categories */}
      <section className="py-8 md:py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
         
          <SeriesGrid layout={seriesLayout} />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all border-2 ${
                    activeCategory === cat.id
                      ? 'bg-slate-900 text-white border-slate-900'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-end">
              <div className="flex items-center gap-2">
                <ArrowUpDown className="w-4 h-4 text-slate-500" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-slate-900"
                >
                  <option value="default">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 rounded-xl border-2 transition-all ${
                    viewMode === 'grid'
                      ? 'bg-slate-900 text-white border-slate-900'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 rounded-xl border-2 transition-all ${
                    viewMode === 'list'
                      ? 'bg-slate-900 text-white border-slate-900'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Products list */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-800 mb-3">No products found</h3>
              <p className="text-slate-500 mb-6">Try another category</p>
              <button
                onClick={() => setActiveCategory('all')}
                className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800"
              >
                View All
              </button>
            </div>
          ) : (
            <div className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
                : 'space-y-6'
            }>
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className={`bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all group hover:shadow-lg hover:border-slate-400 ${
                    viewMode === 'list' ? 'flex items-center' : ''
                  }`}
                >
                  <div className={`relative overflow-hidden bg-slate-50 ${
                    viewMode === 'list' ? 'w-48 shrink-0 aspect-square' : 'aspect-square'
                  }`}>
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

                  <div className="p-6 flex-1 flex flex-col">
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