import DropdownFilter from "@/components/input/filter/Filter";
import Search from "@/components/input/search/Search";
import styles from "@/components/list/search-filter/SearchAndFilter.module.css";

interface SearchAndFilterProps {
  filterLabel: string;
  filterOptions: string[];
  handleFilterChange: (category: string) => void;
}

export default function SearchAndFilter({
  filterLabel,
  filterOptions,
  handleFilterChange,
}: SearchAndFilterProps) {
  return (
    <div className={styles.wrapper}>
      <Search />
      <DropdownFilter
        label={filterLabel}
        options={filterOptions}
        handleFilterChange={handleFilterChange}
      />
    </div>
  );
}
