import { fetchProducts, saveProduct, syncDatabase } from "@/utils/actions";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  try {
    console.log(`Request URL: ${req.url}`);
    const users = await fetchProducts();
    return NextResponse.json({ users });
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
    const users = await req.json();

    // Validasi data
    if (!users.title || !users.description || !users.price || !users.category) {
      return NextResponse.json(
        { error: "Invalid data: Missing required fields" },
        { status: 400 }
      );
    }

    const newUser = { ...users, id: Date.now().toString() };
    await saveProduct(newUser);
    syncDatabase();
    return NextResponse.json({ msg: "User created" });
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json(
      { error: "Failed to create product" },
      { status: 500 }
    );
  }
};
