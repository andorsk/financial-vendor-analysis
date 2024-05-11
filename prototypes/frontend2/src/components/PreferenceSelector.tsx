import React, { useState, useEffect } from "react";

const options = ["not important", "neutral", "prefer", "important", "critical"];

const optionValues: { [key: string]: number } = {
  "not important": 1,
  neutral: 2,
  prefer: 3,
  important: 4,
  critical: 5,
};

type PreferenceSelectorProps = {
  onChange: (preference: number) => void;
};
function PreferenceSelector({ onChange }: PreferenceSelectorProps) {
  const [selectedOption, setSelectedOption] = useState("neutral");
  const [isOpen, setIsOpen] = useState(false);

  const getColor = (option: any) => {
    switch (option) {
      case "not important":
        return "text-gray-400";
      case "neutral":
        return "text-yellow-500";
      case "prefer":
        return "text-green-400";
      case "important":
        return "text-pink-500";
      case "critical":
        return "text-red-500";
      default:
        return "text-gray-700";
    }
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    handleChange(selectedOption);
  }, []);

  const handleChange = (option: any) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(optionValues[option]);
  };

  return (
    <div className="relative">
      <button
        className={`px-4 py-2 rounded-md ${getColor(
          selectedOption,
        )} bg-gray-200 text-gray-700 focus:outline-none`}
        onClick={handleToggle}
      >
        {selectedOption}
        <svg className="w-4 h-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-.707.293z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <ul className="absolute top-10 left-0 w-40 bg-white border border-gray-200 rounded-md shadow-md z-10">
          {options.map((option) => (
            <li
              key={option}
              className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${getColor(
                option,
              )}`}
              onClick={() => handleChange(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PreferenceSelector;
