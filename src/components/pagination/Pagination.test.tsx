import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Pagination from "./Pagination";

const mockHandlePageChange = jest.fn();

const defaultProps = {
  currentPage: 1,
  isLastPage: false,
  handlePageChange: mockHandlePageChange,
};

describe("Pagination Component tests", () => {
  it("should render Pagination component with buttons and current page", () => {
    render(<Pagination {...defaultProps} />);

    const pagination = screen.getByTestId("pagination");
    expect(pagination).toBeInTheDocument();

    const prevButton = screen.getByRole("button", { name: "<" });
    expect(prevButton).toBeInTheDocument();

    const nextButton = screen.getByRole("button", { name: ">" });
    expect(nextButton).toBeInTheDocument();

    const pageInfo = screen.getByText("1");
    expect(pageInfo).toBeInTheDocument();
  });
});
