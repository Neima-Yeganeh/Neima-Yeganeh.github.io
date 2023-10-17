import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render } from "@testing-library/react";

import Projects from "./Projects";

describe("Projects", () => {
  it("renders without errors", () => {
    render(<Projects />);
  });
  it("contains the 'Projects Page' text", () => {
    const { container } = render(<Projects />);
    expect(container.textContent).toContain("Projects Page");
  });
  // Add more tests specific to the Projects component if needed
});
