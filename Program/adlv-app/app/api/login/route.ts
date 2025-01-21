import { NextResponse } from "next/server";
import prisma from "@/lib/prisma"; // Inisialisasi Prisma Client
import bcrypt from "bcryptjs"; // Untuk hashing password

export async function POST(request: Request) {
  const { email, password } = await request.json();

  try {
    // Cari pengguna berdasarkan email
    const user = await prisma.user.findUnique({ where: { email } });

    // Jika pengguna tidak ditemukan atau password tidak cocok
    if (!user || !(await bcrypt.compare(password, user.password))) {
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
