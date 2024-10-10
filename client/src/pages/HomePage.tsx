import React, { useState } from "react";

const HomePage: React.FC = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = () => {
    try {
      // Clear previous error
      setError(null);

      let delimiter = /,|\n/; // Default delimiters: comma or new line
      let parsedInput = input;

      // Check if the string has a custom delimiter
      if (parsedInput.startsWith("//")) {
        const parts = parsedInput.split("\n");
        delimiter = new RegExp(parts[0].slice(2)); // Extract the custom delimiter
        parsedInput = parts[1];
      }

      // Split by the delimiter(s) and calculate the sum
      const numbers = parsedInput.split(delimiter).map(Number);

      // Check for negative numbers
      const negativeNumbers = numbers.filter((num) => num < 0);
      if (negativeNumbers.length > 0) {
        throw new Error(
          `negative numbers not allowed: ${negativeNumbers.join(", ")}`
        );
      }

      // Calculate the sum
      const sum = numbers.reduce((acc, num) => acc + num, 0);
      setResult(`Result: ${sum}`);
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      }
    }
  };

  return (
    <div>
      <h1>String Calculator</h1>
      <input
        type="text"
        placeholder="Enter numbers separated by commas, newlines, or custom delimiter"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleCalculate}>Calculate</button>
      {result && <div>{result}</div>}
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
};

export default HomePage;
