// path: src/app/styles/[slug]/StyleContent.tsx
"use client";

import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { FashionStyle } from "../../../../tina/__generated__/types";

interface StyleContentProps {
  style: FashionStyle;
}

export default function StyleContent({ style }: StyleContentProps) {
  // Removed the useState for selectedSize as it's no longer needed
  // const [selectedSize, setSelectedSize] = useState<number | null>(null);

  const handleChat = () => {
    // The message no longer includes any size chart details
    const message = `I am interested in the "${style.title}" design.\n\nI would like to discuss a custom order.`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="md:flex md:space-x-8">
      {/* Left Section: Image */}
      <div className="md:w-1/2">
        {style.image && (
          <Image
            src={style.image}
            alt={style.title || "Fashion Style"}
            width={600}
            height={800}
            layout="responsive"
            className="rounded-lg shadow-lg"
          />
        )}
      </div>

      {/* Right Section: Details */}
      <div className="md:w-1/2 mt-8 md:mt-0">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
          {style.title}
        </h1>
        <p className="mt-4 text-2xl text-gray-900">₦{style.price}</p>
        <div className="mt-6">
          <h3 className="text-sm font-medium text-gray-900">Description</h3>
          <p className="mt-2 text-gray-600">{style.description}</p>
        </div>

        {/* The entire size chart section has been removed */}

        <div className="mt-8 flex justify-center">
          <button
            onClick={handleChat}
            className="flex items-center justify-center rounded-md border border-transparent bg-green-600 px-8 py-3 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            <FaWhatsapp className="h-5 w-5 mr-2" />
            Chat Tailor (via WhatsApp)
          </button>
        </div>
      </div>
    </div>
  );
}
