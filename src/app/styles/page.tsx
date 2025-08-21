// path: src/app/styles/page.tsx
import { client } from "../../../tina/__generated__/client";
import StyleCard from "../../components/StyleCard";
import { FashionStyleConnection } from "../../../tina/__generated__/types";

export default async function StylesPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  // Corrected: Use the camel case query name
  const styles = await client.queries.fashionStyleConnection();
  // Corrected: Use the camel case property name and type
  const fashionStyles = styles.data
    .fashionStyleConnection as FashionStyleConnection;
  const filteredCategory = searchParams.category;

  // Filter styles based on the category from the URL
  const filteredStyles = filteredCategory
    ? fashionStyles.edges?.filter((style) =>
        style?.node?.category?.includes(filteredCategory)
      )
    : fashionStyles.edges;

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          {filteredCategory ? `${filteredCategory}'s Styles` : "All Styles"}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredStyles?.map((style) => {
            if (!style || !style.node) return null;
            return (
              <StyleCard
                key={style.node.id}
                id={style.node.id}
                image={style.node.image}
                title={style.node.title}
                price={style.node.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
