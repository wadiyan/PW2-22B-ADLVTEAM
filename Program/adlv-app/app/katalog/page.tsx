"use client";

import LoadingWrapper from "@/components/LoadingWrapper";
import React, { useState } from "react";
import Link from "next/link";

const Page = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const items = [
    {
      id: 1,
      name: "T-Shirt 1",
      category: "T-Shirt",
      price: 100000,
      image: "https://dummyimage.com/400x400/000/fff&text=T-Shirt",
    },
    {
      id: 2,
      name: "Hoodie 1",
      category: "Hoodie",
      price: 250000,
      image: "https://dummyimage.com/400x400/000/fff&text=Hoodie",
    },
    {
      id: 3,
      name: "Jacket 1",
      category: "Jacket",
      price: 400000,
      image: "https://dummyimage.com/400x400/000/fff&text=Jacket",
    },
    {
      id: 4,
      name: "T-Shirt 2",
      category: "T-Shirt",
      price: 110000,
      image: "https://dummyimage.com/400x400/000/fff&text=T-Shirt",
    },
    {
      id: 5,
      name: "Hoodie 2",
      category: "Hoodie",
      price: 260000,
      image: "https://dummyimage.com/400x400/000/fff&text=Hoodie",
    },
    {
      id: 6,
      name: "Jacket 2",
      category: "Jacket",
      price: 410000,
      image: "https://dummyimage.com/400x400/000/fff&text=Jacket",
    },
    {
      id: 7,
      name: "T-Shirt 3",
      category: "T-Shirt",
      price: 120000,
      image: "https://dummyimage.com/400x400/000/fff&text=T-Shirt",
    },
    {
      id: 8,
      name: "Hoodie 3",
      category: "Hoodie",
      price: 270000,
      image: "https://dummyimage.com/400x400/000/fff&text=Hoodie",
    },
    {
      id: 9,
      name: "Jacket 3",
      category: "Jacket",
      price: 420000,
      image: "https://dummyimage.com/400x400/000/fff&text=Jacket",
    },
    {
      id: 10,
      name: "T-Shirt 4",
      category: "T-Shirt",
      price: 130000,
      image: "https://dummyimage.com/400x400/000/fff&text=T-Shirt",
    },
    {
      id: 11,
      name: "Hoodie 4",
      category: "Hoodie",
      price: 280000,
      image: "https://dummyimage.com/400x400/000/fff&text=Hoodie",
    },
    {
      id: 12,
      name: "Jacket 4",
      category: "Jacket",
      price: 430000,
      image: "https://dummyimage.com/400x400/000/fff&text=Jacket",
    },
    {
      id: 13,
      name: "T-Shirt 5",
      category: "T-Shirt",
      price: 140000,
      image: "https://dummyimage.com/400x400/000/fff&text=T-Shirt",
    },
    {
      id: 14,
      name: "Hoodie 5",
      category: "Hoodie",
      price: 290000,
      image: "https://dummyimage.com/400x400/000/fff&text=Hoodie",
    },
    {
      id: 15,
      name: "Jacket 5",
      category: "Jacket",
      price: 440000,
      image: "https://dummyimage.com/400x400/000/fff&text=Jacket",
    },
    {
      id: 16,
      name: "T-Shirt 6",
      category: "T-Shirt",
      price: 150000,
      image: "https://dummyimage.com/400x400/000/fff&text=T-Shirt",
    },
    {
      id: 17,
      name: "Hoodie 6",
      category: "Hoodie",
      price: 300000,
      image: "https://dummyimage.com/400x400/000/fff&text=Hoodie",
    },
    {
      id: 18,
      name: "Jacket 6",
      category: "Jacket",
      price: 450000,
      image: "https://dummyimage.com/400x400/000/fff&text=Jacket",
    },
    {
      id: 19,
      name: "T-Shirt 7",
      category: "T-Shirt",
      price: 160000,
      image: "https://dummyimage.com/400x400/000/fff&text=T-Shirt",
    },
    {
      id: 20,
      name: "Hoodie 7",
      category: "Hoodie",
      price: 310000,
      image: "https://dummyimage.com/400x400/000/fff&text=Hoodie",
    },
    {
      id: 21,
      name: "Jacket 7",
      category: "Jacket",
      price: 460000,
      image: "https://dummyimage.com/400x400/000/fff&text=Jacket",
    },
    {
      id: 22,
      name: "T-Shirt 8",
      category: "T-Shirt",
      price: 170000,
      image: "https://dummyimage.com/400x400/000/fff&text=T-Shirt",
    },
    {
      id: 23,
      name: "Hoodie 8",
      category: "Hoodie",
      price: 320000,
      image: "https://dummyimage.com/400x400/000/fff&text=Hoodie",
    },
    {
      id: 24,
      name: "Jacket 8",
      category: "Jacket",
      price: 470000,
      image: "https://dummyimage.com/400x400/000/fff&text=Jacket",
    },
    {
      id: 25,
      name: "T-Shirt 9",
      category: "T-Shirt",
      price: 180000,
      image: "https://dummyimage.com/400x400/000/fff&text=T-Shirt",
    },
    {
      id: 26,
      name: "Hoodie 9",
      category: "Hoodie",
      price: 330000,
      image: "https://dummyimage.com/400x400/000/fff&text=Hoodie",
    },
    {
      id: 27,
      name: "Jacket 9",
      category: "Jacket",
      price: 480000,
      image: "https://dummyimage.com/400x400/000/fff&text=Jacket",
    },
    {
      id: 28,
      name: "T-Shirt 10",
      category: "T-Shirt",
      price: 190000,
      image: "https://dummyimage.com/400x400/000/fff&text=T-Shirt",
    },
    {
      id: 29,
      name: "Hoodie 10",
      category: "Hoodie",
      price: 340000,
      image: "https://dummyimage.com/400x400/000/fff&text=Hoodie",
    },
    {
      id: 30,
      name: "Jacket 10",
      category: "Jacket",
      price: 490000,
      image: "https://dummyimage.com/400x400/000/fff&text=Jacket",
    },
  ];

  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <LoadingWrapper>
        {/* <h1 className="text-2xl font-bold text-center mb-6">Katalog</h1> */}
        <div className="flex justify-center space-x-4 mb-6">
          <button
            onClick={() => setSelectedCategory("All")}
            className={`px-4 py-2 rounded-md ${
              selectedCategory === "All"
                ? "bg-gray-900 text-white"
                : "bg-gray-500"
            }`}
          >
            Semua
          </button>
          <button
            onClick={() => setSelectedCategory("T-Shirt")}
            className={`px-4 py-2 rounded-md ${
              selectedCategory === "T-Shirt"
                ? "bg-gray-900 text-white"
                : "bg-gray-500"
            }`}
          >
            T-Shirt
          </button>
          <button
            onClick={() => setSelectedCategory("Hoodie")}
            className={`px-4 py-2 rounded-md ${
              selectedCategory === "Hoodie"
                ? "bg-gray-900 text-white"
                : "bg-gray-500"
            }`}
          >
            Hoodie
          </button>
          <button
            onClick={() => setSelectedCategory("Jacket")}
            className={`px-4 py-2 rounded-md ${
              selectedCategory === "Jacket"
                ? "bg-gray-900 text-white"
                : "bg-gray-500"
            }`}
          >
            Jacket
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h2 className="text-lg font-semibold mb-2 text-black">
                {item.name}
              </h2>
              <p className="text-gray-600 mb-4">
                Harga: Rp{item.price.toLocaleString()}
              </p>
              <button className="w-full bg-gray-900 text-white py-2 rounded-md hover:bg-gray-600">
                <Link href={`/katalog/detail_produk?id=${item.id}`} >Masukkan ke Keranjang</Link>
              </button>
            </div>
          ))}
        </div>
      </LoadingWrapper>
    </div>
  );
};

export default Page;
