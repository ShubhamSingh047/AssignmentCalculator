import { render, screen, fireEvent } from "@testing-library/react";
import HomePage from "../pages/HomePage";

describe("HomePage Component", () => {
  // Test to check if the input field is rendered
  test("renders the input field for entering numbers", () => {
    render(<HomePage />);
    const inputElement = screen.getByPlaceholderText(
      /Enter numbers separated by delimiters/i
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
      /Enter numbers separated by delimiters/i
    );
    const buttonElement = screen.getByText(/calculate/i);

    // Enter numbers into the input field
    fireEvent.change(inputElement, { target: { value: "1,2,3" } });
    fireEvent.click(buttonElement);

    // Check if the result is displayed
    const resultElement = screen.getByDisplayValue(/result: 6/i);
    expect(resultElement).toBeInTheDocument();
  });

 // Test to check if an error message is displayed for negative numbers
 test("displays an error message for negative numbers", async () => {
    render(<HomePage />);
    const inputElement = screen.getByPlaceholderText(/Enter numbers separated by delimiters/i);
    const buttonElement = screen.getByText(/calculate/i);

    // Enter negative numbers into the input field
    fireEvent.change(inputElement, { target: { value: "1,-2,3" } });
    fireEvent.click(buttonElement);

    // Use data-testid to find the error message
    const errorElement = await screen.findByTestId("error-message");
    expect(errorElement).toHaveTextContent("Negative numbers are not allowed: -2");
  });

  // Test to check if an error message is displayed for unmatched quotes
  test("displays an error message for unmatched double quotes", () => {
    render(<HomePage />);
    const inputElement = screen.getByPlaceholderText(
      /Enter numbers separated by delimiters/i
    );
    const buttonElement = screen.getByText(/calculate/i);

    // Enter input with unmatched quotes
    fireEvent.change(inputElement, { target: { value: '1,2,"3' } });
    fireEvent.click(buttonElement);

    // Check if the error message is displayed
    const errorElement = screen.getByText(/unmatched double quotes detected/i);
    expect(errorElement).toBeInTheDocument();
  });

  // Test to check if an error message is displayed for incomplete input
  test("displays an error message for incomplete input", () => {
    render(<HomePage />);
    const inputElement = screen.getByPlaceholderText(
      /Enter numbers separated by delimiters/i
    );
    const buttonElement = screen.getByText(/calculate/i);

    // Enter input ending with a comma
    fireEvent.change(inputElement, { target: { value: "1,2," } });
    fireEvent.click(buttonElement);

    // Check if the error message is displayed
    const errorElement = screen.getByText(
      /invalid input. please make sure to end with a valid number./i
    );
    expect(errorElement).toBeInTheDocument();
  });

  // Test to check if an error message is displayed for unsupported characters
  test("displays an error message for unsupported characters", async () => {
    render(<HomePage />);
    const inputElement = screen.getByPlaceholderText(
      /Enter numbers separated by delimiters/i
    );
    const buttonElement = screen.getByText(/calculate/i);

    // Enter invalid characters into the input field
    fireEvent.change(inputElement, { target: { value: "1,2,3,a" } });
    fireEvent.click(buttonElement);

    // Use data-testid to find the error message
    const errorElement = await screen.findByTestId("error-message");
    expect(errorElement).toHaveTextContent(
      "Invalid characters detected. Only numbers, commas, newlines, and double quotes are allowed."
    );
  });
});
