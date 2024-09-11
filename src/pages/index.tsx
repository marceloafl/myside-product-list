import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import ProductList from "@/components/list/product-list/ProductList";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <section className={styles.page}>
      <Header />
      <ProductList />
      <Footer />
    </section>
  );
}
