import Image from "next/image";
import styles from "@/components/product-image/ProductImage.module.css";

interface ProductImageProps {
  alt: string;
  imageSrc: string;
  page: "main" | "product";
}

export default function ProductImage({
  alt,
  imageSrc,
  page = "main",
}: ProductImageProps) {
  const imageSize = styles[page] || styles.mainPage;
  return (
    <div className={`${styles.wrapper} ${imageSize}`}>
      <Image
        alt={alt}
        src={imageSrc}
        fill
        priority
        sizes="(max-width: 768px) 128px, (max-width: 1024px) 288px, 100vw"
      />
    </div>
  );
}
