// path: src/components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";

// Custom marquee animation
const marqueeAnimation = `
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
`;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  const businessInfo = `A.A MAYAKI STICHES | Address: NO. 9 ANGUWAN NA'INNA, LAYIN ZOMO, Opp. NCAT, Samaru Zaria, Kaduna State | Tel: 07014125050 / 07010621326 | `;

  return (
    <>
      <style>{marqueeAnimation}</style>

      <header className="sticky top-0 z-50">
        {/* Main Navbar */}
        <nav className="bg-white shadow-md relative z-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              {/* Logo */}
              <div className="flex items-center">
                <Link href="/" className="block relative w-[120px] h-[60px]">
                  <Image
                    src="/maiyaki-logo.png"
                    alt="A.A Mayaki Stiches Logo"
                    fill
                    sizes="(max-width: 768px) 100vw, 120px"
                    className="rounded-lg transition-transform duration-300 transform hover:scale-110 object-contain"
                  />
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden sm:flex sm:items-center sm:space-x-10">
                {/* Home */}
                <Link
                  href="/"
                  className="relative group text-lg font-semibold text-gray-700 transition-all duration-300 hover:text-gray-900"
                >
                  Home
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
                </Link>

                {/* Collections Dropdown */}
                <div className="relative group">
                  <button
                    type="button"
                    className="relative text-lg font-semibold text-gray-700 transition-all duration-300 hover:text-gray-900"
                  >
                    Collections
                  </button>
                  <div className="absolute z-50 hidden group-hover:block w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      {["Men", "Women", "Family", "Kids"].map((cat) => (
                        <Link
                          key={cat}
                          href={`/styles?category=${cat}`}
                          className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-300"
                        >
                          {cat}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Styles Dropdown */}
                <div className="relative group">
                  <button
                    type="button"
                    className="relative text-lg font-semibold text-gray-700 transition-all duration-300 hover:text-gray-900"
                  >
                    Styles
                  </button>
                  <div className="absolute z-50 hidden group-hover:block w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      {["Kaftans", "Agbada"].map((cat) => (
                        <Link
                          key={cat}
                          href={`/styles?category=${cat}`}
                          className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-300"
                        >
                          {cat}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* About */}
                <Link
                  href="/about"
                  className="relative group text-lg font-semibold text-gray-700 transition-all duration-300 hover:text-gray-900"
                >
                  About
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
                </Link>

                {/* Contact */}
                <Link
                  href="/contact"
                  className="relative group text-lg font-semibold text-gray-700 transition-all duration-300 hover:text-gray-900"
                >
                  Contact
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
                </Link>

                {/* FAQs */}
                <Link
                  href="/faqs"
                  className="relative group text-lg font-semibold text-gray-700 transition-all duration-300 hover:text-gray-900"
                >
                  FAQs
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>

              {/* Search + Mobile Toggle */}
              <div className="flex items-center space-x-7 shadow-sm bg-gray-600 p-1 rounded-md">
                {/* Desktop Search (modernized) */}
                <form onSubmit={handleSearch} className="hidden sm:block">
                  <div className="relative group">
                    <input
                      type="text"
                      placeholder="Search for styles..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-12 pr-4 text-base w-56 focus:w-72 transition-all duration-300 rounded-md bg-gray-100 border border-transparent focus:border-red-900 focus:ring-2 focus:ring-red-900 outline-none placeholder-gray-400"
                    />
                    <Search className=" absolute left-4 top-[0.2rem] -translate-y-1/2 h-5 w-5 text-gray-500 group-focus-within:text-red-900 transition-colors duration-300" />
                  </div>
                </form>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="sm:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300"
                >
                  {isOpen ? "✖" : "☰"}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="sm:hidden transition-all duration-300 ease-in-out origin-top bg-white shadow-md">
              <div className="px-4 pt-2 pb-4 space-y-2">
                <Link href="/" className="block py-2 text-gray-700 font-medium">
                  Home
                </Link>

                {/* Mobile Collections */}
                <div>
                  <button
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === "collections" ? null : "collections"
                      )
                    }
                    className="w-full text-left py-2 text-gray-700 font-medium"
                  >
                    Collections ▾
                  </button>
                  {openDropdown === "collections" && (
                    <div className="ml-4 space-y-1">
                      {["Men", "Women", "Family", "Kids"].map((cat) => (
                        <Link
                          key={cat}
                          href={`/styles?category=${cat}`}
                          className="block py-1 text-gray-600"
                        >
                          {cat}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Mobile Styles */}
                <div>
                  <button
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === "styles" ? null : "styles"
                      )
                    }
                    className="w-full text-left py-2 text-gray-700 font-medium"
                  >
                    Styles ▾
                  </button>
                  {openDropdown === "styles" && (
                    <div className="ml-4 space-y-1">
                      {["Kaftans", "Agbada"].map((cat) => (
                        <Link
                          key={cat}
                          href={`/styles?category=${cat}`}
                          className="block py-1 text-gray-600"
                        >
                          {cat}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href="/about"
                  className="block py-2 text-gray-700 font-medium"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="block py-2 text-gray-700 font-medium"
                >
                  Contact
                </Link>
                <Link
                  href="/faqs"
                  className="block py-2 text-gray-700 font-medium"
                >
                  FAQs
                </Link>

                {/* Mobile Search (left same, to keep light) */}
                <form onSubmit={handleSearch} className="mt-3">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                  />
                </form>
              </div>
            </div>
          )}
        </nav>

        {/* Business Info Bar (under navbar) */}
        <div className="bg-[#a83232] text-white py-2 overflow-hidden whitespace-nowrap sticky top-20 z-40 shadow-inner">
          <div className="flex animate-[marquee_20s_linear_infinite] w-full">
            <span className="text-sm font-semibold mx-4">{businessInfo}</span>
            <span className="text-sm font-semibold mx-4">{businessInfo}</span>
          </div>
        </div>
      </header>
    </>
  );
}
