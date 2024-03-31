import { NextResponse } from "next/server";
import products from "../data";

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const limit = searchParams.get("limit");
  const offset = searchParams.get("offset");

  let result = products;
  if (limit && offset && !isNaN(limit) && !isNaN(offset)) {
    const start = parseInt(offset);
    const end = start + parseInt(limit);
    result = products.slice(start, end);
  }

  return NextResponse.json({ products: result });
}
