"use client";

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getProductBySlug, products } from '../../data/products';
import { useDispatch } from 'react-redux';
import { 
  ShoppingBag, Star, Check, ArrowLeft, Truck, RotateCcw, Shield, 
  Minus, Plus, Package, ChevronDown
} from 'lucide-react';
import { addToCart } from '../../store/cartSlice';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const [showAddedMessage, setShowAddedMessage] = useState(false);
  const [openSection, setOpenSection] = useState(null);

  const product = getProductBySlug(params.slug);
  const relatedProducts = products.filter(p => p.slug !== product?.slug).slice(0, 3);

  const productPrice = product?.sizes ? product.sizes[0].price : product?.price;
  const availableSizes = product?.sizes || [];

  if (!product) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center font-sans">
        <div className="text-center p-10 bg-white border border-slate-200 rounded-[2rem] shadow-sm max-w-md w-full mx-4">
          <div className="w-16 h-16 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Package className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-black text-slate-900 mb-4">Product Not Found</h1>
          <p className="text-slate-500 mb-8">The product you're looking for doesn't exist or has been removed.</p>
          <Link href="/shop" className="inline-flex bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all">
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch(addToCart({ 
      product, 
      quantity, 
      size: selectedSize || (availableSizes[0]?.size || null) 
    }));
    setShowAddedMessage(true);
    setTimeout(() => setShowAddedMessage(false), 3000);
  };

  const handleBuyNow = () => {
    dispatch(addToCart({ 
      product, 
      quantity, 
      size: selectedSize || (availableSizes[0]?.size || null) 
    }));
    router.push('/checkout');
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Top Nav */}
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
      <section className="py-12 pb-24 md:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            
            {/* Left - Image */}
            <div className="relative aspect-square bg-white rounded-3xl overflow-hidden border border-slate-200">
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
              <p className="text-slate-500 font-medium mb-2">{product.type}</p>
              <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 font-heading">{product.name}</h1>
              <p className="text-slate-600 mb-8 leading-relaxed">{product.description}</p>
               
