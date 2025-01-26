import { clerkMiddleware, createRouteMatcher, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher([
  "/checkout(.*)",
  "/kontak(.*)",
  "/pesanan(.*)",
  "/profile(.*)",
]);

const isKeranjang = createRouteMatcher(["/katalog/pembayaran(.*)"]);
const isAdminRoute = createRouteMatcher(["/admin(.*)"]);

export default clerkMiddleware(async (auth, request) => {
  const isAdminUser = (await auth()).userId === process.env.ADMIN_USER_ID;
  console.log(isAdminUser)

  if (isAdminRoute(request) && !isAdminUser) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (isKeranjang(request) && !isAdminUser) {
    return NextResponse.redirect(new URL("/not-authorized", request.url));
  }

  if (isPublicRoute(request)) {
    await auth.protect();
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
