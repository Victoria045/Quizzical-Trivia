
// import Quiz from "./Quiz";

// export default function QuizComponent(props) {
  
//   return (
//     <>
//       {props.quizzlettData.map(quiz => (
//         <Quiz
//           key={props.quiz.question}
//           quiz={props.quiz}
//           handleCheckAnswers={props.handleCheckAnswers}
//           done={props.done}
//         />
//       ))}
//     </>
//   )
// } 

import React from "react";

export default function Quiz(props) {
  const [ quiz, done ] = props

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
          border: "none",
        };
      } else if (answer === quiz.correctAnswer) {
        return {
          backgroundColor: "#F8BCBC",
          border: "none",
        };
    } else {
      return {
        backgroundColor: "#F5F7FB",
        border: "0.794239px solid #4D5B9E",
      };
    }
  }
}
  return(
    <>
      <div>{quiz.question}</div>
      <div>
        {quiz.answers.map((ans) => (
            <button
              key={ans}
              className="answer"
              style={buttonStyle(ans)}
              onClick={() => props.handleCheckAnswers(quiz.question, ans)}
            >
              {ans}
            </button>
          ))}
      </div>
    </> 
  )
}