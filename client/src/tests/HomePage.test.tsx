import { render, screen, fireEvent } from "@testing-library/react";
import HomePage from "../pages/HomePage";

describe("HomePage Component", () => {
  // Test to check if the input field is rendered
  test("renders the input field for entering numbers", () => {
    render(<HomePage />);
    const inputElement = screen.getByPlaceholderText(
      /Enter numbers separated by commas or newlines/i
    );
    expect(inputElement).toBeInTheDocument();
  });

  // Test to check if the calculate button is rendered
  test("renders the calculate button", () => {
    render(<HomePage />);
    const buttonElement = screen.getByText(/calculate/i);
    expect(buttonElement).toBeInTheDocument();
  });

  // Test to check if clicking the calculate button shows the result
  test("displays the result after clicking the calculate button", () => {
    render(<HomePage />);
    const inputElement = screen.getByPlaceholderText(
      /Enter numbers separated by commas or newlines/i
    );
    const buttonElement = screen.getByText(/calculate/i);

    // Enter numbers into the input field
    fireEvent.change(inputElement, { target: { value: "1,2,3" } });
    fireEvent.click(buttonElement);

    // Check if the result is displayed
    const resultElement = screen.getByText(/result: 6/i);
    expect(resultElement).toBeInTheDocument();
  });

  // Test to check if an error message is displayed for negative numbers
  test("displays an error message for negative numbers", () => {
    render(<HomePage />);
    const inputElement = screen.getByPlaceholderText(
      /Enter numbers separated by commas or newlines/i
    );
    const buttonElement = screen.getByText(/calculate/i);

    // Enter negative numbers into the input field
    fireEvent.change(inputElement, { target: { value: "1,-2,3" } });
    fireEvent.click(buttonElement);

    // Check if the error message is displayed
    const errorElement = screen.getByText(/negative numbers not allowed: -2/i);
    expect(errorElement).toBeInTheDocument();
  });
});
