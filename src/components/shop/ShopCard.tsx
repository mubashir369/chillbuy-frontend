// src/components/shop/ShopCard.tsx
"use client";

import Link from "next/link";

interface Shop {
  id: number;
  name: string;
  image: string;
}

interface ShopCardProps {
  shop: Shop;
}

export default function ShopCard({ shop }: ShopCardProps) {
  return (
    <Link
      href={`/shop/${shop.id}`}
      className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
    >
      {/* Shop Image */}
      <div className="h-40 w-full overflow-hidden">
        <img
          src={shop.image}
          alt={shop.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Shop Name */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-dark">{shop.name}</h3>
      </div>
    </Link>
  );
}
