import { formatUppercase } from "./formatUppercase";

describe("formatUppercase util test", () => {
  it("should capitalize the first letter of a lowercase string", () => {
    expect(formatUppercase("hello")).toBe("Hello");
  });

  it("keeps the first letter uppercase if already capitalized", () => {
    expect(formatUppercase("Hello")).toBe("Hello");
  });

  it("returns an empty string unchanged", () => {
    expect(formatUppercase("")).toBe("");
  });

  it("handles a single character string", () => {
    expect(formatUppercase("a")).toBe("A");
    expect(formatUppercase("A")).toBe("A");
  });
});
