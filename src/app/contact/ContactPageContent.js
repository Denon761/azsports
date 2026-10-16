"use client";

import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactPageContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Failed to send message');
      }

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      }, 5000);
    } catch (err) {
      console.error('Contact form error:', err);
      setError('Sorry, your message could not be sent. Please try again or email us at info@azsports.pk.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-6">
        <div>
          <h1 className="text-lg font-black text-gray-900">Contact Us</h1>
        </div>

        <p className="text-gray-600 text-xs leading-relaxed">
          For product inquiries, manufacturing details, export coordination, or bulk orders, you may contact AZ Sports – Amjad Zahoor Sports using the official channels listed below.
        </p>
        <p className="text-gray-600 text-xs leading-relaxed">
          AZ Sports is a family-run handmade carrom board manufacturing company based in Sialkot, Punjab, Pakistan, serving domestic and international buyers.
        </p>

        <div>
          <h2 className="text-sm font-black text-gray-900 mb-2">Business Inquiries</h2>
          <p className="text-gray-600 text-xs leading-relaxed">We welcome inquiries related to:</p>
          <ul className="list-disc pl-5 text-gray-600 text-xs leading-relaxed space-y-1 mt-1">
            <li>Handmade carrom boards</li>
            <li>Manufacturing specifications and processes</li>
            <li>Export and bulk orders</li>
            <li>Distributorship or dealership discussions</li>
          </ul>
          <p className="text-gray-600 text-xs leading-relaxed mt-2">
            All inquiries are handled directly to ensure accurate information and proper coordination.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-black text-gray-900 mb-2">Contact Information</h2>
          <p className="text-gray-600 text-xs leading-relaxed">Business Name: AZ Sports – Amjad Zahoor Sports</p>
          <p className="text-gray-600 text-xs leading-relaxed">Location: Sialkot, Punjab, Pakistan</p>
          <p className="text-gray-600 text-xs leading-relaxed mt-2">You may contact us via:</p>
          <ul className="list-disc pl-5 text-gray-600 text-xs leading-relaxed space-y-1 mt-1">
            <li>Phone or WhatsApp</li>
            <li>Email: <a href="mailto:info@azsports.pk" className="text-amber-600 font-bold hover:underline">info@azsports.pk</a></li>
            <li>Website contact form</li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-black text-gray-900 mb-2">Contact Form Guidance</h2>
          <p className="text-gray-600 text-xs leading-relaxed">When using the contact form, please include:</p>
          <ul className="list-disc pl-5 text-gray-600 text-xs leading-relaxed space-y-1 mt-1">
            <li>Your name and company (if applicable)</li>
            <li>Country and purpose of inquiry</li>
            <li>Estimated order quantity (for bulk or export inquiries)</li>
          </ul>
          <p className="text-gray-600 text-xs leading-relaxed mt-2">This helps us respond more efficiently.</p>
        </div>

        <div>
          <h2 className="text-sm font-black text-gray-900 mb-2">Manufacturing &amp; Export Coordination</h2>
          <p className="text-gray-600 text-xs leading-relaxed">For export or bulk orders, providing the following details is recommended:</p>
          <ul className="list-disc pl-5 text-gray-600 text-xs leading-relaxed space-y-1 mt-1">
            <li>Intended market or destination country</li>
            <li>Order type (retail, institutional, distribution, etc.)</li>
            <li>Approximate quantity and timeline expectations</li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-black text-gray-900 mb-2">Response Time</h2>
          <p className="text-gray-600 text-xs leading-relaxed">
            We aim to respond to genuine inquiries as promptly as possible. Response times may vary depending on inquiry type, time zone differences, and business hours.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-black text-gray-900 mb-2">Business Hours</h2>
          <p className="text-gray-600 text-xs leading-relaxed">
            Business hours may vary based on manufacturing schedules and export coordination. Please contact us in advance for detailed discussions or confirmations.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-black text-gray-900 mb-2">Visit Information</h2>
          <p className="text-gray-600 text-xs leading-relaxed">
            Visits to the manufacturing facility are arranged by prior appointment only to ensure availability, safety, and proper coordination.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-black text-gray-900 mb-2">Authority Note</h2>
          <p className="text-gray-600 text-xs leading-relaxed">
            This Contact Us page reflects the official communication, inquiry handling, and coordination practices of AZ Sports – Amjad Zahoor Sports, a family-run handmade carrom board manufacturing company based in Sialkot, Pakistan.
          </p>
        </div>

        {/* Contact Form */}
        <div className="pt-4">
          <h2 className="text-sm font-black text-gray-900 mb-4">Send Us a Message</h2>

          {submitted ? (
            <p className="text-gray-600 text-xs leading-relaxed">
              Thank you for contacting us. We&apos;ll get back to you shortly.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-white border border-gray-300 text-xs text-gray-900 placeholder-gray-400 focus:outline-none focus:border-amber-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-white border border-gray-300 text-xs text-gray-900 placeholder-gray-400 focus:outline-none focus:border-amber-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-white border border-gray-300 text-xs text-gray-900 placeholder-gray-400 focus:outline-none focus:border-amber-500"
                  placeholder="Your phone number (optional)"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Subject *</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-white border border-gray-300 text-xs text-gray-900 focus:outline-none focus:border-amber-500"
                >
                  <option value="">Select a subject</option>
                  <option value="order">Order Inquiry</option>
                  <option value="product">Product Question</option>
                  <option value="bulk">Bulk / Export Orders</option>
                  <option value="dealership">Distributorship / Dealership</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-3 py-2 bg-white border border-gray-300 text-xs text-gray-900 placeholder-gray-400 focus:outline-none focus:border-amber-500 resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              {error && (
                <p role="alert" className="text-xs text-red-600">{error}</p>
              )}

              <button
                type="submit"
                disabled={sending}
                className="disabled:opacity-70 disabled:cursor-not-allowed bg-gray-900 text-white text-xs font-bold px-5 py-2.5 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                {sending ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
