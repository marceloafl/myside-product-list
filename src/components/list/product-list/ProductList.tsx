import styles from "@/components/list/product-list/ProductList.module.css";
import ProductItem from "@/components/item/ProductItem";
import { ProductType } from "@/types/product";

interface ProductListProps {
  products: ProductType[];
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <li className={styles.list}>
      {products.map((product) => (
        <ProductItem product={product} />
      ))}
    </li>
  );
}
