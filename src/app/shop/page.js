"use client";

import React, { Suspense } from 'react';
import ShopPageContent from './ShopPageContent';

export default function ShopPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-slate-600">Loading...</div>
      </div>
    }>
      <ShopPageContent />
    </Suspense>
  );
}