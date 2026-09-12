import React from "react";
import "./index.css";
import Quiz from "./components/Quiz";
import Results from "./components/Results";

const App = () => {
  return (
    <div className="app-container">
      <h1>Quiz App</h1>
      <Quiz />
    </div>
  );
};

export default App;
