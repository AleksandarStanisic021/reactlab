import React from "react";

const Quiz = () => {
  const questionBank = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Earth", "Jupiter", "Saturn", "Mars"],
      answer: "Jupiter",
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Au", "Ag", "Fe", "Hg"],
      answer: "Au",
    },
  ];

  return (
    <div>
      <h2>Question 1</h2>
      <p className="question">{questionBank[0].question}</p>
      {questionBank[0]["options"].map((option) => (
        <button className="option">{option}</button>
      ))}
      <div className="nav-buttons">
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>
  );
};

export default Quiz;
