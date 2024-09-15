import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductTechInfo from "./ProductTechInfo";
import styles from "@/components/product-tech-info/ProductTechInfo.module.css";

const defaultProps = {
  brand: "Brand",
  model: "Model",
  color: "Red",
  category: "Electronics",
};

describe("ProductTechInfo Component tests", () => {
  it("shpuld render ProductTechInfo component with list of details", () => {
    render(<ProductTechInfo {...defaultProps} />);

    const title = screen.getByText("Detalhes do produto");
    expect(title).toBeInTheDocument();
    expect(title).toHaveClass(styles.title);

    const brand = screen.getByText("Marca:");
    expect(brand).toBeInTheDocument();
    expect(brand).toHaveClass(styles.subtitle);
    expect(screen.getByText("Brand")).toBeInTheDocument();

    const model = screen.getByText("Modelo:");
    expect(model).toBeInTheDocument();
    expect(model).toHaveClass(styles.subtitle);
    expect(screen.getByText("Model")).toBeInTheDocument();

    const color = screen.getByText("Cor:");
    expect(color).toBeInTheDocument();
    expect(color).toHaveClass(styles.subtitle);
    expect(screen.getByText("Red")).toBeInTheDocument();

    const category = screen.getByText("Categoria:");
    expect(category).toBeInTheDocument();
    expect(category).toHaveClass(styles.subtitle);
    expect(screen.getByText("Electronics")).toBeInTheDocument();
  });
});
