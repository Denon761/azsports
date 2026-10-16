import Hero from "./components/Hero";
import ProductSlider from "./components/ProductSlider";
import Features from "./components/Features";
import PromoBanner from "./components/PromoBanner";
import Reviews from "./components/Reviews";
import CtaBanner from "./components/CtaBanner";
import TrustedStrip from "./components/TrustedStrip";
import SeriesGrid from "./components/SeriesGrid";
import HomeContent from "./components/HomeContent";

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

      {/* Final Call to Action before the footer */}
      {/* <CtaBanner /> */}

      {/* Brand story, collections and closing call to action */}
      <HomeContent />

    </main>
  );
}