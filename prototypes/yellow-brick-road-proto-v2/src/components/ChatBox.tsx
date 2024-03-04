"use client";
import { useState } from "react";

function ChatBox({ label }) {
  const [inputValue, setInputValue] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newEntry = { type: "question", text: inputValue };
    setChatHistory([...chatHistory, newEntry]);

    setInputValue("");

    const responseEntry = { type: "answer", text: "This is a mock response." };
    setChatHistory((currentHistory) => [...currentHistory, responseEntry]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex items-center w-full">
        {label && (
          <label htmlFor="chatInput" className="chat-label mr-2 flex-none">
            {label}
          </label>
        )}
        <input
          type="text"
          id="chatInput"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Tell us more...."
          className="input-class flex-grow" // Adjusted for Flexbox; `flex-grow` makes it fill available space
        />
        <button type="submit" className="button-class ml-2">
          Send
        </button>
      </form>
      <div className="chat-history">
        {chatHistory.map((entry, index) => (
          <div
            key={index}
            className={
              entry.type === "question" ? "question-class" : "answer-class"
            }
          >
            {entry.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChatBox;
