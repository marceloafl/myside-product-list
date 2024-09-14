import styles from "@/components/button/add-to-cart/AddToCart.module.css";
import { CartContext } from "@/contexts/CartContext";
import { ProductType } from "@/types/product";
import { useContext } from "react";

interface AddToCartButtonProps {
  product: ProductType;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const context = useContext(CartContext);

  const handleAddToCart = () => {
    context?.addToCart(product);
  };

  return (
    <button className={styles.button} onClick={handleAddToCart}>
      Adicionar ao Carrinho
    </button>
  );
}
