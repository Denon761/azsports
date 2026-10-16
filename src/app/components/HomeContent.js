import React from 'react';
import Link from 'next/link';
import { Award, Hammer, Users, LayoutGrid, Globe, ArrowRight } from 'lucide-react';

const collections = [
  {
    name: 'Regular Series',
    href: '/shop?type=Regular%20Series',
    text: 'Explore carrom boards suitable for everyday play, family gatherings, and recreational games.',
  },
  {
    name: 'Country Series',
    href: '/shop?type=Country%20Edition',
    text: 'Discover distinctive country-themed carrom boards for players who appreciate unique designs.',
  },
  {
    name: 'Special Series',
    href: '/shop?type=Special%20Edition',
    text: 'Browse exclusive designs that bring character and individuality to your carrom experience.',
  },
  {
    name: 'Professional Series',
    href: '/shop?type=Professional%20Series',
    text: 'Discover premium carrom boards designed for players seeking a quality playing experience for practice and competition.',
  },
];

const reasons = [
  {
    Icon: Award,
    title: 'Craftsmanship Since 1940',
    text: 'Built on a heritage of carrom board craftsmanship, AZ Sports brings decades of experience to the game.',
  },
  {
    Icon: Hammer,
    title: 'Quality Construction',
    text: 'Explore carrom boards crafted with attention to materials, finishing, and playing-surface quality.',
  },
  {
    Icon: Users,
    title: 'Designed for Every Player',
    text: "Whether you're a beginner, a regular player, or a carrom enthusiast, discover a collection suited to different playing preferences.",
  },
  {
    Icon: LayoutGrid,
    title: 'Distinctive Collections',
    text: 'Choose from Regular, Country, Special, and Professional series to find a board that matches your style.',
  },
  {
    Icon: Globe,
    title: 'Worldwide Shipping',
    text: 'Order your preferred carrom board from Pakistan or explore international shipping options at checkout.',
  },
];

const primaryButton =
  'inline-flex items-center justify-center gap-2 bg-[#241b14] text-white px-7 py-3 md:py-3.5 rounded-md text-xs md:text-xs font-semibold transition-all';
const secondaryButton =
  'inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-800 px-7 py-3 md:py-3.5 rounded-md text-xs md:text-xs font-semibold hover:bg-gray-100 transition-colors';
const eyebrow = 'text-xs md:text-xs font-bold uppercase tracking-[0.2em] text-amber-600 mb-3';
const sectionHeading = 'text-base md:text-lg font-black text-gray-900 mb-4 leading-tight tracking-tight font-heading';

export default function HomeContent() {
  return (
    <div className="font-sans">
      {/* Intro */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className={eyebrow}>AZ Sports · Premium Carrom Boards Since 1940</p>
          <h2 className={sectionHeading}>Handcrafting Carrom Boards Since 1940</h2>
          <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-8">
            Discover premium carrom boards by AZ Sports, combining traditional craftsmanship with quality construction and a passion for the game. From everyday family matches to competitive play, explore carrom boards designed for players of every level.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/shop" className={primaryButton}>
              Shop Carrom Boards <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="#collections" className={secondaryButton}>
              Explore Collections
            </a>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section id="collections" className="bg-gray-50 py-16 md:py-24 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className={sectionHeading}>Explore Our Carrom Board Collections</h2>
            <p className="text-xs md:text-sm text-gray-600">
              Find the right carrom board for your playing style and preferences.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {collections.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group bg-white border border-gray-200 rounded-lg p-6 hover:border-amber-500/50 transition-all duration-300 flex flex-col"
              >
                <h3 className="text-sm font-black text-gray-900 mb-2 font-heading group-hover:text-amber-600 transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed flex-1">{item.text}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-[#241b14] group-hover:text-amber-600 transition-colors">
                  View series <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className={`${sectionHeading} text-center mb-12`}>Why Choose AZ Sports?</h2>
          <div className="flex flex-wrap justify-center gap-5">
            {reasons.map(({ Icon, title, text }) => (
              <div key={title} className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] bg-gray-50 border border-gray-200 rounded-lg p-6">
                <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center border border-amber-500/30 mb-4">
                  <Icon className="w-6 h-6 text-amber-500" />
                </div>
                <h3 className="text-sm font-black text-gray-900 mb-2 font-heading">{title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Passion + Find Your Board */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          <div>
            <h2 className={sectionHeading}>A Passion for the Game</h2>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-4">
              Carrom brings people together through friendly competition, precision, and skill. At AZ Sports, we celebrate this timeless game by offering carrom boards for homes, clubs, and dedicated players.
            </p>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
              Whether you&apos;re enjoying a casual match with family or refining your striking technique, the right board makes every game more enjoyable.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-8 md:p-10 flex flex-col justify-center">
            <h2 className="text-base md:text-base font-black text-gray-900 mb-4 font-heading">Find Your Perfect Carrom Board</h2>
            <p className="text-xs text-gray-600 leading-relaxed mb-6">
              Explore our available designs, compare product specifications, and choose a carrom board that suits your needs and budget.
            </p>
            <div>
              <Link href="/shop" className={primaryButton}>
                Shop the Collection <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#241b14] py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs md:text-xs font-bold uppercase tracking-[0.2em] text-amber-400 mb-3">
            AZ Sports · Crafted for the Game
          </p>
          <p className="text-sm md:text-sm text-gray-200 leading-relaxed mb-8">
            Discover the carrom board collection and bring home a product that celebrates the tradition, skill, and enjoyment of carrom.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center justify-center gap-2 bg-white text-[#241b14] px-7 py-3 md:py-3.5 rounded-md text-xs md:text-xs font-bold hover:bg-amber-50 transition-colors"
          >
            Shop AZ Sports Today <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
