"use server";

import { promises as fs } from "fs";
import { revalidatePath } from "next/cache";
import { PrismaClient } from "@prisma/client";
import { title } from "process";

const prisma = new PrismaClient();

type Catalog = {
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
};

// Fungsi untuk membuat produk
export const createProduct = async (formData: FormData): Promise<string> => {
  "use server";

  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const price = parseFloat(formData.get("price") as string);
  const image = formData.get("image") as string;
  const category = formData.get("category") as string;

  const newProduct: Catalog = {
    title,
    description,
    price,
    image,
    category,
  };

  try {
    await saveProduct(newProduct); // Simpan ke JSON
    await syncDatabase(); // Sinkronisasi dengan database
    revalidatePath("/actions");
    return "Product created successfully";
  } catch (error) {
    console.error("Error creating product:", error);
    return "Failed to create product";
  }
};

// Fungsi untuk membaca file JSON
export const fetchProducts = async (): Promise<Catalog[]> => {
  try {
    const result = await fs.readFile("products.json", { encoding: "utf8" });
    return result ? JSON.parse(result) : [];
  } catch (error) {
    console.error("Error reading products.json:", error);
    return [];
  }
};

// Fungsi untuk menyimpan produk ke JSON
export const saveProduct = async (product: Catalog) => {
  const products = await fetchProducts();
  products.push(product);
  await fs.writeFile("products.json", JSON.stringify(products, null, 2));
};

// Fungsi untuk menghapus produk berdasarkan ID
export const deleteProduct = async (formData: FormData) => {
  const title = formData.get("title") as string;
  const products = await fetchProducts();
  const updatedProducts = products.filter((product) => product.title !== title);
  await fs.writeFile("products.json", JSON.stringify(updatedProducts, null, 2));
  await syncDatabase(); // Sinkronisasi dengan database
  revalidatePath("/actions");
};

// Sinkronisasi JSON ke database
export const syncDatabase = async () => {
  try {
    const jsonProducts = await fetchProducts(); // Ambil data dari JSON
    const dbProducts = await prisma.catalog.findMany(); // Ambil data dari database

    // Identifikasi produk di JSON yang belum ada di database
    const productsToAdd = jsonProducts.filter(
      (jsonProduct) =>
        !dbProducts.some((dbProduct) => dbProduct.title === jsonProduct.title)
    );

    // Identifikasi produk di database yang sudah tidak ada di JSON
    const productsToDelete = dbProducts.filter(
      (dbProduct) =>
        !jsonProducts.some((jsonProduct) => jsonProduct.title === dbProduct.title)
    );

    // Tambahkan produk baru ke database
    for (const product of productsToAdd) {
      await prisma.catalog.create({
        data: {
          title: product.title,
          description: product.description,
          price: product.price,
          image: product.image,
          category: product.category,
        },
      });
    }

    // Hapus produk dari database yang sudah tidak ada di JSON
    for (const product of productsToDelete) {
      await prisma.catalog.delete({
        where: { id: product.id },
      });
    }

    console.log("Database synced with JSON successfully.");
  } catch (error) {
    console.error("Error syncing database with JSON:", error);
  }
};
