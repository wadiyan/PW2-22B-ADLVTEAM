"use client";

import React, { useState } from "react";
import Link from "next/link";

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Trigger Button */}
      <button
        className="p-3 bg-blue-500 text-white rounded-md"
        onClick={toggleDrawer}
      >
        Open Drawer
      </button>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-1/2 bg-blue-500 shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-bold">Menu</h2>
          <button
            className="text-gray-500 hover:text-black"
            onClick={toggleDrawer}
          >
            &times;
          </button>
        </div>

        {/* Drawer Content */}
        <div className="p-4">
          <ul className="space-y-4">
            <li>
              <Link href="/overview">
                Overview
              </Link>
            </li>
            <li>
              <Link href="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact">
                Contact</Link>
            </li>
            <li>
              <Link href="/services">
                Services
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleDrawer}
        ></div>
      )}
    </div>
  );
};

export default Drawer;
