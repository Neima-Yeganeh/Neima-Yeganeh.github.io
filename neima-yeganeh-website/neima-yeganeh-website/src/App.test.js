import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom"; // Import from react-router-dom

window.scrollTo = jest.fn();

describe("App", () => {
  it("renders without errors", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  });

  it("contains the Header component", () => {
    const { getByRole } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const headerElement = getByRole("banner");
    expect(headerElement).toBeInTheDocument();
  });

  it("contains the Content component", () => {
    const { getByRole } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const contentElement = getByRole("main");
    expect(contentElement).toBeInTheDocument();
  });

  it("contains the Footer component", () => {
    const { getByRole } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const footerElement = getByRole("contentinfo");
    expect(footerElement).toBeInTheDocument();
  });

  // You can add more tests to verify specific behaviors of your App component
});
