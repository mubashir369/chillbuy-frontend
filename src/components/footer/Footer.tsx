"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-dark px-6 py-8 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* About / Brand */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#2DD4BF" }}>
            Chillbuy
          </h2>
          <p className="text-gray-600">
            Relaxed shopping from multiple shops at your fingertips. No waiting, just chill and buy.
          </p>
        </div>

        {/* Links */}
        <div className="flex-1 flex flex-col md:flex-row gap-8">
          <div>
            <h3 className="font-semibold mb-2" style={{ color: "#2563EB" }}>Shop</h3>
            <ul className="text-gray-600 space-y-1">
              <li><Link href="/shop/electronics" className="hover:text-teal-400 transition">Electronics</Link></li>
              <li><Link href="/shop/clothing" className="hover:text-teal-400 transition">Clothing</Link></li>
              <li><Link href="/shop/books" className="hover:text-teal-400 transition">Books</Link></li>
              <li><Link href="/shop/beauty" className="hover:text-teal-400 transition">Beauty</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2" style={{ color: "#2563EB" }}>Company</h3>
            <ul className="text-gray-600 space-y-1">
              <li><Link href="/about" className="hover:text-teal-400 transition">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-teal-400 transition">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-teal-400 transition">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div className="flex-1">
          <h3 className="font-semibold mb-2" style={{ color: "#2563EB" }}>Contact</h3>
          <p className="text-gray-600">Email: support@chillbuy.com</p>
          <p className="text-gray-600">Phone: +91 9876543210</p>
          <p className="text-gray-600">Location: Palakkad, Kerala</p>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Chillbuy. All rights reserved.
      </div>
    </footer>
  );
}
