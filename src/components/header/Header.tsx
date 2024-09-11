import Image from "next/image";
import styles from "@/components/header/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <Image alt="My Side" src="/myside-logo.svg" fill />
      </div>
    </header>
  );
}
