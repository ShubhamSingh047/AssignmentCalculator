import { render, screen, fireEvent } from "@testing-library/react";
import HomePage from "../pages/HomePage";

describe("HomePage Component", () => {
  test("renders the input field, calculate button, and handles calculation", () => {
    render(<HomePage />);

    // Check if the input field is present
    const inputElement = screen.getByPlaceholderText(
      /Enter numbers separated by commas or newlines/i
    );
    expect(inputElement).toBeInTheDocument();

    // Check if the button is present
    const buttonElement = screen.getByText(/Calculate/i);
    expect(buttonElement).toBeInTheDocument();

    // Simulate user input
    fireEvent.change(inputElement, { target: { value: "1,2,3" } });
    expect((inputElement as HTMLInputElement).value).toBe("1,2,3");

    // Simulate button click
    fireEvent.click(buttonElement);

    // Check if the result is displayed
    const resultElement = screen.getByText(/Result: 6/i);
    expect(resultElement).toBeInTheDocument();
  });
});
