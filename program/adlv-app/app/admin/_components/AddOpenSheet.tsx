"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import FormAddCatalog from "@/components/form/FormAddCatalog";
import { ScrollArea } from "@/components/ui/scroll-area";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoIosArrowForward } from "react-icons/io";

export function AddOpenSheet() {
  const [loading, setIsLoading] = useState(false);
  const handleLoading = () => {
    setIsLoading(!loading);

    setTimeout(() => {
      setIsLoading(loading);
    }, 3000);
  };
  const loadDecide = loading ? "animate-spin" : "";

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          onClick={handleLoading}
          variant={"outline"}
          className="text-2xl font-bold mb-4"
        >
          {loading ? <Loader2 className={`${loadDecide}`} /> : <></>} Add New
          Catalog
        </Button>
      </SheetTrigger>
      <SheetContent>
        <ScrollArea className="h-full w-[350px] rounded-md p-4">
          <SheetHeader>
            <SheetTitle>Add Item Catalog</SheetTitle>
            <SheetDescription>
              Tambah item katalog disini. Klik tambah jika sudah terisi semua.
            </SheetDescription>
          </SheetHeader>
          <FormAddCatalog />
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
