import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render } from "@testing-library/react";

import ContactMe from "./ContactMe";

describe("ContactMe", () => {
  it("renders without errors", () => {
    render(<ContactMe />);
  });
  it("contains the 'ContactMe Page' text", () => {
    const { container } = render(<ContactMe />);
    expect(container.textContent).toContain("ContactMe Page");
  });
  // Add more tests specific to the ContactMe component if needed
});
