import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render } from "@testing-library/react";

import About from "./About";

describe("About", () => {
  it("renders without errors", () => {
    render(<About />);
  });
  it("contains the 'About Page' text", () => {
    const { container } = render(<About />);
    expect(container.textContent).toContain("About Page");
  });
  // Add more tests specific to the About component if needed
});
