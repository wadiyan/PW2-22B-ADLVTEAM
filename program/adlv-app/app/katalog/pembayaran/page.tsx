"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  price: number;
}

export function Page() {
  const searchParams = useSearchParams();
  const productId = searchParams.get("id"); // Mengambil ID produk dari URL
  const [product, setProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState({
    nama_penerima: "",
    address: "",
    shippingMethod: "",
  });

  const router = useRouter();
  const [stage, setStage] = useState<"form" | "qr" | "process">("form"); // Mengontrol tahap

  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    // Simulasi pengecekan pembayaran selama 2 detik
    const timer = setTimeout(() => {
      setIsChecking(false);
    }, 2000);

    return () => clearTimeout(timer); // Membersihkan timer saat komponen tidak lagi digunakan
  }, []);

  // Simulasi data produk
  const products: Product[] = [
    { id: "1", name: "T-Shirt 1", price: 100000 },
    { id: "2", name: "Hoodie 1", price: 250000 },
    { id: "3", name: "Jacket 1", price: 400000 },
  ];

  // Metode pengiriman
  const shippingMethods = [
    { id: "jne", name: "JNE", cost: 20000 },
    { id: "pos", name: "POS Indonesia", cost: 15000 },
    { id: "tiki", name: "TIKI", cost: 18000 },
  ];

  useEffect(() => {
    const foundProduct = products.find((item) => item.id === productId);
    setProduct(foundProduct || null); // Tetapkan produk jika ditemukan
  }, [productId]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStage("qr"); // Pindah ke tampilan QR code
  };

  const handlePaymentConfirmation = () => {
    setStage("process"); // Pindah ke tampilan pengiriman sedang diproses
  };

  if (product) {
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
                <button
                  className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-600"
                  onClick={() => router.push("/pesanan")}
                >
                  Lihat Pesanan
                </button>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
        {stage === "form" && (
          <form onSubmit={handleSubmit}>
            {/* Nama Penerima */}
            <div className="mb-4">
              <label
                htmlFor="nama_penerima"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Nama Penerima
              </label>
              <textarea
                id="nama_penerima"
                name="nama_penerima"
                value={formData.nama_penerima}
                onChange={handleChange}
                required
                className="w-full border-gray-300 rounded-md shadow-sm p-2"
                placeholder="Masukkan Nama Penerima"
              />
            </div>
            {/* Alamat */}
            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Alamat Pengiriman
              </label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full border-gray-300 rounded-md shadow-sm p-2"
                placeholder="Masukkan alamat lengkap"
              />
            </div>

            {/* Metode Pengiriman */}
            <div className="mb-4">
              <label
                htmlFor="shippingMethod"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Metode Pengiriman
              </label>
              <select
                id="shippingMethod"
                name="shippingMethod"
                value={formData.shippingMethod}
                onChange={handleChange}
                required
                className="w-full border-gray-300 rounded-md shadow-sm p-2"
              >
                <option value="" disabled>
                  Pilih metode pengiriman
                </option>
                {shippingMethods.map((method) => (
                  <option key={method.id} value={method.id}>
                    {method.name} - Rp{method.cost.toLocaleString()}
                  </option>
                ))}
              </select>
            </div>

            {/* Tombol Submit */}
            <div className="mb-6">
              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-2 rounded-md hover:bg-gray-700"
              >
                Bayar
              </button>
            </div>
          </form>
        )}

        {stage === "qr" && (
          <div className="text-center">
            <h2 className="text-lg font-semibold mb-4">
              Pembayaran via QR Code
            </h2>
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=PAYMENT_FOR_PRODUCT_${productId}`}
              alt="QR Code Pembayaran"
              className="mx-auto mb-4"
            />
            <p className="text-sm text-gray-600">
              Scan QR Code untuk menyelesaikan pembayaran.
            </p>
            <button
              onClick={handlePaymentConfirmation}
              className="mt-4 px-6 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-700"
            >
              Sudah Bayar
            </button>
          </div>
        )}

        {stage === "process" && (
          <div className="text-center">
            <h2 className="text-lg font-semibold mb-4">
              Pengiriman Sedang Diproses
            </h2>
            <p className="text-gray-600 mb-4">
              Kami sedang memproses pengiriman produk Anda. Silakan kirim bukti
              pembayaran jika diperlukan.
            </p>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="paymentProof"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Kirim Bukti Pembayaran
                </label>
                <input
                  type="file"
                  id="paymentProof"
                  name="paymentProof"
                  className="w-full border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <Button
                type="submit"
                className="mt-4 px-6 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-700"
                asChild
              >
                <Link href={"/katalog/statuspay"}>Kirim Bukti Pembayaran</Link>
              </Button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Page;
