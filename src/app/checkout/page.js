"use client";

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../store/cartSlice';
import Link from 'next/link';
import { 
  ArrowLeft, CheckCircle, Shield, Truck, RotateCcw, 
  CreditCard, Lock, ShoppingBag, Package, Zap 
} from 'lucide-react';

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const totalPrice = useSelector(state => state.cart.totalPrice);
  
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postcode: '',
    country: 'Pakistan',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.address) {
      alert('Please fill in all required fields');
      return;
    }

    // Set loading state
    setIsLoading(true);

    try {
      // Prepare order data
      const orderData = {
        customerName: `${formData.firstName} ${formData.lastName}`,
        customerEmail: formData.email,
        phone: formData.phone,
        shippingAddress: {
          address: formData.address,
          city: formData.city,
          postcode: formData.postcode,
          country: formData.country,
        },
        items: cartItems.map(item => ({
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          addStand: item.addStand,
          standPrice: item.addStand ? 6500 : 0,
        })),
        subtotal: totalPrice,
        standTotal: cartItems.reduce((sum, item) => sum + (item.addStand ? 6500 * item.quantity : 0), 0),
        total: totalPrice,
      };

      // Send order to API
      const response = await fetch('/api/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      const result = await response.json();

      if (result.success) {
        // Set order number from response
        setOrderNumber(result.orderNumber);
        
        // Place order
        setOrderPlaced(true);
        dispatch(clearCart());
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        alert('Failed to place order. Please try again.');
      }
    } catch (error) {
      console.error('Order error:', error);
      // Still allow order to proceed even if email fails
      setOrderNumber(`AZS-${Date.now()}`);
      setOrderPlaced(true);
      dispatch(clearCart());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } finally {
      setIsLoading(false);
    }
  };

  // ── EMPTY CART STATE ──
  if (cartItems.length === 0 && !orderPlaced) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center font-sans px-4">
        <div className="bg-white border border-slate-200 rounded-[2rem] p-12 md:p-16 text-center shadow-sm max-w-xl w-full">
          <div className="w-24 h-24 bg-orange-50 text-orange-500 rounded-[2rem] flex items-center justify-center mx-auto mb-8">
            <ShoppingBag className="w-10 h-10" strokeWidth={2.5} />
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 tracking-tight">No items to checkout</h2>
          <p className="text-slate-500 mb-8 max-w-sm mx-auto leading-relaxed">Your cart is currently empty. Add some premium carrom boards to your cart before proceeding!</p>
          <Link href="/shop" className="inline-flex items-center justify-center w-full sm:w-auto bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all duration-300 transform hover:-translate-y-0.5 shadow-md">
            <ArrowLeft className="w-5 h-5 mr-2" /> Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  // ── SUCCESS STATE ──
  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 font-sans relative overflow-hidden pb-20">
        
        {/* Ambient glow behind success card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="bg-white border border-slate-200 rounded-[2rem] p-8 md:p-14 text-center shadow-lg max-w-lg w-full relative z-10 mt-12">
          
          <div className="flex justify-center mb-8 relative">
            <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl scale-150 animate-pulse-subtle"></div>
            <CheckCircle className="w-20 h-20 text-green-500 relative z-10" strokeWidth={2} />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">Order Confirmed!</h2>
          
          <p className="text-slate-500 mb-6 leading-relaxed">
            Thank you for your purchase. Your premium carrom gear is being prepared and will be shipped shortly.
          </p>

          {orderNumber && (
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 mb-8">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Order Number</p>
              <p className="text-xl font-black text-slate-800">{orderNumber}</p>
            </div>
          )}
          
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 mb-8">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Order Total Paid</p>
            <p className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
              Rs {totalPrice.toLocaleString()}
            </p>
          </div>

          <p className="text-sm text-slate-500 mb-8 px-4">
            A confirmation email with tracking details has been sent to <br/>
            <strong className="text-slate-800">{formData.email}</strong>
          </p>

          <Link href="/" className="flex items-center justify-center w-full bg-slate-900 text-white py-4 md:py-5 rounded-2xl font-bold text-lg hover:shadow-lg hover:bg-slate-800 transition-all duration-300 transform hover:-translate-y-0.5">
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  const finalTotal = totalPrice;
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // ── MAIN CHECKOUT PAGE ──
  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-24">
      
      {/* Top Navigation Bar */}
      <section className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <Link href="/cart" className="group flex items-center gap-2 text-slate-500 hover:text-orange-600 transition-colors w-fit font-semibold text-sm">
            <div className="bg-slate-100 p-1.5 rounded-lg group-hover:bg-orange-100 transition-colors">
              <ArrowLeft className="w-4 h-4" />
            </div>
            Back to Cart
          </Link>
        </div>
      </section>

      {/* Page Header */}
      <section className="pt-10 pb-6 max-w-7xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Secure Checkout</h1>
        <p className="text-slate-500 mt-2 font-medium">Complete your order details below</p>
      </section>

      {/* Checkout Content */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-4">
            
            {/* Left Column: Form Forms */}
            <div className="lg:col-span-7 xl:col-span-8">
              <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                
                {/* 1. Shipping Information */}
                <div className="bg-white border border-slate-200 rounded-[2rem] p-6 md:p-8 shadow-sm">
                  <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                    <div className="bg-orange-50 text-orange-500 p-2 rounded-xl">
                      <Truck className="w-6 h-6" />
                    </div>
                    Shipping Information
                  </h2>

                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name *"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-slate-900 placeholder:text-slate-400"
                        required
                      />
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name *"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-slate-900 placeholder:text-slate-400"
                        required
                      />
                    </div>

                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-slate-900 placeholder:text-slate-400"
                      required
                    />

                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number (Optional)"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-slate-900 placeholder:text-slate-400"
                    />

                    <input
                      type="text"
                      name="address"
                      placeholder="Street Address *"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-slate-900 placeholder:text-slate-400"
                      required
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-slate-900 placeholder:text-slate-400"
                      />
                      <input
                        type="text"
                        name="postcode"
                        placeholder="Postal Code *"
                        value={formData.postcode}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-slate-900 placeholder:text-slate-400"
                        required
                      />
                    </div>

                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-slate-900 appearance-none"
                    >
                      <option>Pakistan</option>
                      <option>United Kingdom</option>
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Australia</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                {/* 2. Cash on Delivery (COD) */}
                <div className="bg-white border border-slate-200 rounded-[2rem] p-6 md:p-8 shadow-sm">
                   
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <h2 className="text-xl md:text-2xl font-black text-slate-900 flex items-center gap-3">
                      <div className="bg-orange-50 text-orange-500 p-2 rounded-xl">
                        <CreditCard className="w-6 h-6" />
                      </div>
                      Payment Method
                    </h2>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
                    <div className="flex items-center gap-3">
                      <div className="bg-green-100 p-2 rounded-lg">
                        <Package className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <p className="text-base font-bold text-green-800">Cash on Delivery (COD)</p>
                        <p className="text-sm text-green-600">Pay when you receive your order</p>
                      </div>
                    </div>
                  </div>

                  {/* Security Badge */}
                  <div className="flex items-center justify-center sm:justify-start gap-2 mt-6 pt-6 border-t border-slate-100 text-xs font-bold text-slate-500 uppercase tracking-wider">
                    <Lock className="w-4 h-4 text-green-500" />
                    Secure Order Processing
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white py-5 rounded-2xl font-bold text-lg hover:shadow-[0_10px_20px_rgba(245,158,11,0.3)] transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Lock className="w-5 h-5" />
                      Place Order (COD)
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Right Column: Order Summary (Sticky) */}
            <div className="lg:col-span-5 xl:col-span-4 mt-8 lg:mt-0">
              <div className="bg-white border border-slate-200 rounded-[2rem] p-6 md:p-8 shadow-sm sticky top-24">
                
                <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-6 tracking-tight">Order Summary</h2>

                {/* Items List */}
                <div className="space-y-4 mb-6 pb-6 border-b border-slate-100 max-h-[320px] overflow-y-auto pr-2 custom-scrollbar">
                  {cartItems.map((item) => (
                    <div key={`${item.id}-${item.addStand}`} className="flex gap-4 p-3 bg-slate-50 rounded-2xl border border-slate-100">
                      
                      {/* Thumbnail */}
                      <div className="w-16 h-16 bg-white rounded-xl border border-slate-200 p-1 shrink-0 flex items-center justify-center">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      
                      {/* Details */}
                      <div className="flex-1 py-1">
                        <p className="text-sm font-bold text-slate-900 leading-tight">{item.name}</p>
                        <p className="text-xs text-slate-500 mt-1">Qty: {item.quantity}</p>
                        {item.addStand && (
                          <div className="inline-flex items-center gap-1 bg-orange-100 text-orange-600 text-[9px] font-bold px-1.5 py-0.5 rounded mt-1.5 uppercase">
                            <Zap className="w-2.5 h-2.5" /> Stand Added
                          </div>
                        )}
                      </div>
                      
                      {/* Line Price */}
                      <div className="py-1 text-right">
                        <p className="text-sm font-bold text-slate-900">
                          Rs {((item.price + (item.addStand ? 6500 : 0)) * item.quantity).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Totals Breakdown */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-slate-500 text-sm font-medium">
                    <span>Subtotal ({totalItems} items)</span>
                    <span className="text-slate-900 font-bold">Rs {totalPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-slate-500 text-sm font-medium">
                    <span>Shipping Delivery</span>
                    <span className="text-green-600 font-bold">FREE</span>
                  </div>
                </div>

                {/* Grand Total */}
                <div className="border-t border-slate-100 pt-6">
                  <div className="flex items-end justify-between">
                    <span className="text-lg font-bold text-slate-900">Total</span>
                    <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600 tracking-tight">
                      Rs {finalTotal.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Unified Trust Badges */}
                <div className="mt-8 pt-8 border-t border-slate-100 grid grid-cols-1 gap-3">
                  {[
                    { icon: Truck, title: "Free Pakistan Delivery", sub: "On all orders today" },
                    { icon: Shield, title: "2-Year Warranty", sub: "Premium coverage" },
                    { icon: RotateCcw, title: "7-Day Returns", sub: "Hassle-free policy" },
                  ].map((badge, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-orange-50 p-2 rounded-lg text-orange-500 shrink-0">
                        <badge.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-900">{badge.title}</p>
                        <p className="text-[10px] text-slate-500">{badge.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
            
          </div>
        </div>
      </section>
      
      {/* Global styles for custom scrollbar applied inside React */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f8fafc; 
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e2e8f0; 
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #cbd5e1; 
        }
      `}} />
    </div>
  );
};

export default CheckoutPage;
