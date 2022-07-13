import React from "react";

export default function ShowResults({results, totalAnswers, handleStartOver}) {
  return (
    <div className="results">
      <p>
        You scored {results}/{totalAnswers} correct answers
      </p>
      <button onClick={handleStartOver} className="check--answers">
        Play again
      </button>
    </div>
  )
}