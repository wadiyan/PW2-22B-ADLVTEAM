import { auth } from "@clerk/nextjs/server";
import { fetchProperties } from "@/utils/server"; // Pastikan path fungsi sesuai
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { LiaEdit } from "react-icons/lia";
import { MdDelete } from "react-icons/md";
import AddOpenSheetWithProps from "./UpdateItems";
import Image from "next/image";
import ButtonDeleteItem from "./ButtonDelete";

export default async function TableCrud() {
  // Ambil userId dari Clerk
  const { userId } = await auth();

  if (!userId) {
    return <div>Unauthorized</div>; // Tampilkan pesan jika user tidak terautentikasi
  }

  // Ambil data properti berdasarkan userId
  const properties = await fetchProperties({ UserId: userId });
  

  if (properties.length === 0) {
    return <div>No properties found.</div>; // Tampilkan pesan jika tidak ada data
  }

  return (
    <Table>
      <TableHeader>
        <TableRow className="bg-gray-900 hover:bg-gray-900">
          <TableHead className="w-[50px] text-white">No</TableHead>
          <TableHead className="text-white">Title</TableHead>
          <TableHead className="text-white">Description</TableHead>
          <TableHead className="text-white">Category</TableHead>
          <TableHead className="text-white">Image</TableHead>
          <TableHead className="text-white text-center">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {properties.map((property, index) => (
          <TableRow key={property.id}>
            <TableCell>{index + 1}</TableCell>
            <TableCell className="font-medium">{property.name}</TableCell>
            <TableCell className="w-52">
              {property.description.length > 50
                ? `${property.description.substring(0, 50)}...`
                : property.description}
            </TableCell>
            <TableCell>{property.category}</TableCell>
            <TableCell>
              <Image
                src={property.image || "/assets/images/default-image.png"}
                alt={property.name}
                width={100}
                height={100}
                className="object-cover rounded-md"
              />
            </TableCell>
            <TableCell className="text-center">
              <div className="flex gap-2 justify-center">
                {/* Button untuk Edit */}

                {/* Button untuk Delete */}
                <ButtonDeleteItem
                  id={property.id}
                  UserId={userId}
                  className="bg-red-500 hover:bg-red-400"
                >
                  <MdDelete className="w-6 h-6" />
                </ButtonDeleteItem>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

// T-shirt hitam polosan berbahan katun lembut, nyaman dipakai sepanjang hari untuk aktivitas sehari-hari.