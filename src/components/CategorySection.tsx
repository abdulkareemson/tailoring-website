// path: src/components/CategorySection.tsx
import { FashionStyle } from "../../tina/__generated__/types";
import StyleCard from "./StyleCard";
import Link from "next/link";

interface CategorySectionProps {
  category: string;
  styles: FashionStyle[];
}

export default function CategorySection({
  category,
  styles,
}: CategorySectionProps) {
  return (
    <div className="py-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-900">
          {category}&apos;s Styles
        </h2>
        <Link
          href={`/styles?category=${encodeURIComponent(category)}`}
          className="text-sm font-semibold text-indigo-600 hover:text-indigo-500"
        >
          View all
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {styles.map((style) => {
          const slug = style?._sys?.filename || String(style?.title || "");
          const key = slug || String(style?.image || Math.random());
          return (
            <StyleCard
              key={key}
              id={key}
              image={style.image}
              title={style.title}
              price={style.price}
              slug={slug}
            />
          );
        })}
      </div>
    </div>
  );
}
