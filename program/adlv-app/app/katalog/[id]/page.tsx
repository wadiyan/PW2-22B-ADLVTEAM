import { getDataById } from "@/utils/server";
import { Button } from "@/components/ui/button";
import Link from "next/link";



export default async function Page({
  params,
}: {
  params: {id: string}
}) {
  
  const fetchedProduct = await getDataById(params.id); // Ambil data produk berdasarkan ID

  if (!fetchedProduct) {
    return <div>Product not found.</div>; // Tampilkan pesan jika produk tidak ditemukan
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <Link href="/katalog">
          <button className="mb-4 px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-700">
            Kembali ke Katalog
          </button>
        </Link>
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
          <img
            src={fetchedProduct.image}
            alt={fetchedProduct.name}
            className="w-64 h-64 object-cover rounded-md"
          />
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-4">{fetchedProduct.name}</h1>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Kategori:</span>{" "}
              {fetchedProduct.category}
            </p>
            <p className="text-gray-600 mb-4">
              <span className="font-semibold">Harga:</span> Rp
              {fetchedProduct.price.toLocaleString()}
            </p>
            <p className="text-gray-700 mb-6">{fetchedProduct.description}</p>
            <div className="flex justify-end mt-11 mr-6">
              <Button
                className="px-6 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-700"
                asChild
              >
                <Link
                  href={`/katalog/pembayaran`}
                >
                  Checkout
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}