{/* Size Selection */}
              {availableSizes.length > 0 && (
                <div className="mb-6">
                  <label className="text-sm font-bold text-slate-900 mb-3 block">Select Size</label>
                  <div className="grid grid-cols-4 gap-3">
                    {availableSizes.map((sizeOption) => (
                      <button
                        key={sizeOption.size}
                        onClick={() => setSelectedSize(sizeOption.size)}
                        className={`px-4 py-3 rounded-xl font-bold border-2 transition-all ${
                          selectedSize === sizeOption.size
                            ? 'bg-slate-900 text-white border-slate-900'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
                        }`}
                      >
                        {sizeOption.size}"
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Selector - After Size */}
              <div className="mb-6 w-fit">
                <label className="text-sm font-bold text-slate-900 mb-3 block">Quantity</label>
                <div className="flex items-center bg-white border border-slate-200 rounded-2xl h-12 px-2 w-full sm:w-40">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-full flex items-center justify-center text-slate-600 hover:text-orange-600 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="font-black text-slate-900 text-lg w-10 text-center">{quantity}</span>
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
                <span className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#241b14] to-[#3d2e22] tracking-tight">
                  Rs {(selectedSize ? availableSizes.find(s => s.size === selectedSize)?.price : productPrice).toLocaleString()}
                </span>
              </div>

              {/* Product Details Dropdowns */}
              <div className="space-y-4 mb-8">
                <h3 className="text-lg font-bold text-slate-900">Product Details</h3>
                
                {/* Product Description */}
                <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
                  <button 
                    onClick={() => setOpenSection(openSection === 'description' ? null : 'description')}
                    className="w-full flex items-center justify-between p-4 font-bold text-slate-900 hover:bg-slate-50 transition-colors text-sm"
                  >
                    <span>Product Description</span>
                    <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${openSection === 'description' ? 'rotate-180' : ''}`} />
                  </button>
                  {openSection === 'description' && (
                    <div className="px-4 pb-4 text-slate-600 text-sm leading-relaxed">
                      {product.description}
                    </div>
                  )}
                </div>

                {/* Shipping Info */}
                <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
                  <button 
                    onClick={() => setOpenSection(openSection === 'shipping' ? null : 'shipping')}
                    className="w-full flex items-center justify-between p-4 font-bold text-slate-900 hover:bg-slate-50 transition-colors text-sm"
                  >
                    <span>Shipping Information</span>
                    <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${openSection === 'shipping' ? 'rotate-180' : ''}`} />
                  </button>
                  {openSection === 'shipping' && (
                    <div className="px-4 pb-4 text-slate-600 text-sm leading-relaxed space-y-2">
                      <p>Free shipping on orders over Rs 10,000. Standard delivery takes 5-7 business days.</p>
                      <p>Express shipping (2-3 business days) available for Rs 500 extra.</p>
                    </div>
                  )}
                </div>

                {/* Our Guarantee */}
                <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
                  <button 
                    onClick={() => setOpenSection(openSection === 'guarantee' ? null : 'guarantee')}
                    className="w-full flex items-center justify-between p-4 font-bold text-slate-900 hover:bg-slate-50 transition-colors text-sm"
                  >
                    <span>Our Guarantee</span>
                    <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${openSection === 'guarantee' ? 'rotate-180' : ''}`} />
                  </button>
                  {openSection === 'guarantee' && (
                    <div className="px-4 pb-4 text-slate-600 text-sm leading-relaxed space-y-2">
                      <p>2-year warranty covering manufacturing defects.</p>
                      <p>30-day money-back guarantee.</p>
                    </div>
                  )}
                </div>

                {/* How It Works */}
                <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
                  <button 
                    onClick={() => setOpenSection(openSection === 'howItWorks' ? null : 'howItWorks')}
                    className="w-full flex items-center justify-between p-4 font-bold text-slate-900 hover:bg-slate-50 transition-colors text-sm"
                  >
                    <span>How It Works</span>
                    <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${openSection === 'howItWorks' ? 'rotate-180' : ''}`} />
                  </button>
                  {openSection === 'howItWorks' && (
                    <div className="px-4 pb-4 text-slate-600 text-sm leading-relaxed space-y-2">
                      <p><strong>1. Order:</strong> Select size & add to cart</p>
                      <p><strong>2. Confirm:</strong> Review & checkout</p>
                      <p><strong>3. Ship:</strong> Ships in 24-48 hours</p>
                      <p><strong>4. Deliver:</strong> At your doorstep</p>
                    </div>
                  )}
                </div>
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

              {/* Success Notification - Fixed at top when add to cart clicked */}
              {showAddedMessage && (
                <div className="fixed top-20 left-4 right-4 z-50 md:static md:mb-6 md:p-0">
                  <div className="p-4 bg-green-50 border border-green-200 rounded-2xl flex items-center gap-3 shadow-lg md:shadow-none">
                    <div className="bg-green-500 text-white rounded-full p-1 shrink-0">
                      <Check className="w-4 h-4" strokeWidth={3} />
                    </div>
                    <span className="font-bold text-green-700 text-sm">Successfully added to your cart!</span>
                  </div>
                </div>
              )}

              {/* Action Buttons - 2x1 Grid */}
              <div className="grid grid-cols-2 gap-3 mb-8 fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 z-50 md:relative md:bottom-auto md:left-auto md:right-auto md:bg-transparent md:border-none md:p-0 md:mb-0">
                {/* Add to Cart Button */}
                <button 
                  onClick={handleAddToCart}
                  className="bg-gradient-to-r from-[#241b14] to-[#3d2e22] text-white h-12 rounded-2xl font-bold px-4 py-3 hover:shadow-[0_10px_20px_rgba(36,27,20,0.3)] transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>Add to Cart</span>
                </button>

                {/* Buy Now Button */}
                <button 
                  onClick={handleBuyNow}
                  className="bg-orange-500 text-white h-12 rounded-2xl font-bold px-4 py-3 hover:bg-orange-600 transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>Buy Now</span>
                </button>
              </div>

              {/* Trust Features */}
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
        
        {/* Specifications - Show selected size specs */}
        {selectedSize && (
          <div className="bg-white border border-slate-200 rounded-[2rem] p-8 md:p-10 shadow-sm">
            <h2 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
              <Star className="w-6 h-6 text-amber-500" fill="currentColor" />
              Technical Specifications ({selectedSize}")
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {(() => {
                const sizeData = availableSizes.find(s => s.size === selectedSize);
                const specs = sizeData?.specs || {};
                return Object.entries(specs).map(([key, value]) => (
                  <div key={key} className="p-5 bg-slate-50 border border-slate-100 rounded-2xl">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{key}</p>
                    <p className="font-bold text-slate-900">{value}</p>
                  </div>
                ));
              })()}
            </div>
          </div>
        )}
      </section>

      {/* Related Products */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((relProduct) => (
              <Link 
                key={relProduct.id} 
                href={`/shop/${relProduct.slug}`}
                className="bg-white border border-slate-200 rounded-2xl p-4 hover:shadow-lg transition-all"
              >
                <div className="relative aspect-square bg-slate-50 rounded-xl overflow-hidden mb-4">
                  <Image
                    src={relProduct.image}
                    alt={relProduct.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-slate-900">{relProduct.name}</h3>
                <p className="text-amber-600 font-bold mt-1">
                  Rs {(relProduct.sizes ? relProduct.sizes[0].price : relProduct.price).toLocaleString()}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}