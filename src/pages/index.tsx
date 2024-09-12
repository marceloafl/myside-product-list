import ProductList from "@/components/list/product-list/ProductList";
import { mockProducts } from "@/types/product";

const products = mockProducts;

export default function Home() {
  return <ProductList products={products} />;
}
