import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  it("renders footer section with correct links and styles", () => {
    render(<Footer />);

    // Test the correct links
    const linkedinLink = screen.getByTestId("linkedin-link");
    const githubLink = screen.getByTestId("github-link");
    expect(linkedinLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/neimayeganeh/"
    );
    expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/Neima-Yeganeh"
    );

    // Your other test assertions...
  });
});
