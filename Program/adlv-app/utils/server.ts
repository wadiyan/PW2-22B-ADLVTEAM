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
    await saveUser(newUsers);
    // revalidatePath("/actions");
    return "create user is successfull";
  } catch (e) {
    console.log(e);
    return "failed creating user";
  }
  //   redirect("/");
};

export const saveUser = async (user: User) => {
  const users = await fetchUsers();
  users.push(user);
//   await fs.writeFile("users.json", JSON.stringify(users));
};

export const fetchUsers = async (): Promise<User[]> => {
  const result = await fs.readFile("users.json", { encoding: "utf8" });
  const user = result ? JSON.parse(result) : [];
  return user;
};