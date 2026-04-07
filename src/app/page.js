import Hero from "./components/Hero";
import ProductSlider from "./components/ProductSlider";
import Features from "./components/Features";
import PromoBanner from "./components/PromoBanner";
import Reviews from "./components/Reviews";
import Faqs from "./components/Faqs";
import CtaBanner from "./components/CtaBanner";
import TrustedStrip from "./components/TrustedStrip";
import SeriesGrid from "./components/SeriesGrid";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <TrustedStrip/> */}

      <SeriesGrid layout="1x4" />
      
      <ProductSlider />

      {/* Mid-page Promotional Banner */}
      {/* <PromoBanner /> */}
      
      {/* <Features /> */}

      {/* Customer Reviews / Testimonials */}
      {/* <Reviews /> */}

      {/* Frequently Asked Questions */}
      <Faqs />

      {/* Final Call to Action before the footer */}
      {/* <CtaBanner /> */}

    </main>
  );
}