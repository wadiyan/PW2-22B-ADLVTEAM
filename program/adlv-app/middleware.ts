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
]);


const isAdminRoute = createRouteMatcher(["/admin-dashboard(.*)"]);

export default clerkMiddleware(async (auth, request) => {
//   const isAdminUser = (await auth()).userId === process.env.ADMIN_USER_ID;
  const isAdminUser = (await auth()).userId
  console.log(isAdminUser)

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
