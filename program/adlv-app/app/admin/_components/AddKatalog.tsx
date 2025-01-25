"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";


export default function AddCatalog() {
  const [isOpen, setIsOpen] = useState(false);
  const rotateClass = isOpen ? "rotate-90" : "";

  const toggleMenuArrow = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Button
        onClick={toggleMenuArrow}
        variant={"outline"}
        className="text-2xl font-bold mb-4"
      >
        <IoIosArrowForward className={`${rotateClass}`} /> Add New Catalog
      </Button>
      {isOpen ? (
        <form>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="title">Title</Label>
          <Input type="title" id="title" placeholder="Masukan title..." />
          <Label htmlFor="description">Description</Label>
          <Input
            type="description"
            id="description"
            placeholder="masukan deskripsi barang..."
            />
          <Label htmlFor="price">Price</Label>
          <Input
            type="price"
            id="price"
            placeholder="Masukan harga barang..."
            />
          <Label htmlFor="picture">Picture</Label>
          <Input id="picture" type="file" />
          <Label htmlFor="category">Category</Label>
          <Input type="category" id="category" placeholder="category" />
        </div>
        </form>
      ) : (
        ""
      )}
    </div>
  );
}
