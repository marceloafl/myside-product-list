import { ProductType } from "@/types/product";
import { render, screen } from "@testing-library/react";
import ProductItem from "./ProductItem";
import { CartProvider } from "@/contexts/CartContext";

const mockProduct: ProductType = {
  id: 1,
  title: "Product 1",
  image: "/path/to/image.jpg",
  price: 100,
  description: "A great product",
  brand: "Brand X",
  model: "Model Y",
  color: "Red",
  category: "Electronics",
  discount: 10,
  popular: true,
  onSale: true,
};

const renderWithCartProvider = (element: React.ReactElement) => {
  return render(<CartProvider>{element}</CartProvider>);
};

describe("ProductItem Component test", () => {
  it("should render correct link href", () => {
    renderWithCartProvider(<ProductItem product={mockProduct} />);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/products/1");
  });

  it("should render correct info", () => {
    renderWithCartProvider(<ProductItem product={mockProduct} />);

    const image = screen.getByTestId("product-main-image");
    expect(image).toBeInTheDocument();
  });

  it("shpuld render AddToCartButton", () => {
    renderWithCartProvider(<ProductItem product={mockProduct} />);

    expect(screen.getByText("Adicionar ao Carrinho")).toBeInTheDocument();
  });
});
