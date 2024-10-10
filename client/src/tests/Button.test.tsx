import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../components/Button";

describe("Button Component", () => {
  // Test to check if the button renders with given text
  test("renders the button with provided text", () => {
    render(<Button onClick={() => {}}>Calculate</Button>);
    const buttonElement = screen.getByText(/calculate/i);
    expect(buttonElement).toBeInTheDocument();
  });

  // Test to check if the button calls the onClick handler when clicked
  test("calls the onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Calculate</Button>);
    const buttonElement = screen.getByText(/calculate/i);
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});