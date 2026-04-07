import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RootProvider from "./providers";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "AZSports - Premium Carrom Boards",
  description: "Premium carrom boards, stands, and accessories for professionals and enthusiasts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${bricolage.variable} ${instrument.variable} antialiased bg-gray-50 text-gray-900`}
        style={{ fontFamily: "var(--font-instrument), sans-serif" }}
      >
        <RootProvider>
          <Header/>
          {children}
          <Footer/>
        </RootProvider>
      </body>
    </html>
  );
}
