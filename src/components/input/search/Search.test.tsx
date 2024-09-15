import { fireEvent, render, screen } from "@testing-library/react";
import Search from "@/components/input/search/Search";

describe("Search Component tests", () => {
  const handleSearchChange = jest.fn();

  it("should render the label and the input field with the correct value", () => {
    const label = "Search Products";
    const searchedValue = "Searched value";

    render(
      <Search
        label={label}
        searchedValue={searchedValue}
        handleSearchChange={handleSearchChange}
      />
    );

    expect(screen.getByLabelText(label)).toBeInTheDocument();

    const input = screen.getByRole("searchbox");
    expect(input).toHaveValue(searchedValue);
  });

  it("should call handleSearchChange with the new value when the input changes", () => {
    const label = "Search Products";
    const searchedValue = "";

    render(
      <Search
        label={label}
        searchedValue={searchedValue}
        handleSearchChange={handleSearchChange}
      />
    );

    fireEvent.change(screen.getByRole("searchbox"), {
      target: { value: "new search term" },
    });

    expect(handleSearchChange).toHaveBeenCalledWith("new search term");
  });

  it("should have the correct placeholder text in the input field", () => {
    const label = "Search Products";
    const searchedValue = "";

    render(
      <Search
        label={label}
        searchedValue={searchedValue}
        handleSearchChange={handleSearchChange}
      />
    );

    expect(
      screen.getByPlaceholderText("Digite o nome do produto")
    ).toBeInTheDocument();
  });
});
