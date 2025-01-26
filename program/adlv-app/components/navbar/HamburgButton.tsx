"use client";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
} from "@clerk/nextjs";
import React, { useState } from "react";
import Link from "next/link";
import { pathLink } from "@/utils/links";

type WhoIsSigned = {
  userId: string | undefined | null | boolean;
};

function HamburgerMenu(props: WhoIsSigned) {
  const [isOpen, setIsOpen] = useState(false);
  const isAdminUser = props.userId === process.env.ADMIN_USER_ID

  // const isLoggedIn = false; // Ganti dengan kondisi login sesungguhnya
  // const isAdmin = false; // Ganti dengan kondisi admin sesungguhnya

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative z-30">
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="flex flex-col space-y-1.5 p-2 focus:outline-none"
      >
        <div
          className={`w-6 h-0.5 bg-white transition-transform ${
            isOpen ? "rotate-45 translate-y-1.5 h-1" : ""
          }`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-white transition-opacity ${
            isOpen ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-white transition-transform ${
            isOpen ? "-rotate-45 -translate-y-1.5 h-1" : ""
          }`}
        ></div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
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
              if (path.nama === "admin" && isAdminUser) {
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
                <button className="w-full text-left hover:font-bold">
                  Logout
                </button>
              </SignOutButton>
            </div>
          </SignedIn>
        </div>
      )}
    </div>
  );
}

export default HamburgerMenu;
