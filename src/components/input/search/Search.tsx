import styles from "@/components/input/search/Search.module.css";
import Image from "next/image";

interface SearchProps {
  label?: string;
  searchedValue: string;
  handleSearchChange: (category: string) => void;
}

export default function Search({
  label,
  searchedValue,
  handleSearchChange,
}: SearchProps) {
  return (
    <div className={styles.wrapper}>
      <label htmlFor="categories" className={styles.label}>
        {label}
      </label>
      <div className={styles.inputBox}>
        <Image alt="Search" src={"/icon-search.svg"} width={16} height={16} />
        <input
          type="search"
          id="products-search"
          name="search"
          className={styles.input}
          value={searchedValue}
          placeholder="Digite o nome do produto"
          onChange={(event) => {
            handleSearchChange(event.target.value);
          }}
        />
      </div>
    </div>
  );
}
