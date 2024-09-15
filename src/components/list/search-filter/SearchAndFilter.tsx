import DropdownFilter from "@/components/input/filter/Filter";
import Search from "@/components/input/search/Search";
import styles from "@/components/list/search-filter/SearchAndFilter.module.css";

interface SearchAndFilterProps {
  filterLabel: string;
  searchLabel?: string;
  filterOptions: string[];
  searchedValue: string;
  handleFilterChange: (category: string) => void;
  handleSearchChange: (value: string) => void;
}

export default function SearchAndFilter({
  filterLabel,
  searchLabel,
  filterOptions,
  searchedValue,
  handleFilterChange,
  handleSearchChange,
}: SearchAndFilterProps) {
  return (
    <div className={styles.wrapper} data-testid="search-and-filter">
      <Search
        label={searchLabel}
        handleSearchChange={handleSearchChange}
        searchedValue={searchedValue}
      />
      <DropdownFilter
        label={filterLabel}
        options={filterOptions}
        handleFilterChange={handleFilterChange}
      />
    </div>
  );
}
