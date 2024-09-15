import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductMainInfo from "./ProductMainInfo";
import styles from "@/components/product-main-info/ProductMainInfo.module.css";
import { formatPrice } from "@/utils/formatPrice";

const defaultProps = {
  title: "Sample Product",
  price: 100,
  description: "Mocked description.",
};

describe("PaginationMainInfo Component test", () => {
  it("should render ProductMainInfo component with title and formatted price", () => {
    render(<ProductMainInfo {...defaultProps} />);

    const title = screen.getByText("Sample Product");
    expect(title).toBeInTheDocument();
    expect(title).toHaveClass(styles.title);

    const price = screen.getByText(formatPrice(100));
    expect(price).toBeInTheDocument();
    expect(price).toHaveClass(styles.price);
  });

  it("should render description not collapsed", () => {
    render(<ProductMainInfo {...defaultProps} collapsed={false} />);

    const description = screen.getByText("Mocked description.");
    expect(description).toBeInTheDocument();
    expect(description).not.toHaveClass(styles.descriptionCollapsed);
  });

  it("should render description collapsed", () => {
    render(<ProductMainInfo {...defaultProps} collapsed={true} />);

    const description = screen.getByText("Mocked description.");
    expect(description).toBeInTheDocument();
    expect(description).toHaveClass(styles.descriptionCollapsed);
  });

  it("should display button to collapse description", () => {
    const handleCollapse = jest.fn();
    render(
      <ProductMainInfo {...defaultProps} handleCollapse={handleCollapse} />
    );

    const button = screen.getByText("Ver menos");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(styles.button);
  });

  it("should display button to expand description", () => {
    const handleCollapse = jest.fn();
    render(
      <ProductMainInfo
        {...defaultProps}
        handleCollapse={handleCollapse}
        collapsed
      />
    );

    const button = screen.getByText("Ver descrição completa");
    fireEvent.click(button);

    expect(handleCollapse).toHaveBeenCalledTimes(1);
  });
});
