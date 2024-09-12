import { ProductType } from "@/types/product";

const baseUrl = "https://fakestoreapi.in/api/products";
const productsPerPage = 12;

export async function getAllProducts(
  page: number,
  limit = productsPerPage
): Promise<ProductType[]> {
  try {
    const response = await fetch(`${baseUrl}?page=${page}&limit=${limit}`);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(`${response.status}`);
    }

    return data.products;
  } catch (error) {
    console.error(error);
    return [];
  }
}
