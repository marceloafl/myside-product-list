import styles from "@/components/product-main-info/ProductMainInfo.module.css";
import { formatPrice } from "@/utils/formatPrice";

interface ProductInfoProps {
  title: string;
  price: number;
  description: string;
  collapsed?: boolean;
  handleCollapse?: () => void;
}

export default function ProductMainInfo({
  title,
  price,
  description,
  collapsed,
  handleCollapse,
}: ProductInfoProps) {
  return (
    <section className={styles.wrapper} data-testid="product-main-info">
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.price}>{formatPrice(price)}</p>
      <div>
        <p
          className={`${styles.description} ${
            collapsed ? styles.descriptionCollapsed : ""
          }`}
        >
          {description}
        </p>
        {handleCollapse && (
          <button className={styles.button} onClick={handleCollapse}>{`${
            collapsed ? "Ver descrição completa" : "Ver menos"
          }`}</button>
        )}
      </div>
    </section>
  );
}
