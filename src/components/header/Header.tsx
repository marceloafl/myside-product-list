import Image from "next/image";
import styles from "@/components/header/Header.module.css";
import Link from "next/link";
import { useCartContext } from "@/contexts/CartContext";

export default function Header() {
  const { cart } = useCartContext();
  return (
    <header className={styles.header}>
      <Link href={"/"}>
        <div className={styles.logoWrapper}>
          <Image alt="My Side" src="/myside-logo.svg" fill />
        </div>
      </Link>
      <div>
        <span className={styles.count}>{cart.length}</span>
        <div className={styles.cartIconWrapper}>
          <Image alt="Carrinho" src="/shopping-bag.svg" fill />
        </div>
      </div>
    </header>
  );
}
