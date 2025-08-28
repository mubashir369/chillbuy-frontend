// src/components/shop/MostRatedShops.tsx
"use client";

import { useRef } from "react";
import ShopCard from "@/components/shop/ShopCard";

// Define the shop type
type Shop = {
  id: number;
  category: string;
  subcategories: string[];
  name: string;
  owner: string;
  email: string;
  gst: string;
  place: string;
  image: string;
  rating: number;
};

interface MostRatedShopsProps {
  mostRatedShops: Shop[];
}

export default function MostRatedShops({ mostRatedShops }: MostRatedShopsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 320; // scroll distance per click
    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="mb-16 relative">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
        Most Rated Shops
      </h2>

      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-green-500 text-white p-3 rounded-full shadow-lg z-10 hover:bg-green-600 transition"
      >
        ◀
      </button>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="flex space-x-6 overflow-x-hidden px-12"
      >
        {mostRatedShops.map((shop) => (
          <div key={shop.id} className="flex-shrink-0 w-64">
            <ShopCard shop={shop} />
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-green-500 text-white p-3 rounded-full shadow-lg z-10 hover:bg-green-600 transition"
      >
        ▶
      </button>
    </section>
  );
}
