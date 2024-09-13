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
  const [filteredProducts, setFilteredProducts] =
    useState<ProductType[]>(initialProducts);
  const [searchedValue, setSearchedValue] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      setSearchedValue("");
      try {
        const products = category
          ? await getProductsByCategory(category, 1)
          : await getAllProducts(1);
        setFilteredProducts(products);
        setProducts(products);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, [category]);

  const handleSearchChange = (value: string) => {
    const valueLowercase = value.toLowerCase();
    setSearchedValue(value);
    if (valueLowercase) {
      const searchResult = products.filter((product) =>
        product.title.toLowerCase().includes(valueLowercase)
      );
      setProducts(searchResult);
      return;
    }
    setProducts(filteredProducts);
  };

  return (
    <>
      <SearchAndFilter
        filterLabel="Filtre por categorias:"
        searchLabel="Pesquise por produtos:"
        filterOptions={categories}
        handleFilterChange={(category) => setcategory(category)}
        handleSearchChange={handleSearchChange}
        searchedValue={searchedValue}
      />
      <li className={styles.list}>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </li>
    </>
  );
}
