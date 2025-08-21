// path: src/app/about/page.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutUsPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gray-900 py-15 sm:py-20">
        <div className="absolute inset-0 z-0">
          <div className="bg-gray-900 opacity-90 h-full w-full"></div>
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our Story
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-300 max-w-4xl mx-auto">
            Blending timeless tradition with modern artistry to create garments
            that tell a story.
            <br />
            Every thread woven, every stitch placed, tells a tale of passion,
            heritage, and a commitment to excellence. We believe in the power of
            clothing to express identity and celebrate culture, and our
            craftsmanship is a tribute to this belief.
          </p>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        {/* Section 1: The A.A Mayaki Stiches Journey */}
        <div className="flex flex-col md:flex-row items-center md:space-x-12 mb-20">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              A Legacy of Craftsmanship
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Founded on the principles of quality, precision, and passion, A.A
              Mayaki Stiches began as a small workshop with a big dream: to
              redefine bespoke tailoring. We believe that every stitch counts,
              and every garment should be a masterpiece. Our journey is a
              testament to the art of tailoring, passed down through
              generations.
              <br />
              <br />
              We are a registered business with{" "}
              <strong>Business Name Registration No. 3479202</strong> and our
              services include making all kinds of{" "}
              <strong>Kaftans, Babban Riga, Jallabiya and Two Piece</strong>{" "}
              outfits.
            </p>
          </div>
          <div className="md:w-1/2 rounded-lg overflow-hidden shadow-xl flex justify-center items-center">
            <Image
              src="/kaftan-men-style (17).jpg"
              alt="A tailor at work"
              width={400}
              height={400}
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Section 2: Our Mission & Vision */}
        <div className="flex flex-col md:flex-row-reverse items-center md:space-x-12 md:space-x-reverse mb-20">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Commitment to You
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our mission is to empower you to express your unique style through
              meticulously crafted attire. We are dedicated to providing a
              personalized experience, from the initial design consultation to
              the final fitting. We use only the finest fabrics and employ
              expert techniques to ensure a perfect fit and lasting quality for
              every piece.
            </p>
          </div>
          <div className="md:w-1/2 rounded-lg overflow-hidden shadow-xl flex justify-center items-center">
            <Image
              src="/agbada-men-style (11).jpg"
              alt="Close-up of fabric"
              width={400}
              height={400}
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Section 3: The Creative Process */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            The Art of Creation
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our creative process is a collaboration between our skilled artisans
            and you. We work hand-in-hand to understand your vision, sketch out
            your design, and bring it to life with precision and care. Every
            garment is a labor of love, designed and tailored to your exact
            specifications.
          </p>
        </div>

        {/* Call to Action Section */}
        <div className="text-center">
          <Link
            href="/contact"
            className="inline-block bg-gray-900 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
