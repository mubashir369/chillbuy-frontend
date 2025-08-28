// src/components/footer/Footer.tsx
"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark text-white px-6 py-8 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* About / Brand */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-primary mb-4">Chillbuy</h2>
          <p className="text-gray-300">
            Relaxed shopping from multiple shops at your fingertips. No waiting, just chill and buy.
          </p>
        </div>

        {/* Links */}
        <div className="flex-1 flex flex-col md:flex-row gap-8">
          <div>
            <h3 className="font-semibold mb-2">Shop</h3>
            <ul className="text-gray-300 space-y-1">
              <li><Link href="/shop/electronics">Electronics</Link></li>
              <li><Link href="/shop/clothing">Clothing</Link></li>
              <li><Link href="/shop/books">Books</Link></li>
              <li><Link href="/shop/beauty">Beauty</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Company</h3>
            <ul className="text-gray-300 space-y-1">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div className="flex-1">
          <h3 className="font-semibold mb-2">Contact</h3>
          <p className="text-gray-300">Email: support@chillbuy.com</p>
          <p className="text-gray-300">Phone: +91 9876543210</p>
          <p className="text-gray-300">Location: Palakkad, Kerala</p>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Chillbuy. All rights reserved.
      </div>
    </footer>
  );
}
