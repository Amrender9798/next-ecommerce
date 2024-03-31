"use client"
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ProductCard1 from "../components/card/ProductCard1";
import { useSearchParams } from "next/navigation";
import Navbar1 from "../components/navbar/Navbar1";
import Navbar2 from "../components/navbar/Navbar2";
import ProductCard2 from "../components/card/ProductCard2";
import Carousel from "../components/view/Carousel";

export default function Catalog({ data, items }) {
  
  const searchParams = useSearchParams();
  const navbar = searchParams.get("navbar") || "Navbar1";
  const productCard = searchParams.get("productCard") || "ProductCard1";
  const displayMode = searchParams.get("displayMode") || "view_all";
 
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
      {navbar == "Navbar1" ? <Navbar1 /> : <Navbar2 />}
      {displayMode === "view_all" ? (
        <InfiniteScroll
          dataLength={products.length}
          next={getMoreProducts}
          hasMore={hasMore}
          loader={<h4 className="text-center text-3xl">Loading....</h4>}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8">
            {products.map((product) =>
              productCard === "ProductCard1" ? (
                <ProductCard1 key={product.id} product={product} />
              ) : (
                <ProductCard2 key={product.id} product={product} />
              )
            )}
          </div>
        </InfiniteScroll>
      ) : (
        <Carousel data={products} productCard={productCard} items={items} />
      )}
    </>
  );
}