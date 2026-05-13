"use client";

import { useCurrency, COUNTRIES } from '../context/CurrencyContext';
import { useState, useRef, useEffect } from 'react';

export default function CountrySelector() {
  const { country, setCountry, countries } = useCurrency();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentCountry = countries[country] || countries.PK;
  const currentFlagUrl = `https://flagcdn.com/24x18/${country?.toLowerCase() || 'pk'}.png`;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-2 sm:px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors text-sm font-medium text-slate-700"
      >
        <img 
          src={currentFlagUrl} 
          alt={currentCountry.name}
          className="w-6 h-4 rounded-sm object-cover"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
        <span className="hidden sm:inline">{currentCountry.name}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden z-50 min-w-[160px]">
          {Object.entries(countries).map(([code, countryData]) => (
            <button
              key={code}
              onClick={() => {
                setCountry(code);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-3 flex items-center gap-3 text-left text-sm font-medium transition-colors hover:bg-slate-50 ${
                country === code ? 'bg-orange-50 text-orange-600' : 'text-slate-700'
              }`}
            >
              <img 
                src={`https://flagcdn.com/24x18/${code.toLowerCase()}.png`} 
                alt={countryData.name}
                className="w-6 h-4 rounded-sm object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <span>{countryData.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
