
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

type UpdateFormField = {
  title: string;
  description: string;
  price: string;
  category: string;
  image: string;
  children: React.ReactNode;
};


export function AddOpenSheetWithProps(props: UpdateFormField) {
  const { title, description, price, category, image, children } = props;
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Update Item Catalog</SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <form>
            <Label className="font-bold" htmlFor="title">
              Title
            </Label>
            <Input
              type="title"
              id="title"
              placeholder={title}
              defaultValue={title}
            />
            <Label className="font-bold" htmlFor="description">
              Description
            </Label>
            <Input
              type="description"
              id="description"
              placeholder={description}
              defaultValue={description}
            />
            <Label className="font-bold" htmlFor="price">
              Price
            </Label>
            <Input
              type="price"
              id="price"
              placeholder={price}
              defaultValue={price}
            />
            <Image src={image} alt={title} width={150} height={150} className="mt-4 rounded-lg" priority />
            <Label className="font-bold" htmlFor="picture">
              Picture
            </Label>
            <Input id="picture" type="file" />
            <Label className="font-bold" htmlFor="category">
              Category
            </Label>
            {/* <SelectCategory select={cat} /> */}
            <Input
              type="category"
              id="category"
              placeholder={category}
              defaultValue={category}
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
