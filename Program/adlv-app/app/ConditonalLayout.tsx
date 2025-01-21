"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
          <Navbar />
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
