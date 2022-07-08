import './App.css';
import React, { useState, useEFfect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import QuizComponent from './components/QuizComponent';

function App() {

  const navigate = useNavigate();
  const [quizzlettData, setquizzlettData] = useState([]);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10")
        .then(res => res.json())
        .then(data => setquizzlettData(data.results))
  }, [])

  console.log(quizzlettData)

  const quizzes = quizzlettData?.map(quiz => {
      return <div> 
        <h3>{quiz.question}</h3>
        <div>
          {quiz.incorrect_answers.map(answer => {
            return <button>{answer}</button>
          })}
          <button>{quiz.correct_answer}</button>
          <hr />
        </div>
      </div>

  })

  function checkAnswers() {
    console.log("Clicked")
  }

  return (
    <div className="App">
      {/* <main>
         <h1>Quizzical</h1>
         <p>Some description if needed</p>
         <button onClick={() => navigate("/quiz")}>Start quiz</button>
      </main> */}
      {quizzes}
      <button onClick={checkAnswers}>check answers</button>
    </div>
  );
}

export default App;
