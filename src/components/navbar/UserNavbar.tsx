// src/components/navbar/UserNavbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

export default function UserNavbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // replace with auth logic
  const [cartCount, setCartCount] = useState(0); // replace with cart state

  return (
    <header className="bg-[#F0FDF4] shadow-md px-6 py-4 flex items-center justify-between sticky top-0 z-50">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold flex items-center gap-1">
        <span style={{ color: "#1F2937" }}>Chill</span>
        <span style={{ color: "#34D399" }}>buy</span>
      </Link>

      {/* Search Bar */}
      <div className="flex-1 mx-6">
        <input
          type="text"
          placeholder="Search for products, shops..."
          className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none"
          style={{ borderColor: "#047857", caretColor: "#34D399" }}
        />
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6">
        {/* Cart */}
        <Link href="/cart" className="relative font-medium" style={{ color: "#1F2937" }}>
          🛒 Cart
          {cartCount > 0 && (
            <span
              className="absolute -top-2 -right-3 text-xs font-bold px-2 py-0.5 rounded-full"
              style={{ backgroundColor: "#D9F99D", color: "#1F2937" }}
            >
              {cartCount}
            </span>
          )}
        </Link>

        {/* Account */}
        {isLoggedIn ? (
          <Link href="/account" className="font-medium" style={{ color: "#1F2937" }}>
            My Account
          </Link>
        ) : (
          <Link href="/login" className="font-medium" style={{ color: "#1F2937" }}>
            Login
          </Link>
        )}
      </div>
    </header>
  );
}
