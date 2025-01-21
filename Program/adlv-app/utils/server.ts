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

    await db..create({
      data: {
        clerkId: user?.id ?? "",
        email: user?.emailAddresses[0].emailAddress ?? "",
        profileImage: user?.imageUrl ?? "",
        ...validatedFields,
      },
    });

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
