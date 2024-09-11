import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <section className={styles.page}>
      <Header />
      <Footer />
    </section>
  );
}
