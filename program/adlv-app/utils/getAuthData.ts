// utils/getAuthData.ts
import { auth } from "@clerk/nextjs/server";

export async function getAuthData() {
  const { userId } = await auth();
  const isAdmin = userId === process.env.ADMIN_USER_ID;
  return { isLoggedIn: !!userId, isAdmin };
}
