// src/app/page.tsx
"use client";

import ShopCard from "@/components/shop/ShopCard";
import Link from "next/link";
import shopCategories from "@/data/shopCat.json" assert { type: "json" };
import shops from "@/data/shop.json" assert { type: "json" };
import MostRatedShops from "@/components/shop/MostRatedShops";

export default function HomePage() {
  // Sort shops by rating descending
  const mostRatedShops = [...shops].sort((a, b) => b.rating - a.rating);

  return (
    <div
      className="px-6 py-12 max-w-7xl mx-auto"
      style={{ backgroundColor: "#F0FDF4", minHeight: "100vh" }}
    >
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ color: "#34D399" }}
        >
          Relaxed Shopping, Anytime, Anywhere
        </h1>
        <p
          className="text-gray-700 mb-6 max-w-2xl mx-auto"
          style={{ color: "#4B5563" }}
        >
          Choose your favorite shop, browse products, and get it delivered or pick up – no stress, just chill.
        </p>
        <Link
          href="/shop"
          className="inline-block px-6 py-3 rounded-xl font-semibold transition-colors duration-300"
          style={{ backgroundColor: "#D9F99D", color: "#1F2937" }}
        >
          Explore Shops
        </Link>
      </section>

      {/* Shop Categories Section */}
      <section className="mb-16">
        <h2
          className="text-2xl md:text-3xl font-bold mb-6"
          style={{ color: "#1F2937" }}
        >
          Shop Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {shopCategories.map((cat) => (
            <div
              key={cat.id}
              className="p-4 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
              style={{ backgroundColor: "#D9F99D" }}
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-32 object-cover rounded-md mb-2"
              />
              <h3 className="text-lg font-semibold" style={{ color: "#1F2937" }}>
                {cat.name}
              </h3>
              <p className="text-sm text-gray-700 mt-1">
                {cat.subcategories.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Most Rated Shops Slider Section */}
    <MostRatedShops mostRatedShops={mostRatedShops} />

    </div>
  );
}
