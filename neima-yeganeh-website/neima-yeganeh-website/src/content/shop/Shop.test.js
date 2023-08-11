import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render } from "@testing-library/react";

import Shop from "./Shop";

describe("Shop", () => {
  it("renders without errors", () => {
    render(<Shop />);
  });
  it("contains the 'Shop Page' text", () => {
    const { container } = render(<Shop />);
    expect(container.textContent).toContain("Shop Page");
  });
  // Add more tests specific to the Shop component if needed
});
