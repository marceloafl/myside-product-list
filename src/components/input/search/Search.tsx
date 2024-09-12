import styles from "@/components/input/search/Search.module.css";
import Image from "next/image";

export default function Search() {
  return (
    <div className={styles.wrapper}>
      <Image alt="Search" src={"/icon-search.svg"} width={24} height={24} />
      <input
        type="search"
        id="products-search"
        name="search"
        className={styles.input}
        placeholder="Busque produtos"
      />
    </div>
  );
}
