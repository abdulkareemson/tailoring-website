// path: src/app/components/StyleCard.tsx

import Image from "next/image";
import Link from "next/link";

interface StyleCardProps {
  id: string;
  image?: string | null;
  title?: string | null;
  price?: number | null;
  slug?: string | null; // Slug for linking to style details
}

export default function StyleCard({
  id,
  image,
  title,
  price,
  slug,
}: StyleCardProps) {
  const linkPath = `/styles/${slug}`;

  return (
    <Link href={linkPath} className="block">
      <div
        key={id}
        className="group cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transform transition-all duration-300 hover:scale-[95%] active:scale-[95%]"
      >
        {/* Image Section */}
        <div className="aspect-w-1 aspect-h-1 overflow-hidden">
          {image && (
            <Image
              src={image}
              alt={title || "Fashion Style"}
              width={500}
              height={500}
              className="h-full w-full object-cover object-center group-hover:opacity-90 transition-opacity duration-300"
            />
          )}
        </div>

        {/* Details Section */}
        <div className="p-4 bg-white text-center">
          <h3 className="text-base font-semibold text-gray-800">
            {title || "Untitled"}
          </h3>
          {price !== null && price !== undefined && (
            <p className="mt-1 text-lg font-medium text-gray-900">
              ₦{price.toLocaleString()}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
