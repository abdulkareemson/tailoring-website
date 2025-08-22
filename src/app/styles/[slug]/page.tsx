// path: src/app/styles/[slug]/page.tsx
import { client } from "../../../../tina/__generated__/client";
import { FashionStyle } from "../../../../tina/__generated__/types";
import StyleContent from "./StyleContent";
import Link from "next/link";

interface StylePageProps {
  params: { slug: string };
}

export default async function StylePage({ params }: StylePageProps) {
  const slug = params.slug; // safe to access directly

  // Fetch the data for the specific style
  const styleData = await client.queries.fashionStyle({
    relativePath: `${slug}.md`,
  });

  const style = styleData.data.fashionStyle as FashionStyle | null;

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

  return <StyleContent style={style} />;
}
