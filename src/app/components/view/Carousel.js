"use client";
import { useState, useEffect } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import ProductCard1 from "../card/ProductCard1";
import ProductCard2 from "../card/ProductCard2";

const Carousel = ({ data, productCard, items }) => {
  const [products, setProducts] = useState(data);
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [itemWidth, setItemWidth] = useState("100%");

  useEffect(() => {
    const updateItemsPerPageAndWidth = () => {
      setItemsPerPage(window.innerWidth >= 768 ? 4 : 1);

      setItemWidth(`${100 / (window.innerWidth >= 768 ? 4 : 1)}%`);
    };

    updateItemsPerPageAndWidth();

    window.addEventListener("resize", updateItemsPerPageAndWidth);

    return () =>
      window.removeEventListener("resize", updateItemsPerPageAndWidth);
  }, []);

  const goToNext = async () => {
    if (startIndex + itemsPerPage < items) {
      const res = await fetch(
        `/api/products?limit=5&offset=${products.length}`
      );
      const newProducts = await res.json();
      setProducts([...products, ...newProducts.products]);
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const goToPrevious = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  const visibleProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="flex items-center justify-center py-4">
      <button
        onClick={goToPrevious}
        className={`${
          startIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
        } bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md`}
        disabled={startIndex === 0}
      >
        <IoIosArrowBack className="text-xl" />
      </button>
      <div className="flex overflow-hidden">
        {visibleProducts.map((product) =>
          productCard === "ProductCard1" ? (
            <div
              key={product.id}
              className="flex-none"
              style={{ width: itemWidth }}
            >
              <ProductCard1 product={product} />
            </div>
          ) : (
            <div
              key={product.id}
              className="flex-none"
              style={{ width: itemWidth }}
            >
              <ProductCard2 product={product} />
            </div>
          )
        )}
      </div>
      <button
        onClick={goToNext}
        className={`${
          startIndex + itemsPerPage >= products.length
            ? "opacity-50 cursor-not-allowed"
            : ""
        } bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md`}
        disabled={startIndex + itemsPerPage >= products.length}
      >
        <IoIosArrowForward className="text-xl" />
      </button>
    </div>
  );
};

export default Carousel;
