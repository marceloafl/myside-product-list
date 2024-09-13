import styles from "@/components/input/filter/Filter.module.css";
import { formatUppercase } from "@/utils/formatUppercase";

interface DropdownFilterProps {
  label: string;
  options: string[];
  handleFilterChange: (category: string) => void;
}

export default function DropdownFilter({
  label,
  options,
  handleFilterChange,
}: DropdownFilterProps) {
  return (
    <div className={styles.wrapper}>
      <label htmlFor="categories" className={styles.label}>
        {label}
      </label>
      <select
        name="categories"
        id="categories"
        className={styles.dropdown}
        onChange={(event) => {
          handleFilterChange(event.target.value);
        }}
      >
        <option value="" selected>
          Todas as categorias
        </option>
        {options.map((opt, index) => (
          <option key={index} value={opt}>
            {formatUppercase(opt)}
          </option>
        ))}
      </select>
    </div>
  );
}
