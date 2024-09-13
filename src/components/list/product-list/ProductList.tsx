import styles from "@/components/list/product-list/ProductList.module.css";
import ProductItem from "@/components/list/item/ProductItem";
import { ProductType } from "@/types/product";
import SearchAndFilter from "../search-filter/SearchAndFilter";
import { useEffect, useState } from "react";
import {
  getAllProducts,
  getProductsByCategory,
} from "@/services/products-api/requests";

interface ProductListProps {
  initialProducts: ProductType[];
  categories: string[];
}

export default function ProductList({
  initialProducts,
  categories,
}: ProductListProps) {
  const [category, setcategory] = useState<string>("");
  const [products, setProducts] = useState<ProductType[]>(initialProducts);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = category
          ? await getProductsByCategory(category, 1)
          : await getAllProducts(1);
        setProducts(products);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, [category]);

  return (
    <>
      <SearchAndFilter
        filterLabel="Filtre por categorias:"
        filterOptions={categories}
        handleFilterChange={(category) => setcategory(category)}
      />
      <li className={styles.list}>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </li>
    </>
  );
}
