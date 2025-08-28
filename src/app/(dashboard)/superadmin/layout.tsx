"use client";

import SuperAdminNavbar from "@/components/navbar/SuperAdminNavbar";
import SuperAdminSidebar from "@/components/sidebar/SuperAdminSidebar";

// Remove metadata here

export default function SuperAdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      {/* Top Navbar */}
      <SuperAdminNavbar />

      <div className="flex min-h-[calc(100vh-64px)]">
        {/* Sidebar */}
        <SuperAdminSidebar />

        {/* Main Content */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
