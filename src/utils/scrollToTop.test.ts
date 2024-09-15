import { scrollToTop } from "./scrollToTop";

describe("scrollToTop util test", () => {
  beforeEach(() => {
    jest.spyOn(window, "scrollTo").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should call window.scrollTo with top 0 and smooth behavior", () => {
    scrollToTop();

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: "smooth",
    });
  });
});
