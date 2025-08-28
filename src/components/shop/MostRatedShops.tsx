"use client";

import { useRef } from "react";
import ShopCard from "@/components/shop/ShopCard";

export default function MostRatedShops({ mostRatedShops }: { mostRatedShops: any[] }) {
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
      <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "#1F2937" }}>
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
        className="flex space-x-6 overflow-x-hidden px-12" // px-12 adds space so arrows don’t overlap
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
