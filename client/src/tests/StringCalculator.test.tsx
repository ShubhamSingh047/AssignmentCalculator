import { add } from "../utils/calculationUtils";

// Test suite for the add function
describe("StringCalculator Add Function", () => {
  // Test to check if an empty string returns 0
  test("returns 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  // Test to check if a single number returns itself
  test("returns the number itself for a single number", () => {
    expect(add("1")).toBe(1);
  });

  // Test to check if two comma-separated numbers return their sum
  test("returns the sum of two comma-separated numbers", () => {
    expect(add("1,5")).toBe(6);
  });

  // Test to check if multiple comma-separated numbers return their sum
  test("returns the sum of multiple comma-separated numbers", () => {
    expect(add("1,2,3,4")).toBe(10);
  });

  // Test to check if the add function can handle new line characters as delimiters
  test("returns the sum when numbers are separated by new line characters and commas", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  // Test to check if the add function can handle custom delimiters
  test("returns the sum when using a custom delimiter specified in the input", () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  // Test to check if the add function throws an exception for negative numbers
  test("throws an exception for negative numbers", () => {
    expect(() => add("1,-2,3,-4")).toThrow(
      "negative numbers not allowed: -2, -4"
    );
  });
});
