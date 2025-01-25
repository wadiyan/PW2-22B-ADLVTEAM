"use client";
import Link from "next/link";
import HamburgerMenu from "./HamburgButton";
import { BackgroundBeams } from "../bg-animate-ui/background-beams";

type WhoIsSigned = {
  userId: string | undefined | null | boolean;
};

function Navbar(props: WhoIsSigned){
  return (
    <nav className="">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between ">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">
            <img src="/assets/icons/ADLV.png" alt="logo" width={80} />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link
            href="/overview"
            className="text-white hover:font-bold hover:text-white z-10"
          >
            Overview
          </Link>
          <Link
            href="/katalog"
            className="text-white hover:font-bold hover:text-white z-10"
          >
            Katalog
          </Link>
          <Link
            href="/about"
            className="text-white hover:font-bold hover:text-white z-10"
          >
            Tentang Kami
          </Link>
          <Link
            href="/kontak"
            className="text-white hover:font-bold hover:text-white z-10"
          >
            Kontak
          </Link>
        </div>

        {/* Login/Cart Buttons */}
        <div className="space-x-4">
          {/* <Link
            href="/login"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Login
          </Link>
          <Link
            href="/cart"
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300"
          >
            Keranjang
          </Link> */}
          <HamburgerMenu userId={props.userId} />
        </div>
        <BackgroundBeams />
      </div>
    </nav>
  );
};

export default Navbar;
