import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Numpad from "../components/Numpad";
import { add } from "../utils/calculationUtils"; // Import the add function

const HomePage: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null); // Reference to the input field

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleCalculate = () => {
    try {
      setError(""); // Clear any previous errors
      const cleanedInput = input.replace(/["]/g, ""); // Remove quotes if any

      // Regex to check for unsupported characters
      if (/[^0-9,\n"]/g.test(input)) {
        throw new Error(
          "Invalid characters detected. Only numbers, commas, newlines, and double quotes are allowed."
        );
      }

      // Check for unmatched quotes
      const quoteCount = (input.match(/"/g) || []).length;
      if (quoteCount % 2 !== 0) {
        throw new Error(
          "Unmatched double quotes detected. Please provide properly paired double quotes."
        );
      }

      // Check if input is incomplete or invalid (e.g., ends with a comma or newline without a number)
      if (
        /[,|\n]+$/.test(cleanedInput) ||
        cleanedInput.trim() === "" ||
        /^[,|\n]+$/.test(cleanedInput)
      ) {
        throw new Error(
          "Invalid input. Please make sure to end with a valid number."
        );
      }

      const formattedInput = cleanedInput.replace(/\+/g, ",");
      const sum = add(formattedInput); // Calculate the sum using the add function
      setResult(sum.toString());
    } catch (e) {
      if (e instanceof Error) {
        setResult(""); // Clear previous results
        setError(e.message);
      }
    }
  };

  const handleNumpadClick = (value: string) => {
    if (inputRef.current) {
      const startPos = inputRef.current.selectionStart ?? input.length;
      const endPos = inputRef.current.selectionEnd ?? input.length;
      const newValue = input.slice(0, startPos) + value + input.slice(endPos);
      setInput(newValue);

      // Move the cursor after the inserted value
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.selectionStart = inputRef.current.selectionEnd =
            startPos + value.length;
        }
      }, 0);
    }
  };

  const handleBackspace = () => {
    if (inputRef.current) {
      const startPos = inputRef.current.selectionStart ?? input.length;
      const endPos = inputRef.current.selectionEnd ?? input.length;

      if (startPos !== endPos) {
        // If there's a selection, delete the entire selection
        const newValue = input.slice(0, startPos) + input.slice(endPos);
        setInput(newValue);
        setTimeout(() => {
          if (inputRef.current) {
            inputRef.current.selectionStart = inputRef.current.selectionEnd =
              startPos;
          }
        }, 0);
      } else if (startPos > 0) {
        // Delete the character before the cursor
        const newValue = input.slice(0, startPos - 1) + input.slice(endPos);
        setInput(newValue);
        setTimeout(() => {
          if (inputRef.current) {
            inputRef.current.selectionStart = inputRef.current.selectionEnd =
              startPos - 1;
          }
        }, 0);
      }
    }
  };

  // useEffect to handle keyboard events
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setInput(""); // Clear input when Escape key is pressed
      } else if (event.key === "Enter") {
        handleCalculate(); // Trigger calculation when Enter key is pressed
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [input]); // Adding input to the dependency array ensures the updated state is used

  return (
    <div
      className={`min-h-screen pt-20 flex items-center justify-center transition duration-300 ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      <div className="w-full max-w-lg p-10 rounded-md shadow-md bg-white dark:bg-gray-800 dark:text-white mt-10 mx-4">
        {/* Calculator Input and Button */}
        <div className="flex flex-col items-center space-y-6 w-full">
          <input
            type="text"
            placeholder="Enter numbers separated by delimiters"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            ref={inputRef} // Set the input reference
            className="p-4 border rounded-md text-black w-full"
          />
          <button
            onClick={handleCalculate}
            className="bg-blue-500 text-white py-3 px-8 rounded-md hover:bg-blue-600 transition duration-200 w-full"
          >
            Calculate
          </button>
        </div>

        {/* Non-editable Result Input */}
        <div className="flex flex-col items-center space-y-4 w-full">
          <input
            type="text"
            value={result ? `Result: ${result}` : ""}
            readOnly
            className="p-4 border rounded-md text-black w-full mt-4 bg-gray-200 cursor-not-allowed"
            placeholder="Result will be displayed here"
          />
        </div>

        {/* Numpad Component */}
        <Numpad onClick={handleNumpadClick} onBackspace={handleBackspace} />

        {/* Error Display */}
        {error && <p className="mt-6 text-red-500 text-lg">{error}</p>}
      </div>
    </div>
  );
};

export default HomePage;
