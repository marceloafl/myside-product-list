import ProductList from "@/components/list/product-list/ProductList";
import {
  getAllProducts,
  getAllCategories,
} from "@/services/products-api/requests";
import { ProductType } from "@/types/product";

interface HomeProps {
  products: ProductType[];
  categories: string[];
}

export default function Home({ products, categories }: HomeProps) {
  return <ProductList initialProducts={products} categories={categories} />;
}

export async function getStaticProps() {
  try {
    const products = await getAllProducts(1);
    const categories = await getAllCategories();
    return {
      props: {
        products,
        categories,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        products: [],
      },
    };
  }
}
