"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/navbar/Footer";

type WhoIsSigned = {
  userId: string | undefined | null | boolean;
  children: React.ReactNode
}

export default function ConditionalLayout(props: WhoIsSigned) {
  const pathname = usePathname();

  // Daftar halaman tanpa layout
  const hideLayoutRoutes = [
    "/login",
    "/register",
    "/katalog/detail_produk",
    "/katalog/detail_produk/pembayaran",
    "/pesanan",
  ];
  const hideLayoutFooterRoutes = [
    "/admin",
  ];
  const shouldHideLayout = hideLayoutRoutes.includes(pathname);
  const shouldHideFooterLayout = hideLayoutFooterRoutes.includes(pathname);

  return (
    <>
      {!shouldHideLayout && (
        <header className="bg-gradient-to-r from-gray-900 to-gray-700 p-4">
          <Navbar userId={props.userId} />
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
