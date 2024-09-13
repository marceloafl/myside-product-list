import styles from "@/components/list/product-list/ProductList.module.css";
import ProductItem from "@/components/list/item/ProductItem";
import { ProductType } from "@/types/product";
import SearchAndFilter from "../search-filter/SearchAndFilter";
import { useEffect, useState } from "react";
import {
  getAllProducts,
  getProductsByCategory,
} from "@/services/products-api/requests";
import Pagination from "@/components/pagination/Pagination";
import { resultsPerPage } from "@/services/products-api/requests";
import { scrollToTop } from "@/utils/scrollToTop";

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
  const [isLastPage, setIsLastPage] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      setSearchedValue("");
      try {
        const products = category
          ? await getProductsByCategory(category, currentPage)
          : await getAllProducts(currentPage);
        setFilteredProducts(products);
        setProducts(products);
        checkLastPage();
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, [category, currentPage]);

  const checkLastPage = () => {
    setIsLastPage(products.length < resultsPerPage);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    scrollToTop();
  };

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
      <Pagination
        currentPage={currentPage}
        isLastPage={isLastPage}
        handlePageChange={handlePageChange}
      />
    </>
  );
}
