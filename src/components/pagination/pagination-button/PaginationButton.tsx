import styles from "@/components/pagination/pagination-button/PaginationButton.module.css";

interface PaginationControlButtonProps {
  label: string;
  onPageChange: () => void;
  disable: boolean;
}

export default function PaginationButton({
  label,
  onPageChange,
  disable,
}: PaginationControlButtonProps) {
  return (
    <button
      onClick={onPageChange}
      disabled={disable}
      className={`${styles.button} ${disable ? styles.disabled : ""}`}
      aria-label={label}
    >
      <span className={styles.label}>{label}</span>
    </button>
  );
}
