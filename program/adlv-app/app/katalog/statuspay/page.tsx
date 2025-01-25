"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function StatusPembayaran() {
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    // Simulasi pengecekan pembayaran selama 2 detik
    const timer = setTimeout(() => {
      setIsChecking(false);
    }, 2000);

    return () => clearTimeout(timer); // Membersihkan timer saat komponen tidak lagi digunakan
  }, []);
  return (
    <>
      <div className="flex justify-center items-center p-10 h-100vh">
        <div className="text-center bg-white rounded-xl p-10 shadow-custom">
          {isChecking ? (
            <div>
              <h2 className="text-lg font-semibold mb-4">
                Pembayaran Sedang Dicek
              </h2>
              <p className="text-gray-600 mb-4">
                Kami sedang memverifikasi pembayaran Anda. Harap tunggu...
              </p>
              <div className="flex justify-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-gray-900"></div>
              </div>
            </div>
          ) : (
            <div>
              <h2 className="text-lg font-semibold mb-4">
                Pembayaran Berhasil!
              </h2>
              <p className="text-gray-600 mb-4">
                Terima kasih, pembayaran Anda telah berhasil diverifikasi.
              </p>
              <div className="flex justify-center items-center mb-4">
                <div className="rounded-full bg-green-500 h-40 w-40 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-30 w-30 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
              <Button
                className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-600"
                asChild
              >
                <Link href={"/pesanan"}>Lihat Pesanan</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default StatusPembayaran;
