import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import ProductList from "@/components/list/product-list/ProductList";
import styles from "@/styles/Home.module.css";
import { mockProducts } from "@/types/product";

const products = mockProducts;

export default function Home() {
  return (
    <section className={styles.page}>
      <Header />
      <ProductList products={products} />
      <Footer />
    </section>
  );
}
