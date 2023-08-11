import "@testing-library/jest-dom/extend-expect"; // Import this line at the beginning of your test file

import React from "react";
import { render } from "@testing-library/react";
import Navbar from "./Navbar";
import { MemoryRouter } from "react-router-dom"; // Removed NavLink since it's not used

test("renders tabs with correct labels", () => {
  const { getByText } = render(
    <MemoryRouter>
      <Navbar activeTab="/projects/" />
    </MemoryRouter>
  );

  const aboutTab = getByText("About");
  const projectsTab = getByText("Projects");
  const shopTab = getByText("Shop");
  const contactTab = getByText("Contact Me");

  expect(aboutTab).toBeInTheDocument();
  expect(projectsTab).toBeInTheDocument();
  expect(shopTab).toBeInTheDocument();
  expect(contactTab).toBeInTheDocument();
});

test("activates the correct tab", () => {
  const { getByText } = render(
    <MemoryRouter>
      <Navbar activeTab="/projects/" />
    </MemoryRouter>
  );

  const projectsTab = getByText("Projects");

  expect(projectsTab).toHaveAttribute("aria-selected", "true");
});

test("has correct tab URLs", () => {
  const { getByText } = render(
    <MemoryRouter>
      <Navbar activeTab="/projects/" />
    </MemoryRouter>
  );

  const aboutTab = getByText("About");
  const projectsTab = getByText("Projects");
  const shopTab = getByText("Shop");
  const contactTab = getByText("Contact Me");

  expect(aboutTab.closest("a")).toHaveAttribute("href", "/");
  expect(projectsTab.closest("a")).toHaveAttribute("href", "/projects/");
  expect(shopTab.closest("a")).toHaveAttribute("href", "/shop/");
  expect(contactTab.closest("a")).toHaveAttribute("href", "/contactme/");
});
