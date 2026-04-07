"use client";

import React, { useState } from 'react';
import { MessageCircle, Mail, Phone, MapPin, Send, Clock, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section - Matching Home Page Style */}
      <section className="relative w-full py-20 lg:py-28 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none translate-x-1/4 translate-y-1/4"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <MessageCircle className="w-16 h-16 text-amber-500 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 tracking-tight">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3d2e22] via-[#4a3b2d] to-[#5a4a3a]">Us</span>
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            We'd love to hear from you! Get in touch with our team.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 shadow-sm">
              <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6">Send us a Message</h2>
              
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600 text-sm">Thank you for contacting us. We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-amber-500 text-gray-900 placeholder-gray-400"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-amber-500 text-gray-900 placeholder-gray-400"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-amber-500 text-gray-900 placeholder-gray-400"
                        placeholder="+92 300 1234567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Subject *</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-amber-500 text-gray-900"
                      >
                        <option value="">Select a subject</option>
                        <option value="order">Order Inquiry</option>
                        <option value="product">Product Question</option>
                        <option value="return">Returns & Refunds</option>
                        <option value="bulk">Bulk Orders</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-amber-500 text-gray-900 placeholder-gray-400 resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#241b14] to-[#3d2e22] text-white py-4 rounded-xl font-bold hover:shadow-[0_0_20px_rgba(245,158,11,0.35)] transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Contact Methods */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center shrink-0 border border-amber-500/30">
                      <Mail className="w-6 h-6 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Email Us</h3>
                      <p className="text-gray-600">support@azsports.com</p>
                      <p className="text-gray-500 text-xs">We reply within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center shrink-0 border border-amber-500/30">
                      <Phone className="w-6 h-6 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Call Us</h3>
                      <p className="text-gray-600">+92 42 111 222 333</p>
                      <p className="text-gray-500 text-xs">Mon-Sat: 9am - 8pm PKT</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center shrink-0 border border-amber-500/30">
                      <MessageCircle className="w-6 h-6 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">WhatsApp</h3>
                      <p className="text-gray-600">+92 300 1234567</p>
                      <p className="text-gray-500 text-xs">Quick responses during business hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center shrink-0 border border-amber-500/30">
                      <MapPin className="w-6 h-6 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Visit Us</h3>
                      <p className="text-gray-600">Hakeem Ashraf Road, Opposite Janazagah, Rangpura</p>
                      <p className="text-gray-600">Sialkot, Pakistan</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center gap-2">
                  <Clock className="w-6 h-6 text-amber-500" />
                  Business Hours
                </h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Saturday</span>
                    <span className="font-bold text-gray-900">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-bold text-gray-900">12:00 PM - 5:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
