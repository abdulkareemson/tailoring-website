"use client";

import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import client from "../../../tina/__generated__/client";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

type FashionStyle = {
  id: string;
  title: string;
  image: string;
  price: number;
  category: string[];
  description: string;
};

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || ""; // 👈 get search text from ?q=
  const [styles, setStyles] = useState<FashionStyle[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [endCursor, setEndCursor] = useState<string | undefined>(undefined);

  const pageSize = 20;

  // Fetch styles with pagination
  const fetchStyles = useCallback(
    async (search: string, cursor?: string, append = false) => {
      try {
        if (append) setLoadingMore(true);
        else setLoading(true);

        const res = await client.queries.fashionStyleConnection({
          first: pageSize,
          after: cursor || undefined,
        });

        const items =
          res.data.fashionStyleConnection.edges?.map((edge) => {
            const node = edge?.node;
            return {
              id: node?._sys.filename || "",
              title: node?.title || "",
              image: node?.image || "",
              price: node?.price || 0,
              category: node?.category || [],
              description: node?.description || "",
            } as FashionStyle;
          }) || [];

        // 🔎 Case-insensitive search filtering
        const normalizedQuery = search.toLowerCase();
        const filtered = items.filter(
          (item) =>
            item.title.toLowerCase().includes(normalizedQuery) ||
            item.description.toLowerCase().includes(normalizedQuery) ||
            item.category.some((cat) =>
              cat.toLowerCase().includes(normalizedQuery)
            )
        );

        // Update pagination info
        setHasNextPage(
          res.data.fashionStyleConnection.pageInfo?.hasNextPage || false
        );
        setEndCursor(
          res.data.fashionStyleConnection.pageInfo?.endCursor ?? undefined
        );

        // Append or replace
        setStyles((prev) => (append ? [...prev, ...filtered] : filtered));
      } catch (error) {
        console.error("Error fetching styles:", error);
      } finally {
        if (append) setLoadingMore(false);
        else setLoading(false);
      }
    },
    [pageSize]
  );

  // Initial fetch when query changes
  useEffect(() => {
    if (query.trim() !== "") {
      fetchStyles(query);
    }
  }, [query, fetchStyles]);

  const loadMore = () => {
    if (hasNextPage && endCursor) {
      fetchStyles(query, endCursor, true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Show searched query */}
        <h1 className="text-2xl font-bold mb-6">
          Searched for = <span className="text-indigo-600"> `{query}` </span>
        </h1>

        {/* Loading State */}
        {loading && <p className="text-center text-gray-500">Loading...</p>}

        {/* No Results */}
        {!loading && styles.length === 0 && (
          <p className="text-center text-gray-500">No results found.</p>
        )}

        {/* Results Grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {styles.map((style) => (
            <Link key={style.id} href={`/styles/${style.id}`} className="block">
              <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition">
                <div className="relative w-full h-60">
                  <Image
                    src={style.image}
                    alt={style.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {style.title}
                  </h2>
                  <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                    {style.description}
                  </p>
                  <p className="text-indigo-600 font-bold mt-2">
                    ₦{style.price.toLocaleString()}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {style.category.map((cat, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs bg-gray-200 rounded-full"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More */}
        {hasNextPage && (
          <div className="text-center mt-8">
            <button
              onClick={loadMore}
              disabled={loadingMore}
              className="px-6 py-3 bg-gray-800 text-white font-medium rounded-xl shadow hover:bg-gray-900 transition disabled:opacity-50"
            >
              {loadingMore ? "Loading..." : "Load More"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
