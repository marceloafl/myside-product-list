import styles from "@/components/input/filter/Filter.module.css";
import { formatUppercase } from "@/utils/formatUppercase";

interface DropdownFilterProps {
  label: string;
  options: string[];
}

export default function DropdownFilter({
  label,
  options,
}: DropdownFilterProps) {
  return (
    <div className={styles.wrapper}>
      <label htmlFor="categories" className={styles.label}>
        {label}
      </label>
      <select name="categories" id="categories" className={styles.dropdown}>
        {options.map((opt, index) => (
          <option key={index} value={opt}>
            {formatUppercase(opt)}
          </option>
        ))}
      </select>
    </div>
  );
}
