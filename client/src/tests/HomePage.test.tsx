import { render, screen } from "@testing-library/react";

import HomePage from "../pages/HomePage";

describe("HomePage Component", () => {
  test("renders the HomePage text", () => {
    render(<HomePage />);
    const homePageText = screen.getByText(/HomePage/i);
    expect(homePageText).toBeInTheDocument();
  });
});
