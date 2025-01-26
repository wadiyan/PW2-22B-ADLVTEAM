// "use client";
// import React, { useEffect, useState } from "react";
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableFooter,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Input } from "@/components/ui/input";
// import { LiaEdit } from "react-icons/lia";
// import { MdDelete } from "react-icons/md";
// import { Button } from "@/components/ui/button";
// import { AddOpenSheetWithProps } from "./AddOpenSheetWithProps";
// import Image from "next/image";

// // Mendefinisikan tipe data produk
// interface Product {
//   title: string;
//   description: string;
//   price: number;
//   image: string;
//   category: string;
// }

// const ProductList: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     // Mengambil data produk dari file JSON di folder public
//     fetch("/products.json")
//       .then((response) => response.json())
//       .then((data: Product[]) => {
//         setProducts(data); // Menyimpan data produk ke state
//       })
//       .catch((error) => console.error("Error fetching products:", error));
//   }, []);

//   return (
//     <Table>
//       <TableHeader>
//         <TableRow className="bg-gray-900 hover:bg-gray-900">
//           <TableHead className="w-[100px] text-white">No</TableHead>
//           <TableHead className="w-[100px] text-white">Judul</TableHead>
//           <TableHead className="text-white">Deskripsi</TableHead>
//           <TableHead className="text-white">Kategori</TableHead>
//           <TableHead className="text-left text-white">Gambar</TableHead>
//           <TableHead className="text-center text-white">Action</TableHead>
//         </TableRow>
//       </TableHeader>
//       <TableBody>
//         {products.map((product, index) => (
//           <TableRow key={index}>
//             <TableCell>{index + 1}</TableCell>
//             <TableCell className="font-medium">{product.title}</TableCell>
//             <TableCell>{product.description}</TableCell>
//             <TableCell>{product.category}</TableCell>
//             <TableCell className="text-left">
//               <Image
//                 src={"/assets/images/ADLV-tsirt.png"}
//                 alt="..."
//                 width={150}
//                 height={150}
//                 className="object-cover rounded-xl"
//               />
//             </TableCell>
//             <TableCell className="text-right">
//               <div className="flex gap-x-4 justify-center">
//                 <AddOpenSheetWithProps
//                   title={product.title}
//                   description={product.description}
//                   price={product.price.toString()}
//                   image={product.image}
//                   category={product.category}
//                 >
//                   <Button className="bg-green-500 hover:bg-green-400">
//                     <LiaEdit className="w-8 h-8" />
//                   </Button>
//                 </AddOpenSheetWithProps>
//                 <Button className="bg-red-500 hover:bg-red-400">
//                   <MdDelete className="w-8 h-8" />
//                 </Button>
//               </div>
//             </TableCell>
//           </TableRow>
//         ))}
//       </TableBody>
//     </Table>
//   );
// };

// export default ProductList;
