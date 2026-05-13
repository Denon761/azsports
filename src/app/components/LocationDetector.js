"use client";

import { useEffect, useState } from 'react';
import { useCurrency, COUNTRIES } from '../context/CurrencyContext';

export default function LocationDetector() {
  const { setCountry, country, loading } = useCurrency();
  const [detected, setDetected] = useState(false);

  useEffect(() => {
    const detectLocation = async () => {
      if (country) {
        setDetected(true);
        return;
      }

      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        const countryCode = data.country_code;
        
        if (countryCode === 'PK' || countryCode === 'US') {
          setCountry(countryCode);
        } else {
          setCountry('PK'); // Default to PK for other countries
        }
      } catch (error) {
        console.error('Location detection failed:', error);
        setCountry('PK'); // Fallback to PK
      } finally {
        setDetected(true);
      }
    };

    // Small delay to avoid blocking initial render
    const timer = setTimeout(detectLocation, 500);
    return () => clearTimeout(timer);
  }, [setCountry, country]);

  return null;
}
