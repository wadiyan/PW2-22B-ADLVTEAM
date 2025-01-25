import LoadingWrapper from "@/components/navbar/LoadingWrapper";
import { auth } from "@clerk/nextjs/server"; // Ambil userId dari Clerk
import { getallData } from "@/utils/server";
import Image from "next/image"; // Ambil data properti berdasarkan UserId
import Link from "next/link";

export async function CatalogPage() {
   // Ambil userId dari Clerk
    const { userId } = await auth();
  
    if (!userId) {
      return <div>Unauthorized</div>; // Tampilkan pesan jika user tidak terautentikasi
    }
  
    // Ambil data properti berdasarkan userId
    const properties = await getallData({ UserId: userId });
    
  
    if (properties.length === 0) {
      return <div className="flex justify-center items-center w-full">Items kosong</div>; // Tampilkan pesan jika tidak ada data
    }
  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <LoadingWrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
            >
              <Image
                src={property.image}
                alt={property.name}
                width={500}
                height={500}
                priority
                className="w-full h-64 object-contain rounded-md mb-4"
              />
              <h2 className="text-lg font-semibold mb-2 text-black">
                {property.name}
              </h2>
              <p className="text-gray-600 mb-4">
                Harga: Rp{property.price.toLocaleString()}
              </p>
              <button className="w-full bg-gray-900 text-white py-2 rounded-md hover:bg-gray-600">
                <Link href={`/katalog/${property.id}`}>
                  Masukkan ke Keranjang
                </Link>
              </button>
            </div>
          ))}
        </div>
      </LoadingWrapper>
    </div>
  );
}

export default CatalogPage;
