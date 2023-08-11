import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";

describe("Header", () => {
  let container, getByText, getAllByRole;

  beforeEach(() => {
    const renderResult = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    container = renderResult.container;
    getByText = renderResult.getByText;
    getAllByRole = renderResult.getAllByRole;
  });
  it("renders without errors", () => {
    // render
  });

  it("renders the correct number of navigation items", () => {
    const navItems = getAllByRole("tab");
    expect(navItems.length).toBe(4);
  });

  it("displays correct labels for navigation items", () => {
    expect(getByText("About")).toBeInTheDocument();
    expect(getByText("Projects")).toBeInTheDocument();
    expect(getByText("Shop")).toBeInTheDocument();
    expect(getByText("Contact Me")).toBeInTheDocument();
  });

  it("renders header with navbar component", () => {
    const header = container.querySelector(".header");
    const navbar = container.querySelector(".Navbar");
    const aboutTab = getByText("About");
    const projectsTab = getByText("Projects");
    const shopTab = getByText("Shop");
    const contactTab = getByText("Contact Me");

    expect(header).toBeInTheDocument();
    expect(navbar).toBeInTheDocument();
    expect(aboutTab).toBeInTheDocument();
    expect(projectsTab).toBeInTheDocument();
    expect(shopTab).toBeInTheDocument();
    expect(contactTab).toBeInTheDocument();
  });
});
