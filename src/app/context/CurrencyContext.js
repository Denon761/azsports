"use client";

import { createContext, useContext, useState } from 'react';

const CurrencyContext = createContext();

export const CURRENCIES = {
  PK: {
    code: 'PKR',
    symbol: 'Rs',
    name: 'Pakistan Rupee',
    rate: 1,
  },
  US: {
    code: 'USD',
    symbol: '$',
    name: 'US Dollar',
    rate: 0.0036, // Fallback conversion rate (1 PKR = 0.0036 USD)
  },
};

export const COUNTRIES = {
  PK: { name: 'Pakistan', currency: 'PK' },
  US: { name: 'United States', currency: 'US' },
};

export function CurrencyProvider({ children }) {
  const [country, setCountry] = useState(() => {
    try {
      const stored = localStorage.getItem('user-country');
      if (stored && COUNTRIES[stored]) {
        return stored;
      }
    } catch (e) {
      // localStorage not available
    }
    return null;
  });

  const setUserCountry = (countryCode) => {
    if (COUNTRIES[countryCode]) {
      setCountry(countryCode);
      try {
        localStorage.setItem('user-country', countryCode);
      } catch (e) {
        // localStorage not available
      }
    }
  };

  const getCurrency = () => {
    if (!country) return CURRENCIES.PK;
    return CURRENCIES[COUNTRIES[country].currency];
  };

  // Get localized price for a product (from product.prices array or fallback to conversion)
  const getLocalizedPrice = (product, sizeIndex = 0) => {
    const currencyKey = country ? COUNTRIES[country].currency : 'PK';
    
    // If product has explicit prices object, use it
    if (product.prices && product.prices[currencyKey]) {
      return product.prices[currencyKey][sizeIndex] ?? product.prices[currencyKey][0];
    }
    
    // Fallback to conversion from base PK price
    const basePrice = product.sizes?.[sizeIndex]?.price ?? product.price ?? 0;
    const currency = getCurrency();
    return Math.round(basePrice * currency.rate);
  };

  // Format an already-localized amount with currency symbol
  const formatCurrency = (amount) => {
    const currency = getCurrency();
    return `${currency.symbol} ${amount.toLocaleString()}`;
  };

  const value = {
    country,
    setCountry: setUserCountry,
    countries: COUNTRIES,
    currency: getCurrency(),
    getLocalizedPrice,
    formatCurrency,
  };

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
}

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within CurrencyProvider');
  }
  return context;
};
