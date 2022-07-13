import './App.css';
import React, { useState, useEffect } from 'react';
import QuizComponent from './components/QuizComponent';

function App() {

  // const [quizzlettData, setquizzlettData] = useState([]);
  const [mainPage, setMainPage] = useState(true);

  // useEffect(() => {
  //   const apiUrl = "https://opentdb.com/api.php?amount=10"
  //   fetch(apiUrl)
  //       .then(res => res.json())
  //       .then(data => setquizzlettData(data.results))
  // }, [])

  // console.log(quizzlettData)


  // const quizze = quizzlettData?.map(quiz => {
  //   return <div>
  //     <h3>{quiz.question}</h3>
  //     <div>
  //       {quiz.correctAnswers.map(answer => {
  //         return <button type='button'>{answer}</button>
  //       })}
  //       {/* <button type='button'>{quiz.correct_answer}</button> */}
  //       <hr />
  //     </div>
  //   </div>
  // })

  return (
    <div className="App">
      {mainPage && <main>
         <h1>Quizzical</h1>
         <p>Let's answer questions and get the correct answers!</p>
         <button onClick={() => setMainPage(false)}>Start quiz</button>
      </main>}
      {!mainPage && <QuizComponent />}
    </div>
  );
}

export default App;
