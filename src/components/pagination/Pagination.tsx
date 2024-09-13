import PaginationButton from "@/components/pagination/pagination-button/PaginationButton";
import styles from "@/components/pagination/Pagination.module.css";

interface PaginationProps {
  currentPage: number;
  isLastPage: boolean;
  handlePageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  isLastPage,
  handlePageChange,
}: PaginationProps) {
  return (
    <div className={styles.wrapper}>
      <PaginationButton
        label="<"
        disable={currentPage === 1}
        onPageChange={() => handlePageChange(currentPage - 1)}
      />

      <span className={styles.pageInfo}>{currentPage}</span>

      <PaginationButton
        label=">"
        disable={isLastPage}
        onPageChange={() => handlePageChange(currentPage + 1)}
      />
    </div>
  );
}
