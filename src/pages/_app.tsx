import "@/styles/globals.css";
import type { AppProps } from "next/app";
import styles from "@/styles/Home.module.css";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <section className={styles.page}>
      <Header />
      <div className={styles.main}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </section>
  );
}
