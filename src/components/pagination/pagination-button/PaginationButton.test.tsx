import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import PaginationButton from "./PaginationButton";
import styles from "@/components/pagination/pagination-button/PaginationButton.module.css";

const mockOnPageChange = jest.fn();

const defaultProps = {
  label: "Pagination button label",
  onPageChange: mockOnPageChange,
  disable: false,
};
describe("PaginationButton Component tests", () => {
  it("should render PaginationButton with label", () => {
    render(<PaginationButton {...defaultProps} />);

    const button = screen.getByRole("button", {
      name: "Pagination button label",
    });
    expect(button).toBeInTheDocument();
    expect(button).not.toBeDisabled();
  });

  it("should render a disable button when disable is true", () => {
    render(<PaginationButton {...defaultProps} disable={true} />);

    const button = screen.getByRole("button", {
      name: "Pagination button label",
    });
    expect(button).toBeDisabled();
    expect(button).toHaveClass(styles.disabled);
  });

  it("shpuld call onPageChange when the button is clicked", () => {
    render(<PaginationButton {...defaultProps} />);

    const button = screen.getByRole("button", {
      name: "Pagination button label",
    });
    fireEvent.click(button);

    expect(mockOnPageChange).toHaveBeenCalledTimes(1);
  });
});
