// src/app/layout.tsx
import './globals.css';
import UserNavbar from '@/components/navbar/UserNavbar';
import Footer from '@/components/footer/Footer';

export const metadata = {
  title: 'Chillbuy - Relax Shopping',
  description: 'Chillbuy: Multi-shop online shopping platform for relaxed shopping.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-graylight text-dark">
        {/* Navbar */}
        <UserNavbar />

        {/* Main Content */}
        <main className="min-h-[calc(100vh-128px)]">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
