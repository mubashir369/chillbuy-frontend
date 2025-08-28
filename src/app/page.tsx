// src/app/page.tsx
import ShopCard from "@/components/shop/ShopCard";
import Link from "next/link";


export default function HomePage() {
  // Sample shop data (replace with API later)
  const shops = [
    { id: 1, name: "Electronics Hub", image: "/shop/electronics.jpg" },
    { id: 2, name: "Fashion Store", image: "/shop/fashion.jpg" },
    { id: 3, name: "Book World", image: "/shop/books.jpg" },
    { id: 4, name: "Beauty & Care", image: "/shop/beauty.jpg" },
  ];

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Relaxed Shopping, Anytime, Anywhere
        </h1>
        <p className="text-gray-700 mb-6">
          Choose your favorite shop, browse products, and get it delivered or pick up – no stress, just chill.
        </p>
        <Link
          href="/shop"
          className="bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-teal-400 transition"
        >
          Explore Shops
        </Link>
      </section>

      {/* Featured Shops */}
      <section>
        <h2 className="text-2xl font-bold text-dark mb-6">Featured Shops</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {shops.map((shop) => (
            <ShopCard key={shop.id} shop={shop} />
          ))}
        </div>
      </section>
    </div>
  );
}
