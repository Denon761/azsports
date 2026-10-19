"use client";

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getProductBySlug, products } from '../../data/products';
import { useDispatch } from 'react-redux';
import { 
  ShoppingBag, Star, Check, ArrowLeft,
  Minus, Plus, Package
} from 'lucide-react';
import { addToCart } from '../../store/cartSlice';
import { useCurrency } from '../../context/CurrencyContext';

export default function ProductDetail() {
  const params = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const { formatCurrency, getLocalizedPrice } = useCurrency();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const [showAddedMessage, setShowAddedMessage] = useState(false);
  const [sizeError, setSizeError] = useState(false);

  const product = getProductBySlug(params.slug);
  const relatedProducts = products.filter(p => p.slug !== product?.slug).slice(0, 3);

  const productPrice = product?.sizes ? product.sizes[0].price : product?.price;
  const availableSizes = product?.sizes || [];
  
  // Compute localized price for current selection
  const sizeIndex = selectedSize ? availableSizes.findIndex(s => s.size === selectedSize) : 0;
  const displayPrice = getLocalizedPrice(product, sizeIndex >= 0 ? sizeIndex : 0);

  if (!product) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center font-sans text-xs">
        <div className="text-center p-10 bg-white border border-slate-200 rounded-lg max-w-md w-full mx-4">
          <div className="w-16 h-16 bg-red-50 text-red-500 rounded-lg flex items-center justify-center mx-auto mb-6">
            <Package className="w-8 h-8" />
          </div>
          <h1 className="text-base font-black text-slate-900 mb-4">Product Not Found</h1>
          <p className="text-slate-500 mb-8">The product you&apos;re looking for doesn&apos;t exist or has been removed.</p>
          <Link href="/shop" className="inline-flex bg-slate-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-slate-800 transition-all">
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (availableSizes.length > 0 && !selectedSize) {
      setSizeError(true);
      return;
    }
    const sizeOption = availableSizes.find(s => s.size === selectedSize) || availableSizes[0];
    const sizeIndex = availableSizes.findIndex(s => s.size === selectedSize);
    const localizedPrice = getLocalizedPrice(product, sizeIndex >= 0 ? sizeIndex : 0);

    dispatch(addToCart({
      product,
      quantity,
      size: selectedSize || sizeOption?.size || null,
      price: localizedPrice,
    }));
    setShowAddedMessage(true);
    setTimeout(() => setShowAddedMessage(false), 3000);
  };

  const handleBuyNow = () => {
    if (availableSizes.length > 0 && !selectedSize) {
      setSizeError(true);
      return;
    }
    const sizeOption = availableSizes.find(s => s.size === selectedSize) || availableSizes[0];
    const sizeIndex = availableSizes.findIndex(s => s.size === selectedSize);
    const localizedPrice = getLocalizedPrice(product, sizeIndex >= 0 ? sizeIndex : 0);

    dispatch(addToCart({
      product,
      quantity,
      size: selectedSize || sizeOption?.size || null,
      price: localizedPrice,
    }));
    router.push('/checkout');
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-xs">
      {/* Top Nav */}
      <section className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <Link href="/shop" className="group flex items-center gap-2 text-slate-500 hover:text-orange-600 transition-colors w-fit font-semibold text-xs">
            <div className="bg-slate-100 p-1.5 rounded-md group-hover:bg-orange-100 transition-colors">
              <ArrowLeft className="w-4 h-4" />
            </div>
            Back to Shop
          </Link>
        </div>
      </section>

      {/* Main Product Section */}
      <section className="py-12 pb-24 md:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            
            {/* Left - Image */}
            <div className="relative aspect-square bg-white rounded-lg overflow-hidden border border-slate-200">
                  <Image
                    src={product.image}
                alt={product.name}
                    fill
                    className="object-cover"
                priority
                  />

            </div>

            {/* Right - Details */}
            <div className="flex flex-col">
              <h1 className="text-lg font-black text-slate-900 mb-2 font-heading">{product.name}</h1>
              <p className="text-xs text-slate-500 font-medium mb-4">{product.type}</p>
              <p className="text-xs text-slate-600 mb-8 leading-relaxed">{product.description}</p>
               
{/* Size Selection */}
              {availableSizes.length > 0 && (
                <div className="mb-6">
                  <label className="text-xs font-bold text-slate-900 mb-3 block">Select Size</label>
                  <div className="grid grid-cols-4 gap-2">
                    {availableSizes.map((sizeOption) => (
                      <button
                        key={sizeOption.size}
                        onClick={() => {
                          setSelectedSize(sizeOption.size);
                          setSizeError(false);
                        }}
                        className={`px-2 py-2 rounded-md text-xs font-bold border-2 transition-all ${
                          selectedSize === sizeOption.size
                            ? 'bg-slate-900 text-white border-slate-900'
                            : sizeError
                              ? 'bg-white text-slate-700 border-red-300 hover:border-red-400'
                              : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
                        }`}
                      >
                        {sizeOption.size}&quot;
                      </button>
                    ))}
                  </div>
                  {sizeError && (
                    <p className="text-red-500 text-xs font-semibold mt-2">Please select a size before continuing.</p>
                  )}
                </div>
              )}

              {/* Quantity Selector - After Size */}
              <div className="mb-6 w-fit">
                <label className="text-xs font-bold text-slate-900 mb-3 block">Quantity</label>
                <div className="flex items-center bg-white border border-slate-200 rounded-lg h-12 px-2 w-full sm:w-40">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-full flex items-center justify-center text-slate-600 hover:text-orange-600 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="font-black text-slate-900 text-sm w-10 text-center">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-full flex items-center justify-center text-slate-600 hover:text-orange-600 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
               
               {/* Price Display */}
               <div className="flex items-end gap-4 mb-8 pb-8 border-b border-slate-200">
                 <span className="text-lg md:text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-[#241b14] to-[#3d2e22] tracking-tight">
                   {formatCurrency(displayPrice)}
                 </span>
               </div>

              {/* Specifications - Show selected size specs, defaulting to the first size */}
              {availableSizes.length > 0 && (() => {
                const activeSize = selectedSize || availableSizes[0].size;
                const sizeData = availableSizes.find(s => s.size === activeSize);
                const specs = sizeData?.specs || {};
                return (
                  <div className="mb-8">
                    <h2 className="text-xs font-black text-slate-900 mb-3 flex items-center gap-2">
                      <Star className="w-4 h-4 text-amber-500" fill="currentColor" />
                      Technical Specifications ({activeSize}&quot;)
                    </h2>
                    <div className="grid grid-cols-2 gap-3">
                      {Object.entries(specs).map(([key, value]) => (
                        <div key={key} className="p-3 bg-white border border-slate-200 rounded-lg">
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">{key}</p>
                          <p className="text-xs font-bold text-slate-900">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })()}

              {/* Key Features List */}
              {product.features && product.features.length > 0 && (
                <div className="mb-8">
                  <ul className="space-y-3">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs text-slate-700 font-medium">
                        <div className="mt-0.5 bg-green-100 text-green-600 rounded-full p-0.5 shrink-0">
                          <Check className="w-3.5 h-3.5" strokeWidth={3} />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Success Notification - Fixed at top when add to cart clicked */}
              {showAddedMessage && (
                <div className="fixed top-20 left-4 right-4 z-50 md:static md:mb-6 md:p-0">
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                    <div className="bg-green-500 text-white rounded-full p-1 shrink-0">
                      <Check className="w-4 h-4" strokeWidth={3} />
                    </div>
                    <span className="font-bold text-green-700 text-xs">Successfully added to your cart!</span>
                  </div>
                </div>
              )}

              {/* Action Buttons - 2x1 Grid */}
              <div className="grid grid-cols-2 gap-3 mb-8 fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 z-50 md:relative md:bottom-auto md:left-auto md:right-auto md:bg-transparent md:border-none md:p-0 md:mb-0">
                {/* Add to Cart Button */}
                <button 
                  onClick={handleAddToCart}
                  className="bg-gradient-to-r from-[#241b14] to-[#3d2e22] text-white text-xs h-12 rounded-lg font-bold px-4 py-3 transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>Add to Cart</span>
                </button>

                {/* Buy Now Button */}
                <button 
                  onClick={handleBuyNow}
                  className="bg-orange-500 text-white text-xs h-12 rounded-lg font-bold px-4 py-3 hover:bg-orange-600 transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>Buy Now</span>
                </button>
              </div>

              {/* Trust Features */}
              <div className="grid grid-cols-1 gap-3 mt-8">
                {[
                  { icon: Package, title: "In Stock", sub: "Ready to ship" },
                ].map((badge, i) => (
                  <div key={i} className="bg-white p-4 rounded-lg border border-slate-200 flex items-center gap-3">
                    <div className="bg-orange-50 text-orange-500 p-2.5 rounded-md shrink-0">
                      <badge.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-xs sm:text-xs leading-tight">{badge.title}</p>
                      <p className="text-[10px] sm:text-xs text-slate-500 mt-0.5">{badge.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-sm font-black text-slate-900 mb-8">You May Also Like</h2>
          <div className="grid grid-cols-2 gap-6">
            {relatedProducts.map((relProduct) => (
              <Link 
                key={relProduct.id} 
                href={`/shop/${relProduct.slug}`}
                className="bg-white border border-slate-200 rounded-lg p-2 transition-all"
              >
                <div className="relative aspect-square bg-slate-50 rounded-md overflow-hidden mb-4">
                  <Image
                    src={relProduct.image}
                    alt={relProduct.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xs font-bold text-slate-900">{relProduct.name}</h3>
                <p className="text-xs text-amber-600 font-bold mt-1">
                  {formatCurrency(getLocalizedPrice(relProduct, 0))}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}