import React from "react";
import { FaCalculator, FaMoon, FaSun } from "react-icons/fa";

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <header className="flex items-center justify-between bg-blue-600 text-white p-4 shadow-md fixed top-0 left-0 right-0">
      <div className="flex items-center space-x-3">
        <FaCalculator size={24} />
        <h1 className="text-2xl font-bold">String Calculator Application</h1>
      </div>
      <button
        onClick={toggleDarkMode}
        className="p-2 rounded-md focus:outline-none"
      >
        {isDarkMode ? (
          <FaSun size={24} className="text-yellow-300" />
        ) : (
          <FaMoon size={24} className="text-gray-300" />
        )}
      </button>
    </header>
  );
};

export default Header;
