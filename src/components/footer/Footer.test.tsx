import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer Component tests", () => {
  it("should display the correct author name", () => {
    render(<Footer />);
    expect(screen.getByText("Marcelo Lemes")).toBeInTheDocument();
  });

  it("should display the correct email address link", () => {
    render(<Footer />);
    const emailLink = screen.getByText("marceloaflemes@gmail.com");
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute(
      "href",
      "mailto:marceloaflemes@gmail.com"
    );
  });
});
