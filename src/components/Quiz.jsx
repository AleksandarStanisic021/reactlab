import React from "react";
import { useState } from "react";

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

  const initialAnswers = [null, null, null];

  const [UserAnswers, setUsersAnswers] = useState(initialAnswers);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  function HandleSelectOPtion(option) {
    const newAnswers = [...UserAnswers];
    newAnswers[currentQuestion] = option;
    setUsersAnswers(newAnswers);
    console.log(newAnswers);
  }

  function gotoNext() {
    if (currentQuestion < 2) setCurrentQuestion(currentQuestion + 1);
  }

  function gotoPrev() {
    if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
  }

  const selectesAnswer = UserAnswers[currentQuestion];

  return (
    <>
      <h2>Question {currentQuestion + 1}</h2>
      <p className="question">{questionBank[currentQuestion].question}</p>
      {questionBank[currentQuestion]["options"].map((option) => (
        <button
          onClick={() => HandleSelectOPtion(option)}
          key={Math.random()}
          className={"option" + (selectesAnswer === option ? " selected" : "")}>
          {option}
        </button>
      ))}
      <div className="nav-buttons">
        <button onClick={gotoPrev} disabled={currentQuestion === 0}>
          Previous
        </button>
        <button onClick={gotoNext} disabled={selectesAnswer === null}>
          {currentQuestion === questionBank.length - 1 ? "Finish Quiz" : "Next"}
        </button>
      </div>
    </>
  );
};

export default Quiz;
