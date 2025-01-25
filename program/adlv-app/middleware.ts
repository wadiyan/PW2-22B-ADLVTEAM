import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher([
  "/about(.*)",
  "/checkout(.*)",
  "/detail(.*)",
  "/katalog(.*)",
  "/keranjang(.*)",
  "/kontak(.*)",
  "/pesanan(.*)",
  "/profile(.*)",
]);

const isAdminRoute = createRouteMatcher(["/admin(.*)"]);

const isAuthPage = createRouteMatcher(["/register(.*)"]);

export default clerkMiddleware(async (auth, request) => {
  const isAdminUser =
    (await auth()).userId === process.env.ADMIN_USER_ID ||
    process.env.ADMIN_USER_ID_2 ||
    process.env.ADMIN_USER_ID_3 ||
    process.env.ADMIN_USER_ID_4;
  const isUserId = (await auth()).userId;
  console.log(isUserId);
  console.log(isAdminUser);

  // Redirect pengguna yang sudah login dari halaman login atau registrasi ke /profile
  if (isUserId && isAuthPage(request)) {
    return NextResponse.redirect(new URL("/profile", request.url));
  }

  if (isAdminRoute(request) && !isAdminUser) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (isPublicRoute(request)) {
    await auth.protect();
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
