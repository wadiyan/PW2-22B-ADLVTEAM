# Dokumentasi Bagian Pengerjaan Proyek

**Nama**: `HafizdFerzano`

**Mata Kuliah**: `Pemrograman Web II`

## Daftar Pengerjaan

1. **Membuat API dan TESTING API LOGIN** (`/api/login`)
```typescript
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
```

2. **Membuat API dan TESTING API REGISTER** (`/api/register`)
```typescript
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { name, email, password } = await req.json();

  try {
    // Periksa apakah email sudah digunakan
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return new Response(JSON.stringify({ error: "Email already in use" }), {
        status: 400,
      });
    }

    // Hash password sebelum disimpan
    const hashedPassword = await bcrypt.hash(password, 10);

    // Buat pengguna baru
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return new Response(
      JSON.stringify({ message: "User registered successfully", user }),
      { status: 201 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
}
```

3. **Membuat API GET All Catalogs or Category** (`/api/products`)
```typescript
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: Request) {
  const url = new URL(req.url);
  const category = url.searchParams.get("category");

  try {
    let catalogs;
    if (category) {
      // Filter catalogs by category if the category is provided
      catalogs = await prisma.catalog.findMany({
        where: { category },
      });
    } else {
      // Fetch all catalogs if no category is specified
      catalogs = await prisma.catalog.findMany();
    }

    return new Response(JSON.stringify(catalogs), { status: 200 });
  } catch (error) {
    console.error("Error fetching catalogs:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch catalogs" }),
      { status: 500 }
    );
  }
}
```

4. **Membuat API POST Products** (`/api/products`)
```typescript
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { title, description, price, image, category } = await req.json();

    const catalog = await prisma.catalog.create({
      data: { title, description, price, image, category },
    });

    return new Response(
      JSON.stringify({ message: "Catalog created successfully", catalog }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating catalog:", error);
    return new Response(JSON.stringify({ error: "Failed to create catalog" }), {
      status: 500,
    });
  }
}

```

5. **Membuat API UPDATE Products** (`/api/products`)
```typescript
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function UPDATE(req: Request) {
  try {
    const { id, title, description, price } = await req.json();

    const catalog = await prisma.catalog.update({
      where: { id },
      data: { title, description, price },
    });

    return new Response(
      JSON.stringify({ message: "Catalog updated successfully", catalog }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating catalog:", error);
    return new Response(JSON.stringify({ error: "Failed to update catalog" }), {
      status: 500,
    });
  }
}

```

6. **Membuat API DELETE Products** (`/api/products`)
```typescript
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    await prisma.catalog.delete({ where: { id } });
    return new Response(
      JSON.stringify({ message: "Catalog deleted successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting catalog:", error);
    return new Response(JSON.stringify({ error: "Failed to delete catalog" }), {
      status: 500,
    });
  }
}


```

7. **Membuat Database `adlv_database`**
```prisma
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

model User {
  id        Int      @id @default(autoincrement())
  name      String
  email     String   @unique
  password  String   // Tambahkan password untuk login
  orders    Order[]
  createdAt DateTime @default(now())
}

model Catalog {
  id          Int      @id @default(autoincrement())
  title       String
  description String
  price       Float
  image       String   // URL gambar produk
  category    String   // Nama kategori
  orders      Order[]  // Relasi satu katalog ke banyak pesanan
}

model Order {
  id         Int      @id @default(autoincrement())
  user       User     @relation(fields: [userId], references: [id])
  userId     Int
  catalog    Catalog  @relation(fields: [catalogId], references: [id])
  catalogId  Int
  quantity   Int
  totalPrice Float
  status     String   @default("pending")
  createdAt  DateTime @default(now())
  updatedAt  DateTime @updatedAt
}
```
