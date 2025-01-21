"use server";
import { promises as fs } from "fs";
import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";

type User = {
  title: string;
  description: string;
  price: string;
  image: string;
  category: string;
};

// title       String
//   description String
//   price       Float
//   image       String   // URL gambar produk
//   category    String

type State = "create user is successfull" | "failed creating user" | null;

export const createUser = async (
  state: State,
  formData: FormData
): Promise<State> => {
  "use server";
  console.log(state);
  console.log("creating server...");
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const price = formData.get("price") as string;
  const image = formData.get("image") as string;
  const newUsers: User = { title, description, price, image, category:"none"};

  try {
    const user = await currentUser();
    if (!user) throw new Error("Please login to create a profile");

    const rawData = Object.fromEntries(formData);
    const validatedFields = validateWithZodSchema(profileSchema, rawData);

    await db.profile.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
        alamat: user?.lastName ?? "",
        profileImage: user.imageUrl,
        ...validatedFields
      }
    })

    // await db.profile.create({
    //   data: {
    //     clerkId: user?.id ?? "",
    //     email: user?.emailAddresses[0].emailAddress ?? "",
    //     profileImage: user?.imageUrl ?? "",
    //     ...validatedFields,
    //   },
    // });

    const client = await clerkClient();
    await client.users.updateUserMetadata(user?.id ?? "", {
      privateMetadata: {
        hasProfile: true,
      },
    });
  } catch (error) {
    return {
      message: error instanceof Error ? error.message : "an error occoured",
    };
  }
  //   redirect("/");
};



export const fetchProfileImage = async () => {
  const user = await currentUser();

  if (!user) return null;
  const profile = await db.profile.findUnique({
    where: {
      clerkId: user.id,
    },
    select: {
      profileImage: true,
    },
  });

  return profile?.profileImage;
};

export const fetchProfile = async () => {
  const user = await getAuthUser();
  const profile = await db.profile.findUnique({
    where: {
      clerkId: user.id,
    },
  });

  if (!profile) redirect("/profile/create");
  return profile;
};

export const updateProfileAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  const user = await getAuthUser();

  try {
    const rawData = Object.fromEntries(formData);
    const validatedFields = validateWithZodSchema(profileSchema, rawData);

    // if (!validatedFields.success) {
    //   const errors = validatedFields.error.errors.map((error) => error.message);
    //   throw new Error(errors.join(","));
    // }

    // Gunakan validatedFields.data untuk update database
    await db.profile.update({
      where: {
        clerkId: user.id,
      },
      data: validatedFields, // Data validasi yang benar
    });

    // Pastikan path divalidasi hanya jika update berhasil
    revalidatePath("/profile");
    return { message: "Profile updated successfully" };
  } catch (error) {
    // Tangani error dengan lebih baik
    renderError(error);
    return { message: `${error}` };
  }
};

export const updateProfileImageAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  const user = await getAuthUser();

  try {
    const image = formData.get("image") as File;
    const validateFields = validateWithZodSchema(imageSchema, {image});
    // const fullPath = await uploadImage(validateFields.image);

    await db.profile.update({
      where: {
        clerkId: user.id,
      },
      data: {
        // profileImage: fullPath,
      },
    });

    revalidatePath("/profile");

    return { message: "Profile image updated successfully" };
  } catch (error) {
    return renderError(error);
  }
};

// http://localhost:3000/profile/create

// export const createProfileAction = async (prevState: any, formData: FormData) => {
//   try{
//     const rawData = Object.fromEntries(formData);
//     const validatedFields = profileSchema.parse(rawData)
//     console.log(validatedFields);
//     return { message: "Profile Created" };
//   }catch(error){
//     console.log(error);
//     return {message:'There was an error'};
//   }
// };

// const firstName = formData.get("firstName") as string;
// console.log(firstName);
// if (firstName != "shakeAndBake") return { message: "There was an error" };
// return { message: "Profile Created" };
