import { Suspense } from "react";
import Catalog from "./catalog";

const API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;
async function getProducts() {
  const res = await fetch( `${API_URL}/api/products/?limit=10&offset=0`);
  const res2 = await fetch(`${API_URL}/api/total-items`);
  const { products } = await res.json();
  const { items } = await res2.json();
  return { products, items };
}

export default async function Products() {
  if(!API_URL){
    return null;
  }
  // Fetch data directly in a Server Component
  const { products,items } = await getProducts();
  // Forward fetched data to your Client Component
  return <Catalog data={products} items={items}/>
  
}
