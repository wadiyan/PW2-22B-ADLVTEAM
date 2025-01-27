"use client";

import Footer from "@/components/navbar/Footer";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

type ReactNode = {
  children: React.ReactNode;
};

export default function ConditionalLayout(props: ReactNode) {
  const pathname = usePathname();

  // Daftar halaman tanpa layout
  const hideLayoutRoutes = [
    "/login",
    "/register",
    "/katalog/detail_produk",
    "/katalog/detail_produk/pembayaran",
    "/pesanan",
  ];
  const hideLayoutFooterRoutes = ["/admin"];
  const shouldHideLayout = hideLayoutRoutes.includes(pathname);
  const shouldHideFooterLayout = hideLayoutFooterRoutes.includes(pathname);

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
        {props.children}
      </main>
      {!shouldHideFooterLayout && <Footer />}
    </>
  );
}
