// src/components/navbar/SuperAdminNavbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

export default function SuperAdminNavbar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className="bg-gray-100 shadow-md px-6 py-4 flex items-center justify-between sticky top-0 z-50">
      {/* Logo */}
      <Link href="/superadmin" className="text-2xl font-bold text-teal-400">
        Chillbuy Admin
      </Link>

      {/* Navigation Links */}
      <nav className="flex items-center gap-6">
        <Link href="/superadmin/dashboard" className="text-gray-800 font-medium hover:text-teal-400 transition">
          Dashboard
        </Link>
        <Link href="/superadmin/users" className="text-gray-800 font-medium hover:text-teal-400 transition">
          Users
        </Link>
        <Link href="/superadmin/shops" className="text-gray-800 font-medium hover:text-teal-400 transition">
          Shops
        </Link>
        <Link href="/superadmin/orders" className="text-gray-800 font-medium hover:text-teal-400 transition">
          Orders
        </Link>
        <Link href="/superadmin/reports" className="text-gray-800 font-medium hover:text-teal-400 transition">
          Reports
        </Link>
        <Link href="/superadmin/settings" className="text-gray-800 font-medium hover:text-teal-400 transition">
          Settings
        </Link>
      </nav>

      {/* Profile */}
      <div className="relative">
        <button
          onClick={() => setIsProfileOpen(!isProfileOpen)}
          className="text-gray-800 font-medium bg-white px-4 py-2 rounded-md shadow-sm hover:bg-gray-50 transition"
        >
          Admin ▼
        </button>

        {isProfileOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg py-2">
            <Link href="/superadmin/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
              Profile
            </Link>
            <Link href="/logout" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
              Logout
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
