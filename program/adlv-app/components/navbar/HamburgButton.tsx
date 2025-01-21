"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
} from "@clerk/nextjs";
import { pathLink } from "@/utils/links";

interface HamburgerMenuProps {
  isLoggedIn: boolean;
  isAdmin: boolean;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  isLoggedIn,
  isAdmin,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative z-30">
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

      {isOpen && (
        <div className="absolute top-10 right-0 bg-white shadow-md rounded-md p-4 w-52">
          <SignedOut>
            <div className="flex flex-col hover:font-bold font-medium">
              <SignInButton>
                <button className="w-full text-left">Login</button>
              </SignInButton>
            </div>
            <div className="flex flex-col hover:font-bold font-medium">
              <SignUpButton>
                <button className="w-full text-left">Register</button>
              </SignUpButton>
            </div>
          </SignedOut>

          <SignedIn>
            {pathLink.map((path) => {
              if (path.href === "/admin" && !isAdmin) {
                return null;
              }
              return (
                <div
                  key={path.href}
                  className="flex flex-col hover:font-bold font-medium"
                >
                  <Link href={path.href}>{path.nama}</Link>
                </div>
              );
            })}
            <div className="flex justify-start">
              <SignOutButton>
                <button className="w-full text-left">Logout</button>
              </SignOutButton>
            </div>
          </SignedIn>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
