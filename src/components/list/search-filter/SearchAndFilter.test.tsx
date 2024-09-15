import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchAndFilter from "./SearchAndFilter";

const mockHandleFilterChange = jest.fn();
const mockHandleSearchChange = jest.fn();

const defaultProps = {
  filterLabel: "Filter",
  searchLabel: "Search",
  filterOptions: ["Option 1", "Option 2"],
  searchedValue: "",
  handleFilterChange: mockHandleFilterChange,
  handleSearchChange: mockHandleSearchChange,
};

describe("SearchAndFilter Component test", () => {
  it("should render SearchAndFilter component", () => {
    render(<SearchAndFilter {...defaultProps} />);

    const container = screen.getByTestId("search-and-filter");
    expect(container).toBeInTheDocument();

    const searchInput = screen.getByLabelText("Search");
    expect(searchInput).toBeInTheDocument();

    const dropdown = screen.getByLabelText("Filter");
    expect(dropdown).toBeInTheDocument();
  });

  it("should call handleSearchChange on input change", () => {
    render(<SearchAndFilter {...defaultProps} />);

    const searchInput = screen.getByLabelText("Search");
    fireEvent.change(searchInput, { target: { value: "test" } });

    expect(mockHandleSearchChange).toHaveBeenCalledWith("test");
  });

  it("should call handleFilterChange on dropdown change", () => {
    render(<SearchAndFilter {...defaultProps} />);

    const dropdown = screen.getByLabelText("Filter");
    fireEvent.change(dropdown, { target: { value: "Option 1" } });

    expect(mockHandleFilterChange).toHaveBeenCalledWith("Option 1");
  });
});
