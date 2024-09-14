import Image from "next/image";
import styles from "@/components/header/Header.module.css";
import Link from "next/link";
import { useContext } from "react";
import { CartContext, useCartContext } from "@/contexts/CartContext";

export default function Header() {
  const cart = useContext(CartContext)?.cart;

  if (cart === undefined) {
    throw new Error("useCartContext must be used inside a CartProvider");
  }

  return (
    <header className={styles.header}>
      <Link href={"/"}>
        <div className={styles.logoWrapper}>
          <Image alt="My Side" src="/myside-logo.svg" fill />
        </div>
      </Link>

      <span>Itens no Carrinho: {cart.length}</span>
    </header>
  );
}
