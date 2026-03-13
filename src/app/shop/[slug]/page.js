"use client";

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getProductBySlug, products, standProduct } from '../../data/products';
import { useDispatch } from 'react-redux';
import { 
  ShoppingBag, Star, Check, ArrowLeft, Truck, RotateCcw, Shield, 
  CheckCircle, Minus, Plus, Package, Zap, Info
} from 'lucide-react';
import { addToCart } from '../../store/cartSlice';

export default function ProductDetailPage() {
  const params = useParams();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [addStand, setAddStand] = useState(false);
  const [showAddedMessage, setShowAddedMessage] = useState(false);

  const product = getProductBySlug(params.slug);
  const relatedProducts = products.filter(p => p.slug !== product?.slug).slice(0, 3);

  if (!product) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center font-sans">
        <div className="text-center p-10 bg-white border border-slate-200 rounded-[2rem] shadow-sm max-w-md w-full mx-4">
          <div className="w-16 h-16 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Info className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">Product Not Found</h1>
          <p className="text-slate-500 mb-8">The item you are looking for might have been removed or is temporarily unavailable.</p>
          <Link href="/shop" className="inline-flex items-center justify-center w-full bg-slate-900 text-white px-6 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch(addToCart({ product, quantity, addStand }));
    setShowAddedMessage(true);
    setTimeout(() => setShowAddedMessage(false), 3000);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-24">
      
      {/* Top Navigation Bar */}
      <section className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <Link href="/shop" className="group flex items-center gap-2 text-slate-500 hover:text-orange-600 transition-colors w-fit font-semibold text-sm">
            <div className="bg-slate-100 p-1.5 rounded-lg group-hover:bg-orange-100 transition-colors">
              <ArrowLeft className="w-4 h-4" />
            </div>
            Back to Shop
          </Link>
        </div>
      </section>

      {/* Main Product Section */}
      <section className="pt-8 md:pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            
            {/* Left: Product Image Gallery */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-slate-200 rounded-[2rem] p-6 md:p-10 shadow-sm relative group overflow-hidden flex items-center justify-center aspect-square">
                {/* Subtle light background effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-slate-50 rounded-full blur-[80px] pointer-events-none"></div>
                
                <Image 
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover relative z-10 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>

            {/* Right: Product Info & Actions */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              
              {/* Tag / Category */}
              {product.tag && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-[10px] md:text-xs font-bold text-orange-600 tracking-widest uppercase mb-6 w-fit">
                  <Zap className="w-3.5 h-3.5" fill="currentColor" />
                  {product.tag}
                </div>
              )}
              
              {/* Title & Description */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
                {product.name}
              </h1>
              <p className="text-slate-500 text-base md:text-lg mb-8 leading-relaxed">
                {product.description}
              </p>
              
              {/* Price Display */}
              <div className="flex items-end gap-4 mb-8 pb-8 border-b border-slate-200">
                <span className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600 tracking-tight">
                  Rs {product.price.toLocaleString()}
                </span>
                {product.specs?.size && (
                  <span className="text-slate-400 font-medium mb-1.5">/ {product.specs.size}</span>
                )}
              </div>

              {/* Key Features List */}
              {product.features && product.features.length > 0 && (
                <div className="mb-8">
                  <ul className="space-y-3">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-700 font-medium">
                        <div className="mt-0.5 bg-green-100 text-green-600 rounded-full p-0.5 shrink-0">
                          <Check className="w-3.5 h-3.5" strokeWidth={3} />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Optional Stand Add-on */}
              {product.category === 'boards' && standProduct && (
                <div className="mb-8">
                  <label className={`flex items-center gap-4 p-4 rounded-2xl cursor-pointer border-2 transition-all duration-300 ${addStand ? 'bg-orange-50 border-orange-500' : 'bg-white border-slate-200 hover:border-orange-300'}`}>
                    
                    <div className="relative flex items-center justify-center w-6 h-6 shrink-0">
                      <input 
                        type="checkbox" 
                        checked={addStand}
                        onChange={(e) => setAddStand(e.target.checked)}
                        className="peer appearance-none w-6 h-6 border-2 border-slate-300 rounded-md checked:bg-orange-500 checked:border-orange-500 transition-colors cursor-pointer"
                      />
                      <Check className="w-4 h-4 text-white absolute pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" strokeWidth={3} />
                    </div>

                    <div className="flex-1">
                      <p className="font-bold text-slate-900 text-sm md:text-base">Add Foldable Metal Stand</p>
                      <p className="text-orange-600 font-bold text-sm">+Rs 6,500</p>
                    </div>
                    
                    <div className="relative w-14 h-14 bg-white rounded-xl border border-slate-200 p-1 shrink-0">
                      <Image 
                        src={standProduct.image}
                        alt="Stand" 
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  </label>
                </div>
              )}

              {/* Purchase Actions */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                
                {/* Quantity Control */}
                <div className="flex items-center justify-between bg-slate-100 border border-slate-200 rounded-2xl p-2 sm:w-1/3 h-14">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center bg-white text-slate-600 rounded-xl shadow-sm hover:text-orange-600 hover:border-orange-200 transition-all border border-transparent"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="font-black text-slate-900 text-lg w-10 text-center">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center bg-white text-slate-600 rounded-xl shadow-sm hover:text-orange-600 hover:border-orange-200 transition-all border border-transparent"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                {/* Add to Cart Button */}
                <button 
                  onClick={handleAddToCart}
                  className="flex-1 bg-gradient-to-r from-amber-500 to-orange-600 text-white h-14 rounded-2xl font-bold text-lg hover:shadow-[0_10px_20px_rgba(245,158,11,0.3)] transition-all duration-300 flex items-center justify-center gap-3 transform hover:-translate-y-0.5"
                >
                  <ShoppingBag className="w-5 h-5" />
                  Add to Cart - Rs {((product.price + (addStand ? 6500 : 0)) * quantity).toLocaleString()}
                </button>
              </div>

              {/* Success Notification */}
              {showAddedMessage && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-2xl flex items-center gap-3 animate-fade-in-down">
                  <div className="bg-green-500 text-white rounded-full p-1 shrink-0">
                    <Check className="w-4 h-4" strokeWidth={3} />
                  </div>
                  <span className="font-bold text-green-700 text-sm">Successfully added to your cart!</span>
                </div>
              )}

              {/* Trust Features / Badges */}
              <div className="grid grid-cols-2 gap-3 mt-8">
                {[
                  { icon: Truck, title: "Free Delivery", sub: "Orders over 10k" },
                  { icon: RotateCcw, title: "7-Day Returns", sub: "Hassle-free" },
                  { icon: Shield, title: "2-Year Warranty", sub: "Full coverage" },
                  { icon: Package, title: "In Stock", sub: "Ready to ship" },
                ].map((badge, i) => (
                  <div key={i} className="bg-white p-4 rounded-2xl border border-slate-200 flex items-center gap-3">
                    <div className="bg-orange-50 text-orange-500 p-2.5 rounded-xl shrink-0">
                      <badge.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-xs sm:text-sm leading-tight">{badge.title}</p>
                      <p className="text-[10px] sm:text-xs text-slate-500 mt-0.5">{badge.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Details Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Specifications */}
        {product.specs && Object.keys(product.specs).length > 0 && (
          <div className="bg-white border border-slate-200 rounded-[2rem] p-8 md:p-10 shadow-sm">
            <h2 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
              <Star className="w-6 h-6 text-amber-500" fill="currentColor" />
              Technical Specifications
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="p-5 bg-slate-50 border border-slate-100 rounded-2xl hover:border-slate-200 transition-colors">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{key}</p>
                  <p className="font-bold text-slate-900">{value}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* What's Included */}
        {product.included && product.included.length > 0 && (
          <div className="bg-white border border-slate-200 rounded-[2rem] p-8 md:p-10 shadow-sm">
            <h2 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
              <Package className="w-6 h-6 text-amber-500" />
              What's in the Box
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.included.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium p-4 bg-slate-50 rounded-xl">
                  <div className="bg-white rounded-full p-1 shadow-sm shrink-0">
                    <Check className="w-4 h-4 text-amber-500" strokeWidth={3} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="pt-12">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-8 tracking-tight">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {relatedProducts.map((relProduct) => (
                <Link 
                  key={relProduct.id} 
                  href={`/shop/${relProduct.slug}`}
                  className="bg-white border border-slate-200 rounded-[2rem] overflow-hidden hover:border-orange-300 hover:shadow-lg transition-all duration-300 group flex flex-col"
                >
                  <div className="aspect-square overflow-hidden bg-slate-50 p-6 flex items-center justify-center relative">
                    <Image 
                      src={relProduct.image}
                      alt={relProduct.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500 drop-shadow-md relative z-10"
                    />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col flex-1 border-t border-slate-100">
                    <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-orange-600 transition-colors">{relProduct.name}</h3>
                    <p className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600 mt-auto">
                      Rs {relProduct.price.toLocaleString()}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
      
    </div>
  );
}