import styles from "@/components/list/product-list/ProductList.module.css";
import ProductItem from "@/components/list/item/ProductItem";
import { ProductType } from "@/types/product";
import SearchAndFilter from "../search-filter/SearchAndFilter";

interface ProductListProps {
  products: ProductType[];
  categories: string[];
}

export default function ProductList({
  products,
  categories,
}: ProductListProps) {
  return (
    <>
      <SearchAndFilter
        filterLabel="Filtre por categorias:"
        filterOptions={categories}
      />
      <li className={styles.list}>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </li>
    </>
  );
}
