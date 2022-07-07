import './App.css';
import { useNavigate, useState, useEFfect } from 'react-router-dom';

function App() {

  const navigate = useNavigate();

  return (
    <div className="App">
      <main>
         <h1>Quizzical</h1>
         <p>Some description if needed</p>
         <button onClick={() => navigate("/quiz")}>Start quiz</button>
      </main>
    </div>
  );
}

export default App;
