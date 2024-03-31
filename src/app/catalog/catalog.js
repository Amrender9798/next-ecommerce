"use client";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ProductCard1 from "../components/card/ProductCard1";
import Navbar1 from "../components/navbar/Navbar1";
import Navbar2 from "../components/navbar/Navbar2";
import ProductCard2 from "../components/card/ProductCard2";
import Carousel from "../components/view/Carousel";

const Catalog = ({ data, items }) => {
  const [products, setProducts] = useState(data);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setHasMore(products.length < items);
  }, [products]);

  const getMoreProducts = async () => {
    const res = await fetch(`/api/products/?limit=5&offset=${products.length}`);
    const newProducts = await res.json();
    setProducts([...products, ...newProducts.products]);
  };

  return (
    <>
      {typeof window !== "undefined" && (
        // Render only on the client side
        <Navbar1 />
      )}
      <InfiniteScroll
        dataLength={products.length}
        next={getMoreProducts}
        hasMore={hasMore}
        loader={<h4 className="text-center text-3xl">Loading....</h4>}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8">
          {products.map((product) => (
            <ProductCard1 key={product.id} product={product} />
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
};

export default Catalog;
