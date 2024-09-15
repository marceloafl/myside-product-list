import { formatPrice } from "./formatPrice";

describe("formatPrice util test", () => {
  it("should format price with two decimal places and R$ symbol", () => {
    expect(formatPrice(100)).toBe("R$ 100,00");
    expect(formatPrice(100.5)).toBe("R$ 100,50");
    expect(formatPrice(100.99)).toBe("R$ 100,99");
  });

  it("should format zero value correctly", () => {
    expect(formatPrice(0)).toBe("R$ 0,00");
  });
});
