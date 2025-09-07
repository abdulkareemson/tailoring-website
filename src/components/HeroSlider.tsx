"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
  { src: "/images/family-styles-3.jpg", alt: "Family Styles 3" },
  { src: "/images/agbada-men-style-2.jpg", alt: "Agbada Men Style 2" },
  { src: "/images/boy-agbada-1.jpg", alt: "Boy Agbada 1" },
  { src: "/images/agbada-men-style-3.jpg", alt: "Agbada Men Style 3" },
  { src: "/images/boy-agbada-7.jpg", alt: "Boy Agbada 7" },
  { src: "/images/boy-kaftan-1.jpg", alt: "Boy Kaftan 1" },
  { src: "/images/family-styles-6.jpg", alt: "Family Styles 6" },
  { src: "/images/family-styles-4.jpg", alt: "Family Styles 4" },
  { src: "/images/family-styles-11.jpg", alt: "Family Styles 11" },
  { src: "/images/women-styles-3.jpg", alt: "Women Styles 3" },
];

export default function Gallery() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <div className="relative w-full h-[175vh] bg-black">
      {/* Carousel image */}
      <div className="relative w-full h-full overflow-hidden">
        <Image
          key={images[current].src}
          src={images[current].src}
          alt={images[current].alt}
          fill
          unoptimized
          priority
          className="object-cover object-center transition-all duration-500"
        />
      </div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-[40rem] -translate-x-1/2 flex space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-3 w-4 rounded cursor-pointer ${
              idx === current ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
