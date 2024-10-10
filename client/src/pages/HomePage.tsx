import React, { useState } from "react";

const HomePage: React.FC = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = () => {
    try {
      // Clear previous error
      setError(null);

      // Check for negative numbers
      const numbers = input.split(/,|\n/).map(Number);
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
      setError(e.message);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter numbers separated by commas or newlines"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleCalculate}>Calculate</button>
      {result && <div>{result}</div>}
      {error && <div>{error}</div>}
    </div>
  );
};

export default HomePage;
