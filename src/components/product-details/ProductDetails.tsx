import styles from "@/components/product-details/ProductDetails.module.css";
import { mockProducts } from "@/types/product";
import { formatPrice } from "@/utils/formatPrice";
import Image from "next/image";
import { useState } from "react";
import ProductMainInfo from "@/components/product-main-info/ProductMainInfo";
import ProductTechInfo from "@/components/product-tech-info/ProductTechInfo";
import AddToCartButton from "@/components/button/add-to-cart/AddToCart";
import ProductImage from "@/components/product-image/ProductImage";

const product = mockProducts[0];

export default function ProductDetails() {
  const [collapsed, setCollapsed] = useState(true);

  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <section className={styles.section}>
      <ProductImage
        alt={product.title}
        imageSrc={product.image}
        page="product"
      />
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
      <div className={styles.buttonWrapper}>
        <AddToCartButton />
      </div>
    </section>
  );
}
