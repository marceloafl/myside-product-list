import Image from "next/image";
import styles from "@/components/list/item/ProductItem.module.css";
import { formatPrice } from "@/utils/formatPrice";
import Link from "next/link";
import { ProductType } from "@/types/product";
import ProductMainInfo from "../../product-main-info/ProductMainInfo";
import ProductImage from "@/components/product-image/ProductImage";

interface ProductItemProps {
  product: ProductType;
}

export default function ProductItem({ product }: ProductItemProps) {
  return (
    <ul key={product.id} className={styles.item}>
      <Link href={`/products/${product.id}`} className={styles.anchor}>
        <ProductImage
          alt={product.title}
          imageSrc={product.image}
          page="product"
        />
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
