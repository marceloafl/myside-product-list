import ProductList from "@/components/list/product-list/ProductList";
import { getAllProducts } from "@/services/products-api/requests";
import { mockProducts, ProductType } from "@/types/product";

interface HomeProps {
  products: ProductType[];
  error: boolean;
}

export default function Home({ products }: HomeProps) {
  return <ProductList products={products} />;
}

export async function getStaticProps() {
  try {
    const products = await getAllProducts(1);
    return {
      props: {
        products,
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
