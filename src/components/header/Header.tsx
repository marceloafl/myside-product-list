import Image from "next/image";
import styles from "@/components/header/Header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href={"/"}>
        <div className={styles.logoWrapper}>
          <Image alt="My Side" src="/myside-logo.svg" fill />
        </div>
      </Link>
    </header>
  );
}
