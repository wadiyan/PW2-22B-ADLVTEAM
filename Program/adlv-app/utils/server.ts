"use server";

import db from "./db";
import { auth, currentUser, clerkClient } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import {
  validateWithZodSchema,
  profileSchema,
  propertySchema,
  imageSchema,
} from "./schemas";
import { uploadImage } from "./supabase";
import { revalidatePath } from "next/cache";

const getAuthUser = async () => {
  const user = await currentUser();
  if (!user) {
    throw new Error("You must be logged in to access this route");
  }

  // Pastikan `privateMetadata` diakses dengan aman
  const hasProfile = user.privateMetadata?.hasProfile;
  if (!hasProfile) {
    redirect("/profile/create");
  }
  return user;
};

const renderError = (error: unknown): { message: string } => {
  return {
    message: error instanceof Error ? error.message : "an error occoured",
  };
};

export const createPropertyAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  const user = await getAuthUser();
  try {
    const rawData = Object.fromEntries(formData);
    const file = formData.get("image") as File;
    console.log(rawData);

    const validatedFields = validateWithZodSchema(propertySchema, rawData);
    const validatedFile = validateWithZodSchema(imageSchema, { image: file });
    const fullPath = await uploadImage(validatedFile.image);

    await db.catalog.create({
      data: {
        ...validatedFields,
        image: fullPath,
        UserId: user.id,
      },
    });
    revalidatePath('/admin');
    return { message: "Item successfull added" };
  } catch (error) {
    return {
      message: error instanceof Error ? error.message : "an error occoured",
    };
  }

  
};

export const fetchProperties = async ({ UserId }: { UserId: string }) => {
  const properties = await db.catalog.findMany({
    where: {
      UserId, // Filter berdasarkan profileId
    },
    select: {
      id: true,
      name: true,
      description: true,
      category: true,
      price: true,
      image: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return properties;
};

export const createProfileAction = async (
  prevState: any,
  formData: FormData
) => {
  try {
    const user = await currentUser();
    if (!user) throw new Error("Please login to create a profile");

    const rawData = Object.fromEntries(formData);
    const validatedFields = validateWithZodSchema(profileSchema, rawData);

    // Periksa apakah pengguna sudah ada
    const existingUser = await db.user.findUnique({
      where: { clerkId: user.id },
    });

    if (existingUser) {
      throw new Error("Profile already exists. Please update your profile.");
    }

    await db.user.upsert({
      where: {
        clerkId: user.id, // Cari berdasarkan clerkId
      },
      update: {
        email: user.emailAddresses[0].emailAddress ?? "",
        profileImage: user.imageUrl ?? "",
        ...validatedFields,
      },
      create: {
        clerkId: user.id ?? "",
        email: user.emailAddresses[0].emailAddress ?? "",
        profileImage: user.imageUrl ?? "",
        ...validatedFields,
      },
    });
    revalidatePath("/");
    return { message: "Profil berhasil dibuat" };
  } catch (error) {
    return {
      message: error instanceof Error ? error.message : "An error occurred",
    };
  }
  return { message: "Profil sudah pernah dibuat" };
};



export async function deleteProperty({ id, userId }: { id: string; userId: string }) {
  try {
    // Menghapus properti berdasarkan ID dan userId
    const property = await db.catalog.deleteMany({
      where: {
        id: id,
        UserId: userId, // Pastikan hanya user yang sama yang dapat menghapus
      },
    });

    // Jika count lebih besar dari 0, berarti ada properti yang berhasil dihapus
    revalidatePath('/admin')
    if (property.count > 0) {
      return { success: true }; // Penghapusan berhasil
    }
    return { success: false }; // Tidak ada properti yang dihapus
  } catch (error) {
    console.error(error);
    revalidatePath("/admin");
    return { success: false }; // Gagal menghapus properti
  }
}

// utils/server.ts
export async function updateProperty({
  id,
  name,
  description,
  price,
  category,
  image,
}: {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
}) {
  try {
    // Mengupdate data properti di database (gunakan ORM atau query sesuai dengan stack Anda)
    const updatedProperty = await db.catalog.update({
      where: { id },
      data: {
        name,
        description,
        price, // Pastikan tipe data harga sesuai
        category,
        image, // Jika mengubah gambar, pastikan untuk menangani file dengan benar
      },
    });
    revalidatePath('/admin')
    return { success: true, updatedProperty };
  } catch (error) {
    console.error(error);
    revalidatePath('/admin')
    return { success: false, message: "Error updating property" };
  }
}


export async function getallData({ UserId }: { UserId: string }) {
  try {
    // Misalnya menggunakan Prisma untuk mengambil data
    const properties = await db.catalog.findMany({
      where: { UserId: UserId },
    });

    return properties;
  } catch (error) {
    console.error("Error fetching properties:", error);
    return [];
  }
}

export async function getDataById(id: string) {
  try {
    // Menggunakan Prisma untuk mengambil data berdasarkan ID
    const property = db.catalog.findUnique({
      where: { id: id },
    });

    // Jika data ditemukan, kembalikan property, jika tidak, kembalikan null
    return property;
  } catch (error) {
    console.error("Error fetching property:", error);
    // Kembalikan null jika terjadi kesalahan saat mengambil data
    return null;
  }
}
