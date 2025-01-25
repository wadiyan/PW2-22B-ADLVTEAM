import { fetchProperties } from "@/utils/server"; // Fungsi fetchProperties yang Anda buat

export default async function PropertyList({ UserId }: { UserId: string }) {
  // Ambil properti berdasarkan UserId
  const properties = await fetchProperties({ UserId });

  if (properties.length === 0) {
    return <div>No properties found.</div>; // Tampilkan pesan jika tidak ada data
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {properties.map((property) => (
        <div
          key={property.id}
          className="border rounded-lg shadow-md p-4 flex flex-col"
        >
          <img
            src={property.image}
            alt={property.name}
            className="h-40 w-full object-cover rounded-md mb-4"
          />
          <h2 className="text-lg font-bold mb-2">{property.name}</h2>
          <p className="text-sm text-gray-600">{property.description}</p>
          <p className="mt-2 text-sm text-gray-800">
            Category: <span className="font-semibold">{property.category}</span>
          </p>
          <p className="mt-2 text-lg font-semibold text-green-600">
            ${property.price}
          </p>
        </div>
      ))}
    </div>
  );
}
