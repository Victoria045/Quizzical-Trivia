import React from "react";

export default function Quiz({quiz, done, handleClickedAnswer}) {
  function buttonStyle(answer) {
    const border = {
      border: answer === quiz.selectedAnswer ? "none" : "0.794239px solid #4D5B9E",
    };

    if (!done) {
      return {
        backgroundColor : quiz.selectedAnswer === answer ? "#D6DBF5" : "#F5F7FB",
        ...border,
      };
    } else {
      if (answer === quiz.selectedAnswer) {
        return {
          backgroundColor: "#94D7A2",
          color: "#4D5B9E",
          border: "none",
        };
      } else if (answer === quiz.correctAnswer) {
        return {
          backgroundColor: "#F8BCBC",
          color: "#4D5B9E",
          border: "none",
        };
    } else {
      return {
        backgroundColor: "#F5F7FB",
        border: "0.794239px solid #4D5B9E",
        color: "#4D5B9E",
      };
    }
  }
}
  return(
    <div className="quiz-container">
      <div className="quiz">{quiz.question}</div>
      <div className="answer-container">
        {quiz.answers.map((ans) => (
            <button
              key={ans}
              className="answer"
              style={buttonStyle(ans)}
              onClick={() => handleClickedAnswer(quiz.question, ans)}
            >
              {ans}
            </button>
          ))}
      </div>
      <hr />
    </div> 
  )
}