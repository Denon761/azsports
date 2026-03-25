import { Urbanist } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RootProvider from "./providers";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "AZSports - Premium Carrom Boards",
  description: "Premium carrom boards, stands, and accessories for professionals and enthusiasts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.variable} antialiased font-sans bg-gray-50 text-gray-900`}
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
