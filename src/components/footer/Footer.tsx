import styles from "@/components/footer/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Marcelo Lemes</p>
      <address>
        <a href="mailto:marceloaflemes@gmail.com">marceloaflemes@gmail.com</a>
      </address>
    </footer>
  );
}
