import { fireEvent, render, screen } from "@testing-library/react";
import { CartContext, CartProvider } from "@/contexts/CartContext";
import { ProductType } from "@/types/product";
import AddToCartButton from "./AddToCart";
import React from "react";

const product: ProductType = {
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

describe("AddToCartButton Component tests", () => {
  const mockAddToCart = jest.fn();

  const MockCartProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
  }) => {
    return (
      <CartContext.Provider
        value={{
          cart: [],
          addToCart: mockAddToCart,
        }}
      >
        {children}
      </CartContext.Provider>
    );
  };

  it("should render the button correctly", () => {
    render(
      <CartProvider>
        <AddToCartButton product={product} />
      </CartProvider>
    );
    expect(screen.getByText("Adicionar ao Carrinho")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveClass("button");
  });

  it("deve chamar addToCart quando o botão é clicado", () => {
    render(
      <MockCartProvider>
        <AddToCartButton product={product} />
      </MockCartProvider>
    );

    fireEvent.click(screen.getByText("Adicionar ao Carrinho"));

    expect(mockAddToCart).toHaveBeenCalledTimes(1);
    expect(mockAddToCart).toHaveBeenCalledWith(product);
  });
});
