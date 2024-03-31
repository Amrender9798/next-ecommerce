"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Settings() {
  const router = useRouter();
  const [navbarVariant, setNavbarVariant] = useState("Navbar1");
  const [productCardVariant, setProductCardVariant] = useState("ProductCard1");
  const [displayMode, setDisplayMode] = useState("view_all");

  const handleNavbarChange = (e) => {
    setNavbarVariant(e.target.value);
  };

  const handleProductCardChange = (e) => {
    setProductCardVariant(e.target.value);
  };

  const handleDisplayModeChange = (e) => {
    setDisplayMode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = `?navbar=${navbarVariant}&productCard=${productCardVariant}&displayMode=${displayMode}`;
    router.push(`/catalog${query}`);
  };

  return (
    <div className="flex justify-center items-center h-[90vh]">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Settings</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2">Select Navbar Variant:</label>
            <select
              value={navbarVariant}
              onChange={handleNavbarChange}
              className="border p-2 rounded-md w-full"
            >
              <option value="Navbar1">Navbar 1</option>
              <option value="Navbar2">Navbar 2</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Select Product Card Variant:</label>
            <select
              value={productCardVariant}
              onChange={handleProductCardChange}
              className="border p-2 rounded-md w-full"
            >
              <option value="ProductCard1">Product Card 1</option>
              <option value="ProductCard2">Product Card 2</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Select Display Mode:</label>
            <select
              value={displayMode}
              onChange={handleDisplayModeChange}
              className="border p-2 rounded-md w-full"
            >
              <option value="view_all">View All</option>
              <option value="carousel">Carousel</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
