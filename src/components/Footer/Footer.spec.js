import { render, screen } from "@testing-library/react";

import { Footer } from "./Footer";

describe("GIVEN a user on a page with a Footer", () => {
  beforeEach(() => {
    render(<Footer />);
  });

  test("THEN the Footer contains a copyright Argent Bank", () => {
    const copyright = screen.getByText(/copyright .*Argent Bank/i);

    expect(copyright).toBeTruthy();
  });
});
