import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route } from "react-router-dom";
import Content from "./Content";
window.scrollTo = jest.fn();

describe("Content", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  afterAll(() => {
    jest.clearAllMocks();
  });
  it("renders About component when on '/' route", () => {
    render(
      <MemoryRouter initialEntries={["#"]}>
        <Content />
      </MemoryRouter>
    );

    expect(screen.getByText("Thank you")).toBeInTheDocument();
  });
  it("renders Projects component when on '/projects/' route", () => {
    render(
      <MemoryRouter initialEntries={["/projects/"]}>
        <Content />
      </MemoryRouter>
    );

    expect(screen.getByText("Projects Page")).toBeInTheDocument();
  });

  it("renders Shop component when on '/shop/' route", () => {
    render(
      <MemoryRouter initialEntries={["/shop/"]}>
        <Content />
      </MemoryRouter>
    );

    expect(screen.getByText("Shop Page")).toBeInTheDocument();
  });

  it("renders ContactMe component when on '/contactme/' route", () => {
    render(
      <MemoryRouter initialEntries={["/contactme/"]}>
        <Content />
      </MemoryRouter>
    );

    expect(screen.getByText("ContactMe Page")).toBeInTheDocument();
  });

  it("navigates to the '/' route when an unknown path is provided", () => {
    render(
      <MemoryRouter initialEntries={["/unknown"]}>
        <Content />
      </MemoryRouter>
    );

    expect(screen.getByText("Thank you")).toBeInTheDocument();
  });
});
