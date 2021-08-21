import { render, screen } from "@testing-library/react";

import { Home } from "./Home";

describe("GIVEN a user on Home page", () => {
  beforeEach(() => {
    render(<Home />);
  });

  test("THEN theres is some promotional sentences", () => {
    const promotionalTitle = screen.getByText(/Promoted Content/i);

    expect(promotionalTitle).toBeTruthy();
  });
});
