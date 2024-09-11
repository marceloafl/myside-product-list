import Image from "next/image";
import styles from "@/components/item/ProductItem.module.css";
import { formatPrice } from "@/utils/formatPrice";
import Link from "next/link";
import { ProductType } from "../list/product-list/ProductList";

export default function ProductItem({ product }: { product: ProductType }) {
  return (
    <ul key={product.id} className={styles.item}>
      <Link href={`/products/${product.id}`} className={styles.anchor}>
        <div className={styles.imageWrapper}>
          <Image alt={product.title} src={product.image} fill />
        </div>
        <div className={styles.infoWrapper}>
          <h2 className={styles.title}>{product.title}</h2>
          <p className={styles.price}>{formatPrice(product.price)}</p>
          <p className={styles.description}>{product.description}</p>
        </div>
      </Link>
    </ul>
  );
}
