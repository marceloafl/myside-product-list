import { render, screen } from "@testing-library/react";
import { formatUppercase } from "@/utils/formatUppercase";
import DropdownFilter from "./Filter";

describe("DropdownFilter Component test", () => {
  const handleFilterChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render the label and options correctly", () => {
    const options = ["option 1", "option 2"];
    const label = "Select Category";

    render(
      <DropdownFilter
        label={label}
        options={options}
        handleFilterChange={handleFilterChange}
      />
    );

    expect(screen.getByLabelText(label)).toBeInTheDocument();

    options.forEach((option) => {
      expect(screen.getByText(formatUppercase(option))).toBeInTheDocument();
    });
  });
});
