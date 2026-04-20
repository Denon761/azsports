import { Roboto, Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RootProvider from "./providers";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const inter = Inter({
  variable: "--font-inter",
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
        className={`${roboto.variable} ${inter.variable} antialiased bg-gray-50 text-gray-900`}
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
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
