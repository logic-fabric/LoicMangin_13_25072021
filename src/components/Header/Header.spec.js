import { MemoryRouter } from "react-router";
import { render, screen } from "@testing-library/react";

import { Header } from "./Header";

describe("GIVEN a user on a page with a Header", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
  });

  test("THEN the Header contains a logo with an alt text", () => {
    const logo = screen.getByAltText(/Argent Bank/i);

    expect(logo).toBeTruthy();
  });

  test("THEN there is a navigation with a list and 2 listitems for the main links", () => {
    const navElement = screen.getByRole("navigation");
    expect(navElement).toBeTruthy();

    const listElement = screen.getByRole("list");
    expect(listElement).toBeTruthy();

    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).toBeTruthy();
    expect(listItemElements).toHaveLength(2);
  });

  test("THEN the Header contains 2 links", () => {
    const links = screen.getAllByRole("link");

    expect(links).toHaveLength(2);
  });

  test("THEN there is a link called Sign In", () => {
    const links = screen.getAllByRole("link");
    const regex = new RegExp(/Sign In/i);

    expect(links.some((elt) => regex.test(elt.textContent))).toBeTruthy();
  });
});
