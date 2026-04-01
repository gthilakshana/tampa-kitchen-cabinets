"use client";

import { useEffect } from "react";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (e: React.MouseEvent, id: string) => {
    e.preventDefault();

    if (pathname === "/") {
      scrollToSection(id);
    } else {
      router.push("/");
      sessionStorage.setItem("scrollTo", id);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const id = sessionStorage.getItem("scrollTo");
    if (id) {
      setTimeout(() => {
        scrollToSection(id);
        sessionStorage.removeItem("scrollTo");
      }, 100);
    }
  }, []);

  return (
    <footer className="bg-white border-t border-gray-200 text-gray-600">

      {/* MAIN */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

        {/* LOGO + BRAND */}
        <div className="space-y-6">

          <a
            href="#"
            onClick={(e) => handleNavigation(e, "home")}
            className="flex justify-center items-center w-[200px] h-[120px] mx-auto lg:mx-0 cursor-pointer bg-white"
          >
            <Image
              src="/logo2.png"
              width={220}
              height={120}
              priority
              alt="Southern Design Warehouse logo"
              className="object-contain"
              unoptimized
            />
          </a>

          <p className="text-sm leading-relaxed text-gray-500 text-center lg:text-left">
            Providing premium cabinet solutions in Tampa. Visit our showroom to explore
            high-quality materials, modern designs, and expert guidance.
          </p>

          {/* SOCIAL */}
          <div className="space-y-4">
            <h3 className="text-gray-900 text-xs uppercase font-bold tracking-widest text-center lg:text-left"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              FOLLOW US
            </h3>
            <div className="flex justify-center lg:justify-start gap-3 flex-wrap">
            {[
              { icon: <FaFacebookF />, link: "https://www.facebook.com/southerndesignwarehousetampa/" },
              { icon: <FaInstagram />, link: "https://www.instagram.com/southerndesignwarehouse/" },
              { icon: <FaTiktok />, link: "https://www.tiktok.com/@southern.design.w" },
              { icon: <FaLinkedin />, link: "https://www.linkedin.com/company/southern-design-warehouse/" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-green-600 hover:text-white transition-all duration-300 shadow-sm"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-gray-900 text-sm uppercase font-bold mb-6 tracking-widest"
          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
            SERVICES
          </h3>

          <ul className="space-y-3 text-sm">
            {[
              "Kitchen Remodels",
              "Modern Cabinets",
              "Shaker Cabinets",
              "Contractor Supply",
              "Design Guidance",
              "Showroom Visits",
            ].map((s) => (
              <li key={s} className="hover:text-green-600 transition-colors">
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-gray-900 text-sm uppercase font-bold mb-6 tracking-widest"
          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
            CONTACT
          </h3>

          <ul className="space-y-4 text-sm">
            <li className="leading-relaxed">
              <span className="block font-bold text-gray-900 mb-1">Our Showroom:</span>
              8524 E Adamo Dr, Tampa, FL 33619 <br />
              <span className="text-xs text-gray-400 italic">Serving Tampa, Carrollwood & surrounding areas</span>
            </li>

            <li className="text-gray-900 font-medium">
              +1 813-845-1111
            </li>

            <li className="text-green-700 font-medium break-all">
              southerndesignwarehouse@gmail.com
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-gray-500">

            

            <Link href="/privacy-policy" className="hover:text-green-600 transition">
              Privacy Policy
            </Link>

            <p>
              © {new Date().getFullYear()} Southern Design Warehouse
            </p>

          </div>

          <p className="text-gray-500 flex items-center gap-2 text-center">
            Designed & Developed by{" "}
            <a
              href="https://makeitviralmedia.com/"
              target="_blank"
              className="text-green-600 font-semibold hover:underline uppercase"
            >
              Make It Viral Media & Tech
            </a>
          </p>

        </div>
      </div>

    </footer>
  );
}