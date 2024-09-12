import ProductDetails from "@/components/product-details/ProductDetails";
import { getProductById } from "@/services/products-api/requests";
import { ProductType } from "@/types/product";
import { GetServerSideProps } from "next";

interface ProductProps {
  product: ProductType;
}

export default function Product({ product }: ProductProps) {
  return <ProductDetails product={product} />;
}

export const getServerSideProps: GetServerSideProps<ProductProps> = async (
  context
) => {
  const { id } = context.query;
  if (typeof id !== "string") {
    return {
      notFound: true,
    };
  }
  try {
    const product = await getProductById(id);
    if (!product) {
      return {
        notFound: true,
      };
    }
    return { props: { product } };
  } catch (error) {
    console.error(error);
    return {
      notFound: true,
    };
  }
};
