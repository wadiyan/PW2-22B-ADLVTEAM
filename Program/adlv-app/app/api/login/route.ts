import { NextResponse } from "next/server";
import prisma from "@/lib/prisma"; // Inisialisasi Prisma Client

export async function POST(request: Request) {
  const { email, password } = await request.json();

  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || user.password !== password) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Tambahkan token atau session handling di sini
    return NextResponse.json({ message: "Login successful" });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
