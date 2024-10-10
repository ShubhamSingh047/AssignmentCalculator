import React, { useState } from "react";
import { add } from "../utils/calculationUtils";

const HomePage: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = () => {
    try {
      const sum = add(input);
      setResult(sum);
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className="calculator p-8 max-w-md mx-auto bg-white rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4">String Calculator</h1>
      <input
        type="text"
        className="w-full p-2 border border-gray-300 rounded mb-4"
        placeholder="Enter numbers separated by commas or newlines"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={handleCalculate}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Calculate
      </button>
      {result !== null && (
        <div className="mt-4 text-lg font-semibold">Result: {result}</div>
      )}
    </div>
  );
};

export default HomePage;
