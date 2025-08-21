// path: src/components/Footer.tsx

import React from "react";
import Link from "next/link"; // ✅ import Link

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Responsive grid for the main footer sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left Section: Brand Logo */}
          <div className="flex flex-col items-start md:items-start">
            <Link
              href="/"
              className="text-2xl font-bold text-white transition-colors duration-300 hover:text-gray-300"
            >
              A.A Mayaki Stiches
            </Link>
            <p className="mt-4 text-gray-400 text-sm max-w-sm">
              Crafting bespoke designs with a blend of traditional elegance and
              modern sophistication. Quality and style, stitched just for you.
            </p>
          </div>

          {/* Middle Section: Contact Information & Collections */}
          <div className="flex flex-col md:flex-row md:justify-around gap-10">
            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Contact Information
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <span className="text-sm">
                    NO. 9 ANGUWAN NA&apos;INNA, LAYIN ZOMO, Opp. NCAT, Samaru
                    Zaria, Kaduna State
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="text-sm">
                    Tel: 07014125050 / 07010621326
                  </span>
                </li>
                <li className="flex items-center">
                  <a
                    href="mailto:info@aamayakistiches.com"
                    className="text-sm transition-colors duration-300 hover:text-white"
                  >
                    info@aamayakistiches.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Collections Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Collections
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/collections/men"
                    className="text-gray-400 transition-colors duration-300 hover:text-white"
                  >
                    Men
                  </Link>
                </li>
                <li>
                  <Link
                    href="/collections/women"
                    className="text-gray-400 transition-colors duration-300 hover:text-white"
                  >
                    Women
                  </Link>
                </li>
                <li>
                  <Link
                    href="/collections/family"
                    className="text-gray-400 transition-colors duration-300 hover:text-white"
                  >
                    Family
                  </Link>
                </li>
                <li>
                  <Link
                    href="/collections/kids"
                    className="text-gray-400 transition-colors duration-300 hover:text-white"
                  >
                    Kids
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section: Important Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Important Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 transition-colors duration-300 hover:text-white"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 transition-colors duration-300 hover:text-white"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="text-gray-400 transition-colors duration-300 hover:text-white"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Info */}
      <div className="mt-12 text-center text-sm text-gray-500 border-t border-gray-700 pt-6">
        &copy; {new Date().getFullYear()} A.A Mayaki Stiches. All Rights
        Reserved.
      </div>
    </footer>
  );
};

export default Footer;
