import Catalog from "./catalog";

async function getProducts() {
  const res = await fetch("http:localhost:3000/api/products?limit=10&offset=0");
  const res2 = await fetch("http:localhost:3000/api/total-items");
  const { products } = await res.json();
  const { items } = await res2.json();
  return { products, items };
}

export default async function Products() {
  // Fetch data directly in a Server Component
  const { products,items } = await getProducts();
  // Forward fetched data to your Client Component
  return <Catalog data={products} items={items}/>;
}
