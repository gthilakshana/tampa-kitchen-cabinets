"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md h-[70px] lg:h-[80px]"
            : "bg-transparent h-[80px] lg:h-[90px]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-full">
          
          {/* LOGO (SWITCH ON SCROLL) */}
          <Link href="/" className="flex items-center">
            <div className="relative w-[170px] lg:w-[210px] h-[55px] lg:h-[90px]">
              
              {/* TOP LOGO */}
              <Image
                src="/logo4.png"
                alt="Logo"
                fill
                priority
                className={`object-contain transition-opacity duration-300 ${
                  scrolled ? "opacity-0" : "opacity-100"
                }`}
                unoptimized
              />

              {/* SCROLLED LOGO */}
              <Image
                src="/logo2.png"
                alt="Logo scrolled"
                fill
                priority
                className={`object-contain transition-opacity duration-300 ${
                  scrolled ? "opacity-100" : "opacity-0"
                }`}
                unoptimized
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {["Products", "Gallery", "About", "FAQ"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-red-500 ${
                  scrolled ? "text-stone-700" : "text-white/90"
                }`}
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+18135550000"
              className={`text-sm font-semibold transition-colors hover:text-red-500 ${
                scrolled ? "text-stone-800" : "text-white"
              }`}
            >
              (813) 555-0000
            </a>
            <a
              href="#quote"
              className="bg-green-700 hover:bg-green-800 text-white text-sm font-semibold px-5 py-2.5 rounded-sm transition-colors"
            >
              Free Quote
            </a>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <div className="space-y-1.5">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className={`block w-6 h-0.5 ${
                    scrolled ? "bg-stone-800" : "bg-white"
                  }`}
                />
              ))}
            </div>
          </button>
        </div>
      </header>

      {/* MOBILE SIDE MENU */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${
          menuOpen ? "visible" : "invisible"
        }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMenuOpen(false)}
        />

        {/* Sidebar */}
        <div
          className={`absolute right-0 top-0 h-full w-72 bg-white shadow-xl transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-5 flex justify-between items-center border-b">
           
            {/* Close */}
            <button
              onClick={() => setMenuOpen(false)}
              className="text-2xl"
            >
              ✕
            </button>
          </div>

          <div className="p-5 space-y-4">
            {["Products", "Gallery", "About", "FAQ"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-stone-700 font-medium hover:text-amber-600"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </Link>
            ))}

            <a
              href="#quote"
              className="block mt-4 bg-green-700 text-white text-center py-3 rounded-sm font-semibold"
              onClick={() => setMenuOpen(false)}
            >
              Free Quote
            </a>
          </div>
        </div>
      </div>
    </>
  );
}