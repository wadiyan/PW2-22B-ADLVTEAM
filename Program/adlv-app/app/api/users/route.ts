import { fetchProducts, saveProduct, syncDatabase } from "@/utils/server";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  try {
    const products = await fetchProducts(); // Ambil data dari JSON
    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
};

export const POST = async (req: Request) => {
  try {
    const body = await req.json(); // Ambil body request
    const { title, description, price, image, category } = body;

    // Validasi data
    if (!title || !description || !price || !image || !category) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Simpan produk baru
    await saveProduct({ title, description, price, image, category });
    await syncDatabase();

    return NextResponse.json({ message: "Product created successfully" });
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json(
      { error: "Failed to create product" },
      { status: 500 }
    );
  }
};
