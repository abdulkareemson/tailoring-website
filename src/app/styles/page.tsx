import { client } from "../../../tina/__generated__/client";
import StyleCard from "../../components/StyleCard";
import { FashionStyleConnection } from "../../../tina/__generated__/types";

type StyleWithSlug = {
  id: string;
  slug: string;
  title: string;
  image: string;
  price: number;
  category: string[];
  description: string;
};

interface StylesPageProps {
  searchParams: { category?: string } | Promise<{ category?: string }>;
}

export default async function StylesPage({ searchParams }: StylesPageProps) {
  // ✅ Await searchParams in Next.js 15+
  const resolvedSearchParams = await searchParams;
  const filteredCategory = resolvedSearchParams.category;

  // Fetch all styles
  const stylesData = await client.queries.fashionStyleConnection();
  const fashionStyles = stylesData.data
    .fashionStyleConnection as FashionStyleConnection;

  // Map edges to include slug
  const allStyles: StyleWithSlug[] =
    fashionStyles.edges
      ?.map((edge) => {
        const node = edge?.node;
        if (!node) return null;
        return {
          id: node._sys.filename,
          slug: node._sys.filename || "",
          title: node.title || "",
          image: node.image || "",
          price: node.price || 0,
          category: node.category || [],
          description: node.description || "",
        };
      })
      .filter((item): item is StyleWithSlug => item !== null) || [];

  // Filter by category if provided
  const filteredStyles = filteredCategory
    ? allStyles.filter((style) =>
        style.category.some((cat) =>
          cat.toLowerCase().includes(filteredCategory.toLowerCase())
        )
      )
    : allStyles;

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          {filteredCategory ? `${filteredCategory}'s Styles` : "All Styles"}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredStyles.map((style) => (
            <StyleCard
              key={style.slug}
              id={style.id}
              slug={style.slug} // ✅ Pass filename slug
              image={style.image}
              title={style.title}
              price={style.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
