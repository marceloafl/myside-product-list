import styles from "@/components/button/add-to-cart/AddToCart.module.css";
import { useCartContext } from "@/contexts/CartContext";
import { ProductType } from "@/types/product";

interface AddToCartButtonProps {
  product: ProductType;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart } = useCartContext();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <button className={styles.button} onClick={handleAddToCart}>
      Adicionar ao Carrinho
    </button>
  );
}
