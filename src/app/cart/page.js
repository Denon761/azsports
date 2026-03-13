"use client";

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../store/cartSlice';
import Link from 'next/link';
import { 
  Trash2, Minus, Plus, ArrowLeft, ShoppingBag, 
  Check, Package, Shield, Truck, Zap 
} from 'lucide-react';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const totalPrice = useSelector(state => state.cart.totalPrice);

  const handleRemove = (id, addStand) => {
    dispatch(removeFromCart({ id, addStand }));
  };

  const handleQuantityChange = (id, addStand, newQuantity) => {
    dispatch(updateQuantity({ id, addStand, quantity: newQuantity }));
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
            Continue Shopping
          </Link>
        </div>
      </section>

      {/* Page Header */}
      <section className="pt-10 pb-6 max-w-7xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Shopping Cart</h1>
        <p className="text-slate-500 mt-2 font-medium">
          You have {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
        </p>
      </section>

      {/* Main Cart Content */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {cartItems.length === 0 ? (
            
            /* Empty State */
            <div className="bg-white border border-slate-200 rounded-[2rem] p-12 md:p-20 text-center shadow-sm max-w-3xl mx-auto mt-8">
              <div className="w-24 h-24 bg-orange-50 text-orange-500 rounded-[2rem] flex items-center justify-center mx-auto mb-6">
                <ShoppingBag className="w-10 h-10" strokeWidth={2.5} />
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 tracking-tight">Your cart is empty</h2>
              <p className="text-slate-500 mb-8 max-w-sm mx-auto">Looks like you haven't added any premium carrom gear to your cart yet.</p>
              <Link href="/shop" className="inline-flex bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all duration-300 transform hover:-translate-y-0.5 shadow-md">
                Start Shopping
              </Link>
            </div>

          ) : (
            
            /* Active Cart Layout */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-4">
              
              {/* Left Column: Cart Items list */}
              <div className="lg:col-span-7 xl:col-span-8 space-y-6">
                
                {/* Items Card */}
                <div className="bg-white border border-slate-200 rounded-[2rem] overflow-hidden shadow-sm">
                  {cartItems.map((item, index) => (
                    <div 
                      key={`${item.id}-${item.addStand}`}
                      className={`p-6 md:p-8 flex flex-col sm:flex-row gap-6 ${index !== cartItems.length - 1 ? 'border-b border-slate-100' : ''}`}
                    >
                      {/* Product Image */}
                      <div className="w-24 h-24 sm:w-32 sm:h-32 bg-slate-50 rounded-2xl overflow-hidden shrink-0 border border-slate-200 flex items-center justify-center relative group">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 flex flex-col">
                        
                        {/* Header: Title & Delete */}
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-1">{item.name}</h3>
                            {item.tag && (
                              <div className="inline-flex items-center gap-1 bg-orange-100 text-orange-600 text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider">
                                <Zap className="w-3 h-3" fill="currentColor" />
                                {item.tag}
                              </div>
                            )}
                          </div>
                          
                          <button 
                            onClick={() => handleRemove(item.id, item.addStand)}
                            className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                            title="Remove item"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>

                        {item.description && (
                          <p className="text-sm text-slate-500 mt-2 line-clamp-1">{item.description}</p>
                        )}

                        {/* Price & Quantity Controls */}
                        <div className="mt-auto pt-6 flex flex-wrap items-end justify-between gap-4">
                          
                          {/* Price Block */}
                          <div>
                            <p className="text-2xl font-black text-slate-900 tracking-tight">
                              Rs {((item.price + (item.addStand ? 6500 : 0)) * item.quantity).toLocaleString()}
                            </p>
                            {item.addStand && (
                              <p className="text-xs font-bold text-orange-600 mt-1 flex items-center gap-1">
                                <Check className="w-3 h-3" /> Includes Foldable Stand
                              </p>
                            )}
                          </div>

                          {/* Quantity Control */}
                          <div className="flex items-center bg-slate-100 border border-slate-200 rounded-xl p-1.5 h-12">
                            <button 
                              onClick={() => handleQuantityChange(item.id, item.addStand, item.quantity - 1)}
                              className="w-8 h-8 flex items-center justify-center bg-white text-slate-600 rounded-lg shadow-sm hover:text-orange-600 disabled:opacity-50 disabled:hover:text-slate-600 transition-all"
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="font-bold text-slate-900 w-10 text-center">{item.quantity}</span>
                            <button 
                              onClick={() => handleQuantityChange(item.id, item.addStand, item.quantity + 1)}
                              className="w-8 h-8 flex items-center justify-center bg-white text-slate-600 rounded-lg shadow-sm hover:text-orange-600 transition-all"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>

                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* What's Included Box */}
                <div className="bg-white border border-slate-200 rounded-[2rem] p-6 md:p-8 shadow-sm">
                  <h3 className="text-lg font-black text-slate-900 mb-6 flex items-center gap-2">
                    <Package className="w-5 h-5 text-amber-500" />
                    What's in your package
                  </h3>
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div key={`${item.id}-${item.addStand}`} className="pl-4 border-l-2 border-orange-400">
                        <p className="font-bold text-slate-800 text-sm mb-2">{item.quantity}x {item.name}</p>
                        {item.included ? (
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {item.included.map((inc, idx) => (
                              <li key={idx} className="text-xs text-slate-500 font-medium flex items-center gap-2">
                                <div className="bg-green-100 text-green-600 rounded-full p-0.5 shrink-0">
                                  <Check className="w-3 h-3" strokeWidth={3} />
                                </div>
                                {inc}
                              </li>
                            ))}
                            {item.addStand && (
                              <li className="text-xs text-orange-600 font-bold flex items-center gap-2">
                                <div className="bg-orange-100 text-orange-600 rounded-full p-0.5 shrink-0">
                                  <Check className="w-3 h-3" strokeWidth={3} />
                                </div>
                                Foldable Metal Stand
                              </li>
                            )}
                          </ul>
                        ) : (
                          <p className="text-xs text-slate-500">Standard packaging included.</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Column: Order Summary (Sticky) */}
              <div className="lg:col-span-5 xl:col-span-4">
                <div className="bg-white border border-slate-200 rounded-[2rem] p-6 md:p-8 shadow-sm sticky top-24">
                  
                  <h2 className="text-2xl font-black text-slate-900 mb-6 tracking-tight">Order Summary</h2>

                  {/* Pricing Breakdown */}
                  <div className="space-y-4 mb-6 pb-6 border-b border-slate-100">
                    <div className="flex justify-between text-slate-500 font-medium text-sm md:text-base">
                      <span>Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                      <span className="text-slate-900 font-bold">Rs {totalPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-slate-500 font-medium text-sm md:text-base">
                      <span>Shipping Delivery</span>
                      <span className="text-green-600 font-bold">FREE</span>
                    </div>
                  </div>

                  {/* Total Amount */}
                  <div className="flex justify-between items-end mb-8">
                    <span className="text-lg font-bold text-slate-900">Total</span>
                    <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600 tracking-tight">
                      Rs {totalPrice.toLocaleString()}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <Link href="/checkout" className="flex items-center justify-center w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg hover:shadow-[0_10px_20px_rgba(245,158,11,0.3)] transition-all duration-300 transform hover:-translate-y-0.5">
                      Proceed to Checkout
                    </Link>
                    <Link href="/shop" className="flex items-center justify-center w-full bg-slate-50 text-slate-600 border border-slate-200 py-4 rounded-2xl font-bold text-sm hover:bg-slate-100 hover:text-slate-900 transition-all duration-300">
                      Continue Shopping
                    </Link>
                  </div>

                  {/* Trust Badges */}
                  <div className="mt-8 pt-8 border-t border-slate-100">
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { icon: Truck, title: "Free Delivery" },
                        { icon: Package, title: "Secure Package" },
                        { icon: Shield, title: "2-Year Warranty" },
                        { icon: Check, title: "7-Day Returns" },
                      ].map((badge, i) => (
                        <div key={i} className="flex flex-col items-center justify-center text-center p-3 bg-slate-50 rounded-xl border border-slate-100">
                          <badge.icon className="w-5 h-5 text-orange-500 mb-1.5" />
                          <span className="text-[10px] md:text-xs font-bold text-slate-600">{badge.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CartPage;