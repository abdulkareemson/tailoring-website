// path: src/app/page.tsx
import { client } from "../../tina/__generated__/client";
import {
  FashionStyleConnection,
  FashionStyle,
  ServicesConnection,
} from "../../tina/__generated__/types";
import CategorySection from "../components/CategorySection";
import HeroSlider from "@/components/HeroSlider";
import ServiceCarousel from "@/components/ServiceCarousel";
import FadeInOnScroll from "@/components/FadeInOnScroll";

// A helper function to shuffle an array randomly using a generic type
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export default async function HomePage() {
  const styles = await client.queries.fashionStyleConnection();
  const services = await client.queries.servicesConnection();

  const categories: string[] = [
    "Men",
    "Women",
    "Family",
    "Kids",
    "Kaftans",
    "Agbada",
  ];

  const fashionStyles = styles.data
    .fashionStyleConnection as FashionStyleConnection;
  const servicesData = (services.data.servicesConnection as ServicesConnection)
    .edges;

  // Helper function to filter and randomly select styles by category
  function getStylesByCategory(
    category: string,
    limit: number
  ): FashionStyle[] {
    // 1. Filter styles by category
    const filteredStyles =
      fashionStyles.edges
        ?.filter((edge) => edge?.node?.category?.includes(category))
        .map((edge) => edge?.node as FashionStyle) || [];

    // 2. Shuffle the filtered styles randomly
    const shuffledStyles = shuffleArray(filteredStyles);

    // 3. Return the first 'limit' number of styles from the shuffled array
    return shuffledStyles.slice(0, limit);
  }

  return (
    <>
      {/* Hero Section */}
      <HeroSlider />

      <main className="min-h-screen">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Welcome Section */}
          <div className="py-20 text-center">
            <FadeInOnScroll>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                A.A Mayaki Stiches
              </h1>
            </FadeInOnScroll>
            <FadeInOnScroll delay={200}>
              <p className="text-xl text-gray-600">
                Your trusted source for bespoke designs and quality
                craftsmanship. <br />
                At A.A Mayaki Stiches, we blend traditional elegance with modern
                sophistication to create unique and stunning garments. We
                specialize in custom-made attires for men, women, and children,
                with a particular focus on traditional West African wear like
                Kaftans and Agbada. Our commitment to using high-quality fabrics
                and meticulous attention to detail ensures every piece is a work
                of art. We believe that clothing is a form of personal
                expression.
              </p>
            </FadeInOnScroll>
            <FadeInOnScroll delay={400}>
              <p className="pt-5 text-xl text-gray-600">
                Discover the difference that expert tailoring and a passion for
                fashion can make.
              </p>
            </FadeInOnScroll>
          </div>

          {/* Explore Our Collections */}
          <div className="py-3">
            <FadeInOnScroll>
              <h2 className="text-3xl font-bold text-gray-900 mb-5 text-center">
                Explore Our Collections
              </h2>
            </FadeInOnScroll>
            {categories.map((category: string) => (
              <CategorySection
                key={category}
                category={category}
                styles={getStylesByCategory(category, 5)}
              />
            ))}
          </div>

          {/* Services Offered */}
          {servicesData && servicesData.length > 0 && (
            <div className="py-12">
              <FadeInOnScroll>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  Services Offered
                </h2>
              </FadeInOnScroll>
              <FadeInOnScroll delay={200}>
                <ServiceCarousel services={servicesData} />
              </FadeInOnScroll>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
