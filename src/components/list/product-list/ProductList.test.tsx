import { ProductType } from "@/types/product";
import ProductList from "./ProductList";
import { render, screen } from "@testing-library/react";
import { CartProvider } from "@/contexts/CartContext";

const mockProducts: ProductType[] = [
  {
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
  },
  {
    id: 2,
    title: "Product 2",
    image: "/path/to/image2.jpg",
    price: 100,
    description: "A great product",
    brand: "Brand 2",
    model: "Model 2",
    color: "Blue",
    category: "Mobile",
    discount: 10,
    popular: true,
    onSale: true,
  },
];

const mockCategories = ["Category 1", "Category 1"];

const renderWithCartProvider = (element: React.ReactElement) => {
  return render(<CartProvider>{element}</CartProvider>);
};

describe("ProductList Component test", () => {
  it("should render correct list", () => {
    renderWithCartProvider(
      <ProductList
        initialProducts={mockProducts}
        categories={mockCategories}
      ></ProductList>
    );

    expect(screen.getByTestId("products-list")).toBeInTheDocument();
  });
});
