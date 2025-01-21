"use client";

import { useState } from "react";

interface CatalogData {
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export default function AddCatalog() {


  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">Add New Catalog</h1>

      <form className="space-y-4">
        
      </form>
    </div>
  );
}
