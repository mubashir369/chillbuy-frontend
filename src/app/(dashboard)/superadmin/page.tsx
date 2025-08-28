// src/app/dashboard/superadmin/page.tsx
"use client";

import Link from "next/link";

export default function SuperAdminDashboard() {
  // Sample data for cards
  const dashboardCards = [
    {
      title: "Vendors",
      count: 24,
      link: "/dashboard/superadmin/vendors",
      color: "#2DD4BF", // Teal
    },
    {
      title: "Products",
      count: 128,
      link: "/dashboard/superadmin/products",
      color: "#2563EB", // Deep Blue
    },
    {
      title: "Orders",
      count: 57,
      link: "/dashboard/superadmin/orders",
      color: "#FACC15", // Accent Yellow
    },
    {
      title: "Homepage Content",
      count: 8,
      link: "/dashboard/superadmin/homepage",
      color: "#34D399", // Greenish accent
    },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">SuperAdmin Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardCards.map((card) => (
          <Link key={card.title} href={card.link}>
            <div
              className="p-6 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
              style={{ backgroundColor: card.color, color: "#1F2937" }}
            >
              <h2 className="text-lg font-semibold mb-2">{card.title}</h2>
              <p className="text-3xl font-bold">{card.count}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Placeholder for additional content */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Recent Activity</h2>
        <div className="p-6 bg-white rounded-xl shadow-md">
          <p className="text-gray-600">Here you can show recent actions, alerts, or reports.</p>
        </div>
      </section>
    </div>
  );
}
