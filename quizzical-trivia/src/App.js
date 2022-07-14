import './App.css';
import React, { useState, useEffect } from 'react';
import QuizComponent from './components/QuizComponent';
import BlueBlob from './assets/blob6.png';

function App() {

  const [mainPage, setMainPage] = useState(true);

  return (
    <div className="App">
      {mainPage && <main>
         <h1>Quizzical</h1>
         <p>Let's attempt fun questions!</p>
         <button onClick={() => setMainPage(false)}>Start quiz</button>
      </main>}
      {!mainPage && <QuizComponent />}
      <div className='blue-blob'>
        <img src={BlueBlob}/>
      </div>
    </div>
  );
}

export default App;
