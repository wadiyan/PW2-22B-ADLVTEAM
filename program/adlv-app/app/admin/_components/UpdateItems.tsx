"use client"; // Pastikan komponen ini dijalankan di client-side

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { updateProperty } from "@/utils/server"; // Pastikan path sesuai

type UpdateFormField = {
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  children: React.ReactNode;
  id: string; // Menambahkan id properti untuk pembaruan
};

export function AddOpenSheetWithProps(props: UpdateFormField) {
  const { name, description, price, category, image, children, id } = props;

  // Menambahkan state untuk setiap field form
  const [newTitle, setNewTitle] = useState(name);
  const [newDescription, setNewDescription] = useState(description);
  const [newPrice, setNewPrice] = useState(price);
  const [newCategory, setNewCategory] = useState(category);
  const [newImage, setNewImage] = useState(image);

  // Fungsi untuk menangani pembaruan data properti
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();

    const updatedProperty = {
      id,
      name: newTitle,
      description: newDescription,
      price: newPrice,
      category: newCategory,
      image: newImage, // Pastikan menangani image upload jika ada
    };

    try {
      const response = await updateProperty(updatedProperty); // Fungsi untuk memperbarui properti
      if (response.success) {
        alert("Property updated successfully!");
      } else {
        alert("Failed to update property.");
      }
    } catch (error) {
      alert("Error updating property: " + error);
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Update Item Catalog</SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <form onSubmit={handleUpdate}>
            <Label className="font-bold" htmlFor="title">
              Title
            </Label>
            <Input
              type="text"
              id="title"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)} // Update state saat nilai berubah
            />

            <Label className="font-bold" htmlFor="description">
              Description
            </Label>
            <Input
              type="text"
              id="description"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)} // Update state saat nilai berubah
            />

            <Label className="font-bold" htmlFor="price">
              Price
            </Label>
            <Input
              type="text"
              id="price"
              value={newPrice}
              onChange={(e) => setNewPrice(e.target.value)} // Update state saat nilai berubah
            />

            <Label className="font-bold" htmlFor="category">
              Category
            </Label>
            <Input
              type="text"
              id="category"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)} // Update state saat nilai berubah
            />

            <Label className="font-bold" htmlFor="image">
              Image
            </Label>
            <Image
              src={newImage}
              alt={newTitle}
              width={150}
              height={150}
              className="mt-4 rounded-lg"
            />
            <Input
              id="image"
              type="file"
              onChange={(e) =>
                setNewImage(URL.createObjectURL(e.target.files![0]))
              } // Menangani image upload
            />
          </form>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Update</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default AddOpenSheetWithProps;
