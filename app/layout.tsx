import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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
  title: "Southern Design Warehouse | Kitchen Cabinets Tampa",
  description:
    "Premium modern kitchen cabinets and shaker cabinets in Tampa. Warehouse-direct pricing for homeowners and contractors. Visit our showroom in Tampa & Carrollwood.",
  keywords: [
    "kitchen cabinets Tampa",
    "modern kitchen cabinets Tampa",
    "shaker cabinets Tampa",
    "cabinet showroom Tampa",
    "wholesale cabinets Tampa",
    "Carrollwood kitchen cabinets",
  ],
  openGraph: {
    title: "Southern Design Warehouse | Kitchen Cabinets Tampa",
    description:
      "Premium modern kitchen cabinets and shaker cabinets in Tampa. Warehouse-direct pricing.",
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
      <body className="font-sans antialiased bg-white text-stone-900">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
