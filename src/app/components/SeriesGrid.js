"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const seriesData = [
  {
    id: 'Regular Series',
    name: 'Regular Series',
    description: 'Classic carrom boards for everyday play',
    image: '/assets/series/regular.jpeg',
  },
  {
    id: 'Country Edition',
    name: 'Country Edition',
    description: 'Boards featuring iconic landmarks',
    image: '/assets/series/country.jpeg',
  },
  {
    id: 'Special Edition',
    name: 'Special Edition',
    description: 'Premium boards with unique designs',
    image: '/assets/series/special.jpeg',
  },
  {
    id: 'Professional Series',
    name: 'Professional Series',
    description: 'Tournament-grade boards for professionals',
    image: '/assets/series/professinal.jpeg',
  },
];

export default function SeriesGrid({ layout = '1x4', showTitle = true }) {
  const is1x4 = layout === '1x4';
  const is2x2 = layout === '2x2';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12">
      {showTitle && (
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
          Shop by Series
        </h2>
      )}
      <div className={`grid gap-4 md:gap-6 ${
        is1x4 
          ? 'grid-cols-2 md:grid-cols-4' 
          : is2x2 
            ? 'grid-cols-1 sm:grid-cols-2'
            : 'grid-cols-2 md:grid-cols-4'
      }`}>
        {seriesData.map((series) => (
          <Link
            key={series.id}
            href={`/shop?type=${encodeURIComponent(series.id)}`}
            className="group relative overflow-hidden rounded-2xl bg-slate-100 block"
          >
            <div className={`relative overflow-hidden bg-slate-200 ${
              is1x4 
                ? 'aspect-[4/3] md:aspect-[4/3]' 
                : is2x2 
                  ? 'aspect-[3/2]'
                  : 'aspect-square'
            }`}>
              <Image
                src={series.image}
                alt={series.name}
                fill
                sizes={is1x4 ? "(max-width: 768px) 50vw, 25vw" : "(max-width: 768px) 100vw, 50vw"}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                <h3 className="text-sm md:text-base font-bold text-white mb-1">
                  {series.name}
                </h3>
                <p className="text-xs md:text-sm text-white/80 line-clamp-2">
                  {series.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}