import styles from "@/components/product-details/ProductDetails.module.css";
import { mockProducts } from "@/types/product";
import { formatPrice } from "@/utils/formatPrice";
import Image from "next/image";
import { useState } from "react";
import ProductMainInfo from "../product-main-info/ProductMainInfo";
import ProductTechInfo from "../product-tech-info/ProductTechInfo";
import AddToCartButton from "../button/add-to-cart/AddToCart";

const product = mockProducts[0];

export default function ProductDetails() {
  const [collapsed, setCollapsed] = useState(true);

  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <section className={styles.section}>
      <div className={styles.imageWrapper}>
        <Image alt={product.title} src={product.image} fill />
      </div>
      <ProductMainInfo
        title={product.title}
        price={product.price}
        description={product.description}
        collapsed={collapsed}
        handleCollapse={handleCollapse}
      />
      <ProductTechInfo
        brand={product.brand}
        model={product.model}
        color={product.color}
        category={product.category}
      />
      <AddToCartButton />
    </section>
  );
}
