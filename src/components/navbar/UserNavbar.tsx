// src/components/navbar/UserNavbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

export default function UserNavbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // replace with auth logic
  const [cartCount, setCartCount] = useState(0); // replace with cart state

  return (
    <header className="bg-white shadow-md px-6 py-4 flex items-center justify-between sticky top-0 z-50">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold text-primary">
        Chillbuy
      </Link>

      {/* Search Bar */}
      <div className="flex-1 mx-6">
        <input
          type="text"
          placeholder="Search for products, shops..."
          className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6">
        {/* Cart */}
        <Link href="/cart" className="relative text-dark font-medium">
          🛒 Cart
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-accent text-dark text-xs font-bold px-2 py-0.5 rounded-full">
              {cartCount}
            </span>
          )}
        </Link>

        {/* Account */}
        {isLoggedIn ? (
          <Link href="/account" className="text-dark font-medium">
            My Account
          </Link>
        ) : (
          <Link href="/login" className="text-dark font-medium">
            Login
          </Link>
        )}
      </div>
    </header>
  );
}
