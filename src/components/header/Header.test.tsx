import { CartProvider } from "@/contexts/CartContext";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header Component tests", () => {
  render(
    <CartProvider>
      <Header />
    </CartProvider>
  );
  it("should render image properly", () => {
    expect(screen.getByAltText("My Side")).toBeInTheDocument();
  });

  it("should render the cart icon properly", () => {
    render(
      <CartProvider>
        <Header />
      </CartProvider>
    );
    expect(screen.getByAltText("Carrinho")).toBeInTheDocument();
  });
});
