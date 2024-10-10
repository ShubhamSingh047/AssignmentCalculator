import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Numpad from "../components/Numpad";

// Mock functions for the onClick and onBackspace props
const mockOnClick = jest.fn();
const mockOnBackspace = jest.fn();

describe("Numpad Component", () => {
  beforeEach(() => {
    render(<Numpad onClick={mockOnClick} onBackspace={mockOnBackspace} />);
  });

  test("renders all number and special buttons", () => {
    // Ensure that all number and special buttons are rendered
    const values = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "0",
      "+",
      ",",
      '"',
      "⌫",
    ];

    values.forEach((value) => {
      expect(screen.getByText(value)).toBeInTheDocument();
    });
  });

  test("calls onClick when number buttons are clicked", () => {
    // Find a number button and click it
    const button = screen.getByText("1");
    fireEvent.click(button);

    // Verify that mockOnClick is called with the correct value
    expect(mockOnClick).toHaveBeenCalledWith("1");
  });

  test("calls onClick when special buttons are clicked", () => {
    // Find the plus button and click it
    const plusButton = screen.getByText("+");
    fireEvent.click(plusButton);
    expect(mockOnClick).toHaveBeenCalledWith("+");

    // Find the comma button and click it
    const commaButton = screen.getByText(",");
    fireEvent.click(commaButton);
    expect(mockOnClick).toHaveBeenCalledWith(",");

    // Find the quotation mark button and click it
    const quoteButton = screen.getByText('"');
    fireEvent.click(quoteButton);
    expect(mockOnClick).toHaveBeenCalledWith('"');
  });

  test("calls onBackspace when backspace button is clicked", () => {
    // Find the backspace button and click it
    const backspaceButton = screen.getByText("⌫");
    fireEvent.click(backspaceButton);

    // Verify that mockOnBackspace is called
    expect(mockOnBackspace).toHaveBeenCalled();
  });
});
