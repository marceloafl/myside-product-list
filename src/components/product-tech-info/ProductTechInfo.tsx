import styles from "@/components/product-tech-info/ProductTechInfo.module.css";

interface ProductTechProps {
  brand: string;
  model: string;
  color: string;
  category: string;
}

export default function ProductTechInfo({
  brand,
  model,
  color,
  category,
}: ProductTechProps) {
  return (
    <section className={styles.wrapper}>
      <p className={styles.title}>Detalhes do produto</p>
      <p className={styles.techInfo}>
        <span className={styles.subtitle}>Marca:</span> {brand}
      </p>
      <p className={styles.techInfo}>
        <span className={styles.subtitle}>Modelo:</span> {model}
      </p>
      <p className={styles.techInfo}>
        <span className={styles.subtitle}>Cor:</span> {color}
      </p>
      <p className={styles.techInfo}>
        <span className={styles.subtitle}>Categoria:</span> {category}
      </p>
    </section>
  );
}
