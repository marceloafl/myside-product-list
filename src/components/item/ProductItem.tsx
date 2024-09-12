import Image from "next/image";
import styles from "@/components/item/ProductItem.module.css";
import { formatPrice } from "@/utils/formatPrice";
import Link from "next/link";
import { ProductType } from "@/types/product";
import ProductMainInfo from "../product-main-info/ProductMainInfo";

interface ProductItemProps {
  product: ProductType;
}

export default function ProductItem({ product }: ProductItemProps) {
  return (
    <ul key={product.id} className={styles.item}>
      <Link href={`/products/${product.id}`} className={styles.anchor}>
        <div className={styles.imageWrapper}>
          <Image alt={product.title} src={product.image} fill />
        </div>
        <ProductMainInfo
          title={product.title}
          price={product.price}
          description={product.description}
          collapsed={true}
        />
      </Link>
    </ul>
  );
}
