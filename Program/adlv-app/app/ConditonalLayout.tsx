"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/navbar/Footer";

interface ConditionalLayoutProps {
  children: React.ReactNode;
  isLoggedIn: boolean;
  isAdmin: boolean;
}

export default function ConditionalLayout({
  children,
  isLoggedIn,
  isAdmin,
}: ConditionalLayoutProps) {
  const pathname = usePathname();

  // Daftar halaman tanpa layout
  const hideLayoutRoutes = [
    "/login",
    "/register",
    "/katalog/detail_produk",
    "/katalog/detail_produk/pembayaran",
    "/pesanan",
  ];
  const shouldHideLayout = hideLayoutRoutes.includes(pathname);

  return (
    <>
      {!shouldHideLayout && (
        <header className="bg-gradient-to-r from-gray-900 to-gray-700 p-4">
          <Navbar isLoggedIn={isLoggedIn} isAdmin={isAdmin} />
        </header>
      )}
      <main
        className={`flex-grow z-20 bg-white ${
          shouldHideLayout ? "" : "with-layout"
        }`}
      >
        {children}
      </main>
      {!shouldHideLayout && <Footer />}
    </>
  );
}
