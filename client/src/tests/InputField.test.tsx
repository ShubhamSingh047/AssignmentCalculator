import { render, screen, fireEvent } from "@testing-library/react";
import InputField from "../components/InputField";

describe("InputField Component", () => {
  // Test to check if the input field renders with a placeholder
  test("renders the input field with placeholder", () => {
    render(
      <InputField placeholder="Enter numbers" value="" onChange={() => {}} />
    );
    const inputElement = screen.getByPlaceholderText(/enter numbers/i);
    expect(inputElement).toBeInTheDocument();
  });

  // Test to check if the input field calls the onChange handler when typing
  test("calls the onChange handler when typing", () => {
    const handleChange = jest.fn();
    render(
      <InputField
        placeholder="Enter numbers"
        value=""
        onChange={handleChange}
      />
    );
    const inputElement = screen.getByPlaceholderText(/enter numbers/i);
    fireEvent.change(inputElement, { target: { value: "123" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
