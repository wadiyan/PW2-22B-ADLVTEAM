import { SignedIn, SignedOut, SignInButton, SignOutButton, SignUpButton } from "@clerk/nextjs";
import Link from "next/link";
import { pathLink } from "@/utils/links";
import { auth } from "@clerk/nextjs/server";

async function IsOpen() {
    const isAdminUser = (await auth()).userId;
    const openAdmin = isAdminUser === process.env.ADMIN_USER_ID;
  return (
    <div className="absolute top-10 right-0 bg-white shadow-md rounded-md p-4 w-52">
      {/* Login dan Register */}
      <SignedOut>
        <div className="flex flex-col hover:font-bold font-medium">
          <SignInButton>
            <button className="text-left">Login</button>
          </SignInButton>
        </div>
        <div className="flex flex-col hover:font-bold font-medium">
          <SignUpButton>
            <button className="text-left">Register</button>
          </SignUpButton>
        </div>
      </SignedOut>

      <SignedIn>
        {/* Menu setelah login */}
        {pathLink.map((path) => {
          // Abaikan rute admin jika pengguna bukan admin
          if (path.href === "/admin" && !openAdmin) {
            return null;
          }

          return (
            <div
              key={path.href} // Gunakan href sebagai key (unik)
              className="flex flex-col hover:font-bold font-medium"
            >
              <Link href={path.href}>{path.nama}</Link>
            </div>
          );
        })}
        {/* Logout */}
        <div className="flex justify-start">
          <SignOutButton>
            <button className="w-full text-left hover:font-bold">Logout</button>
          </SignOutButton>
        </div>
      </SignedIn>
    </div>
  );
}

export default IsOpen