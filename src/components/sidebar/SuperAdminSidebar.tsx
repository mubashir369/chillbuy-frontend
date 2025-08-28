// src/components/sidebar/SuperAdminSidebar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  HomeIcon,
  UsersIcon,
  ShoppingBagIcon,
  CubeIcon,
  DocumentTextIcon,
  CogIcon,
} from "@heroicons/react/24/outline"; // optional heroicons

export default function SuperAdminSidebar() {
  const [active, setActive] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: HomeIcon, path: "/superadmin/dashboard" },
    { name: "Vendors", icon: UsersIcon, path: "/superadmin/vendors" },
    { name: "Products", icon: CubeIcon, path: "/superadmin/products" },
    { name: "Homepage Content", icon: DocumentTextIcon, path: "/superadmin/homepage" },
    { name: "Orders", icon: ShoppingBagIcon, path: "/superadmin/orders" },
    { name: "Reports", icon: DocumentTextIcon, path: "/superadmin/reports" },
    { name: "Settings", icon: CogIcon, path: "/superadmin/settings" },
  ];

  return (
    <aside className="w-64 bg-gray-100 min-h-screen shadow-md flex flex-col p-4">
      {/* <h2 className="text-2xl font-bold mb-6 text-teal-400">Chillbuy Admin</h2> */}
      <nav className="flex-1 flex flex-col gap-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => setActive(item.name)}
              className={`flex items-center gap-3 px-4 py-2 rounded-md font-medium transition ${
                active === item.name
                  ? "bg-teal-400 text-white"
                  : "text-gray-800 hover:bg-teal-100 hover:text-teal-700"
              }`}
            >
              <Icon className="w-5 h-5" />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
