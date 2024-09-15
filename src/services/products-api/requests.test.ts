import fetchMock from "jest-fetch-mock";
import {
  getAllCategories,
  getAllProducts,
  getProductById,
  getProductsByCategory,
} from "./requests";

describe("Product API tests", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("should fetch getAllProducts and return products", async () => {
    const mockResponse = { products: [{ id: "1", name: "Product 1" }] };
    fetchMock.mockResponseOnce(JSON.stringify(mockResponse));

    const products = await getAllProducts(1);
    expect(fetchMock).toHaveBeenCalledWith(
      "https://fakestoreapi.in/api/products?page=1&limit=24"
    );
    expect(products).toEqual(mockResponse.products);
  });

  it("should handle fetch error in getAllProducts", async () => {
    fetchMock.mockReject(new Error("Failed to fetch"));

    const products = await getAllProducts(1);
    expect(products).toEqual([]);
  });

  it("should fetch getProductById and return a product", async () => {
    const mockResponse = { product: { id: "1", name: "Product 1" } };
    fetchMock.mockResponseOnce(JSON.stringify(mockResponse));

    const product = await getProductById("1");
    expect(fetchMock).toHaveBeenCalledWith(
      "https://fakestoreapi.in/api/products/1"
    );
    expect(product).toEqual(mockResponse.product);
  });

  it("handle fetch error in getProductById", async () => {
    fetchMock.mockReject(new Error("Failed to fetch"));

    const product = await getProductById("1");
    expect(product).toBeNull();
  });

  it("should fetch getAllCategories and return categories", async () => {
    const mockResponse = { categories: ["Category 1", "Category 2"] };
    fetchMock.mockResponseOnce(JSON.stringify(mockResponse));

    const categories = await getAllCategories();
    expect(fetchMock).toHaveBeenCalledWith(
      "https://fakestoreapi.in/api/products/category"
    );
    expect(categories).toEqual(mockResponse.categories);
  });

  it("handle fetch error in getAllCategories", async () => {
    fetchMock.mockReject(new Error("Failed to fetch"));

    const categories = await getAllCategories();
    expect(categories).toBeUndefined();
  });

  it("should fetch getProductsByCategory return products by category", async () => {
    const mockResponse = { products: [{ id: "1", name: "Product 1" }] };
    fetchMock.mockResponseOnce(JSON.stringify(mockResponse));

    const products = await getProductsByCategory("electronics", 1);
    expect(fetchMock).toHaveBeenCalledWith(
      "https://fakestoreapi.in/api/products/category?type=electronics&?page=1&limit=24"
    );
    expect(products).toEqual(mockResponse.products);
  });

  it("handle fetch error in getProductsByCategory", async () => {
    fetchMock.mockReject(new Error("Failed to fetch"));

    const products = await getProductsByCategory("electronics", 1);
    expect(products).toEqual([]);
  });
});
