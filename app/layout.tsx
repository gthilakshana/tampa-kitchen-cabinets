import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyCallBtn from "@/components/layout/StickyCallBtn";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Premium Modern & Shaker Kitchen Cabinets Tampa | Southern Design Warehouse",
  description:
    "Upgrade your kitchen with premium modern kitchen cabinets in Tampa and timeless shaker cabinets. High-quality styles at warehouse pricing for homeowners and contractors. Serving Tampa, Carrollwood & surrounding areas.",
  keywords: [
    "kitchen cabinets Tampa",
    "modern kitchen cabinets Tampa",
    "shaker cabinets Tampa",
    "cabinet showroom Tampa",
    "wholesale cabinets Tampa",
    "Carrollwood kitchen cabinets",
    "kitchen remodel Tampa",
    "contractor pricing cabinets",
  ],
  openGraph: {
    title: "Southern Design Warehouse | Best Kitchen Cabinets Tampa",
    description:
      "Premium modern and shaker kitchen cabinets in Tampa. Warehouse pricing, local showroom, and expert guidance. Serving Carrollwood and North Tampa.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Modern Kitchen Cabinets Tampa Showroom",
      },
    ],
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased bg-white text-stone-900" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
        <Header />
        {children}
        <Footer />
        <StickyCallBtn />
      </body>
    </html>
  );
}
