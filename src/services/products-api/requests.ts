import { ProductType } from "@/types/product";

const baseUrl = "https://fakestoreapi.in/api/products";
const productsPerPage = 12;

export async function getAllProducts(
  page: number,
  limit = productsPerPage
): Promise<ProductType[]> {
  try {
    const response = await fetch(`${baseUrl}?page=${page}&limit=${limit}`);

    if (!response.ok) {
      throw new Error(`${response.status}`);
    }

    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getProductById(id: string): Promise<ProductType | null> {
  try {
    const response = await fetch(`${baseUrl}/${id}`);

    if (!response.ok) {
      throw new Error(`${response.status}`);
    }

    const data = await response.json();
    return data.product;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getAllCategories() {
  try {
    const response = await fetch(`${baseUrl}/category`);
    const data = await response.json();
    return data.categories;
  } catch (error) {
    console.error(error);
  }
}
