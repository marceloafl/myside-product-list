import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductImage from "./ProductImage";

const defaultProps = {
  alt: "Sample Image",
  imageSrc: "/path/to/image.jpg",
};

describe("ProductImage Component tests", () => {
  it("should render ProductImage component with correct alt and src", () => {
    render(<ProductImage {...defaultProps} page="main" />);

    const imageWrapper = screen.getByTestId("product-main-image");
    expect(imageWrapper).toBeInTheDocument();

    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("alt", defaultProps.alt);
    expect(image).toHaveAttribute("src");
  });
});
