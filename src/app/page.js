// Import your Client Component
import HomePage from "./home-page";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  return products;
}

export default async function Products() {
  // Fetch data directly in a Server Component
  const products = await getProducts();
  // Forward fetched data to your Client Component
  return <HomePage products={products} />;
}
