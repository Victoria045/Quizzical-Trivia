import React, { useState,useEffect } from "react";
import ShowResults from "./ShowResults";
import Quiz from "./Quiz";

export default function QuizComponent() {

const [quizzlettData, setquizzlettData] = useState([]);
const [attempts, setAttempts] = useState(0);
const [rendered, setRendered] = useState(false);
const [done, setDone] = useState(false);
const [results, setResults] = useState(0);

useEffect(() => {
  const apiUrl = "https://opentdb.com/api.php?amount=5"
  fetch(apiUrl)
      .then(res => res.json())
      .then(data => quizzes(data.results))
}, [attempts])


function quizzes(quizElements) {
  setquizzlettData(
    quizElements.map(quizItem => ({
      question: parseHTML(quizItem.question),
      answers: getAllAnswers(quizItem.correct_answer, quizItem.incorrect_answers),
      correctAnswer: quizItem.correct_answer,
      selectedAnswer: " "
    }))
  );
  setRendered(true);
}

function getAllAnswers(correct, incorrect) {
  const allAnswers = []
  const randAns = Math.floor(Math.random() * (incorrect.length + 1))
  let j = 0;
  for (let i = 0; i < incorrect.length + 1; i++) {
    if (i === randAns) {
      allAnswers.push(parseHTML(correct));
    }
    else {
      allAnswers.push(parseHTML(incorrect[j]))
      j++;
    }
  }
  return allAnswers;
}

function parseHTML(data) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(data, "text/html");
  return doc.documentElement.textContent;
}

function handleClickedAnswer(question, answer) {
  setquizzlettData(prevQuizzletData => prevQuizzletData.map(
    quiz => quiz.question === question ? {
      ...quiz, selectedAnswer: answer
    } :
    quiz
    ));
}

function handleCheckAnswers() {
  let correct = 0;
  let completed = true;
  quizzlettData.forEach(quiz => {
    if (!quiz.selectedAnswer) {
      completed = false;
    }
    if (quiz.selectedAnswer === quiz.correctAnswer) {
      correct ++
    }
  });
  setResults(correct);
  setDone(prevDone => {
    if (completed && !prevDone) {
      return true;
    }
  });
}

function handleStartOver() {
  setquizzlettData([]);
  setDone(false);
  if (!isNaN(attempts)) {
    setAttempts(prevAttempts => prevAttempts + 1)
  }
  setRendered(false)
}


  const quizze = quizzlettData?.map(quiz => {
    return <Quiz 
              key={quiz.question}
              quiz={quiz}
              handleClickedAnswer={handleClickedAnswer}
              done={done}
            />
  })

  return (
    <div>
      <div className="quiz-container">
        {quizze}
      </div>
      {done && (
        <ShowResults
          results={results}
          totalAnswers={5}
          handleStartOver={handleStartOver}
        />
      )}
      {rendered && !done && (
        <button className="check--answers" onClick={handleCheckAnswers}>
          Check answers
        </button>
      )}
    </div>
  )
}