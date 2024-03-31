import React from "react";
import Image from "next/image";

const ProductCard2 = ({ product }) => {
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
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Replace <img> with <Image> */}
      <div className="w-full h-48 object-center relative">
        <Image
          src={product.image}
          alt={product.category}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500">
            {renderStars(product.rating.rate)}
          </span>
          <span className="text-gray-600 ml-2">{product.rating.count}</span>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-xl font-bold text-gray-800">
            ${product.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard2;
