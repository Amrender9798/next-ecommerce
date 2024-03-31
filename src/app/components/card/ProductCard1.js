import Link from "next/link";
import React from "react";

const ProductCard1 = ({ product }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(rating)) {
        stars.push(
          <span key={i} className="text-blue-400 text-2xl">
            &#9733;
          </span>
        );
      } else {
        stars.push(
          <span key={i} className="text-gray-400 text-2xl">
            &#9733;
          </span>
        );
      }
    }
    return stars;
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden relative">
      <img
        className="w-1/2 mx-auto h-48 object-center"
        src={product.image}
        alt={product.category}
      />
      <svg
        className="absolute top-2 right-2 text-black w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>

      <div className="px-6 py-2">
        <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-xl font-bold text-gray-800">
            ${product.price}
          </span>
        </div>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500">
            {renderStars(product.rating.rate)}
          </span>
          <span className="text-gray-600 ml-2">
            {product.rating.count} Reviews
          </span>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-full hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
        <div className="mt-2 flex justify-between items-center">
          <a href="#" className="text-blue-500 underline mx-auto">
            Quick Shop
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard1;
