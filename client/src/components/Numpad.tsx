import React from "react";

interface NumpadProps {
  onClick: (value: string) => void;
  onBackspace: () => void; // Added onBackspace prop
}

const Numpad: React.FC<NumpadProps> = ({ onClick, onBackspace }) => {
  // Values for the numpad excluding the backspace and quotation mark
  const values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", ","];

  return (
    <div className="flex flex-col space-y-4 mt-8">
      <div className="grid grid-cols-3 gap-4">
        {values.map((value) => (
          <button
            key={value}
            onClick={() => onClick(value)}
            className="bg-gray-300 text-black p-4 rounded-md hover:bg-gray-400 transition duration-200"
          >
            {value}
          </button>
        ))}
      </div>
      {/* Quotation and Backspace buttons positioned below with the same width and height */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        <button
          onClick={onBackspace}
          className="bg-gray-300 text-black p-4 rounded-md hover:bg-gray-400 transition duration-200"
        >
          ⌫
        </button>
        <button
          onClick={() => onClick(`"`)}
          className="bg-gray-300 text-black p-4 rounded-md hover:bg-gray-400 transition duration-200"
        >
          "
        </button>
        <div className="col-span-1"></div>
      </div>
    </div>
  );
};

export default Numpad;
