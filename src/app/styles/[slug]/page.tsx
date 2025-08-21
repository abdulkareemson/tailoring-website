// path: src/app/styles/[slug]/page.tsx
import { client } from "../../../../tina/__generated__/client";
import { FashionStyle } from "../../../../tina/__generated__/types";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineChatAlt } from "react-icons/hi";

export default async function StylePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  // Fetch the data for the specific style based on the slug
  const styleData = await client.queries.fashionStyle({
    relativePath: `${slug}.md`,
  });

  const style = styleData.data.fashionStyle as FashionStyle;

  if (!style) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          404 - Style Not Found
        </h1>
        <p className="text-lg text-gray-600">
          The style you are looking for does not exist.
        </p>
        <Link href="/" className="mt-6 text-indigo-600 hover:text-indigo-500">
          Go back to homepage
        </Link>
      </div>
    );
  }

  // ✅ Your actual WhatsApp number
  const phoneNumber = "2347014125050";
  const message = `Hello, I'm interested in this style: "${style.title}". Can you tell me more about it? (Price: ₦${style.price})`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Left column: Large Image */}
        <div className="lg:w-1/2 flex justify-center">
          {style.image && (
            <div className="relative w-full max-w-lg aspect-square rounded-lg overflow-hidden shadow-lg">
              <Image
                src={style.image}
                alt={style.title || "Style Image"}
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          )}
        </div>

        {/* Right column: Details and Chat Button */}
        <div className="lg:w-1/2 flex flex-col justify-start p-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {style.title}
          </h1>
          <p className="text-xl font-semibold text-gray-600 mb-4">
            ₦{style.price}
          </p>

          {style.description && (
            <div className="border-t border-gray-200 pt-6 mt-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                Description
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {style.description}
              </p>
            </div>
          )}

          <div className="mt-8">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full lg:w-auto px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
            >
              <HiOutlineChatAlt className="w-6 h-6 mr-2" />
              Chat Tailor
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
