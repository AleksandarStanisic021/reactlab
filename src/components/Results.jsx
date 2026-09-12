function Results({ UserAnswers, questionBank, restart }) {
  function getScore() {
    let finalscore = 0;

    UserAnswers.forEach((answer, index) => {
      if (answer === questionBank[index].answer) finalscore++;
    });
    return finalscore;
  }

  const score = getScore();
  return (
    <div>
      <h2>Quiz Completed</h2>
      <p>Your Score :{score}</p>
      <button className="restart-button" onClick={restart}>
        Restart Quiz
      </button>
    </div>
  );
}
export default Results;
